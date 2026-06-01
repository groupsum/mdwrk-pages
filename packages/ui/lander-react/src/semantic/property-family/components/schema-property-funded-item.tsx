import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFundedItemProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFundedItem({ value, description = "Indicates something directly or indirectly funded or sponsored through a [[Grant]]. See also [[ownershipFundingInfo]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFundedItemProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FundedItemPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-funded-item",
    shellClassName: "lander-semantic--schema-property-funded-item",
    title: "fundedItem",
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
