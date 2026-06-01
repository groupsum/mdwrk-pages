import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAccessModeSufficientProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAccessModeSufficient({ value, description = "A list of single or combined access modes that are sufficient to understand all the intellectual content of a resource, including any adaptations. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessModeSufficient-vocabulary).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAccessModeSufficientProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AccessModeSufficientPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-access-mode-sufficient",
    shellClassName: "lander-semantic--schema-property-access-mode-sufficient",
    title: "accessModeSufficient",
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
