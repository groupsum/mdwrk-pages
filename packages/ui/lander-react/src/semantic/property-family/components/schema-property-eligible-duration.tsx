import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEligibleDurationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEligibleDuration({ value, description = "The duration for which the given offer is valid.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEligibleDurationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EligibleDurationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-eligible-duration",
    shellClassName: "lander-semantic--schema-property-eligible-duration",
    title: "eligibleDuration",
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
