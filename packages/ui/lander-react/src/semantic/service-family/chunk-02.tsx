import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList } from "../shared.js";

type OfferStructuredDataInput = React.ComponentProps<typeof structuredDataReact.OfferStructuredData>["data"];
type OfferCatalogStructuredDataInput = React.ComponentProps<typeof structuredDataReact.OfferCatalogStructuredData>["data"];
type OpeningHoursSpecificationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.OpeningHoursSpecificationStructuredData>["data"];
type ProgramMembershipStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ProgramMembershipStructuredData>["data"];
type PublicationEventStructuredDataInput = React.ComponentProps<typeof structuredDataReact.PublicationEventStructuredData>["data"];
type RepaymentSpecificationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.RepaymentSpecificationStructuredData>["data"];
type ScheduleStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ScheduleStructuredData>["data"];
type SeriesStructuredDataInput = React.ComponentProps<typeof structuredDataReact.SeriesStructuredData>["data"];
type ServiceStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ServiceStructuredData>["data"];
type ServiceChannelStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ServiceChannelStructuredData>["data"];
type ServicePeriodStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ServicePeriodStructuredData>["data"];
type ShippingConditionsStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ShippingConditionsStructuredData>["data"];
type ShippingDeliveryTimeStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ShippingDeliveryTimeStructuredData>["data"];
type ShippingRateSettingsStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ShippingRateSettingsStructuredData>["data"];
type ShippingServiceStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ShippingServiceStructuredData>["data"];
type TripStructuredDataInput = React.ComponentProps<typeof structuredDataReact.TripStructuredData>["data"];
type VirtualLocationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.VirtualLocationStructuredData>["data"];

function ref(type: string, value?: string) {
  return value ? { "@type": type, name: value } : undefined;
}

export interface ProgramMembershipProps {
  name: string;
  description?: string;
  hostingOrganization?: string;
  membershipNumber?: string;
  programName?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ProgramMembershipStructuredDataInput>;
}

export function ProgramMembership(props: ProgramMembershipProps) {
  const base: ProgramMembershipStructuredDataInput = {
    name: props.name,
    description: props.description,
    hostingOrganization: ref("Organization", props.hostingOrganization),
    membershipNumber: props.membershipNumber,
    programName: props.programName,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ProgramMembershipStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="program-membership"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Program membership"}
        description={props.description}
        meta={[
          props.hostingOrganization ? { label: "Host", value: props.hostingOrganization } : null,
          props.membershipNumber ? { label: "Membership", value: props.membershipNumber } : null,
          props.programName ? { label: "Program", value: props.programName } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface PublicationEventProps {
  name: string;
  description?: string;
  publishedBy?: string;
  startDate?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<PublicationEventStructuredDataInput>;
}

export function PublicationEvent(props: PublicationEventProps) {
  const base: PublicationEventStructuredDataInput = {
    name: props.name,
    description: props.description,
    publishedBy: ref("Organization", props.publishedBy),
    startDate: props.startDate,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.PublicationEventStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="publication-event"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Publication event"}
        description={props.description}
        meta={[
          props.publishedBy ? { label: "Publisher", value: props.publishedBy } : null,
          props.startDate ? { label: "Start", value: props.startDate } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface ScheduleProps {
  name: string;
  description?: string;
  repeatFrequency?: string;
  byDay?: string[];
  startDate?: string;
  endDate?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ScheduleStructuredDataInput>;
}

export function Schedule(props: ScheduleProps) {
  const base: ScheduleStructuredDataInput = {
    name: props.name,
    description: props.description,
    byDay: props.byDay,
    endDate: props.endDate,
    repeatFrequency: props.repeatFrequency,
    startDate: props.startDate,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ScheduleStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="schedule"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Schedule"}
        description={props.description}
        meta={[
          props.repeatFrequency ? { label: "Frequency", value: props.repeatFrequency } : null,
          props.startDate ? { label: "Start", value: props.startDate } : null,
          props.endDate ? { label: "End", value: props.endDate } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.byDay?.length ? <div className="lander-semantic__schedule-days">{bodyList(props.byDay)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
