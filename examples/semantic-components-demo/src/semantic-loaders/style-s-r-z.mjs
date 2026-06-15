const styleImporters = import.meta.glob([
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-sr*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-sr*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-sr*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-sr*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-ss*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-ss*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-ss*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-ss*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-st*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-st*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-st*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-st*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-su*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-su*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-su*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-su*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-sv*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-sv*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-sv*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-sv*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-sw*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-sw*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-sw*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-sw*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-sx*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-sx*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-sx*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-sx*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-sy*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-sy*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-sy*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-sy*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-sz*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-property-sz*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-enumeration-sz*.css",
  "../../../../packages/ui/pages-ui-tokens/src/styles/semantic-schema-datatype-sz*.css"
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
