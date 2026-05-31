import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList, thingReference } from "./shared.js";

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

export interface DataCatalogProps {
  name: string;
  description?: string;
  dataset?: Array<string | NamedRef>;
  measurementMethod?: string;
  measurementTechnique?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<DataCatalogStructuredDataInput>;
}

export interface DataDownloadProps {
  name: string;
  description?: string;
  contentUrl?: string;
  encodingFormat?: string;
  measurementMethod?: string;
  measurementTechnique?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<DataDownloadStructuredDataInput>;
}

export interface DataFeedItemProps {
  name?: string;
  item?: string;
  dateCreated?: string;
  dateModified?: string;
  dateDeleted?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<DataFeedItemStructuredDataInput>;
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

export interface DefinedTermSetProps {
  name: string;
  description?: string;
  about?: string;
  hasDefinedTerm?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<DefinedTermSetStructuredDataInput>;
}

export interface LocationFeatureSpecificationProps {
  name: string;
  description?: string;
  propertyID?: string;
  value?: string | number | boolean;
  unitText?: string;
  hoursAvailable?: string[];
  validFrom?: string;
  validThrough?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<LocationFeatureSpecificationStructuredDataInput>;
}

export interface DeliveryChargeSpecificationProps {
  name?: string;
  price?: number | string;
  priceCurrency?: string;
  appliesToDeliveryMethod?: string[];
  areaServed?: string[];
  eligibleRegion?: string[];
  ineligibleRegion?: string[];
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<DeliveryChargeSpecificationStructuredDataInput>;
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

export interface DurationProps {
  id?: string;
  label?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<DurationStructuredDataInput>;
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

export interface MassProps {
  id?: string;
  label?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MassStructuredDataInput>;
}

export interface EnergyConsumptionDetailsProps {
  name: string;
  description?: string;
  energyEfficiencyScaleMax?: string;
  energyEfficiencyScaleMin?: string;
  hasEnergyEfficiencyCategory?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<EnergyConsumptionDetailsStructuredDataInput>;
}

export interface HealthPlanCostSharingSpecificationProps {
  name?: string;
  description?: string;
  healthPlanCoinsuranceOption?: string;
  healthPlanCoinsuranceRate?: number | string;
  healthPlanCopay?: string;
  healthPlanCopayOption?: string;
  healthPlanPharmacyCategory?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<HealthPlanCostSharingSpecificationStructuredDataInput>;
}

export interface HealthPlanFormularyProps {
  name?: string;
  description?: string;
  healthPlanCostSharing?: string | NamedRef | boolean;
  healthPlanDrugTier?: string;
  offersPrescriptionByMail?: boolean;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<HealthPlanFormularyStructuredDataInput>;
}

export interface HealthPlanNetworkProps {
  name?: string;
  description?: string;
  healthPlanCostSharing?: string | NamedRef | boolean;
  healthPlanNetworkId?: string;
  healthPlanNetworkTier?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<HealthPlanNetworkStructuredDataInput>;
}

export interface HealthInsurancePlanProps {
  name?: string;
  description?: string;
  benefitsSummaryUrl?: string;
  contactPoint?: string | NamedRef;
  healthPlanDrugOption?: string;
  healthPlanDrugTier?: string;
  healthPlanId?: string;
  healthPlanMarketingUrl?: string;
  includesHealthPlanFormulary?: string | NamedRef;
  includesHealthPlanNetwork?: string | NamedRef;
  usesHealthPlanIdStandard?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<HealthInsurancePlanStructuredDataInput>;
}

export interface StatisticalVariableProps {
  name: string;
  description?: string;
  measurementMethod?: string;
  measurementTechnique?: string;
  populationType?: string;
  body?: React.ReactNode;
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<StatisticalVariableStructuredDataInput>;
}

export function DataCatalog(props: DataCatalogProps) {
  const base: DataCatalogStructuredDataInput = {
    name: props.name,
    description: props.description,
    dataset: props.dataset?.map((entry) => ref("Dataset", entry)),
    measurementMethod: props.measurementMethod,
    measurementTechnique: props.measurementTechnique,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.DataCatalogStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="data-catalog"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Data catalog"}
        description={props.description}
        meta={[
          props.measurementMethod ? { label: "Method", value: props.measurementMethod } : null,
          props.measurementTechnique ? { label: "Technique", value: props.measurementTechnique } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={<>{props.dataset?.length ? <div className="lander-semantic__data-catalog-datasets">{bodyList(props.dataset.map((entry) => typeof entry === "string" ? entry : entry.name))}</div> : null}{props.body}</>}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function DataDownload(props: DataDownloadProps) {
  const base: DataDownloadStructuredDataInput = {
    name: props.name,
    description: props.description,
    contentUrl: props.contentUrl,
    encodingFormat: props.encodingFormat,
    measurementMethod: props.measurementMethod,
    measurementTechnique: props.measurementTechnique,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.DataDownloadStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="data-download"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Data download"}
        description={props.description}
        meta={[
          props.contentUrl ? { label: "Content URL", value: props.contentUrl } : null,
          props.encodingFormat ? { label: "Format", value: props.encodingFormat } : null,
          props.measurementMethod ? { label: "Method", value: props.measurementMethod } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={<>{props.measurementTechnique ? <p>{props.measurementTechnique}</p> : null}{props.body}</>}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function DataFeedItem(props: DataFeedItemProps) {
  const base: DataFeedItemStructuredDataInput = {
    name: props.name,
    item: thingReference(props.item),
    dateCreated: props.dateCreated,
    dateModified: props.dateModified,
    dateDeleted: props.dateDeleted,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.DataFeedItemStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="data-feed-item"
        title={props.name ?? "Data feed item"}
        eyebrow={props.viewModel?.eyebrow ?? "Feed item"}
        meta={[
          props.item ? { label: "Item", value: props.item } : null,
          props.dateCreated ? { label: "Created", value: props.dateCreated } : null,
          props.dateModified ? { label: "Updated", value: props.dateModified } : null,
          props.dateDeleted ? { label: "Deleted", value: props.dateDeleted } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
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

export function DefinedTermSet(props: DefinedTermSetProps) {
  const base: DefinedTermSetStructuredDataInput = {
    name: props.name,
    description: props.description,
    about: thingReference(props.about),
    hasDefinedTerm: props.hasDefinedTerm?.map((entry) => ref("DefinedTerm", entry)),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.DefinedTermSetStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="defined-term-set"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Defined term set"}
        description={props.description}
        meta={props.about ? [{ label: "About", value: props.about }] : undefined}
        body={<>{props.hasDefinedTerm?.length ? <div className="lander-semantic__defined-term-set-list">{bodyList(props.hasDefinedTerm)}</div> : null}{props.body}</>}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function LocationFeatureSpecification(props: LocationFeatureSpecificationProps) {
  const base: LocationFeatureSpecificationStructuredDataInput = {
    name: props.name,
    description: props.description,
    propertyID: props.propertyID,
    value: props.value,
    unitText: props.unitText,
    hoursAvailable: props.hoursAvailable,
    validFrom: props.validFrom,
    validThrough: props.validThrough,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.LocationFeatureSpecificationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="location-feature-specification"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Location feature"}
        description={props.description}
        meta={[
          props.propertyID ? { label: "Property ID", value: props.propertyID } : null,
          props.value !== undefined ? { label: "Value", value: String(props.value) } : null,
          props.unitText ? { label: "Unit", value: props.unitText } : null,
          props.validFrom ? { label: "Valid from", value: props.validFrom } : null,
          props.validThrough ? { label: "Valid through", value: props.validThrough } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.hoursAvailable?.length ? <div className="lander-semantic__location-feature-hours">{bodyList(props.hoursAvailable)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function DeliveryChargeSpecification(props: DeliveryChargeSpecificationProps) {
  const base: DeliveryChargeSpecificationStructuredDataInput = {
    name: props.name,
    price: props.price,
    priceCurrency: props.priceCurrency,
    appliesToDeliveryMethod: props.appliesToDeliveryMethod,
    areaServed: props.areaServed?.map((entry) => ref("AdministrativeArea", entry)),
    eligibleRegion: props.eligibleRegion?.map((entry) => ref("DefinedRegion", entry)),
    ineligibleRegion: props.ineligibleRegion?.map((entry) => ref("DefinedRegion", entry)),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.DeliveryChargeSpecificationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="delivery-charge-specification"
        title={props.name ?? "Delivery charge specification"}
        eyebrow={props.viewModel?.eyebrow ?? "Delivery charge"}
        meta={[
          props.price !== undefined ? { label: "Price", value: `${props.priceCurrency ?? ""} ${String(props.price)}`.trim() } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.appliesToDeliveryMethod?.length ? <div className="lander-semantic__delivery-methods">{bodyList(props.appliesToDeliveryMethod)}</div> : null}
            {props.areaServed?.length ? <div className="lander-semantic__delivery-areas">{bodyList(props.areaServed)}</div> : null}
            {props.eligibleRegion?.length ? <div className="lander-semantic__delivery-eligible">{bodyList(props.eligibleRegion)}</div> : null}
            {props.ineligibleRegion?.length ? <div className="lander-semantic__delivery-ineligible">{bodyList(props.ineligibleRegion)}</div> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
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

export function Mass(props: MassProps) {
  const base: MassStructuredDataInput = { id: props.id };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MassStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="mass"
        title={props.label ?? props.id ?? "Mass"}
        eyebrow={props.viewModel?.eyebrow ?? "Mass"}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function EnergyConsumptionDetails(props: EnergyConsumptionDetailsProps) {
  const base: EnergyConsumptionDetailsStructuredDataInput = {
    name: props.name,
    description: props.description,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.EnergyConsumptionDetailsStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="energy-consumption-details"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Energy consumption"}
        description={props.description}
        meta={[
          props.hasEnergyEfficiencyCategory ? { label: "Category", value: props.hasEnergyEfficiencyCategory } : null,
          props.energyEfficiencyScaleMin ? { label: "Scale min", value: props.energyEfficiencyScaleMin } : null,
          props.energyEfficiencyScaleMax ? { label: "Scale max", value: props.energyEfficiencyScaleMax } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function HealthPlanCostSharingSpecification(props: HealthPlanCostSharingSpecificationProps) {
  const base: HealthPlanCostSharingSpecificationStructuredDataInput = {
    name: props.name,
    description: props.description,
    healthPlanCoinsuranceOption: props.healthPlanCoinsuranceOption,
    healthPlanCoinsuranceRate: props.healthPlanCoinsuranceRate,
    healthPlanCopay: props.healthPlanCopay ? { "@type": "PriceSpecification", name: props.healthPlanCopay } : undefined,
    healthPlanCopayOption: props.healthPlanCopayOption,
    healthPlanPharmacyCategory: props.healthPlanPharmacyCategory,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.HealthPlanCostSharingSpecificationStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="health-plan-cost-sharing-specification"
        title={props.name ?? "Health plan cost sharing"}
        eyebrow={props.viewModel?.eyebrow ?? "Cost sharing"}
        description={props.description}
        meta={[
          props.healthPlanCoinsuranceOption ? { label: "Coinsurance option", value: props.healthPlanCoinsuranceOption } : null,
          props.healthPlanCoinsuranceRate !== undefined ? { label: "Coinsurance rate", value: String(props.healthPlanCoinsuranceRate) } : null,
          props.healthPlanCopay ? { label: "Copay", value: props.healthPlanCopay } : null,
          props.healthPlanCopayOption ? { label: "Copay option", value: props.healthPlanCopayOption } : null,
          props.healthPlanPharmacyCategory ? { label: "Pharmacy category", value: props.healthPlanPharmacyCategory } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function HealthPlanFormulary(props: HealthPlanFormularyProps) {
  const base: HealthPlanFormularyStructuredDataInput = {
    name: props.name,
    description: props.description,
    healthPlanCostSharing:
      typeof props.healthPlanCostSharing === "boolean"
        ? props.healthPlanCostSharing
        : props.healthPlanCostSharing
          ? typeof props.healthPlanCostSharing === "string"
            ? { "@type": "HealthPlanCostSharingSpecification", name: props.healthPlanCostSharing }
            : ref("HealthPlanCostSharingSpecification", props.healthPlanCostSharing)
          : undefined,
    healthPlanDrugTier: props.healthPlanDrugTier,
    offersPrescriptionByMail: props.offersPrescriptionByMail,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.HealthPlanFormularyStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="health-plan-formulary"
        title={props.name ?? "Health plan formulary"}
        eyebrow={props.viewModel?.eyebrow ?? "Formulary"}
        description={props.description}
        meta={props.offersPrescriptionByMail !== undefined ? [{ label: "Mail prescriptions", value: props.offersPrescriptionByMail ? "Yes" : "No" }] : undefined}
        body={
          <>
            {props.healthPlanDrugTier ? <p>Drug tier: {props.healthPlanDrugTier}</p> : null}
            {typeof props.healthPlanCostSharing === "boolean" ? <p>Cost sharing: {props.healthPlanCostSharing ? "Yes" : "No"}</p> : null}
            {typeof props.healthPlanCostSharing === "string" ? <p>Cost sharing: {props.healthPlanCostSharing}</p> : null}
            {props.healthPlanCostSharing && typeof props.healthPlanCostSharing !== "string" && typeof props.healthPlanCostSharing !== "boolean" ? <p>Cost sharing: {props.healthPlanCostSharing.name}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function HealthPlanNetwork(props: HealthPlanNetworkProps) {
  const base: HealthPlanNetworkStructuredDataInput = {
    name: props.name,
    description: props.description,
    healthPlanCostSharing:
      typeof props.healthPlanCostSharing === "boolean"
        ? props.healthPlanCostSharing
        : props.healthPlanCostSharing
          ? typeof props.healthPlanCostSharing === "string"
            ? { "@type": "HealthPlanCostSharingSpecification", name: props.healthPlanCostSharing }
            : ref("HealthPlanCostSharingSpecification", props.healthPlanCostSharing)
          : undefined,
    healthPlanNetworkId: props.healthPlanNetworkId,
    healthPlanNetworkTier: props.healthPlanNetworkTier,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.HealthPlanNetworkStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="health-plan-network"
        title={props.name ?? "Health plan network"}
        eyebrow={props.viewModel?.eyebrow ?? "Network"}
        description={props.description}
        meta={[props.healthPlanNetworkId ? { label: "Network ID", value: props.healthPlanNetworkId } : null].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.healthPlanNetworkTier ? <p>Network tier: {props.healthPlanNetworkTier}</p> : null}
            {typeof props.healthPlanCostSharing === "boolean" ? <p>Cost sharing: {props.healthPlanCostSharing ? "Yes" : "No"}</p> : null}
            {typeof props.healthPlanCostSharing === "string" ? <p>Cost sharing: {props.healthPlanCostSharing}</p> : null}
            {props.healthPlanCostSharing && typeof props.healthPlanCostSharing !== "string" && typeof props.healthPlanCostSharing !== "boolean" ? <p>Cost sharing: {props.healthPlanCostSharing.name}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function HealthInsurancePlan(props: HealthInsurancePlanProps) {
  const base: HealthInsurancePlanStructuredDataInput = {
    name: props.name,
    description: props.description,
    benefitsSummaryUrl: props.benefitsSummaryUrl,
    contactPoint: props.contactPoint ? (typeof props.contactPoint === "string" ? { "@type": "ContactPoint", name: props.contactPoint } : ref("ContactPoint", props.contactPoint)) : undefined,
    healthPlanDrugOption: props.healthPlanDrugOption,
    healthPlanDrugTier: props.healthPlanDrugTier,
    healthPlanId: props.healthPlanId,
    healthPlanMarketingUrl: props.healthPlanMarketingUrl,
    includesHealthPlanFormulary: props.includesHealthPlanFormulary ? (typeof props.includesHealthPlanFormulary === "string" ? { "@type": "HealthPlanFormulary", name: props.includesHealthPlanFormulary } : ref("HealthPlanFormulary", props.includesHealthPlanFormulary)) : undefined,
    includesHealthPlanNetwork: props.includesHealthPlanNetwork ? (typeof props.includesHealthPlanNetwork === "string" ? { "@type": "HealthPlanNetwork", name: props.includesHealthPlanNetwork } : ref("HealthPlanNetwork", props.includesHealthPlanNetwork)) : undefined,
    usesHealthPlanIdStandard: props.usesHealthPlanIdStandard,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.HealthInsurancePlanStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="health-insurance-plan"
        title={props.name ?? "Health insurance plan"}
        eyebrow={props.viewModel?.eyebrow ?? "Health insurance"}
        description={props.description}
        meta={[
          props.healthPlanId ? { label: "Plan ID", value: props.healthPlanId } : null,
          props.healthPlanDrugOption ? { label: "Drug option", value: props.healthPlanDrugOption } : null,
          props.benefitsSummaryUrl ? { label: "Benefits summary", value: props.benefitsSummaryUrl } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.healthPlanDrugTier ? <p>Drug tier: {props.healthPlanDrugTier}</p> : null}
            {props.contactPoint ? <p>Contact point: {typeof props.contactPoint === "string" ? props.contactPoint : props.contactPoint.name}</p> : null}
            {props.includesHealthPlanFormulary ? <p>Formulary: {typeof props.includesHealthPlanFormulary === "string" ? props.includesHealthPlanFormulary : props.includesHealthPlanFormulary.name}</p> : null}
            {props.includesHealthPlanNetwork ? <p>Network: {typeof props.includesHealthPlanNetwork === "string" ? props.includesHealthPlanNetwork : props.includesHealthPlanNetwork.name}</p> : null}
            {props.healthPlanMarketingUrl ? <p>Marketing URL: {props.healthPlanMarketingUrl}</p> : null}
            {props.usesHealthPlanIdStandard ? <p>ID standard: {props.usesHealthPlanIdStandard}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function StatisticalVariable(props: StatisticalVariableProps) {
  const base: StatisticalVariableStructuredDataInput = {
    name: props.name,
    description: props.description,
    measurementMethod: props.measurementMethod,
    measurementTechnique: props.measurementTechnique,
    populationType: props.populationType ? ref("Class", props.populationType) : undefined,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.StatisticalVariableStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="statistical-variable"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Statistical variable"}
        description={props.description}
        meta={[
          props.measurementMethod ? { label: "Method", value: props.measurementMethod } : null,
          props.measurementTechnique ? { label: "Technique", value: props.measurementTechnique } : null,
          props.populationType ? { label: "Population", value: props.populationType } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
