import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyParentsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyParents({ value, description = "A parents of the person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyParentsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ParentsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-parents",
    shellClassName: "lander-semantic--schema-property-parents",
    title: "parents",
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
