import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasParticipationOfferPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasParticipationOfferProps extends HasParticipationOfferPropertyInput, GeneratedPropertyUiProps<HasParticipationOfferPropertyInput> {}

export function SchemaPropertyHasParticipationOffer({ value: legacyValue, description = "An offer to participate in the event, for example, Call for Proposals, Call for Speakers, or Call for Performers.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasParticipationOfferProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasParticipationOfferPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-participation-offer",
    shellClassName: "lander-semantic--schema-property-has-participation-offer",
    title: "hasParticipationOffer",
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
