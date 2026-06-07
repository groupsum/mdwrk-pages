import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DirectorPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDirectorProps extends DirectorPropertyInput, GeneratedPropertyUiProps<DirectorPropertyInput> {}

export function SchemaPropertyDirector({ value: legacyValue, description = "A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDirectorProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DirectorPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-director",
    shellClassName: "lander-semantic--schema-property-director",
    title: "director",
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

(SchemaPropertyDirector as typeof SchemaPropertyDirector & { toStructuredData: (props: SchemaPropertyDirectorProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
