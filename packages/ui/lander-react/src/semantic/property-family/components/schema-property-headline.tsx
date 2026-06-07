import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HeadlinePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHeadlineProps extends HeadlinePropertyInput, GeneratedPropertyUiProps<HeadlinePropertyInput> {}

export function SchemaPropertyHeadline({ value: legacyValue, description = "Headline of the article.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHeadlineProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HeadlinePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-headline",
    shellClassName: "lander-semantic--schema-property-headline",
    title: "headline",
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

(SchemaPropertyHeadline as typeof SchemaPropertyHeadline & { toStructuredData: (props: SchemaPropertyHeadlineProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
