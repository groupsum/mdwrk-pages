import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TourBookingPagePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTourBookingPageProps extends TourBookingPagePropertyInput, GeneratedPropertyUiProps<TourBookingPagePropertyInput> {}

export function SchemaPropertyTourBookingPage({ value: legacyValue, description = "A page providing information on how to book a tour of some [[Place]], such as an [[Accommodation]] or [[ApartmentComplex]] in a real estate setting, as well as other kinds of tours as appropriate.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTourBookingPageProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TourBookingPagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-tour-booking-page",
    shellClassName: "lander-semantic--schema-property-tour-booking-page",
    title: "tourBookingPage",
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

(SchemaPropertyTourBookingPage as typeof SchemaPropertyTourBookingPage & { toStructuredData: (props: SchemaPropertyTourBookingPageProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
