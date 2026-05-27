import React from "react";
import { createRoot } from "react-dom/client";
import type { CompiledLanderSite, CompiledPage } from "@mdwrk/lander-core";
import { productDomainBundle } from "../../../packages/lander/lander-page-templates/dist/domains/product.js";
import { VisibleLanderPage } from "@mdwrk/lander-react";
import { LanderStructuredData } from "@mdwrk/lander-react-structured-data";
import {
  getPageTemplateDemoHomeLinks,
  getPageTemplateDemoHomeNavigation,
  pageTemplateDemoContentPack,
  pageTemplateDemoGeneratedContentPack,
  pageTemplateDemoMarkdownFiles,
} from "@mdwrk/page-template-demo-content-pack";
import "./styles.css";

interface DemoSchemaLinkItem {
  href: string;
  label: string;
  targetTemplateId: string;
  pageId: string;
}

interface DemoSchemaLinkRow {
  property: string;
  items: DemoSchemaLinkItem[];
}

interface DemoSchemaPanel {
  kind: string;
  entries: DemoSchemaLinkRow[];
}

interface TemplateSchemaLinkContractRow {
  kind: string;
  property: string;
  relationship: string;
  slotId: string;
  cardinality: string;
  targetTemplateIds: string[];
}

interface MarkdownSiteField {
  label: string;
  value: string;
}

function normalizeRouteSlug(value: string) {
  const trimmed = String(value ?? "").trim();
  if (!trimmed || trimmed === "/") return "/";
  return `/${trimmed.replace(/^\/+|\/+$/g, "")}/`;
}

function canonicalForSlug(productUrl: string, slug: string) {
  return `${productUrl.replace(/\/+$/, "")}${normalizeRouteSlug(slug)}`;
}

function buildBreadcrumbs(page: { slug: string; h1: string }) {
  const slug = normalizeRouteSlug(page.slug);
  if (slug === "/") return [{ label: page.h1, href: "/" }];
  const parts = slug.replace(/^\/|\/$/g, "").split("/");
  const crumbs = [{ label: "Home", href: "/" }];
  let cursor = "";
  for (const part of parts) {
    cursor += `/${part}`;
    crumbs.push({
      label: part.replace(/-/g, " ").replace(/\b\w/g, (value) => value.toUpperCase()),
      href: normalizeRouteSlug(cursor),
    });
  }
  crumbs[crumbs.length - 1] = { label: page.h1, href: slug };
  return crumbs;
}

function compileDemoSite(input: Omit<CompiledLanderSite, "pages" | "pageByPath" | "diagnostics"> & { pages: typeof pageTemplateDemoContentPack.pages }): CompiledLanderSite {
  const pages = input.pages.map((page): CompiledPage => {
    const path = normalizeRouteSlug(page.slug);
    const canonicalUrl = page.seo?.canonical ?? canonicalForSlug(input.product.canonicalUrl, path);
    return {
      ...page,
      slug: path,
      path,
      canonicalUrl,
      breadcrumbs: buildBreadcrumbs({ slug: path, h1: page.h1 }),
      internalLinks: [],
      wordCount: [page.title, page.description, page.h1, page.intro].join(" ").split(/\s+/).filter(Boolean).length,
      componentIntents: (page.componentIntents ?? []).map((intent) => ({ ...intent, pagePath: path, source: "declared" })),
      schemaIntents: (page.schema ?? []).map((intent, index) => ({
        ...intent,
        id: intent.id ?? `${path}#schema-${index + 1}`,
        pagePath: path,
        source: "schema",
      })),
    };
  });

  return {
    ...input,
    pages,
    pageByPath: new Map(pages.map((page) => [page.path, page])),
    diagnostics: [],
  };
}

const canonicalOrigin = typeof window === "undefined" ? "http://localhost:4189" : window.location.origin;

const site = compileDemoSite({
  product: {
    name: "Acme Notebook",
    slug: "acme-notebook",
    tagline: "A polished notebook experience for modern teams.",
    description: "A customer-facing showcase for a product site and an editorial content experience built around one connected brand.",
    category: "SoftwareApplication",
    canonicalUrl: canonicalOrigin,
  },
  nav: {
    primary: [
      { label: "Home", href: "/demo/" },
      { label: "Feature", href: "/demo/features/core/" },
      { label: "Pricing", href: "/demo/pricing/" },
      { label: "Support", href: "/demo/support/" },
      { label: "Editorial", href: "/demo-markdown/" },
    ],
  },
  footer: {
    links: [
      { label: "Privacy", href: "/demo/privacy/" },
      { label: "Terms", href: "/demo/terms/" },
    ],
    note: "Acme Notebook keeps product, support, and policy pages connected across every experience.",
  },
  pages: [...pageTemplateDemoContentPack.pages, ...pageTemplateDemoGeneratedContentPack.pages],
  ai: {
    summary: "A connected site experience spanning product, help, and trust pages.",
    coreFacts: [
      "Product, help, and policy pages stay connected.",
      "Editorial updates can preserve the same customer journey.",
      "Search and assistant surfaces can follow the same linked destinations.",
    ],
  },
});

