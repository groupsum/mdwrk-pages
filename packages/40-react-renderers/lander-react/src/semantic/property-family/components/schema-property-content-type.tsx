import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ContentTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContentTypeProps extends ContentTypePropertyInput, GeneratedPropertyUiProps<ContentTypePropertyInput> {}

export function SchemaPropertyContentType({ value: legacyValue, description = "The supported content type(s) for an EntryPoint response.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyContentTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContentTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-content-type",
    shellClassName: "lander-semantic--schema-property-content-type",
    title: "contentType",
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

(SchemaPropertyContentType as typeof SchemaPropertyContentType & { toStructuredData: (props: SchemaPropertyContentTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
