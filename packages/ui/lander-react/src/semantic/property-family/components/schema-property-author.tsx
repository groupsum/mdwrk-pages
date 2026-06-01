import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AuthorPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAuthorProps extends AuthorPropertyInput, GeneratedPropertyUiProps<AuthorPropertyInput> {}

export function SchemaPropertyAuthor({ value: legacyValue, description = "The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAuthorProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AuthorPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-author",
    shellClassName: "lander-semantic--schema-property-author",
    title: "author",
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
