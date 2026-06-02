import React, { startTransition, useDeferredValue, useEffect, useState } from "react";
import * as landerReact from "@mdwrk/lander-react";
import {
  Badge,
  Card as PrimitiveCard,
  JsonPreview,
  Pagination,
  SearchField as PrimitiveSearchField,
  SelectField as PrimitiveSelectField,
  Toolbar,
  Tabs,
} from "@mdwrk/lander-primitives";
import {
  buildGeneratedArtifactView,
  buildGeneratedArtifactDetailHref,
  buildGovernedCoreGroups,
  generatedArtifactKindOptions,
  generatedPageSizeOptions,
  governedFamilyOptions,
  surfaceFocusOptions,
  highlightsView,
  qaViewLinks,
  showcaseHeroCopy,
  showcaseModes,
  showcaseStats,
} from "./showcase-catalog.mjs";
import { PrimitiveGallery } from "./showcase-primitives.mjs";
import { DetailPage, buildPrimitiveDetailHref } from "./showcase-detail.mjs";

const componentMap = landerReact;
const createElement = React.createElement;
const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const DEFAULT_STATE = {
  mode: "highlights",
  search: "",
  family: "all",
  kind: "type",
  surface: "all",
  theme: "lander-light",
  detailKind: "",
  detailName: "",
  page: 1,
  pageSize: 24,
};

const themeOptions = [
  { value: "lander-light", label: "Light" },
  { value: "lander-dark", label: "Dark" },
];

function SearchField({ value, onChange, placeholder }) {
  return createElement(PrimitiveSearchField, {
    className: "semantic-demo__field semantic-demo__field--search",
    label: "Search",
    value,
    onChange,
    placeholder,
  });
}

function SelectField({ label, value, onChange, options }) {
  return createElement(PrimitiveSelectField, {
    className: "semantic-demo__field semantic-demo__field--select",
    label,
    value,
    onChange,
    options,
  });
}

function isPresentValue(value) {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.some((entry) => isPresentValue(entry));
  if (typeof value === "object") return Object.values(value).some((entry) => isPresentValue(entry));
  return true;
}

function fieldLabel(value) {
  if (value.startsWith("@")) return value;
  return value.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
}

function primitiveField(value) {
  return createElement("span", { className: "semantic-demo__field-value" }, String(value));
}

function renderStructuredFieldValue(value, depth = 0) {
  if (!isPresentValue(value)) return null;
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return primitiveField(value);
  if (Array.isArray(value)) {
    return createElement(
      "div",
      { className: "semantic-demo__structured-stack" },
      ...value
        .filter((entry) => isPresentValue(entry))
        .map((entry, index) =>
          createElement(
            "section",
            { className: "semantic-demo__structured-nested", key: index },
            createElement(Badge, { className: "semantic-demo__field-label" }, `Item ${index + 1}`),
            renderStructuredFieldValue(entry, depth + 1),
          ),
        ),
    );
  }
  if (typeof value === "object") {
    return renderStructuredFields(value, depth + 1);
  }
  return primitiveField(value);
}

function renderStructuredFields(value, depth = 0) {
  const entries = Object.entries(value ?? {}).filter(([, entry]) => isPresentValue(entry));
  if (!entries.length) return null;
  return createElement(
    "div",
    { className: `semantic-demo__structured-grid semantic-demo__structured-grid--depth-${Math.min(depth, 2)}` },
    ...entries.map(([key, entry]) =>
      createElement(
        PrimitiveCard,
        { className: "semantic-demo__structured-field", key },
        createElement(Badge, { className: "semantic-demo__field-label" }, fieldLabel(key)),
        renderStructuredFieldValue(entry, depth + 1),
      ),
    ),
  );
}

function StructuredFieldsPanel({ value }) {
  if (!isPresentValue(value)) return null;
  return createElement(
    PrimitiveCard,
    { className: "semantic-demo__structured-panel" },
    createElement(
      "header",
      { className: "semantic-demo__structured-header" },
      createElement("span", null, "Object"),
      createElement("h3", null, "Structured fields"),
    ),
    renderStructuredFields(value),
  );
}

function composeComponentProps(props, structuredFields) {
  if (!structuredFields) return props;
  const structuredPanel = createElement(StructuredFieldsPanel, { value: structuredFields });
  return {
    ...props,
    body: props?.body
      ? createElement(React.Fragment, null, props.body, structuredPanel)
      : structuredPanel,
  };
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
    search,
    page: Number.isFinite(page) && page > 0 ? page : DEFAULT_STATE.page,
    pageSize: generatedPageSizeOptions.includes(pageSize) ? pageSize : DEFAULT_STATE.pageSize,
  };
}

function writeStateToLocation(state) {
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
  if (state.page !== DEFAULT_STATE.page) params.set("page", `${state.page}`);
  if (state.pageSize !== DEFAULT_STATE.pageSize) params.set("size", `${state.pageSize}`);
  const nextUrl = params.toString() ? `?${params}` : window.location.pathname;
  window.history.replaceState(null, "", nextUrl);
}

