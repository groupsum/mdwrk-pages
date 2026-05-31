import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, joinClassNames, renderJsonPreview } from "./shared.js";

export interface GeneratedTypeViewModel {
  eyebrow?: React.ReactNode;
  footer?: React.ReactNode;
  subtitle?: React.ReactNode;
}

export interface GeneratedTypeProps<T = Record<string, unknown>> {
  value: T;
  description?: string;
  examples?: T[];
  body?: React.ReactNode;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: T;
  viewModel?: GeneratedTypeViewModel;
}

export interface AnatomicalStructureProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function AnatomicalStructure({
  value,
  description = "Any part of the human body, typically a component of an anatomical system. Organs, tissues, and cells are all anatomical structures.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: AnatomicalStructureProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.AnatomicalStructureStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="anatomical-structure"
        title="AnatomicalStructure"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--anatomical-structure", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface AnatomicalSystemProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function AnatomicalSystem({
  value,
  description = "An anatomical system is a group of anatomical structures that work together to perform a certain task. Anatomical systems, such as organ systems, are one organizing principle of anatomy, and can include circulatory, digestive, endocrine, integumentary, immune, lymphatic, muscular, nervous, reproductive, respiratory, skeletal, urinary, vestibular, and other systems.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: AnatomicalSystemProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.AnatomicalSystemStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="anatomical-system"
        title="AnatomicalSystem"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--anatomical-system", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface BioChemEntityProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function BioChemEntity({
  value,
  description = "Any biological, chemical, or biochemical thing. For example: a protein; a gene; a chemical; a synthetic chemical.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: BioChemEntityProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.BioChemEntityStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="bio-chem-entity"
        title="BioChemEntity"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--bio-chem-entity", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface CmnsClsClassifierProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function CmnsClsClassifier({
  value,
  description = "",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: CmnsClsClassifierProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.CmnsClsClassifierStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="cmns-cls-classifier"
        title="cmns-cls_Classifier"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--cmns-cls-classifier", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface CmnsColCollectionProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function CmnsColCollection({
  value,
  description = "",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: CmnsColCollectionProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.CmnsColCollectionStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="cmns-col-collection"
        title="cmns-col_Collection"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--cmns-col-collection", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface CmnsGeGeopoliticalEntityProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function CmnsGeGeopoliticalEntity({
  value,
  description = "",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: CmnsGeGeopoliticalEntityProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.CmnsGeGeopoliticalEntityStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="cmns-ge-geopolitical-entity"
        title="cmns-ge_GeopoliticalEntity"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--cmns-ge-geopolitical-entity", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface DDxElementProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function DDxElement({
  value,
  description = "An alternative, closely-related condition typically considered later in the differential diagnosis process along with the signs that are used to distinguish it.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: DDxElementProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.DDxElementStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="d-dx-element"
        title="DDxElement"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--d-dx-element", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface DietProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function Diet({
  value,
  description = "A strategy of regulating the intake of food to achieve or maintain a specific health-related goal.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: DietProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.DietStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="diet"
        title="Diet"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--diet", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface DoseScheduleProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function DoseSchedule({
  value,
  description = "A specific dosing schedule for a drug or supplement.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: DoseScheduleProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.DoseScheduleStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="dose-schedule"
        title="DoseSchedule"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--dose-schedule", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface DrugProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function Drug({
  value,
  description = "A chemical or biologic substance, used as a medical therapy, that has a physiological effect on an organism. Here the term drug is used interchangeably with the term medicine although clinical knowledge makes a clear difference between them.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: DrugProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.DrugStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="drug"
        title="Drug"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--drug", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface DrugClassProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function DrugClass({
  value,
  description = "A class of medical drugs, e.g., statins. Classes can represent general pharmacological class, common mechanisms of action, common physiological effects, etc.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: DrugClassProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.DrugClassStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="drug-class"
        title="DrugClass"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--drug-class", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface DrugLegalStatusProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function DrugLegalStatus({
  value,
  description = "The legal availability status of a medical drug.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: DrugLegalStatusProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.DrugLegalStatusStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="drug-legal-status"
        title="DrugLegalStatus"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--drug-legal-status", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface DrugStrengthProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function DrugStrength({
  value,
  description = "A specific strength in which a medical drug is available in a specific country.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: DrugStrengthProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.DrugStrengthStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="drug-strength"
        title="DrugStrength"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--drug-strength", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface FiboFndAgrCtrMutualContractualAgreementProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function FiboFndAgrCtrMutualContractualAgreement({
  value,
  description = "",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: FiboFndAgrCtrMutualContractualAgreementProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.FiboFndAgrCtrMutualContractualAgreementStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="fibo-fnd-agr-ctr-mutual-contractual-agreement"
        title="fibo-fnd-agr-ctr_MutualContractualAgreement"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--fibo-fnd-agr-ctr-mutual-contractual-agreement", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface FiboFndArrDocCertificateProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function FiboFndArrDocCertificate({
  value,
  description = "",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: FiboFndArrDocCertificateProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.FiboFndArrDocCertificateStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="fibo-fnd-arr-doc-certificate"
        title="fibo-fnd-arr-doc_Certificate"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--fibo-fnd-arr-doc-certificate", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface PaymentCardProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function PaymentCard({
  value,
  description = "A payment method using a credit, debit, store or other card to associate the payment with an account.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: PaymentCardProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.PaymentCardStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="payment-card"
        title="PaymentCard"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--payment-card", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface PaymentMethodProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function PaymentMethod({
  value,
  description = "A payment method is a standardized procedure for transferring the monetary amount for a purchase. Payment methods are characterized by the legal and technical structures used, and by the organization or group carrying out the transaction. The following legacy values should be accepted: \\n\\n* http://purl.org/goodrelations/v1#ByBankTransferInAdvance\\n* http://purl.org/goodrelations/v1#ByInvoice\\n* http://purl.org/goodrelations/v1#Cash\\n* http://purl.org/goodrelations/v1#CheckInAdvance\\n* http://purl.org/goodrelations/v1#COD\\n* http://purl.org/goodrelations/v1#DirectDebit\\n* http://purl.org/goodrelations/v1#GoogleCheckout\\n* http://purl.org/goodrelations/v1#PayPal\\n* http://purl.org/goodrelations/v1#PaySwarm\\n\\nStructured values, or [UNCE payment means](https://vocabulary.uncefact.org/PaymentMeans) are recommended or for newer annotations.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: PaymentMethodProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.PaymentMethodStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="payment-method"
        title="PaymentMethod"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--payment-method", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface PeopleAudienceProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function PeopleAudience({
  value,
  description = "A set of characteristics belonging to people, e.g. who compose an item's target audience.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: PeopleAudienceProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.PeopleAudienceStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="people-audience"
        title="PeopleAudience"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--people-audience", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface PerformingGroupProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function PerformingGroup({
  value,
  description = "A performance group, such as a band, an orchestra, or a circus.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: PerformingGroupProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.PerformingGroupStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="performing-group"
        title="PerformingGroup"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--performing-group", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface PersonProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function Person({
  value,
  description = "A person (alive, dead, undead, or fictional).",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: PersonProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.PersonStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="person"
        title="Person"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--person", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface PhotographProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function Photograph({
  value,
  description = "A photograph.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: PhotographProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.PhotographStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="photograph"
        title="Photograph"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--photograph", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface PlaceProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function Place({
  value,
  description = "Entities that have a somewhat fixed, physical extension.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: PlaceProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.PlaceStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="place"
        title="Place"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--place", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface PostalAddressProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function PostalAddress({
  value,
  description = "The mailing address.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: PostalAddressProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.PostalAddressStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="postal-address"
        title="PostalAddress"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--postal-address", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface PostalCodeRangeSpecificationProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function PostalCodeRangeSpecification({
  value,
  description = "Indicates a range of postal codes, usually defined as the set of valid codes between [[postalCodeBegin]] and [[postalCodeEnd]], inclusively.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: PostalCodeRangeSpecificationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.PostalCodeRangeSpecificationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="postal-code-range-specification"
        title="PostalCodeRangeSpecification"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--postal-code-range-specification", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}

export interface PriceSpecificationProps extends GeneratedTypeProps<Record<string, unknown>> {}
export function PriceSpecification({
  value,
  description = "A structured value representing a price or price range. Typically, only the subclasses of this type are used for markup. It is recommended to use [[MonetaryAmount]] to describe independent amounts of money such as a salary, credit card limits, etc.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: PriceSpecificationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.PriceSpecificationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="price-specification"
        title="PriceSpecification"
        eyebrow={viewModel?.eyebrow ?? "Type"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--price-specification", className)}
        meta={[
          { label: "Value", value: renderJsonPreview(value) },
          ...(examples?.length ? [{ label: "Examples", value: renderJsonPreview(examples) }] : []),
        ]}
        body={body}
        footer={viewModel?.footer}
      />
    </>
  );
}


