const pascalToKebab = (value) => value.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

function prefixedArtifactSlug(entry, prefix) {
  return entry.slug.startsWith(`${prefix}-`) ? entry.slug : `${prefix}-${entry.slug}`;
}

function moduleCandidatesForEntry(entry) {
  if (entry.artifactKind === "property") {
    const moduleSlug = prefixedArtifactSlug(entry, "schema-property");
    return [
      `property-family/components/${moduleSlug}.js`,
      `${moduleSlug}.js`,
    ];
  }
  if (entry.artifactKind === "enumeration") {
    const moduleSlug = prefixedArtifactSlug(entry, "schema-enumeration");
    return [
      `enumeration-family/components/${moduleSlug}.js`,
      `${moduleSlug}.js`,
    ];
  }
  if (entry.artifactKind === "datatype") {
    const moduleSlug = prefixedArtifactSlug(entry, "schema-datatype");
    return [
      `datatype-family/components/${moduleSlug}.js`,
      `${moduleSlug}.js`,
    ];
  }
  if (entry.artifactKind === "type") {
    return [
      `${entry.slug}.js`,
      `${pascalToKebab(entry.name)}.js`,
      `generated-type-family/components/${entry.slug}.js`,
    ];
  }
  return [`${entry.slug}.js`];
}

function styleCandidatesForEntry(entry) {
  const candidateSlugs = [entry.slug];
  if (entry.artifactKind === "property") candidateSlugs.push(prefixedArtifactSlug(entry, "schema-property"));
  if (entry.artifactKind === "enumeration") candidateSlugs.push(prefixedArtifactSlug(entry, "schema-enumeration"));
  if (entry.artifactKind === "datatype") candidateSlugs.push(prefixedArtifactSlug(entry, "schema-datatype"));
  if (entry.artifactKind === "type") candidateSlugs.push(pascalToKebab(entry.name));
  return [...new Set(candidateSlugs)].map((slug) => `semantic-${slug}.css`);
}

async function loadModuleRegistry(artifactKind) {
  if (artifactKind === "property") return import("./semantic-loaders/module-property.mjs");
  if (artifactKind === "enumeration") return import("./semantic-loaders/module-enumeration.mjs");
  if (artifactKind === "datatype") return import("./semantic-loaders/module-datatype.mjs");
  return import("./semantic-loaders/module-type.mjs");
}

async function loadStyleRegistry(filename) {
  const normalized = filename.replace(/^semantic-/u, "");
  const first = normalized[0] ?? "s";
  if (first >= "a" && first <= "f") return import("./semantic-loaders/style-a-f.mjs");
  if (first >= "g" && first <= "l") return import("./semantic-loaders/style-g-l.mjs");
  if (first >= "m" && first <= "r") return import("./semantic-loaders/style-m-r.mjs");
  return import("./semantic-loaders/style-s-z.mjs");
}

async function loadSemanticArtifactStyle(entry) {
  for (const candidate of styleCandidatesForEntry(entry)) {
    const registry = await loadStyleRegistry(candidate);
    if (await registry.loadSemanticStyleByFilename(candidate)) return true;
  }
  return false;
}

export async function loadSemanticComponent(entry) {
  const registry = await loadModuleRegistry(entry.artifactKind);
  const module = await registry.loadSemanticModuleByCandidate(moduleCandidatesForEntry(entry));
  const Component = module ? module[entry.exportName] ?? module.default ?? module[Object.keys(module)[0]] : null;
  if (Component) {
    await loadSemanticArtifactStyle(entry);
    return Component;
  }
  return null;
}
