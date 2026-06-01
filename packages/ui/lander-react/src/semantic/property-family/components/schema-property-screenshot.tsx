import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyScreenshotProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyScreenshot({ value, description = "A link to a screenshot image of the app.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyScreenshotProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ScreenshotPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-screenshot",
    shellClassName: "lander-semantic--schema-property-screenshot",
    title: "screenshot",
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
