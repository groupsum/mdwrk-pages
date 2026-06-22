import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { InteractivityTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInteractivityTypeProps extends InteractivityTypePropertyInput, GeneratedPropertyUiProps<InteractivityTypePropertyInput> {}

export function SchemaPropertyInteractivityType({ value: legacyValue, description = "The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyInteractivityTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InteractivityTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-interactivity-type",
    shellClassName: "lander-semantic--schema-property-interactivity-type",
    title: "interactivityType",
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

(SchemaPropertyInteractivityType as typeof SchemaPropertyInteractivityType & { toStructuredData: (props: SchemaPropertyInteractivityTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
