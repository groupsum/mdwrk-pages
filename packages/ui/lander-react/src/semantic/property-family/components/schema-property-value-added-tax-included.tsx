import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyValueAddedTaxIncludedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyValueAddedTaxIncluded({ value, description = "Specifies whether the applicable value-added tax (VAT) is included in the price specification or not.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyValueAddedTaxIncludedProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ValueAddedTaxIncludedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-value-added-tax-included",
    shellClassName: "lander-semantic--schema-property-value-added-tax-included",
    title: "valueAddedTaxIncluded",
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
