const styleImporters = import.meta.glob([
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pra*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pra*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pra*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pra*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-prb*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-prb*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-prb*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-prb*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-prc*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-prc*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-prc*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-prc*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-prd*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-prd*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-prd*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-prd*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pre*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pre*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pre*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pre*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-prf*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-prf*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-prf*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-prf*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-prg*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-prg*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-prg*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-prg*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-prh*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-prh*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-prh*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-prh*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pri*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pri*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pri*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pri*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-prj*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-prj*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-prj*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-prj*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-prk*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-prk*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-prk*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-prk*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-prl*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-prl*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-prl*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-prl*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-prm*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-prm*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-prm*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-prm*.css"
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