const homeLinks = getPageTemplateDemoHomeLinks();
const homeNavigation = getPageTemplateDemoHomeNavigation();
const markdownHomeLinks = pageTemplateDemoGeneratedContentPack.manifest.edges.filter((edge) => edge.sourceId === "markdown-demo-home");
const relationshipRows = [
  {
    slot: "Explore",
    meaning: "Core destinations from the main experience",
    links: homeLinks.children,
  },
  {
    slot: "Support",
    meaning: "Help destinations available from the main experience",
    links: homeLinks.support,
  },
  {
    slot: "Policies",
    meaning: "Trust and policy pages available from the main experience",
    links: homeLinks.legal,
  },
];
const markdownRelationshipRows = [
  {
    slot: "Explore",
    meaning: "Core destinations driven by content-authored pages",
    links: markdownHomeLinks.filter((edge) => edge.slotId === "children"),
  },
  {
    slot: "Support",
    meaning: "Help destinations driven by content-authored pages",
    links: markdownHomeLinks.filter((edge) => edge.slotId === "support"),
  },
  {
    slot: "Policies",
    meaning: "Trust and policy pages driven by content-authored pages",
    links: markdownHomeLinks.filter((edge) => edge.slotId === "legal"),
  },
];
const productHomeTemplate = productDomainBundle.templates.find((template) => template.id === "product.home");
const productHomeSchemaContract: TemplateSchemaLinkContractRow[] = (productHomeTemplate?.schemaLinks ?? []).map((link) => ({
  kind: link.kind,
  property: link.property,
  relationship: link.relationship ?? "implicit",
  slotId: link.slotId ?? "none",
  cardinality: link.cardinality ?? "optional_many",
  targetTemplateIds: [...link.targetTemplateIds],
}));
const markdownDemoHomeSource = pageTemplateDemoMarkdownFiles.find((file) => file.path.endsWith("demo-home.md"))?.raw ?? "";
const featuredPages = site.pages.map((demoPage) => {
  const pageShell = demoPage.componentIntents.find((intent) => intent.kind === "page_shell");
  const templateId = typeof pageShell?.data?.templateId === "string" ? pageShell.data.templateId : demoPage.kind;
  const isLinkedFromPresetHome = relationshipRows.some((row) => row.links.some((link) => normalizeRouteSlug(link.href) === demoPage.path));
  const isLinkedFromMarkdownHome = markdownRelationshipRows.some((row) => row.links.some((link) => normalizeRouteSlug(link.href) === demoPage.path));
  return {
    id: demoPage.path,
    title: demoPage.title,
    path: demoPage.path,
    kind: demoPage.kind,
    templateId,
    state: demoPage.path === "/demo/" || demoPage.path === "/demo-markdown/" ? "featured" : isLinkedFromPresetHome || isLinkedFromMarkdownHome ? "linked" : "included",
    source: demoPage.path.startsWith("/demo-markdown/") ? "content-led experience" : "launch experience",
    schema: demoPage.schema.map((schema) => schema.kind),
  };
});

function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") return "/demo/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function selectPage(): CompiledPage {
  const path = normalizePath(window.location.pathname);
  return site.pageByPath.get(path) ?? site.pageByPath.get("/demo/") ?? site.pages[0];
}

function linkClassName(href: string, current: string) {
  return normalizePath(href) === current ? "demo-nav__link is-active" : "demo-nav__link";
}

function schemaLinkRowsFor(page: CompiledPage): DemoSchemaPanel[] {
  return (page.schema ?? [])
    .map((schema) => {
      const linkedPages = schema.data?.linkedPages;
      if (!linkedPages || typeof linkedPages !== "object") return null;
      const entries = Object.entries(linkedPages)
        .filter(([, items]) => Array.isArray(items) && items.length > 0)
        .map(([property, items]) => ({
          property,
          items: items as DemoSchemaLinkItem[],
        }));
      if (!entries.length) return null;
      return { kind: schema.kind, entries };
    })
    .filter(Boolean) as DemoSchemaPanel[];
}

