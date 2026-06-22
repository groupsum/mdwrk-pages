import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const vendorDir = path.join(packageRoot, "vendor", "schemaorg");
const sourcePath = path.join(vendorDir, "schemaorg-class-types.csv");
const outputPath = path.join(vendorDir, "schemaorg-action-types.csv");

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];

    if (inQuotes) {
      if (char === "\"") {
        if (text[index + 1] === "\"") {
          field += "\"";
          index += 1;
        } else {
          inQuotes = false;
        }
      } else {
        field += char;
      }
      continue;
    }

    if (char === "\"") {
      inQuotes = true;
      continue;
    }

    if (char === ",") {
      row.push(field);
      field = "";
      continue;
    }

    if (char === "\r") continue;

    if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
      continue;
    }

    field += char;
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  const [header, ...body] = rows;
  return body
    .filter((record) => record.some((value) => value.length > 0))
    .map((record) => Object.fromEntries(header.map((key, index) => [key, record[index] ?? ""])));
}

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll("\"", "\"\"")}"` : text;
}

function normalizeSchemaLabel(uri) {
  return String(uri ?? "").trim().replace(/^https:\/\/schema\.org\//, "");
}

const rows = parseCsv(fs.readFileSync(sourcePath, "utf8"));
const byLabel = new Map(rows.map((row) => [row.label, row]));
const actionLabels = new Set(["Action"]);
const queue = ["Action"];

while (queue.length > 0) {
  const current = queue.shift();
  for (const row of rows) {
    if (normalizeSchemaLabel(row.subTypeOf) !== current) continue;
    if (actionLabels.has(row.label)) continue;
    actionLabels.add(row.label);
    queue.push(row.label);
  }
}

const actionRows = rows.filter((row) => actionLabels.has(row.label));
const header = Object.keys(actionRows[0] ?? {});
const lines = [
  header.join(","),
  ...actionRows.map((row) => header.map((column) => csvEscape(row[column])).join(",")),
];

fs.writeFileSync(outputPath, `${lines.join("\n")}\n`, "utf8");
