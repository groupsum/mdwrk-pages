import React, { startTransition, useDeferredValue, useEffect, useState } from "react";
import {
  Badge,
  Card as PrimitiveCard,
  Pagination,
  SearchField as PrimitiveSearchField,
  SelectField as PrimitiveSelectField,
  Tabs,
  Toolbar,
} from "@mdwrk/lander-primitives";

const createElement = React.createElement;
const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const showcaseModes = [
  { value: "highlights", label: "Highlights" },
  { value: "governed-core", label: "Governed Core" },
  { value: "generated-surface", label: "Generated Surface" },
  { value: "primitives", label: "Primitives" },
];
const qaViewLinks = [
  { label: "Highlights", href: "?mode=highlights" },
  { label: "Governed Core", href: "?mode=governed-core" },
  { label: "Generated Types", href: "?mode=generated-surface&kind=type" },
  { label: "Pages + Listings", href: "?mode=generated-surface&kind=type&surface=page-or-listing" },
  { label: "Generated Properties", href: "?mode=generated-surface&kind=property" },
  { label: "Generated Enumerations", href: "?mode=generated-surface&kind=enumeration" },
  { label: "Generated Datatypes", href: "?mode=generated-surface&kind=datatype" },
  { label: "Primitive Gallery", href: "?mode=primitives" },
  { label: "Primitive Dark", href: "?mode=primitives&theme=lander-dark" },
];
const showcaseHeroCopy = "The semantic-components demo now acts as both a curated highlight reel and a full generated-surface explorer for the fused JSON-LD-emitting runtime.";
const showcaseStats = {
  totalArtifacts: 1228,
  types: 232,
  properties: 935,
  enumerations: 54,
  datatypes: 7,
  governedCore: 207,
};
const generatedArtifactKindOptions = [
  { value: "type", label: "Type" },
  { value: "property", label: "Property" },
  { value: "enumeration", label: "Enumeration" },
  { value: "datatype", label: "Datatype" },
];
const generatedPageSizeOptions = [12, 24, 48, 96];
const surfaceFocusOptions = [
  { value: "all", label: "All types" },
  { value: "page", label: "Pages" },
  { value: "listing", label: "Listings" },
  { value: "page-or-listing", label: "Pages + listings" },
];
const defaultGovernedFamilyOptions = [{ value: "all", label: "All families" }];

const DEFAULT_STATE = {
  mode: "highlights",
  search: "",
  family: "all",
  kind: "type",
  surface: "all",
  theme: "lander-light",
  detailKind: "",
  detailName: "",
  tab: "overview",
  specimen: "typical",
  viewport: "responsive",
  page: 1,
  pageSize: 24,
};

const themeOptions = [
  { value: "lander-light", label: "Light" },
  { value: "lander-dark", label: "Dark" },
];
type SemanticCatalogModule = typeof import("./showcase-catalog-index.mjs");
type GeneratedCatalogModule = typeof import("./showcase-generated-catalog-index.mjs");
type SemanticRenderModule = typeof import("./showcase-client-semantic.mjs");
type PrimitiveRenderModule = typeof import("./showcase-client-primitives.mjs");

function SearchField({ value, onChange, placeholder }: { value: string; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; placeholder: string }) {
  return createElement(PrimitiveSearchField, {
    className: "semantic-demo__field semantic-demo__field--search",
    label: "Search",
    value,
    onChange,
    placeholder,
  });
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; label: string }>;
}) {
  return createElement(PrimitiveSelectField, {
    className: "semantic-demo__field semantic-demo__field--select",
    label,
    value,
    onChange,
    options,
  });
}

function buildArtifactDetailHref({
  kind,
  name,
  theme,
  surface,
}: {
  kind: string;
  name: string;
  theme: string;
  surface: string;
}) {
  const params = new URLSearchParams();
  params.set("mode", "generated-surface");
  params.set("kind", kind);
  params.set("detailKind", kind);
  params.set("detailName", name);
  if (theme) params.set("theme", theme);
  if (surface && surface !== "all" && kind === "type") params.set("surface", surface);
  return `?${params.toString()}`;
}

