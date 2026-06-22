import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AmountPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAmountProps extends AmountPropertyInput, GeneratedPropertyUiProps<AmountPropertyInput> {}

export function SchemaPropertyAmount({ value: legacyValue, description = "The amount of money.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAmountProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AmountPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-amount",
    shellClassName: "lander-semantic--schema-property-amount",
    title: "amount",
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

(SchemaPropertyAmount as typeof SchemaPropertyAmount & { toStructuredData: (props: SchemaPropertyAmountProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
