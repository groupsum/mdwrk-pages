import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasShippingServicePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasShippingServiceProps extends HasShippingServicePropertyInput, GeneratedPropertyUiProps<HasShippingServicePropertyInput> {}

export function SchemaPropertyHasShippingService({ value: legacyValue, description = "Specification of a shipping service offered by the organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasShippingServiceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasShippingServicePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-shipping-service",
    shellClassName: "lander-semantic--schema-property-has-shipping-service",
    title: "hasShippingService",
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

(SchemaPropertyHasShippingService as typeof SchemaPropertyHasShippingService & { toStructuredData: (props: SchemaPropertyHasShippingServiceProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
