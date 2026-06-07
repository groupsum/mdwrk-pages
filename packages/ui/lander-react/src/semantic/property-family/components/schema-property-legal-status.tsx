import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LegalStatusPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLegalStatusProps extends LegalStatusPropertyInput, GeneratedPropertyUiProps<LegalStatusPropertyInput> {}

export function SchemaPropertyLegalStatus({ value: legacyValue, description = "The drug or supplement's legal status, including any controlled substance schedules that apply.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLegalStatusProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LegalStatusPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-legal-status",
    shellClassName: "lander-semantic--schema-property-legal-status",
    title: "legalStatus",
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

(SchemaPropertyLegalStatus as typeof SchemaPropertyLegalStatus & { toStructuredData: (props: SchemaPropertyLegalStatusProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
