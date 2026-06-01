import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";

type HowToStepStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HowToStepStructuredData>["data"];

export interface HowToStepProps {
  name: string;
  text: string;
  position?: number;
  url?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<HowToStepStructuredDataInput>;
}

export function HowToStep(props: HowToStepProps) {
  const base: HowToStepStructuredDataInput = {
    name: props.name,
    text: props.text,
    position: props.position,
    url: props.url,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.HowToStepStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="how-to-step"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "How-to step"}
        description={props.text}
        meta={[
          props.position !== undefined ? { label: "Position", value: String(props.position) } : null,
          props.url ? { label: "URL", value: props.url } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
        as="section"
      />
    </>
  );
}
