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

export interface MedicalContraindicationProps extends CommonMedicalProps {
  contraindication?: string;
  structuredDataOverrides?: Partial<MedicalContraindicationStructuredDataInput>;
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

export interface MedicalRiskFactorProps extends CommonMedicalProps {
  increasesRiskOf?: string[];
  structuredDataOverrides?: Partial<MedicalRiskFactorStructuredDataInput>;
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

export interface MedicalSignProps extends CommonMedicalProps {
  identifyingTest?: string[];
  structuredDataOverrides?: Partial<MedicalSignStructuredDataInput>;
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
