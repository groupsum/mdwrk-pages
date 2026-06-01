import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AmenityFeaturePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAmenityFeatureProps extends AmenityFeaturePropertyInput, GeneratedPropertyUiProps<AmenityFeaturePropertyInput> {}

export function SchemaPropertyAmenityFeature({ value: legacyValue, description = "An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAmenityFeatureProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AmenityFeaturePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-amenity-feature",
    shellClassName: "lander-semantic--schema-property-amenity-feature",
    title: "amenityFeature",
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
