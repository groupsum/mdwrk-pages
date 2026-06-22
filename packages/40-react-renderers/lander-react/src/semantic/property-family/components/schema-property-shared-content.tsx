import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SharedContentPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySharedContentProps extends SharedContentPropertyInput, GeneratedPropertyUiProps<SharedContentPropertyInput> {}

export function SchemaPropertySharedContent({ value: legacyValue, description = "A CreativeWork such as an image, video, or audio clip shared as part of this posting.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySharedContentProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SharedContentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-shared-content",
    shellClassName: "lander-semantic--schema-property-shared-content",
    title: "sharedContent",
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

(SchemaPropertySharedContent as typeof SchemaPropertySharedContent & { toStructuredData: (props: SchemaPropertySharedContentProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
