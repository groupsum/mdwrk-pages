import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AddOnPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAddOnProps extends AddOnPropertyInput, GeneratedPropertyUiProps<AddOnPropertyInput> {}

export function SchemaPropertyAddOn({ value: legacyValue, description = "An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAddOnProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AddOnPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-add-on",
    shellClassName: "lander-semantic--schema-property-add-on",
    title: "addOn",
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
