import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySeriousAdverseOutcomeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySeriousAdverseOutcome({ value, description = "A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySeriousAdverseOutcomeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SeriousAdverseOutcomePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-serious-adverse-outcome",
    shellClassName: "lander-semantic--schema-property-serious-adverse-outcome",
    title: "seriousAdverseOutcome",
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
