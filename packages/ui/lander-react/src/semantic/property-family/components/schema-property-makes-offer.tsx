import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MakesOfferPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMakesOfferProps extends MakesOfferPropertyInput, GeneratedPropertyUiProps<MakesOfferPropertyInput> {}

export function SchemaPropertyMakesOffer({ value: legacyValue, description = "A pointer to products or services offered by the organization or person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMakesOfferProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MakesOfferPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-makes-offer",
    shellClassName: "lander-semantic--schema-property-makes-offer",
    title: "makesOffer",
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

(SchemaPropertyMakesOffer as typeof SchemaPropertyMakesOffer & { toStructuredData: (props: SchemaPropertyMakesOfferProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
