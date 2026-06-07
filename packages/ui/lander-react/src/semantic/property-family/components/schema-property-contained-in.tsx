import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ContainedInPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContainedInProps extends ContainedInPropertyInput, GeneratedPropertyUiProps<ContainedInPropertyInput> {}

export function SchemaPropertyContainedIn({ value: legacyValue, description = "The basic containment relation between a place and one that contains it.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyContainedInProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContainedInPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-contained-in",
    shellClassName: "lander-semantic--schema-property-contained-in",
    title: "containedIn",
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

(SchemaPropertyContainedIn as typeof SchemaPropertyContainedIn & { toStructuredData: (props: SchemaPropertyContainedInProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
