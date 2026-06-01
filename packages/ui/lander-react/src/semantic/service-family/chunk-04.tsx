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
