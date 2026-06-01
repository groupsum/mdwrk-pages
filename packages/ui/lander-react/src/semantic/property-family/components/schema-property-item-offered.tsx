import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyItemOfferedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyItemOffered({ value, description = "An item being offered (or demanded). The transactional nature of the offer or demand is documented using [[businessFunction]], e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyItemOfferedProps) {
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
