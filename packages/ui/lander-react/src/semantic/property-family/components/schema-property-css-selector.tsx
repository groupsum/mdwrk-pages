import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCssSelectorProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCssSelector({ value, description = "A CSS selector, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual \"Web page element\".", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCssSelectorProps) {
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
