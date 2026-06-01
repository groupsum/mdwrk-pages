import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAvailabilityProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAvailability({ value, description = "The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAvailabilityProps) {
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
