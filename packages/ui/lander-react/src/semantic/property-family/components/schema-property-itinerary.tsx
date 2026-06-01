import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyItineraryProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyItinerary({ value, description = "Destination(s) ( [[Place]] ) that make up a trip. For a trip where destination order is important use [[ItemList]] to specify that order (see examples).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyItineraryProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ItineraryPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-itinerary",
    shellClassName: "lander-semantic--schema-property-itinerary",
    title: "itinerary",
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
