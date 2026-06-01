import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEditorProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEditor({ value, description = "Specifies the Person who edited the CreativeWork.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEditorProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EditorPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-editor",
    shellClassName: "lander-semantic--schema-property-editor",
    title: "editor",
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
