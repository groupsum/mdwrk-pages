import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMerchantReturnLinkProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMerchantReturnLink({ value, description = "Specifies a Web page or service by URL, for product returns.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMerchantReturnLinkProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MerchantReturnLinkPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-merchant-return-link",
    shellClassName: "lander-semantic--schema-property-merchant-return-link",
    title: "merchantReturnLink",
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
