import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ArticleBodyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyArticleBodyProps extends ArticleBodyPropertyInput, GeneratedPropertyUiProps<ArticleBodyPropertyInput> {}

export function SchemaPropertyArticleBody({ value: legacyValue, description = "The actual body of the article.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyArticleBodyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyArticleBody as typeof SchemaPropertyArticleBody & { toStructuredData: (props: SchemaPropertyArticleBodyProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
