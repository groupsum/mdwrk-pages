import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAvailabilityStartsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAvailabilityStarts({ value, description = "The beginning of the availability of the product or service included in the offer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAvailabilityStartsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AvailabilityStartsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-availability-starts",
    shellClassName: "lander-semantic--schema-property-availability-starts",
    title: "availabilityStarts",
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
