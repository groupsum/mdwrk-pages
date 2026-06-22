import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ItemDefectReturnLabelSourcePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyItemDefectReturnLabelSourceProps extends ItemDefectReturnLabelSourcePropertyInput, GeneratedPropertyUiProps<ItemDefectReturnLabelSourcePropertyInput> {}

export function SchemaPropertyItemDefectReturnLabelSource({ value: legacyValue, description = "The method (from an enumeration) by which the customer obtains a return shipping label for a defect product.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyItemDefectReturnLabelSourceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ItemDefectReturnLabelSourcePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-item-defect-return-label-source",
    shellClassName: "lander-semantic--schema-property-item-defect-return-label-source",
    title: "itemDefectReturnLabelSource",
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

(SchemaPropertyItemDefectReturnLabelSource as typeof SchemaPropertyItemDefectReturnLabelSource & { toStructuredData: (props: SchemaPropertyItemDefectReturnLabelSourceProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
