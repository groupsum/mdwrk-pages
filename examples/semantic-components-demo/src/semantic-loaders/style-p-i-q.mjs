const styleImporters = import.meta.glob([
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pi*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pi*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pi*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pi*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pj*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pj*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pj*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pj*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pk*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pk*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pk*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pk*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pl*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pl*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pl*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pl*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pm*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pm*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pm*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pm*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pn*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pn*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pn*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pn*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-po*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-po*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-po*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-po*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pp*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pp*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pp*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pp*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pq*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pq*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pq*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pq*.css"
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
