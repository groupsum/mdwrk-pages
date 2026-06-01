import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPostOpProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPostOp({ value, description = "A description of the postoperative procedures, care, and/or followups for this device.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPostOpProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PostOpPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-post-op",
    shellClassName: "lander-semantic--schema-property-post-op",
    title: "postOp",
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
