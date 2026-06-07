import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CssSelectorPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCssSelectorProps extends CssSelectorPropertyInput, GeneratedPropertyUiProps<CssSelectorPropertyInput> {}

export function SchemaPropertyCssSelector({ value: legacyValue, description = "A CSS selector, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual \"Web page element\".", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCssSelectorProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CssSelectorPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-css-selector",
    shellClassName: "lander-semantic--schema-property-css-selector",
    title: "cssSelector",
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

(SchemaPropertyCssSelector as typeof SchemaPropertyCssSelector & { toStructuredData: (props: SchemaPropertyCssSelectorProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
