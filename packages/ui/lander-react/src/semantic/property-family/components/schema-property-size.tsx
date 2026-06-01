import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySizeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySize({ value, description = "A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a  QuantitativeValue with a unitCode, or a comprehensive and structured [[SizeSpecification]]; in other cases, the [[width]], [[height]], [[depth]] and [[weight]] properties may be more applicable. ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySizeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SizePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-size",
    shellClassName: "lander-semantic--schema-property-size",
    title: "size",
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
