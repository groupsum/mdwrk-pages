import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { UserInteractionCountPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUserInteractionCountProps extends UserInteractionCountPropertyInput, GeneratedPropertyUiProps<UserInteractionCountPropertyInput> {}

export function SchemaPropertyUserInteractionCount({ value: legacyValue, description = "The number of interactions for the CreativeWork using the WebSite or SoftwareApplication.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyUserInteractionCountProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.UserInteractionCountPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-user-interaction-count",
    shellClassName: "lander-semantic--schema-property-user-interaction-count",
    title: "userInteractionCount",
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

(SchemaPropertyUserInteractionCount as typeof SchemaPropertyUserInteractionCount & { toStructuredData: (props: SchemaPropertyUserInteractionCountProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
