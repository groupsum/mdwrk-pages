import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SodiumContentPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySodiumContentProps extends SodiumContentPropertyInput, GeneratedPropertyUiProps<SodiumContentPropertyInput> {}

export function SchemaPropertySodiumContent({ value: legacyValue, description = "The number of milligrams of sodium.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySodiumContentProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SodiumContentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sodium-content",
    shellClassName: "lander-semantic--schema-property-sodium-content",
    title: "sodiumContent",
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

(SchemaPropertySodiumContent as typeof SchemaPropertySodiumContent & { toStructuredData: (props: SchemaPropertySodiumContentProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
