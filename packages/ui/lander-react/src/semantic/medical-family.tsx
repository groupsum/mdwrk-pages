import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList } from "./shared.js";

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

export interface MedicalEntityProps extends CommonMedicalProps {
  code?: string;
  relevantSpecialty?: string[];
  structuredDataOverrides?: Partial<MedicalEntityStructuredDataInput>;
}

export interface MedicalIntangibleProps extends CommonMedicalProps {
  code?: string;
  relevantSpecialty?: string[];
  structuredDataOverrides?: Partial<MedicalIntangibleStructuredDataInput>;
}

export interface MedicalAudienceProps extends CommonMedicalProps {
  audienceType?: string;
  geographicArea?: string;
  healthCondition?: string;
  structuredDataOverrides?: Partial<MedicalAudienceStructuredDataInput>;
}

export interface MedicalCauseProps extends CommonMedicalProps {
  causeOf?: string[];
  structuredDataOverrides?: Partial<MedicalCauseStructuredDataInput>;
}

export interface MedicalCodeProps extends CommonMedicalProps {
  codeValue?: string;
  codingSystem?: string;
  structuredDataOverrides?: Partial<MedicalCodeStructuredDataInput>;
}

export interface LifestyleModificationProps extends CommonMedicalProps {
  code?: string;
  structuredDataOverrides?: Partial<LifestyleModificationStructuredDataInput>;
}

export interface MedicalConditionProps extends CommonMedicalProps {
  associatedAnatomy?: string[];
  possibleTreatment?: string[];
  signOrSymptom?: string[];
  stage?: string[];
  structuredDataOverrides?: Partial<MedicalConditionStructuredDataInput>;
}

export interface MedicalConditionStageProps extends CommonMedicalProps {
  stageAsNumber?: string;
  subStageSuffix?: string;
  structuredDataOverrides?: Partial<MedicalConditionStageStructuredDataInput>;
}

export interface MedicalContraindicationProps extends CommonMedicalProps {
  contraindication?: string;
  structuredDataOverrides?: Partial<MedicalContraindicationStructuredDataInput>;
}

export interface MedicalDeviceProps extends CommonMedicalProps {
  bodyLocation?: string;
  manufacturer?: string;
  procedure?: string[];
  structuredDataOverrides?: Partial<MedicalDeviceStructuredDataInput>;
}

export interface MedicalGuidelineProps extends CommonMedicalProps {
  guidelineSubject?: string[];
  structuredDataOverrides?: Partial<MedicalGuidelineStructuredDataInput>;
}

export interface MaximumDoseScheduleProps extends CommonMedicalProps {
  doseUnit?: string;
  frequency?: string;
  structuredDataOverrides?: Partial<MaximumDoseScheduleStructuredDataInput>;
}

export interface MedicalRiskFactorProps extends CommonMedicalProps {
  increasesRiskOf?: string[];
  structuredDataOverrides?: Partial<MedicalRiskFactorStructuredDataInput>;
}

export interface MedicalSignProps extends CommonMedicalProps {
  identifyingTest?: string[];
  structuredDataOverrides?: Partial<MedicalSignStructuredDataInput>;
}

export interface MedicalSignOrSymptomProps extends CommonMedicalProps {
  possibleTreatment?: string[];
  structuredDataOverrides?: Partial<MedicalSignOrSymptomStructuredDataInput>;
}

export interface MedicalProcedureProps extends CommonMedicalProps {
  bodyLocation?: string;
  followup?: string[];
  usedToDiagnose?: string[];
  structuredDataOverrides?: Partial<MedicalProcedureStructuredDataInput>;
}

export interface MedicalStudyProps extends CommonMedicalProps {
  status?: string;
  studySubject?: string[];
  structuredDataOverrides?: Partial<MedicalStudyStructuredDataInput>;
}

export interface MedicalTestProps extends CommonMedicalProps {
  bodyLocation?: string;
  usedToDiagnose?: string[];
  structuredDataOverrides?: Partial<MedicalTestStructuredDataInput>;
}

