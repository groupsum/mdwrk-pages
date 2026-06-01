import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTypicalTestProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTypicalTest({ value, description = "A medical test typically performed given this condition.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTypicalTestProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TypicalTestPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-typical-test",
    shellClassName: "lander-semantic--schema-property-typical-test",
    title: "typicalTest",
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
