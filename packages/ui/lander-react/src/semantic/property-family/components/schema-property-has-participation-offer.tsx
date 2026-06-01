import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasParticipationOfferProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasParticipationOffer({ value, description = "An offer to participate in the event, for example, Call for Proposals, Call for Speakers, or Call for Performers.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasParticipationOfferProps) {
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
