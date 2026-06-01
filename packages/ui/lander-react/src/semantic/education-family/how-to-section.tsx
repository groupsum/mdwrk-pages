import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";

type HowToSectionStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HowToSectionStructuredData>["data"];

export interface HowToSectionProps {
  name: string;
  text?: string;
  steps?: string;
  position?: number;
  url?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<HowToSectionStructuredDataInput>;
}

export function HowToSection(props: HowToSectionProps) {
  const base: HowToSectionStructuredDataInput = {
    name: props.name,
    text: props.text,
    position: props.position,
    url: props.url,
    steps: props.steps,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.HowToSectionStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="how-to-section"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "How-to section"}
        description={props.text}
        meta={[
          props.position !== undefined ? { label: "Position", value: String(props.position) } : null,
          props.url ? { label: "URL", value: props.url } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.steps ? <p>{props.steps}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
        as="section"
      />
    </>
  );
}
