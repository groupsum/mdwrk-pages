import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DoesNotShipPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDoesNotShipProps extends DoesNotShipPropertyInput, GeneratedPropertyUiProps<DoesNotShipPropertyInput> {}

export function SchemaPropertyDoesNotShip({ value: legacyValue, description = "Indicates when shipping to a particular [[shippingDestination]] is not available.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDoesNotShipProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyDoesNotShip as typeof SchemaPropertyDoesNotShip & { toStructuredData: (props: SchemaPropertyDoesNotShipProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
