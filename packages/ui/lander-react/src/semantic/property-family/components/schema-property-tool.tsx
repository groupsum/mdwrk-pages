import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyToolProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTool({ value, description = "A sub property of instrument. An object used (but not consumed) when performing instructions or a direction.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyToolProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ToolPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-tool",
    shellClassName: "lander-semantic--schema-property-tool",
    title: "tool",
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
