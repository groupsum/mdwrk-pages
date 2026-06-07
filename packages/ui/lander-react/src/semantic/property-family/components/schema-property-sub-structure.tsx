import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SubStructurePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySubStructureProps extends SubStructurePropertyInput, GeneratedPropertyUiProps<SubStructurePropertyInput> {}

export function SchemaPropertySubStructure({ value: legacyValue, description = "Component (sub-)structure(s) that comprise this anatomical structure.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySubStructureProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SubStructurePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sub-structure",
    shellClassName: "lander-semantic--schema-property-sub-structure",
    title: "subStructure",
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

(SchemaPropertySubStructure as typeof SchemaPropertySubStructure & { toStructuredData: (props: SchemaPropertySubStructureProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
