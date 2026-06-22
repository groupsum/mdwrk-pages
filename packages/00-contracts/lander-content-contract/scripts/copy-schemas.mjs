import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = path.join(packageRoot, "schemas");
const targetDir = path.join(packageRoot, "dist", "schemas");

function copyJsonTree(sourcePath, destinationPath) {
  fs.mkdirSync(destinationPath, { recursive: true });
  for (const entry of fs.readdirSync(sourcePath, { withFileTypes: true })) {
    const sourceEntryPath = path.join(sourcePath, entry.name);
    const destinationEntryPath = path.join(destinationPath, entry.name);
    if (entry.isDirectory()) {
      copyJsonTree(sourceEntryPath, destinationEntryPath);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".json")) {
      fs.copyFileSync(sourceEntryPath, destinationEntryPath);
    }
  }
}

copyJsonTree(sourceDir, targetDir);
