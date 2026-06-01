import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWorkExampleProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyWorkExample({ value, description = "Example/instance/realization/derivation of the concept of this creative work. E.g. the paperback edition, first edition, or e-book.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyWorkExampleProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WorkExamplePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-work-example",
    shellClassName: "lander-semantic--schema-property-work-example",
    title: "workExample",
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
