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
