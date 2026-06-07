import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, buildGeneratedEnumerationStructuredData, renderGeneratedEnumerationCard } from "../shared.js";

export interface DrugPregnancyCategoryProps extends GeneratedEnumerationProps<string> {}

export function DrugPregnancyCategory({ value, description = "Categories that represent an assessment of the risk of fetal injury due to a drug or pharmaceutical used as directed by the mother during pregnancy.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: DrugPregnancyCategoryProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.DrugPregnancyCategoryStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-drug-pregnancy-category",
    shellClassName: "lander-semantic--schema-enumeration-drug-pregnancy-category",
    title: "DrugPregnancyCategory",
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

(DrugPregnancyCategory as typeof DrugPregnancyCategory & { toStructuredData: (props: DrugPregnancyCategoryProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedEnumerationStructuredData(props);
