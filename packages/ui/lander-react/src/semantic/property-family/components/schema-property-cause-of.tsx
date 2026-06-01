import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCauseOfProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCauseOf({ value, description = "The condition, complication, symptom, sign, etc. caused.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCauseOfProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CauseOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-cause-of",
    shellClassName: "lander-semantic--schema-property-cause-of",
    title: "causeOf",
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
