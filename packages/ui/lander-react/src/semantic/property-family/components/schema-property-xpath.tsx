import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { XpathPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyXpathProps extends XpathPropertyInput, GeneratedPropertyUiProps<XpathPropertyInput> {}

export function SchemaPropertyXpath({ value: legacyValue, description = "An XPath, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual \"Web page element\".", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyXpathProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.XpathPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-xpath",
    shellClassName: "lander-semantic--schema-property-xpath",
    title: "xpath",
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
