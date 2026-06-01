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

export interface MedicalTherapyProps extends CommonMedicalProps {
  contraindication?: string[];
  duplicateTherapy?: string[];
  structuredDataOverrides?: Partial<MedicalTherapyStructuredDataInput>;
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

export interface SubstanceProps extends CommonMedicalProps {
  activeIngredient?: string;
  structuredDataOverrides?: Partial<SubstanceStructuredDataInput>;
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

export interface MedicalWebPageProps extends CommonMedicalProps {
  about?: string;
  lastReviewed?: string;
  structuredDataOverrides?: Partial<MedicalWebPageStructuredDataInput>;
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
