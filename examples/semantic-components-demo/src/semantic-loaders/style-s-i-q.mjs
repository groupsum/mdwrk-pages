const styleImporters = import.meta.glob([
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-si*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-si*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-si*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-si*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-sj*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-sj*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-sj*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-sj*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-sk*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-sk*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-sk*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-sk*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-sl*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-sl*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-sl*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-sl*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-sm*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-sm*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-sm*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-sm*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-sn*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-sn*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-sn*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-sn*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-so*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-so*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-so*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-so*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-sp*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-sp*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-sp*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-sp*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-sq*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-sq*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-sq*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-sq*.css"
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
