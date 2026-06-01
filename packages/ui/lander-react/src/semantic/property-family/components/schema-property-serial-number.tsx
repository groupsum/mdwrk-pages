import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySerialNumberProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySerialNumber({ value, description = "The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySerialNumberProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SerialNumberPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-serial-number",
    shellClassName: "lander-semantic--schema-property-serial-number",
    title: "serialNumber",
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
