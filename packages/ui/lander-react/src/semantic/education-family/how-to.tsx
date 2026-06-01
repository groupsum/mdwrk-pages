import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";
import { pluralize } from "./shared.js";

type HowToStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HowToStructuredData>["data"];

export interface HowToProps {
  name: string;
  description?: string;
  steps: Array<{ name: string; text: string; url?: string; image?: string }>;
  totalTime?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<HowToStructuredDataInput>;
}

export function HowTo(props: HowToProps) {
  const base: HowToStructuredDataInput = {
    name: props.name,
    description: props.description,
    steps: props.steps,
    totalTime: props.totalTime,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.HowToStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="how-to"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "How to"}
        description={props.description}
        meta={props.totalTime ? [{ label: "Total time", value: props.totalTime }] : undefined}
        body={
          <>
            <section className="lander-semantic__how-to-overview">
              <div className="lander-semantic__how-to-stat">
                <span className="lander-semantic__section-kicker">Steps</span>
                <strong>{pluralize(props.steps.length, "step")}</strong>
              </div>
              {props.totalTime ? (
                <div className="lander-semantic__how-to-stat">
                  <span className="lander-semantic__section-kicker">Total time</span>
                  <strong>{props.totalTime}</strong>
                </div>
              ) : null}
            </section>
            {props.body}
            <div className="lander-semantic__section-header">
              <span className="lander-semantic__section-kicker">Execution</span>
              <h2>Steps</h2>
            </div>
            <ol className="lander-semantic__how-to-steps">
              {props.steps.map((step, index) => (
                <li className="lander-semantic__how-to-step" key={`${step.name}-${index}`}>
                  <span className="lander-semantic__how-to-step-kicker">Step {index + 1}</span>
                  <strong>{step.name}</strong>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
