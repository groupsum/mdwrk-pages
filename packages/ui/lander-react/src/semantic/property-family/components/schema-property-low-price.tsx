import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLowPriceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLowPrice({ value, description = "The lowest price of all offers available.\\n\\nUsage guidelines:\\n\\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLowPriceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LowPricePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-low-price",
    shellClassName: "lander-semantic--schema-property-low-price",
    title: "lowPrice",
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
