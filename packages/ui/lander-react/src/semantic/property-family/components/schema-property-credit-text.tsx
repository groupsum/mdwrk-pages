import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCreditTextProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCreditText({ value, description = "Text that can be used to credit person(s) and/or organization(s) associated with a published Creative Work.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCreditTextProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CreditTextPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-credit-text",
    shellClassName: "lander-semantic--schema-property-credit-text",
    title: "creditText",
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
