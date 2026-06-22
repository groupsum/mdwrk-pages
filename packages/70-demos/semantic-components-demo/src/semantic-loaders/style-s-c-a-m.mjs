const styleImporters = import.meta.glob([
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-sca*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-sca*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-sca*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-sca*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-scb*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-scb*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-scb*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-scb*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-scc*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-scc*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-scc*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-scc*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-scd*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-scd*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-scd*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-scd*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-sce*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-sce*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-sce*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-sce*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-scf*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-scf*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-scf*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-scf*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-scg*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-scg*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-scg*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-scg*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-sch*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-sch*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-sch*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-sch*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-sci*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-sci*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-sci*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-sci*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-scj*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-scj*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-scj*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-scj*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-sck*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-sck*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-sck*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-sck*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-scl*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-scl*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-scl*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-scl*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-scm*.css",
  "!../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-property-scm*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-enumeration-scm*.css",
  "../../../../../packages/30-ui-foundation/pages-ui-tokens/src/styles/semantic-schema-datatype-scm*.css"
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
