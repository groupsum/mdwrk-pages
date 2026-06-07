import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PostalCodeEndPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPostalCodeEndProps extends PostalCodeEndPropertyInput, GeneratedPropertyUiProps<PostalCodeEndPropertyInput> {}

export function SchemaPropertyPostalCodeEnd({ value: legacyValue, description = "Last postal code in the range (included). Needs to be after [[postalCodeBegin]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPostalCodeEndProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PostalCodeEndPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-postal-code-end",
    shellClassName: "lander-semantic--schema-property-postal-code-end",
    title: "postalCodeEnd",
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

(SchemaPropertyPostalCodeEnd as typeof SchemaPropertyPostalCodeEnd & { toStructuredData: (props: SchemaPropertyPostalCodeEndProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
