const moduleImporters = import.meta.glob([
  "../../../../packages/ui/lander-react/dist/semantic/property-family/components/schema-property-s*.js",
  "../../../../packages/ui/lander-react/dist/semantic/property-family/components/schema-property-t*.js",
  "../../../../packages/ui/lander-react/dist/semantic/property-family/components/schema-property-u*.js",
  "../../../../packages/ui/lander-react/dist/semantic/property-family/components/schema-property-v*.js",
  "../../../../packages/ui/lander-react/dist/semantic/property-family/components/schema-property-w*.js",
  "../../../../packages/ui/lander-react/dist/semantic/property-family/components/schema-property-x*.js",
  "../../../../packages/ui/lander-react/dist/semantic/property-family/components/schema-property-y*.js",
  "../../../../packages/ui/lander-react/dist/semantic/property-family/components/schema-property-z*.js"
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
    const importer = moduleImporters.get(`../../../../packages/ui/lander-react/dist/semantic/${candidate}`)
      ?? (basename ? moduleImportersByBasename.get(basename) : null);
    if (importer) return importer();
  }
  return null;
}
