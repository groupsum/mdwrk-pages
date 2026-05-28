import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distEntry = pathToFileURL(path.join(packageRoot, "dist", "structured-data-schemas.js")).href;
const sourceDir = path.join(packageRoot, "schemas", "structured-data");

const { listStructuredDataSchemas } = await import(distEntry);

fs.mkdirSync(sourceDir, { recursive: true });

for (const entry of listStructuredDataSchemas()) {
  const fileName = `${entry.assetPath.split("/").at(-1)}`;
  const destination = path.join(sourceDir, fileName);
  fs.writeFileSync(destination, `${JSON.stringify(entry.schema, null, 2)}\n`, "utf8");
}
