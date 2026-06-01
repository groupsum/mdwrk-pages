import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRelatedLinkProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRelatedLink({ value, description = "A link related to this web page, for example to other related web pages.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRelatedLinkProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RelatedLinkPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-related-link",
    shellClassName: "lander-semantic--schema-property-related-link",
    title: "relatedLink",
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
