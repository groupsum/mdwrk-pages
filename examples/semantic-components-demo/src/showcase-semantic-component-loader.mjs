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

function bucketKeyForSlug(slug) {
  return slug
    .replace(/^semantic-/u, "")
    .replace(/^schema-property-/u, "")
    .replace(/^schema-enumeration-/u, "")
    .replace(/^schema-datatype-/u, "")[0] ?? "s";
}

async function loadPropertyModuleRegistry(entry) {
  const first = bucketKeyForSlug(entry.slug);
  if (first >= "a" && first <= "f") return import("./semantic-loaders/module-property-a-f.mjs");
  if (first >= "g" && first <= "l") return import("./semantic-loaders/module-property-g-l.mjs");
  if (first >= "m" && first <= "r") return import("./semantic-loaders/module-property-m-r.mjs");
  return import("./semantic-loaders/module-property-s-z.mjs");
}

async function loadModuleRegistry(entry) {
  if (entry.artifactKind === "property") return loadPropertyModuleRegistry(entry);
  if (entry.artifactKind === "enumeration") return import("./semantic-loaders/module-enumeration.mjs");
  if (entry.artifactKind === "datatype") return import("./semantic-loaders/module-datatype.mjs");
  return import("./semantic-loaders/module-type.mjs");
}

async function loadStyleRegistry(filename) {
  const normalized = filename
    .replace(/^semantic-/u, "")
    .replace(/^schema-property-/u, "")
    .replace(/^schema-enumeration-/u, "")
    .replace(/^schema-datatype-/u, "");
  const first = normalized[0] ?? "s";
  const second = normalized[1] ?? "a";
  if (first >= "a" && first <= "c") return import("./semantic-loaders/style-a-c.mjs");
  if (first >= "d" && first <= "f") return import("./semantic-loaders/style-d-f.mjs");
  if (first >= "g" && first <= "i") return import("./semantic-loaders/style-g-i.mjs");
  if (first >= "j" && first <= "l") return import("./semantic-loaders/style-j-l.mjs");
  if (first >= "m" && first <= "o") return import("./semantic-loaders/style-m-o.mjs");
  if (first === "p" && second <= "h") return import("./semantic-loaders/style-p-a-h.mjs");
  if (first === "p" && second <= "q") return import("./semantic-loaders/style-p-i-q.mjs");
  if (first === "p" && second === "r" && (normalized[2] ?? "a") <= "m") return import("./semantic-loaders/style-p-r-a-m.mjs");
  if (normalized === "property" || normalized === "property-value") return import("./semantic-loaders/style-property-types.mjs");
  if (first === "p" && second === "r") return import("./semantic-loaders/style-p-r-n-z.mjs");
  if (first === "p") return import("./semantic-loaders/style-p-s-z.mjs");
  if (first === "q") return import("./semantic-loaders/style-q.mjs");
  if (first === "r") return import("./semantic-loaders/style-r.mjs");
  if (first === "s" && second === "a") return import("./semantic-loaders/style-s-a.mjs");
  if (first === "s" && second === "b") return import("./semantic-loaders/style-s-b.mjs");
  if (first === "s" && second === "c" && (normalized[2] ?? "a") <= "m") {
    return import("./semantic-loaders/style-s-c-a-m.mjs");
  }
  if (first === "s" && second === "c") return import("./semantic-loaders/style-s-c-n-z.mjs");
  if (first === "s" && second <= "h") return import("./semantic-loaders/style-s-d-h.mjs");
  if (first === "s" && second <= "q") return import("./semantic-loaders/style-s-i-q.mjs");
  if (first === "s") return import("./semantic-loaders/style-s-r-z.mjs");
  if (first === "t") return import("./semantic-loaders/style-t.mjs");
  if (first === "u") return import("./semantic-loaders/style-u.mjs");
  return import("./semantic-loaders/style-v-z.mjs");
}

async function loadSemanticArtifactStyle(entry) {
  for (const candidate of styleCandidatesForEntry(entry)) {
    const registry = await loadStyleRegistry(candidate);
    if (await registry.loadSemanticStyleByFilename(candidate)) return true;
  }
  return false;
}

export async function loadSemanticComponent(entry) {
  const registry = await loadModuleRegistry(entry);
  const module = await registry.loadSemanticModuleByCandidate(moduleCandidatesForEntry(entry));
  const Component = module ? module[entry.exportName] ?? module.default ?? module[Object.keys(module)[0]] : null;
  if (Component) {
    await loadSemanticArtifactStyle(entry);
    return Component;
  }
  return null;
}
