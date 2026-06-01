import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTransitTimeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTransitTime({ value, description = "The typical delay the order has been sent for delivery and the goods reach the final customer.\n\n  In the context of [[ShippingDeliveryTime]], use the [[QuantitativeValue]]. Typical properties: minValue, maxValue, unitCode (d for DAY).\n\n  In the context of [[ShippingConditions]], use the [[ServicePeriod]]. It has a duration (as a [[QuantitativeValue]]) and also business days and a cut-off time.\n", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTransitTimeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TransitTimePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-transit-time",
    shellClassName: "lander-semantic--schema-property-transit-time",
    title: "transitTime",
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
