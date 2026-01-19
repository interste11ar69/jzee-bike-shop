import { supabase } from "../api/supabaseClient";

export const productService = {
  /**
   * Fetch all products sorted by creation date (Newest first)
   */
  getAll: async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error loading products:", error);
      return [];
    }
    return data;
  },

  /**
   * Filter by Category
   */
  getByCategory: async (category) => {
    // If "All", just fetch everything
    if (category === "All") return await productService.getAll();

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category", category)
      .order("created_at", { ascending: false });

    if (error) {
      console.error(`Error loading category ${category}:`, error);
      return [];
    }
    return data;
  },

  /**
   * Search Logic (Database-side search)
   */
  search: async (term) => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .ilike("name", `%${term}%`); // ilike = Case Insensitive Search

    if (error) {
      console.error("Search error:", error);
      return [];
    }
    return data;
  },
};
