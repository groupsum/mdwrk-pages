import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInteractivityTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyInteractivityType({ value, description = "The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyInteractivityTypeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InteractivityTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-interactivity-type",
    shellClassName: "lander-semantic--schema-property-interactivity-type",
    title: "interactivityType",
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
