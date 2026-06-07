import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ItemDefectReturnShippingFeesAmountPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyItemDefectReturnShippingFeesAmountProps extends ItemDefectReturnShippingFeesAmountPropertyInput, GeneratedPropertyUiProps<ItemDefectReturnShippingFeesAmountPropertyInput> {}

export function SchemaPropertyItemDefectReturnShippingFeesAmount({ value: legacyValue, description = "Amount of shipping costs for defect product returns. Applicable when property [[itemDefectReturnFees]] equals [[ReturnShippingFees]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyItemDefectReturnShippingFeesAmountProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ItemDefectReturnShippingFeesAmountPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-item-defect-return-shipping-fees-amount",
    shellClassName: "lander-semantic--schema-property-item-defect-return-shipping-fees-amount",
    title: "itemDefectReturnShippingFeesAmount",
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

(SchemaPropertyItemDefectReturnShippingFeesAmount as typeof SchemaPropertyItemDefectReturnShippingFeesAmount & { toStructuredData: (props: SchemaPropertyItemDefectReturnShippingFeesAmountProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
