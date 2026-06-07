import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IsicV4PropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsicV4Props extends IsicV4PropertyInput, GeneratedPropertyUiProps<IsicV4PropertyInput> {}

export function SchemaPropertyIsicV4({ value: legacyValue, description = "The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIsicV4Props) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsicV4PropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-isic-v4",
    shellClassName: "lander-semantic--schema-property-isic-v4",
    title: "isicV4",
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

(SchemaPropertyIsicV4 as typeof SchemaPropertyIsicV4 & { toStructuredData: (props: SchemaPropertyIsicV4Props) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
