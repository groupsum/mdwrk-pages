import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IsTierOfPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsTierOfProps extends IsTierOfPropertyInput, GeneratedPropertyUiProps<IsTierOfPropertyInput> {}

export function SchemaPropertyIsTierOf({ value: legacyValue, description = "The member program this tier is a part of.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIsTierOfProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsTierOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-tier-of",
    shellClassName: "lander-semantic--schema-property-is-tier-of",
    title: "isTierOf",
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

(SchemaPropertyIsTierOf as typeof SchemaPropertyIsTierOf & { toStructuredData: (props: SchemaPropertyIsTierOfProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
