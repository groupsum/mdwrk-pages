import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, renderStructuredSection, omitRecordKeys } from "../shared.js";
import { pluralize } from "./shared.js";

type FAQPageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.FAQPageStructuredData>["data"];

export interface FAQPageProps extends FAQPageStructuredDataInput {
  heading?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode; collapsible?: boolean; showStructuredFields?: boolean };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<FAQPageStructuredDataInput>;
}

export function FAQPage(props: FAQPageProps) {
  const { heading, body, viewModel, className, emitStructuredData, structuredDataOverrides, ...base } = props;
  const structuredData = { ...base, ...(structuredDataOverrides ?? {}) } as FAQPageStructuredDataInput;
  const visibleItems = base.items;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.FAQPageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="faq-page"
        title={heading ?? (typeof base.name === "string" ? base.name : "Frequently Asked Questions")}
        eyebrow={viewModel?.eyebrow ?? "FAQ"}
        description={typeof base.description === "string" ? base.description : undefined}
        body={
          <>
            {body}
            <section className="lander-semantic__faq-overview">
              <div className="lander-semantic__faq-stat">
                <span className="lander-semantic__section-kicker">Questions</span>
                <strong>{pluralize(visibleItems.length, "question")}</strong>
              </div>
              <div className="lander-semantic__faq-stat">
                <span className="lander-semantic__section-kicker">Format</span>
                <strong>{viewModel?.collapsible ? "Collapsible review" : "Editorial list"}</strong>
              </div>
            </section>
            <div className="lander-semantic__faq-list">
              {visibleItems.map((item) =>
                viewModel?.collapsible ? (
                  <details className="lander-semantic__faq-item" key={item.question}>
                    <summary>
                      <span className="lander-semantic__faq-kicker">Question</span>
                      <strong>{item.question}</strong>
                    </summary>
                    <p>{item.answer}</p>
                  </details>
                ) : (
                  <article className="lander-semantic__faq-item" key={item.question}>
                    <span className="lander-semantic__faq-kicker">Question</span>
                    <h2>{item.question}</h2>
                    <p>{item.answer}</p>
                  </article>
                ),
              )}
            </div>
            {viewModel?.showStructuredFields
              ? renderStructuredSection(omitRecordKeys(structuredData as Record<string, unknown>, ["name", "description", "items"]), "Structured fields")
              : null}
          </>
        }
        footer={viewModel?.footer}
        className={className}
        as="section"
      />
    </>
  );
}
