import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CreditTextPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCreditTextProps extends CreditTextPropertyInput, GeneratedPropertyUiProps<CreditTextPropertyInput> {}

export function SchemaPropertyCreditText({ value: legacyValue, description = "Text that can be used to credit person(s) and/or organization(s) associated with a published Creative Work.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCreditTextProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyCreditText as typeof SchemaPropertyCreditText & { toStructuredData: (props: SchemaPropertyCreditTextProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
