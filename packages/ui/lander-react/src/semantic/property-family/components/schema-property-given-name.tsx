import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGivenNameProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyGivenName({ value, description = "Given name. In the U.S., the first name of a Person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyGivenNameProps) {
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
