import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHighPriceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHighPrice({ value, description = "The highest price of all offers available.\\n\\nUsage guidelines:\\n\\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHighPriceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HighPricePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-high-price",
    shellClassName: "lander-semantic--schema-property-high-price",
    title: "highPrice",
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
