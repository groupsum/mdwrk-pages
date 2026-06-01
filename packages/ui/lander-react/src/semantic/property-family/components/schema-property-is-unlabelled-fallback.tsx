import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IsUnlabelledFallbackPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsUnlabelledFallbackProps extends IsUnlabelledFallbackPropertyInput, GeneratedPropertyUiProps<IsUnlabelledFallbackPropertyInput> {}

export function SchemaPropertyIsUnlabelledFallback({ value: legacyValue, description = "This can be marked 'true' to indicate that some published [[DeliveryTimeSettings]] or [[ShippingRateSettings]] are intended to apply to all [[OfferShippingDetails]] published by the same merchant, when referenced by a [[shippingSettingsLink]] in those settings. It is not meaningful to use a 'true' value for this property alongside a transitTimeLabel (for [[DeliveryTimeSettings]]) or shippingLabel (for [[ShippingRateSettings]]), since this property is for use with unlabelled settings.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIsUnlabelledFallbackProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsUnlabelledFallbackPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-unlabelled-fallback",
    shellClassName: "lander-semantic--schema-property-is-unlabelled-fallback",
    title: "isUnlabelledFallback",
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
