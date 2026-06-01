import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";
import { pluralize } from "./shared.js";

type MathSolverStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MathSolverStructuredData>["data"];

export interface MathSolverProps {
  name: string;
  description?: string;
  mathExpression?: string;
  potentialAction?: Array<{ target: string; mathExpressionInput?: string }>;
  learningResource?: Array<{ name: string; learningResourceType?: string }>;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MathSolverStructuredDataInput>;
}

export function MathSolver(props: MathSolverProps) {
  const base: MathSolverStructuredDataInput = {
    name: props.name,
    description: props.description,
    mathExpression: props.mathExpression,
    potentialAction: props.potentialAction?.map((action) => ({
      "@type": "SolveMathAction",
      target: action.target,
      "mathExpression-input": action.mathExpressionInput,
    })),
    learningResource: props.learningResource?.map((resource) => ({
      "@type": "LearningResource",
      name: resource.name,
      learningResourceType: resource.learningResourceType,
    })),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MathSolverStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="math-solver"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Math solver"}
        description={props.description}
        body={
          <>
            <section className="lander-semantic__solver-brief">
              <div className="lander-semantic__solver-stat">
                <span className="lander-semantic__section-kicker">Targets</span>
                <strong>{pluralize(props.potentialAction?.length ?? 0, "target")}</strong>
              </div>
              <div className="lander-semantic__solver-stat">
                <span className="lander-semantic__section-kicker">Resources</span>
                <strong>{pluralize(props.learningResource?.length ?? 0, "resource")}</strong>
              </div>
            </section>
            {props.mathExpression ? (
              <div className="lander-semantic__math-expression">
                <span className="lander-semantic__section-kicker">Expression</span>
                <strong>{props.mathExpression}</strong>
              </div>
            ) : null}
            {props.potentialAction?.length ? (
              <div className="lander-semantic__math-targets">
                {props.potentialAction.map((item) => (
                  <div className="lander-semantic__math-panel" key={item.target}>
                    <span className="lander-semantic__section-kicker">Target</span>
                    <strong>{item.target}</strong>
                  </div>
                ))}
              </div>
            ) : null}
            {props.learningResource?.length ? (
              <div className="lander-semantic__math-resources">
                {props.learningResource.map((item) => (
                  <div className="lander-semantic__math-panel" key={item.name}>
                    <span className="lander-semantic__section-kicker">Resource</span>
                    <strong>{item.name}</strong>
                  </div>
                ))}
              </div>
            ) : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
