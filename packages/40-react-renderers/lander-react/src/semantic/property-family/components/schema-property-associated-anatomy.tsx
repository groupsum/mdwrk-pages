import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AssociatedAnatomyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAssociatedAnatomyProps extends AssociatedAnatomyPropertyInput, GeneratedPropertyUiProps<AssociatedAnatomyPropertyInput> {}

export function SchemaPropertyAssociatedAnatomy({ value: legacyValue, description = "The anatomy of the underlying organ system or structures associated with this entity.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAssociatedAnatomyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AssociatedAnatomyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-associated-anatomy",
    shellClassName: "lander-semantic--schema-property-associated-anatomy",
    title: "associatedAnatomy",
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

(SchemaPropertyAssociatedAnatomy as typeof SchemaPropertyAssociatedAnatomy & { toStructuredData: (props: SchemaPropertyAssociatedAnatomyProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
