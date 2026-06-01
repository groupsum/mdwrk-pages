import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyItemListElementProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyItemListElement({ value, description = "For itemListElement values, you can use simple strings (e.g. \"Peter\", \"Paul\", \"Mary\"), existing entities, or use ListItem.\\n\\nText values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.\\n\\nNote: The order of elements in your mark-up is not sufficient for indicating the order or elements.  Use ListItem with a 'position' property in such cases.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyItemListElementProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ItemListElementPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-item-list-element",
    shellClassName: "lander-semantic--schema-property-item-list-element",
    title: "itemListElement",
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
