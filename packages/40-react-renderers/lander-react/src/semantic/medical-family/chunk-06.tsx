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

export interface MedicalProcedureProps extends CommonMedicalProps {
  bodyLocation?: string;
  followup?: string[];
  usedToDiagnose?: string[];
  structuredDataOverrides?: Partial<MedicalProcedureStructuredDataInput>;
}

export function MedicalProcedure(props: MedicalProcedureProps) {
  const base: MedicalProcedureStructuredDataInput = {
    name: props.name,
    description: props.description,
    bodyLocation: ref("SuperficialAnatomy", props.bodyLocation),
    followup: refList("MedicalTherapy", props.followup),
    usedToDiagnose: refList("MedicalCondition", props.usedToDiagnose),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MedicalProcedureStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell(
        "medical-procedure",
        props.name,
        props.viewModel?.eyebrow ?? "Medical procedure",
        props.description,
        props.bodyLocation ? [{ label: "Body location", value: props.bodyLocation }] : [],
        <>
          {props.followup?.length ? <div className="lander-semantic__medical-links">{bodyList(props.followup)}</div> : null}
          {props.usedToDiagnose?.length ? <div className="lander-semantic__medical-links">{bodyList(props.usedToDiagnose)}</div> : null}
          {props.body}
        </>,
        props.viewModel?.footer,
        props.className,
      )}
    </>
  );
}

export interface MedicalStudyProps extends CommonMedicalProps {
  status?: string;
  studySubject?: string[];
  structuredDataOverrides?: Partial<MedicalStudyStructuredDataInput>;
}

export function MedicalStudy(props: MedicalStudyProps) {
  const base: MedicalStudyStructuredDataInput = {
    name: props.name,
    description: props.description,
    status: props.status,
    studySubject: refList("MedicalEntity", props.studySubject),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  const meta = props.status ? [{ label: "Status", value: props.status }] : [];
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MedicalStudyStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell(
        "medical-study",
        props.name,
        props.viewModel?.eyebrow ?? "Medical study",
        props.description,
        meta,
        <>
          {props.studySubject?.length ? <div className="lander-semantic__medical-links">{bodyList(props.studySubject)}</div> : null}
          {props.body}
        </>,
        props.viewModel?.footer,
        props.className,
      )}
    </>
  );
}

export interface MedicalTestProps extends CommonMedicalProps {
  bodyLocation?: string;
  usedToDiagnose?: string[];
  structuredDataOverrides?: Partial<MedicalTestStructuredDataInput>;
}

export function MedicalTest(props: MedicalTestProps) {
  const base: MedicalTestStructuredDataInput = {
    name: props.name,
    description: props.description,
    bodyLocation: ref("SuperficialAnatomy", props.bodyLocation),
    usedToDiagnose: refList("MedicalCondition", props.usedToDiagnose),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MedicalTestStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell(
        "medical-test",
        props.name,
        props.viewModel?.eyebrow ?? "Medical test",
        props.description,
        props.bodyLocation ? [{ label: "Body location", value: props.bodyLocation }] : [],
        <>
          {props.usedToDiagnose?.length ? <div className="lander-semantic__medical-links">{bodyList(props.usedToDiagnose)}</div> : null}
          {props.body}
        </>,
        props.viewModel?.footer,
        props.className,
      )}
    </>
  );
}
