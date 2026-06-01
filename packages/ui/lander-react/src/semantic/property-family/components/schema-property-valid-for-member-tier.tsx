import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyValidForMemberTierProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyValidForMemberTier({ value, description = "The membership program tier(s) an Offer (or a PriceSpecification, OfferShippingDetails, or MerchantReturnPolicy under an Offer) is valid for.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyValidForMemberTierProps) {
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
