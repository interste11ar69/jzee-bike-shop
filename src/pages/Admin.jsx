import React, { useState, useEffect } from "react";
import { supabase } from "../api/supabaseClient";
import { CATEGORIES } from "../model/AppConstants";
import imageCompression from "browser-image-compression";
import { useNavigate } from "react-router-dom"; // 👈 Add this

const Admin = () => {
  const [uploading, setUploading] = useState(false);
  //logout
  const navigate = useNavigate();

  // 📦 DATA STATE
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(0);
  const ITEMS_PER_PAGE = 20;
  const [isLoadingList, setIsLoadingList] = useState(false);

  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // 🧮 HELPER
  const parsePosition = (posString) => {
    if (!posString) return { x: 50, y: 50 };
    const parts = posString.split(" ");
    if (parts.length === 2 && parts[0].includes("%")) {
      return { x: parseInt(parts[0]), y: parseInt(parts[1]) };
    }
    return { x: 50, y: 50 };
  };

  const [pos, setPos] = useState({ x: 50, y: 50 });

  const nudge = (dx, dy) => {
    setPos((prev) => {
      const newX = Math.max(0, Math.min(100, prev.x + dx));
      const newY = Math.max(0, Math.min(100, prev.y + dy));
      const newString = `${newX}% ${newY}%`;
      setFormData((f) => ({ ...f, image_position: newString }));
      return { x: newX, y: newY };
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    category: "Frames",
    price: "",
    status: "Available",
    description: "",
    image_url: "",
    image_position: "center center",
  });

  // 📡 FETCH ITEMS (Admin sees EVERYTHING, including Hidden)
  const fetchItems = async (pageIndex = 0, search = "", isReset = false) => {
    setIsLoadingList(true);

    const from = pageIndex * ITEMS_PER_PAGE;
    const to = from + ITEMS_PER_PAGE - 1;

    let query = supabase
      .from("products")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(from, to);

    if (search) {
      query = query.ilike("name", `%${search}%`);
    }

    const { data, error, count } = await query;

    if (!error) {
      setTotalCount(count || 0);
      if (isReset) {
        setItems(data);
      } else {
        setItems((prev) => [...prev, ...data]);
      }
    }
    setIsLoadingList(false);
  };

  useEffect(() => {
    fetchItems(0, "", true);
  }, []);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchTerm(val);
    setPage(0);
    fetchItems(0, val, true);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchItems(nextPage, searchTerm, false);
  };

  const handleImageUpload = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;

      console.log("1. Starting Upload Process..."); // Debug Log
      setUploading(true);

      // 1. Compress
      const options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 1080,
        useWebWorker: true,
      };
      const compressedFile = await imageCompression(file, options);
      console.log("2. Compression Complete:", compressedFile.size / 1024, "KB");

      // 2. Generate Path
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      // 3. Upload to Storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("inventory")
        .upload(filePath, compressedFile);

      if (uploadError) {
        console.error("❌ Upload Failed:", uploadError);
        throw new Error("Storage Upload Failed: " + uploadError.message);
      }
      console.log("3. Upload Success:", uploadData);

      // 4. Get the New Link
      const { data: urlData } = supabase.storage
        .from("inventory")
        .getPublicUrl(filePath);

      console.log("4. New URL Generated:", urlData.publicUrl);

      // 5. Update State
      setFormData((prev) => ({
        ...prev,
        image_url: urlData.publicUrl,
        image_position: "50% 50%",
      }));

      setPos({ x: 50, y: 50 });
      alert("Image Uploaded! Now click 'Update Item' to save.");
    } catch (error) {
      console.error("Catch Error:", error);
      alert("CRITICAL ERROR: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    const currentPos = parsePosition(item.image_position);
    setPos(currentPos);
    setFormData({
      name: item.name,
      category: item.category,
      price: item.price,
      status: item.status,
      description: item.description || "",
      image_url: item.image_url,
      image_position: item.image_position || "50% 50%",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({
      name: "",
      category: "Frames",
      price: "",
      status: "Available",
      description: "",
      image_url: "",
      image_position: "center center",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image_url) return alert("Please upload an image first!");

    const display_price = `₱${parseInt(formData.price).toLocaleString()}`;
    const productData = {
      name: formData.name,
      category: formData.category,
      price: parseInt(formData.price),
      display_price: display_price,
      status: formData.status,
      image_url: formData.image_url,
      description: formData.description,
      image_position: formData.image_position,
    };

    let error;
    if (editingId) {
      const { error: updateError } = await supabase
        .from("products")
        .update(productData)
        .eq("id", editingId);
      error = updateError;
    } else {
      const { error: insertError } = await supabase
        .from("products")
        .insert([{ ...productData, is_featured: false }]);
      error = insertError;
    }

    if (error) alert("Error: " + error.message);
    else {
      alert(editingId ? "Item Updated!" : "Item Published!");
      handleCancelEdit();
      setPage(0);
      fetchItems(0, searchTerm, true);
    }
  };

  const handleDelete = async (id) => {
    if (
      !window.confirm(
        "Delete this item? This cannot be undone. Use 'Hidden' status to Archive instead.",
      )
    )
      return;
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (!error) {
      setPage(0);
      fetchItems(0, searchTerm, true);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* === LEFT COLUMN: FORM === */}
        <div className="lg:col-span-2">
          {/* 👇 NEW HEADER WITH LOGOUT BUTTON */}
          <div className="flex justify-between items-start mb-6 border-b border-zinc-800 pb-4">
            <div>
              <h1
                className={`text-2xl font-black uppercase ${
                  editingId ? "text-blue-500" : "text-jzee-green"
                }`}
              >
                {editingId ? "Edit Item" : "Add New Item"}
              </h1>
              {editingId && (
                <button
                  onClick={handleCancelEdit}
                  className="text-[10px] font-bold text-red-500 border border-red-500 px-2 py-1 hover:bg-red-500 hover:text-white mt-2 uppercase tracking-widest"
                >
                  Cancel Edit
                </button>
              )}
            </div>

            {/* 🚪 LOGOUT BUTTON */}
            <button
              onClick={handleLogout}
              className="group flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 hover:border-red-500 hover:bg-red-500/10 transition-all rounded-sm"
              title="Sign Out"
            >
              <span className="hidden sm:block text-[10px] font-bold text-zinc-500 group-hover:text-red-500 uppercase tracking-widest">
                Logout
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-zinc-500 group-hover:text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`space-y-4 p-6 border rounded-sm ${editingId ? "bg-zinc-900 border-blue-500" : "bg-zinc-900 border-zinc-800"}`}
          >
            {/* PREVIEW AREA */}
            <div className="bg-black p-4 border border-dashed border-zinc-700 relative group">
              {formData.image_url ? (
                <div className="w-full aspect-square overflow-hidden bg-zinc-800 border border-zinc-600 relative">
                  <img
                    src={formData.image_url}
                    alt="Preview"
                    className="w-full h-full object-cover transition-all duration-300"
                    style={{ objectPosition: formData.image_position }}
                  />
                </div>
              ) : (
                <div className="aspect-square flex flex-col items-center justify-center text-zinc-500 text-xs font-bold uppercase bg-zinc-900">
                  <span className="text-4xl mb-2">📷</span>
                  <span>Tap to Select Image</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploading}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {uploading && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20">
                  <span className="text-jzee-green text-xs font-bold animate-pulse">
                    Compressing...
                  </span>
                </div>
              )}
            </div>

            {/* JOYSTICK */}
            {formData.image_url && (
              <div className="bg-zinc-950 p-4 border border-zinc-800 mt-4 rounded-sm">
                <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-2">
                  <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest">
                    Nudge Focus
                  </span>
                  <span className="text-xs font-mono font-bold text-jzee-green">
                    {formData.image_position}
                  </span>
                </div>
                <div className="flex justify-center">
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => nudge(-10, -10)}
                      className="w-10 h-10 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 hover:border-white text-zinc-400 rounded-sm flex items-center justify-center"
                    >
                      ↖
                    </button>
                    <button
                      type="button"
                      onClick={() => nudge(0, -10)}
                      className="w-10 h-10 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 hover:border-white text-white rounded-sm flex items-center justify-center"
                    >
                      ⬆
                    </button>
                    <button
                      type="button"
                      onClick={() => nudge(10, -10)}
                      className="w-10 h-10 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 hover:border-white text-zinc-400 rounded-sm flex items-center justify-center"
                    >
                      ↗
                    </button>
                    <button
                      type="button"
                      onClick={() => nudge(-10, 0)}
                      className="w-10 h-10 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 hover:border-white text-white rounded-sm flex items-center justify-center"
                    >
                      ⬅
                    </button>
                    <button
                      type="button"
                      onClick={() => nudge(0, 0)}
                      className="w-10 h-10 bg-jzee-green text-black font-black border border-jzee-green hover:brightness-110 rounded-full flex items-center justify-center"
                    >
                      •
                    </button>
                    <button
                      type="button"
                      onClick={() => nudge(10, 0)}
                      className="w-10 h-10 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 hover:border-white text-white rounded-sm flex items-center justify-center"
                    >
                      ➡
                    </button>
                    <button
                      type="button"
                      onClick={() => nudge(-10, 10)}
                      className="w-10 h-10 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 hover:border-white text-zinc-400 rounded-sm flex items-center justify-center"
                    >
                      ↙
                    </button>
                    <button
                      type="button"
                      onClick={() => nudge(0, 10)}
                      className="w-10 h-10 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 hover:border-white text-white rounded-sm flex items-center justify-center"
                    >
                      ⬇
                    </button>
                    <button
                      type="button"
                      onClick={() => nudge(10, 10)}
                      className="w-10 h-10 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 hover:border-white text-zinc-400 rounded-sm flex items-center justify-center"
                    >
                      ↘
                    </button>
                  </div>
                </div>
                <p className="text-[10px] text-zinc-500 text-center mt-3 italic">
                  Tap arrows to adjust image position
                </p>
              </div>
            )}

            {/* INPUTS */}
            <input
              type="text"
              placeholder="Item Name"
              required
              className="w-full bg-black border border-zinc-700 p-3 text-white focus:border-white outline-none font-bold"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <div className="grid grid-cols-2 gap-4">
              <select
                className="bg-black border border-zinc-700 p-3 text-white outline-none text-sm"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              {/* 👇 UPDATED STATUS DROPDOWN */}
              <select
                className="bg-black border border-zinc-700 p-3 text-white outline-none text-sm"
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              >
                <option value="Available">Available</option>
                <option value="In Stock">In Stock</option>
                <option value="Dream Build">Dream Build</option>
                <option value="Best Seller">Best Seller</option>
                <option value="Sold Out">Sold Out</option>
                <option value="Hidden" className="bg-zinc-800 text-zinc-400">
                  Hidden (Archive)
                </option>
              </select>
            </div>
            <input
              type="number"
              placeholder="Price (PHP)"
              required
              className="w-full bg-black border border-zinc-700 p-3 text-white focus:border-white outline-none font-mono"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
            <button
              type="submit"
              disabled={uploading}
              className={`w-full font-black uppercase py-4 tracking-widest transition-colors ${editingId ? "bg-blue-600 hover:bg-blue-500" : "bg-white text-black hover:bg-jzee-green"}`}
            >
              {uploading
                ? "Wait..."
                : editingId
                  ? "Update Item"
                  : "Publish Item"}
            </button>
          </form>
        </div>

        {/* === RIGHT COLUMN: INVENTORY LIST === */}
        <div className="lg:col-span-3 h-full flex flex-col">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 border-b border-zinc-800 pb-4">
            <h2 className="text-2xl font-black text-white uppercase flex items-center gap-3">
              Inventory{" "}
              <span className="text-xs bg-jzee-green text-black px-2 py-1 font-bold rounded-sm">
                {totalCount}
              </span>
            </h2>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="SEARCH ITEMS..."
                className="w-full bg-black border border-zinc-700 p-3 pl-10 text-white text-xs font-bold uppercase tracking-widest focus:border-jzee-green outline-none transition-colors placeholder-zinc-600"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>

          {/* SCROLLABLE LIST */}
          <div className="flex-1 overflow-y-auto pr-2 space-y-2 h-[800px] scrollbar-hide">
            {items.map((item) => (
              <div
                key={item.id}
                // 👇 VISUAL CUE: If Hidden, make it look ghosted
                className={`flex gap-3 bg-zinc-900 border p-2 group items-center ${
                  editingId === item.id
                    ? "border-blue-500 bg-zinc-800"
                    : "border-zinc-800 hover:border-zinc-600"
                } ${item.status === "Hidden" ? "opacity-50 grayscale" : ""}`}
              >
                <img
                  src={item.image_url}
                  className="w-12 h-12 object-cover bg-black flex-shrink-0"
                  style={{
                    objectPosition: item.image_position || "center center",
                  }}
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-bold text-sm uppercase truncate">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <p className="text-jzee-green text-xs font-mono">
                      {item.display_price}
                    </p>
                    {item.status === "Hidden" && (
                      <span className="text-[9px] bg-zinc-700 text-white px-1 rounded uppercase">
                        Archived
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 pr-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="p-2 text-zinc-500 hover:text-blue-400"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 text-zinc-500 hover:text-red-500"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}

            {items.length < totalCount && (
              <button
                onClick={handleLoadMore}
                disabled={isLoadingList}
                className="w-full py-3 bg-zinc-800 text-zinc-400 text-xs font-bold uppercase tracking-widest hover:bg-zinc-700 hover:text-white transition-colors mt-4"
              >
                {isLoadingList
                  ? "Loading..."
                  : `Load More (${totalCount - items.length} remaining)`}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
