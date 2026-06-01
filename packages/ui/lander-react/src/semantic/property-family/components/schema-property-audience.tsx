import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAudienceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAudience({ value, description = "An intended audience, i.e. a group for whom something was created.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAudienceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AudiencePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-audience",
    shellClassName: "lander-semantic--schema-property-audience",
    title: "audience",
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
