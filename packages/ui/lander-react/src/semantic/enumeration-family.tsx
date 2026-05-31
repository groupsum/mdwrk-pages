import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, joinClassNames, renderJsonPreview } from "./shared.js";

export interface GeneratedEnumerationViewModel {
  eyebrow?: React.ReactNode;
  footer?: React.ReactNode;
  subtitle?: React.ReactNode;
}

export interface GeneratedEnumerationProps<T = string> {
  value: T;
  description?: string;
  examples?: T[];
  body?: React.ReactNode;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: T;
  viewModel?: GeneratedEnumerationViewModel;
}

export interface ActionStatusTypeProps extends GeneratedEnumerationProps<string> {}
export function ActionStatusType({
  value,
  description = "The status of an Action.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: ActionStatusTypeProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.ActionStatusTypeStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-action-status-type"
        title="ActionStatusType"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-action-status-type", className)}
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

export interface AdultOrientedEnumerationProps extends GeneratedEnumerationProps<string> {}
export function AdultOrientedEnumeration({
  value,
  description = "Enumeration of considerations that make a product relevant or potentially restricted for adults only.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: AdultOrientedEnumerationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.AdultOrientedEnumerationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-adult-oriented-enumeration"
        title="AdultOrientedEnumeration"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-adult-oriented-enumeration", className)}
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

export interface BusinessEntityTypeProps extends GeneratedEnumerationProps<string> {}
export function BusinessEntityType({
  value,
  description = "A business entity type is a conceptual entity representing the legal form, the size, the main line of business, the position in the value chain, or any combination thereof, of an organization or business person.\\n\\nCommonly used values:\\n\\n* http://purl.org/goodrelations/v1#Business\\n* http://purl.org/goodrelations/v1#Enduser\\n* http://purl.org/goodrelations/v1#PublicInstitution\\n* http://purl.org/goodrelations/v1#Reseller\n    ",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: BusinessEntityTypeProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.BusinessEntityTypeStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-business-entity-type"
        title="BusinessEntityType"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-business-entity-type", className)}
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

export interface BusinessFunctionProps extends GeneratedEnumerationProps<string> {}
export function BusinessFunction({
  value,
  description = "The business function specifies the type of activity or access (i.e., the bundle of rights) offered by the organization or business person through the offer. Typical are sell, rental or lease, maintenance or repair, manufacture / produce, recycle / dispose, engineering / construction, or installation. Proprietary specifications of access rights are also instances of this class.\\n\\nCommonly used values:\\n\\n* http://purl.org/goodrelations/v1#ConstructionInstallation\\n* http://purl.org/goodrelations/v1#Dispose\\n* http://purl.org/goodrelations/v1#LeaseOut\\n* http://purl.org/goodrelations/v1#Maintain\\n* http://purl.org/goodrelations/v1#ProvideService\\n* http://purl.org/goodrelations/v1#Repair\\n* http://purl.org/goodrelations/v1#Sell\\n* http://purl.org/goodrelations/v1#Buy\n        ",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: BusinessFunctionProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.BusinessFunctionStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-business-function"
        title="BusinessFunction"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-business-function", className)}
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

export interface CertificationStatusEnumerationProps extends GeneratedEnumerationProps<string> {}
export function CertificationStatusEnumeration({
  value,
  description = "Enumerates the different statuses of a Certification (Active and Inactive).",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: CertificationStatusEnumerationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.CertificationStatusEnumerationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-certification-status-enumeration"
        title="CertificationStatusEnumeration"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-certification-status-enumeration", className)}
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

export interface ContactPointOptionProps extends GeneratedEnumerationProps<string> {}
export function ContactPointOption({
  value,
  description = "Enumerated options related to a ContactPoint.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: ContactPointOptionProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.ContactPointOptionStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-contact-point-option"
        title="ContactPointOption"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-contact-point-option", className)}
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

export interface DayOfWeekProps extends GeneratedEnumerationProps<string> {}
export function DayOfWeek({
  value,
  description = "The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer.\n\nOriginally, URLs from [GoodRelations](http://purl.org/goodrelations/v1) were used (for [[Monday]], [[Tuesday]], [[Wednesday]], [[Thursday]], [[Friday]], [[Saturday]], [[Sunday]] plus a special entry for [[PublicHolidays]]); these have now been integrated directly into schema.org.\n      ",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: DayOfWeekProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.DayOfWeekStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-day-of-week"
        title="DayOfWeek"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-day-of-week", className)}
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

export interface DeliveryMethodProps extends GeneratedEnumerationProps<string> {}
export function DeliveryMethod({
  value,
  description = "A delivery method is a standardized procedure for transferring the product or service to the destination of fulfillment chosen by the customer. Delivery methods are characterized by the means of transportation used, and by the organization or group that is the contracting party for the sending organization or person.\\n\\nCommonly used values:\\n\\n* http://purl.org/goodrelations/v1#DeliveryModeDirectDownload\\n* http://purl.org/goodrelations/v1#DeliveryModeFreight\\n* http://purl.org/goodrelations/v1#DeliveryModeMail\\n* http://purl.org/goodrelations/v1#DeliveryModeOwnFleet\\n* http://purl.org/goodrelations/v1#DeliveryModePickUp\\n* http://purl.org/goodrelations/v1#DHL\\n* http://purl.org/goodrelations/v1#FederalExpress\\n* http://purl.org/goodrelations/v1#UPS\n        ",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: DeliveryMethodProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.DeliveryMethodStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-delivery-method"
        title="DeliveryMethod"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-delivery-method", className)}
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

export interface DigitalPlatformEnumerationProps extends GeneratedEnumerationProps<string> {}
export function DigitalPlatformEnumeration({
  value,
  description = "Enumerates some common technology platforms, for use with properties such as [[actionPlatform]]. It is not supposed to be comprehensive - when a suitable code is not enumerated here, textual or URL values can be used instead. These codes are at a fairly high level and do not deal with versioning and other nuance. Additional codes can be suggested [in github](https://github.com/schemaorg/schemaorg/issues/3057). ",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: DigitalPlatformEnumerationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.DigitalPlatformEnumerationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-digital-platform-enumeration"
        title="DigitalPlatformEnumeration"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-digital-platform-enumeration", className)}
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

export interface DrugPregnancyCategoryProps extends GeneratedEnumerationProps<string> {}
export function DrugPregnancyCategory({
  value,
  description = "Categories that represent an assessment of the risk of fetal injury due to a drug or pharmaceutical used as directed by the mother during pregnancy.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: DrugPregnancyCategoryProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.DrugPregnancyCategoryStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-drug-pregnancy-category"
        title="DrugPregnancyCategory"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-drug-pregnancy-category", className)}
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

export interface DrugPrescriptionStatusProps extends GeneratedEnumerationProps<string> {}
export function DrugPrescriptionStatus({
  value,
  description = "Indicates whether this drug is available by prescription or over-the-counter.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: DrugPrescriptionStatusProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.DrugPrescriptionStatusStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-drug-prescription-status"
        title="DrugPrescriptionStatus"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-drug-prescription-status", className)}
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

export interface EnergyEfficiencyEnumerationProps extends GeneratedEnumerationProps<string> {}
export function EnergyEfficiencyEnumeration({
  value,
  description = "Enumerates energy efficiency levels (also known as \"classes\" or \"ratings\") and certifications that are part of several international energy efficiency standards.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: EnergyEfficiencyEnumerationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.EnergyEfficiencyEnumerationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-energy-efficiency-enumeration"
        title="EnergyEfficiencyEnumeration"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-energy-efficiency-enumeration", className)}
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

export interface EUEnergyEfficiencyEnumerationProps extends GeneratedEnumerationProps<string> {}
export function EUEnergyEfficiencyEnumeration({
  value,
  description = "Enumerates the EU energy efficiency classes A-G as well as A+, A++, and A+++ as defined in EU directive 2017/1369.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: EUEnergyEfficiencyEnumerationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.EUEnergyEfficiencyEnumerationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-eu-energy-efficiency-enumeration"
        title="EUEnergyEfficiencyEnumeration"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-eu-energy-efficiency-enumeration", className)}
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

export interface EventAttendanceModeEnumerationProps extends GeneratedEnumerationProps<string> {}
export function EventAttendanceModeEnumeration({
  value,
  description = "An EventAttendanceModeEnumeration value is one of potentially several modes of organising an event, relating to whether it is online or offline.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: EventAttendanceModeEnumerationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.EventAttendanceModeEnumerationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-event-attendance-mode-enumeration"
        title="EventAttendanceModeEnumeration"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-event-attendance-mode-enumeration", className)}
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

export interface EventStatusTypeProps extends GeneratedEnumerationProps<string> {}
export function EventStatusType({
  value,
  description = "EventStatusType is an enumeration type whose instances represent several states that an Event may be in.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: EventStatusTypeProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.EventStatusTypeStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-event-status-type"
        title="EventStatusType"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-event-status-type", className)}
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

export interface FulfillmentTypeEnumerationProps extends GeneratedEnumerationProps<string> {}
export function FulfillmentTypeEnumeration({
  value,
  description = "A type of product fulfillment.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: FulfillmentTypeEnumerationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.FulfillmentTypeEnumerationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-fulfillment-type-enumeration"
        title="FulfillmentTypeEnumeration"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-fulfillment-type-enumeration", className)}
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

export interface GenderTypeProps extends GeneratedEnumerationProps<string> {}
export function GenderType({
  value,
  description = "An enumeration of genders.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: GenderTypeProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.GenderTypeStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-gender-type"
        title="GenderType"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-gender-type", className)}
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

export interface GovernmentBenefitsTypeProps extends GeneratedEnumerationProps<string> {}
export function GovernmentBenefitsType({
  value,
  description = "GovernmentBenefitsType enumerates several kinds of government benefits to support the COVID-19 situation. Note that this structure may not capture all benefits offered.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: GovernmentBenefitsTypeProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.GovernmentBenefitsTypeStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-government-benefits-type"
        title="GovernmentBenefitsType"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-government-benefits-type", className)}
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

export interface IPTCDigitalSourceEnumerationProps extends GeneratedEnumerationProps<string> {}
export function IPTCDigitalSourceEnumeration({
  value,
  description = "<a href=\"https://www.iptc.org/\">IPTC</a> \"Digital Source\" codes for use with the [[digitalSourceType]] property, providing information about the source for a digital media object.\nIn general these codes are not declared here to be mutually exclusive, although some combinations would be contradictory if applied simultaneously, or might be considered mutually incompatible by upstream maintainers of the definitions. See the IPTC <a href=\"https://www.iptc.org/std/photometadata/documentation/userguide/\">documentation</a>\n for <a href=\"https://cv.iptc.org/newscodes/digitalsourcetype/\">detailed definitions</a> of all terms.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: IPTCDigitalSourceEnumerationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.IPTCDigitalSourceEnumerationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-iptc-digital-source-enumeration"
        title="IPTCDigitalSourceEnumeration"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-iptc-digital-source-enumeration", className)}
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

export interface ItemAvailabilityProps extends GeneratedEnumerationProps<string> {}
export function ItemAvailability({
  value,
  description = "A list of possible product availability options.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: ItemAvailabilityProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.ItemAvailabilityStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-item-availability"
        title="ItemAvailability"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-item-availability", className)}
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

export interface ItemListOrderTypeProps extends GeneratedEnumerationProps<string> {}
export function ItemListOrderType({
  value,
  description = "Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: ItemListOrderTypeProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.ItemListOrderTypeStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-item-list-order-type"
        title="ItemListOrderType"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-item-list-order-type", className)}
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

export interface MapCategoryTypeProps extends GeneratedEnumerationProps<string> {}
export function MapCategoryType({
  value,
  description = "An enumeration of several kinds of Map.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: MapCategoryTypeProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.MapCategoryTypeStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-map-category-type"
        title="MapCategoryType"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-map-category-type", className)}
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

export interface MeasurementMethodEnumProps extends GeneratedEnumerationProps<string> {}
export function MeasurementMethodEnum({
  value,
  description = "Enumeration(s) for use with [[measurementMethod]].",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: MeasurementMethodEnumProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.MeasurementMethodEnumStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-measurement-method-enum"
        title="MeasurementMethodEnum"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-measurement-method-enum", className)}
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

export interface MeasurementTypeEnumerationProps extends GeneratedEnumerationProps<string> {}
export function MeasurementTypeEnumeration({
  value,
  description = "Enumeration of common measurement types (or dimensions), for example \"chest\" for a person, \"inseam\" for pants, \"gauge\" for screws, or \"wheel\" for bicycles.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: MeasurementTypeEnumerationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.MeasurementTypeEnumerationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-measurement-type-enumeration"
        title="MeasurementTypeEnumeration"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-measurement-type-enumeration", className)}
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

export interface MediaEnumerationProps extends GeneratedEnumerationProps<string> {}
export function MediaEnumeration({
  value,
  description = "MediaEnumeration enumerations are lists of codes, labels etc. useful for describing media objects. They may be reflections of externally developed lists, or created at schema.org, or a combination.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: MediaEnumerationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.MediaEnumerationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-media-enumeration"
        title="MediaEnumeration"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-media-enumeration", className)}
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

export interface MedicalAudienceTypeProps extends GeneratedEnumerationProps<string> {}
export function MedicalAudienceType({
  value,
  description = "Target audiences types for medical web pages. Enumerated type.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: MedicalAudienceTypeProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.MedicalAudienceTypeStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-medical-audience-type"
        title="MedicalAudienceType"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-medical-audience-type", className)}
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

export interface MedicalEnumerationProps extends GeneratedEnumerationProps<string> {}
export function MedicalEnumeration({
  value,
  description = "Enumerations related to health and the practice of medicine: A concept that is used to attribute a quality to another concept, as a qualifier, a collection of items or a listing of all of the elements of a set in medicine practice.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: MedicalEnumerationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.MedicalEnumerationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-medical-enumeration"
        title="MedicalEnumeration"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-medical-enumeration", className)}
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

export interface MedicalEvidenceLevelProps extends GeneratedEnumerationProps<string> {}
export function MedicalEvidenceLevel({
  value,
  description = "Level of evidence for a medical guideline. Enumerated type.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: MedicalEvidenceLevelProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.MedicalEvidenceLevelStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-medical-evidence-level"
        title="MedicalEvidenceLevel"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-medical-evidence-level", className)}
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

export interface MedicalProcedureTypeProps extends GeneratedEnumerationProps<string> {}
export function MedicalProcedureType({
  value,
  description = "An enumeration that describes different types of medical procedures.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: MedicalProcedureTypeProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.MedicalProcedureTypeStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-medical-procedure-type"
        title="MedicalProcedureType"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-medical-procedure-type", className)}
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

export interface MedicalSpecialtyProps extends GeneratedEnumerationProps<string> {}
export function MedicalSpecialty({
  value,
  description = "Any specific branch of medical science or practice. Medical specialities include clinical specialties that pertain to particular organ systems and their respective disease states, as well as allied health specialties. Enumerated type.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: MedicalSpecialtyProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.MedicalSpecialtyStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-medical-specialty"
        title="MedicalSpecialty"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-medical-specialty", className)}
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

export interface MedicalStudyStatusProps extends GeneratedEnumerationProps<string> {}
export function MedicalStudyStatus({
  value,
  description = "The status of a medical study. Enumerated type.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: MedicalStudyStatusProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.MedicalStudyStatusStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-medical-study-status"
        title="MedicalStudyStatus"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-medical-study-status", className)}
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

export interface MedicineSystemProps extends GeneratedEnumerationProps<string> {}
export function MedicineSystem({
  value,
  description = "Systems of medical practice.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: MedicineSystemProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.MedicineSystemStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-medicine-system"
        title="MedicineSystem"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-medicine-system", className)}
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

export interface MerchantReturnEnumerationProps extends GeneratedEnumerationProps<string> {}
export function MerchantReturnEnumeration({
  value,
  description = "Enumerates several kinds of product return policies.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: MerchantReturnEnumerationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.MerchantReturnEnumerationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-merchant-return-enumeration"
        title="MerchantReturnEnumeration"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-merchant-return-enumeration", className)}
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

export interface MusicAlbumProductionTypeProps extends GeneratedEnumerationProps<string> {}
export function MusicAlbumProductionType({
  value,
  description = "Classification of the album by its type of content: soundtrack, live album, studio album, etc.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: MusicAlbumProductionTypeProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.MusicAlbumProductionTypeStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-music-album-production-type"
        title="MusicAlbumProductionType"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-music-album-production-type", className)}
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

export interface MusicAlbumReleaseTypeProps extends GeneratedEnumerationProps<string> {}
export function MusicAlbumReleaseType({
  value,
  description = "The kind of release which this album is: single, EP or album.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: MusicAlbumReleaseTypeProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.MusicAlbumReleaseTypeStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-music-album-release-type"
        title="MusicAlbumReleaseType"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-music-album-release-type", className)}
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

export interface MusicReleaseFormatTypeProps extends GeneratedEnumerationProps<string> {}
export function MusicReleaseFormatType({
  value,
  description = "Format of this release (the type of recording media used, i.e. compact disc, digital media, LP, etc.).",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: MusicReleaseFormatTypeProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.MusicReleaseFormatTypeStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-music-release-format-type"
        title="MusicReleaseFormatType"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-music-release-format-type", className)}
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

export interface NonprofitTypeProps extends GeneratedEnumerationProps<string> {}
export function NonprofitType({
  value,
  description = "NonprofitType enumerates several kinds of official non-profit types of which a non-profit organization can be.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: NonprofitTypeProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.NonprofitTypeStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-nonprofit-type"
        title="NonprofitType"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-nonprofit-type", className)}
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

export interface OfferItemConditionProps extends GeneratedEnumerationProps<string> {}
export function OfferItemCondition({
  value,
  description = "A list of possible conditions for the item.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: OfferItemConditionProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.OfferItemConditionStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-offer-item-condition"
        title="OfferItemCondition"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-offer-item-condition", className)}
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

export interface PaymentMethodTypeProps extends GeneratedEnumerationProps<string> {}
export function PaymentMethodType({
  value,
  description = "The type of payment method, only for generic payment types, specific forms of payments, like card payment should be expressed using subclasses of PaymentMethod.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: PaymentMethodTypeProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.PaymentMethodTypeStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-payment-method-type"
        title="PaymentMethodType"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-payment-method-type", className)}
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

export interface PhysicalActivityCategoryProps extends GeneratedEnumerationProps<string> {}
export function PhysicalActivityCategory({
  value,
  description = "Categories of physical activity, organized by physiologic classification.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: PhysicalActivityCategoryProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.PhysicalActivityCategoryStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-physical-activity-category"
        title="PhysicalActivityCategory"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-physical-activity-category", className)}
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

export interface PhysicalExamProps extends GeneratedEnumerationProps<string> {}
export function PhysicalExam({
  value,
  description = "A type of physical examination of a patient performed by a physician. ",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: PhysicalExamProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.PhysicalExamStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-physical-exam"
        title="PhysicalExam"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-physical-exam", className)}
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

export interface PriceComponentTypeEnumerationProps extends GeneratedEnumerationProps<string> {}
export function PriceComponentTypeEnumeration({
  value,
  description = "Enumerates different price components that together make up the total price for an offered product.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: PriceComponentTypeEnumerationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.PriceComponentTypeEnumerationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-price-component-type-enumeration"
        title="PriceComponentTypeEnumeration"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-price-component-type-enumeration", className)}
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

export interface PriceTypeEnumerationProps extends GeneratedEnumerationProps<string> {}
export function PriceTypeEnumeration({
  value,
  description = "Enumerates different price types, for example list price, invoice price, and sale price.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: PriceTypeEnumerationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.PriceTypeEnumerationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-price-type-enumeration"
        title="PriceTypeEnumeration"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-price-type-enumeration", className)}
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

export interface QualitativeValueProps extends GeneratedEnumerationProps<string> {}
export function QualitativeValue({
  value,
  description = "A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: QualitativeValueProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.QualitativeValueStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-qualitative-value"
        title="QualitativeValue"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-qualitative-value", className)}
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

export interface RefundTypeEnumerationProps extends GeneratedEnumerationProps<string> {}
export function RefundTypeEnumeration({
  value,
  description = "Enumerates several kinds of product return refund types.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: RefundTypeEnumerationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.RefundTypeEnumerationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-refund-type-enumeration"
        title="RefundTypeEnumeration"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-refund-type-enumeration", className)}
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

export interface RestrictedDietProps extends GeneratedEnumerationProps<string> {}
export function RestrictedDiet({
  value,
  description = "A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons. ",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: RestrictedDietProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.RestrictedDietStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-restricted-diet"
        title="RestrictedDiet"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-restricted-diet", className)}
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

export interface ReturnFeesEnumerationProps extends GeneratedEnumerationProps<string> {}
export function ReturnFeesEnumeration({
  value,
  description = "Enumerates several kinds of policies for product return fees.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: ReturnFeesEnumerationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.ReturnFeesEnumerationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-return-fees-enumeration"
        title="ReturnFeesEnumeration"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-return-fees-enumeration", className)}
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

export interface ReturnLabelSourceEnumerationProps extends GeneratedEnumerationProps<string> {}
export function ReturnLabelSourceEnumeration({
  value,
  description = "Enumerates several types of return labels for product returns.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: ReturnLabelSourceEnumerationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.ReturnLabelSourceEnumerationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-return-label-source-enumeration"
        title="ReturnLabelSourceEnumeration"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-return-label-source-enumeration", className)}
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

export interface ReturnMethodEnumerationProps extends GeneratedEnumerationProps<string> {}
export function ReturnMethodEnumeration({
  value,
  description = "Enumerates several types of product return methods.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: ReturnMethodEnumerationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.ReturnMethodEnumerationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-return-method-enumeration"
        title="ReturnMethodEnumeration"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-return-method-enumeration", className)}
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

export interface SizeSpecificationProps extends GeneratedEnumerationProps<string> {}
export function SizeSpecification({
  value,
  description = "Size related properties of a product, typically a size code ([[name]]) and optionally a [[sizeSystem]], [[sizeGroup]], and product measurements ([[hasMeasurement]]). In addition, the intended audience can be defined through [[suggestedAge]], [[suggestedGender]], and suggested body measurements ([[suggestedMeasurement]]).",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: SizeSpecificationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.SizeSpecificationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-size-specification"
        title="SizeSpecification"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-size-specification", className)}
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

export interface SpecialtyProps extends GeneratedEnumerationProps<string> {}
export function Specialty({
  value,
  description = "Any branch of a field in which people typically develop specific expertise, usually after significant study, time, and effort.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: SpecialtyProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.SpecialtyStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-specialty"
        title="Specialty"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-specialty", className)}
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

export interface StatusEnumerationProps extends GeneratedEnumerationProps<string> {}
export function StatusEnumeration({
  value,
  description = "Lists or enumerations dealing with status types.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: StatusEnumerationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.StatusEnumerationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-status-enumeration"
        title="StatusEnumeration"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-status-enumeration", className)}
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

export interface TierBenefitEnumerationProps extends GeneratedEnumerationProps<string> {}
export function TierBenefitEnumeration({
  value,
  description = "An enumeration of possible benefits as part of a loyalty (members) program.",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: TierBenefitEnumerationProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.TierBenefitEnumerationStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-tier-benefit-enumeration"
        title="TierBenefitEnumeration"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-tier-benefit-enumeration", className)}
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

export interface WarrantyScopeProps extends GeneratedEnumerationProps<string> {}
export function WarrantyScope({
  value,
  description = "A range of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.\\n\\nCommonly used values:\\n\\n* http://purl.org/goodrelations/v1#Labor-BringIn\\n* http://purl.org/goodrelations/v1#PartsAndLabor-BringIn\\n* http://purl.org/goodrelations/v1#PartsAndLabor-PickUp\n      ",
  examples,
  body,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  viewModel,
}: WarrantyScopeProps) {
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.WarrantyScopeStructuredData data={(structuredDataOverrides ?? value) as never} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schema-enumeration-warranty-scope"
        title="WarrantyScope"
        eyebrow={viewModel?.eyebrow ?? "Enumeration"}
        subtitle={viewModel?.subtitle}
        description={description}
        className={joinClassNames("lander-semantic--schema-enumeration-warranty-scope", className)}
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


