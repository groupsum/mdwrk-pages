import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { WorkPerformedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWorkPerformedProps extends WorkPerformedPropertyInput, GeneratedPropertyUiProps<WorkPerformedPropertyInput> {}

export function SchemaPropertyWorkPerformed({ value: legacyValue, description = "A work performed in some event, for example a play performed in a TheaterEvent.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyWorkPerformedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WorkPerformedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-work-performed",
    shellClassName: "lander-semantic--schema-property-work-performed",
    title: "workPerformed",
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

(SchemaPropertyWorkPerformed as typeof SchemaPropertyWorkPerformed & { toStructuredData: (props: SchemaPropertyWorkPerformedProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
