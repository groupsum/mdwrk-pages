import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SpecialOpeningHoursSpecificationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySpecialOpeningHoursSpecificationProps extends SpecialOpeningHoursSpecificationPropertyInput, GeneratedPropertyUiProps<SpecialOpeningHoursSpecificationPropertyInput> {}

export function SchemaPropertySpecialOpeningHoursSpecification({ value: legacyValue, description = "The special opening hours of a certain place.\\n\\nUse this to explicitly override general opening hours brought in scope by [[openingHoursSpecification]] or [[openingHours]].\n      ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySpecialOpeningHoursSpecificationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertySpecialOpeningHoursSpecification as typeof SchemaPropertySpecialOpeningHoursSpecification & { toStructuredData: (props: SchemaPropertySpecialOpeningHoursSpecificationProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
