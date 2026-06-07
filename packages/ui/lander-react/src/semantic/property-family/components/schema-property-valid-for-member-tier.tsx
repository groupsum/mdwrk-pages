import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ValidForMemberTierPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyValidForMemberTierProps extends ValidForMemberTierPropertyInput, GeneratedPropertyUiProps<ValidForMemberTierPropertyInput> {}

export function SchemaPropertyValidForMemberTier({ value: legacyValue, description = "The membership program tier(s) an Offer (or a PriceSpecification, OfferShippingDetails, or MerchantReturnPolicy under an Offer) is valid for.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyValidForMemberTierProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ValidForMemberTierPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-valid-for-member-tier",
    shellClassName: "lander-semantic--schema-property-valid-for-member-tier",
    title: "validForMemberTier",
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

(SchemaPropertyValidForMemberTier as typeof SchemaPropertyValidForMemberTier & { toStructuredData: (props: SchemaPropertyValidForMemberTierProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
