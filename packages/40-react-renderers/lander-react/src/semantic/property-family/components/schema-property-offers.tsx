import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { OffersPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOffersProps extends OffersPropertyInput, GeneratedPropertyUiProps<OffersPropertyInput> {}

export function SchemaPropertyOffers({ value: legacyValue, description = "An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.\n      ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyOffersProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OffersPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-offers",
    shellClassName: "lander-semantic--schema-property-offers",
    title: "offers",
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

(SchemaPropertyOffers as typeof SchemaPropertyOffers & { toStructuredData: (props: SchemaPropertyOffersProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
