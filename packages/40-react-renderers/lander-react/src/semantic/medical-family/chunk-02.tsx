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

export interface MedicalCauseProps extends CommonMedicalProps {
  causeOf?: string[];
  structuredDataOverrides?: Partial<MedicalCauseStructuredDataInput>;
}

export function MedicalCause(props: MedicalCauseProps) {
  const base: MedicalCauseStructuredDataInput = {
    name: props.name,
    description: props.description,
    causeOf: refList("MedicalCondition", props.causeOf),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MedicalCauseStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell(
        "medical-cause",
        props.name,
        props.viewModel?.eyebrow ?? "Medical cause",
        props.description,
        [],
        <>
          {props.causeOf?.length ? <div className="lander-semantic__medical-links">{bodyList(props.causeOf)}</div> : null}
          {props.body}
        </>,
        props.viewModel?.footer,
        props.className,
      )}
    </>
  );
}

export interface MedicalConditionProps extends CommonMedicalProps {
  associatedAnatomy?: string[];
  possibleTreatment?: string[];
  signOrSymptom?: string[];
  stage?: string[];
  structuredDataOverrides?: Partial<MedicalConditionStructuredDataInput>;
}

export function MedicalCondition(props: MedicalConditionProps) {
  const base: MedicalConditionStructuredDataInput = {
    name: props.name,
    description: props.description,
    associatedAnatomy: refList("SuperficialAnatomy", props.associatedAnatomy),
    possibleTreatment: refList("MedicalTherapy", props.possibleTreatment),
    signOrSymptom: refList("MedicalSignOrSymptom", props.signOrSymptom),
    stage: refList("MedicalConditionStage", props.stage),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MedicalConditionStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell(
        "medical-condition",
        props.name,
        props.viewModel?.eyebrow ?? "Medical condition",
        props.description,
        [],
        <>
          {props.associatedAnatomy?.length ? <div className="lander-semantic__medical-links">{bodyList(props.associatedAnatomy)}</div> : null}
          {props.signOrSymptom?.length ? <div className="lander-semantic__medical-links">{bodyList(props.signOrSymptom)}</div> : null}
          {props.stage?.length ? <div className="lander-semantic__medical-links">{bodyList(props.stage)}</div> : null}
          {props.possibleTreatment?.length ? <div className="lander-semantic__medical-links">{bodyList(props.possibleTreatment)}</div> : null}
          {props.body}
        </>,
        props.viewModel?.footer,
        props.className,
      )}
    </>
  );
}

export interface MedicalConditionStageProps extends CommonMedicalProps {
  stageAsNumber?: string;
  subStageSuffix?: string;
  structuredDataOverrides?: Partial<MedicalConditionStageStructuredDataInput>;
}

export function MedicalConditionStage(props: MedicalConditionStageProps) {
  const base: MedicalConditionStageStructuredDataInput = {
    name: props.name,
    description: props.description,
    stageAsNumber: props.stageAsNumber,
    subStageSuffix: props.subStageSuffix,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  const meta = [
    props.stageAsNumber ? { label: "Stage", value: props.stageAsNumber } : null,
    props.subStageSuffix ? { label: "Suffix", value: props.subStageSuffix } : null,
  ].filter(Boolean) as ShellMeta;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MedicalConditionStageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell("medical-condition-stage", props.name, props.viewModel?.eyebrow ?? "Condition stage", props.description, meta, props.body, props.viewModel?.footer, props.className)}
    </>
  );
}
