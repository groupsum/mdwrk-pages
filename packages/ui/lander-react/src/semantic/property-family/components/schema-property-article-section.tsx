import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ArticleSectionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyArticleSectionProps extends ArticleSectionPropertyInput, GeneratedPropertyUiProps<ArticleSectionPropertyInput> {}

export function SchemaPropertyArticleSection({ value: legacyValue, description = "Articles may belong to one or more 'sections' in a magazine or newspaper, such as Sports, Lifestyle, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyArticleSectionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ArticleSectionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-article-section",
    shellClassName: "lander-semantic--schema-property-article-section",
    title: "articleSection",
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
