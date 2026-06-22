import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MerchantReturnLinkPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMerchantReturnLinkProps extends MerchantReturnLinkPropertyInput, GeneratedPropertyUiProps<MerchantReturnLinkPropertyInput> {}

export function SchemaPropertyMerchantReturnLink({ value: legacyValue, description = "Specifies a Web page or service by URL, for product returns.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMerchantReturnLinkProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyMerchantReturnLink as typeof SchemaPropertyMerchantReturnLink & { toStructuredData: (props: SchemaPropertyMerchantReturnLinkProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
