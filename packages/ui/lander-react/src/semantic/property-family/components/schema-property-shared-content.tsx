import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySharedContentProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySharedContent({ value, description = "A CreativeWork such as an image, video, or audio clip shared as part of this posting.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySharedContentProps) {
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
