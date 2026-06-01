import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ItemOfferedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyItemOfferedProps extends ItemOfferedPropertyInput, GeneratedPropertyUiProps<ItemOfferedPropertyInput> {}

export function SchemaPropertyItemOffered({ value: legacyValue, description = "An item being offered (or demanded). The transactional nature of the offer or demand is documented using [[businessFunction]], e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyItemOfferedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ItemOfferedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-item-offered",
    shellClassName: "lander-semantic--schema-property-item-offered",
    title: "itemOffered",
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
