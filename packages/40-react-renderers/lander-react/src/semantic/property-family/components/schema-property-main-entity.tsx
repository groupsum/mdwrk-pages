import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MainEntityPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMainEntityProps extends MainEntityPropertyInput, GeneratedPropertyUiProps<MainEntityPropertyInput> {}

export function SchemaPropertyMainEntity({ value: legacyValue, description = "Indicates the primary entity described in some page or other CreativeWork.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMainEntityProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MainEntityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-main-entity",
    shellClassName: "lander-semantic--schema-property-main-entity",
    title: "mainEntity",
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

(SchemaPropertyMainEntity as typeof SchemaPropertyMainEntity & { toStructuredData: (props: SchemaPropertyMainEntityProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
