import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAppliesToDeliveryMethodProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAppliesToDeliveryMethod({ value, description = "The delivery method(s) to which the delivery charge or payment charge specification applies.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAppliesToDeliveryMethodProps) {
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
