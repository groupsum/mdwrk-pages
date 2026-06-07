import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AssociatedArticlePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAssociatedArticleProps extends AssociatedArticlePropertyInput, GeneratedPropertyUiProps<AssociatedArticlePropertyInput> {}

export function SchemaPropertyAssociatedArticle({ value: legacyValue, description = "A NewsArticle associated with the Media Object.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAssociatedArticleProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AssociatedArticlePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-associated-article",
    shellClassName: "lander-semantic--schema-property-associated-article",
    title: "associatedArticle",
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

(SchemaPropertyAssociatedArticle as typeof SchemaPropertyAssociatedArticle & { toStructuredData: (props: SchemaPropertyAssociatedArticleProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
