import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPublishingPrinciplesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPublishingPrinciples({ value, description = "The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual, e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].\n\nWhile such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.\n", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPublishingPrinciplesProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PublishingPrinciplesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-publishing-principles",
    shellClassName: "lander-semantic--schema-property-publishing-principles",
    title: "publishingPrinciples",
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
