import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SuccessorOfPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySuccessorOfProps extends SuccessorOfPropertyInput, GeneratedPropertyUiProps<SuccessorOfPropertyInput> {}

export function SchemaPropertySuccessorOf({ value: legacyValue, description = "A pointer from a newer variant of a product  to its previous, often discontinued predecessor.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySuccessorOfProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SuccessorOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-successor-of",
    shellClassName: "lander-semantic--schema-property-successor-of",
    title: "successorOf",
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
