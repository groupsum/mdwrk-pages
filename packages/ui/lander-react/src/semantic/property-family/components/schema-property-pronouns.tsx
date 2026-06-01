import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPronounsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPronouns({ value, description = "A short string listing or describing pronouns for a person. Typically the person concerned is the best authority as pronouns are a critical part of personal identity and expression. Publishers and consumers of this information are reminded to treat this data responsibly, take country-specific laws related to gender expression into account, and be wary of out-of-date data and drawing unwarranted inferences about the person being described.\n\nIn English, formulations such as \"they/them\", \"she/her\", and \"he/him\" are commonly used online and can also be used here. We do not intend to enumerate all possible micro-syntaxes in all languages. More structured and well-defined external values for pronouns can be referenced using the [[StructuredValue]] or [[DefinedTerm]] values.\n", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPronounsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PronounsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-pronouns",
    shellClassName: "lander-semantic--schema-property-pronouns",
    title: "pronouns",
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