function ArtifactIndexCard({
  entry,
  tone,
  theme,
  surface,
}: {
  entry: { name: string; description: string; family?: string; artifactKind?: string; surfaceFocus?: string };
  tone: string;
  theme: string;
  surface: string;
}) {
  const kind = entry.artifactKind ?? "type";
  return createElement(
    PrimitiveCard,
    {
      className: `semantic-demo__entry semantic-demo__entry--index semantic-demo__entry--${slugify(entry.name)} semantic-demo__entry--tone-${slugify(tone)}`,
      id: `artifact-${slugify(entry.name)}`,
    },
    createElement(
      "header",
      { className: "semantic-demo__entry-meta" },
      createElement(Badge, { className: "mdwrk-primitive__text-fit-preserve" }, entry.name),
      createElement("p", { className: "mdwrk-primitive__text-fit-preview" }, entry.description),
    ),
    createElement(
      "dl",
      { className: "semantic-demo__index-meta" },
      createElement("div", null, createElement("dt", null, "Kind"), createElement("dd", null, kind)),
      entry.family
        ? createElement("div", null, createElement("dt", null, "Family"), createElement("dd", null, entry.family))
        : null,
      entry.surfaceFocus && kind === "type"
        ? createElement("div", null, createElement("dt", null, "Surface"), createElement("dd", null, entry.surfaceFocus))
        : null,
    ),
    createElement(
      "a",
      { className: "semantic-demo__detail-link", href: buildArtifactDetailHref({ kind, name: entry.name, theme, surface: entry.surfaceFocus ?? surface }) },
      "Open detail page",
    ),
  );
}

function ArtifactIndexSection({
  title,
  description,
  entries,
  tone,
  theme,
  surface,
}: {
  title: string;
  description: string;
  entries: Array<{ name: string; description: string; family?: string; artifactKind?: string; surfaceFocus?: string }>;
  tone: string;
  theme: string;
  surface: string;
}) {
  return createElement(
    "section",
    {
      className: `semantic-demo__family semantic-demo__family--${slugify(title)}`,
      id: slugify(title),
    },
    createElement(
      "header",
      { className: "semantic-demo__family-header" },
      createElement(
        "div",
        null,
        createElement("p", { className: "semantic-demo__kicker" }, title),
        createElement("h2", null, `${entries.length} indexed artifacts`),
      ),
      createElement("p", null, description),
    ),
    createElement(
      "div",
      { className: `semantic-demo__grid semantic-demo__grid--${slugify(tone)}` },
      ...entries.map((entry) =>
        createElement(ArtifactIndexCard, {
          key: `${title}-${entry.name}`,
          entry,
          tone,
          theme,
          surface,
        }),
      ),
    ),
  );
}

