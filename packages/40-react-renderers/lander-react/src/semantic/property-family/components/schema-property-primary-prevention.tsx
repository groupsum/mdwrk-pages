import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PrimaryPreventionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPrimaryPreventionProps extends PrimaryPreventionPropertyInput, GeneratedPropertyUiProps<PrimaryPreventionPropertyInput> {}

export function SchemaPropertyPrimaryPrevention({ value: legacyValue, description = "A preventative therapy used to prevent an initial occurrence of the medical condition, such as vaccination.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPrimaryPreventionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PrimaryPreventionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-primary-prevention",
    shellClassName: "lander-semantic--schema-property-primary-prevention",
    title: "primaryPrevention",
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

(SchemaPropertyPrimaryPrevention as typeof SchemaPropertyPrimaryPrevention & { toStructuredData: (props: SchemaPropertyPrimaryPreventionProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
