import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPartOfTripProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPartOfTrip({ value, description = "Identifies that this [[Trip]] is a subTrip of another Trip.  For example Day 1, Day 2, etc. of a multi-day trip.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPartOfTripProps) {
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
