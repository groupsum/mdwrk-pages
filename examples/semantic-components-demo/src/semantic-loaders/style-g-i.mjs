const styleImporters = import.meta.glob([
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-g*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-g*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-g*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-g*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-h*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-h*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-h*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-h*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-i*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-i*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-i*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-i*.css"
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
