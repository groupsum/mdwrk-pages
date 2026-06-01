import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySubTripProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySubTrip({ value, description = "Identifies a [[Trip]] that is a subTrip of this Trip.  For example Day 1, Day 2, etc. of a multi-day trip.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySubTripProps) {
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
