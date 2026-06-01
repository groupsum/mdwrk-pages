import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ContraindicationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContraindicationProps extends ContraindicationPropertyInput, GeneratedPropertyUiProps<ContraindicationPropertyInput> {}

export function SchemaPropertyContraindication({ value: legacyValue, description = "A contraindication for this therapy.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyContraindicationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContraindicationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-contraindication",
    shellClassName: "lander-semantic--schema-property-contraindication",
    title: "contraindication",
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
