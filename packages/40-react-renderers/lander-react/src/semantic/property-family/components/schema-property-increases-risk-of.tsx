import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IncreasesRiskOfPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIncreasesRiskOfProps extends IncreasesRiskOfPropertyInput, GeneratedPropertyUiProps<IncreasesRiskOfPropertyInput> {}

export function SchemaPropertyIncreasesRiskOf({ value: legacyValue, description = "The condition, complication, etc. influenced by this factor.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIncreasesRiskOfProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IncreasesRiskOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-increases-risk-of",
    shellClassName: "lander-semantic--schema-property-increases-risk-of",
    title: "increasesRiskOf",
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

(SchemaPropertyIncreasesRiskOf as typeof SchemaPropertyIncreasesRiskOf & { toStructuredData: (props: SchemaPropertyIncreasesRiskOfProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
