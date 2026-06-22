import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { WorkFeaturedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWorkFeaturedProps extends WorkFeaturedPropertyInput, GeneratedPropertyUiProps<WorkFeaturedPropertyInput> {}

export function SchemaPropertyWorkFeatured({ value: legacyValue, description = "A work featured in some event, e.g. exhibited in an ExhibitionEvent.\n       Specific subproperties are available for workPerformed (e.g. a play), or a workPresented (a Movie at a ScreeningEvent).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyWorkFeaturedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WorkFeaturedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-work-featured",
    shellClassName: "lander-semantic--schema-property-work-featured",
    title: "workFeatured",
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

(SchemaPropertyWorkFeatured as typeof SchemaPropertyWorkFeatured & { toStructuredData: (props: SchemaPropertyWorkFeaturedProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
