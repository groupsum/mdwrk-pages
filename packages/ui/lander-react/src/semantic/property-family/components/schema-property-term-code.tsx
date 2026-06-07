import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TermCodePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTermCodeProps extends TermCodePropertyInput, GeneratedPropertyUiProps<TermCodePropertyInput> {}

export function SchemaPropertyTermCode({ value: legacyValue, description = "A code that identifies this [[DefinedTerm]] within a [[DefinedTermSet]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTermCodeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TermCodePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-term-code",
    shellClassName: "lander-semantic--schema-property-term-code",
    title: "termCode",
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

(SchemaPropertyTermCode as typeof SchemaPropertyTermCode & { toStructuredData: (props: SchemaPropertyTermCodeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
