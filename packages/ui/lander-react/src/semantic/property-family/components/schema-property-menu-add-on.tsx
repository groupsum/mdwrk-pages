import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MenuAddOnPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMenuAddOnProps extends MenuAddOnPropertyInput, GeneratedPropertyUiProps<MenuAddOnPropertyInput> {}

export function SchemaPropertyMenuAddOn({ value: legacyValue, description = "Additional menu item(s) such as a side dish of salad or side order of fries that can be added to this menu item. Additionally it can be a menu section containing allowed add-on menu items for this menu item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMenuAddOnProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyMenuAddOn as typeof SchemaPropertyMenuAddOn & { toStructuredData: (props: SchemaPropertyMenuAddOnProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
