import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TripOriginPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTripOriginProps extends TripOriginPropertyInput, GeneratedPropertyUiProps<TripOriginPropertyInput> {}

export function SchemaPropertyTripOrigin({ value: legacyValue, description = "The location of origin of the trip, prior to any destination(s).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTripOriginProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyTripOrigin as typeof SchemaPropertyTripOrigin & { toStructuredData: (props: SchemaPropertyTripOriginProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
