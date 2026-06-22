import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RepresentativeOfPagePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRepresentativeOfPageProps extends RepresentativeOfPagePropertyInput, GeneratedPropertyUiProps<RepresentativeOfPagePropertyInput> {}

export function SchemaPropertyRepresentativeOfPage({ value: legacyValue, description = "Indicates whether this image is representative of the content of the page.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRepresentativeOfPageProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyRepresentativeOfPage as typeof SchemaPropertyRepresentativeOfPage & { toStructuredData: (props: SchemaPropertyRepresentativeOfPageProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
