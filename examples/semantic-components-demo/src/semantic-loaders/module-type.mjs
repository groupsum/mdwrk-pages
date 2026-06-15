const rootModuleImporters = import.meta.glob("../../../../packages/ui/lander-react/dist/semantic/*.js");
const generatedModuleImporters = import.meta.glob("../../../../packages/ui/lander-react/dist/semantic/generated-type-family/components/*.js");
const moduleImporters = new Map([
  ...Object.entries(rootModuleImporters),
  ...Object.entries(generatedModuleImporters),
]);
const moduleImportersByBasename = new Map();

for (const [path, importer] of moduleImporters) {
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
