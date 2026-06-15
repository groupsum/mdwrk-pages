const styleImporters = import.meta.glob([
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-sa*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-sa*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-sa*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-sa*.css"
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
