import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRenegotiableLoanProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRenegotiableLoan({ value, description = "Whether the terms for payment of interest can be renegotiated during the life of the loan.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRenegotiableLoanProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RenegotiableLoanPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-renegotiable-loan",
    shellClassName: "lander-semantic--schema-property-renegotiable-loan",
    title: "renegotiableLoan",
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
