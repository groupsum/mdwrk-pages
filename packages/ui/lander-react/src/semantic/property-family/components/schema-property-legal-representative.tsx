import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LegalRepresentativePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLegalRepresentativeProps extends LegalRepresentativePropertyInput, GeneratedPropertyUiProps<LegalRepresentativePropertyInput> {}

export function SchemaPropertyLegalRepresentative({ value: legacyValue, description = "One or multiple persons who represent this organization legally such as CEO or sole administrator.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLegalRepresentativeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyLegalRepresentative as typeof SchemaPropertyLegalRepresentative & { toStructuredData: (props: SchemaPropertyLegalRepresentativeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
