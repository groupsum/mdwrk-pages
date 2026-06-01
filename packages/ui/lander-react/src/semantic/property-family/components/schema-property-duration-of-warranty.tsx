import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDurationOfWarrantyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDurationOfWarranty({ value, description = "The duration of the warranty promise. Common unitCode values are ANN for year, MON for months, or DAY for days.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDurationOfWarrantyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DurationOfWarrantyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-duration-of-warranty",
    shellClassName: "lander-semantic--schema-property-duration-of-warranty",
    title: "durationOfWarranty",
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
