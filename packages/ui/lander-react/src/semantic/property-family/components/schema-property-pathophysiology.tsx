import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPathophysiologyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPathophysiology({ value, description = "Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPathophysiologyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PathophysiologyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-pathophysiology",
    shellClassName: "lander-semantic--schema-property-pathophysiology",
    title: "pathophysiology",
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
