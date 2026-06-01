import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FundedItemPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFundedItemProps extends FundedItemPropertyInput, GeneratedPropertyUiProps<FundedItemPropertyInput> {}

export function SchemaPropertyFundedItem({ value: legacyValue, description = "Indicates something directly or indirectly funded or sponsored through a [[Grant]]. See also [[ownershipFundingInfo]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFundedItemProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
