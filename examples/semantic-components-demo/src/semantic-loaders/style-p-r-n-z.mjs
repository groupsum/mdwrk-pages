const styleImporters = import.meta.glob([
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-prn*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-prn*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-prn*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-prn*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pro*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pro*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pro*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pro*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-prp*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-prp*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-prp*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-prp*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-prq*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-prq*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-prq*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-prq*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-prr*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-prr*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-prr*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-prr*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-prs*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-prs*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-prs*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-prs*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-prt*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-prt*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-prt*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-prt*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pru*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pru*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pru*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pru*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-prv*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-prv*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-prv*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-prv*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-prw*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-prw*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-prw*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-prw*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-prx*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-prx*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-prx*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-prx*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-pry*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-pry*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-pry*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-pry*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-prz*.css",
  "!../../../../packages/ui/pages-ui-tokens/src/styles/semantic-property.css",
  "!../../../../packages/ui/pages-ui-tokens/src/styles/semantic-property-*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-prz*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-prz*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-prz*.css"
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
