import { supabase } from "../api/supabaseClient";

export const productService = {
  /**
   * THE MASTER FETCH FUNCTION
   * Handles Pagination, Filtering, and Searching all in one.
   *
   * @param {number} page - Current page index (starts at 0)
   * @param {number} limit - How many items to fetch per page (e.g., 8)
   * @param {string} category - "All" or specific category
   * @param {string} searchTerm - Search query
   */
  getProducts: async ({
    page = 0,
    limit = 8,
    category = "All",
    searchTerm = "",
  }) => {
    // 1. Calculate the Range for Supabase
    // Page 0: 0 to 7
    // Page 1: 8 to 15
    const from = page * limit;
    const to = from + limit - 1;

    // 2. Start the Query
    let query = supabase
      .from("products")
      .select("*", { count: "exact" }) // 'count' tells us the Total items in DB (e.g., 100)
      .order("created_at", { ascending: false })
      .range(from, to); // 👈 THIS IS THE MAGIC (Server-Side Pagination)

    // 3. Apply Category Filter
    if (category !== "All") {
      query = query.eq("category", category);
    }

    // 4. Apply Search Filter
    if (searchTerm) {
      query = query.ilike("name", `%${searchTerm}%`);
    }

    // 5. Execute
    const { data, error, count } = await query;

    if (error) {
      console.error("Error fetching products:", error);
      return { data: [], count: 0 };
    }

    return { data, count };
  },

  // Keep this for the Modal or specific Item lookups if needed later
  getById: async (id) => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();
    if (error) return null;
    return data;
  },
};
