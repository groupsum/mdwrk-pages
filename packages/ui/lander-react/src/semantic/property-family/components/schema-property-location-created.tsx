import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLocationCreatedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLocationCreated({ value, description = "The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLocationCreatedProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LocationCreatedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-location-created",
    shellClassName: "lander-semantic--schema-property-location-created",
    title: "locationCreated",
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
