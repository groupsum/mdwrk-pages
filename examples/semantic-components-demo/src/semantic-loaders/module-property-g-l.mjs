const moduleImporters = import.meta.glob([
  "../../../../packages/ui/lander-react/dist/semantic/property-family/components/schema-property-g*.js",
  "../../../../packages/ui/lander-react/dist/semantic/property-family/components/schema-property-h*.js",
  "../../../../packages/ui/lander-react/dist/semantic/property-family/components/schema-property-i*.js",
  "../../../../packages/ui/lander-react/dist/semantic/property-family/components/schema-property-j*.js",
  "../../../../packages/ui/lander-react/dist/semantic/property-family/components/schema-property-k*.js",
  "../../../../packages/ui/lander-react/dist/semantic/property-family/components/schema-property-l*.js"
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
