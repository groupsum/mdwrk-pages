import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";

type HowToToolStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HowToToolStructuredData>["data"];

export interface HowToToolProps {
  name?: string;
  requiredQuantity?: string;
  position?: number;
  url?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<HowToToolStructuredDataInput>;
}

export function HowToTool(props: HowToToolProps) {
  const base: HowToToolStructuredDataInput = {
    name: props.name,
    requiredQuantity: props.requiredQuantity,
    position: props.position,
    url: props.url,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.HowToToolStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="how-to-tool"
        title={props.name ?? "How-to tool"}
        eyebrow={props.viewModel?.eyebrow ?? "Tool"}
        meta={[
          props.requiredQuantity ? { label: "Required quantity", value: props.requiredQuantity } : null,
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
