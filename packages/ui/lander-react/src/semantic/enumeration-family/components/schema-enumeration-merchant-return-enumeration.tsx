import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface MerchantReturnEnumerationProps extends GeneratedEnumerationProps<string> {}

export function MerchantReturnEnumeration({ value, description = "Enumerates several kinds of product return policies.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: MerchantReturnEnumerationProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.MerchantReturnEnumerationStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-merchant-return-enumeration",
    shellClassName: "lander-semantic--schema-enumeration-merchant-return-enumeration",
    title: "MerchantReturnEnumeration",
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
