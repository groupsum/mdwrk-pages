import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CertificationRatingPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCertificationRatingProps extends CertificationRatingPropertyInput, GeneratedPropertyUiProps<CertificationRatingPropertyInput> {}

export function SchemaPropertyCertificationRating({ value: legacyValue, description = "Rating of a certification instance (as defined by an independent certification body). Typically this rating can be used to rate the level to which the requirements of the certification instance are fulfilled. See also [gs1:certificationValue](https://www.gs1.org/voc/certificationValue).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCertificationRatingProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CertificationRatingPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-certification-rating",
    shellClassName: "lander-semantic--schema-property-certification-rating",
    title: "certificationRating",
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

(SchemaPropertyCertificationRating as typeof SchemaPropertyCertificationRating & { toStructuredData: (props: SchemaPropertyCertificationRatingProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
