import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AppliesToDeliveryMethodPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAppliesToDeliveryMethodProps extends AppliesToDeliveryMethodPropertyInput, GeneratedPropertyUiProps<AppliesToDeliveryMethodPropertyInput> {}

export function SchemaPropertyAppliesToDeliveryMethod({ value: legacyValue, description = "The delivery method(s) to which the delivery charge or payment charge specification applies.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAppliesToDeliveryMethodProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AppliesToDeliveryMethodPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-applies-to-delivery-method",
    shellClassName: "lander-semantic--schema-property-applies-to-delivery-method",
    title: "appliesToDeliveryMethod",
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

(SchemaPropertyAppliesToDeliveryMethod as typeof SchemaPropertyAppliesToDeliveryMethod & { toStructuredData: (props: SchemaPropertyAppliesToDeliveryMethodProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
