import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IsAccessoryOrSparePartForPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsAccessoryOrSparePartForProps extends IsAccessoryOrSparePartForPropertyInput, GeneratedPropertyUiProps<IsAccessoryOrSparePartForPropertyInput> {}

export function SchemaPropertyIsAccessoryOrSparePartFor({ value: legacyValue, description = "A pointer to another product (or multiple products) for which this product is an accessory or spare part.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIsAccessoryOrSparePartForProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsAccessoryOrSparePartForPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-accessory-or-spare-part-for",
    shellClassName: "lander-semantic--schema-property-is-accessory-or-spare-part-for",
    title: "isAccessoryOrSparePartFor",
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

(SchemaPropertyIsAccessoryOrSparePartFor as typeof SchemaPropertyIsAccessoryOrSparePartFor & { toStructuredData: (props: SchemaPropertyIsAccessoryOrSparePartForProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
