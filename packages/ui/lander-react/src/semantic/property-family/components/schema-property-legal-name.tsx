import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LegalNamePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLegalNameProps extends LegalNamePropertyInput, GeneratedPropertyUiProps<LegalNamePropertyInput> {}

export function SchemaPropertyLegalName({ value: legacyValue, description = "The official name of the organization, e.g. the registered company name.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLegalNameProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LegalNamePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-legal-name",
    shellClassName: "lander-semantic--schema-property-legal-name",
    title: "legalName",
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

(SchemaPropertyLegalName as typeof SchemaPropertyLegalName & { toStructuredData: (props: SchemaPropertyLegalNameProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
