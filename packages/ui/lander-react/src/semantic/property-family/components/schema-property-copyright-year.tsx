import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCopyrightYearProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCopyrightYear({ value, description = "The year during which the claimed copyright for the CreativeWork was first asserted.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCopyrightYearProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CopyrightYearPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-copyright-year",
    shellClassName: "lander-semantic--schema-property-copyright-year",
    title: "copyrightYear",
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
