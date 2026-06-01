import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyExpectsAcceptanceOfProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyExpectsAcceptanceOf({ value, description = "An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyExpectsAcceptanceOfProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ExpectsAcceptanceOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-expects-acceptance-of",
    shellClassName: "lander-semantic--schema-property-expects-acceptance-of",
    title: "expectsAcceptanceOf",
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
