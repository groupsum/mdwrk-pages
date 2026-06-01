import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAudienceTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAudienceType({ value, description = "The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAudienceTypeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AudienceTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-audience-type",
    shellClassName: "lander-semantic--schema-property-audience-type",
    title: "audienceType",
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
