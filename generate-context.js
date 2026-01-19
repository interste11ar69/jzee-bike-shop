import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// --- CONFIGURATION ---
const OUTPUT_FILE = "project_context.txt";

// Directories to completely ignore
const IGNORE_DIRS = [
  "node_modules",
  ".git",
  ".qodo",
  "dist",
  "build",
  ".vscode",
];

// Files to specifically ignore (filenames)
const IGNORE_FILES = [
  "package-lock.json",
  "yarn.lock",
  "pnpm-lock.yaml",
  ".DS_Store",
  OUTPUT_FILE, // Don't read the output file itself!
  "generate-context.js", // Don't read this script
];

// File extensions to include (add more if needed)
const ALLOWED_EXTS = [
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".css",
  ".scss",
  ".html",
  ".json",
  ".md",
  ".config.js",
];

// --- MAIN LOGIC ---

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getFileList(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      // Check if directory is in ignore list
      if (!IGNORE_DIRS.includes(file)) {
        results = results.concat(getFileList(filePath));
      }
    } else {
      // Check if file is important
      const ext = path.extname(file).toLowerCase();
      if (!IGNORE_FILES.includes(file) && ALLOWED_EXTS.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  return results;
}

function generateContext() {
  console.log("🔍 Scanning project files...");

  try {
    // Clear or create the output file
    fs.writeFileSync(OUTPUT_FILE, "");

    const allFiles = getFileList(__dirname);
    let outputContent = `PROJECT CONTEXT GENERATED AT: ${new Date().toISOString()}\n\n`;

    allFiles.forEach((filePath) => {
      // Get relative path for readability (e.g., "src/components/App.jsx")
      const relativePath = path.relative(__dirname, filePath);

      console.log(`📄 Reading: ${relativePath}`);

      const fileContent = fs.readFileSync(filePath, "utf-8");

      // Add a header for the AI to recognize the file start
      outputContent += `\n================================================================================\n`;
      outputContent += `FILE PATH: ${relativePath}\n`;
      outputContent += `================================================================================\n\n`;
      outputContent += fileContent;
      outputContent += `\n\n`;
    });

    fs.writeFileSync(OUTPUT_FILE, outputContent);
    console.log(`\n✅ Success! Context written to: ${OUTPUT_FILE}`);
    console.log(`Total files included: ${allFiles.length}`);
  } catch (err) {
    console.error("Error generating context:", err);
  }
}

generateContext();
