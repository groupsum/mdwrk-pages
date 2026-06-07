import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { OfferCountPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOfferCountProps extends OfferCountPropertyInput, GeneratedPropertyUiProps<OfferCountPropertyInput> {}

export function SchemaPropertyOfferCount({ value: legacyValue, description = "The number of offers for the product.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyOfferCountProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OfferCountPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-offer-count",
    shellClassName: "lander-semantic--schema-property-offer-count",
    title: "offerCount",
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

(SchemaPropertyOfferCount as typeof SchemaPropertyOfferCount & { toStructuredData: (props: SchemaPropertyOfferCountProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
