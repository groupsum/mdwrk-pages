import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SerialNumberPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySerialNumberProps extends SerialNumberPropertyInput, GeneratedPropertyUiProps<SerialNumberPropertyInput> {}

export function SchemaPropertySerialNumber({ value: legacyValue, description = "The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySerialNumberProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertySerialNumber as typeof SchemaPropertySerialNumber & { toStructuredData: (props: SchemaPropertySerialNumberProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
