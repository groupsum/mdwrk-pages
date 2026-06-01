import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RatingValuePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRatingValueProps extends RatingValuePropertyInput, GeneratedPropertyUiProps<RatingValuePropertyInput> {}

export function SchemaPropertyRatingValue({ value: legacyValue, description = "The rating for the content.\\n\\nUsage guidelines:\\n\\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRatingValueProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RatingValuePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-rating-value",
    shellClassName: "lander-semantic--schema-property-rating-value",
    title: "ratingValue",
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
