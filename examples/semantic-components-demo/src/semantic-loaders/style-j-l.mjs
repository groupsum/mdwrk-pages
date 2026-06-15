const styleImporters = import.meta.glob([
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-j*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-j*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-j*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-j*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-k*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-k*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-k*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-k*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-l*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-l*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-l*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-l*.css"
]);
const styleImportersByBasename = new Map();

for (const [path, importer] of Object.entries(styleImporters)) {
  const basename = path.split("/").pop();
  if (basename) styleImportersByBasename.set(basename, importer);
}

export async function loadSemanticStyleByFilename(filename) {
  const importer = styleImportersByBasename.get(filename);
  if (!importer) return false;
  await importer();
  return true;
}
