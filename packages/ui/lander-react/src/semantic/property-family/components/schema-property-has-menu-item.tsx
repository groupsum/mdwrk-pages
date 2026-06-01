import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasMenuItemProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasMenuItem({ value, description = "A food or drink item contained in a menu or menu section.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasMenuItemProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasMenuItemPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-menu-item",
    shellClassName: "lander-semantic--schema-property-has-menu-item",
    title: "hasMenuItem",
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
