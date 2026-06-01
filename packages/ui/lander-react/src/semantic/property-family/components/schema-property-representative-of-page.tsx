import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRepresentativeOfPageProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRepresentativeOfPage({ value, description = "Indicates whether this image is representative of the content of the page.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRepresentativeOfPageProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RepresentativeOfPagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-representative-of-page",
    shellClassName: "lander-semantic--schema-property-representative-of-page",
    title: "representativeOfPage",
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