function parseStateFromLocation() {
  if (typeof window === "undefined") return DEFAULT_STATE;
  const params = new URLSearchParams(window.location.search);
  const mode = params.get("mode") ?? DEFAULT_STATE.mode;
  const family = params.get("family") ?? DEFAULT_STATE.family;
  const kind = params.get("kind") ?? DEFAULT_STATE.kind;
  const surface = params.get("surface") ?? DEFAULT_STATE.surface;
  const theme = params.get("theme") ?? DEFAULT_STATE.theme;
  const detailKind = params.get("detailKind") ?? DEFAULT_STATE.detailKind;
  const detailName = params.get("detailName") ?? DEFAULT_STATE.detailName;
  const tab = params.get("tab") ?? DEFAULT_STATE.tab;
  const specimen = params.get("specimen") ?? DEFAULT_STATE.specimen;
  const viewport = params.get("viewport") ?? DEFAULT_STATE.viewport;
  const search = params.get("q") ?? DEFAULT_STATE.search;
  const page = Number.parseInt(params.get("page") ?? `${DEFAULT_STATE.page}`, 10);
  const pageSize = Number.parseInt(params.get("size") ?? `${DEFAULT_STATE.pageSize}`, 10);

  return {
    mode: showcaseModes.some((entry) => entry.value === mode) ? mode : DEFAULT_STATE.mode,
    family,
    kind: generatedArtifactKindOptions.some((entry) => entry.value === kind) ? kind : DEFAULT_STATE.kind,
    surface: surfaceFocusOptions.some((entry) => entry.value === surface) ? surface : DEFAULT_STATE.surface,
    theme: themeOptions.some((entry) => entry.value === theme) ? theme : DEFAULT_STATE.theme,
    detailKind,
    detailName,
    tab,
    specimen,
    viewport,
    search,
    page: Number.isFinite(page) && page > 0 ? page : DEFAULT_STATE.page,
    pageSize: generatedPageSizeOptions.includes(pageSize) ? pageSize : DEFAULT_STATE.pageSize,
  };
}

function writeStateToLocation(state: typeof DEFAULT_STATE) {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams();
  if (state.mode !== DEFAULT_STATE.mode) params.set("mode", state.mode);
  if (state.search) params.set("q", state.search);
  if (state.family !== DEFAULT_STATE.family) params.set("family", state.family);
  if (state.kind !== DEFAULT_STATE.kind) params.set("kind", state.kind);
  if (state.surface !== DEFAULT_STATE.surface) params.set("surface", state.surface);
  if (state.theme !== DEFAULT_STATE.theme) params.set("theme", state.theme);
  if (state.detailKind && state.detailName) {
    params.set("detailKind", state.detailKind);
    params.set("detailName", state.detailName);
  }
  if (state.tab !== DEFAULT_STATE.tab) params.set("tab", state.tab);
  if (state.specimen !== DEFAULT_STATE.specimen) params.set("specimen", state.specimen);
  if (state.viewport !== DEFAULT_STATE.viewport) params.set("viewport", state.viewport);
  if (state.page !== DEFAULT_STATE.page) params.set("page", `${state.page}`);
  if (state.pageSize !== DEFAULT_STATE.pageSize) params.set("size", `${state.pageSize}`);
  const nextUrl = params.toString() ? `?${params}` : window.location.pathname;
  window.history.replaceState(null, "", nextUrl);
}

