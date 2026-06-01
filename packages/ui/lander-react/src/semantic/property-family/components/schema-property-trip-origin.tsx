import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTripOriginProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTripOrigin({ value, description = "The location of origin of the trip, prior to any destination(s).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTripOriginProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TripOriginPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-trip-origin",
    shellClassName: "lander-semantic--schema-property-trip-origin",
    title: "tripOrigin",
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
