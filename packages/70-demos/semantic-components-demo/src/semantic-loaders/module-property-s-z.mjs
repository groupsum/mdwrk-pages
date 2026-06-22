const moduleImporters = import.meta.glob([
  "../../../../../packages/40-react-renderers/lander-react/dist/semantic/property-family/components/schema-property-s*.js",
  "../../../../../packages/40-react-renderers/lander-react/dist/semantic/property-family/components/schema-property-t*.js",
  "../../../../../packages/40-react-renderers/lander-react/dist/semantic/property-family/components/schema-property-u*.js",
  "../../../../../packages/40-react-renderers/lander-react/dist/semantic/property-family/components/schema-property-v*.js",
  "../../../../../packages/40-react-renderers/lander-react/dist/semantic/property-family/components/schema-property-w*.js",
  "../../../../../packages/40-react-renderers/lander-react/dist/semantic/property-family/components/schema-property-x*.js",
  "../../../../../packages/40-react-renderers/lander-react/dist/semantic/property-family/components/schema-property-y*.js",
  "../../../../../packages/40-react-renderers/lander-react/dist/semantic/property-family/components/schema-property-z*.js"
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
