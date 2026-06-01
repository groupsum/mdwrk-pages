import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUnitTextProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyUnitText({ value, description = "A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for\n<a href='unitCode'>unitCode</a>.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyUnitTextProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.UnitTextPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-unit-text",
    shellClassName: "lander-semantic--schema-property-unit-text",
    title: "unitText",
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
