import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CreatorPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCreatorProps extends CreatorPropertyInput, GeneratedPropertyUiProps<CreatorPropertyInput> {}

export function SchemaPropertyCreator({ value: legacyValue, description = "The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCreatorProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CreatorPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-creator",
    shellClassName: "lander-semantic--schema-property-creator",
    title: "creator",
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

(SchemaPropertyCreator as typeof SchemaPropertyCreator & { toStructuredData: (props: SchemaPropertyCreatorProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
