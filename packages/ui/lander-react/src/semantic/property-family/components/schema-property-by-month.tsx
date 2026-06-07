import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ByMonthPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyByMonthProps extends ByMonthPropertyInput, GeneratedPropertyUiProps<ByMonthPropertyInput> {}

export function SchemaPropertyByMonth({ value: legacyValue, description = "Defines the month(s) of the year on which a recurring [[Event]] takes place. Specified as an [[Integer]] between 1-12. January is 1.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyByMonthProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ByMonthPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-by-month",
    shellClassName: "lander-semantic--schema-property-by-month",
    title: "byMonth",
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

(SchemaPropertyByMonth as typeof SchemaPropertyByMonth & { toStructuredData: (props: SchemaPropertyByMonthProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
