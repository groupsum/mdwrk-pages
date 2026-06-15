const styleImporters = import.meta.glob([
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-ps*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-ps*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-ps*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-ps*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pt*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pt*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pt*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pt*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pu*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pu*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pu*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pu*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pv*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pv*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pv*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pv*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pw*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pw*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pw*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pw*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-px*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-px*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-px*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-px*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-py*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-py*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-py*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-py*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pz*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pz*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pz*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pz*.css"
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
