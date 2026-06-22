import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasTiersPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasTiersProps extends HasTiersPropertyInput, GeneratedPropertyUiProps<HasTiersPropertyInput> {}

export function SchemaPropertyHasTiers({ value: legacyValue, description = "The tiers of a member program.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasTiersProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasTiersPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-tiers",
    shellClassName: "lander-semantic--schema-property-has-tiers",
    title: "hasTiers",
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

(SchemaPropertyHasTiers as typeof SchemaPropertyHasTiers & { toStructuredData: (props: SchemaPropertyHasTiersProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
