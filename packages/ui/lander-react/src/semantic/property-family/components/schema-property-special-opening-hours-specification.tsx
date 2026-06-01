import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySpecialOpeningHoursSpecificationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySpecialOpeningHoursSpecification({ value, description = "The special opening hours of a certain place.\\n\\nUse this to explicitly override general opening hours brought in scope by [[openingHoursSpecification]] or [[openingHours]].\n      ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySpecialOpeningHoursSpecificationProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SpecialOpeningHoursSpecificationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-special-opening-hours-specification",
    shellClassName: "lander-semantic--schema-property-special-opening-hours-specification",
    title: "specialOpeningHoursSpecification",
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
