import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MainEntityOfPagePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMainEntityOfPageProps extends MainEntityOfPagePropertyInput, GeneratedPropertyUiProps<MainEntityOfPagePropertyInput> {}

export function SchemaPropertyMainEntityOfPage({ value: legacyValue, description = "Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMainEntityOfPageProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MainEntityOfPagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-main-entity-of-page",
    shellClassName: "lander-semantic--schema-property-main-entity-of-page",
    title: "mainEntityOfPage",
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

(SchemaPropertyMainEntityOfPage as typeof SchemaPropertyMainEntityOfPage & { toStructuredData: (props: SchemaPropertyMainEntityOfPageProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
