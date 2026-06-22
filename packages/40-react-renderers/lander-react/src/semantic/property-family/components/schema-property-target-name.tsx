import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TargetNamePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTargetNameProps extends TargetNamePropertyInput, GeneratedPropertyUiProps<TargetNamePropertyInput> {}

export function SchemaPropertyTargetName({ value: legacyValue, description = "The name of a node in an established educational framework.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTargetNameProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TargetNamePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-target-name",
    shellClassName: "lander-semantic--schema-property-target-name",
    title: "targetName",
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

(SchemaPropertyTargetName as typeof SchemaPropertyTargetName & { toStructuredData: (props: SchemaPropertyTargetNameProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
