const styleImporters = import.meta.glob([
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-pra*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-pra*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-pra*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-pra*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-prb*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-prb*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-prb*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-prb*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-prc*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-prc*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-prc*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-prc*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-prd*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-prd*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-prd*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-prd*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-pre*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-pre*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-pre*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-pre*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-prf*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-prf*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-prf*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-prf*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-prg*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-prg*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-prg*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-prg*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-prh*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-prh*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-prh*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-prh*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-pri*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-pri*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-pri*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-pri*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-prj*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-prj*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-prj*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-prj*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-prk*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-prk*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-prk*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-prk*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-prl*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-prl*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-prl*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-prl*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-prm*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-prm*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-prm*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-prm*.css"
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
