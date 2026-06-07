import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { OpeningHoursSpecificationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOpeningHoursSpecificationProps extends OpeningHoursSpecificationPropertyInput, GeneratedPropertyUiProps<OpeningHoursSpecificationPropertyInput> {}

export function SchemaPropertyOpeningHoursSpecification({ value: legacyValue, description = "The opening hours of a certain place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyOpeningHoursSpecificationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OpeningHoursSpecificationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-opening-hours-specification",
    shellClassName: "lander-semantic--schema-property-opening-hours-specification",
    title: "openingHoursSpecification",
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

(SchemaPropertyOpeningHoursSpecification as typeof SchemaPropertyOpeningHoursSpecification & { toStructuredData: (props: SchemaPropertyOpeningHoursSpecificationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
