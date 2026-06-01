import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMakesOfferProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMakesOffer({ value, description = "A pointer to products or services offered by the organization or person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMakesOfferProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MakesOfferPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-makes-offer",
    shellClassName: "lander-semantic--schema-property-makes-offer",
    title: "makesOffer",
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
