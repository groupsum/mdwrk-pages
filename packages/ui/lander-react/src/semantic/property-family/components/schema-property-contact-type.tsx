import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContactTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyContactType({ value, description = "A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyContactTypeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContactTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-contact-type",
    shellClassName: "lander-semantic--schema-property-contact-type",
    title: "contactType",
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
