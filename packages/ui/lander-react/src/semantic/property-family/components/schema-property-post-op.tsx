import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PostOpPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPostOpProps extends PostOpPropertyInput, GeneratedPropertyUiProps<PostOpPropertyInput> {}

export function SchemaPropertyPostOp({ value: legacyValue, description = "A description of the postoperative procedures, care, and/or followups for this device.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPostOpProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
