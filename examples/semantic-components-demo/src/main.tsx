import React from "react";
import { createRoot } from "react-dom/client";
import "./token-styles.css";
import "./styles.css";
import { SemanticShowcaseClient } from "./showcase-client";

class ShowcaseErrorBoundary extends React.Component<React.PropsWithChildren, { error: Error | null }> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <main className="semantic-demo semantic-demo--error" role="alert">
          <section className="semantic-demo__families">
            <article className="semantic-demo__detail semantic-demo__detail--error">
              <p className="semantic-demo__kicker">Demo runtime error</p>
              <h1>Showcase route failed to render</h1>
              <p className="mdwrk-primitive__text-fit-preserve">{this.state.error.message}</p>
            </article>
          </section>
        </main>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ShowcaseErrorBoundary>
      <SemanticShowcaseClient />
    </ShowcaseErrorBoundary>
  </React.StrictMode>,
);
