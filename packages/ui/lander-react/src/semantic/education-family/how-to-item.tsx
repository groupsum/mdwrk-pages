import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";

type HowToItemStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HowToItemStructuredData>["data"];

export interface HowToItemProps {
  name?: string;
  requiredQuantity?: string;
  position?: number;
  url?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<HowToItemStructuredDataInput>;
}

export function HowToItem(props: HowToItemProps) {
  const base: HowToItemStructuredDataInput = {
    name: props.name,
    requiredQuantity: props.requiredQuantity,
    position: props.position,
    url: props.url,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <SemanticShell
      kind="how-to-item"
      title={props.name ?? "How-to item"}
      eyebrow={props.viewModel?.eyebrow ?? "How-to item"}
      meta={[
        props.requiredQuantity ? { label: "Required quantity", value: props.requiredQuantity } : null,
        props.position !== undefined ? { label: "Position", value: String(props.position) } : null,
        props.url ? { label: "URL", value: props.url } : null,
      ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
      body={
        <>
          <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
            <structuredDataReact.HowToItemStructuredData data={structuredData} />
          </SemanticStructuredDataGate>
          {props.body}
        </>
      }
      footer={props.viewModel?.footer}
      className={props.className}
      as="section"
    />
  );
}
