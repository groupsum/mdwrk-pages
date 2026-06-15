const styleImporters = import.meta.glob([
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-sca*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-sca*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-sca*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-sca*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-scb*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-scb*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-scb*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-scb*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-scc*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-scc*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-scc*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-scc*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-scd*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-scd*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-scd*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-scd*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-sce*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-sce*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-sce*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-sce*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-scf*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-scf*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-scf*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-scf*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-scg*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-scg*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-scg*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-scg*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-sch*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-sch*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-sch*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-sch*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-sci*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-sci*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-sci*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-sci*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-scj*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-scj*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-scj*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-scj*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-sck*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-sck*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-sck*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-sck*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-scl*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-scl*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-scl*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-scl*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-scm*.css",
  "!../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-scm*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-scm*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-scm*.css"
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
