import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEndorsersProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEndorsers({ value, description = "People or organizations that endorse the plan.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEndorsersProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EndorsersPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-endorsers",
    shellClassName: "lander-semantic--schema-property-endorsers",
    title: "endorsers",
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