function markdownSiteFieldsFor(page: CompiledPage): MarkdownSiteField[] {
  const pageShell = page.componentIntents?.find((intent) => intent.kind === "page_shell");
  const templateId = typeof pageShell?.data?.templateId === "string" ? pageShell.data.templateId : page.kind;
  const linkedDestinations = schemaLinkRowsFor(page).flatMap((schema) => schema.entries.flatMap((entry) => entry.items.map((item) => item.label)));
  return [
    { label: "Route", value: page.path },
    { label: "Template", value: templateId },
    { label: "Page title", value: page.title },
    { label: "Section count", value: String(page.sections.length) },
    { label: "Schema", value: page.schema.map((schema) => schema.kind).join(", ") || "WebPage" },
    { label: "Linked destinations", value: linkedDestinations.join(", ") || "None" },
  ];
}

function DemoShell() {
  const page = selectPage();
  const current = normalizePath(page.path);
  const isHome = current === "/demo/" || current === "/demo-markdown/";
  const isMarkdown = current.startsWith("/demo-markdown/");
  const currentRows = isMarkdown ? markdownRelationshipRows : relationshipRows;
  const currentHomePath = isMarkdown ? "/demo-markdown/" : "/demo/";
  const currentTemplate = isMarkdown ? "Editorial Experience" : "Launch Experience";
  const currentPackPages = isMarkdown ? pageTemplateDemoGeneratedContentPack.pages.length : pageTemplateDemoContentPack.pages.length;
  const modeHomePage = site.pageByPath.get(currentHomePath) ?? page;
  const modeHomeNavigation = isMarkdown
    ? {
        breadcrumbs: modeHomePage.breadcrumbs,
        related: markdownHomeLinks.map((edge) => ({ label: edge.label, href: edge.href })),
      }
    : homeNavigation;
  const schemaLinkRows = schemaLinkRowsFor(modeHomePage);
  const markdownSiteFields = markdownSiteFieldsFor(modeHomePage);
  const modeHomePageShell = modeHomePage.componentIntents?.find((intent) => intent.kind === "page_shell");
  const modeHomeTemplateId = typeof modeHomePageShell?.data?.templateId === "string"
    ? modeHomePageShell.data.templateId
    : "product.home";

  return (
    <div className="demo-app">
      <header className="demo-header">
        <a className="demo-brand" href="/demo/" aria-label="Acme Notebook home">
          <span className="demo-brand__mark" aria-hidden="true" />
          <span>
            <span className="demo-brand__name">Acme Notebook</span>
            <span className="demo-brand__meta">Page Template Demo</span>
          </span>
        </a>
        <nav className="demo-nav" aria-label="Demo pages">
          {site.nav?.primary.map((item) => (
            <a key={item.href} className={linkClassName(item.href, current)} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {isHome ? (
        <>
          <section className="demo-hero" aria-label="Experience introduction">
            <div className="demo-hero__copy">
              <p className="demo-kicker">Acme Notebook</p>
              <h1>Acme Notebook presents a polished product experience from day one.</h1>
              <p>
                Explore a launch-ready product site and a content-led editorial experience built around the same brand,
                the same support paths, and the same trust pages.
              </p>
              <div className="demo-mode-switch" aria-label="Authoring mode">
                <a className={!isMarkdown ? "is-active" : ""} href="/demo/">Launch Experience</a>
                <a className={isMarkdown ? "is-active" : ""} href="/demo-markdown/">Editorial Experience</a>
              </div>
              <dl className="demo-summary">
                <div>
                  <dt>Experience</dt>
                  <dd>{isMarkdown ? "Editorial Experience" : "Launch Experience"}</dd>
                </div>
                <div>
                  <dt>Primary focus</dt>
                  <dd>{isMarkdown ? "Content and updates" : "Launch and conversion"}</dd>
                </div>
                <div>
                  <dt>Pages</dt>
                  <dd>{currentPackPages}</dd>
                </div>
                <div>
                  <dt>Connected destinations</dt>
                  <dd>{currentRows.reduce((sum, row) => sum + row.links.length, 0)}</dd>
                </div>
              </dl>
            </div>
          </section>

          <section className="demo-overview" aria-label="Experience overview">
            <div className="demo-overview__panel">
              <div className="demo-overview__header">
                <strong>{currentTemplate}</strong>
                <span>{currentHomePath}</span>
              </div>
              <div className="demo-overview__rows">
                {currentRows.map((row) => (
                  <div className="demo-overview__row" key={row.slot}>
                    <div>
                      <strong>{row.slot}</strong>
                      <span>{row.meaning}</span>
                    </div>
                    <div className="demo-overview__links">
                      {row.links.map((link) => (
                        <a key={link.id} href={link.href}>
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="demo-contract" aria-label="Featured site pages">
            <div className="demo-contract__intro">
              <p className="demo-kicker">Featured pages</p>
              <h2>Browse the pages that make up the selected experience.</h2>
            </div>
            <div className="demo-node-grid">
              {featuredPages.filter((node) => isMarkdown ? node.source === "content-led experience" : node.source === "launch experience").map((node) => (
                <a className="demo-node-card" key={node.id} href={node.path}>
                  <span className="demo-node-card__state">{node.source === "content-led experience" ? "Editorial page" : "Product page"}</span>
                  <strong>{node.title}</strong>
                  <span>{node.path}</span>
                  <small>{node.kind.replace(/_/g, " ")}</small>
                  <small>{node.schema.join(" + ") || "WebPage"}</small>
                </a>
              ))}
            </div>
          </section>

          <section className="demo-split" aria-label="Renderer split showcase">
            <div className="demo-contract__intro">
              <p className="demo-kicker">One experience, two renderer layers</p>
              <h2>The customer-facing page and the behind-the-scenes search profile stay in sync.</h2>
            </div>
            <div className="demo-split__grid">
              <article className="demo-split__card">
                <span className="demo-split__eyebrow">Visible experience</span>
                <strong>Pages, sections, navigation, and calls to action render through the visible page layer.</strong>
                <p>
                  The live page preview keeps the launch and editorial experiences polished for customers while the same
                  content pack controls the page structure.
                </p>
                <code>@mdwrk/lander-react</code>
              </article>
              <article className="demo-split__card">
                <span className="demo-split__eyebrow">Search profile</span>
                <strong>Structured data stays connected to support, trust, and product destinations without app-local schema wiring.</strong>
                <p>
                  Search engines and assistant surfaces can follow the same linked destinations that customers see on the page.
                </p>
                <code>@mdwrk/lander-react-structured-data</code>
              </article>
            </div>
          </section>

          {isMarkdown ? (
            <section className="demo-markdown-flow" aria-label="Markdown to site showcase">
              <div className="demo-contract__intro">
                <p className="demo-kicker">Markdown to site</p>
                <h2>One Markdown file becomes a compiled page, linked destinations, and the live editorial experience.</h2>
              </div>
              <div className="demo-markdown-flow__grid">
                <article className="demo-markdown-flow__panel">
                  <header>
                    <strong>Source Markdown</strong>
                    <span>content/pages/demo-home.md</span>
                  </header>
                  <p>
                    This is the actual authored file. Frontmatter chooses the page template, route, and linked page IDs.
                  </p>
                  <pre className="demo-markdown-flow__code"><code>{markdownDemoHomeSource}</code></pre>
                </article>
                <article className="demo-markdown-flow__panel">
                  <header>
                    <strong>Compiled site output</strong>
                    <span>{modeHomePage.path}</span>
                  </header>
                  <p>
                    The compiler turns that Markdown file into a routed page with schema, sections, and linked destinations.
                  </p>
                  <dl className="demo-markdown-flow__summary">
                    {markdownSiteFields.map((field) => (
                      <div key={field.label}>
                        <dt>{field.label}</dt>
                        <dd>{field.value}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </div>
            </section>
          ) : null}

          <section className="demo-schema" aria-label="Structured data page links">
            <div className="demo-contract__intro">
              <p className="demo-kicker">Search and assistant readiness</p>
              <h2>The product home template declares exactly which page templates each structured data property can reach.</h2>
            </div>
            <div className="demo-contract__intro">
              <p>
                The left side shows the reusable <code>product.home</code> contract. The right side shows the actual
                Acme Notebook instance compiled from that contract for the current experience.
              </p>
            </div>
            <div className="demo-schema__contract-grid">
              <section className="demo-schema__panel" aria-label="Declared product home structured data contract">
                <header>
                  <strong>Declared <code>product.home</code> contract</strong>
                  <span>Reusable page-template rule set</span>
                </header>
                {productHomeSchemaContract.map((entry) => (
                  <div className="demo-schema__property" key={`${entry.kind}-${entry.property}`}>
                    <div>
                      <code>{entry.property}</code>
                      <small>
                        {entry.kind} links through <strong>{entry.slotId}</strong> using the <strong>{entry.relationship}</strong> relationship.
                      </small>
                    </div>
                    <div className="demo-schema__links">
                      {entry.targetTemplateIds.map((templateId) => (
                        <span className="demo-schema__chip" key={`${entry.property}-${templateId}`}>
                          {templateId}
                        </span>
                      ))}
                    </div>
                    <small className="demo-schema__meta">Cardinality: {entry.cardinality}</small>
                  </div>
                ))}
              </section>
              <section className="demo-schema__panel" aria-label="Resolved structured data instance for Acme Notebook">
                <header>
                  <strong>Resolved Acme Notebook instance</strong>
                  <span>{modeHomePage.title} | {modeHomeTemplateId}</span>
                </header>
                <div className="demo-schema__property">
                  <div>
                    <code>{modeHomePage.path}</code>
                    <small>Compiled home-page instance using the declared product template contract.</small>
                  </div>
                </div>
                {schemaLinkRows.map((schema) => (
                  <div className="demo-schema__property" key={`instance-${schema.kind}`}>
                    <div>
                      <code>{schema.kind === "SoftwareApplication" ? "SoftwareApplication" : schema.kind}</code>
                      <small>Actual structured-data component links emitted for this compiled page instance.</small>
                    </div>
                    {schema.entries.map((entry) => (
                      <div className="demo-schema__instance-block" key={`instance-${schema.kind}-${entry.property}`}>
                        <div>
                          <strong>{entry.property}</strong>
                          <small>{entry.items.length} linked page template instance{entry.items.length === 1 ? "" : "s"}</small>
                        </div>
                        <div className="demo-schema__links">
                          {entry.items.map((item) => (
                            <a key={`${entry.property}-${item.pageId}`} href={item.href}>
                              <span>{item.label}</span>
                              <code>{item.targetTemplateId}</code>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </section>
            </div>
            <div className="demo-schema__panels">
              {schemaLinkRows.map((schema) => (
                <section className="demo-schema__panel" key={schema.kind}>
                  <header>
                    <strong>{schema.kind === "SoftwareApplication" ? "Application profile" : schema.kind}</strong>
                    <span>{modeHomePage.title}</span>
                  </header>
                  {schema.entries.map((entry) => (
                    <div className="demo-schema__property" key={entry.property}>
                      <div>
                        <code>{entry.property}</code>
                        <small>Linked destinations available to search and assistant surfaces</small>
                      </div>
                      <div className="demo-schema__links">
                        {entry.items.map((item) => (
                          <a key={`${entry.property}-${item.pageId}`} href={item.href}>
                            <span>{item.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </section>
              ))}
            </div>
          </section>
        </>
      ) : (
        <section className="demo-subpage-context" aria-label="Current graph node context">
          <span>Current page</span>
          <strong>{page.title}</strong>
          <code>{page.path}</code>
          <em>{isMarkdown ? "Editorial experience" : "Launch experience"}</em>
        </section>
      )}

      <main className="demo-main">
        <aside className="demo-sidebar" aria-label="Resolved template navigation">
          <h2>Explore</h2>
          <p>Move through the selected experience using the key navigation and support paths available from its home page.</p>
          <div className="demo-sidebar__group">
            <h3>Breadcrumbs</h3>
            {modeHomeNavigation.breadcrumbs.map((link) => (
              <a key={`${link.href}-${link.label}`} href={link.href}>{link.label}</a>
            ))}
          </div>
          <div className="demo-sidebar__group">
            <h3>Keep browsing</h3>
            {modeHomeNavigation.related.map((link) => (
              <a key={`${link.href}-${link.label}`} href={link.href}>{link.label}</a>
            ))}
          </div>
          <div className="demo-sidebar__group">
            <h3>Always available</h3>
            {schemaLinkRows.flatMap((schema) =>
              schema.entries.map((entry) => (
                <div className="demo-sidebar__schema" key={`${schema.kind}-${entry.property}`}>
                  <strong>{entry.property}</strong>
                  {entry.items.map((item) => (
                    <a key={`${entry.property}-${item.pageId}`} href={item.href}>{item.label}</a>
                  ))}
                </div>
              )),
            )}
          </div>
        </aside>
        <section className="demo-page-frame" aria-label="Rendered page template">
          <div className="demo-render-label">
            <span>Live site preview</span>
            <code>{page.path}</code>
          </div>
          <LanderStructuredData site={site} page={page} />
          <VisibleLanderPage page={page} />
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DemoShell />
  </React.StrictMode>,
);
