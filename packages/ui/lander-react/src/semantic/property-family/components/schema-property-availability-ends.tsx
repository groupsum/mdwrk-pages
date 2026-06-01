import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AvailabilityEndsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAvailabilityEndsProps extends AvailabilityEndsPropertyInput, GeneratedPropertyUiProps<AvailabilityEndsPropertyInput> {}

export function SchemaPropertyAvailabilityEnds({ value: legacyValue, description = "The end of the availability of the product or service included in the offer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAvailabilityEndsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AvailabilityEndsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-availability-ends",
    shellClassName: "lander-semantic--schema-property-availability-ends",
    title: "availabilityEnds",
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
