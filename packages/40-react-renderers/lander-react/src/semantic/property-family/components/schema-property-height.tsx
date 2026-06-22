import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HeightPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHeightProps extends HeightPropertyInput, GeneratedPropertyUiProps<HeightPropertyInput> {}

export function SchemaPropertyHeight({ value: legacyValue, description = "The height of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHeightProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HeightPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-height",
    shellClassName: "lander-semantic--schema-property-height",
    title: "height",
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

(SchemaPropertyHeight as typeof SchemaPropertyHeight & { toStructuredData: (props: SchemaPropertyHeightProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
