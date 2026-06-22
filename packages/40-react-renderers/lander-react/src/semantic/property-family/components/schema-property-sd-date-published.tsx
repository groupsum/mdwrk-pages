import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SdDatePublishedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySdDatePublishedProps extends SdDatePublishedPropertyInput, GeneratedPropertyUiProps<SdDatePublishedPropertyInput> {}

export function SchemaPropertySdDatePublished({ value: legacyValue, description = "Indicates the date on which the current structured data was generated / published. Typically used alongside [[sdPublisher]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySdDatePublishedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SdDatePublishedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sd-date-published",
    shellClassName: "lander-semantic--schema-property-sd-date-published",
    title: "sdDatePublished",
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

(SchemaPropertySdDatePublished as typeof SchemaPropertySdDatePublished & { toStructuredData: (props: SchemaPropertySdDatePublishedProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
