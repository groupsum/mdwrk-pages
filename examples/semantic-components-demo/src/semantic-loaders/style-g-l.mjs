const styleImporters = import.meta.glob([
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-g*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-h*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-i*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-j*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-k*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-l*.css",
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
