import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FulfillmentTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFulfillmentTypeProps extends FulfillmentTypePropertyInput, GeneratedPropertyUiProps<FulfillmentTypePropertyInput> {}

export function SchemaPropertyFulfillmentType({ value: legacyValue, description = "Type of fulfillment applicable to the [[ShippingService]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFulfillmentTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FulfillmentTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-fulfillment-type",
    shellClassName: "lander-semantic--schema-property-fulfillment-type",
    title: "fulfillmentType",
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

(SchemaPropertyFulfillmentType as typeof SchemaPropertyFulfillmentType & { toStructuredData: (props: SchemaPropertyFulfillmentTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
