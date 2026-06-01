import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOfferCountProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyOfferCount({ value, description = "The number of offers for the product.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyOfferCountProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OfferCountPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-offer-count",
    shellClassName: "lander-semantic--schema-property-offer-count",
    title: "offerCount",
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
