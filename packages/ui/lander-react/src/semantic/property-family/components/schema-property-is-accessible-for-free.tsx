import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IsAccessibleForFreePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsAccessibleForFreeProps extends IsAccessibleForFreePropertyInput, GeneratedPropertyUiProps<IsAccessibleForFreePropertyInput> {}

export function SchemaPropertyIsAccessibleForFree({ value: legacyValue, description = "A flag to signal that the item, event, or place is accessible for free.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIsAccessibleForFreeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsAccessibleForFreePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-accessible-for-free",
    shellClassName: "lander-semantic--schema-property-is-accessible-for-free",
    title: "isAccessibleForFree",
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

(SchemaPropertyIsAccessibleForFree as typeof SchemaPropertyIsAccessibleForFree & { toStructuredData: (props: SchemaPropertyIsAccessibleForFreeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
