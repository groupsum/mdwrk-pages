import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ParentPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyParentProps extends ParentPropertyInput, GeneratedPropertyUiProps<ParentPropertyInput> {}

export function SchemaPropertyParent({ value: legacyValue, description = "A parent of this person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyParentProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ParentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-parent",
    shellClassName: "lander-semantic--schema-property-parent",
    title: "parent",
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

(SchemaPropertyParent as typeof SchemaPropertyParent & { toStructuredData: (props: SchemaPropertyParentProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
