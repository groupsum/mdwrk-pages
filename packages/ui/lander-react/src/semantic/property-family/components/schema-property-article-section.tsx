import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyArticleSectionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyArticleSection({ value, description = "Articles may belong to one or more 'sections' in a magazine or newspaper, such as Sports, Lifestyle, etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyArticleSectionProps) {
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
