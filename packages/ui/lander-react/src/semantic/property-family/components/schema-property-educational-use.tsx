import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EducationalUsePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEducationalUseProps extends EducationalUsePropertyInput, GeneratedPropertyUiProps<EducationalUsePropertyInput> {}

export function SchemaPropertyEducationalUse({ value: legacyValue, description = "The purpose of a work in the context of education; for example, 'assignment', 'group work'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEducationalUseProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EducationalUsePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-educational-use",
    shellClassName: "lander-semantic--schema-property-educational-use",
    title: "educationalUse",
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

(SchemaPropertyEducationalUse as typeof SchemaPropertyEducationalUse & { toStructuredData: (props: SchemaPropertyEducationalUseProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
