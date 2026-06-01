import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MerchantReturnDaysPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMerchantReturnDaysProps extends MerchantReturnDaysPropertyInput, GeneratedPropertyUiProps<MerchantReturnDaysPropertyInput> {}

export function SchemaPropertyMerchantReturnDays({ value: legacyValue, description = "Specifies either a fixed return date or the number of days (from the delivery date) that a product can be returned. Used when the [[returnPolicyCategory]] property is specified as [[MerchantReturnFiniteReturnWindow]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMerchantReturnDaysProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MerchantReturnDaysPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-merchant-return-days",
    shellClassName: "lander-semantic--schema-property-merchant-return-days",
    title: "merchantReturnDays",
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
