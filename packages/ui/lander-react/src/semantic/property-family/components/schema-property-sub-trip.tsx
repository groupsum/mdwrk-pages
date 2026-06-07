import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SubTripPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySubTripProps extends SubTripPropertyInput, GeneratedPropertyUiProps<SubTripPropertyInput> {}

export function SchemaPropertySubTrip({ value: legacyValue, description = "Identifies a [[Trip]] that is a subTrip of this Trip.  For example Day 1, Day 2, etc. of a multi-day trip.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySubTripProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SubTripPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sub-trip",
    shellClassName: "lander-semantic--schema-property-sub-trip",
    title: "subTrip",
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

(SchemaPropertySubTrip as typeof SchemaPropertySubTrip & { toStructuredData: (props: SchemaPropertySubTripProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
