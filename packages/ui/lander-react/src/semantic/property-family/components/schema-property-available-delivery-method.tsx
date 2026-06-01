import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAvailableDeliveryMethodProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAvailableDeliveryMethod({ value, description = "The delivery method(s) available for this offer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAvailableDeliveryMethodProps) {
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
