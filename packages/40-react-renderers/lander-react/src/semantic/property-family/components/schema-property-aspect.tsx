import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AspectPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAspectProps extends AspectPropertyInput, GeneratedPropertyUiProps<AspectPropertyInput> {}

export function SchemaPropertyAspect({ value: legacyValue, description = "An aspect of medical practice that is considered on the page, such as 'diagnosis', 'treatment', 'causes', 'prognosis', 'etiology', 'epidemiology', etc.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAspectProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AspectPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-aspect",
    shellClassName: "lander-semantic--schema-property-aspect",
    title: "aspect",
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

(SchemaPropertyAspect as typeof SchemaPropertyAspect & { toStructuredData: (props: SchemaPropertyAspectProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
