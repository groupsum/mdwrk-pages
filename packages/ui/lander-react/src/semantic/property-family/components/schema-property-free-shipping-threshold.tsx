import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FreeShippingThresholdPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFreeShippingThresholdProps extends FreeShippingThresholdPropertyInput, GeneratedPropertyUiProps<FreeShippingThresholdPropertyInput> {}

export function SchemaPropertyFreeShippingThreshold({ value: legacyValue, description = "A monetary value above (or at) which the shipping rate becomes free. Intended to be used via an [[OfferShippingDetails]] with [[shippingSettingsLink]] matching this [[ShippingRateSettings]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFreeShippingThresholdProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyFreeShippingThreshold as typeof SchemaPropertyFreeShippingThreshold & { toStructuredData: (props: SchemaPropertyFreeShippingThresholdProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
