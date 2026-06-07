import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ActionPlatformPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyActionPlatformProps extends ActionPlatformPropertyInput, GeneratedPropertyUiProps<ActionPlatformPropertyInput> {}

export function SchemaPropertyActionPlatform({ value: legacyValue, description = "The high level platform(s) where the Action can be performed for the given URL. To specify a specific application or operating system instance, use actionApplication.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyActionPlatformProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ActionPlatformPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-action-platform",
    shellClassName: "lander-semantic--schema-property-action-platform",
    title: "actionPlatform",
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

(SchemaPropertyActionPlatform as typeof SchemaPropertyActionPlatform & { toStructuredData: (props: SchemaPropertyActionPlatformProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
