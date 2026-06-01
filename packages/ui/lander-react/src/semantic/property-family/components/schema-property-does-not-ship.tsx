import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDoesNotShipProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDoesNotShip({ value, description = "Indicates when shipping to a particular [[shippingDestination]] is not available.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDoesNotShipProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DoesNotShipPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-does-not-ship",
    shellClassName: "lander-semantic--schema-property-does-not-ship",
    title: "doesNotShip",
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
