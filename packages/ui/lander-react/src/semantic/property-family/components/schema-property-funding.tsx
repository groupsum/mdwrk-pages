import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFundingProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFunding({ value, description = "A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFundingProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FundingPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-funding",
    shellClassName: "lander-semantic--schema-property-funding",
    title: "funding",
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
