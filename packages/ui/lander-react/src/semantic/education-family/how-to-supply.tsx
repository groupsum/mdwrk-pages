import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";

type HowToSupplyStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HowToSupplyStructuredData>["data"];

export interface HowToSupplyProps {
  name?: string;
  requiredQuantity?: string;
  estimatedCost?: string;
  position?: number;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<HowToSupplyStructuredDataInput>;
}

export function HowToSupply(props: HowToSupplyProps) {
  const base: HowToSupplyStructuredDataInput = {
    name: props.name,
    requiredQuantity: props.requiredQuantity,
    estimatedCost: props.estimatedCost ? { "@type": "MonetaryAmount", name: props.estimatedCost } : undefined,
    position: props.position,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.HowToSupplyStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="how-to-supply"
        title={props.name ?? "How-to supply"}
        eyebrow={props.viewModel?.eyebrow ?? "Supply"}
        meta={[
          props.requiredQuantity ? { label: "Required quantity", value: props.requiredQuantity } : null,
          props.estimatedCost ? { label: "Estimated cost", value: props.estimatedCost } : null,
          props.position !== undefined ? { label: "Position", value: String(props.position) } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
        as="section"
      />
    </>
  );
}
