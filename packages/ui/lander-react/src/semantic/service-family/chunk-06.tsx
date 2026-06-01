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
