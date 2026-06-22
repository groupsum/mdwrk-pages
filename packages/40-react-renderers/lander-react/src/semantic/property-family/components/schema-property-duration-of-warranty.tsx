import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DurationOfWarrantyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDurationOfWarrantyProps extends DurationOfWarrantyPropertyInput, GeneratedPropertyUiProps<DurationOfWarrantyPropertyInput> {}

export function SchemaPropertyDurationOfWarranty({ value: legacyValue, description = "The duration of the warranty promise. Common unitCode values are ANN for year, MON for months, or DAY for days.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDurationOfWarrantyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DurationOfWarrantyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-duration-of-warranty",
    shellClassName: "lander-semantic--schema-property-duration-of-warranty",
    title: "durationOfWarranty",
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

(SchemaPropertyDurationOfWarranty as typeof SchemaPropertyDurationOfWarranty & { toStructuredData: (props: SchemaPropertyDurationOfWarrantyProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
