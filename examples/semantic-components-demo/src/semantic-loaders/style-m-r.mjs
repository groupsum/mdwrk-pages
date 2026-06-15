const styleImporters = import.meta.glob([
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-m*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-n*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-o*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-p*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-q*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-r*.css",
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