export interface MedicalTherapyProps extends CommonMedicalProps {
  contraindication?: string[];
  duplicateTherapy?: string[];
  structuredDataOverrides?: Partial<MedicalTherapyStructuredDataInput>;
}

export interface SubstanceProps extends CommonMedicalProps {
  activeIngredient?: string;
  structuredDataOverrides?: Partial<SubstanceStructuredDataInput>;
}

export interface MedicalWebPageProps extends CommonMedicalProps {
  about?: string;
  lastReviewed?: string;
  structuredDataOverrides?: Partial<MedicalWebPageStructuredDataInput>;
}

export interface SuperficialAnatomyProps extends CommonMedicalProps {
  associatedPathophysiology?: string;
  structuredDataOverrides?: Partial<SuperficialAnatomyStructuredDataInput>;
}

export interface TherapeuticProcedureProps extends CommonMedicalProps {
  bodyLocation?: string;
  followup?: string[];
  usedToDiagnose?: string[];
  structuredDataOverrides?: Partial<TherapeuticProcedureStructuredDataInput>;
}

export function MedicalEntity(props: MedicalEntityProps) {
  const base: MedicalEntityStructuredDataInput = {
    name: props.name,
    description: props.description,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  const meta = [
    props.code ? { label: "Code", value: props.code } : null,
  ].filter(Boolean) as ShellMeta;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MedicalEntityStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell(
        "medical-entity",
        props.name,
        props.viewModel?.eyebrow ?? "Medical entity",
        props.description,
        meta,
        <>
          {props.relevantSpecialty?.length ? <div className="lander-semantic__medical-specialties">{bodyList(props.relevantSpecialty)}</div> : null}
          {props.body}
        </>,
        props.viewModel?.footer,
        props.className,
      )}
    </>
  );
}

export function MedicalIntangible(props: MedicalIntangibleProps) {
  const base: MedicalIntangibleStructuredDataInput = {
    name: props.name,
    description: props.description,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  const meta = [
    props.code ? { label: "Code", value: props.code } : null,
  ].filter(Boolean) as ShellMeta;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MedicalIntangibleStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell(
        "medical-intangible",
        props.name,
        props.viewModel?.eyebrow ?? "Medical intangible",
        props.description,
        meta,
        <>
          {props.relevantSpecialty?.length ? <div className="lander-semantic__medical-specialties">{bodyList(props.relevantSpecialty)}</div> : null}
          {props.body}
        </>,
        props.viewModel?.footer,
        props.className,
      )}
    </>
  );
}

export function MedicalAudience(props: MedicalAudienceProps) {
  const base: MedicalAudienceStructuredDataInput = {
    name: props.name,
    description: props.description,
    audienceType: props.audienceType,
    geographicArea: ref("AdministrativeArea", props.geographicArea),
    healthCondition: ref("MedicalCondition", props.healthCondition),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  const meta = [
    props.audienceType ? { label: "Audience", value: props.audienceType } : null,
    props.geographicArea ? { label: "Area", value: props.geographicArea } : null,
    props.healthCondition ? { label: "Condition", value: props.healthCondition } : null,
  ].filter(Boolean) as ShellMeta;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MedicalAudienceStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell("medical-audience", props.name, props.viewModel?.eyebrow ?? "Medical audience", props.description, meta, props.body, props.viewModel?.footer, props.className)}
    </>
  );
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

export function MedicalContraindication(props: MedicalContraindicationProps) {
  const base: MedicalContraindicationStructuredDataInput = {
    name: props.name,
    description: props.description,
    contraindication: ref("MedicalEntity", props.contraindication),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  const meta = [
    props.contraindication ? { label: "Contraindication", value: props.contraindication } : null,
  ].filter(Boolean) as ShellMeta;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MedicalContraindicationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell("medical-contraindication", props.name, props.viewModel?.eyebrow ?? "Contraindication", props.description, meta, props.body, props.viewModel?.footer, props.className)}
    </>
  );
}

