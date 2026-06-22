import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ItemDefectReturnFeesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyItemDefectReturnFeesProps extends ItemDefectReturnFeesPropertyInput, GeneratedPropertyUiProps<ItemDefectReturnFeesPropertyInput> {}

export function SchemaPropertyItemDefectReturnFees({ value: legacyValue, description = "The type of return fees for returns of defect products.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyItemDefectReturnFeesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ItemDefectReturnFeesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-item-defect-return-fees",
    shellClassName: "lander-semantic--schema-property-item-defect-return-fees",
    title: "itemDefectReturnFees",
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

(SchemaPropertyItemDefectReturnFees as typeof SchemaPropertyItemDefectReturnFees & { toStructuredData: (props: SchemaPropertyItemDefectReturnFeesProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
