import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDiagramProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDiagram({ value, description = "An image containing a diagram that illustrates the structure and/or its component substructures and/or connections with other structures.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDiagramProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DiagramPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-diagram",
    shellClassName: "lander-semantic--schema-property-diagram",
    title: "diagram",
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
