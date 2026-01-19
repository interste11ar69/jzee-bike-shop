/**
 * src/model/ProductSchema.js
 *
 * This is a "Virtual Schema". It doesn't run code, but it documents
 * the shape of our data for the developer.
 */

/**
 * @typedef {Object} Product
 * @property {string} id - Unique identifier (e.g., "frm-001")
 * @property {string} name - The display name of the item
 * @property {string} category - Must match one of CATEGORIES from AppConstants
 * @property {number} price - Raw number for calculations (e.g., 350000)
 * @property {string} displayPrice - Formatted string (e.g., "₱350,000")
 * @property {string} status - Marketing status (e.g., "Dream Build")
 * @property {string} image - Path to the local image
 * @property {string} description - Full details for the modal view
 * @property {string} [link] - (Optional) Direct external link if needed
 * @property {boolean} [featured] - (Optional) If true, could appear on Home page
 */

// We export an empty object just to make this a valid module,
// but the real value here is the @typedef above.
export const ProductSchema = {};
