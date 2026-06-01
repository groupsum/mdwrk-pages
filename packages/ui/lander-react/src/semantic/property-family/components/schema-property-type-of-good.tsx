import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTypeOfGoodProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTypeOfGood({ value, description = "The product that this structured value is referring to.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTypeOfGoodProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TypeOfGoodPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-type-of-good",
    shellClassName: "lander-semantic--schema-property-type-of-good",
    title: "typeOfGood",
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
