import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyValueProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyValue({ value, description = "The value of a [[QuantitativeValue]] (including [[Observation]]) or property value node.\\n\\n* For [[QuantitativeValue]] and [[MonetaryAmount]], the recommended type for values is 'Number'.\\n* For [[PropertyValue]], it can be 'Text', 'Number', 'Boolean', or 'StructuredValue'.\\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyValueProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ValuePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-value",
    shellClassName: "lander-semantic--schema-property-value",
    title: "value",
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
