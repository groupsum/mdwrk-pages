import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEvidenceOriginProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEvidenceOrigin({ value, description = "Source of the data used to formulate the guidance, e.g. RCT, consensus opinion, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEvidenceOriginProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EvidenceOriginPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-evidence-origin",
    shellClassName: "lander-semantic--schema-property-evidence-origin",
    title: "evidenceOrigin",
    value,
    description,
    examples,
    body,
    className,
    emitStructuredData,
    structuredDataOverrides,
    viewModel,
  });
}
