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

export interface DataFeedProps {
  name: string;
  description?: string;
  dataFeedElement?: Array<string | NamedRef>;
  dateModified?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<DataFeedStructuredDataInput>;
}

export function DataFeed(props: DataFeedProps) {
  const base: DataFeedStructuredDataInput = {
    name: props.name,
    description: props.description,
    dataFeedElement: props.dataFeedElement?.map((entry) => thingReference(typeof entry === "string" ? entry : entry.name)),
    dateModified: props.dateModified,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.DataFeedStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="data-feed"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Data feed"}
        description={props.description}
        meta={props.dateModified ? [{ label: "Updated", value: props.dateModified }] : undefined}
        body={<>{props.dataFeedElement?.length ? <div className="lander-semantic__data-feed-items">{bodyList(props.dataFeedElement.map((entry) => typeof entry === "string" ? entry : entry.name))}</div> : null}{props.body}</>}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface DefinedRegionProps {
  name?: string;
  addressCountry?: string;
  addressRegion?: string;
  postalCode?: string;
  postalCodePrefix?: string;
  postalCodeRange?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<DefinedRegionStructuredDataInput>;
}

export function DefinedRegion(props: DefinedRegionProps) {
  const base: DefinedRegionStructuredDataInput = {
    name: props.name,
    addressCountry: props.addressCountry,
    addressRegion: props.addressRegion,
    postalCode: props.postalCode,
    postalCodePrefix: props.postalCodePrefix,
    postalCodeRange: props.postalCodeRange,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.DefinedRegionStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="defined-region"
        title={props.name ?? "Defined region"}
        eyebrow={props.viewModel?.eyebrow ?? "Defined region"}
        meta={[
          props.addressCountry ? { label: "Country", value: props.addressCountry } : null,
          props.addressRegion ? { label: "Region", value: props.addressRegion } : null,
          props.postalCode ? { label: "Postal code", value: props.postalCode } : null,
          props.postalCodePrefix ? { label: "Postal prefix", value: props.postalCodePrefix } : null,
          props.postalCodeRange ? { label: "Postal range", value: props.postalCodeRange } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export interface DefinedTermProps {
  name: string;
  description?: string;
  termCode?: string;
  about?: string;
  inDefinedTermSet?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<DefinedTermStructuredDataInput>;
}

export function DefinedTerm(props: DefinedTermProps) {
  const base: DefinedTermStructuredDataInput = {
    name: props.name,
    description: props.description,
    termCode: props.termCode,
    about: thingReference(props.about),
    inDefinedTermSet: thingReference(props.inDefinedTermSet),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.DefinedTermStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="defined-term"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Defined term"}
        description={props.description}
        meta={[
          props.termCode ? { label: "Term code", value: props.termCode } : null,
          props.about ? { label: "About", value: props.about } : null,
          props.inDefinedTermSet ? { label: "Term set", value: props.inDefinedTermSet } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
