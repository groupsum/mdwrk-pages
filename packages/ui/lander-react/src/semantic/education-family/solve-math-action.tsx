import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, renderJsonPreview } from "../shared.js";

type SolveMathActionStructuredDataInput = React.ComponentProps<typeof structuredDataReact.SolveMathActionStructuredData>["data"];

export interface SolveMathActionProps {
  target: string;
  mathExpressionInput?: string;
  eduQuestionType?: string | string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<SolveMathActionStructuredDataInput>;
}

export function SolveMathAction(props: SolveMathActionProps) {
  const base: SolveMathActionStructuredDataInput = {
    target: props.target,
    mathExpressionInput: props.mathExpressionInput,
    eduQuestionType: props.eduQuestionType,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.SolveMathActionStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="solve-math-action"
        title={props.viewModel?.eyebrow ?? "Solve math action"}
        body={
          <div className="lander-semantic__solve-math-summary">
            <div className="lander-semantic__solve-math-row">
              <span className="lander-semantic__section-kicker">Action</span>
              <strong>Evaluate expression</strong>
            </div>
            <div className="lander-semantic__solve-math-row">
              <span className="lander-semantic__section-kicker">Target</span>
              <strong>{props.target}</strong>
            </div>
            {props.mathExpressionInput ? (
              <div className="lander-semantic__solve-math-row">
                <span className="lander-semantic__section-kicker">Input</span>
                <strong>{props.mathExpressionInput}</strong>
              </div>
            ) : null}
            {props.eduQuestionType ? (
              <div className="lander-semantic__solve-math-row">
                <span className="lander-semantic__section-kicker">Question type</span>
                <strong>{renderJsonPreview(props.eduQuestionType)}</strong>
              </div>
            ) : null}
            {props.body}
          </div>
        }
        footer={props.viewModel?.footer}
        className={props.className}
        as="section"
      />
    </>
  );
}
