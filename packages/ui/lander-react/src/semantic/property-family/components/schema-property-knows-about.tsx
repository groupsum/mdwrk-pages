import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { KnowsAboutPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyKnowsAboutProps extends KnowsAboutPropertyInput, GeneratedPropertyUiProps<KnowsAboutPropertyInput> {}

export function SchemaPropertyKnowsAbout({ value: legacyValue, description = "Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyKnowsAboutProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.KnowsAboutPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-knows-about",
    shellClassName: "lander-semantic--schema-property-knows-about",
    title: "knowsAbout",
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

(SchemaPropertyKnowsAbout as typeof SchemaPropertyKnowsAbout & { toStructuredData: (props: SchemaPropertyKnowsAboutProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
