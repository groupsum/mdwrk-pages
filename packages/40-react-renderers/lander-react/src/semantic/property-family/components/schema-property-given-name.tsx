import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { GivenNamePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGivenNameProps extends GivenNamePropertyInput, GeneratedPropertyUiProps<GivenNamePropertyInput> {}

export function SchemaPropertyGivenName({ value: legacyValue, description = "Given name. In the U.S., the first name of a Person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyGivenNameProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GivenNamePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-given-name",
    shellClassName: "lander-semantic--schema-property-given-name",
    title: "givenName",
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

(SchemaPropertyGivenName as typeof SchemaPropertyGivenName & { toStructuredData: (props: SchemaPropertyGivenNameProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
