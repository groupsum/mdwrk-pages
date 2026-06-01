import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyServiceAudienceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyServiceAudience({ value, description = "The audience eligible for this service.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyServiceAudienceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ServiceAudiencePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-service-audience",
    shellClassName: "lander-semantic--schema-property-service-audience",
    title: "serviceAudience",
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
