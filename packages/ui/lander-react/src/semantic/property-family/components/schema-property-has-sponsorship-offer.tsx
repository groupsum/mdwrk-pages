import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasSponsorshipOfferProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasSponsorshipOffer({ value, description = "An offer to sponsor the event, for example, Sponsorship Prospectus, Sponsorship Opportunities, or Sponsor Packages.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasSponsorshipOfferProps) {
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
