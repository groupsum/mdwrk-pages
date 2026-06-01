import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyParentServiceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyParentService({ value, description = "A broadcast service to which the broadcast service may belong to such as regional variations of a national channel.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyParentServiceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ParentServicePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-parent-service",
    shellClassName: "lander-semantic--schema-property-parent-service",
    title: "parentService",
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
