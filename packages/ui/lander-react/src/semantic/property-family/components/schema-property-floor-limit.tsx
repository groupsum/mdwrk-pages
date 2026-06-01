import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FloorLimitPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFloorLimitProps extends FloorLimitPropertyInput, GeneratedPropertyUiProps<FloorLimitPropertyInput> {}

export function SchemaPropertyFloorLimit({ value: legacyValue, description = "A floor limit is the amount of money above which credit card transactions must be authorized.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFloorLimitProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FloorLimitPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-floor-limit",
    shellClassName: "lander-semantic--schema-property-floor-limit",
    title: "floorLimit",
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
