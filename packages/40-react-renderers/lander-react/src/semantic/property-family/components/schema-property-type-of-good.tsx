import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TypeOfGoodPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTypeOfGoodProps extends TypeOfGoodPropertyInput, GeneratedPropertyUiProps<TypeOfGoodPropertyInput> {}

export function SchemaPropertyTypeOfGood({ value: legacyValue, description = "The product that this structured value is referring to.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTypeOfGoodProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyTypeOfGood as typeof SchemaPropertyTypeOfGood & { toStructuredData: (props: SchemaPropertyTypeOfGoodProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
