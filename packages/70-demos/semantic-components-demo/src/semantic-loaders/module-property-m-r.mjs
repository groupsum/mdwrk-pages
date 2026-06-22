const moduleImporters = import.meta.glob([
  "../../../../../packages/40-react-renderers/lander-react/dist/semantic/property-family/components/schema-property-m*.js",
  "../../../../../packages/40-react-renderers/lander-react/dist/semantic/property-family/components/schema-property-n*.js",
  "../../../../../packages/40-react-renderers/lander-react/dist/semantic/property-family/components/schema-property-o*.js",
  "../../../../../packages/40-react-renderers/lander-react/dist/semantic/property-family/components/schema-property-p*.js",
  "../../../../../packages/40-react-renderers/lander-react/dist/semantic/property-family/components/schema-property-q*.js",
  "../../../../../packages/40-react-renderers/lander-react/dist/semantic/property-family/components/schema-property-r*.js"
]);
const moduleImportersByBasename = new Map();

for (const [path, importer] of Object.entries(moduleImporters)) {
  const basename = path.split("/").pop();
  if (!basename || moduleImportersByBasename.has(basename)) continue;
  moduleImportersByBasename.set(basename, importer);
}

export async function loadSemanticModuleByCandidate(candidates) {
  for (const candidate of candidates) {
    const basename = candidate.split("/").pop();
    const importer = moduleImporters.get(`../../../../../packages/40-react-renderers/lander-react/dist/semantic/${candidate}`)
      ?? (basename ? moduleImportersByBasename.get(basename) : null);
    if (importer) return importer();
  }
  return null;
}
