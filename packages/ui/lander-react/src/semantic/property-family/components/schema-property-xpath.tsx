import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyXpathProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyXpath({ value, description = "An XPath, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual \"Web page element\".", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyXpathProps) {
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
