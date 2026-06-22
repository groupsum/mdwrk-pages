import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ReleaseDatePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReleaseDateProps extends ReleaseDatePropertyInput, GeneratedPropertyUiProps<ReleaseDatePropertyInput> {}

export function SchemaPropertyReleaseDate({ value: legacyValue, description = "The release date of a product or product model. This can be used to distinguish the exact variant of a product.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyReleaseDateProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReleaseDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-release-date",
    shellClassName: "lander-semantic--schema-property-release-date",
    title: "releaseDate",
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

(SchemaPropertyReleaseDate as typeof SchemaPropertyReleaseDate & { toStructuredData: (props: SchemaPropertyReleaseDateProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
