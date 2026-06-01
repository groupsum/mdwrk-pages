import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAdverseOutcomeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAdverseOutcome({ value, description = "A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or otherwise life-threatening or requiring immediate medical attention), tag it as a seriousAdverseOutcome instead.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAdverseOutcomeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AdverseOutcomePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-adverse-outcome",
    shellClassName: "lander-semantic--schema-property-adverse-outcome",
    title: "adverseOutcome",
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
