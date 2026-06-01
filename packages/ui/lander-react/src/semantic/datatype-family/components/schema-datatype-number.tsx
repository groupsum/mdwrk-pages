import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedDatatypeProps, renderGeneratedDatatypeCard } from "../shared.js";

export interface NumberProps extends GeneratedDatatypeProps<number> {}

export function Number({ value, description = "Data type: Number.\\n\\nUsage guidelines:\\n\\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: NumberProps) {
  return renderGeneratedDatatypeCard({
    StructuredDataComponent: structuredDataReact.NumberStructuredData,
    defaultEyebrow: "Datatype",
    kind: "schema-datatype-number",
    shellClassName: "lander-semantic--schema-datatype-number",
    title: "Number",
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
