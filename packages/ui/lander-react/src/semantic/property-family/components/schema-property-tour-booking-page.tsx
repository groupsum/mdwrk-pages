import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTourBookingPageProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTourBookingPage({ value, description = "A page providing information on how to book a tour of some [[Place]], such as an [[Accommodation]] or [[ApartmentComplex]] in a real estate setting, as well as other kinds of tours as appropriate.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTourBookingPageProps) {
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
