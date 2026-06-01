import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { UnitTextPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUnitTextProps extends UnitTextPropertyInput, GeneratedPropertyUiProps<UnitTextPropertyInput> {}

export function SchemaPropertyUnitText({ value: legacyValue, description = "A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for\n<a href='unitCode'>unitCode</a>.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyUnitTextProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.UnitTextPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-unit-text",
    shellClassName: "lander-semantic--schema-property-unit-text",
    title: "unitText",
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
