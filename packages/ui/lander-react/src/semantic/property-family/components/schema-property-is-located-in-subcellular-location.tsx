import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsLocatedInSubcellularLocationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIsLocatedInSubcellularLocation({ value, description = "Subcellular location where this BioChemEntity is located; please use PropertyValue if you want to include any evidence.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIsLocatedInSubcellularLocationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsLocatedInSubcellularLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-located-in-subcellular-location",
    shellClassName: "lander-semantic--schema-property-is-located-in-subcellular-location",
    title: "isLocatedInSubcellularLocation",
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
