import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProprietaryNameProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyProprietaryName({ value, description = "Proprietary name given to the diet plan, typically by its originator or creator.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyProprietaryNameProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProprietaryNamePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-proprietary-name",
    shellClassName: "lander-semantic--schema-property-proprietary-name",
    title: "proprietaryName",
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
