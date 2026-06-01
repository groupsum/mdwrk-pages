import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAdvanceBookingRequirementProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAdvanceBookingRequirement({ value, description = "The amount of time that is required between accepting the offer and the actual usage of the resource or service.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAdvanceBookingRequirementProps) {
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
