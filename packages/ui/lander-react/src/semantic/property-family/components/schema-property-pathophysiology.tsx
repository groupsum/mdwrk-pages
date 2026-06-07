import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PathophysiologyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPathophysiologyProps extends PathophysiologyPropertyInput, GeneratedPropertyUiProps<PathophysiologyPropertyInput> {}

export function SchemaPropertyPathophysiology({ value: legacyValue, description = "Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPathophysiologyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyPathophysiology as typeof SchemaPropertyPathophysiology & { toStructuredData: (props: SchemaPropertyPathophysiologyProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
