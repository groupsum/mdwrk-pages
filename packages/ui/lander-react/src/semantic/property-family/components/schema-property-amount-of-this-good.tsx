import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAmountOfThisGoodProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAmountOfThisGood({ value, description = "The quantity of the goods included in the offer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAmountOfThisGoodProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AmountOfThisGoodPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-amount-of-this-good",
    shellClassName: "lander-semantic--schema-property-amount-of-this-good",
    title: "amountOfThisGood",
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
