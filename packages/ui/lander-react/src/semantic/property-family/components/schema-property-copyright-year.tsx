import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CopyrightYearPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCopyrightYearProps extends CopyrightYearPropertyInput, GeneratedPropertyUiProps<CopyrightYearPropertyInput> {}

export function SchemaPropertyCopyrightYear({ value: legacyValue, description = "The year during which the claimed copyright for the CreativeWork was first asserted.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCopyrightYearProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyCopyrightYear as typeof SchemaPropertyCopyrightYear & { toStructuredData: (props: SchemaPropertyCopyrightYearProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
