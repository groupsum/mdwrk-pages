import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PublishingPrinciplesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPublishingPrinciplesProps extends PublishingPrinciplesPropertyInput, GeneratedPropertyUiProps<PublishingPrinciplesPropertyInput> {}

export function SchemaPropertyPublishingPrinciples({ value: legacyValue, description = "The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual, e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].\n\nWhile such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.\n", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPublishingPrinciplesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyPublishingPrinciples as typeof SchemaPropertyPublishingPrinciples & { toStructuredData: (props: SchemaPropertyPublishingPrinciplesProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
