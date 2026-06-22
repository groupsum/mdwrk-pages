import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList } from "../shared.js";

type EducationalOccupationalCredentialStructuredDataInput = React.ComponentProps<typeof structuredDataReact.EducationalOccupationalCredentialStructuredData>["data"];

export interface EducationalOccupationalCredentialProps {
  name: string;
  description?: string;
  credentialCategory?: string;
  recognizedBy?: { name: string; url?: string } | string;
  competencyRequired?: string[];
  educationalLevel?: string;
  occupationalCategory?: string | string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<EducationalOccupationalCredentialStructuredDataInput>;
}

export function EducationalOccupationalCredential(props: EducationalOccupationalCredentialProps) {
  const competencyRequired = props.competencyRequired?.filter((entry) => entry.trim());
  const base: EducationalOccupationalCredentialStructuredDataInput = {
    name: props.name,
    description: props.description,
    credentialCategory: props.credentialCategory,
    recognizedBy: props.recognizedBy
      ? typeof props.recognizedBy === "string"
        ? { "@type": "Organization", name: props.recognizedBy }
        : { "@type": "Organization", name: props.recognizedBy.name, url: props.recognizedBy.url }
      : undefined,
    competencyRequired,
    educationalLevel: props.educationalLevel,
    occupationalCategory: props.occupationalCategory,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.EducationalOccupationalCredentialStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="educational-occupational-credential"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Educational credential"}
        description={props.description}
        meta={[
          props.credentialCategory ? { label: "Category", value: props.credentialCategory } : null,
          props.educationalLevel ? { label: "Level", value: props.educationalLevel } : null,
          props.occupationalCategory
            ? { label: "Occupation", value: Array.isArray(props.occupationalCategory) ? props.occupationalCategory.join(", ") : props.occupationalCategory }
            : null,
          props.recognizedBy ? { label: "Recognized by", value: typeof props.recognizedBy === "string" ? props.recognizedBy : props.recognizedBy.name } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {competencyRequired?.length ? <div className="lander-semantic__learning-resource-teaches">{bodyList(competencyRequired)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
