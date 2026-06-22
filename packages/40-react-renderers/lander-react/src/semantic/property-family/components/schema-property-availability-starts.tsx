import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AvailabilityStartsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAvailabilityStartsProps extends AvailabilityStartsPropertyInput, GeneratedPropertyUiProps<AvailabilityStartsPropertyInput> {}

export function SchemaPropertyAvailabilityStarts({ value: legacyValue, description = "The beginning of the availability of the product or service included in the offer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAvailabilityStartsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AvailabilityStartsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-availability-starts",
    shellClassName: "lander-semantic--schema-property-availability-starts",
    title: "availabilityStarts",
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

(SchemaPropertyAvailabilityStarts as typeof SchemaPropertyAvailabilityStarts & { toStructuredData: (props: SchemaPropertyAvailabilityStartsProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
