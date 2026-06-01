import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AdvanceBookingRequirementPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAdvanceBookingRequirementProps extends AdvanceBookingRequirementPropertyInput, GeneratedPropertyUiProps<AdvanceBookingRequirementPropertyInput> {}

export function SchemaPropertyAdvanceBookingRequirement({ value: legacyValue, description = "The amount of time that is required between accepting the offer and the actual usage of the resource or service.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAdvanceBookingRequirementProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AdvanceBookingRequirementPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-advance-booking-requirement",
    shellClassName: "lander-semantic--schema-property-advance-booking-requirement",
    title: "advanceBookingRequirement",
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
