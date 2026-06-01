import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyObjectProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyObject({ value, description = "The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). E.g. John read *a book*.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyObjectProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ObjectPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-object",
    shellClassName: "lander-semantic--schema-property-object",
    title: "object",
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
