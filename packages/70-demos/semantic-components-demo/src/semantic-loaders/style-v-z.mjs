const styleImporters = import.meta.glob([
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-v*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-v*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-v*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-v*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-w*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-w*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-w*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-w*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-x*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-x*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-x*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-x*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-y*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-y*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-y*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-y*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-z*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-z*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-z*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-z*.css"
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
