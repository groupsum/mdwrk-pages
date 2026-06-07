import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AvailabilityPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAvailabilityProps extends AvailabilityPropertyInput, GeneratedPropertyUiProps<AvailabilityPropertyInput> {}

export function SchemaPropertyAvailability({ value: legacyValue, description = "The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAvailabilityProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AvailabilityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-availability",
    shellClassName: "lander-semantic--schema-property-availability",
    title: "availability",
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

(SchemaPropertyAvailability as typeof SchemaPropertyAvailability & { toStructuredData: (props: SchemaPropertyAvailabilityProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
