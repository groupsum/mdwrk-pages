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

export interface MedicalDeviceProps extends CommonMedicalProps {
  bodyLocation?: string;
  manufacturer?: string;
  procedure?: string[];
  structuredDataOverrides?: Partial<MedicalDeviceStructuredDataInput>;
}

export function MedicalDevice(props: MedicalDeviceProps) {
  const base: MedicalDeviceStructuredDataInput = {
    name: props.name,
    description: props.description,
    bodyLocation: ref("SuperficialAnatomy", props.bodyLocation),
    manufacturer: ref("Organization", props.manufacturer),
    procedure: refList("MedicalProcedure", props.procedure),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MedicalDeviceStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell(
        "medical-device",
        props.name,
        props.viewModel?.eyebrow ?? "Medical device",
        props.description,
        props.bodyLocation ? [{ label: "Body location", value: props.bodyLocation }] : [],
        <>
          {props.manufacturer ? <div className="lander-semantic__medical-links">{bodyList([props.manufacturer])}</div> : null}
          {props.procedure?.length ? <div className="lander-semantic__medical-links">{bodyList(props.procedure)}</div> : null}
          {props.body}
        </>,
        props.viewModel?.footer,
        props.className,
      )}
    </>
  );
}

export interface MedicalGuidelineProps extends CommonMedicalProps {
  guidelineSubject?: string[];
  structuredDataOverrides?: Partial<MedicalGuidelineStructuredDataInput>;
}

export function MedicalGuideline(props: MedicalGuidelineProps) {
  const base: MedicalGuidelineStructuredDataInput = {
    name: props.name,
    description: props.description,
    guidelineSubject: refList("MedicalEntity", props.guidelineSubject),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MedicalGuidelineStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell(
        "medical-guideline",
        props.name,
        props.viewModel?.eyebrow ?? "Medical guideline",
        props.description,
        [],
        <>
          {props.guidelineSubject?.length ? <div className="lander-semantic__medical-links">{bodyList(props.guidelineSubject)}</div> : null}
          {props.body}
        </>,
        props.viewModel?.footer,
        props.className,
      )}
    </>
  );
}

export interface MaximumDoseScheduleProps extends CommonMedicalProps {
  doseUnit?: string;
  frequency?: string;
  structuredDataOverrides?: Partial<MaximumDoseScheduleStructuredDataInput>;
}

export function MaximumDoseSchedule(props: MaximumDoseScheduleProps) {
  const base: MaximumDoseScheduleStructuredDataInput = {
    name: props.name,
    description: props.description,
    doseUnit: props.doseUnit,
    frequency: props.frequency,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  const meta = [
    props.doseUnit ? { label: "Dose unit", value: props.doseUnit } : null,
    props.frequency ? { label: "Frequency", value: props.frequency } : null,
  ].filter(Boolean) as ShellMeta;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MaximumDoseScheduleStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell("maximum-dose-schedule", props.name, props.viewModel?.eyebrow ?? "Maximum dose schedule", props.description, meta, props.body, props.viewModel?.footer, props.className)}
    </>
  );
}
