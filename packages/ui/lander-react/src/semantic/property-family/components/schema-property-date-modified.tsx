import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DateModifiedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDateModifiedProps extends DateModifiedPropertyInput, GeneratedPropertyUiProps<DateModifiedPropertyInput> {}

export function SchemaPropertyDateModified({ value: legacyValue, description = "The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDateModifiedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DateModifiedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-date-modified",
    shellClassName: "lander-semantic--schema-property-date-modified",
    title: "dateModified",
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

(SchemaPropertyDateModified as typeof SchemaPropertyDateModified & { toStructuredData: (props: SchemaPropertyDateModifiedProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
