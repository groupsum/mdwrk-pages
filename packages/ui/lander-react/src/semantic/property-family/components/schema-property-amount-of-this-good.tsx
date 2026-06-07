import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AmountOfThisGoodPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAmountOfThisGoodProps extends AmountOfThisGoodPropertyInput, GeneratedPropertyUiProps<AmountOfThisGoodPropertyInput> {}

export function SchemaPropertyAmountOfThisGood({ value: legacyValue, description = "The quantity of the goods included in the offer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAmountOfThisGoodProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyAmountOfThisGood as typeof SchemaPropertyAmountOfThisGood & { toStructuredData: (props: SchemaPropertyAmountOfThisGoodProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
