import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { GracePeriodPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyGracePeriodProps extends GracePeriodPropertyInput, GeneratedPropertyUiProps<GracePeriodPropertyInput> {}

export function SchemaPropertyGracePeriod({ value: legacyValue, description = "The period of time after any due date that the borrower has to fulfil its obligations before a default (failure to pay) is deemed to have occurred.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyGracePeriodProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.GracePeriodPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-grace-period",
    shellClassName: "lander-semantic--schema-property-grace-period",
    title: "gracePeriod",
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

(SchemaPropertyGracePeriod as typeof SchemaPropertyGracePeriod & { toStructuredData: (props: SchemaPropertyGracePeriodProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