export function MedicalRiskFactor(props: MedicalRiskFactorProps) {
  const base: MedicalRiskFactorStructuredDataInput = {
    name: props.name,
    description: props.description,
    increasesRiskOf: refList("MedicalCondition", props.increasesRiskOf),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MedicalRiskFactorStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell(
        "medical-risk-factor",
        props.name,
        props.viewModel?.eyebrow ?? "Risk factor",
        props.description,
        [],
        <>
          {props.increasesRiskOf?.length ? <div className="lander-semantic__medical-links">{bodyList(props.increasesRiskOf)}</div> : null}
          {props.body}
        </>,
        props.viewModel?.footer,
        props.className,
      )}
    </>
  );
}

export function MedicalSign(props: MedicalSignProps) {
  const base: MedicalSignStructuredDataInput = {
    name: props.name,
    description: props.description,
    identifyingTest: refList("MedicalTest", props.identifyingTest),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MedicalSignStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell(
        "medical-sign",
        props.name,
        props.viewModel?.eyebrow ?? "Medical sign",
        props.description,
        [],
        <>
          {props.identifyingTest?.length ? <div className="lander-semantic__medical-links">{bodyList(props.identifyingTest)}</div> : null}
          {props.body}
        </>,
        props.viewModel?.footer,
        props.className,
      )}
    </>
  );
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

export function MedicalTherapy(props: MedicalTherapyProps) {
  const base: MedicalTherapyStructuredDataInput = {
    name: props.name,
    description: props.description,
    contraindication: refList("MedicalContraindication", props.contraindication),
    duplicateTherapy: refList("MedicalTherapy", props.duplicateTherapy),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MedicalTherapyStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell(
        "medical-therapy",
        props.name,
        props.viewModel?.eyebrow ?? "Medical therapy",
        props.description,
        [],
        <>
          {props.contraindication?.length ? <div className="lander-semantic__medical-links">{bodyList(props.contraindication)}</div> : null}
          {props.duplicateTherapy?.length ? <div className="lander-semantic__medical-links">{bodyList(props.duplicateTherapy)}</div> : null}
          {props.body}
        </>,
        props.viewModel?.footer,
        props.className,
      )}
    </>
  );
}

export function Substance(props: SubstanceProps) {
  const base: SubstanceStructuredDataInput = {
    name: props.name,
    description: props.description,
    activeIngredient: props.activeIngredient,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  const meta = props.activeIngredient ? [{ label: "Active ingredient", value: props.activeIngredient }] : [];
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.SubstanceStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell("substance", props.name, props.viewModel?.eyebrow ?? "Substance", props.description, meta, props.body, props.viewModel?.footer, props.className)}
    </>
  );
}

export function MedicalWebPage(props: MedicalWebPageProps) {
  const base: MedicalWebPageStructuredDataInput = {
    name: props.name,
    description: props.description,
    about: ref("MedicalEntity", props.about),
    lastReviewed: props.lastReviewed,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  const meta = [
    props.about ? { label: "About", value: props.about } : null,
    props.lastReviewed ? { label: "Last reviewed", value: props.lastReviewed } : null,
  ].filter(Boolean) as ShellMeta;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MedicalWebPageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell("medical-web-page", props.name, props.viewModel?.eyebrow ?? "Medical web page", props.description, meta, props.body, props.viewModel?.footer, props.className)}
    </>
  );
}

export function SuperficialAnatomy(props: SuperficialAnatomyProps) {
  const base: SuperficialAnatomyStructuredDataInput = {
    name: props.name,
    description: props.description,
    associatedPathophysiology: props.associatedPathophysiology,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  const meta = props.associatedPathophysiology ? [{ label: "Pathophysiology", value: props.associatedPathophysiology }] : [];
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.SuperficialAnatomyStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell("superficial-anatomy", props.name, props.viewModel?.eyebrow ?? "Superficial anatomy", props.description, meta, props.body, props.viewModel?.footer, props.className)}
    </>
  );
}

export function TherapeuticProcedure(props: TherapeuticProcedureProps) {
  const base: TherapeuticProcedureStructuredDataInput = {
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
        <structuredDataReact.TherapeuticProcedureStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      {renderMedicalShell(
        "therapeutic-procedure",
        props.name,
        props.viewModel?.eyebrow ?? "Therapeutic procedure",
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
