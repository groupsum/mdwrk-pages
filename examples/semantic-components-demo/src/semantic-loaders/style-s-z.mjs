const styleImporters = import.meta.glob([
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-s*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-t*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-u*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-v*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-w*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-x*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-y*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-z*.css",
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
