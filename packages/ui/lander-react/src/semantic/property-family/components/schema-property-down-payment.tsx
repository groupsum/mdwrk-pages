import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DownPaymentPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDownPaymentProps extends DownPaymentPropertyInput, GeneratedPropertyUiProps<DownPaymentPropertyInput> {}

export function SchemaPropertyDownPayment({ value: legacyValue, description = "a type of payment made in cash during the onset of the purchase of an expensive good/service. The payment typically represents only a percentage of the full purchase price.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDownPaymentProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DownPaymentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-down-payment",
    shellClassName: "lander-semantic--schema-property-down-payment",
    title: "downPayment",
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

(SchemaPropertyDownPayment as typeof SchemaPropertyDownPayment & { toStructuredData: (props: SchemaPropertyDownPaymentProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
