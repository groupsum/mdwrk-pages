import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PageEndPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPageEndProps extends PageEndPropertyInput, GeneratedPropertyUiProps<PageEndPropertyInput> {}

export function SchemaPropertyPageEnd({ value: legacyValue, description = "The page on which the work ends; for example \"138\" or \"xvi\".", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPageEndProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PageEndPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-page-end",
    shellClassName: "lander-semantic--schema-property-page-end",
    title: "pageEnd",
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
