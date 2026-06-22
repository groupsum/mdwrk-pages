import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList } from "../shared.js";

type MedicalEntityStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MedicalEntityStructuredData>["data"];
type MedicalIntangibleStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MedicalIntangibleStructuredData>["data"];
type MedicalAudienceStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MedicalAudienceStructuredData>["data"];
type MedicalCauseStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MedicalCauseStructuredData>["data"];
type MedicalCodeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MedicalCodeStructuredData>["data"];
type MedicalConditionStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MedicalConditionStructuredData>["data"];
type MedicalConditionStageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MedicalConditionStageStructuredData>["data"];
type MedicalContraindicationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MedicalContraindicationStructuredData>["data"];
type MedicalDeviceStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MedicalDeviceStructuredData>["data"];
type MedicalRiskFactorStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MedicalRiskFactorStructuredData>["data"];
type MedicalGuidelineStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MedicalGuidelineStructuredData>["data"];
type LifestyleModificationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.LifestyleModificationStructuredData>["data"];
type MedicalSignStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MedicalSignStructuredData>["data"];
type MedicalSignOrSymptomStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MedicalSignOrSymptomStructuredData>["data"];
type MaximumDoseScheduleStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MaximumDoseScheduleStructuredData>["data"];
type MedicalProcedureStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MedicalProcedureStructuredData>["data"];
type MedicalStudyStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MedicalStudyStructuredData>["data"];
type MedicalTestStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MedicalTestStructuredData>["data"];
type MedicalTherapyStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MedicalTherapyStructuredData>["data"];
type MedicalWebPageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MedicalWebPageStructuredData>["data"];
type SubstanceStructuredDataInput = React.ComponentProps<typeof structuredDataReact.SubstanceStructuredData>["data"];
type SuperficialAnatomyStructuredDataInput = React.ComponentProps<typeof structuredDataReact.SuperficialAnatomyStructuredData>["data"];
type TherapeuticProcedureStructuredDataInput = React.ComponentProps<typeof structuredDataReact.TherapeuticProcedureStructuredData>["data"];

function ref(type: string, value?: string) {
  return value ? { "@type": type, name: value } : undefined;
}

function refList(type: string, values?: string[]) {
  return values?.map((value) => ref(type, value)).filter(Boolean);
}

type ShellMeta = Array<{ label: string; value: React.ReactNode }>;

interface CommonMedicalProps {
  name: string;
  description?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
}

function renderMedicalShell(
  kind: string,
  title: string,
  eyebrow: string,
  description: string | undefined,
  meta: ShellMeta,
  body: React.ReactNode,
  footer: React.ReactNode,
  className: string | undefined,
) {
  return (
    <SemanticShell
      kind={kind}
      title={title}
      eyebrow={eyebrow}
      description={description}
      meta={meta.length ? meta : undefined}
      body={body}
      footer={footer}
      className={className}
    />
  );
}

export interface MedicalSignOrSymptomProps extends CommonMedicalProps {
  possibleTreatment?: string[];
  structuredDataOverrides?: Partial<MedicalSignOrSymptomStructuredDataInput>;
}

export function MedicalSignOrSymptom(props: MedicalSignOrSymptomProps) {
  const base: MedicalSignOrSymptomStructuredDataInput = {
    name: props.name,
    description: props.description,
    possibleTreatment: refList("MedicalTherapy", props.possibleTreatment),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MedicalSignOrSymptomStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell(
        "medical-sign-or-symptom",
        props.name,
        props.viewModel?.eyebrow ?? "Sign or symptom",
        props.description,
        [],
        <>
          {props.possibleTreatment?.length ? <div className="lander-semantic__medical-links">{bodyList(props.possibleTreatment)}</div> : null}
          {props.body}
        </>,
        props.viewModel?.footer,
        props.className,
      )}
    </>
  );
}

export interface MedicalCodeProps extends CommonMedicalProps {
  codeValue?: string;
  codingSystem?: string;
  structuredDataOverrides?: Partial<MedicalCodeStructuredDataInput>;
}

export function MedicalCode(props: MedicalCodeProps) {
  const base: MedicalCodeStructuredDataInput = {
    name: props.name,
    description: props.description,
    codeValue: props.codeValue,
    codingSystem: props.codingSystem,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  const meta = [
    props.codeValue ? { label: "Code value", value: props.codeValue } : null,
    props.codingSystem ? { label: "Coding system", value: props.codingSystem } : null,
  ].filter(Boolean) as ShellMeta;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MedicalCodeStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell("medical-code", props.name, props.viewModel?.eyebrow ?? "Medical code", props.description, meta, props.body, props.viewModel?.footer, props.className)}
    </>
  );
}

export interface LifestyleModificationProps extends CommonMedicalProps {
  code?: string;
  structuredDataOverrides?: Partial<LifestyleModificationStructuredDataInput>;
}

export function LifestyleModification(props: LifestyleModificationProps) {
  const base: LifestyleModificationStructuredDataInput = {
    name: props.name,
    description: props.description,
    code: props.code,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  const meta = props.code ? [{ label: "Code", value: props.code }] : [];
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.LifestyleModificationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell("lifestyle-modification", props.name, props.viewModel?.eyebrow ?? "Lifestyle modification", props.description, meta, props.body, props.viewModel?.footer, props.className)}
    </>
  );
}
