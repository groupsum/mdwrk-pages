import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLegalRepresentativeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyLegalRepresentative({ value, description = "One or multiple persons who represent this organization legally such as CEO or sole administrator.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyLegalRepresentativeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LegalRepresentativePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-legal-representative",
    shellClassName: "lander-semantic--schema-property-legal-representative",
    title: "legalRepresentative",
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
