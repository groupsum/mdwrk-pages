import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMerchantReturnDaysProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMerchantReturnDays({ value, description = "Specifies either a fixed return date or the number of days (from the delivery date) that a product can be returned. Used when the [[returnPolicyCategory]] property is specified as [[MerchantReturnFiniteReturnWindow]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMerchantReturnDaysProps) {
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
