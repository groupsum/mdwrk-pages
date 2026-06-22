import React, { startTransition, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { VisibleLanderPage } from "@mdwrk/lander-react";
import { LanderStructuredData, buildLanderJsonLdGraph } from "@mdwrk/lander-react-structured-data";
import { createLearningPathDemoSite, normalizeRouteSlug } from "./demo-site";
import type { CompiledPage } from "@mdwrk/lander-core";
import "./styles.css";

const canonicalOrigin = typeof window === "undefined" ? "http://localhost:4191" : window.location.origin;
const demo = createLearningPathDemoSite(canonicalOrigin);

function selectPage(pathname: string): CompiledPage {
  const normalized = normalizeRouteSlug(pathname || "/academy/ai-learning-architect/");
  return demo.site.pageByPath.get(normalized)
    ?? demo.site.pageByPath.get("/")
    ?? demo.site.pageByPath.get("/academy/ai-learning-architect/")
    ?? demo.site.pageByPath.get("/academy/")
    ?? demo.site.pages[0];
}

function schemaChipClass(templateId: string) {
  if (templateId === "education.learning-path") return "demo-chip demo-chip--path";
  if (templateId === "education.course") return "demo-chip demo-chip--course";
  if (templateId === "education.module") return "demo-chip demo-chip--module";
  if (templateId === "education.quiz") return "demo-chip demo-chip--quiz";
  return "demo-chip demo-chip--test";
}

function DemoApp() {
  const [currentPath, setCurrentPath] = useState(() => normalizeRouteSlug(window.location.pathname));
  const page = selectPage(currentPath);
  const graph = buildLanderJsonLdGraph(demo.site, page);

  useEffect(() => {
    const syncPathFromLocation = () => {
      startTransition(() => {
        setCurrentPath(normalizeRouteSlug(window.location.pathname));
      });
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;

      const url = new URL(anchor.href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      const nextPath = normalizeRouteSlug(url.pathname);
      if (nextPath === currentPath) return;

      event.preventDefault();
      window.history.pushState({}, "", `${url.pathname}${url.search}${url.hash}`);
      startTransition(() => {
        setCurrentPath(nextPath);
      });
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("popstate", syncPathFromLocation);
    document.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("popstate", syncPathFromLocation);
      document.removeEventListener("click", handleClick);
    };
  }, [currentPath]);

  return (
    <div className="demo-app">
      <header className="demo-header">
        <div className="demo-header__brand">
          <span className="demo-header__eyebrow">MdWrk Pages Demo</span>
          <h1>AI Learning Architect Academy</h1>
          <p>
            A Docker-ready education site showing schema-backed learning paths, courses, modules,
            quizzes, and tests with shared structured data.
          </p>
        </div>
        <nav className="demo-header__nav" aria-label="Primary academy routes">
          {demo.site.nav?.primary.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={normalizeRouteSlug(item.href) === currentPath ? "is-active" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="demo-hero">
        <div className="demo-hero__copy">
          <p className="demo-kicker">Structured Education Templates</p>
          <h2>One compiled graph drives the academy preview, route map, and JSON-LD output.</h2>
          <p>
            The demo uses the canonical education template family and the matching JSON Schemas
            to build a real learning-path site under `packages/70-demos/learning-path-demo`.
          </p>
        </div>
        <dl className="demo-stat-grid">
          <div>
            <dt>Pages</dt>
            <dd>{demo.pages.length}</dd>
          </div>
          <div>
            <dt>Schemas</dt>
            <dd>{demo.schemaRegistry.length}</dd>
          </div>
          <div>
            <dt>Diagnostics</dt>
            <dd>{demo.diagnostics.length}</dd>
          </div>
        </dl>
      </section>

      <main className="demo-layout">
        <aside className="demo-rail">
          <section className="demo-panel">
            <header className="demo-panel__header">
              <span>Route Graph</span>
              <strong>Learning entities</strong>
            </header>
            <div className="demo-route-list">
              {demo.routeNodes.map((node) => (
                <a key={node.pageId} href={node.path} className={node.path === currentPath ? "is-active" : undefined}>
                  <span className={schemaChipClass(node.templateId)}>{node.templateLabel}</span>
                  <strong>{node.title}</strong>
                  <small>{node.path}</small>
                </a>
              ))}
            </div>
          </section>

          <section className="demo-panel">
            <header className="demo-panel__header">
              <span>Schema Registry</span>
              <strong>Template contracts</strong>
            </header>
            <div className="demo-schema-list">
              {demo.schemaRegistry.map((entry) => (
                <article key={entry.templateId}>
                  <strong>{entry.templateId}</strong>
                  <code>{entry.assetPath}</code>
                </article>
              ))}
            </div>
          </section>
        </aside>

        <section className="demo-stage">
          <section className="demo-panel demo-panel--preview">
            <header className="demo-panel__header">
              <span>Visible renderer</span>
              <strong>{page.h1}</strong>
            </header>
            <div className="demo-preview">
              <LanderStructuredData site={demo.site} page={page} />
              <VisibleLanderPage page={page} />
            </div>
          </section>

          <section className="demo-panel">
            <header className="demo-panel__header">
              <span>Structured data output</span>
              <strong>JSON-LD graph preview</strong>
            </header>
            <pre className="demo-code-block">
              <code>{JSON.stringify(graph, null, 2)}</code>
            </pre>
          </section>
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DemoApp />
  </React.StrictMode>
);
