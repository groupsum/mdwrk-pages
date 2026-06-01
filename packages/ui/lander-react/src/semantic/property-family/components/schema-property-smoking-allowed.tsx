import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySmokingAllowedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySmokingAllowed({ value, description = "Indicates whether it is allowed to smoke in the place, e.g. in the restaurant, hotel or hotel room.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySmokingAllowedProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SmokingAllowedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-smoking-allowed",
    shellClassName: "lander-semantic--schema-property-smoking-allowed",
    title: "smokingAllowed",
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
