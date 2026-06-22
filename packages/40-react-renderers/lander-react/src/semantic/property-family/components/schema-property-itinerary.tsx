import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ItineraryPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyItineraryProps extends ItineraryPropertyInput, GeneratedPropertyUiProps<ItineraryPropertyInput> {}

export function SchemaPropertyItinerary({ value: legacyValue, description = "Destination(s) ( [[Place]] ) that make up a trip. For a trip where destination order is important use [[ItemList]] to specify that order (see examples).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyItineraryProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyItinerary as typeof SchemaPropertyItinerary & { toStructuredData: (props: SchemaPropertyItineraryProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
