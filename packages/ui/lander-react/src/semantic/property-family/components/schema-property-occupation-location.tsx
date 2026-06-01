import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOccupationLocationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyOccupationLocation({ value, description = " The region/country for which this occupational description is appropriate. Note that educational requirements and qualifications can vary between jurisdictions.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyOccupationLocationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OccupationLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-occupation-location",
    shellClassName: "lander-semantic--schema-property-occupation-location",
    title: "occupationLocation",
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
