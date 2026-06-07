import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EditorPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEditorProps extends EditorPropertyInput, GeneratedPropertyUiProps<EditorPropertyInput> {}

export function SchemaPropertyEditor({ value: legacyValue, description = "Specifies the Person who edited the CreativeWork.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEditorProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyEditor as typeof SchemaPropertyEditor & { toStructuredData: (props: SchemaPropertyEditorProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
