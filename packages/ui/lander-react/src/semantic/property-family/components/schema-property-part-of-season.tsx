import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PartOfSeasonPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPartOfSeasonProps extends PartOfSeasonPropertyInput, GeneratedPropertyUiProps<PartOfSeasonPropertyInput> {}

export function SchemaPropertyPartOfSeason({ value: legacyValue, description = "The season to which this episode belongs.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPartOfSeasonProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PartOfSeasonPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-part-of-season",
    shellClassName: "lander-semantic--schema-property-part-of-season",
    title: "partOfSeason",
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
