import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFreeShippingThresholdProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFreeShippingThreshold({ value, description = "A monetary value above (or at) which the shipping rate becomes free. Intended to be used via an [[OfferShippingDetails]] with [[shippingSettingsLink]] matching this [[ShippingRateSettings]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFreeShippingThresholdProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FreeShippingThresholdPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-free-shipping-threshold",
    shellClassName: "lander-semantic--schema-property-free-shipping-threshold",
    title: "freeShippingThreshold",
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
