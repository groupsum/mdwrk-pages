import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DatePublishedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDatePublishedProps extends DatePublishedPropertyInput, GeneratedPropertyUiProps<DatePublishedPropertyInput> {}

export function SchemaPropertyDatePublished({ value: legacyValue, description = "Date of first publication or broadcast. For example the date a [[CreativeWork]] was broadcast or a [[Certification]] was issued.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDatePublishedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DatePublishedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-date-published",
    shellClassName: "lander-semantic--schema-property-date-published",
    title: "datePublished",
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

(SchemaPropertyDatePublished as typeof SchemaPropertyDatePublished & { toStructuredData: (props: SchemaPropertyDatePublishedProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
