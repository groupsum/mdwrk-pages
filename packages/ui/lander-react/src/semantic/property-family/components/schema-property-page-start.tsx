import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PageStartPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPageStartProps extends PageStartPropertyInput, GeneratedPropertyUiProps<PageStartPropertyInput> {}

export function SchemaPropertyPageStart({ value: legacyValue, description = "The page on which the work starts; for example \"135\" or \"xiii\".", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPageStartProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PageStartPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-page-start",
    shellClassName: "lander-semantic--schema-property-page-start",
    title: "pageStart",
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

(SchemaPropertyPageStart as typeof SchemaPropertyPageStart & { toStructuredData: (props: SchemaPropertyPageStartProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
