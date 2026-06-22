import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RelatedLinkPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRelatedLinkProps extends RelatedLinkPropertyInput, GeneratedPropertyUiProps<RelatedLinkPropertyInput> {}

export function SchemaPropertyRelatedLink({ value: legacyValue, description = "A link related to this web page, for example to other related web pages.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRelatedLinkProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RelatedLinkPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-related-link",
    shellClassName: "lander-semantic--schema-property-related-link",
    title: "relatedLink",
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

(SchemaPropertyRelatedLink as typeof SchemaPropertyRelatedLink & { toStructuredData: (props: SchemaPropertyRelatedLinkProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
