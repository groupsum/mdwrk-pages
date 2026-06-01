import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAuthorProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAuthor({ value, description = "The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAuthorProps) {
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
