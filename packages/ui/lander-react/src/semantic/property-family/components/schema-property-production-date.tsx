import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ProductionDatePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProductionDateProps extends ProductionDatePropertyInput, GeneratedPropertyUiProps<ProductionDatePropertyInput> {}

export function SchemaPropertyProductionDate({ value: legacyValue, description = "The date of production of the item, e.g. vehicle.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyProductionDateProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProductionDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-production-date",
    shellClassName: "lander-semantic--schema-property-production-date",
    title: "productionDate",
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
