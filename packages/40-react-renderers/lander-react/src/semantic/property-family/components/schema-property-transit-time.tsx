import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TransitTimePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTransitTimeProps extends TransitTimePropertyInput, GeneratedPropertyUiProps<TransitTimePropertyInput> {}

export function SchemaPropertyTransitTime({ value: legacyValue, description = "The typical delay the order has been sent for delivery and the goods reach the final customer.\n\n  In the context of [[ShippingDeliveryTime]], use the [[QuantitativeValue]]. Typical properties: minValue, maxValue, unitCode (d for DAY).\n\n  In the context of [[ShippingConditions]], use the [[ServicePeriod]]. It has a duration (as a [[QuantitativeValue]]) and also business days and a cut-off time.\n", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTransitTimeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyTransitTime as typeof SchemaPropertyTransitTime & { toStructuredData: (props: SchemaPropertyTransitTimeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
