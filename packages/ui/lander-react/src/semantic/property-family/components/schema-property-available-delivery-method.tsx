import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AvailableDeliveryMethodPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAvailableDeliveryMethodProps extends AvailableDeliveryMethodPropertyInput, GeneratedPropertyUiProps<AvailableDeliveryMethodPropertyInput> {}

export function SchemaPropertyAvailableDeliveryMethod({ value: legacyValue, description = "The delivery method(s) available for this offer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAvailableDeliveryMethodProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AvailableDeliveryMethodPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-available-delivery-method",
    shellClassName: "lander-semantic--schema-property-available-delivery-method",
    title: "availableDeliveryMethod",
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
