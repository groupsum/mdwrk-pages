import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ContentReferenceTimePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContentReferenceTimeProps extends ContentReferenceTimePropertyInput, GeneratedPropertyUiProps<ContentReferenceTimePropertyInput> {}

export function SchemaPropertyContentReferenceTime({ value: legacyValue, description = "The specific time described by a creative work, for works (e.g. articles, video objects etc.) that emphasise a particular moment within an Event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyContentReferenceTimeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContentReferenceTimePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-content-reference-time",
    shellClassName: "lander-semantic--schema-property-content-reference-time",
    title: "contentReferenceTime",
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

(SchemaPropertyContentReferenceTime as typeof SchemaPropertyContentReferenceTime & { toStructuredData: (props: SchemaPropertyContentReferenceTimeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
