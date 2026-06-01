import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsicV4Props extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIsicV4({ value, description = "The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIsicV4Props) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsicV4PropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-isic-v4",
    shellClassName: "lander-semantic--schema-property-isic-v4",
    title: "isicV4",
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
