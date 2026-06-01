import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDownPaymentProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDownPayment({ value, description = "a type of payment made in cash during the onset of the purchase of an expensive good/service. The payment typically represents only a percentage of the full purchase price.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDownPaymentProps) {
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
