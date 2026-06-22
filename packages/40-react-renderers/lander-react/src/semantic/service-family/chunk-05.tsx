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
