import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EndDatePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEndDateProps extends EndDatePropertyInput, GeneratedPropertyUiProps<EndDatePropertyInput> {}

export function SchemaPropertyEndDate({ value: legacyValue, description = "The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEndDateProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EndDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-end-date",
    shellClassName: "lander-semantic--schema-property-end-date",
    title: "endDate",
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

(SchemaPropertyEndDate as typeof SchemaPropertyEndDate & { toStructuredData: (props: SchemaPropertyEndDateProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
