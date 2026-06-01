import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAvailabilityEndsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAvailabilityEnds({ value, description = "The end of the availability of the product or service included in the offer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAvailabilityEndsProps) {
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
