import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AbstractPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAbstractProps extends AbstractPropertyInput, GeneratedPropertyUiProps<AbstractPropertyInput> {}

export function SchemaPropertyAbstract({ value: legacyValue, description = "An abstract is a short description that summarizes a [[CreativeWork]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAbstractProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AbstractPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-abstract",
    shellClassName: "lander-semantic--schema-property-abstract",
    title: "abstract",
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

(SchemaPropertyAbstract as typeof SchemaPropertyAbstract & { toStructuredData: (props: SchemaPropertyAbstractProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
