import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList } from "./shared.js";

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

export interface OfferProps {
  name: string;
  description?: string;
  price?: string | number;
  priceCurrency?: string;
  availability?: string;
  seller?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<OfferStructuredDataInput>;
}

export interface OfferCatalogProps {
  name: string;
  description?: string;
  numberOfItems?: number;
  items?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<OfferCatalogStructuredDataInput>;
}

export interface OpeningHoursSpecificationProps {
  name: string;
  description?: string;
  opens?: string;
  closes?: string;
  dayOfWeek?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<OpeningHoursSpecificationStructuredDataInput>;
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

export interface SeriesProps {
  name: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<SeriesStructuredDataInput>;
}

export interface ServiceProps {
  name: string;
  description?: string;
  serviceType?: string;
  areaServed?: string;
  provider?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ServiceStructuredDataInput>;
}

export interface RepaymentSpecificationProps {
  name: string;
  description?: string;
  numberOfLoanPayments?: number;
  loanPaymentFrequency?: number;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<RepaymentSpecificationStructuredDataInput>;
}

export interface ServiceChannelProps {
  name: string;
  description?: string;
  availableLanguage?: string[];
  processingTime?: string;
  serviceUrl?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ServiceChannelStructuredDataInput>;
}

export interface ServicePeriodProps {
  name: string;
  description?: string;
  cutoffTime?: string;
  startDate?: string;
  endDate?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ServicePeriodStructuredDataInput>;
}

export interface ShippingConditionsProps {
  name: string;
  description?: string;
  shippingDestination?: string;
  shippingOrigin?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ShippingConditionsStructuredDataInput>;
}

export interface ShippingDeliveryTimeProps {
  name: string;
  description?: string;
  cutoffTime?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ShippingDeliveryTimeStructuredDataInput>;
}

export interface ShippingRateSettingsProps {
  name: string;
  description?: string;
  shippingDestination?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ShippingRateSettingsStructuredDataInput>;
}

export interface ShippingServiceProps {
  name: string;
  description?: string;
  shippingConditions?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ShippingServiceStructuredDataInput>;
}

export interface VirtualLocationProps {
  name: string;
  description?: string;
  url?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<VirtualLocationStructuredDataInput>;
}

export interface TripProps {
  name: string;
  description?: string;
  departureTime?: string;
  arrivalTime?: string;
  tripOrigin?: string;
  itinerary?: string[];
  provider?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<TripStructuredDataInput>;
}

export function Offer(props: OfferProps) {
  const base: OfferStructuredDataInput = {
    name: props.name,
    description: props.description,
    price: props.price,
    priceCurrency: props.priceCurrency,
    availability: props.availability,
    seller: ref("Organization", props.seller),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.OfferStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="offer"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Offer"}
        description={props.description}
        meta={[
          props.price !== undefined ? { label: "Price", value: String(props.price) } : null,
          props.priceCurrency ? { label: "Currency", value: props.priceCurrency } : null,
          props.availability ? { label: "Availability", value: props.availability } : null,
          props.seller ? { label: "Seller", value: props.seller } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function OfferCatalog(props: OfferCatalogProps) {
  const base: OfferCatalogStructuredDataInput = {
    name: props.name,
    description: props.description,
    numberOfItems: props.numberOfItems,
    itemListElement: props.items?.map((item) => ref("Offer", item)).filter(Boolean) as OfferCatalogStructuredDataInput["itemListElement"],
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.OfferCatalogStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="offer-catalog"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Offer catalog"}
        description={props.description}
        meta={props.numberOfItems !== undefined ? [{ label: "Items", value: String(props.numberOfItems) }] : undefined}
        body={
          <>
            {props.items?.length ? <div className="lander-semantic__offer-catalog-items">{bodyList(props.items)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function OpeningHoursSpecification(props: OpeningHoursSpecificationProps) {
  const base: OpeningHoursSpecificationStructuredDataInput = {
    name: props.name,
    description: props.description,
    opens: props.opens,
    closes: props.closes,
    dayOfWeek: props.dayOfWeek,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.OpeningHoursSpecificationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="opening-hours-specification"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Opening hours"}
        description={props.description}
        meta={[
          props.opens ? { label: "Opens", value: props.opens } : null,
          props.closes ? { label: "Closes", value: props.closes } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.dayOfWeek?.length ? <div className="lander-semantic__opening-hours-days">{bodyList(props.dayOfWeek)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
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

export function Series(props: SeriesProps) {
  const base: SeriesStructuredDataInput = {
    name: props.name,
    description: props.description,
    startDate: props.startDate,
    endDate: props.endDate,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.SeriesStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="series"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Series"}
        description={props.description}
        meta={[
          props.startDate ? { label: "Start", value: props.startDate } : null,
          props.endDate ? { label: "End", value: props.endDate } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function Service(props: ServiceProps) {
  const base: ServiceStructuredDataInput = {
    name: props.name,
    description: props.description,
    areaServed: ref("AdministrativeArea", props.areaServed),
    provider: ref("Organization", props.provider),
    serviceType: props.serviceType,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ServiceStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="service"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Service"}
        description={props.description}
        meta={[
          props.serviceType ? { label: "Type", value: props.serviceType } : null,
          props.areaServed ? { label: "Area served", value: props.areaServed } : null,
          props.provider ? { label: "Provider", value: props.provider } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function RepaymentSpecification(props: RepaymentSpecificationProps) {
  const base: RepaymentSpecificationStructuredDataInput = {
    name: props.name,
    description: props.description,
    numberOfLoanPayments: props.numberOfLoanPayments,
    loanPaymentFrequency: props.loanPaymentFrequency,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.RepaymentSpecificationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="repayment-specification"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Repayment specification"}
        description={props.description}
        meta={[
          props.numberOfLoanPayments !== undefined ? { label: "Payments", value: String(props.numberOfLoanPayments) } : null,
          props.loanPaymentFrequency !== undefined ? { label: "Frequency", value: String(props.loanPaymentFrequency) } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function ServiceChannel(props: ServiceChannelProps) {
  const base: ServiceChannelStructuredDataInput = {
    name: props.name,
    description: props.description,
    availableLanguage: props.availableLanguage,
    processingTime: props.processingTime,
    serviceUrl: props.serviceUrl,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ServiceChannelStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="service-channel"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Service channel"}
        description={props.description}
        meta={[
          props.processingTime ? { label: "Processing time", value: props.processingTime } : null,
          props.serviceUrl ? { label: "URL", value: props.serviceUrl } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={<>{props.availableLanguage?.length ? <div className="lander-semantic__service-channel-languages">{bodyList(props.availableLanguage)}</div> : null}{props.body}</>}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function ServicePeriod(props: ServicePeriodProps) {
  const base: ServicePeriodStructuredDataInput = {
    name: props.name,
    description: props.description,
    cutoffTime: props.cutoffTime,
    startDate: props.startDate,
    endDate: props.endDate,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ServicePeriodStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="service-period"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Service period"}
        description={props.description}
        meta={[
          props.cutoffTime ? { label: "Cutoff", value: props.cutoffTime } : null,
          props.startDate ? { label: "Start", value: props.startDate } : null,
          props.endDate ? { label: "End", value: props.endDate } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function ShippingConditions(props: ShippingConditionsProps) {
  const base: ShippingConditionsStructuredDataInput = {
    name: props.name,
    description: props.description,
    shippingDestination: ref("DefinedRegion", props.shippingDestination),
    shippingOrigin: ref("Place", props.shippingOrigin),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ShippingConditionsStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="shipping-conditions"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Shipping conditions"}
        description={props.description}
        meta={[
          props.shippingDestination ? { label: "Destination", value: props.shippingDestination } : null,
          props.shippingOrigin ? { label: "Origin", value: props.shippingOrigin } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function ShippingDeliveryTime(props: ShippingDeliveryTimeProps) {
  const base: ShippingDeliveryTimeStructuredDataInput = {
    name: props.name,
    description: props.description,
    cutoffTime: props.cutoffTime,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ShippingDeliveryTimeStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="shipping-delivery-time"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Shipping delivery time"}
        description={props.description}
        meta={props.cutoffTime ? [{ label: "Cutoff", value: props.cutoffTime }] : undefined}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function ShippingRateSettings(props: ShippingRateSettingsProps) {
  const base: ShippingRateSettingsStructuredDataInput = {
    name: props.name,
    description: props.description,
    shippingDestination: ref("DefinedRegion", props.shippingDestination),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ShippingRateSettingsStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="shipping-rate-settings"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Shipping rate settings"}
        description={props.description}
        meta={props.shippingDestination ? [{ label: "Destination", value: props.shippingDestination }] : undefined}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function ShippingService(props: ShippingServiceProps) {
  const base: ShippingServiceStructuredDataInput = {
    name: props.name,
    description: props.description,
    shippingConditions: ref("ShippingConditions", props.shippingConditions),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ShippingServiceStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="shipping-service"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Shipping service"}
        description={props.description}
        meta={props.shippingConditions ? [{ label: "Conditions", value: props.shippingConditions }] : undefined}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function VirtualLocation(props: VirtualLocationProps) {
  const base: VirtualLocationStructuredDataInput = {
    name: props.name,
    description: props.description,
    url: props.url,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.VirtualLocationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="virtual-location"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Virtual location"}
        description={props.description}
        meta={props.url ? [{ label: "URL", value: props.url }] : undefined}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function Trip(props: TripProps) {
  const base: TripStructuredDataInput = {
    name: props.name,
    description: props.description,
    departureTime: props.departureTime,
    arrivalTime: props.arrivalTime,
    tripOrigin: props.tripOrigin ? { "@type": "Place", name: props.tripOrigin } : undefined,
    itinerary: props.itinerary?.map((entry) => ({ "@type": "Place", name: entry })),
    provider: ref("Organization", props.provider),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.TripStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="trip"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Trip"}
        description={props.description}
        meta={[
          props.departureTime ? { label: "Departure", value: props.departureTime } : null,
          props.arrivalTime ? { label: "Arrival", value: props.arrivalTime } : null,
          props.provider ? { label: "Provider", value: props.provider } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.tripOrigin ? <p>Origin: {props.tripOrigin}</p> : null}
            {props.itinerary?.length ? bodyList(props.itinerary) : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
