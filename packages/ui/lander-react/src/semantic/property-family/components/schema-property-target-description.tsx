import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TargetDescriptionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTargetDescriptionProps extends TargetDescriptionPropertyInput, GeneratedPropertyUiProps<TargetDescriptionPropertyInput> {}

export function SchemaPropertyTargetDescription({ value: legacyValue, description = "The description of a node in an established educational framework.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTargetDescriptionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TargetDescriptionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-target-description",
    shellClassName: "lander-semantic--schema-property-target-description",
    title: "targetDescription",
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

(SchemaPropertyTargetDescription as typeof SchemaPropertyTargetDescription & { toStructuredData: (props: SchemaPropertyTargetDescriptionProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
