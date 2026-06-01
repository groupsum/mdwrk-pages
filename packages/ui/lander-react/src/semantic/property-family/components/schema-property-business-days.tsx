import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BusinessDaysPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBusinessDaysProps extends BusinessDaysPropertyInput, GeneratedPropertyUiProps<BusinessDaysPropertyInput> {}

export function SchemaPropertyBusinessDays({ value: legacyValue, description = "Days of the week when the merchant typically operates, indicated via opening hours markup.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBusinessDaysProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BusinessDaysPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-business-days",
    shellClassName: "lander-semantic--schema-property-business-days",
    title: "businessDays",
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
