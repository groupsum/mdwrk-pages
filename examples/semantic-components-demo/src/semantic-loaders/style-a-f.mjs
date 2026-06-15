const styleImporters = import.meta.glob([
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-a*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-b*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-c*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-d*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-e*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-f*.css",
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
