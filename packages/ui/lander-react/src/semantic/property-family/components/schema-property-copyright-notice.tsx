import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCopyrightNoticeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCopyrightNotice({ value, description = "Text of a notice appropriate for describing the copyright aspects of this Creative Work, ideally indicating the owner of the copyright for the Work.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCopyrightNoticeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CopyrightNoticePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-copyright-notice",
    shellClassName: "lander-semantic--schema-property-copyright-notice",
    title: "copyrightNotice",
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
