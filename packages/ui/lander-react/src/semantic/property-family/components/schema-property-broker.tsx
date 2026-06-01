import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BrokerPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBrokerProps extends BrokerPropertyInput, GeneratedPropertyUiProps<BrokerPropertyInput> {}

export function SchemaPropertyBroker({ value: legacyValue, description = "An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBrokerProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BrokerPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-broker",
    shellClassName: "lander-semantic--schema-property-broker",
    title: "broker",
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
