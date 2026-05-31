import React from "react";
import * as landerReact from "@mdwrk/lander-react";
import { showcaseEntriesByFamily } from "./showcase-catalog.mjs";

const componentMap = landerReact as unknown as Record<string, React.ComponentType<Record<string, unknown>>>;
const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function SemanticShowcase() {
  return (
    <div className="semantic-demo">
      <header className="semantic-demo__hero">
        <p className="semantic-demo__kicker">MdWrk Pages</p>
        <h1>Full fused semantic component surface</h1>
        <p className="semantic-demo__lede">
          This demo exists specifically for the prop-native, visible, JSON-LD-emitting components in
          <code> @mdwrk/lander-react</code>. It is not a page-template demo. Every supported structured-data type is
          represented here as a first-class export.
        </p>
        <dl className="semantic-demo__summary">
          <div>
            <dt>Exports</dt>
            <dd>58</dd>
          </div>
          <div>
            <dt>Families</dt>
            <dd>7</dd>
          </div>
          <div>
            <dt>JSON-LD</dt>
            <dd>Built in</dd>
          </div>
          <div>
            <dt>CSS tokens</dt>
            <dd>Per type</dd>
          </div>
        </dl>
      </header>

      <main className="semantic-demo__families">
        {showcaseEntriesByFamily.map((group) => (
          <section
            className={`semantic-demo__family semantic-demo__family--${slugify(group.family)}`}
            key={group.family}
            aria-label={group.family}
          >
            <header className="semantic-demo__family-header">
              <div>
                <p className="semantic-demo__kicker">{group.family}</p>
                <h2>{group.entries.length} first-class exports</h2>
              </div>
              <p>{group.description}</p>
            </header>
            <div className="semantic-demo__grid">
              {group.entries.map((entry) => {
                const Component = componentMap[entry.name];
                return (
                  <article
                    className={`semantic-demo__entry semantic-demo__entry--${slugify(entry.name)}`}
                    key={entry.name}
                  >
                    <div className="semantic-demo__entry-meta">
                      <code>{entry.name}</code>
                      <p>{entry.description}</p>
                    </div>
                    <Component {...entry.props} className="semantic-demo__card" />
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
