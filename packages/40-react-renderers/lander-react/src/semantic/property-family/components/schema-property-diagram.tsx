import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DiagramPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDiagramProps extends DiagramPropertyInput, GeneratedPropertyUiProps<DiagramPropertyInput> {}

export function SchemaPropertyDiagram({ value: legacyValue, description = "An image containing a diagram that illustrates the structure and/or its component substructures and/or connections with other structures.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDiagramProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyDiagram as typeof SchemaPropertyDiagram & { toStructuredData: (props: SchemaPropertyDiagramProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
