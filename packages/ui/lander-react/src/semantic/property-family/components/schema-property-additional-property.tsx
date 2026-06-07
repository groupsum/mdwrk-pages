import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AdditionalPropertyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAdditionalPropertyProps extends AdditionalPropertyPropertyInput, GeneratedPropertyUiProps<AdditionalPropertyPropertyInput> {}

export function SchemaPropertyAdditionalProperty({ value: legacyValue, description = "A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\\n\\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.\n", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAdditionalPropertyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AdditionalPropertyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-additional-property",
    shellClassName: "lander-semantic--schema-property-additional-property",
    title: "additionalProperty",
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

(SchemaPropertyAdditionalProperty as typeof SchemaPropertyAdditionalProperty & { toStructuredData: (props: SchemaPropertyAdditionalPropertyProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
