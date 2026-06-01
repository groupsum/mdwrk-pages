import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAdditionalTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAdditionalType({ value, description = "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. Typically the value is a URI-identified RDF class, and in this case corresponds to the\n    use of rdf:type in RDF. Text values can be used sparingly, for cases where useful information can be added without their being an appropriate schema to reference. In the case of text values, the class label should follow the schema.org <a href=\"https://schema.org/docs/styleguide.html\">style guide</a>.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAdditionalTypeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AdditionalTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-additional-type",
    shellClassName: "lander-semantic--schema-property-additional-type",
    title: "additionalType",
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
