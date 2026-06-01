import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAssociatedArticleProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAssociatedArticle({ value, description = "A NewsArticle associated with the Media Object.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAssociatedArticleProps) {
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
