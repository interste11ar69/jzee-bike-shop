/**
 * src/model/AppConstants.js
 *
 * This file contains the immutable constants for the application.
 * Changing these here updates the entire application instantly.
 */

// 🛠️ The Official Category List
// Used in Catalog filters and Product tagging
export const CATEGORIES = [
  "All",
  "Frames",
  "Suspension",
  "Drivetrain",
  "Wheels",
  "Cockpit", // Covers Stems, Handlebars, Brakes
  "Gear", // Helmets, Shoes, Jerseys
];

// 🏁 The Partner Brands
// Used in the infinite marquee scroller
export const BRANDS = [
  "SHIMANO",
  "SRAM",
  "FOX RACING",
  "SPECIALIZED",
  "SAGMIT",
  "MOUNTAINPEAK",
  "MAXXIS",
  "CONTINENTAL",
  "ZIPP",
  "ENVE",
  "KMC",
  "LOOK",
];

// 🏷️ Product Statuses (Enum)
// This ensures we don't accidentally type "Soldout" instead of "Sold Out"
export const PRODUCT_STATUS = {
  AVAILABLE: "Available",
  IN_STOCK: "In Stock",
  SOLD_OUT: "Sold Out",
  DREAM_BUILD: "Dream Build",
  PREMIUM: "Premium",
  BUDGET_KING: "Budget King",
  BEST_SELLER: "Best Seller",
  RESTOCKED: "Restocked",
  HIDDEN: "Hidden",
};

// 🌟 SOCIAL PROOF
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ryan D.",
    role: "Downhill Racer",
    text: "Grabe ang mechanic diri. My suspension feels brand new. Legit service!",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria C.",
    role: "Weekend Warrior",
    text: "Barato ra jud compared sa downtown shops. Accommodating pa si Ma'am Zee.",
    rating: 5,
  },
  {
    id: 3,
    name: "Boss K.",
    role: "Fixie User",
    text: "Solid ang wheel building. Tunog mayaman pero budget meal presyo.",
    rating: 5,
  },
  {
    id: 4,
    name: "Jay R.",
    role: "MTB Enthusiast",
    text: "Fast transaction. The item was well packaged and arrived safely in Cebu.",
    rating: 5,
  },
];
