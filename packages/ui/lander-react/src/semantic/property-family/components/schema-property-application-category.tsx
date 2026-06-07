import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ApplicationCategoryPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyApplicationCategoryProps extends ApplicationCategoryPropertyInput, GeneratedPropertyUiProps<ApplicationCategoryPropertyInput> {}

export function SchemaPropertyApplicationCategory({ value: legacyValue, description = "Type of software application, e.g. 'Game, Multimedia'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyApplicationCategoryProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ApplicationCategoryPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-application-category",
    shellClassName: "lander-semantic--schema-property-application-category",
    title: "applicationCategory",
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

(SchemaPropertyApplicationCategory as typeof SchemaPropertyApplicationCategory & { toStructuredData: (props: SchemaPropertyApplicationCategoryProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
