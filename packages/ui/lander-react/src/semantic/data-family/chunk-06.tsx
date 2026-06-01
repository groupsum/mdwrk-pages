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
