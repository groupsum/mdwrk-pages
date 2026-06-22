const styleImporters = import.meta.glob([
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-property.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-property-value.css"
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
