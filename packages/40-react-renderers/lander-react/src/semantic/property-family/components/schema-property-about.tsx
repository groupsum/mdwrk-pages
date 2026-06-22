import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AboutPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAboutProps extends AboutPropertyInput, GeneratedPropertyUiProps<AboutPropertyInput> {}

export function SchemaPropertyAbout({ value: legacyValue, description = "The subject matter of an object.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAboutProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AboutPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-about",
    shellClassName: "lander-semantic--schema-property-about",
    title: "about",
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

(SchemaPropertyAbout as typeof SchemaPropertyAbout & { toStructuredData: (props: SchemaPropertyAboutProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
