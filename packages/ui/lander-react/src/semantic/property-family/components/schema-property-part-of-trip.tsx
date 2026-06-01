import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PartOfTripPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPartOfTripProps extends PartOfTripPropertyInput, GeneratedPropertyUiProps<PartOfTripPropertyInput> {}

export function SchemaPropertyPartOfTrip({ value: legacyValue, description = "Identifies that this [[Trip]] is a subTrip of another Trip.  For example Day 1, Day 2, etc. of a multi-day trip.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPartOfTripProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PartOfTripPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-part-of-trip",
    shellClassName: "lander-semantic--schema-property-part-of-trip",
    title: "partOfTrip",
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
