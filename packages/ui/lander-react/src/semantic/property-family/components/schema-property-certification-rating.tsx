import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCertificationRatingProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCertificationRating({ value, description = "Rating of a certification instance (as defined by an independent certification body). Typically this rating can be used to rate the level to which the requirements of the certification instance are fulfilled. See also [gs1:certificationValue](https://www.gs1.org/voc/certificationValue).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCertificationRatingProps) {
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
