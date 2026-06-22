import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList, thingReference } from "../shared.js";

type DataCatalogStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DataCatalogStructuredData>["data"];
type DataDownloadStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DataDownloadStructuredData>["data"];
type DataFeedStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DataFeedStructuredData>["data"];
type DataFeedItemStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DataFeedItemStructuredData>["data"];
type DefinedRegionStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DefinedRegionStructuredData>["data"];
type DefinedTermStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DefinedTermStructuredData>["data"];
type DefinedTermSetStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DefinedTermSetStructuredData>["data"];
type DeliveryChargeSpecificationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DeliveryChargeSpecificationStructuredData>["data"];
type DemandStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DemandStructuredData>["data"];
type DurationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.DurationStructuredData>["data"];
type EnergyStructuredDataInput = React.ComponentProps<typeof structuredDataReact.EnergyStructuredData>["data"];
type EnergyConsumptionDetailsStructuredDataInput = React.ComponentProps<typeof structuredDataReact.EnergyConsumptionDetailsStructuredData>["data"];
type MassStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MassStructuredData>["data"];
type HealthInsurancePlanStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HealthInsurancePlanStructuredData>["data"];
type HealthPlanCostSharingSpecificationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HealthPlanCostSharingSpecificationStructuredData>["data"];
type HealthPlanFormularyStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HealthPlanFormularyStructuredData>["data"];
type HealthPlanNetworkStructuredDataInput = React.ComponentProps<typeof structuredDataReact.HealthPlanNetworkStructuredData>["data"];
type LocationFeatureSpecificationStructuredDataInput = React.ComponentProps<typeof structuredDataReact.LocationFeatureSpecificationStructuredData>["data"];
type StatisticalVariableStructuredDataInput = React.ComponentProps<typeof structuredDataReact.StatisticalVariableStructuredData>["data"];

type NamedRef = { name: string; url?: string };

function ref(type: string, value?: NamedRef | string) {
  if (!value) return undefined;
  if (typeof value === "string") return { "@type": type, name: value };
  return { "@type": type, name: value.name, url: value.url };
}

export interface DemandProps {
  name?: string;
  availability?: string;
  itemOffered?: string;
  seller?: string;
  priceSpecification?: string;
  eligibleRegion?: string[];
  ineligibleRegion?: string[];
  acceptedPaymentMethod?: string[];
  validFrom?: string;
  validThrough?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<DemandStructuredDataInput>;
}

export function Demand(props: DemandProps) {
  const base: DemandStructuredDataInput = {
    name: props.name,
    availability: props.availability,
    itemOffered: ref("Product", props.itemOffered),
    seller: ref("Organization", props.seller),
    priceSpecification: thingReference(props.priceSpecification),
    eligibleRegion: props.eligibleRegion?.map((entry) => ref("DefinedRegion", entry)),
    ineligibleRegion: props.ineligibleRegion?.map((entry) => ref("DefinedRegion", entry)),
    acceptedPaymentMethod: props.acceptedPaymentMethod,
    validFrom: props.validFrom,
    validThrough: props.validThrough,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.DemandStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="demand"
        title={props.name ?? "Demand"}
        eyebrow={props.viewModel?.eyebrow ?? "Demand"}
        meta={[
          props.availability ? { label: "Availability", value: props.availability } : null,
          props.itemOffered ? { label: "Item offered", value: props.itemOffered } : null,
          props.seller ? { label: "Seller", value: props.seller } : null,
          props.validFrom ? { label: "Valid from", value: props.validFrom } : null,
          props.validThrough ? { label: "Valid through", value: props.validThrough } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.acceptedPaymentMethod?.length ? <div className="lander-semantic__demand-payments">{bodyList(props.acceptedPaymentMethod)}</div> : null}
            {props.eligibleRegion?.length ? <div className="lander-semantic__demand-eligible">{bodyList(props.eligibleRegion)}</div> : null}
            {props.ineligibleRegion?.length ? <div className="lander-semantic__demand-ineligible">{bodyList(props.ineligibleRegion)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface DurationProps {
  id?: string;
  label?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<DurationStructuredDataInput>;
}

export function Duration(props: DurationProps) {
  const base: DurationStructuredDataInput = { id: props.id };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.DurationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="duration"
        title={props.label ?? props.id ?? "Duration"}
        eyebrow={props.viewModel?.eyebrow ?? "Duration"}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface EnergyProps {
  id?: string;
  label?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<EnergyStructuredDataInput>;
}

export function Energy(props: EnergyProps) {
  const base: EnergyStructuredDataInput = { id: props.id };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.EnergyStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="energy"
        title={props.label ?? props.id ?? "Energy"}
        eyebrow={props.viewModel?.eyebrow ?? "Energy"}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
