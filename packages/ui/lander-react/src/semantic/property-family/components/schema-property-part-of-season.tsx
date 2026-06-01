import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPartOfSeasonProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPartOfSeason({ value, description = "The season to which this episode belongs.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPartOfSeasonProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PartOfSeasonPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-part-of-season",
    shellClassName: "lander-semantic--schema-property-part-of-season",
    title: "partOfSeason",
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
