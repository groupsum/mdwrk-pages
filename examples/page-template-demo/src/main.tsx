import React from "react";
import { createRoot } from "react-dom/client";
import type { CompiledLanderSite, CompiledPage } from "@mdwrk/lander-core";
import { VisibleLanderPage } from "@mdwrk/lander-react";
import { LanderStructuredData } from "@mdwrk/lander-react-structured-data";
import {
  getPageTemplateDemoHomeLinks,
  getPageTemplateDemoHomeNavigation,
  pageTemplateDemoContentPack,
  pageTemplateDemoGeneratedContentPack,
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
const graphNodes = site.pages.map((demoPage) => {
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
          <section className="demo-hero" aria-label="Template graph summary">
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
            <div className="demo-graph" aria-label="Home page relationship slots">
              <div className="demo-graph__header">
                <span className="demo-graph__node is-root">{currentHomePath}</span>
                <span>{currentTemplate}</span>
              </div>
              {currentRows.map((row) => (
                <div className="demo-graph__row" key={row.slot}>
                  <div>
                    <strong>{row.slot}</strong>
                    <span>{row.meaning}</span>
                  </div>
                  <div className="demo-graph__links">
                    {row.links.map((link) => (
                      <a key={link.id} href={link.href}>
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="demo-contract" aria-label="Generated graph nodes">
            <div className="demo-contract__intro">
              <p className="demo-kicker">Featured pages</p>
              <h2>Browse the main destinations that shape the selected experience.</h2>
            </div>
            <div className="demo-node-grid">
              {graphNodes.filter((node) => isMarkdown ? node.source === "content-led experience" : node.source === "launch experience").map((node) => (
                <a className="demo-node-card" key={node.id} href={node.path}>
                  <span className="demo-node-card__state">{node.state}</span>
                  <strong>{node.title}</strong>
                  <span>{node.path}</span>
                  <small>{node.source === "content-led experience" ? "Editorial page" : "Product page"}</small>
                  <small>{node.schema.join(" + ") || "WebPage"}</small>
                </a>
              ))}
            </div>
          </section>

          <section className="demo-schema" aria-label="Structured data page links">
            <div className="demo-contract__intro">
              <p className="demo-kicker">Search and assistant readiness</p>
              <h2>Support and policy destinations stay connected behind the scenes as well as on the page.</h2>
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
