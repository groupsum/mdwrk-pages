import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMenuAddOnProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMenuAddOn({ value, description = "Additional menu item(s) such as a side dish of salad or side order of fries that can be added to this menu item. Additionally it can be a menu section containing allowed add-on menu items for this menu item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMenuAddOnProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MenuAddOnPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-menu-add-on",
    shellClassName: "lander-semantic--schema-property-menu-add-on",
    title: "menuAddOn",
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
