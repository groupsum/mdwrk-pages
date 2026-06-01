import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGenderProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyGender({ value, description = "Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who are not a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of \"Mixed\".", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyGenderProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GenderPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-gender",
    shellClassName: "lander-semantic--schema-property-gender",
    title: "gender",
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
