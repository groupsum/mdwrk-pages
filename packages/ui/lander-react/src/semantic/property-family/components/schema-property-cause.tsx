import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCauseProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCause({ value, description = "The cause of a medical condition.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCauseProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CausePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-cause",
    shellClassName: "lander-semantic--schema-property-cause",
    title: "cause",
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
