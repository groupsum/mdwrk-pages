import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyArticleBodyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyArticleBody({ value, description = "The actual body of the article.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyArticleBodyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ArticleBodyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-article-body",
    shellClassName: "lander-semantic--schema-property-article-body",
    title: "articleBody",
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
