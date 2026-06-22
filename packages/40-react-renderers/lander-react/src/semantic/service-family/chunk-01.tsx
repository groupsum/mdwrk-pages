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
