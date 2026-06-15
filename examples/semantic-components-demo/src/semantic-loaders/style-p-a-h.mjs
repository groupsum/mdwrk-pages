const styleImporters = import.meta.glob([
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pa*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pa*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pa*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pa*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pb*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pb*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pb*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pb*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pc*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pc*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pc*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pc*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pd*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pd*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pd*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pd*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pe*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pe*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pe*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pe*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pf*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pf*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pf*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pf*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pg*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pg*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pg*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pg*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-ph*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-ph*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-ph*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-ph*.css"
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
