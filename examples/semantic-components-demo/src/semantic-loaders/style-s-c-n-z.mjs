const styleImporters = import.meta.glob([
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-scn*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-scn*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-scn*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-scn*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-sco*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-sco*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-sco*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-sco*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-scp*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-scp*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-scp*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-scp*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-scq*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-scq*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-scq*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-scq*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-scr*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-scr*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-scr*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-scr*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-scs*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-scs*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-scs*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-scs*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-sct*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-sct*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-sct*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-sct*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-scu*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-scu*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-scu*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-scu*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-scv*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-scv*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-scv*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-scv*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-scw*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-scw*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-scw*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-scw*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-scx*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-scx*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-scx*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-scx*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-scy*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-scy*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-scy*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-scy*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-scz*.css",
  "!../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-scz*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-scz*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-scz*.css"
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