function DemoCard({ name, exportName, description, props, structuredFields, tone = "type", artifactKind = "type", theme, surface }) {
  const Component = componentMap[exportName];
  if (!Component) return null;
  const componentProps = composeComponentProps(props, structuredFields);
  const detailHref = buildGeneratedArtifactDetailHref({ kind: artifactKind, name, theme, surface });

  return createElement(
    PrimitiveCard,
    {
      className: `semantic-demo__entry semantic-demo__entry--${slugify(name)} semantic-demo__entry--tone-${slugify(tone)}`,
      id: `artifact-${slugify(name)}`,
    },
    createElement(
      "div",
      { className: "semantic-demo__entry-meta" },
      createElement(Badge, null, name),
      createElement("p", null, description),
    ),
    createElement(Component, { ...componentProps, className: "semantic-demo__card" }),
    createElement("a", { className: "semantic-demo__detail-link", href: detailHref }, "Open detail page"),
  );
}

function SectionGroup({ title, description, entries, tone, theme, surface }) {
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
        createElement("h2", null, `${entries.length} rendered examples`),
      ),
      createElement("p", null, description),
    ),
    createElement(
      "div",
      { className: `semantic-demo__grid semantic-demo__grid--${slugify(tone ?? title)}` },
      ...entries.map((entry) =>
        createElement(DemoCard, {
          key: `${title}-${entry.name}`,
          ...entry,
          tone: tone ?? title,
          artifactKind: entry.artifactKind ?? "type",
          theme,
          surface,
        }),
      ),
    ),
  );
}

export function SemanticShowcase({ initialState } = {}) {
  const [state, setState] = useState(() => ({
    ...DEFAULT_STATE,
    ...parseStateFromLocation(),
    ...initialState,
  }));
  const deferredSearch = useDeferredValue(state.search);

  useEffect(() => {
    if (initialState || typeof window === "undefined") return;
    const sync = () => {
      startTransition(() => setState((current) => ({ ...current, ...parseStateFromLocation() })));
    };
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, [initialState]);

  const patchState = (patch) => {
    const nextState = { ...state, ...patch };
    if (
      state.detailName
      && !("detailName" in patch)
      && !("detailKind" in patch)
      && ["kind", "family", "surface", "search", "pageSize"].some((key) => key in patch)
    ) {
      nextState.detailKind = DEFAULT_STATE.detailKind;
      nextState.detailName = DEFAULT_STATE.detailName;
    }
    if (patch.mode && patch.mode !== state.mode) {
      nextState.page = 1;
      nextState.detailKind = DEFAULT_STATE.detailKind;
      nextState.detailName = DEFAULT_STATE.detailName;
      nextState.search = patch.mode === "highlights" ? "" : nextState.search;
      if (patch.mode !== "generated-surface") nextState.kind = DEFAULT_STATE.kind;
      if (patch.mode !== "governed-core") nextState.family = DEFAULT_STATE.family;
      if (patch.mode === "highlights") nextState.surface = DEFAULT_STATE.surface;
      if (patch.mode === "primitives") nextState.surface = DEFAULT_STATE.surface;
    }
    if ("kind" in patch || "family" in patch || "surface" in patch || "search" in patch || "pageSize" in patch) nextState.page = 1;
    startTransition(() => setState(nextState));
    if (!initialState) writeStateToLocation(nextState);
  };

  const governedCoreGroups = buildGovernedCoreGroups({ family: state.family, search: deferredSearch, surface: state.surface });
  const generatedView = buildGeneratedArtifactView({
    kind: state.kind,
    search: deferredSearch,
    page: state.page,
    pageSize: state.pageSize,
    surface: state.surface,
  });
  const showDetailPage = Boolean(state.detailKind && state.detailName);

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
        onChange: (mode) => patchState({ mode }),
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
      ...(showDetailPage
        ? [
            createElement(DetailPage, {
              key: `detail-${state.detailKind}-${state.detailName}`,
              detailKind: state.detailKind,
              detailName: state.detailName,
              kind: state.kind,
              theme: state.theme,
              surface: state.surface,
            }),
          ]
        : []),
      ...(!showDetailPage && state.mode === "highlights"
        ? highlightsView.groups.map((group) =>
            createElement(SectionGroup, {
              key: group.family,
              title: group.family,
              description: group.description,
              entries: group.entries,
              theme: state.theme,
              surface: state.surface,
            }),
          )
        : []),
      ...(!showDetailPage && state.mode === "governed-core"
        ? governedCoreGroups.map((group) =>
            createElement(SectionGroup, {
              key: group.family,
              title: group.family,
              description: group.description,
              entries: group.entries,
              theme: state.theme,
              surface: state.surface,
            }),
          )
        : []),
      ...(!showDetailPage && state.mode === "generated-surface"
        ? [
            createElement(
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
                  onPageChange: (page) => patchState({ page }),
                }),
              ),
              createElement(
                "div",
                {
                  className: `semantic-demo__grid semantic-demo__grid--generated semantic-demo__grid--generated-${generatedView.kind}`,
                },
                ...generatedView.entries.map((entry) =>
                  createElement(DemoCard, {
                    key: `${generatedView.kind}-${entry.name}`,
                    ...entry,
                    tone: generatedView.kind,
                    artifactKind: generatedView.kind,
                    theme: state.theme,
                    surface: state.surface,
                  }),
                ),
              ),
            ),
          ]
        : []),
      ...(!showDetailPage && state.mode === "primitives"
        ? [
            createElement(PrimitiveGallery, {
              key: "primitive-gallery",
              buildHref: (entry) => buildPrimitiveDetailHref({ name: entry.name, theme: state.theme }),
            }),
          ]
        : []),
    ),
  );
}

export { DEFAULT_STATE };
