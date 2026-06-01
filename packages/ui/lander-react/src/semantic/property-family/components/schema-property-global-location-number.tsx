import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGlobalLocationNumberProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyGlobalLocationNumber({ value, description = "The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyGlobalLocationNumberProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GlobalLocationNumberPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-global-location-number",
    shellClassName: "lander-semantic--schema-property-global-location-number",
    title: "globalLocationNumber",
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