export function SemanticShowcaseClient() {
  const [state, setState] = useState(() => ({ ...DEFAULT_STATE, ...parseStateFromLocation() }));
  const [semanticCatalog, setSemanticCatalog] = useState<SemanticCatalogModule | null>(null);
  const [generatedCatalog, setGeneratedCatalog] = useState<GeneratedCatalogModule | null>(null);
  const [semanticRenderers, setSemanticRenderers] = useState<SemanticRenderModule | null>(null);
  const [primitiveRenderers, setPrimitiveRenderers] = useState<PrimitiveRenderModule | null>(null);
  const deferredSearch = useDeferredValue(state.search);
  const showDetailPage = Boolean(state.detailKind && state.detailName);
  const needsSemanticCatalog = state.mode === "highlights" || state.mode === "governed-core";
  const needsGeneratedCatalog = state.mode === "generated-surface";
  const needsSemanticRuntime = showDetailPage && state.detailKind !== "primitive";
  const needsPrimitiveRuntime = state.mode === "primitives" || (showDetailPage && state.detailKind === "primitive");

  useEffect(() => {
    const sync = () => {
      startTransition(() => setState((current) => ({ ...current, ...parseStateFromLocation() })));
    };
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  useEffect(() => {
    if (!needsSemanticCatalog) return;
    let cancelled = false;
    import("./showcase-catalog-index.mjs").then((catalogModule) => {
      if (cancelled) return;
      setSemanticCatalog(catalogModule);
    });
    return () => {
      cancelled = true;
    };
  }, [needsSemanticCatalog]);

  useEffect(() => {
    if (!needsGeneratedCatalog) return;
    let cancelled = false;
    import("./showcase-generated-catalog-index.mjs").then((catalogModule) => {
      if (cancelled) return;
      setGeneratedCatalog(catalogModule);
    });
    return () => {
      cancelled = true;
    };
  }, [needsGeneratedCatalog]);

  useEffect(() => {
    if (!needsSemanticRuntime) return;
    let cancelled = false;
    import("./showcase-client-semantic.mjs").then((renderModule) => {
      if (!cancelled) setSemanticRenderers(renderModule);
    });
    return () => {
      cancelled = true;
    };
  }, [needsSemanticRuntime]);

  useEffect(() => {
    if (!needsPrimitiveRuntime) return;
    let cancelled = false;
    import("./showcase-client-primitives.mjs").then((renderModule) => {
      if (!cancelled) setPrimitiveRenderers(renderModule);
    });
    return () => {
      cancelled = true;
    };
  }, [needsPrimitiveRuntime]);

  const patchState = (patch: Partial<typeof DEFAULT_STATE>) => {
    const nextState = { ...state, ...patch };
    if (
      state.detailName
      && !("detailName" in patch)
      && !("detailKind" in patch)
      && ["kind", "family", "surface", "search", "pageSize"].some((key) => key in patch)
    ) {
      nextState.detailKind = DEFAULT_STATE.detailKind;
      nextState.detailName = DEFAULT_STATE.detailName;
      nextState.tab = DEFAULT_STATE.tab;
      nextState.specimen = DEFAULT_STATE.specimen;
    }
    if (patch.mode && patch.mode !== state.mode) {
      nextState.page = 1;
      nextState.detailKind = DEFAULT_STATE.detailKind;
      nextState.detailName = DEFAULT_STATE.detailName;
      nextState.search = patch.mode === "highlights" ? "" : nextState.search;
      if (patch.mode !== "generated-surface") nextState.kind = DEFAULT_STATE.kind;
      if (patch.mode !== "governed-core") nextState.family = DEFAULT_STATE.family;
      if (patch.mode === "highlights" || patch.mode === "primitives") nextState.surface = DEFAULT_STATE.surface;
    }
    if ("kind" in patch || "family" in patch || "surface" in patch || "search" in patch || "pageSize" in patch) nextState.page = 1;
    startTransition(() => setState(nextState));
    writeStateToLocation(nextState);
  };

  const governedFamilyOptions = semanticCatalog?.governedFamilyOptions ?? defaultGovernedFamilyOptions;
  const governedCoreGroups = semanticCatalog?.buildGovernedCoreGroups({
    family: state.family,
    search: deferredSearch,
    surface: state.surface,
  }) ?? [];
  const highlightsGroups = semanticCatalog?.highlightsView.groups ?? [];
  const generatedView = generatedCatalog?.buildGeneratedArtifactView({
    kind: state.kind,
    search: deferredSearch,
    page: state.page,
    pageSize: state.pageSize,
    surface: state.surface,
  }) ?? null;

  return createElement(
    "div",
    {
      className: `semantic-demo semantic-demo--mode-${slugify(state.mode)} semantic-demo--theme-${slugify(state.theme)}`,
      "data-lander-theme": state.theme,
    },
    createElement(
      "header",
      { className: "semantic-demo__hero" },
      createElement(
        "div",
        { className: "semantic-demo__hero-copy" },
        createElement("p", { className: "semantic-demo__kicker" }, "MdWrk Pages"),
        createElement("h1", null, "Full fused semantic surface explorer"),
        createElement("p", { className: "semantic-demo__lede" }, showcaseHeroCopy),
      ),
      createElement(
        "dl",
        { className: "semantic-demo__summary" },
        createElement("div", null, createElement("dt", null, "Total artifacts"), createElement("dd", null, showcaseStats.totalArtifacts)),
        createElement("div", null, createElement("dt", null, "Types"), createElement("dd", null, showcaseStats.types)),
        createElement("div", null, createElement("dt", null, "Properties"), createElement("dd", null, showcaseStats.properties)),
        createElement("div", null, createElement("dt", null, "Enumerations"), createElement("dd", null, showcaseStats.enumerations)),
        createElement("div", null, createElement("dt", null, "Datatypes"), createElement("dd", null, showcaseStats.datatypes)),
        createElement("div", null, createElement("dt", null, "Governed core"), createElement("dd", null, showcaseStats.governedCore)),
      ),
      createElement(Tabs, {
        className: "semantic-demo__mode-switcher",
        items: showcaseModes,
        value: state.mode,
        onChange: (mode: string) => patchState({ mode }),
      }),
      createElement(
        Toolbar,
        { className: "semantic-demo__toolbar", "aria-label": "Showcase controls" },
        createElement(SearchField, {
          value: state.search,
          onChange: (event) => patchState({ search: event.target.value }),
          placeholder: "Search names, families, and descriptions",
        }),
        createElement(SelectField, {
          label: "Theme",
          value: state.theme,
          onChange: (event) => patchState({ theme: event.target.value }),
          options: themeOptions,
        }),
        state.mode === "governed-core"
          ? createElement(SelectField, {
              label: "Family",
              value: state.family,
              onChange: (event) => patchState({ family: event.target.value }),
              options: governedFamilyOptions,
            })
          : null,
        state.mode === "governed-core"
          ? createElement(SelectField, {
              label: "Surface focus",
              value: state.surface,
              onChange: (event) => patchState({ surface: event.target.value }),
              options: surfaceFocusOptions,
            })
          : null,
        state.mode === "generated-surface"
          ? createElement(
              React.Fragment,
              null,
              createElement(SelectField, {
                label: "Artifact kind",
                value: state.kind,
                onChange: (event) =>
                  patchState({
                    kind: event.target.value,
                    surface: event.target.value === "type" ? state.surface : DEFAULT_STATE.surface,
                  }),
                options: generatedArtifactKindOptions,
              }),
              state.kind === "type"
                ? createElement(SelectField, {
                    label: "Surface focus",
                    value: state.surface,
                    onChange: (event) => patchState({ surface: event.target.value }),
                    options: surfaceFocusOptions,
                  })
                : null,
              createElement(SelectField, {
                label: "Batch size",
                value: state.pageSize,
                onChange: (event) => patchState({ pageSize: Number.parseInt(event.target.value, 10) }),
                options: generatedPageSizeOptions.map((size) => ({ value: `${size}`, label: `${size}` })),
              }),
            )
          : null,
      ),
      createElement(
        "section",
        { className: "semantic-demo__qa-links", "aria-label": "QA views" },
        createElement("p", { className: "semantic-demo__kicker" }, "QA Views"),
        createElement(
          "div",
          { className: "semantic-demo__qa-link-grid" },
          ...qaViewLinks.map((link) => createElement("a", { href: link.href, key: link.href }, link.label)),
        ),
      ),
    ),
    createElement(
      "main",
      { className: "semantic-demo__families" },
      showDetailPage && state.detailKind === "primitive"
        ? primitiveRenderers
          ? createElement(primitiveRenderers.PrimitiveDetailRoute, {
            detailName: state.detailName,
            theme: state.theme,
            activeTab: state.tab,
            specimenKey: state.specimen,
            viewport: state.viewport,
            onTabChange: (tab: string) => patchState({ tab }),
            onSpecimenChange: (specimen: string) => patchState({ specimen }),
          })
          : createElement("section", { className: "semantic-demo__detail semantic-demo__detail--loading" }, createElement("p", null, "Loading primitive detail page..."))
        : null,
      !showDetailPage && state.mode === "highlights"
        ? semanticCatalog
          ? highlightsGroups.map((group) =>
              createElement(ArtifactIndexSection, {
                key: group.family,
                title: group.family,
                description: group.description,
                entries: group.entries,
                tone: group.family,
                theme: state.theme,
                surface: state.surface,
              }),
            )
          : createElement("section", { className: "semantic-demo__family semantic-demo__family--loading" }, createElement("p", null, "Loading semantic highlights..."))
        : null,
      !showDetailPage && state.mode === "governed-core"
        ? semanticCatalog
          ? governedCoreGroups.map((group) =>
              createElement(ArtifactIndexSection, {
                key: group.family,
                title: group.family,
                description: group.description,
                entries: group.entries,
                tone: group.family,
                theme: state.theme,
                surface: state.surface,
              }),
            )
          : createElement("section", { className: "semantic-demo__family semantic-demo__family--loading" }, createElement("p", null, "Loading governed surfaces..."))
        : null,
      !showDetailPage && state.mode === "generated-surface"
        ? generatedView
          ? createElement(
              "section",
              {
                className: `semantic-demo__family semantic-demo__family--${generatedView.kind}`,
                id: `generated-${generatedView.kind}`,
                key: `generated-${generatedView.kind}`,
              },
              createElement(
                "header",
                { className: "semantic-demo__family-header semantic-demo__family-header--generated" },
                createElement(
                  "div",
                  null,
                  createElement("p", { className: "semantic-demo__kicker" }, generatedView.title),
                  createElement("h2", null, `${generatedView.total} matching artifacts`),
                ),
                createElement("p", null, generatedView.description),
              ),
              createElement(
                "div",
                { className: "semantic-demo__generated-status" },
                createElement("p", null, `Showing ${generatedView.entries.length} of ${generatedView.total} artifacts`),
                createElement(Pagination, {
                  className: "semantic-demo__pager",
                  page: generatedView.currentPage,
                  pageCount: generatedView.totalPages,
                  onPageChange: (page: number) => patchState({ page }),
                }),
              ),
              createElement(
                "div",
                {
                  className: `semantic-demo__grid semantic-demo__grid--generated semantic-demo__grid--generated-${generatedView.kind}`,
                },
                ...generatedView.entries.map((entry) =>
                  createElement(ArtifactIndexCard, {
                    key: `${generatedView.kind}-${entry.name}`,
                    entry,
                    tone: generatedView.kind,
                    theme: state.theme,
                    surface: state.surface,
                  }),
                ),
              ),
            )
          : createElement("section", { className: "semantic-demo__family semantic-demo__family--loading" }, createElement("p", null, "Loading generated surfaces..."))
        : null,
      !showDetailPage && state.mode === "primitives"
        ? primitiveRenderers
          ? createElement(primitiveRenderers.PrimitiveGalleryRoute, {
              buildHref: (entry: { name: string }) => {
                const params = new URLSearchParams();
                params.set("mode", "primitives");
                params.set("detailKind", "primitive");
                params.set("detailName", entry.name);
                if (state.theme) params.set("theme", state.theme);
                return `?${params.toString()}`;
              },
            })
          : createElement("section", { className: "semantic-demo__family semantic-demo__family--loading" }, createElement("p", null, "Loading primitive gallery..."))
        : null,
      showDetailPage && state.detailKind !== "primitive"
        ? semanticRenderers
          ? createElement(semanticRenderers.GeneratedDetailPage, {
              detailKind: state.detailKind,
              detailName: state.detailName,
              kind: state.kind,
              theme: state.theme,
              surface: state.surface,
              activeTab: state.tab,
              specimenKey: state.specimen,
              viewport: state.viewport,
              onTabChange: (tab: string) => patchState({ tab }),
              onSpecimenChange: (specimen: string) => patchState({ specimen }),
            })
          : createElement("section", { className: "semantic-demo__detail semantic-demo__detail--loading" }, createElement("p", null, "Loading generated detail page..."))
        : null,
    ),
  );
}
