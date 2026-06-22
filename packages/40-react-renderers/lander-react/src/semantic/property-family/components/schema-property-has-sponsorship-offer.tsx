import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasSponsorshipOfferPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasSponsorshipOfferProps extends HasSponsorshipOfferPropertyInput, GeneratedPropertyUiProps<HasSponsorshipOfferPropertyInput> {}

export function SchemaPropertyHasSponsorshipOffer({ value: legacyValue, description = "An offer to sponsor the event, for example, Sponsorship Prospectus, Sponsorship Opportunities, or Sponsor Packages.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasSponsorshipOfferProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasSponsorshipOfferPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-sponsorship-offer",
    shellClassName: "lander-semantic--schema-property-has-sponsorship-offer",
    title: "hasSponsorshipOffer",
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

(SchemaPropertyHasSponsorshipOffer as typeof SchemaPropertyHasSponsorshipOffer & { toStructuredData: (props: SchemaPropertyHasSponsorshipOfferProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
