import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAmenityFeatureProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAmenityFeature({ value, description = "An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAmenityFeatureProps) {
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
