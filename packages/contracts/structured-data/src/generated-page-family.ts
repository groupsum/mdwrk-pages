export const primitiveSchemaOrgValueNode = <T>(value: T): T => value;
export const objectSchemaOrgValueNode = <T>(value: T): T => value;

export type AnatomicalStructureInput = Record<string, unknown>;
export const anatomicalStructureNode = (value: AnatomicalStructureInput): AnatomicalStructureInput => objectSchemaOrgValueNode(value);

export type AnatomicalSystemInput = Record<string, unknown>;
export const anatomicalSystemNode = (value: AnatomicalSystemInput): AnatomicalSystemInput => objectSchemaOrgValueNode(value);

export type BioChemEntityInput = Record<string, unknown>;
export const bioChemEntityNode = (value: BioChemEntityInput): BioChemEntityInput => objectSchemaOrgValueNode(value);

export type CmnsClsClassifierInput = Record<string, unknown>;
export const cmnsClsClassifierNode = (value: CmnsClsClassifierInput): CmnsClsClassifierInput => objectSchemaOrgValueNode(value);

export type CmnsColCollectionInput = Record<string, unknown>;
export const cmnsColCollectionNode = (value: CmnsColCollectionInput): CmnsColCollectionInput => objectSchemaOrgValueNode(value);

export type CmnsGeGeopoliticalEntityInput = Record<string, unknown>;
export const cmnsGeGeopoliticalEntityNode = (value: CmnsGeGeopoliticalEntityInput): CmnsGeGeopoliticalEntityInput => objectSchemaOrgValueNode(value);

export type DDxElementInput = Record<string, unknown>;
export const dDxElementNode = (value: DDxElementInput): DDxElementInput => objectSchemaOrgValueNode(value);

export type DietInput = Record<string, unknown>;
export const dietNode = (value: DietInput): DietInput => objectSchemaOrgValueNode(value);

export type DoseScheduleInput = Record<string, unknown>;
export const doseScheduleNode = (value: DoseScheduleInput): DoseScheduleInput => objectSchemaOrgValueNode(value);

export type DrugInput = Record<string, unknown>;
export const drugNode = (value: DrugInput): DrugInput => objectSchemaOrgValueNode(value);

export type DrugClassInput = Record<string, unknown>;
export const drugClassNode = (value: DrugClassInput): DrugClassInput => objectSchemaOrgValueNode(value);

export type DrugLegalStatusInput = Record<string, unknown>;
export const drugLegalStatusNode = (value: DrugLegalStatusInput): DrugLegalStatusInput => objectSchemaOrgValueNode(value);

export type DrugStrengthInput = Record<string, unknown>;
export const drugStrengthNode = (value: DrugStrengthInput): DrugStrengthInput => objectSchemaOrgValueNode(value);

export type FiboFndAgrCtrMutualContractualAgreementInput = Record<string, unknown>;
export const fiboFndAgrCtrMutualContractualAgreementNode = (value: FiboFndAgrCtrMutualContractualAgreementInput): FiboFndAgrCtrMutualContractualAgreementInput => objectSchemaOrgValueNode(value);

export type FiboFndArrDocCertificateInput = Record<string, unknown>;
export const fiboFndArrDocCertificateNode = (value: FiboFndArrDocCertificateInput): FiboFndArrDocCertificateInput => objectSchemaOrgValueNode(value);

export type PaymentCardInput = Record<string, unknown>;
export const paymentCardNode = (value: PaymentCardInput): PaymentCardInput => objectSchemaOrgValueNode(value);

export type PaymentMethodInput = Record<string, unknown>;
export const paymentMethodNode = (value: PaymentMethodInput): PaymentMethodInput => objectSchemaOrgValueNode(value);

export type PeopleAudienceInput = Record<string, unknown>;
export const peopleAudienceNode = (value: PeopleAudienceInput): PeopleAudienceInput => objectSchemaOrgValueNode(value);

export type PerformingGroupInput = Record<string, unknown>;
export const performingGroupNode = (value: PerformingGroupInput): PerformingGroupInput => objectSchemaOrgValueNode(value);

export type PersonInput = Record<string, unknown>;
export const personNode = (value: PersonInput): PersonInput => objectSchemaOrgValueNode(value);

export type PhotographInput = Record<string, unknown>;
export const photographNode = (value: PhotographInput): PhotographInput => objectSchemaOrgValueNode(value);

export type PlaceInput = Record<string, unknown>;
export const placeNode = (value: PlaceInput): PlaceInput => objectSchemaOrgValueNode(value);

export type PostalAddressInput = Record<string, unknown>;
export const postalAddressNode = (value: PostalAddressInput): PostalAddressInput => objectSchemaOrgValueNode(value);

export type PostalCodeRangeSpecificationInput = Record<string, unknown>;
export const postalCodeRangeSpecificationNode = (value: PostalCodeRangeSpecificationInput): PostalCodeRangeSpecificationInput => objectSchemaOrgValueNode(value);

export type PriceSpecificationInput = Record<string, unknown>;
export const priceSpecificationNode = (value: PriceSpecificationInput): PriceSpecificationInput => objectSchemaOrgValueNode(value);

export type BooleanInput = boolean;
export const booleanNode = (value: BooleanInput): BooleanInput => primitiveSchemaOrgValueNode(value);

export type DateInput = string;
export const dateNode = (value: DateInput): DateInput => primitiveSchemaOrgValueNode(value);

export type DateTimeInput = string;
export const dateTimeNode = (value: DateTimeInput): DateTimeInput => primitiveSchemaOrgValueNode(value);

export type NumberInput = number;
export const numberNode = (value: NumberInput): NumberInput => primitiveSchemaOrgValueNode(value);

export type QuantityInput = number | string;
export const quantityNode = (value: QuantityInput): QuantityInput => primitiveSchemaOrgValueNode(value);

export type TextInput = string;
export const textNode = (value: TextInput): TextInput => primitiveSchemaOrgValueNode(value);

export type TimeInput = string;
export const timeNode = (value: TimeInput): TimeInput => primitiveSchemaOrgValueNode(value);

export type ActionStatusTypeInput = string;
export const actionStatusTypeNode = (value: ActionStatusTypeInput): ActionStatusTypeInput => primitiveSchemaOrgValueNode(value);

export type AdultOrientedEnumerationInput = string;
export const adultOrientedEnumerationNode = (value: AdultOrientedEnumerationInput): AdultOrientedEnumerationInput => primitiveSchemaOrgValueNode(value);

export type BusinessEntityTypeInput = string;
export const businessEntityTypeNode = (value: BusinessEntityTypeInput): BusinessEntityTypeInput => primitiveSchemaOrgValueNode(value);

export type BusinessFunctionInput = string;
export const businessFunctionNode = (value: BusinessFunctionInput): BusinessFunctionInput => primitiveSchemaOrgValueNode(value);

export type CertificationStatusEnumerationInput = string;
export const certificationStatusEnumerationNode = (value: CertificationStatusEnumerationInput): CertificationStatusEnumerationInput => primitiveSchemaOrgValueNode(value);

export type ContactPointOptionInput = string;
export const contactPointOptionNode = (value: ContactPointOptionInput): ContactPointOptionInput => primitiveSchemaOrgValueNode(value);

export type DayOfWeekInput = string;
export const dayOfWeekNode = (value: DayOfWeekInput): DayOfWeekInput => primitiveSchemaOrgValueNode(value);

export type DeliveryMethodInput = string;
export const deliveryMethodNode = (value: DeliveryMethodInput): DeliveryMethodInput => primitiveSchemaOrgValueNode(value);

export type DigitalPlatformEnumerationInput = string;
export const digitalPlatformEnumerationNode = (value: DigitalPlatformEnumerationInput): DigitalPlatformEnumerationInput => primitiveSchemaOrgValueNode(value);

export type DrugPregnancyCategoryInput = string;
export const drugPregnancyCategoryNode = (value: DrugPregnancyCategoryInput): DrugPregnancyCategoryInput => primitiveSchemaOrgValueNode(value);

export type DrugPrescriptionStatusInput = string;
export const drugPrescriptionStatusNode = (value: DrugPrescriptionStatusInput): DrugPrescriptionStatusInput => primitiveSchemaOrgValueNode(value);

export type EnergyEfficiencyEnumerationInput = string;
export const energyEfficiencyEnumerationNode = (value: EnergyEfficiencyEnumerationInput): EnergyEfficiencyEnumerationInput => primitiveSchemaOrgValueNode(value);

export type EUEnergyEfficiencyEnumerationInput = string;
export const eUEnergyEfficiencyEnumerationNode = (value: EUEnergyEfficiencyEnumerationInput): EUEnergyEfficiencyEnumerationInput => primitiveSchemaOrgValueNode(value);

export type EventAttendanceModeEnumerationInput = string;
export const eventAttendanceModeEnumerationNode = (value: EventAttendanceModeEnumerationInput): EventAttendanceModeEnumerationInput => primitiveSchemaOrgValueNode(value);

export type EventStatusTypeInput = string;
export const eventStatusTypeNode = (value: EventStatusTypeInput): EventStatusTypeInput => primitiveSchemaOrgValueNode(value);

export type FulfillmentTypeEnumerationInput = string;
export const fulfillmentTypeEnumerationNode = (value: FulfillmentTypeEnumerationInput): FulfillmentTypeEnumerationInput => primitiveSchemaOrgValueNode(value);

export type GenderTypeInput = string;
export const genderTypeNode = (value: GenderTypeInput): GenderTypeInput => primitiveSchemaOrgValueNode(value);

export type GovernmentBenefitsTypeInput = string;
export const governmentBenefitsTypeNode = (value: GovernmentBenefitsTypeInput): GovernmentBenefitsTypeInput => primitiveSchemaOrgValueNode(value);

export type IPTCDigitalSourceEnumerationInput = string;
export const iPTCDigitalSourceEnumerationNode = (value: IPTCDigitalSourceEnumerationInput): IPTCDigitalSourceEnumerationInput => primitiveSchemaOrgValueNode(value);

export type ItemAvailabilityInput = string;
export const itemAvailabilityNode = (value: ItemAvailabilityInput): ItemAvailabilityInput => primitiveSchemaOrgValueNode(value);

export type ItemListOrderTypeInput = string;
export const itemListOrderTypeNode = (value: ItemListOrderTypeInput): ItemListOrderTypeInput => primitiveSchemaOrgValueNode(value);

export type MapCategoryTypeInput = string;
export const mapCategoryTypeNode = (value: MapCategoryTypeInput): MapCategoryTypeInput => primitiveSchemaOrgValueNode(value);

export type MeasurementMethodEnumInput = string;
export const measurementMethodEnumNode = (value: MeasurementMethodEnumInput): MeasurementMethodEnumInput => primitiveSchemaOrgValueNode(value);

export type MeasurementTypeEnumerationInput = string;
export const measurementTypeEnumerationNode = (value: MeasurementTypeEnumerationInput): MeasurementTypeEnumerationInput => primitiveSchemaOrgValueNode(value);

export type MediaEnumerationInput = string;
export const mediaEnumerationNode = (value: MediaEnumerationInput): MediaEnumerationInput => primitiveSchemaOrgValueNode(value);

export type MedicalAudienceTypeInput = string;
export const medicalAudienceTypeNode = (value: MedicalAudienceTypeInput): MedicalAudienceTypeInput => primitiveSchemaOrgValueNode(value);

export type MedicalEnumerationInput = string;
export const medicalEnumerationNode = (value: MedicalEnumerationInput): MedicalEnumerationInput => primitiveSchemaOrgValueNode(value);

export type MedicalEvidenceLevelInput = string;
export const medicalEvidenceLevelNode = (value: MedicalEvidenceLevelInput): MedicalEvidenceLevelInput => primitiveSchemaOrgValueNode(value);

export type MedicalProcedureTypeInput = string;
export const medicalProcedureTypeNode = (value: MedicalProcedureTypeInput): MedicalProcedureTypeInput => primitiveSchemaOrgValueNode(value);

export type MedicalSpecialtyInput = string;
export const medicalSpecialtyNode = (value: MedicalSpecialtyInput): MedicalSpecialtyInput => primitiveSchemaOrgValueNode(value);

export type MedicalStudyStatusInput = string;
export const medicalStudyStatusNode = (value: MedicalStudyStatusInput): MedicalStudyStatusInput => primitiveSchemaOrgValueNode(value);

export type MedicineSystemInput = string;
export const medicineSystemNode = (value: MedicineSystemInput): MedicineSystemInput => primitiveSchemaOrgValueNode(value);

export type MerchantReturnEnumerationInput = string;
export const merchantReturnEnumerationNode = (value: MerchantReturnEnumerationInput): MerchantReturnEnumerationInput => primitiveSchemaOrgValueNode(value);

export type MusicAlbumProductionTypeInput = string;
export const musicAlbumProductionTypeNode = (value: MusicAlbumProductionTypeInput): MusicAlbumProductionTypeInput => primitiveSchemaOrgValueNode(value);

export type MusicAlbumReleaseTypeInput = string;
export const musicAlbumReleaseTypeNode = (value: MusicAlbumReleaseTypeInput): MusicAlbumReleaseTypeInput => primitiveSchemaOrgValueNode(value);

export type MusicReleaseFormatTypeInput = string;
export const musicReleaseFormatTypeNode = (value: MusicReleaseFormatTypeInput): MusicReleaseFormatTypeInput => primitiveSchemaOrgValueNode(value);

export type NonprofitTypeInput = string;
export const nonprofitTypeNode = (value: NonprofitTypeInput): NonprofitTypeInput => primitiveSchemaOrgValueNode(value);

export type OfferItemConditionInput = string;
export const offerItemConditionNode = (value: OfferItemConditionInput): OfferItemConditionInput => primitiveSchemaOrgValueNode(value);

export type PaymentMethodTypeInput = string;
export const paymentMethodTypeNode = (value: PaymentMethodTypeInput): PaymentMethodTypeInput => primitiveSchemaOrgValueNode(value);

export type PhysicalActivityCategoryInput = string;
export const physicalActivityCategoryNode = (value: PhysicalActivityCategoryInput): PhysicalActivityCategoryInput => primitiveSchemaOrgValueNode(value);

export type PhysicalExamInput = string;
export const physicalExamNode = (value: PhysicalExamInput): PhysicalExamInput => primitiveSchemaOrgValueNode(value);

export type PriceComponentTypeEnumerationInput = string;
export const priceComponentTypeEnumerationNode = (value: PriceComponentTypeEnumerationInput): PriceComponentTypeEnumerationInput => primitiveSchemaOrgValueNode(value);

export type PriceTypeEnumerationInput = string;
export const priceTypeEnumerationNode = (value: PriceTypeEnumerationInput): PriceTypeEnumerationInput => primitiveSchemaOrgValueNode(value);

export type QualitativeValueInput = string;
export const qualitativeValueNode = (value: QualitativeValueInput): QualitativeValueInput => primitiveSchemaOrgValueNode(value);

export type RefundTypeEnumerationInput = string;
export const refundTypeEnumerationNode = (value: RefundTypeEnumerationInput): RefundTypeEnumerationInput => primitiveSchemaOrgValueNode(value);

export type RestrictedDietInput = string;
export const restrictedDietNode = (value: RestrictedDietInput): RestrictedDietInput => primitiveSchemaOrgValueNode(value);

export type ReturnFeesEnumerationInput = string;
export const returnFeesEnumerationNode = (value: ReturnFeesEnumerationInput): ReturnFeesEnumerationInput => primitiveSchemaOrgValueNode(value);

export type ReturnLabelSourceEnumerationInput = string;
export const returnLabelSourceEnumerationNode = (value: ReturnLabelSourceEnumerationInput): ReturnLabelSourceEnumerationInput => primitiveSchemaOrgValueNode(value);

export type ReturnMethodEnumerationInput = string;
export const returnMethodEnumerationNode = (value: ReturnMethodEnumerationInput): ReturnMethodEnumerationInput => primitiveSchemaOrgValueNode(value);

export type SizeSpecificationInput = string;
export const sizeSpecificationNode = (value: SizeSpecificationInput): SizeSpecificationInput => primitiveSchemaOrgValueNode(value);

export type SpecialtyInput = string;
export const specialtyNode = (value: SpecialtyInput): SpecialtyInput => primitiveSchemaOrgValueNode(value);

export type StatusEnumerationInput = string;
export const statusEnumerationNode = (value: StatusEnumerationInput): StatusEnumerationInput => primitiveSchemaOrgValueNode(value);

export type TierBenefitEnumerationInput = string;
export const tierBenefitEnumerationNode = (value: TierBenefitEnumerationInput): TierBenefitEnumerationInput => primitiveSchemaOrgValueNode(value);

export type WarrantyScopeInput = string;
export const warrantyScopeNode = (value: WarrantyScopeInput): WarrantyScopeInput => primitiveSchemaOrgValueNode(value);

export type AboutPropertyInput = Record<string, unknown>;
export const aboutPropertyNode = (value: AboutPropertyInput): AboutPropertyInput => objectSchemaOrgValueNode(value);

export type AbstractPropertyInput = Record<string, unknown>;
export const abstractPropertyNode = (value: AbstractPropertyInput): AbstractPropertyInput => objectSchemaOrgValueNode(value);

export type AcceptedPaymentMethodPropertyInput = Record<string, unknown>;
export const acceptedPaymentMethodPropertyNode = (value: AcceptedPaymentMethodPropertyInput): AcceptedPaymentMethodPropertyInput => objectSchemaOrgValueNode(value);

export type AccessibilityAPIPropertyInput = Record<string, unknown>;
export const accessibilityAPIPropertyNode = (value: AccessibilityAPIPropertyInput): AccessibilityAPIPropertyInput => objectSchemaOrgValueNode(value);

export type AccessibilityControlPropertyInput = Record<string, unknown>;
export const accessibilityControlPropertyNode = (value: AccessibilityControlPropertyInput): AccessibilityControlPropertyInput => objectSchemaOrgValueNode(value);

export type AccessibilityFeaturePropertyInput = Record<string, unknown>;
export const accessibilityFeaturePropertyNode = (value: AccessibilityFeaturePropertyInput): AccessibilityFeaturePropertyInput => objectSchemaOrgValueNode(value);

export type AccessibilityHazardPropertyInput = Record<string, unknown>;
export const accessibilityHazardPropertyNode = (value: AccessibilityHazardPropertyInput): AccessibilityHazardPropertyInput => objectSchemaOrgValueNode(value);

export type AccessibilitySummaryPropertyInput = Record<string, unknown>;
export const accessibilitySummaryPropertyNode = (value: AccessibilitySummaryPropertyInput): AccessibilitySummaryPropertyInput => objectSchemaOrgValueNode(value);

export type AccessModePropertyInput = Record<string, unknown>;
export const accessModePropertyNode = (value: AccessModePropertyInput): AccessModePropertyInput => objectSchemaOrgValueNode(value);

export type AccessModeSufficientPropertyInput = Record<string, unknown>;
export const accessModeSufficientPropertyNode = (value: AccessModeSufficientPropertyInput): AccessModeSufficientPropertyInput => objectSchemaOrgValueNode(value);

export type AccountablePersonPropertyInput = Record<string, unknown>;
export const accountablePersonPropertyNode = (value: AccountablePersonPropertyInput): AccountablePersonPropertyInput => objectSchemaOrgValueNode(value);

export type AcquireLicensePagePropertyInput = Record<string, unknown>;
export const acquireLicensePagePropertyNode = (value: AcquireLicensePagePropertyInput): AcquireLicensePagePropertyInput => objectSchemaOrgValueNode(value);

export type ActionableFeedbackPolicyPropertyInput = Record<string, unknown>;
export const actionableFeedbackPolicyPropertyNode = (value: ActionableFeedbackPolicyPropertyInput): ActionableFeedbackPolicyPropertyInput => objectSchemaOrgValueNode(value);

export type ActionApplicationPropertyInput = Record<string, unknown>;
export const actionApplicationPropertyNode = (value: ActionApplicationPropertyInput): ActionApplicationPropertyInput => objectSchemaOrgValueNode(value);

export type ActionPlatformPropertyInput = Record<string, unknown>;
export const actionPlatformPropertyNode = (value: ActionPlatformPropertyInput): ActionPlatformPropertyInput => objectSchemaOrgValueNode(value);

export type ActionProcessPropertyInput = Record<string, unknown>;
export const actionProcessPropertyNode = (value: ActionProcessPropertyInput): ActionProcessPropertyInput => objectSchemaOrgValueNode(value);

export type ActionStatusPropertyInput = Record<string, unknown>;
export const actionStatusPropertyNode = (value: ActionStatusPropertyInput): ActionStatusPropertyInput => objectSchemaOrgValueNode(value);

export type ActiveIngredientPropertyInput = Record<string, unknown>;
export const activeIngredientPropertyNode = (value: ActiveIngredientPropertyInput): ActiveIngredientPropertyInput => objectSchemaOrgValueNode(value);

export type ActorPropertyInput = Record<string, unknown>;
export const actorPropertyNode = (value: ActorPropertyInput): ActorPropertyInput => objectSchemaOrgValueNode(value);

export type ActorsPropertyInput = Record<string, unknown>;
export const actorsPropertyNode = (value: ActorsPropertyInput): ActorsPropertyInput => objectSchemaOrgValueNode(value);

export type AdditionalNamePropertyInput = Record<string, unknown>;
export const additionalNamePropertyNode = (value: AdditionalNamePropertyInput): AdditionalNamePropertyInput => objectSchemaOrgValueNode(value);

export type AdditionalPropertyPropertyInput = Record<string, unknown>;
export const additionalPropertyPropertyNode = (value: AdditionalPropertyPropertyInput): AdditionalPropertyPropertyInput => objectSchemaOrgValueNode(value);

export type AdditionalTypePropertyInput = Record<string, unknown>;
export const additionalTypePropertyNode = (value: AdditionalTypePropertyInput): AdditionalTypePropertyInput => objectSchemaOrgValueNode(value);

export type AddOnPropertyInput = Record<string, unknown>;
export const addOnPropertyNode = (value: AddOnPropertyInput): AddOnPropertyInput => objectSchemaOrgValueNode(value);

export type AddressPropertyInput = Record<string, unknown>;
export const addressPropertyNode = (value: AddressPropertyInput): AddressPropertyInput => objectSchemaOrgValueNode(value);

export type AddressCountryPropertyInput = Record<string, unknown>;
export const addressCountryPropertyNode = (value: AddressCountryPropertyInput): AddressCountryPropertyInput => objectSchemaOrgValueNode(value);

export type AddressLocalityPropertyInput = Record<string, unknown>;
export const addressLocalityPropertyNode = (value: AddressLocalityPropertyInput): AddressLocalityPropertyInput => objectSchemaOrgValueNode(value);

export type AddressRegionPropertyInput = Record<string, unknown>;
export const addressRegionPropertyNode = (value: AddressRegionPropertyInput): AddressRegionPropertyInput => objectSchemaOrgValueNode(value);

export type AdministrationRoutePropertyInput = Record<string, unknown>;
export const administrationRoutePropertyNode = (value: AdministrationRoutePropertyInput): AdministrationRoutePropertyInput => objectSchemaOrgValueNode(value);

export type AdvanceBookingRequirementPropertyInput = Record<string, unknown>;
export const advanceBookingRequirementPropertyNode = (value: AdvanceBookingRequirementPropertyInput): AdvanceBookingRequirementPropertyInput => objectSchemaOrgValueNode(value);

export type AdverseOutcomePropertyInput = Record<string, unknown>;
export const adverseOutcomePropertyNode = (value: AdverseOutcomePropertyInput): AdverseOutcomePropertyInput => objectSchemaOrgValueNode(value);

export type AffectedByPropertyInput = Record<string, unknown>;
export const affectedByPropertyNode = (value: AffectedByPropertyInput): AffectedByPropertyInput => objectSchemaOrgValueNode(value);

export type AffiliationPropertyInput = Record<string, unknown>;
export const affiliationPropertyNode = (value: AffiliationPropertyInput): AffiliationPropertyInput => objectSchemaOrgValueNode(value);

export type AgentPropertyInput = Record<string, unknown>;
export const agentPropertyNode = (value: AgentPropertyInput): AgentPropertyInput => objectSchemaOrgValueNode(value);

export type AgentInteractionStatisticPropertyInput = Record<string, unknown>;
export const agentInteractionStatisticPropertyNode = (value: AgentInteractionStatisticPropertyInput): AgentInteractionStatisticPropertyInput => objectSchemaOrgValueNode(value);

export type AggregateElementPropertyInput = Record<string, unknown>;
export const aggregateElementPropertyNode = (value: AggregateElementPropertyInput): AggregateElementPropertyInput => objectSchemaOrgValueNode(value);

export type AggregateRatingPropertyInput = Record<string, unknown>;
export const aggregateRatingPropertyNode = (value: AggregateRatingPropertyInput): AggregateRatingPropertyInput => objectSchemaOrgValueNode(value);

export type AlbumPropertyInput = Record<string, unknown>;
export const albumPropertyNode = (value: AlbumPropertyInput): AlbumPropertyInput => objectSchemaOrgValueNode(value);

export type AlbumProductionTypePropertyInput = Record<string, unknown>;
export const albumProductionTypePropertyNode = (value: AlbumProductionTypePropertyInput): AlbumProductionTypePropertyInput => objectSchemaOrgValueNode(value);

export type AlbumReleasePropertyInput = Record<string, unknown>;
export const albumReleasePropertyNode = (value: AlbumReleasePropertyInput): AlbumReleasePropertyInput => objectSchemaOrgValueNode(value);

export type AlbumReleaseTypePropertyInput = Record<string, unknown>;
export const albumReleaseTypePropertyNode = (value: AlbumReleaseTypePropertyInput): AlbumReleaseTypePropertyInput => objectSchemaOrgValueNode(value);

export type AlbumsPropertyInput = Record<string, unknown>;
export const albumsPropertyNode = (value: AlbumsPropertyInput): AlbumsPropertyInput => objectSchemaOrgValueNode(value);

export type AlcoholWarningPropertyInput = Record<string, unknown>;
export const alcoholWarningPropertyNode = (value: AlcoholWarningPropertyInput): AlcoholWarningPropertyInput => objectSchemaOrgValueNode(value);

export type AlignmentTypePropertyInput = Record<string, unknown>;
export const alignmentTypePropertyNode = (value: AlignmentTypePropertyInput): AlignmentTypePropertyInput => objectSchemaOrgValueNode(value);

export type AlternateNamePropertyInput = Record<string, unknown>;
export const alternateNamePropertyNode = (value: AlternateNamePropertyInput): AlternateNamePropertyInput => objectSchemaOrgValueNode(value);

export type AlternativeHeadlinePropertyInput = Record<string, unknown>;
export const alternativeHeadlinePropertyNode = (value: AlternativeHeadlinePropertyInput): AlternativeHeadlinePropertyInput => objectSchemaOrgValueNode(value);

export type AlternativeOfPropertyInput = Record<string, unknown>;
export const alternativeOfPropertyNode = (value: AlternativeOfPropertyInput): AlternativeOfPropertyInput => objectSchemaOrgValueNode(value);

export type AlumniPropertyInput = Record<string, unknown>;
export const alumniPropertyNode = (value: AlumniPropertyInput): AlumniPropertyInput => objectSchemaOrgValueNode(value);

export type AlumniOfPropertyInput = Record<string, unknown>;
export const alumniOfPropertyNode = (value: AlumniOfPropertyInput): AlumniOfPropertyInput => objectSchemaOrgValueNode(value);

export type AmenityFeaturePropertyInput = Record<string, unknown>;
export const amenityFeaturePropertyNode = (value: AmenityFeaturePropertyInput): AmenityFeaturePropertyInput => objectSchemaOrgValueNode(value);

export type AmountPropertyInput = Record<string, unknown>;
export const amountPropertyNode = (value: AmountPropertyInput): AmountPropertyInput => objectSchemaOrgValueNode(value);

export type AmountOfThisGoodPropertyInput = Record<string, unknown>;
export const amountOfThisGoodPropertyNode = (value: AmountOfThisGoodPropertyInput): AmountOfThisGoodPropertyInput => objectSchemaOrgValueNode(value);

export type AnnualPercentageRatePropertyInput = Record<string, unknown>;
export const annualPercentageRatePropertyNode = (value: AnnualPercentageRatePropertyInput): AnnualPercentageRatePropertyInput => objectSchemaOrgValueNode(value);

export type AppearancePropertyInput = Record<string, unknown>;
export const appearancePropertyNode = (value: AppearancePropertyInput): AppearancePropertyInput => objectSchemaOrgValueNode(value);

export type ApplicableCountryPropertyInput = Record<string, unknown>;
export const applicableCountryPropertyNode = (value: ApplicableCountryPropertyInput): ApplicableCountryPropertyInput => objectSchemaOrgValueNode(value);

export type ApplicableLocationPropertyInput = Record<string, unknown>;
export const applicableLocationPropertyNode = (value: ApplicableLocationPropertyInput): ApplicableLocationPropertyInput => objectSchemaOrgValueNode(value);

export type ApplicationPropertyInput = Record<string, unknown>;
export const applicationPropertyNode = (value: ApplicationPropertyInput): ApplicationPropertyInput => objectSchemaOrgValueNode(value);

export type ApplicationCategoryPropertyInput = Record<string, unknown>;
export const applicationCategoryPropertyNode = (value: ApplicationCategoryPropertyInput): ApplicationCategoryPropertyInput => objectSchemaOrgValueNode(value);

export type ApplicationSubCategoryPropertyInput = Record<string, unknown>;
export const applicationSubCategoryPropertyNode = (value: ApplicationSubCategoryPropertyInput): ApplicationSubCategoryPropertyInput => objectSchemaOrgValueNode(value);

export type ApplicationSuitePropertyInput = Record<string, unknown>;
export const applicationSuitePropertyNode = (value: ApplicationSuitePropertyInput): ApplicationSuitePropertyInput => objectSchemaOrgValueNode(value);

export type AppliesToDeliveryMethodPropertyInput = Record<string, unknown>;
export const appliesToDeliveryMethodPropertyNode = (value: AppliesToDeliveryMethodPropertyInput): AppliesToDeliveryMethodPropertyInput => objectSchemaOrgValueNode(value);

export type ArchivedAtPropertyInput = Record<string, unknown>;
export const archivedAtPropertyNode = (value: ArchivedAtPropertyInput): ArchivedAtPropertyInput => objectSchemaOrgValueNode(value);

export type AreaPropertyInput = Record<string, unknown>;
export const areaPropertyNode = (value: AreaPropertyInput): AreaPropertyInput => objectSchemaOrgValueNode(value);

export type AreaServedPropertyInput = Record<string, unknown>;
export const areaServedPropertyNode = (value: AreaServedPropertyInput): AreaServedPropertyInput => objectSchemaOrgValueNode(value);

export type ArrivalTimePropertyInput = Record<string, unknown>;
export const arrivalTimePropertyNode = (value: ArrivalTimePropertyInput): ArrivalTimePropertyInput => objectSchemaOrgValueNode(value);

export type ArticleBodyPropertyInput = Record<string, unknown>;
export const articleBodyPropertyNode = (value: ArticleBodyPropertyInput): ArticleBodyPropertyInput => objectSchemaOrgValueNode(value);

export type ArticleSectionPropertyInput = Record<string, unknown>;
export const articleSectionPropertyNode = (value: ArticleSectionPropertyInput): ArticleSectionPropertyInput => objectSchemaOrgValueNode(value);

export type AsinPropertyInput = Record<string, unknown>;
export const asinPropertyNode = (value: AsinPropertyInput): AsinPropertyInput => objectSchemaOrgValueNode(value);

export type AspectPropertyInput = Record<string, unknown>;
export const aspectPropertyNode = (value: AspectPropertyInput): AspectPropertyInput => objectSchemaOrgValueNode(value);

export type AssessesPropertyInput = Record<string, unknown>;
export const assessesPropertyNode = (value: AssessesPropertyInput): AssessesPropertyInput => objectSchemaOrgValueNode(value);

export type AssociatedAnatomyPropertyInput = Record<string, unknown>;
export const associatedAnatomyPropertyNode = (value: AssociatedAnatomyPropertyInput): AssociatedAnatomyPropertyInput => objectSchemaOrgValueNode(value);

export type AssociatedArticlePropertyInput = Record<string, unknown>;
export const associatedArticlePropertyNode = (value: AssociatedArticlePropertyInput): AssociatedArticlePropertyInput => objectSchemaOrgValueNode(value);

export type AssociatedClaimReviewPropertyInput = Record<string, unknown>;
export const associatedClaimReviewPropertyNode = (value: AssociatedClaimReviewPropertyInput): AssociatedClaimReviewPropertyInput => objectSchemaOrgValueNode(value);

export type AssociatedDiseasePropertyInput = Record<string, unknown>;
export const associatedDiseasePropertyNode = (value: AssociatedDiseasePropertyInput): AssociatedDiseasePropertyInput => objectSchemaOrgValueNode(value);

export type AssociatedMediaPropertyInput = Record<string, unknown>;
export const associatedMediaPropertyNode = (value: AssociatedMediaPropertyInput): AssociatedMediaPropertyInput => objectSchemaOrgValueNode(value);

export type AssociatedMediaReviewPropertyInput = Record<string, unknown>;
export const associatedMediaReviewPropertyNode = (value: AssociatedMediaReviewPropertyInput): AssociatedMediaReviewPropertyInput => objectSchemaOrgValueNode(value);

export type AssociatedPathophysiologyPropertyInput = Record<string, unknown>;
export const associatedPathophysiologyPropertyNode = (value: AssociatedPathophysiologyPropertyInput): AssociatedPathophysiologyPropertyInput => objectSchemaOrgValueNode(value);

export type AssociatedReviewPropertyInput = Record<string, unknown>;
export const associatedReviewPropertyNode = (value: AssociatedReviewPropertyInput): AssociatedReviewPropertyInput => objectSchemaOrgValueNode(value);

export type AttendeePropertyInput = Record<string, unknown>;
export const attendeePropertyNode = (value: AttendeePropertyInput): AttendeePropertyInput => objectSchemaOrgValueNode(value);

export type AttendeesPropertyInput = Record<string, unknown>;
export const attendeesPropertyNode = (value: AttendeesPropertyInput): AttendeesPropertyInput => objectSchemaOrgValueNode(value);

export type AudiencePropertyInput = Record<string, unknown>;
export const audiencePropertyNode = (value: AudiencePropertyInput): AudiencePropertyInput => objectSchemaOrgValueNode(value);

export type AudienceTypePropertyInput = Record<string, unknown>;
export const audienceTypePropertyNode = (value: AudienceTypePropertyInput): AudienceTypePropertyInput => objectSchemaOrgValueNode(value);

export type AudioPropertyInput = Record<string, unknown>;
export const audioPropertyNode = (value: AudioPropertyInput): AudioPropertyInput => objectSchemaOrgValueNode(value);

export type AuditDatePropertyInput = Record<string, unknown>;
export const auditDatePropertyNode = (value: AuditDatePropertyInput): AuditDatePropertyInput => objectSchemaOrgValueNode(value);

export type AuthenticatorPropertyInput = Record<string, unknown>;
export const authenticatorPropertyNode = (value: AuthenticatorPropertyInput): AuthenticatorPropertyInput => objectSchemaOrgValueNode(value);

export type AuthorPropertyInput = Record<string, unknown>;
export const authorPropertyNode = (value: AuthorPropertyInput): AuthorPropertyInput => objectSchemaOrgValueNode(value);

export type AvailabilityPropertyInput = Record<string, unknown>;
export const availabilityPropertyNode = (value: AvailabilityPropertyInput): AvailabilityPropertyInput => objectSchemaOrgValueNode(value);

export type AvailabilityEndsPropertyInput = Record<string, unknown>;
export const availabilityEndsPropertyNode = (value: AvailabilityEndsPropertyInput): AvailabilityEndsPropertyInput => objectSchemaOrgValueNode(value);

export type AvailabilityStartsPropertyInput = Record<string, unknown>;
export const availabilityStartsPropertyNode = (value: AvailabilityStartsPropertyInput): AvailabilityStartsPropertyInput => objectSchemaOrgValueNode(value);

export type AvailableAtOrFromPropertyInput = Record<string, unknown>;
export const availableAtOrFromPropertyNode = (value: AvailableAtOrFromPropertyInput): AvailableAtOrFromPropertyInput => objectSchemaOrgValueNode(value);

export type AvailableChannelPropertyInput = Record<string, unknown>;
export const availableChannelPropertyNode = (value: AvailableChannelPropertyInput): AvailableChannelPropertyInput => objectSchemaOrgValueNode(value);

export type AvailableDeliveryMethodPropertyInput = Record<string, unknown>;
export const availableDeliveryMethodPropertyNode = (value: AvailableDeliveryMethodPropertyInput): AvailableDeliveryMethodPropertyInput => objectSchemaOrgValueNode(value);

export type AvailableInPropertyInput = Record<string, unknown>;
export const availableInPropertyNode = (value: AvailableInPropertyInput): AvailableInPropertyInput => objectSchemaOrgValueNode(value);

export type AvailableLanguagePropertyInput = Record<string, unknown>;
export const availableLanguagePropertyNode = (value: AvailableLanguagePropertyInput): AvailableLanguagePropertyInput => objectSchemaOrgValueNode(value);

export type AvailableOnDevicePropertyInput = Record<string, unknown>;
export const availableOnDevicePropertyNode = (value: AvailableOnDevicePropertyInput): AvailableOnDevicePropertyInput => objectSchemaOrgValueNode(value);

export type AvailableStrengthPropertyInput = Record<string, unknown>;
export const availableStrengthPropertyNode = (value: AvailableStrengthPropertyInput): AvailableStrengthPropertyInput => objectSchemaOrgValueNode(value);

export type AwardPropertyInput = Record<string, unknown>;
export const awardPropertyNode = (value: AwardPropertyInput): AwardPropertyInput => objectSchemaOrgValueNode(value);

export type AwardsPropertyInput = Record<string, unknown>;
export const awardsPropertyNode = (value: AwardsPropertyInput): AwardsPropertyInput => objectSchemaOrgValueNode(value);

export type BackstoryPropertyInput = Record<string, unknown>;
export const backstoryPropertyNode = (value: BackstoryPropertyInput): BackstoryPropertyInput => objectSchemaOrgValueNode(value);

export type BenefitsSummaryUrlPropertyInput = Record<string, unknown>;
export const benefitsSummaryUrlPropertyNode = (value: BenefitsSummaryUrlPropertyInput): BenefitsSummaryUrlPropertyInput => objectSchemaOrgValueNode(value);

export type BestRatingPropertyInput = Record<string, unknown>;
export const bestRatingPropertyNode = (value: BestRatingPropertyInput): BestRatingPropertyInput => objectSchemaOrgValueNode(value);

export type BillingDurationPropertyInput = Record<string, unknown>;
export const billingDurationPropertyNode = (value: BillingDurationPropertyInput): BillingDurationPropertyInput => objectSchemaOrgValueNode(value);

export type BillingIncrementPropertyInput = Record<string, unknown>;
export const billingIncrementPropertyNode = (value: BillingIncrementPropertyInput): BillingIncrementPropertyInput => objectSchemaOrgValueNode(value);

export type BillingStartPropertyInput = Record<string, unknown>;
export const billingStartPropertyNode = (value: BillingStartPropertyInput): BillingStartPropertyInput => objectSchemaOrgValueNode(value);

export type BioChemInteractionPropertyInput = Record<string, unknown>;
export const bioChemInteractionPropertyNode = (value: BioChemInteractionPropertyInput): BioChemInteractionPropertyInput => objectSchemaOrgValueNode(value);

export type BioChemSimilarityPropertyInput = Record<string, unknown>;
export const bioChemSimilarityPropertyNode = (value: BioChemSimilarityPropertyInput): BioChemSimilarityPropertyInput => objectSchemaOrgValueNode(value);

export type BiologicalRolePropertyInput = Record<string, unknown>;
export const biologicalRolePropertyNode = (value: BiologicalRolePropertyInput): BiologicalRolePropertyInput => objectSchemaOrgValueNode(value);

export type BirthDatePropertyInput = Record<string, unknown>;
export const birthDatePropertyNode = (value: BirthDatePropertyInput): BirthDatePropertyInput => objectSchemaOrgValueNode(value);

export type BirthPlacePropertyInput = Record<string, unknown>;
export const birthPlacePropertyNode = (value: BirthPlacePropertyInput): BirthPlacePropertyInput => objectSchemaOrgValueNode(value);

export type BitratePropertyInput = Record<string, unknown>;
export const bitratePropertyNode = (value: BitratePropertyInput): BitratePropertyInput => objectSchemaOrgValueNode(value);

export type BodyLocationPropertyInput = Record<string, unknown>;
export const bodyLocationPropertyNode = (value: BodyLocationPropertyInput): BodyLocationPropertyInput => objectSchemaOrgValueNode(value);

export type BoxPropertyInput = Record<string, unknown>;
export const boxPropertyNode = (value: BoxPropertyInput): BoxPropertyInput => objectSchemaOrgValueNode(value);

export type BranchCodePropertyInput = Record<string, unknown>;
export const branchCodePropertyNode = (value: BranchCodePropertyInput): BranchCodePropertyInput => objectSchemaOrgValueNode(value);

export type BrandPropertyInput = Record<string, unknown>;
export const brandPropertyNode = (value: BrandPropertyInput): BrandPropertyInput => objectSchemaOrgValueNode(value);

export type BreadcrumbPropertyInput = Record<string, unknown>;
export const breadcrumbPropertyNode = (value: BreadcrumbPropertyInput): BreadcrumbPropertyInput => objectSchemaOrgValueNode(value);

export type BreastfeedingWarningPropertyInput = Record<string, unknown>;
export const breastfeedingWarningPropertyNode = (value: BreastfeedingWarningPropertyInput): BreastfeedingWarningPropertyInput => objectSchemaOrgValueNode(value);

export type BroadcastAffiliateOfPropertyInput = Record<string, unknown>;
export const broadcastAffiliateOfPropertyNode = (value: BroadcastAffiliateOfPropertyInput): BroadcastAffiliateOfPropertyInput => objectSchemaOrgValueNode(value);

export type BroadcastChannelIdPropertyInput = Record<string, unknown>;
export const broadcastChannelIdPropertyNode = (value: BroadcastChannelIdPropertyInput): BroadcastChannelIdPropertyInput => objectSchemaOrgValueNode(value);

export type BroadcastDisplayNamePropertyInput = Record<string, unknown>;
export const broadcastDisplayNamePropertyNode = (value: BroadcastDisplayNamePropertyInput): BroadcastDisplayNamePropertyInput => objectSchemaOrgValueNode(value);

export type BroadcasterPropertyInput = Record<string, unknown>;
export const broadcasterPropertyNode = (value: BroadcasterPropertyInput): BroadcasterPropertyInput => objectSchemaOrgValueNode(value);

export type BroadcastFrequencyPropertyInput = Record<string, unknown>;
export const broadcastFrequencyPropertyNode = (value: BroadcastFrequencyPropertyInput): BroadcastFrequencyPropertyInput => objectSchemaOrgValueNode(value);

export type BroadcastFrequencyValuePropertyInput = Record<string, unknown>;
export const broadcastFrequencyValuePropertyNode = (value: BroadcastFrequencyValuePropertyInput): BroadcastFrequencyValuePropertyInput => objectSchemaOrgValueNode(value);

export type BroadcastServiceTierPropertyInput = Record<string, unknown>;
export const broadcastServiceTierPropertyNode = (value: BroadcastServiceTierPropertyInput): BroadcastServiceTierPropertyInput => objectSchemaOrgValueNode(value);

export type BroadcastSignalModulationPropertyInput = Record<string, unknown>;
export const broadcastSignalModulationPropertyNode = (value: BroadcastSignalModulationPropertyInput): BroadcastSignalModulationPropertyInput => objectSchemaOrgValueNode(value);

export type BroadcastSubChannelPropertyInput = Record<string, unknown>;
export const broadcastSubChannelPropertyNode = (value: BroadcastSubChannelPropertyInput): BroadcastSubChannelPropertyInput => objectSchemaOrgValueNode(value);

export type BroadcastTimezonePropertyInput = Record<string, unknown>;
export const broadcastTimezonePropertyNode = (value: BroadcastTimezonePropertyInput): BroadcastTimezonePropertyInput => objectSchemaOrgValueNode(value);

export type BrokerPropertyInput = Record<string, unknown>;
export const brokerPropertyNode = (value: BrokerPropertyInput): BrokerPropertyInput => objectSchemaOrgValueNode(value);

export type BusinessDaysPropertyInput = Record<string, unknown>;
export const businessDaysPropertyNode = (value: BusinessDaysPropertyInput): BusinessDaysPropertyInput => objectSchemaOrgValueNode(value);

export type BusinessFunctionPropertyInput = Record<string, unknown>;
export const businessFunctionPropertyNode = (value: BusinessFunctionPropertyInput): BusinessFunctionPropertyInput => objectSchemaOrgValueNode(value);

export type ByArtistPropertyInput = Record<string, unknown>;
export const byArtistPropertyNode = (value: ByArtistPropertyInput): ByArtistPropertyInput => objectSchemaOrgValueNode(value);

export type ByDayPropertyInput = Record<string, unknown>;
export const byDayPropertyNode = (value: ByDayPropertyInput): ByDayPropertyInput => objectSchemaOrgValueNode(value);

export type ByMonthPropertyInput = Record<string, unknown>;
export const byMonthPropertyNode = (value: ByMonthPropertyInput): ByMonthPropertyInput => objectSchemaOrgValueNode(value);

export type ByMonthDayPropertyInput = Record<string, unknown>;
export const byMonthDayPropertyNode = (value: ByMonthDayPropertyInput): ByMonthDayPropertyInput => objectSchemaOrgValueNode(value);

export type ByMonthWeekPropertyInput = Record<string, unknown>;
export const byMonthWeekPropertyNode = (value: ByMonthWeekPropertyInput): ByMonthWeekPropertyInput => objectSchemaOrgValueNode(value);

export type CallSignPropertyInput = Record<string, unknown>;
export const callSignPropertyNode = (value: CallSignPropertyInput): CallSignPropertyInput => objectSchemaOrgValueNode(value);

export type CaloriesPropertyInput = Record<string, unknown>;
export const caloriesPropertyNode = (value: CaloriesPropertyInput): CaloriesPropertyInput => objectSchemaOrgValueNode(value);

export type CaptionPropertyInput = Record<string, unknown>;
export const captionPropertyNode = (value: CaptionPropertyInput): CaptionPropertyInput => objectSchemaOrgValueNode(value);

export type CarbohydrateContentPropertyInput = Record<string, unknown>;
export const carbohydrateContentPropertyNode = (value: CarbohydrateContentPropertyInput): CarbohydrateContentPropertyInput => objectSchemaOrgValueNode(value);

export type CashBackPropertyInput = Record<string, unknown>;
export const cashBackPropertyNode = (value: CashBackPropertyInput): CashBackPropertyInput => objectSchemaOrgValueNode(value);

export type CatalogPropertyInput = Record<string, unknown>;
export const catalogPropertyNode = (value: CatalogPropertyInput): CatalogPropertyInput => objectSchemaOrgValueNode(value);

export type CatalogNumberPropertyInput = Record<string, unknown>;
export const catalogNumberPropertyNode = (value: CatalogNumberPropertyInput): CatalogNumberPropertyInput => objectSchemaOrgValueNode(value);

export type CategoryPropertyInput = Record<string, unknown>;
export const categoryPropertyNode = (value: CategoryPropertyInput): CategoryPropertyInput => objectSchemaOrgValueNode(value);

export type CausePropertyInput = Record<string, unknown>;
export const causePropertyNode = (value: CausePropertyInput): CausePropertyInput => objectSchemaOrgValueNode(value);

export type CauseOfPropertyInput = Record<string, unknown>;
export const causeOfPropertyNode = (value: CauseOfPropertyInput): CauseOfPropertyInput => objectSchemaOrgValueNode(value);

export type CertificationIdentificationPropertyInput = Record<string, unknown>;
export const certificationIdentificationPropertyNode = (value: CertificationIdentificationPropertyInput): CertificationIdentificationPropertyInput => objectSchemaOrgValueNode(value);

export type CertificationRatingPropertyInput = Record<string, unknown>;
export const certificationRatingPropertyNode = (value: CertificationRatingPropertyInput): CertificationRatingPropertyInput => objectSchemaOrgValueNode(value);

export type CertificationStatusPropertyInput = Record<string, unknown>;
export const certificationStatusPropertyNode = (value: CertificationStatusPropertyInput): CertificationStatusPropertyInput => objectSchemaOrgValueNode(value);

export type CharacterPropertyInput = Record<string, unknown>;
export const characterPropertyNode = (value: CharacterPropertyInput): CharacterPropertyInput => objectSchemaOrgValueNode(value);

export type CheckoutPageURLTemplatePropertyInput = Record<string, unknown>;
export const checkoutPageURLTemplatePropertyNode = (value: CheckoutPageURLTemplatePropertyInput): CheckoutPageURLTemplatePropertyInput => objectSchemaOrgValueNode(value);

export type ChildrenPropertyInput = Record<string, unknown>;
export const childrenPropertyNode = (value: ChildrenPropertyInput): ChildrenPropertyInput => objectSchemaOrgValueNode(value);

export type ChildTaxonPropertyInput = Record<string, unknown>;
export const childTaxonPropertyNode = (value: ChildTaxonPropertyInput): ChildTaxonPropertyInput => objectSchemaOrgValueNode(value);

export type CholesterolContentPropertyInput = Record<string, unknown>;
export const cholesterolContentPropertyNode = (value: CholesterolContentPropertyInput): CholesterolContentPropertyInput => objectSchemaOrgValueNode(value);

export type CirclePropertyInput = Record<string, unknown>;
export const circlePropertyNode = (value: CirclePropertyInput): CirclePropertyInput => objectSchemaOrgValueNode(value);

export type CitationPropertyInput = Record<string, unknown>;
export const citationPropertyNode = (value: CitationPropertyInput): CitationPropertyInput => objectSchemaOrgValueNode(value);

export type ClaimInterpreterPropertyInput = Record<string, unknown>;
export const claimInterpreterPropertyNode = (value: ClaimInterpreterPropertyInput): ClaimInterpreterPropertyInput => objectSchemaOrgValueNode(value);

export type ClincalPharmacologyPropertyInput = Record<string, unknown>;
export const clincalPharmacologyPropertyNode = (value: ClincalPharmacologyPropertyInput): ClincalPharmacologyPropertyInput => objectSchemaOrgValueNode(value);

export type ClinicalPharmacologyPropertyInput = Record<string, unknown>;
export const clinicalPharmacologyPropertyNode = (value: ClinicalPharmacologyPropertyInput): ClinicalPharmacologyPropertyInput => objectSchemaOrgValueNode(value);

export type ClipNumberPropertyInput = Record<string, unknown>;
export const clipNumberPropertyNode = (value: ClipNumberPropertyInput): ClipNumberPropertyInput => objectSchemaOrgValueNode(value);

export type ClosesPropertyInput = Record<string, unknown>;
export const closesPropertyNode = (value: ClosesPropertyInput): ClosesPropertyInput => objectSchemaOrgValueNode(value);

export type CodePropertyInput = Record<string, unknown>;
export const codePropertyNode = (value: CodePropertyInput): CodePropertyInput => objectSchemaOrgValueNode(value);

export type CodeValuePropertyInput = Record<string, unknown>;
export const codeValuePropertyNode = (value: CodeValuePropertyInput): CodeValuePropertyInput => objectSchemaOrgValueNode(value);

export type CodingSystemPropertyInput = Record<string, unknown>;
export const codingSystemPropertyNode = (value: CodingSystemPropertyInput): CodingSystemPropertyInput => objectSchemaOrgValueNode(value);

export type ColleaguePropertyInput = Record<string, unknown>;
export const colleaguePropertyNode = (value: ColleaguePropertyInput): ColleaguePropertyInput => objectSchemaOrgValueNode(value);

export type ColleaguesPropertyInput = Record<string, unknown>;
export const colleaguesPropertyNode = (value: ColleaguesPropertyInput): ColleaguesPropertyInput => objectSchemaOrgValueNode(value);

export type ColorPropertyInput = Record<string, unknown>;
export const colorPropertyNode = (value: ColorPropertyInput): ColorPropertyInput => objectSchemaOrgValueNode(value);

export type ColorSwatchPropertyInput = Record<string, unknown>;
export const colorSwatchPropertyNode = (value: ColorSwatchPropertyInput): ColorSwatchPropertyInput => objectSchemaOrgValueNode(value);

export type CommentPropertyInput = Record<string, unknown>;
export const commentPropertyNode = (value: CommentPropertyInput): CommentPropertyInput => objectSchemaOrgValueNode(value);

export type CommentCountPropertyInput = Record<string, unknown>;
export const commentCountPropertyNode = (value: CommentCountPropertyInput): CommentCountPropertyInput => objectSchemaOrgValueNode(value);

export type CompanyRegistrationPropertyInput = Record<string, unknown>;
export const companyRegistrationPropertyNode = (value: CompanyRegistrationPropertyInput): CompanyRegistrationPropertyInput => objectSchemaOrgValueNode(value);

export type CompetencyRequiredPropertyInput = Record<string, unknown>;
export const competencyRequiredPropertyNode = (value: CompetencyRequiredPropertyInput): CompetencyRequiredPropertyInput => objectSchemaOrgValueNode(value);

export type ComposerPropertyInput = Record<string, unknown>;
export const composerPropertyNode = (value: ComposerPropertyInput): ComposerPropertyInput => objectSchemaOrgValueNode(value);

export type ComprisedOfPropertyInput = Record<string, unknown>;
export const comprisedOfPropertyNode = (value: ComprisedOfPropertyInput): ComprisedOfPropertyInput => objectSchemaOrgValueNode(value);

export type ConditionsOfAccessPropertyInput = Record<string, unknown>;
export const conditionsOfAccessPropertyNode = (value: ConditionsOfAccessPropertyInput): ConditionsOfAccessPropertyInput => objectSchemaOrgValueNode(value);

export type ConnectedToPropertyInput = Record<string, unknown>;
export const connectedToPropertyNode = (value: ConnectedToPropertyInput): ConnectedToPropertyInput => objectSchemaOrgValueNode(value);

export type ConstraintPropertyPropertyInput = Record<string, unknown>;
export const constraintPropertyPropertyNode = (value: ConstraintPropertyPropertyInput): ConstraintPropertyPropertyInput => objectSchemaOrgValueNode(value);

export type ContactlessPaymentPropertyInput = Record<string, unknown>;
export const contactlessPaymentPropertyNode = (value: ContactlessPaymentPropertyInput): ContactlessPaymentPropertyInput => objectSchemaOrgValueNode(value);

export type ContactOptionPropertyInput = Record<string, unknown>;
export const contactOptionPropertyNode = (value: ContactOptionPropertyInput): ContactOptionPropertyInput => objectSchemaOrgValueNode(value);

export type ContactPointPropertyInput = Record<string, unknown>;
export const contactPointPropertyNode = (value: ContactPointPropertyInput): ContactPointPropertyInput => objectSchemaOrgValueNode(value);

export type ContactPointsPropertyInput = Record<string, unknown>;
export const contactPointsPropertyNode = (value: ContactPointsPropertyInput): ContactPointsPropertyInput => objectSchemaOrgValueNode(value);

export type ContactTypePropertyInput = Record<string, unknown>;
export const contactTypePropertyNode = (value: ContactTypePropertyInput): ContactTypePropertyInput => objectSchemaOrgValueNode(value);

export type ContainedInPropertyInput = Record<string, unknown>;
export const containedInPropertyNode = (value: ContainedInPropertyInput): ContainedInPropertyInput => objectSchemaOrgValueNode(value);

export type ContainedInPlacePropertyInput = Record<string, unknown>;
export const containedInPlacePropertyNode = (value: ContainedInPlacePropertyInput): ContainedInPlacePropertyInput => objectSchemaOrgValueNode(value);

export type ContainsPlacePropertyInput = Record<string, unknown>;
export const containsPlacePropertyNode = (value: ContainsPlacePropertyInput): ContainsPlacePropertyInput => objectSchemaOrgValueNode(value);

export type ContentLocationPropertyInput = Record<string, unknown>;
export const contentLocationPropertyNode = (value: ContentLocationPropertyInput): ContentLocationPropertyInput => objectSchemaOrgValueNode(value);

export type ContentRatingPropertyInput = Record<string, unknown>;
export const contentRatingPropertyNode = (value: ContentRatingPropertyInput): ContentRatingPropertyInput => objectSchemaOrgValueNode(value);

export type ContentReferenceTimePropertyInput = Record<string, unknown>;
export const contentReferenceTimePropertyNode = (value: ContentReferenceTimePropertyInput): ContentReferenceTimePropertyInput => objectSchemaOrgValueNode(value);

export type ContentSizePropertyInput = Record<string, unknown>;
export const contentSizePropertyNode = (value: ContentSizePropertyInput): ContentSizePropertyInput => objectSchemaOrgValueNode(value);

export type ContentTypePropertyInput = Record<string, unknown>;
export const contentTypePropertyNode = (value: ContentTypePropertyInput): ContentTypePropertyInput => objectSchemaOrgValueNode(value);

export type ContentUrlPropertyInput = Record<string, unknown>;
export const contentUrlPropertyNode = (value: ContentUrlPropertyInput): ContentUrlPropertyInput => objectSchemaOrgValueNode(value);

export type ContraindicationPropertyInput = Record<string, unknown>;
export const contraindicationPropertyNode = (value: ContraindicationPropertyInput): ContraindicationPropertyInput => objectSchemaOrgValueNode(value);

export type ContributorPropertyInput = Record<string, unknown>;
export const contributorPropertyNode = (value: ContributorPropertyInput): ContributorPropertyInput => objectSchemaOrgValueNode(value);

export type CopyrightHolderPropertyInput = Record<string, unknown>;
export const copyrightHolderPropertyNode = (value: CopyrightHolderPropertyInput): CopyrightHolderPropertyInput => objectSchemaOrgValueNode(value);

export type CopyrightNoticePropertyInput = Record<string, unknown>;
export const copyrightNoticePropertyNode = (value: CopyrightNoticePropertyInput): CopyrightNoticePropertyInput => objectSchemaOrgValueNode(value);

export type CopyrightYearPropertyInput = Record<string, unknown>;
export const copyrightYearPropertyNode = (value: CopyrightYearPropertyInput): CopyrightYearPropertyInput => objectSchemaOrgValueNode(value);

export type CorrectionPropertyInput = Record<string, unknown>;
export const correctionPropertyNode = (value: CorrectionPropertyInput): CorrectionPropertyInput => objectSchemaOrgValueNode(value);

export type CorrectionsPolicyPropertyInput = Record<string, unknown>;
export const correctionsPolicyPropertyNode = (value: CorrectionsPolicyPropertyInput): CorrectionsPolicyPropertyInput => objectSchemaOrgValueNode(value);

export type CountriesNotSupportedPropertyInput = Record<string, unknown>;
export const countriesNotSupportedPropertyNode = (value: CountriesNotSupportedPropertyInput): CountriesNotSupportedPropertyInput => objectSchemaOrgValueNode(value);

export type CountriesSupportedPropertyInput = Record<string, unknown>;
export const countriesSupportedPropertyNode = (value: CountriesSupportedPropertyInput): CountriesSupportedPropertyInput => objectSchemaOrgValueNode(value);

export type CountryOfAssemblyPropertyInput = Record<string, unknown>;
export const countryOfAssemblyPropertyNode = (value: CountryOfAssemblyPropertyInput): CountryOfAssemblyPropertyInput => objectSchemaOrgValueNode(value);

export type CountryOfLastProcessingPropertyInput = Record<string, unknown>;
export const countryOfLastProcessingPropertyNode = (value: CountryOfLastProcessingPropertyInput): CountryOfLastProcessingPropertyInput => objectSchemaOrgValueNode(value);

export type CountryOfOriginPropertyInput = Record<string, unknown>;
export const countryOfOriginPropertyNode = (value: CountryOfOriginPropertyInput): CountryOfOriginPropertyInput => objectSchemaOrgValueNode(value);

export type CreativeWorkStatusPropertyInput = Record<string, unknown>;
export const creativeWorkStatusPropertyNode = (value: CreativeWorkStatusPropertyInput): CreativeWorkStatusPropertyInput => objectSchemaOrgValueNode(value);

export type CreatorPropertyInput = Record<string, unknown>;
export const creatorPropertyNode = (value: CreatorPropertyInput): CreatorPropertyInput => objectSchemaOrgValueNode(value);

export type CredentialCategoryPropertyInput = Record<string, unknown>;
export const credentialCategoryPropertyNode = (value: CredentialCategoryPropertyInput): CredentialCategoryPropertyInput => objectSchemaOrgValueNode(value);

export type CreditedToPropertyInput = Record<string, unknown>;
export const creditedToPropertyNode = (value: CreditedToPropertyInput): CreditedToPropertyInput => objectSchemaOrgValueNode(value);

export type CreditTextPropertyInput = Record<string, unknown>;
export const creditTextPropertyNode = (value: CreditTextPropertyInput): CreditTextPropertyInput => objectSchemaOrgValueNode(value);

export type CssSelectorPropertyInput = Record<string, unknown>;
export const cssSelectorPropertyNode = (value: CssSelectorPropertyInput): CssSelectorPropertyInput => objectSchemaOrgValueNode(value);

export type CurrencyPropertyInput = Record<string, unknown>;
export const currencyPropertyNode = (value: CurrencyPropertyInput): CurrencyPropertyInput => objectSchemaOrgValueNode(value);

export type CustomerRemorseReturnFeesPropertyInput = Record<string, unknown>;
export const customerRemorseReturnFeesPropertyNode = (value: CustomerRemorseReturnFeesPropertyInput): CustomerRemorseReturnFeesPropertyInput => objectSchemaOrgValueNode(value);

export type CustomerRemorseReturnLabelSourcePropertyInput = Record<string, unknown>;
export const customerRemorseReturnLabelSourcePropertyNode = (value: CustomerRemorseReturnLabelSourcePropertyInput): CustomerRemorseReturnLabelSourcePropertyInput => objectSchemaOrgValueNode(value);

export type CustomerRemorseReturnShippingFeesAmountPropertyInput = Record<string, unknown>;
export const customerRemorseReturnShippingFeesAmountPropertyNode = (value: CustomerRemorseReturnShippingFeesAmountPropertyInput): CustomerRemorseReturnShippingFeesAmountPropertyInput => objectSchemaOrgValueNode(value);

export type CutoffTimePropertyInput = Record<string, unknown>;
export const cutoffTimePropertyNode = (value: CutoffTimePropertyInput): CutoffTimePropertyInput => objectSchemaOrgValueNode(value);

export type DataFeedElementPropertyInput = Record<string, unknown>;
export const dataFeedElementPropertyNode = (value: DataFeedElementPropertyInput): DataFeedElementPropertyInput => objectSchemaOrgValueNode(value);

export type DatasetPropertyInput = Record<string, unknown>;
export const datasetPropertyNode = (value: DatasetPropertyInput): DatasetPropertyInput => objectSchemaOrgValueNode(value);

export type DatasetTimeIntervalPropertyInput = Record<string, unknown>;
export const datasetTimeIntervalPropertyNode = (value: DatasetTimeIntervalPropertyInput): DatasetTimeIntervalPropertyInput => objectSchemaOrgValueNode(value);

export type DateCreatedPropertyInput = Record<string, unknown>;
export const dateCreatedPropertyNode = (value: DateCreatedPropertyInput): DateCreatedPropertyInput => objectSchemaOrgValueNode(value);

export type DateDeletedPropertyInput = Record<string, unknown>;
export const dateDeletedPropertyNode = (value: DateDeletedPropertyInput): DateDeletedPropertyInput => objectSchemaOrgValueNode(value);

export type DatelinePropertyInput = Record<string, unknown>;
export const datelinePropertyNode = (value: DatelinePropertyInput): DatelinePropertyInput => objectSchemaOrgValueNode(value);

export type DateModifiedPropertyInput = Record<string, unknown>;
export const dateModifiedPropertyNode = (value: DateModifiedPropertyInput): DateModifiedPropertyInput => objectSchemaOrgValueNode(value);

export type DatePostedPropertyInput = Record<string, unknown>;
export const datePostedPropertyNode = (value: DatePostedPropertyInput): DatePostedPropertyInput => objectSchemaOrgValueNode(value);

export type DatePublishedPropertyInput = Record<string, unknown>;
export const datePublishedPropertyNode = (value: DatePublishedPropertyInput): DatePublishedPropertyInput => objectSchemaOrgValueNode(value);

export type DayOfWeekPropertyInput = Record<string, unknown>;
export const dayOfWeekPropertyNode = (value: DayOfWeekPropertyInput): DayOfWeekPropertyInput => objectSchemaOrgValueNode(value);

export type DeathDatePropertyInput = Record<string, unknown>;
export const deathDatePropertyNode = (value: DeathDatePropertyInput): DeathDatePropertyInput => objectSchemaOrgValueNode(value);

export type DeathPlacePropertyInput = Record<string, unknown>;
export const deathPlacePropertyNode = (value: DeathPlacePropertyInput): DeathPlacePropertyInput => objectSchemaOrgValueNode(value);

export type DeliveryLeadTimePropertyInput = Record<string, unknown>;
export const deliveryLeadTimePropertyNode = (value: DeliveryLeadTimePropertyInput): DeliveryLeadTimePropertyInput => objectSchemaOrgValueNode(value);

export type DeliveryTimePropertyInput = Record<string, unknown>;
export const deliveryTimePropertyNode = (value: DeliveryTimePropertyInput): DeliveryTimePropertyInput => objectSchemaOrgValueNode(value);

export type DepartmentPropertyInput = Record<string, unknown>;
export const departmentPropertyNode = (value: DepartmentPropertyInput): DepartmentPropertyInput => objectSchemaOrgValueNode(value);

export type DepartureTimePropertyInput = Record<string, unknown>;
export const departureTimePropertyNode = (value: DepartureTimePropertyInput): DepartureTimePropertyInput => objectSchemaOrgValueNode(value);

export type DepthPropertyInput = Record<string, unknown>;
export const depthPropertyNode = (value: DepthPropertyInput): DepthPropertyInput => objectSchemaOrgValueNode(value);

export type DescriptionPropertyInput = Record<string, unknown>;
export const descriptionPropertyNode = (value: DescriptionPropertyInput): DescriptionPropertyInput => objectSchemaOrgValueNode(value);

export type DevicePropertyInput = Record<string, unknown>;
export const devicePropertyNode = (value: DevicePropertyInput): DevicePropertyInput => objectSchemaOrgValueNode(value);

export type DiagnosisPropertyInput = Record<string, unknown>;
export const diagnosisPropertyNode = (value: DiagnosisPropertyInput): DiagnosisPropertyInput => objectSchemaOrgValueNode(value);

export type DiagramPropertyInput = Record<string, unknown>;
export const diagramPropertyNode = (value: DiagramPropertyInput): DiagramPropertyInput => objectSchemaOrgValueNode(value);

export type DietFeaturesPropertyInput = Record<string, unknown>;
export const dietFeaturesPropertyNode = (value: DietFeaturesPropertyInput): DietFeaturesPropertyInput => objectSchemaOrgValueNode(value);

export type DifferentialDiagnosisPropertyInput = Record<string, unknown>;
export const differentialDiagnosisPropertyNode = (value: DifferentialDiagnosisPropertyInput): DifferentialDiagnosisPropertyInput => objectSchemaOrgValueNode(value);

export type DigitalSourceTypePropertyInput = Record<string, unknown>;
export const digitalSourceTypePropertyNode = (value: DigitalSourceTypePropertyInput): DigitalSourceTypePropertyInput => objectSchemaOrgValueNode(value);

export type DirectorPropertyInput = Record<string, unknown>;
export const directorPropertyNode = (value: DirectorPropertyInput): DirectorPropertyInput => objectSchemaOrgValueNode(value);

export type DirectorsPropertyInput = Record<string, unknown>;
export const directorsPropertyNode = (value: DirectorsPropertyInput): DirectorsPropertyInput => objectSchemaOrgValueNode(value);

export type DisambiguatingDescriptionPropertyInput = Record<string, unknown>;
export const disambiguatingDescriptionPropertyNode = (value: DisambiguatingDescriptionPropertyInput): DisambiguatingDescriptionPropertyInput => objectSchemaOrgValueNode(value);

export type DiscussionUrlPropertyInput = Record<string, unknown>;
export const discussionUrlPropertyNode = (value: DiscussionUrlPropertyInput): DiscussionUrlPropertyInput => objectSchemaOrgValueNode(value);

export type DisplayLocationPropertyInput = Record<string, unknown>;
export const displayLocationPropertyNode = (value: DisplayLocationPropertyInput): DisplayLocationPropertyInput => objectSchemaOrgValueNode(value);

export type DissolutionDatePropertyInput = Record<string, unknown>;
export const dissolutionDatePropertyNode = (value: DissolutionDatePropertyInput): DissolutionDatePropertyInput => objectSchemaOrgValueNode(value);

export type DistinguishingSignPropertyInput = Record<string, unknown>;
export const distinguishingSignPropertyNode = (value: DistinguishingSignPropertyInput): DistinguishingSignPropertyInput => objectSchemaOrgValueNode(value);

export type DistributionPropertyInput = Record<string, unknown>;
export const distributionPropertyNode = (value: DistributionPropertyInput): DistributionPropertyInput => objectSchemaOrgValueNode(value);

export type DiversityPolicyPropertyInput = Record<string, unknown>;
export const diversityPolicyPropertyNode = (value: DiversityPolicyPropertyInput): DiversityPolicyPropertyInput => objectSchemaOrgValueNode(value);

export type DiversityStaffingReportPropertyInput = Record<string, unknown>;
export const diversityStaffingReportPropertyNode = (value: DiversityStaffingReportPropertyInput): DiversityStaffingReportPropertyInput => objectSchemaOrgValueNode(value);

export type DoesNotShipPropertyInput = Record<string, unknown>;
export const doesNotShipPropertyNode = (value: DoesNotShipPropertyInput): DoesNotShipPropertyInput => objectSchemaOrgValueNode(value);

export type DomainIncludesPropertyInput = Record<string, unknown>;
export const domainIncludesPropertyNode = (value: DomainIncludesPropertyInput): DomainIncludesPropertyInput => objectSchemaOrgValueNode(value);

export type DoorTimePropertyInput = Record<string, unknown>;
export const doorTimePropertyNode = (value: DoorTimePropertyInput): DoorTimePropertyInput => objectSchemaOrgValueNode(value);

export type DosageFormPropertyInput = Record<string, unknown>;
export const dosageFormPropertyNode = (value: DosageFormPropertyInput): DosageFormPropertyInput => objectSchemaOrgValueNode(value);

export type DoseSchedulePropertyInput = Record<string, unknown>;
export const doseSchedulePropertyNode = (value: DoseSchedulePropertyInput): DoseSchedulePropertyInput => objectSchemaOrgValueNode(value);

export type DoseUnitPropertyInput = Record<string, unknown>;
export const doseUnitPropertyNode = (value: DoseUnitPropertyInput): DoseUnitPropertyInput => objectSchemaOrgValueNode(value);

export type DoseValuePropertyInput = Record<string, unknown>;
export const doseValuePropertyNode = (value: DoseValuePropertyInput): DoseValuePropertyInput => objectSchemaOrgValueNode(value);

export type DownloadUrlPropertyInput = Record<string, unknown>;
export const downloadUrlPropertyNode = (value: DownloadUrlPropertyInput): DownloadUrlPropertyInput => objectSchemaOrgValueNode(value);

export type DownPaymentPropertyInput = Record<string, unknown>;
export const downPaymentPropertyNode = (value: DownPaymentPropertyInput): DownPaymentPropertyInput => objectSchemaOrgValueNode(value);

export type DownvoteCountPropertyInput = Record<string, unknown>;
export const downvoteCountPropertyNode = (value: DownvoteCountPropertyInput): DownvoteCountPropertyInput => objectSchemaOrgValueNode(value);

export type DrugPropertyInput = Record<string, unknown>;
export const drugPropertyNode = (value: DrugPropertyInput): DrugPropertyInput => objectSchemaOrgValueNode(value);

export type DrugClassPropertyInput = Record<string, unknown>;
export const drugClassPropertyNode = (value: DrugClassPropertyInput): DrugClassPropertyInput => objectSchemaOrgValueNode(value);

export type DrugUnitPropertyInput = Record<string, unknown>;
export const drugUnitPropertyNode = (value: DrugUnitPropertyInput): DrugUnitPropertyInput => objectSchemaOrgValueNode(value);

export type DunsPropertyInput = Record<string, unknown>;
export const dunsPropertyNode = (value: DunsPropertyInput): DunsPropertyInput => objectSchemaOrgValueNode(value);

export type DuplicateTherapyPropertyInput = Record<string, unknown>;
export const duplicateTherapyPropertyNode = (value: DuplicateTherapyPropertyInput): DuplicateTherapyPropertyInput => objectSchemaOrgValueNode(value);

export type DurationPropertyInput = Record<string, unknown>;
export const durationPropertyNode = (value: DurationPropertyInput): DurationPropertyInput => objectSchemaOrgValueNode(value);

export type DurationOfWarrantyPropertyInput = Record<string, unknown>;
export const durationOfWarrantyPropertyNode = (value: DurationOfWarrantyPropertyInput): DurationOfWarrantyPropertyInput => objectSchemaOrgValueNode(value);

export type EarlyPrepaymentPenaltyPropertyInput = Record<string, unknown>;
export const earlyPrepaymentPenaltyPropertyNode = (value: EarlyPrepaymentPenaltyPropertyInput): EarlyPrepaymentPenaltyPropertyInput => objectSchemaOrgValueNode(value);

export type EditEIDRPropertyInput = Record<string, unknown>;
export const editEIDRPropertyNode = (value: EditEIDRPropertyInput): EditEIDRPropertyInput => objectSchemaOrgValueNode(value);

export type EditorPropertyInput = Record<string, unknown>;
export const editorPropertyNode = (value: EditorPropertyInput): EditorPropertyInput => objectSchemaOrgValueNode(value);

export type EducationalAlignmentPropertyInput = Record<string, unknown>;
export const educationalAlignmentPropertyNode = (value: EducationalAlignmentPropertyInput): EducationalAlignmentPropertyInput => objectSchemaOrgValueNode(value);

export type EducationalFrameworkPropertyInput = Record<string, unknown>;
export const educationalFrameworkPropertyNode = (value: EducationalFrameworkPropertyInput): EducationalFrameworkPropertyInput => objectSchemaOrgValueNode(value);

export type EducationalLevelPropertyInput = Record<string, unknown>;
export const educationalLevelPropertyNode = (value: EducationalLevelPropertyInput): EducationalLevelPropertyInput => objectSchemaOrgValueNode(value);

export type EducationalUsePropertyInput = Record<string, unknown>;
export const educationalUsePropertyNode = (value: EducationalUsePropertyInput): EducationalUsePropertyInput => objectSchemaOrgValueNode(value);

export type EducationRequirementsPropertyInput = Record<string, unknown>;
export const educationRequirementsPropertyNode = (value: EducationRequirementsPropertyInput): EducationRequirementsPropertyInput => objectSchemaOrgValueNode(value);

export type ElevationPropertyInput = Record<string, unknown>;
export const elevationPropertyNode = (value: ElevationPropertyInput): ElevationPropertyInput => objectSchemaOrgValueNode(value);

export type EligibleCustomerTypePropertyInput = Record<string, unknown>;
export const eligibleCustomerTypePropertyNode = (value: EligibleCustomerTypePropertyInput): EligibleCustomerTypePropertyInput => objectSchemaOrgValueNode(value);

export type EligibleDurationPropertyInput = Record<string, unknown>;
export const eligibleDurationPropertyNode = (value: EligibleDurationPropertyInput): EligibleDurationPropertyInput => objectSchemaOrgValueNode(value);

export type EligibleQuantityPropertyInput = Record<string, unknown>;
export const eligibleQuantityPropertyNode = (value: EligibleQuantityPropertyInput): EligibleQuantityPropertyInput => objectSchemaOrgValueNode(value);

export type EligibleRegionPropertyInput = Record<string, unknown>;
export const eligibleRegionPropertyNode = (value: EligibleRegionPropertyInput): EligibleRegionPropertyInput => objectSchemaOrgValueNode(value);

export type EligibleTransactionVolumePropertyInput = Record<string, unknown>;
export const eligibleTransactionVolumePropertyNode = (value: EligibleTransactionVolumePropertyInput): EligibleTransactionVolumePropertyInput => objectSchemaOrgValueNode(value);

export type EmailPropertyInput = Record<string, unknown>;
export const emailPropertyNode = (value: EmailPropertyInput): EmailPropertyInput => objectSchemaOrgValueNode(value);

export type EmbeddedTextCaptionPropertyInput = Record<string, unknown>;
export const embeddedTextCaptionPropertyNode = (value: EmbeddedTextCaptionPropertyInput): EmbeddedTextCaptionPropertyInput => objectSchemaOrgValueNode(value);

export type EmbedUrlPropertyInput = Record<string, unknown>;
export const embedUrlPropertyNode = (value: EmbedUrlPropertyInput): EmbedUrlPropertyInput => objectSchemaOrgValueNode(value);

export type EmployeePropertyInput = Record<string, unknown>;
export const employeePropertyNode = (value: EmployeePropertyInput): EmployeePropertyInput => objectSchemaOrgValueNode(value);

export type EmployeesPropertyInput = Record<string, unknown>;
export const employeesPropertyNode = (value: EmployeesPropertyInput): EmployeesPropertyInput => objectSchemaOrgValueNode(value);

export type EncodesBioChemEntityPropertyInput = Record<string, unknown>;
export const encodesBioChemEntityPropertyNode = (value: EncodesBioChemEntityPropertyInput): EncodesBioChemEntityPropertyInput => objectSchemaOrgValueNode(value);

export type EncodesCreativeWorkPropertyInput = Record<string, unknown>;
export const encodesCreativeWorkPropertyNode = (value: EncodesCreativeWorkPropertyInput): EncodesCreativeWorkPropertyInput => objectSchemaOrgValueNode(value);

export type EncodingPropertyInput = Record<string, unknown>;
export const encodingPropertyNode = (value: EncodingPropertyInput): EncodingPropertyInput => objectSchemaOrgValueNode(value);

export type EncodingFormatPropertyInput = Record<string, unknown>;
export const encodingFormatPropertyNode = (value: EncodingFormatPropertyInput): EncodingFormatPropertyInput => objectSchemaOrgValueNode(value);

export type EncodingsPropertyInput = Record<string, unknown>;
export const encodingsPropertyNode = (value: EncodingsPropertyInput): EncodingsPropertyInput => objectSchemaOrgValueNode(value);

export type EncodingTypePropertyInput = Record<string, unknown>;
export const encodingTypePropertyNode = (value: EncodingTypePropertyInput): EncodingTypePropertyInput => objectSchemaOrgValueNode(value);

export type EndDatePropertyInput = Record<string, unknown>;
export const endDatePropertyNode = (value: EndDatePropertyInput): EndDatePropertyInput => objectSchemaOrgValueNode(value);

export type EndOffsetPropertyInput = Record<string, unknown>;
export const endOffsetPropertyNode = (value: EndOffsetPropertyInput): EndOffsetPropertyInput => objectSchemaOrgValueNode(value);

export type EndorsersPropertyInput = Record<string, unknown>;
export const endorsersPropertyNode = (value: EndorsersPropertyInput): EndorsersPropertyInput => objectSchemaOrgValueNode(value);

export type EndTimePropertyInput = Record<string, unknown>;
export const endTimePropertyNode = (value: EndTimePropertyInput): EndTimePropertyInput => objectSchemaOrgValueNode(value);

export type EnergyEfficiencyScaleMaxPropertyInput = Record<string, unknown>;
export const energyEfficiencyScaleMaxPropertyNode = (value: EnergyEfficiencyScaleMaxPropertyInput): EnergyEfficiencyScaleMaxPropertyInput => objectSchemaOrgValueNode(value);

export type EnergyEfficiencyScaleMinPropertyInput = Record<string, unknown>;
export const energyEfficiencyScaleMinPropertyNode = (value: EnergyEfficiencyScaleMinPropertyInput): EnergyEfficiencyScaleMinPropertyInput => objectSchemaOrgValueNode(value);

export type EpidemiologyPropertyInput = Record<string, unknown>;
export const epidemiologyPropertyNode = (value: EpidemiologyPropertyInput): EpidemiologyPropertyInput => objectSchemaOrgValueNode(value);

export type EpisodePropertyInput = Record<string, unknown>;
export const episodePropertyNode = (value: EpisodePropertyInput): EpisodePropertyInput => objectSchemaOrgValueNode(value);

export type EpisodeNumberPropertyInput = Record<string, unknown>;
export const episodeNumberPropertyNode = (value: EpisodeNumberPropertyInput): EpisodeNumberPropertyInput => objectSchemaOrgValueNode(value);

export type EpisodesPropertyInput = Record<string, unknown>;
export const episodesPropertyNode = (value: EpisodesPropertyInput): EpisodesPropertyInput => objectSchemaOrgValueNode(value);

export type ErrorPropertyInput = Record<string, unknown>;
export const errorPropertyNode = (value: ErrorPropertyInput): ErrorPropertyInput => objectSchemaOrgValueNode(value);

export type EstimatedCostPropertyInput = Record<string, unknown>;
export const estimatedCostPropertyNode = (value: EstimatedCostPropertyInput): EstimatedCostPropertyInput => objectSchemaOrgValueNode(value);

export type EstimatedSalaryPropertyInput = Record<string, unknown>;
export const estimatedSalaryPropertyNode = (value: EstimatedSalaryPropertyInput): EstimatedSalaryPropertyInput => objectSchemaOrgValueNode(value);

export type EthicsPolicyPropertyInput = Record<string, unknown>;
export const ethicsPolicyPropertyNode = (value: EthicsPolicyPropertyInput): EthicsPolicyPropertyInput => objectSchemaOrgValueNode(value);

export type EventPropertyInput = Record<string, unknown>;
export const eventPropertyNode = (value: EventPropertyInput): EventPropertyInput => objectSchemaOrgValueNode(value);

export type EventAttendanceModePropertyInput = Record<string, unknown>;
export const eventAttendanceModePropertyNode = (value: EventAttendanceModePropertyInput): EventAttendanceModePropertyInput => objectSchemaOrgValueNode(value);

export type EventsPropertyInput = Record<string, unknown>;
export const eventsPropertyNode = (value: EventsPropertyInput): EventsPropertyInput => objectSchemaOrgValueNode(value);

export type EventSchedulePropertyInput = Record<string, unknown>;
export const eventSchedulePropertyNode = (value: EventSchedulePropertyInput): EventSchedulePropertyInput => objectSchemaOrgValueNode(value);

export type EventStatusPropertyInput = Record<string, unknown>;
export const eventStatusPropertyNode = (value: EventStatusPropertyInput): EventStatusPropertyInput => objectSchemaOrgValueNode(value);

export type EvidenceLevelPropertyInput = Record<string, unknown>;
export const evidenceLevelPropertyNode = (value: EvidenceLevelPropertyInput): EvidenceLevelPropertyInput => objectSchemaOrgValueNode(value);

export type EvidenceOriginPropertyInput = Record<string, unknown>;
export const evidenceOriginPropertyNode = (value: EvidenceOriginPropertyInput): EvidenceOriginPropertyInput => objectSchemaOrgValueNode(value);

export type ExampleOfWorkPropertyInput = Record<string, unknown>;
export const exampleOfWorkPropertyNode = (value: ExampleOfWorkPropertyInput): ExampleOfWorkPropertyInput => objectSchemaOrgValueNode(value);

export type ExceptDatePropertyInput = Record<string, unknown>;
export const exceptDatePropertyNode = (value: ExceptDatePropertyInput): ExceptDatePropertyInput => objectSchemaOrgValueNode(value);

export type ExifDataPropertyInput = Record<string, unknown>;
export const exifDataPropertyNode = (value: ExifDataPropertyInput): ExifDataPropertyInput => objectSchemaOrgValueNode(value);

export type ExpectedPrognosisPropertyInput = Record<string, unknown>;
export const expectedPrognosisPropertyNode = (value: ExpectedPrognosisPropertyInput): ExpectedPrognosisPropertyInput => objectSchemaOrgValueNode(value);

export type ExpectsAcceptanceOfPropertyInput = Record<string, unknown>;
export const expectsAcceptanceOfPropertyNode = (value: ExpectsAcceptanceOfPropertyInput): ExpectsAcceptanceOfPropertyInput => objectSchemaOrgValueNode(value);

export type ExperienceRequirementsPropertyInput = Record<string, unknown>;
export const experienceRequirementsPropertyNode = (value: ExperienceRequirementsPropertyInput): ExperienceRequirementsPropertyInput => objectSchemaOrgValueNode(value);

export type ExpertConsiderationsPropertyInput = Record<string, unknown>;
export const expertConsiderationsPropertyNode = (value: ExpertConsiderationsPropertyInput): ExpertConsiderationsPropertyInput => objectSchemaOrgValueNode(value);

export type ExpiresPropertyInput = Record<string, unknown>;
export const expiresPropertyNode = (value: ExpiresPropertyInput): ExpiresPropertyInput => objectSchemaOrgValueNode(value);

export type ExpressedInPropertyInput = Record<string, unknown>;
export const expressedInPropertyNode = (value: ExpressedInPropertyInput): ExpressedInPropertyInput => objectSchemaOrgValueNode(value);

export type ExtendedAddressPropertyInput = Record<string, unknown>;
export const extendedAddressPropertyNode = (value: ExtendedAddressPropertyInput): ExtendedAddressPropertyInput => objectSchemaOrgValueNode(value);

export type FamilyNamePropertyInput = Record<string, unknown>;
export const familyNamePropertyNode = (value: FamilyNamePropertyInput): FamilyNamePropertyInput => objectSchemaOrgValueNode(value);

export type FatContentPropertyInput = Record<string, unknown>;
export const fatContentPropertyNode = (value: FatContentPropertyInput): FatContentPropertyInput => objectSchemaOrgValueNode(value);

export type FaxNumberPropertyInput = Record<string, unknown>;
export const faxNumberPropertyNode = (value: FaxNumberPropertyInput): FaxNumberPropertyInput => objectSchemaOrgValueNode(value);

export type FeatureListPropertyInput = Record<string, unknown>;
export const featureListPropertyNode = (value: FeatureListPropertyInput): FeatureListPropertyInput => objectSchemaOrgValueNode(value);

export type FeesAndCommissionsSpecificationPropertyInput = Record<string, unknown>;
export const feesAndCommissionsSpecificationPropertyNode = (value: FeesAndCommissionsSpecificationPropertyInput): FeesAndCommissionsSpecificationPropertyInput => objectSchemaOrgValueNode(value);

export type FiberContentPropertyInput = Record<string, unknown>;
export const fiberContentPropertyNode = (value: FiberContentPropertyInput): FiberContentPropertyInput => objectSchemaOrgValueNode(value);

export type FileFormatPropertyInput = Record<string, unknown>;
export const fileFormatPropertyNode = (value: FileFormatPropertyInput): FileFormatPropertyInput => objectSchemaOrgValueNode(value);

export type FileSizePropertyInput = Record<string, unknown>;
export const fileSizePropertyNode = (value: FileSizePropertyInput): FileSizePropertyInput => objectSchemaOrgValueNode(value);

export type FirstAppearancePropertyInput = Record<string, unknown>;
export const firstAppearancePropertyNode = (value: FirstAppearancePropertyInput): FirstAppearancePropertyInput => objectSchemaOrgValueNode(value);

export type FirstPerformancePropertyInput = Record<string, unknown>;
export const firstPerformancePropertyNode = (value: FirstPerformancePropertyInput): FirstPerformancePropertyInput => objectSchemaOrgValueNode(value);

export type FloorLimitPropertyInput = Record<string, unknown>;
export const floorLimitPropertyNode = (value: FloorLimitPropertyInput): FloorLimitPropertyInput => objectSchemaOrgValueNode(value);

export type FollowsPropertyInput = Record<string, unknown>;
export const followsPropertyNode = (value: FollowsPropertyInput): FollowsPropertyInput => objectSchemaOrgValueNode(value);

export type FollowupPropertyInput = Record<string, unknown>;
export const followupPropertyNode = (value: FollowupPropertyInput): FollowupPropertyInput => objectSchemaOrgValueNode(value);

export type FoodWarningPropertyInput = Record<string, unknown>;
export const foodWarningPropertyNode = (value: FoodWarningPropertyInput): FoodWarningPropertyInput => objectSchemaOrgValueNode(value);

export type FounderPropertyInput = Record<string, unknown>;
export const founderPropertyNode = (value: FounderPropertyInput): FounderPropertyInput => objectSchemaOrgValueNode(value);

export type FoundersPropertyInput = Record<string, unknown>;
export const foundersPropertyNode = (value: FoundersPropertyInput): FoundersPropertyInput => objectSchemaOrgValueNode(value);

export type FoundingDatePropertyInput = Record<string, unknown>;
export const foundingDatePropertyNode = (value: FoundingDatePropertyInput): FoundingDatePropertyInput => objectSchemaOrgValueNode(value);

export type FoundingLocationPropertyInput = Record<string, unknown>;
export const foundingLocationPropertyNode = (value: FoundingLocationPropertyInput): FoundingLocationPropertyInput => objectSchemaOrgValueNode(value);

export type FreePropertyInput = Record<string, unknown>;
export const freePropertyNode = (value: FreePropertyInput): FreePropertyInput => objectSchemaOrgValueNode(value);

export type FreeShippingThresholdPropertyInput = Record<string, unknown>;
export const freeShippingThresholdPropertyNode = (value: FreeShippingThresholdPropertyInput): FreeShippingThresholdPropertyInput => objectSchemaOrgValueNode(value);

export type FrequencyPropertyInput = Record<string, unknown>;
export const frequencyPropertyNode = (value: FrequencyPropertyInput): FrequencyPropertyInput => objectSchemaOrgValueNode(value);

export type FulfillmentTypePropertyInput = Record<string, unknown>;
export const fulfillmentTypePropertyNode = (value: FulfillmentTypePropertyInput): FulfillmentTypePropertyInput => objectSchemaOrgValueNode(value);

export type FundedItemPropertyInput = Record<string, unknown>;
export const fundedItemPropertyNode = (value: FundedItemPropertyInput): FundedItemPropertyInput => objectSchemaOrgValueNode(value);

export type FunderPropertyInput = Record<string, unknown>;
export const funderPropertyNode = (value: FunderPropertyInput): FunderPropertyInput => objectSchemaOrgValueNode(value);

export type FundingPropertyInput = Record<string, unknown>;
export const fundingPropertyNode = (value: FundingPropertyInput): FundingPropertyInput => objectSchemaOrgValueNode(value);

export type GenderPropertyInput = Record<string, unknown>;
export const genderPropertyNode = (value: GenderPropertyInput): GenderPropertyInput => objectSchemaOrgValueNode(value);

export type GenrePropertyInput = Record<string, unknown>;
export const genrePropertyNode = (value: GenrePropertyInput): GenrePropertyInput => objectSchemaOrgValueNode(value);

export type GeoPropertyInput = Record<string, unknown>;
export const geoPropertyNode = (value: GeoPropertyInput): GeoPropertyInput => objectSchemaOrgValueNode(value);

export type GeoContainsPropertyInput = Record<string, unknown>;
export const geoContainsPropertyNode = (value: GeoContainsPropertyInput): GeoContainsPropertyInput => objectSchemaOrgValueNode(value);

export type GeoCoveredByPropertyInput = Record<string, unknown>;
export const geoCoveredByPropertyNode = (value: GeoCoveredByPropertyInput): GeoCoveredByPropertyInput => objectSchemaOrgValueNode(value);

export type GeoCoversPropertyInput = Record<string, unknown>;
export const geoCoversPropertyNode = (value: GeoCoversPropertyInput): GeoCoversPropertyInput => objectSchemaOrgValueNode(value);

export type GeoCrossesPropertyInput = Record<string, unknown>;
export const geoCrossesPropertyNode = (value: GeoCrossesPropertyInput): GeoCrossesPropertyInput => objectSchemaOrgValueNode(value);

export type GeoDisjointPropertyInput = Record<string, unknown>;
export const geoDisjointPropertyNode = (value: GeoDisjointPropertyInput): GeoDisjointPropertyInput => objectSchemaOrgValueNode(value);

export type GeoEqualsPropertyInput = Record<string, unknown>;
export const geoEqualsPropertyNode = (value: GeoEqualsPropertyInput): GeoEqualsPropertyInput => objectSchemaOrgValueNode(value);

export type GeographicAreaPropertyInput = Record<string, unknown>;
export const geographicAreaPropertyNode = (value: GeographicAreaPropertyInput): GeographicAreaPropertyInput => objectSchemaOrgValueNode(value);

export type GeoIntersectsPropertyInput = Record<string, unknown>;
export const geoIntersectsPropertyNode = (value: GeoIntersectsPropertyInput): GeoIntersectsPropertyInput => objectSchemaOrgValueNode(value);

export type GeoOverlapsPropertyInput = Record<string, unknown>;
export const geoOverlapsPropertyNode = (value: GeoOverlapsPropertyInput): GeoOverlapsPropertyInput => objectSchemaOrgValueNode(value);

export type GeoTouchesPropertyInput = Record<string, unknown>;
export const geoTouchesPropertyNode = (value: GeoTouchesPropertyInput): GeoTouchesPropertyInput => objectSchemaOrgValueNode(value);

export type GeoWithinPropertyInput = Record<string, unknown>;
export const geoWithinPropertyNode = (value: GeoWithinPropertyInput): GeoWithinPropertyInput => objectSchemaOrgValueNode(value);

export type GivenNamePropertyInput = Record<string, unknown>;
export const givenNamePropertyNode = (value: GivenNamePropertyInput): GivenNamePropertyInput => objectSchemaOrgValueNode(value);

export type GlobalLocationNumberPropertyInput = Record<string, unknown>;
export const globalLocationNumberPropertyNode = (value: GlobalLocationNumberPropertyInput): GlobalLocationNumberPropertyInput => objectSchemaOrgValueNode(value);

export type GracePeriodPropertyInput = Record<string, unknown>;
export const gracePeriodPropertyNode = (value: GracePeriodPropertyInput): GracePeriodPropertyInput => objectSchemaOrgValueNode(value);

export type GtinPropertyInput = Record<string, unknown>;
export const gtinPropertyNode = (value: GtinPropertyInput): GtinPropertyInput => objectSchemaOrgValueNode(value);

export type Gtin12PropertyInput = Record<string, unknown>;
export const gtin12PropertyNode = (value: Gtin12PropertyInput): Gtin12PropertyInput => objectSchemaOrgValueNode(value);

export type Gtin13PropertyInput = Record<string, unknown>;
export const gtin13PropertyNode = (value: Gtin13PropertyInput): Gtin13PropertyInput => objectSchemaOrgValueNode(value);

export type Gtin14PropertyInput = Record<string, unknown>;
export const gtin14PropertyNode = (value: Gtin14PropertyInput): Gtin14PropertyInput => objectSchemaOrgValueNode(value);

export type Gtin8PropertyInput = Record<string, unknown>;
export const gtin8PropertyNode = (value: Gtin8PropertyInput): Gtin8PropertyInput => objectSchemaOrgValueNode(value);

export type GuidelinePropertyInput = Record<string, unknown>;
export const guidelinePropertyNode = (value: GuidelinePropertyInput): GuidelinePropertyInput => objectSchemaOrgValueNode(value);

export type GuidelineDatePropertyInput = Record<string, unknown>;
export const guidelineDatePropertyNode = (value: GuidelineDatePropertyInput): GuidelineDatePropertyInput => objectSchemaOrgValueNode(value);

export type GuidelineSubjectPropertyInput = Record<string, unknown>;
export const guidelineSubjectPropertyNode = (value: GuidelineSubjectPropertyInput): GuidelineSubjectPropertyInput => objectSchemaOrgValueNode(value);

export type HandlingTimePropertyInput = Record<string, unknown>;
export const handlingTimePropertyNode = (value: HandlingTimePropertyInput): HandlingTimePropertyInput => objectSchemaOrgValueNode(value);

export type HasAdultConsiderationPropertyInput = Record<string, unknown>;
export const hasAdultConsiderationPropertyNode = (value: HasAdultConsiderationPropertyInput): HasAdultConsiderationPropertyInput => objectSchemaOrgValueNode(value);

export type HasBioChemEntityPartPropertyInput = Record<string, unknown>;
export const hasBioChemEntityPartPropertyNode = (value: HasBioChemEntityPartPropertyInput): HasBioChemEntityPartPropertyInput => objectSchemaOrgValueNode(value);

export type HasBioPolymerSequencePropertyInput = Record<string, unknown>;
export const hasBioPolymerSequencePropertyNode = (value: HasBioPolymerSequencePropertyInput): HasBioPolymerSequencePropertyInput => objectSchemaOrgValueNode(value);

export type HasBroadcastChannelPropertyInput = Record<string, unknown>;
export const hasBroadcastChannelPropertyNode = (value: HasBroadcastChannelPropertyInput): HasBroadcastChannelPropertyInput => objectSchemaOrgValueNode(value);

export type HasCategoryCodePropertyInput = Record<string, unknown>;
export const hasCategoryCodePropertyNode = (value: HasCategoryCodePropertyInput): HasCategoryCodePropertyInput => objectSchemaOrgValueNode(value);

export type HasCertificationPropertyInput = Record<string, unknown>;
export const hasCertificationPropertyNode = (value: HasCertificationPropertyInput): HasCertificationPropertyInput => objectSchemaOrgValueNode(value);

export type HasCredentialPropertyInput = Record<string, unknown>;
export const hasCredentialPropertyNode = (value: HasCredentialPropertyInput): HasCredentialPropertyInput => objectSchemaOrgValueNode(value);

export type HasDefinedTermPropertyInput = Record<string, unknown>;
export const hasDefinedTermPropertyNode = (value: HasDefinedTermPropertyInput): HasDefinedTermPropertyInput => objectSchemaOrgValueNode(value);

export type HasDriveThroughServicePropertyInput = Record<string, unknown>;
export const hasDriveThroughServicePropertyNode = (value: HasDriveThroughServicePropertyInput): HasDriveThroughServicePropertyInput => objectSchemaOrgValueNode(value);

export type HasEnergyConsumptionDetailsPropertyInput = Record<string, unknown>;
export const hasEnergyConsumptionDetailsPropertyNode = (value: HasEnergyConsumptionDetailsPropertyInput): HasEnergyConsumptionDetailsPropertyInput => objectSchemaOrgValueNode(value);

export type HasEnergyEfficiencyCategoryPropertyInput = Record<string, unknown>;
export const hasEnergyEfficiencyCategoryPropertyNode = (value: HasEnergyEfficiencyCategoryPropertyInput): HasEnergyEfficiencyCategoryPropertyInput => objectSchemaOrgValueNode(value);

export type HasGS1DigitalLinkPropertyInput = Record<string, unknown>;
export const hasGS1DigitalLinkPropertyNode = (value: HasGS1DigitalLinkPropertyInput): HasGS1DigitalLinkPropertyInput => objectSchemaOrgValueNode(value);

export type HasMapPropertyInput = Record<string, unknown>;
export const hasMapPropertyNode = (value: HasMapPropertyInput): HasMapPropertyInput => objectSchemaOrgValueNode(value);

export type HasMeasurementPropertyInput = Record<string, unknown>;
export const hasMeasurementPropertyNode = (value: HasMeasurementPropertyInput): HasMeasurementPropertyInput => objectSchemaOrgValueNode(value);

export type HasMemberProgramPropertyInput = Record<string, unknown>;
export const hasMemberProgramPropertyNode = (value: HasMemberProgramPropertyInput): HasMemberProgramPropertyInput => objectSchemaOrgValueNode(value);

export type HasMenuItemPropertyInput = Record<string, unknown>;
export const hasMenuItemPropertyNode = (value: HasMenuItemPropertyInput): HasMenuItemPropertyInput => objectSchemaOrgValueNode(value);

export type HasMenuSectionPropertyInput = Record<string, unknown>;
export const hasMenuSectionPropertyNode = (value: HasMenuSectionPropertyInput): HasMenuSectionPropertyInput => objectSchemaOrgValueNode(value);

export type HasMerchantReturnPolicyPropertyInput = Record<string, unknown>;
export const hasMerchantReturnPolicyPropertyNode = (value: HasMerchantReturnPolicyPropertyInput): HasMerchantReturnPolicyPropertyInput => objectSchemaOrgValueNode(value);

export type HasMolecularFunctionPropertyInput = Record<string, unknown>;
export const hasMolecularFunctionPropertyNode = (value: HasMolecularFunctionPropertyInput): HasMolecularFunctionPropertyInput => objectSchemaOrgValueNode(value);

export type HasOccupationPropertyInput = Record<string, unknown>;
export const hasOccupationPropertyNode = (value: HasOccupationPropertyInput): HasOccupationPropertyInput => objectSchemaOrgValueNode(value);

export type HasOfferCatalogPropertyInput = Record<string, unknown>;
export const hasOfferCatalogPropertyNode = (value: HasOfferCatalogPropertyInput): HasOfferCatalogPropertyInput => objectSchemaOrgValueNode(value);

export type HasPartPropertyInput = Record<string, unknown>;
export const hasPartPropertyNode = (value: HasPartPropertyInput): HasPartPropertyInput => objectSchemaOrgValueNode(value);

export type HasParticipationOfferPropertyInput = Record<string, unknown>;
export const hasParticipationOfferPropertyNode = (value: HasParticipationOfferPropertyInput): HasParticipationOfferPropertyInput => objectSchemaOrgValueNode(value);

export type HasPOSPropertyInput = Record<string, unknown>;
export const hasPOSPropertyNode = (value: HasPOSPropertyInput): HasPOSPropertyInput => objectSchemaOrgValueNode(value);

export type HasRepresentationPropertyInput = Record<string, unknown>;
export const hasRepresentationPropertyNode = (value: HasRepresentationPropertyInput): HasRepresentationPropertyInput => objectSchemaOrgValueNode(value);

export type HasShippingServicePropertyInput = Record<string, unknown>;
export const hasShippingServicePropertyNode = (value: HasShippingServicePropertyInput): HasShippingServicePropertyInput => objectSchemaOrgValueNode(value);

export type HasSponsorshipOfferPropertyInput = Record<string, unknown>;
export const hasSponsorshipOfferPropertyNode = (value: HasSponsorshipOfferPropertyInput): HasSponsorshipOfferPropertyInput => objectSchemaOrgValueNode(value);

export type HasTierBenefitPropertyInput = Record<string, unknown>;
export const hasTierBenefitPropertyNode = (value: HasTierBenefitPropertyInput): HasTierBenefitPropertyInput => objectSchemaOrgValueNode(value);

export type HasTierRequirementPropertyInput = Record<string, unknown>;
export const hasTierRequirementPropertyNode = (value: HasTierRequirementPropertyInput): HasTierRequirementPropertyInput => objectSchemaOrgValueNode(value);

export type HasTiersPropertyInput = Record<string, unknown>;
export const hasTiersPropertyNode = (value: HasTiersPropertyInput): HasTiersPropertyInput => objectSchemaOrgValueNode(value);

export type HasVariantPropertyInput = Record<string, unknown>;
export const hasVariantPropertyNode = (value: HasVariantPropertyInput): HasVariantPropertyInput => objectSchemaOrgValueNode(value);

export type HeadlinePropertyInput = Record<string, unknown>;
export const headlinePropertyNode = (value: HeadlinePropertyInput): HeadlinePropertyInput => objectSchemaOrgValueNode(value);

export type HealthConditionPropertyInput = Record<string, unknown>;
export const healthConditionPropertyNode = (value: HealthConditionPropertyInput): HealthConditionPropertyInput => objectSchemaOrgValueNode(value);

export type HealthPlanCoinsuranceOptionPropertyInput = Record<string, unknown>;
export const healthPlanCoinsuranceOptionPropertyNode = (value: HealthPlanCoinsuranceOptionPropertyInput): HealthPlanCoinsuranceOptionPropertyInput => objectSchemaOrgValueNode(value);

export type HealthPlanCoinsuranceRatePropertyInput = Record<string, unknown>;
export const healthPlanCoinsuranceRatePropertyNode = (value: HealthPlanCoinsuranceRatePropertyInput): HealthPlanCoinsuranceRatePropertyInput => objectSchemaOrgValueNode(value);

export type HealthPlanCopayPropertyInput = Record<string, unknown>;
export const healthPlanCopayPropertyNode = (value: HealthPlanCopayPropertyInput): HealthPlanCopayPropertyInput => objectSchemaOrgValueNode(value);

export type HealthPlanCopayOptionPropertyInput = Record<string, unknown>;
export const healthPlanCopayOptionPropertyNode = (value: HealthPlanCopayOptionPropertyInput): HealthPlanCopayOptionPropertyInput => objectSchemaOrgValueNode(value);

export type HealthPlanCostSharingPropertyInput = Record<string, unknown>;
export const healthPlanCostSharingPropertyNode = (value: HealthPlanCostSharingPropertyInput): HealthPlanCostSharingPropertyInput => objectSchemaOrgValueNode(value);

export type HealthPlanDrugOptionPropertyInput = Record<string, unknown>;
export const healthPlanDrugOptionPropertyNode = (value: HealthPlanDrugOptionPropertyInput): HealthPlanDrugOptionPropertyInput => objectSchemaOrgValueNode(value);

export type HealthPlanDrugTierPropertyInput = Record<string, unknown>;
export const healthPlanDrugTierPropertyNode = (value: HealthPlanDrugTierPropertyInput): HealthPlanDrugTierPropertyInput => objectSchemaOrgValueNode(value);

export type HealthPlanIdPropertyInput = Record<string, unknown>;
export const healthPlanIdPropertyNode = (value: HealthPlanIdPropertyInput): HealthPlanIdPropertyInput => objectSchemaOrgValueNode(value);

export type HealthPlanMarketingUrlPropertyInput = Record<string, unknown>;
export const healthPlanMarketingUrlPropertyNode = (value: HealthPlanMarketingUrlPropertyInput): HealthPlanMarketingUrlPropertyInput => objectSchemaOrgValueNode(value);

export type HealthPlanNetworkIdPropertyInput = Record<string, unknown>;
export const healthPlanNetworkIdPropertyNode = (value: HealthPlanNetworkIdPropertyInput): HealthPlanNetworkIdPropertyInput => objectSchemaOrgValueNode(value);

export type HealthPlanNetworkTierPropertyInput = Record<string, unknown>;
export const healthPlanNetworkTierPropertyNode = (value: HealthPlanNetworkTierPropertyInput): HealthPlanNetworkTierPropertyInput => objectSchemaOrgValueNode(value);

export type HealthPlanPharmacyCategoryPropertyInput = Record<string, unknown>;
export const healthPlanPharmacyCategoryPropertyNode = (value: HealthPlanPharmacyCategoryPropertyInput): HealthPlanPharmacyCategoryPropertyInput => objectSchemaOrgValueNode(value);

export type HeightPropertyInput = Record<string, unknown>;
export const heightPropertyNode = (value: HeightPropertyInput): HeightPropertyInput => objectSchemaOrgValueNode(value);

export type HighPricePropertyInput = Record<string, unknown>;
export const highPricePropertyNode = (value: HighPricePropertyInput): HighPricePropertyInput => objectSchemaOrgValueNode(value);

export type HomeLocationPropertyInput = Record<string, unknown>;
export const homeLocationPropertyNode = (value: HomeLocationPropertyInput): HomeLocationPropertyInput => objectSchemaOrgValueNode(value);

export type HonorificPrefixPropertyInput = Record<string, unknown>;
export const honorificPrefixPropertyNode = (value: HonorificPrefixPropertyInput): HonorificPrefixPropertyInput => objectSchemaOrgValueNode(value);

export type HonorificSuffixPropertyInput = Record<string, unknown>;
export const honorificSuffixPropertyNode = (value: HonorificSuffixPropertyInput): HonorificSuffixPropertyInput => objectSchemaOrgValueNode(value);

export type HostingOrganizationPropertyInput = Record<string, unknown>;
export const hostingOrganizationPropertyNode = (value: HostingOrganizationPropertyInput): HostingOrganizationPropertyInput => objectSchemaOrgValueNode(value);

export type HoursAvailablePropertyInput = Record<string, unknown>;
export const hoursAvailablePropertyNode = (value: HoursAvailablePropertyInput): HoursAvailablePropertyInput => objectSchemaOrgValueNode(value);

export type HowPerformedPropertyInput = Record<string, unknown>;
export const howPerformedPropertyNode = (value: HowPerformedPropertyInput): HowPerformedPropertyInput => objectSchemaOrgValueNode(value);

export type HttpMethodPropertyInput = Record<string, unknown>;
export const httpMethodPropertyNode = (value: HttpMethodPropertyInput): HttpMethodPropertyInput => objectSchemaOrgValueNode(value);

export type IdentifierPropertyInput = Record<string, unknown>;
export const identifierPropertyNode = (value: IdentifierPropertyInput): IdentifierPropertyInput => objectSchemaOrgValueNode(value);

export type IdentifyingExamPropertyInput = Record<string, unknown>;
export const identifyingExamPropertyNode = (value: IdentifyingExamPropertyInput): IdentifyingExamPropertyInput => objectSchemaOrgValueNode(value);

export type IdentifyingTestPropertyInput = Record<string, unknown>;
export const identifyingTestPropertyNode = (value: IdentifyingTestPropertyInput): IdentifyingTestPropertyInput => objectSchemaOrgValueNode(value);

export type ImagePropertyInput = Record<string, unknown>;
export const imagePropertyNode = (value: ImagePropertyInput): ImagePropertyInput => objectSchemaOrgValueNode(value);

export type InAlbumPropertyInput = Record<string, unknown>;
export const inAlbumPropertyNode = (value: InAlbumPropertyInput): InAlbumPropertyInput => objectSchemaOrgValueNode(value);

export type InBroadcastLineupPropertyInput = Record<string, unknown>;
export const inBroadcastLineupPropertyNode = (value: InBroadcastLineupPropertyInput): InBroadcastLineupPropertyInput => objectSchemaOrgValueNode(value);

export type IncludedCompositionPropertyInput = Record<string, unknown>;
export const includedCompositionPropertyNode = (value: IncludedCompositionPropertyInput): IncludedCompositionPropertyInput => objectSchemaOrgValueNode(value);

export type IncludedDataCatalogPropertyInput = Record<string, unknown>;
export const includedDataCatalogPropertyNode = (value: IncludedDataCatalogPropertyInput): IncludedDataCatalogPropertyInput => objectSchemaOrgValueNode(value);

export type IncludedInDataCatalogPropertyInput = Record<string, unknown>;
export const includedInDataCatalogPropertyNode = (value: IncludedInDataCatalogPropertyInput): IncludedInDataCatalogPropertyInput => objectSchemaOrgValueNode(value);

export type IncludedInHealthInsurancePlanPropertyInput = Record<string, unknown>;
export const includedInHealthInsurancePlanPropertyNode = (value: IncludedInHealthInsurancePlanPropertyInput): IncludedInHealthInsurancePlanPropertyInput => objectSchemaOrgValueNode(value);

export type IncludesHealthPlanFormularyPropertyInput = Record<string, unknown>;
export const includesHealthPlanFormularyPropertyNode = (value: IncludesHealthPlanFormularyPropertyInput): IncludesHealthPlanFormularyPropertyInput => objectSchemaOrgValueNode(value);

export type IncludesHealthPlanNetworkPropertyInput = Record<string, unknown>;
export const includesHealthPlanNetworkPropertyNode = (value: IncludesHealthPlanNetworkPropertyInput): IncludesHealthPlanNetworkPropertyInput => objectSchemaOrgValueNode(value);

export type IncludesObjectPropertyInput = Record<string, unknown>;
export const includesObjectPropertyNode = (value: IncludesObjectPropertyInput): IncludesObjectPropertyInput => objectSchemaOrgValueNode(value);

export type InCodeSetPropertyInput = Record<string, unknown>;
export const inCodeSetPropertyNode = (value: InCodeSetPropertyInput): InCodeSetPropertyInput => objectSchemaOrgValueNode(value);

export type IncreasesRiskOfPropertyInput = Record<string, unknown>;
export const increasesRiskOfPropertyNode = (value: IncreasesRiskOfPropertyInput): IncreasesRiskOfPropertyInput => objectSchemaOrgValueNode(value);

export type InDefinedTermSetPropertyInput = Record<string, unknown>;
export const inDefinedTermSetPropertyNode = (value: InDefinedTermSetPropertyInput): InDefinedTermSetPropertyInput => objectSchemaOrgValueNode(value);

export type IneligibleRegionPropertyInput = Record<string, unknown>;
export const ineligibleRegionPropertyNode = (value: IneligibleRegionPropertyInput): IneligibleRegionPropertyInput => objectSchemaOrgValueNode(value);

export type InLanguagePropertyInput = Record<string, unknown>;
export const inLanguagePropertyNode = (value: InLanguagePropertyInput): InLanguagePropertyInput => objectSchemaOrgValueNode(value);

export type InPlaylistPropertyInput = Record<string, unknown>;
export const inPlaylistPropertyNode = (value: InPlaylistPropertyInput): InPlaylistPropertyInput => objectSchemaOrgValueNode(value);

export type InProductGroupWithIDPropertyInput = Record<string, unknown>;
export const inProductGroupWithIDPropertyNode = (value: InProductGroupWithIDPropertyInput): InProductGroupWithIDPropertyInput => objectSchemaOrgValueNode(value);

export type InstallUrlPropertyInput = Record<string, unknown>;
export const installUrlPropertyNode = (value: InstallUrlPropertyInput): InstallUrlPropertyInput => objectSchemaOrgValueNode(value);

export type InStoreReturnsOfferedPropertyInput = Record<string, unknown>;
export const inStoreReturnsOfferedPropertyNode = (value: InStoreReturnsOfferedPropertyInput): InStoreReturnsOfferedPropertyInput => objectSchemaOrgValueNode(value);

export type InstrumentPropertyInput = Record<string, unknown>;
export const instrumentPropertyNode = (value: InstrumentPropertyInput): InstrumentPropertyInput => objectSchemaOrgValueNode(value);

export type InteractingDrugPropertyInput = Record<string, unknown>;
export const interactingDrugPropertyNode = (value: InteractingDrugPropertyInput): InteractingDrugPropertyInput => objectSchemaOrgValueNode(value);

export type InteractionServicePropertyInput = Record<string, unknown>;
export const interactionServicePropertyNode = (value: InteractionServicePropertyInput): InteractionServicePropertyInput => objectSchemaOrgValueNode(value);

export type InteractionStatisticPropertyInput = Record<string, unknown>;
export const interactionStatisticPropertyNode = (value: InteractionStatisticPropertyInput): InteractionStatisticPropertyInput => objectSchemaOrgValueNode(value);

export type InteractionTypePropertyInput = Record<string, unknown>;
export const interactionTypePropertyNode = (value: InteractionTypePropertyInput): InteractionTypePropertyInput => objectSchemaOrgValueNode(value);

export type InteractivityTypePropertyInput = Record<string, unknown>;
export const interactivityTypePropertyNode = (value: InteractivityTypePropertyInput): InteractivityTypePropertyInput => objectSchemaOrgValueNode(value);

export type InterestRatePropertyInput = Record<string, unknown>;
export const interestRatePropertyNode = (value: InterestRatePropertyInput): InterestRatePropertyInput => objectSchemaOrgValueNode(value);

export type InterpretedAsClaimPropertyInput = Record<string, unknown>;
export const interpretedAsClaimPropertyNode = (value: InterpretedAsClaimPropertyInput): InterpretedAsClaimPropertyInput => objectSchemaOrgValueNode(value);

export type InventoryLevelPropertyInput = Record<string, unknown>;
export const inventoryLevelPropertyNode = (value: InventoryLevelPropertyInput): InventoryLevelPropertyInput => objectSchemaOrgValueNode(value);

export type InverseOfPropertyInput = Record<string, unknown>;
export const inverseOfPropertyNode = (value: InverseOfPropertyInput): InverseOfPropertyInput => objectSchemaOrgValueNode(value);

export type IsAccessibleForFreePropertyInput = Record<string, unknown>;
export const isAccessibleForFreePropertyNode = (value: IsAccessibleForFreePropertyInput): IsAccessibleForFreePropertyInput => objectSchemaOrgValueNode(value);

export type IsAccessoryOrSparePartForPropertyInput = Record<string, unknown>;
export const isAccessoryOrSparePartForPropertyNode = (value: IsAccessoryOrSparePartForPropertyInput): IsAccessoryOrSparePartForPropertyInput => objectSchemaOrgValueNode(value);

export type IsAvailableGenericallyPropertyInput = Record<string, unknown>;
export const isAvailableGenericallyPropertyNode = (value: IsAvailableGenericallyPropertyInput): IsAvailableGenericallyPropertyInput => objectSchemaOrgValueNode(value);

export type IsBasedOnPropertyInput = Record<string, unknown>;
export const isBasedOnPropertyNode = (value: IsBasedOnPropertyInput): IsBasedOnPropertyInput => objectSchemaOrgValueNode(value);

export type IsBasedOnUrlPropertyInput = Record<string, unknown>;
export const isBasedOnUrlPropertyNode = (value: IsBasedOnUrlPropertyInput): IsBasedOnUrlPropertyInput => objectSchemaOrgValueNode(value);

export type IsConsumableForPropertyInput = Record<string, unknown>;
export const isConsumableForPropertyNode = (value: IsConsumableForPropertyInput): IsConsumableForPropertyInput => objectSchemaOrgValueNode(value);

export type IsEncodedByBioChemEntityPropertyInput = Record<string, unknown>;
export const isEncodedByBioChemEntityPropertyNode = (value: IsEncodedByBioChemEntityPropertyInput): IsEncodedByBioChemEntityPropertyInput => objectSchemaOrgValueNode(value);

export type IsFamilyFriendlyPropertyInput = Record<string, unknown>;
export const isFamilyFriendlyPropertyNode = (value: IsFamilyFriendlyPropertyInput): IsFamilyFriendlyPropertyInput => objectSchemaOrgValueNode(value);

export type IsicV4PropertyInput = Record<string, unknown>;
export const isicV4PropertyNode = (value: IsicV4PropertyInput): IsicV4PropertyInput => objectSchemaOrgValueNode(value);

export type IsInvolvedInBiologicalProcessPropertyInput = Record<string, unknown>;
export const isInvolvedInBiologicalProcessPropertyNode = (value: IsInvolvedInBiologicalProcessPropertyInput): IsInvolvedInBiologicalProcessPropertyInput => objectSchemaOrgValueNode(value);

export type IsLocatedInSubcellularLocationPropertyInput = Record<string, unknown>;
export const isLocatedInSubcellularLocationPropertyNode = (value: IsLocatedInSubcellularLocationPropertyInput): IsLocatedInSubcellularLocationPropertyInput => objectSchemaOrgValueNode(value);

export type Iso6523CodePropertyInput = Record<string, unknown>;
export const iso6523CodePropertyNode = (value: Iso6523CodePropertyInput): Iso6523CodePropertyInput => objectSchemaOrgValueNode(value);

export type IsPartOfPropertyInput = Record<string, unknown>;
export const isPartOfPropertyNode = (value: IsPartOfPropertyInput): IsPartOfPropertyInput => objectSchemaOrgValueNode(value);

export type IsPartOfBioChemEntityPropertyInput = Record<string, unknown>;
export const isPartOfBioChemEntityPropertyNode = (value: IsPartOfBioChemEntityPropertyInput): IsPartOfBioChemEntityPropertyInput => objectSchemaOrgValueNode(value);

export type IsProprietaryPropertyInput = Record<string, unknown>;
export const isProprietaryPropertyNode = (value: IsProprietaryPropertyInput): IsProprietaryPropertyInput => objectSchemaOrgValueNode(value);

export type IsrcCodePropertyInput = Record<string, unknown>;
export const isrcCodePropertyNode = (value: IsrcCodePropertyInput): IsrcCodePropertyInput => objectSchemaOrgValueNode(value);

export type IsRelatedToPropertyInput = Record<string, unknown>;
export const isRelatedToPropertyNode = (value: IsRelatedToPropertyInput): IsRelatedToPropertyInput => objectSchemaOrgValueNode(value);

export type IsSimilarToPropertyInput = Record<string, unknown>;
export const isSimilarToPropertyNode = (value: IsSimilarToPropertyInput): IsSimilarToPropertyInput => objectSchemaOrgValueNode(value);

export type IssnPropertyInput = Record<string, unknown>;
export const issnPropertyNode = (value: IssnPropertyInput): IssnPropertyInput => objectSchemaOrgValueNode(value);

export type IssuedByPropertyInput = Record<string, unknown>;
export const issuedByPropertyNode = (value: IssuedByPropertyInput): IssuedByPropertyInput => objectSchemaOrgValueNode(value);

export type IsTierOfPropertyInput = Record<string, unknown>;
export const isTierOfPropertyNode = (value: IsTierOfPropertyInput): IsTierOfPropertyInput => objectSchemaOrgValueNode(value);

export type IsUnlabelledFallbackPropertyInput = Record<string, unknown>;
export const isUnlabelledFallbackPropertyNode = (value: IsUnlabelledFallbackPropertyInput): IsUnlabelledFallbackPropertyInput => objectSchemaOrgValueNode(value);

export type IsVariantOfPropertyInput = Record<string, unknown>;
export const isVariantOfPropertyNode = (value: IsVariantOfPropertyInput): IsVariantOfPropertyInput => objectSchemaOrgValueNode(value);

export type IswcCodePropertyInput = Record<string, unknown>;
export const iswcCodePropertyNode = (value: IswcCodePropertyInput): IswcCodePropertyInput => objectSchemaOrgValueNode(value);

export type ItemPropertyInput = Record<string, unknown>;
export const itemPropertyNode = (value: ItemPropertyInput): ItemPropertyInput => objectSchemaOrgValueNode(value);

export type ItemConditionPropertyInput = Record<string, unknown>;
export const itemConditionPropertyNode = (value: ItemConditionPropertyInput): ItemConditionPropertyInput => objectSchemaOrgValueNode(value);

export type ItemDefectReturnFeesPropertyInput = Record<string, unknown>;
export const itemDefectReturnFeesPropertyNode = (value: ItemDefectReturnFeesPropertyInput): ItemDefectReturnFeesPropertyInput => objectSchemaOrgValueNode(value);

export type ItemDefectReturnLabelSourcePropertyInput = Record<string, unknown>;
export const itemDefectReturnLabelSourcePropertyNode = (value: ItemDefectReturnLabelSourcePropertyInput): ItemDefectReturnLabelSourcePropertyInput => objectSchemaOrgValueNode(value);

export type ItemDefectReturnShippingFeesAmountPropertyInput = Record<string, unknown>;
export const itemDefectReturnShippingFeesAmountPropertyNode = (value: ItemDefectReturnShippingFeesAmountPropertyInput): ItemDefectReturnShippingFeesAmountPropertyInput => objectSchemaOrgValueNode(value);

export type ItemListElementPropertyInput = Record<string, unknown>;
export const itemListElementPropertyNode = (value: ItemListElementPropertyInput): ItemListElementPropertyInput => objectSchemaOrgValueNode(value);

export type ItemListOrderPropertyInput = Record<string, unknown>;
export const itemListOrderPropertyNode = (value: ItemListOrderPropertyInput): ItemListOrderPropertyInput => objectSchemaOrgValueNode(value);

export type ItemOfferedPropertyInput = Record<string, unknown>;
export const itemOfferedPropertyNode = (value: ItemOfferedPropertyInput): ItemOfferedPropertyInput => objectSchemaOrgValueNode(value);

export type ItemReviewedPropertyInput = Record<string, unknown>;
export const itemReviewedPropertyNode = (value: ItemReviewedPropertyInput): ItemReviewedPropertyInput => objectSchemaOrgValueNode(value);

export type ItineraryPropertyInput = Record<string, unknown>;
export const itineraryPropertyNode = (value: ItineraryPropertyInput): ItineraryPropertyInput => objectSchemaOrgValueNode(value);

export type JobTitlePropertyInput = Record<string, unknown>;
export const jobTitlePropertyNode = (value: JobTitlePropertyInput): JobTitlePropertyInput => objectSchemaOrgValueNode(value);

export type KeywordsPropertyInput = Record<string, unknown>;
export const keywordsPropertyNode = (value: KeywordsPropertyInput): KeywordsPropertyInput => objectSchemaOrgValueNode(value);

export type KnowsPropertyInput = Record<string, unknown>;
export const knowsPropertyNode = (value: KnowsPropertyInput): KnowsPropertyInput => objectSchemaOrgValueNode(value);

export type KnowsAboutPropertyInput = Record<string, unknown>;
export const knowsAboutPropertyNode = (value: KnowsAboutPropertyInput): KnowsAboutPropertyInput => objectSchemaOrgValueNode(value);

export type KnowsLanguagePropertyInput = Record<string, unknown>;
export const knowsLanguagePropertyNode = (value: KnowsLanguagePropertyInput): KnowsLanguagePropertyInput => objectSchemaOrgValueNode(value);

export type LabelDetailsPropertyInput = Record<string, unknown>;
export const labelDetailsPropertyNode = (value: LabelDetailsPropertyInput): LabelDetailsPropertyInput => objectSchemaOrgValueNode(value);

export type LastReviewedPropertyInput = Record<string, unknown>;
export const lastReviewedPropertyNode = (value: LastReviewedPropertyInput): LastReviewedPropertyInput => objectSchemaOrgValueNode(value);

export type LatitudePropertyInput = Record<string, unknown>;
export const latitudePropertyNode = (value: LatitudePropertyInput): LatitudePropertyInput => objectSchemaOrgValueNode(value);

export type LearningResourceTypePropertyInput = Record<string, unknown>;
export const learningResourceTypePropertyNode = (value: LearningResourceTypePropertyInput): LearningResourceTypePropertyInput => objectSchemaOrgValueNode(value);

export type LeaseLengthPropertyInput = Record<string, unknown>;
export const leaseLengthPropertyNode = (value: LeaseLengthPropertyInput): LeaseLengthPropertyInput => objectSchemaOrgValueNode(value);

export type LegalAddressPropertyInput = Record<string, unknown>;
export const legalAddressPropertyNode = (value: LegalAddressPropertyInput): LegalAddressPropertyInput => objectSchemaOrgValueNode(value);

export type LegalNamePropertyInput = Record<string, unknown>;
export const legalNamePropertyNode = (value: LegalNamePropertyInput): LegalNamePropertyInput => objectSchemaOrgValueNode(value);

export type LegalRepresentativePropertyInput = Record<string, unknown>;
export const legalRepresentativePropertyNode = (value: LegalRepresentativePropertyInput): LegalRepresentativePropertyInput => objectSchemaOrgValueNode(value);

export type LegalStatusPropertyInput = Record<string, unknown>;
export const legalStatusPropertyNode = (value: LegalStatusPropertyInput): LegalStatusPropertyInput => objectSchemaOrgValueNode(value);

export type LeiCodePropertyInput = Record<string, unknown>;
export const leiCodePropertyNode = (value: LeiCodePropertyInput): LeiCodePropertyInput => objectSchemaOrgValueNode(value);

export type LicensePropertyInput = Record<string, unknown>;
export const licensePropertyNode = (value: LicensePropertyInput): LicensePropertyInput => objectSchemaOrgValueNode(value);

export type LifeEventPropertyInput = Record<string, unknown>;
export const lifeEventPropertyNode = (value: LifeEventPropertyInput): LifeEventPropertyInput => objectSchemaOrgValueNode(value);

export type LinePropertyInput = Record<string, unknown>;
export const linePropertyNode = (value: LinePropertyInput): LinePropertyInput => objectSchemaOrgValueNode(value);

export type LoanPaymentAmountPropertyInput = Record<string, unknown>;
export const loanPaymentAmountPropertyNode = (value: LoanPaymentAmountPropertyInput): LoanPaymentAmountPropertyInput => objectSchemaOrgValueNode(value);

export type LoanPaymentFrequencyPropertyInput = Record<string, unknown>;
export const loanPaymentFrequencyPropertyNode = (value: LoanPaymentFrequencyPropertyInput): LoanPaymentFrequencyPropertyInput => objectSchemaOrgValueNode(value);

export type LoanRepaymentFormPropertyInput = Record<string, unknown>;
export const loanRepaymentFormPropertyNode = (value: LoanRepaymentFormPropertyInput): LoanRepaymentFormPropertyInput => objectSchemaOrgValueNode(value);

export type LoanTermPropertyInput = Record<string, unknown>;
export const loanTermPropertyNode = (value: LoanTermPropertyInput): LoanTermPropertyInput => objectSchemaOrgValueNode(value);

export type LoanTypePropertyInput = Record<string, unknown>;
export const loanTypePropertyNode = (value: LoanTypePropertyInput): LoanTypePropertyInput => objectSchemaOrgValueNode(value);

export type LocationPropertyInput = Record<string, unknown>;
export const locationPropertyNode = (value: LocationPropertyInput): LocationPropertyInput => objectSchemaOrgValueNode(value);

export type LocationCreatedPropertyInput = Record<string, unknown>;
export const locationCreatedPropertyNode = (value: LocationCreatedPropertyInput): LocationCreatedPropertyInput => objectSchemaOrgValueNode(value);

export type LogoPropertyInput = Record<string, unknown>;
export const logoPropertyNode = (value: LogoPropertyInput): LogoPropertyInput => objectSchemaOrgValueNode(value);

export type LongitudePropertyInput = Record<string, unknown>;
export const longitudePropertyNode = (value: LongitudePropertyInput): LongitudePropertyInput => objectSchemaOrgValueNode(value);

export type LowPricePropertyInput = Record<string, unknown>;
export const lowPricePropertyNode = (value: LowPricePropertyInput): LowPricePropertyInput => objectSchemaOrgValueNode(value);

export type LyricistPropertyInput = Record<string, unknown>;
export const lyricistPropertyNode = (value: LyricistPropertyInput): LyricistPropertyInput => objectSchemaOrgValueNode(value);

export type LyricsPropertyInput = Record<string, unknown>;
export const lyricsPropertyNode = (value: LyricsPropertyInput): LyricsPropertyInput => objectSchemaOrgValueNode(value);

export type MainContentOfPagePropertyInput = Record<string, unknown>;
export const mainContentOfPagePropertyNode = (value: MainContentOfPagePropertyInput): MainContentOfPagePropertyInput => objectSchemaOrgValueNode(value);

export type MainEntityPropertyInput = Record<string, unknown>;
export const mainEntityPropertyNode = (value: MainEntityPropertyInput): MainEntityPropertyInput => objectSchemaOrgValueNode(value);

export type MainEntityOfPagePropertyInput = Record<string, unknown>;
export const mainEntityOfPagePropertyNode = (value: MainEntityOfPagePropertyInput): MainEntityOfPagePropertyInput => objectSchemaOrgValueNode(value);

export type MaintainerPropertyInput = Record<string, unknown>;
export const maintainerPropertyNode = (value: MaintainerPropertyInput): MaintainerPropertyInput => objectSchemaOrgValueNode(value);

export type MakesOfferPropertyInput = Record<string, unknown>;
export const makesOfferPropertyNode = (value: MakesOfferPropertyInput): MakesOfferPropertyInput => objectSchemaOrgValueNode(value);

export type ManufacturerPropertyInput = Record<string, unknown>;
export const manufacturerPropertyNode = (value: ManufacturerPropertyInput): ManufacturerPropertyInput => objectSchemaOrgValueNode(value);

export type MapPropertyInput = Record<string, unknown>;
export const mapPropertyNode = (value: MapPropertyInput): MapPropertyInput => objectSchemaOrgValueNode(value);

export type MapsPropertyInput = Record<string, unknown>;
export const mapsPropertyNode = (value: MapsPropertyInput): MapsPropertyInput => objectSchemaOrgValueNode(value);

export type MapTypePropertyInput = Record<string, unknown>;
export const mapTypePropertyNode = (value: MapTypePropertyInput): MapTypePropertyInput => objectSchemaOrgValueNode(value);

export type MaterialPropertyInput = Record<string, unknown>;
export const materialPropertyNode = (value: MaterialPropertyInput): MaterialPropertyInput => objectSchemaOrgValueNode(value);

export type MaterialExtentPropertyInput = Record<string, unknown>;
export const materialExtentPropertyNode = (value: MaterialExtentPropertyInput): MaterialExtentPropertyInput => objectSchemaOrgValueNode(value);

export type MaximumAttendeeCapacityPropertyInput = Record<string, unknown>;
export const maximumAttendeeCapacityPropertyNode = (value: MaximumAttendeeCapacityPropertyInput): MaximumAttendeeCapacityPropertyInput => objectSchemaOrgValueNode(value);

export type MaximumIntakePropertyInput = Record<string, unknown>;
export const maximumIntakePropertyNode = (value: MaximumIntakePropertyInput): MaximumIntakePropertyInput => objectSchemaOrgValueNode(value);

export type MaximumPhysicalAttendeeCapacityPropertyInput = Record<string, unknown>;
export const maximumPhysicalAttendeeCapacityPropertyNode = (value: MaximumPhysicalAttendeeCapacityPropertyInput): MaximumPhysicalAttendeeCapacityPropertyInput => objectSchemaOrgValueNode(value);

export type MaximumVirtualAttendeeCapacityPropertyInput = Record<string, unknown>;
export const maximumVirtualAttendeeCapacityPropertyNode = (value: MaximumVirtualAttendeeCapacityPropertyInput): MaximumVirtualAttendeeCapacityPropertyInput => objectSchemaOrgValueNode(value);

export type MaxPricePropertyInput = Record<string, unknown>;
export const maxPricePropertyNode = (value: MaxPricePropertyInput): MaxPricePropertyInput => objectSchemaOrgValueNode(value);

export type MaxValuePropertyInput = Record<string, unknown>;
export const maxValuePropertyNode = (value: MaxValuePropertyInput): MaxValuePropertyInput => objectSchemaOrgValueNode(value);

export type MeasuredPropertyPropertyInput = Record<string, unknown>;
export const measuredPropertyPropertyNode = (value: MeasuredPropertyPropertyInput): MeasuredPropertyPropertyInput => objectSchemaOrgValueNode(value);

export type MeasurementDenominatorPropertyInput = Record<string, unknown>;
export const measurementDenominatorPropertyNode = (value: MeasurementDenominatorPropertyInput): MeasurementDenominatorPropertyInput => objectSchemaOrgValueNode(value);

export type MeasurementMethodPropertyInput = Record<string, unknown>;
export const measurementMethodPropertyNode = (value: MeasurementMethodPropertyInput): MeasurementMethodPropertyInput => objectSchemaOrgValueNode(value);

export type MeasurementQualifierPropertyInput = Record<string, unknown>;
export const measurementQualifierPropertyNode = (value: MeasurementQualifierPropertyInput): MeasurementQualifierPropertyInput => objectSchemaOrgValueNode(value);

export type MeasurementTechniquePropertyInput = Record<string, unknown>;
export const measurementTechniquePropertyNode = (value: MeasurementTechniquePropertyInput): MeasurementTechniquePropertyInput => objectSchemaOrgValueNode(value);

export type MechanismOfActionPropertyInput = Record<string, unknown>;
export const mechanismOfActionPropertyNode = (value: MechanismOfActionPropertyInput): MechanismOfActionPropertyInput => objectSchemaOrgValueNode(value);

export type MedianPropertyInput = Record<string, unknown>;
export const medianPropertyNode = (value: MedianPropertyInput): MedianPropertyInput => objectSchemaOrgValueNode(value);

export type MedicalAudiencePropertyInput = Record<string, unknown>;
export const medicalAudiencePropertyNode = (value: MedicalAudiencePropertyInput): MedicalAudiencePropertyInput => objectSchemaOrgValueNode(value);

export type MedicineSystemPropertyInput = Record<string, unknown>;
export const medicineSystemPropertyNode = (value: MedicineSystemPropertyInput): MedicineSystemPropertyInput => objectSchemaOrgValueNode(value);

export type MemberPropertyInput = Record<string, unknown>;
export const memberPropertyNode = (value: MemberPropertyInput): MemberPropertyInput => objectSchemaOrgValueNode(value);

export type MemberOfPropertyInput = Record<string, unknown>;
export const memberOfPropertyNode = (value: MemberOfPropertyInput): MemberOfPropertyInput => objectSchemaOrgValueNode(value);

export type MembersPropertyInput = Record<string, unknown>;
export const membersPropertyNode = (value: MembersPropertyInput): MembersPropertyInput => objectSchemaOrgValueNode(value);

export type MembershipNumberPropertyInput = Record<string, unknown>;
export const membershipNumberPropertyNode = (value: MembershipNumberPropertyInput): MembershipNumberPropertyInput => objectSchemaOrgValueNode(value);

export type MembershipPointsEarnedPropertyInput = Record<string, unknown>;
export const membershipPointsEarnedPropertyNode = (value: MembershipPointsEarnedPropertyInput): MembershipPointsEarnedPropertyInput => objectSchemaOrgValueNode(value);

export type MemoryRequirementsPropertyInput = Record<string, unknown>;
export const memoryRequirementsPropertyNode = (value: MemoryRequirementsPropertyInput): MemoryRequirementsPropertyInput => objectSchemaOrgValueNode(value);

export type MentionsPropertyInput = Record<string, unknown>;
export const mentionsPropertyNode = (value: MentionsPropertyInput): MentionsPropertyInput => objectSchemaOrgValueNode(value);

export type MenuAddOnPropertyInput = Record<string, unknown>;
export const menuAddOnPropertyNode = (value: MenuAddOnPropertyInput): MenuAddOnPropertyInput => objectSchemaOrgValueNode(value);

export type MerchantReturnDaysPropertyInput = Record<string, unknown>;
export const merchantReturnDaysPropertyNode = (value: MerchantReturnDaysPropertyInput): MerchantReturnDaysPropertyInput => objectSchemaOrgValueNode(value);

export type MerchantReturnLinkPropertyInput = Record<string, unknown>;
export const merchantReturnLinkPropertyNode = (value: MerchantReturnLinkPropertyInput): MerchantReturnLinkPropertyInput => objectSchemaOrgValueNode(value);

export type MinPricePropertyInput = Record<string, unknown>;
export const minPricePropertyNode = (value: MinPricePropertyInput): MinPricePropertyInput => objectSchemaOrgValueNode(value);

export type MinValuePropertyInput = Record<string, unknown>;
export const minValuePropertyNode = (value: MinValuePropertyInput): MinValuePropertyInput => objectSchemaOrgValueNode(value);

export type MobileUrlPropertyInput = Record<string, unknown>;
export const mobileUrlPropertyNode = (value: MobileUrlPropertyInput): MobileUrlPropertyInput => objectSchemaOrgValueNode(value);

export type ModelPropertyInput = Record<string, unknown>;
export const modelPropertyNode = (value: ModelPropertyInput): ModelPropertyInput => objectSchemaOrgValueNode(value);

export type MonthlyMinimumRepaymentAmountPropertyInput = Record<string, unknown>;
export const monthlyMinimumRepaymentAmountPropertyNode = (value: MonthlyMinimumRepaymentAmountPropertyInput): MonthlyMinimumRepaymentAmountPropertyInput => objectSchemaOrgValueNode(value);

export type MonthsOfExperiencePropertyInput = Record<string, unknown>;
export const monthsOfExperiencePropertyNode = (value: MonthsOfExperiencePropertyInput): MonthsOfExperiencePropertyInput => objectSchemaOrgValueNode(value);

export type MpnPropertyInput = Record<string, unknown>;
export const mpnPropertyNode = (value: MpnPropertyInput): MpnPropertyInput => objectSchemaOrgValueNode(value);

export type MusicalKeyPropertyInput = Record<string, unknown>;
export const musicalKeyPropertyNode = (value: MusicalKeyPropertyInput): MusicalKeyPropertyInput => objectSchemaOrgValueNode(value);

export type MusicArrangementPropertyInput = Record<string, unknown>;
export const musicArrangementPropertyNode = (value: MusicArrangementPropertyInput): MusicArrangementPropertyInput => objectSchemaOrgValueNode(value);

export type MusicByPropertyInput = Record<string, unknown>;
export const musicByPropertyNode = (value: MusicByPropertyInput): MusicByPropertyInput => objectSchemaOrgValueNode(value);

export type MusicCompositionFormPropertyInput = Record<string, unknown>;
export const musicCompositionFormPropertyNode = (value: MusicCompositionFormPropertyInput): MusicCompositionFormPropertyInput => objectSchemaOrgValueNode(value);

export type MusicGroupMemberPropertyInput = Record<string, unknown>;
export const musicGroupMemberPropertyNode = (value: MusicGroupMemberPropertyInput): MusicGroupMemberPropertyInput => objectSchemaOrgValueNode(value);

export type MusicReleaseFormatPropertyInput = Record<string, unknown>;
export const musicReleaseFormatPropertyNode = (value: MusicReleaseFormatPropertyInput): MusicReleaseFormatPropertyInput => objectSchemaOrgValueNode(value);

export type NaicsPropertyInput = Record<string, unknown>;
export const naicsPropertyNode = (value: NaicsPropertyInput): NaicsPropertyInput => objectSchemaOrgValueNode(value);

export type NamePropertyInput = Record<string, unknown>;
export const namePropertyNode = (value: NamePropertyInput): NamePropertyInput => objectSchemaOrgValueNode(value);

export type NationalityPropertyInput = Record<string, unknown>;
export const nationalityPropertyNode = (value: NationalityPropertyInput): NationalityPropertyInput => objectSchemaOrgValueNode(value);

export type NaturalProgressionPropertyInput = Record<string, unknown>;
export const naturalProgressionPropertyNode = (value: NaturalProgressionPropertyInput): NaturalProgressionPropertyInput => objectSchemaOrgValueNode(value);

export type NegativeNotesPropertyInput = Record<string, unknown>;
export const negativeNotesPropertyNode = (value: NegativeNotesPropertyInput): NegativeNotesPropertyInput => objectSchemaOrgValueNode(value);

export type NetWorthPropertyInput = Record<string, unknown>;
export const netWorthPropertyNode = (value: NetWorthPropertyInput): NetWorthPropertyInput => objectSchemaOrgValueNode(value);

export type NextItemPropertyInput = Record<string, unknown>;
export const nextItemPropertyNode = (value: NextItemPropertyInput): NextItemPropertyInput => objectSchemaOrgValueNode(value);

export type NonprofitStatusPropertyInput = Record<string, unknown>;
export const nonprofitStatusPropertyNode = (value: NonprofitStatusPropertyInput): NonprofitStatusPropertyInput => objectSchemaOrgValueNode(value);

export type NonProprietaryNamePropertyInput = Record<string, unknown>;
export const nonProprietaryNamePropertyNode = (value: NonProprietaryNamePropertyInput): NonProprietaryNamePropertyInput => objectSchemaOrgValueNode(value);

export type NormalRangePropertyInput = Record<string, unknown>;
export const normalRangePropertyNode = (value: NormalRangePropertyInput): NormalRangePropertyInput => objectSchemaOrgValueNode(value);

export type NsnPropertyInput = Record<string, unknown>;
export const nsnPropertyNode = (value: NsnPropertyInput): NsnPropertyInput => objectSchemaOrgValueNode(value);

export type NumberOfEmployeesPropertyInput = Record<string, unknown>;
export const numberOfEmployeesPropertyNode = (value: NumberOfEmployeesPropertyInput): NumberOfEmployeesPropertyInput => objectSchemaOrgValueNode(value);

export type NumberOfEpisodesPropertyInput = Record<string, unknown>;
export const numberOfEpisodesPropertyNode = (value: NumberOfEpisodesPropertyInput): NumberOfEpisodesPropertyInput => objectSchemaOrgValueNode(value);

export type NumberOfItemsPropertyInput = Record<string, unknown>;
export const numberOfItemsPropertyNode = (value: NumberOfItemsPropertyInput): NumberOfItemsPropertyInput => objectSchemaOrgValueNode(value);

export type NumberOfLoanPaymentsPropertyInput = Record<string, unknown>;
export const numberOfLoanPaymentsPropertyNode = (value: NumberOfLoanPaymentsPropertyInput): NumberOfLoanPaymentsPropertyInput => objectSchemaOrgValueNode(value);

export type NumConstraintsPropertyInput = Record<string, unknown>;
export const numConstraintsPropertyNode = (value: NumConstraintsPropertyInput): NumConstraintsPropertyInput => objectSchemaOrgValueNode(value);

export type NumItemsPropertyInput = Record<string, unknown>;
export const numItemsPropertyNode = (value: NumItemsPropertyInput): NumItemsPropertyInput => objectSchemaOrgValueNode(value);

export type NumTracksPropertyInput = Record<string, unknown>;
export const numTracksPropertyNode = (value: NumTracksPropertyInput): NumTracksPropertyInput => objectSchemaOrgValueNode(value);

export type NutritionPropertyInput = Record<string, unknown>;
export const nutritionPropertyNode = (value: NutritionPropertyInput): NutritionPropertyInput => objectSchemaOrgValueNode(value);

export type ObjectPropertyInput = Record<string, unknown>;
export const objectPropertyNode = (value: ObjectPropertyInput): ObjectPropertyInput => objectSchemaOrgValueNode(value);

export type OccupationalCategoryPropertyInput = Record<string, unknown>;
export const occupationalCategoryPropertyNode = (value: OccupationalCategoryPropertyInput): OccupationalCategoryPropertyInput => objectSchemaOrgValueNode(value);

export type OccupationLocationPropertyInput = Record<string, unknown>;
export const occupationLocationPropertyNode = (value: OccupationLocationPropertyInput): OccupationLocationPropertyInput => objectSchemaOrgValueNode(value);

export type OfferCountPropertyInput = Record<string, unknown>;
export const offerCountPropertyNode = (value: OfferCountPropertyInput): OfferCountPropertyInput => objectSchemaOrgValueNode(value);

export type OfferedByPropertyInput = Record<string, unknown>;
export const offeredByPropertyNode = (value: OfferedByPropertyInput): OfferedByPropertyInput => objectSchemaOrgValueNode(value);

export type OffersPropertyInput = Record<string, unknown>;
export const offersPropertyNode = (value: OffersPropertyInput): OffersPropertyInput => objectSchemaOrgValueNode(value);

export type OffersPrescriptionByMailPropertyInput = Record<string, unknown>;
export const offersPrescriptionByMailPropertyNode = (value: OffersPrescriptionByMailPropertyInput): OffersPrescriptionByMailPropertyInput => objectSchemaOrgValueNode(value);

export type OpeningHoursPropertyInput = Record<string, unknown>;
export const openingHoursPropertyNode = (value: OpeningHoursPropertyInput): OpeningHoursPropertyInput => objectSchemaOrgValueNode(value);

export type OpeningHoursSpecificationPropertyInput = Record<string, unknown>;
export const openingHoursSpecificationPropertyNode = (value: OpeningHoursSpecificationPropertyInput): OpeningHoursSpecificationPropertyInput => objectSchemaOrgValueNode(value);

export type OpensPropertyInput = Record<string, unknown>;
export const opensPropertyNode = (value: OpensPropertyInput): OpensPropertyInput => objectSchemaOrgValueNode(value);

export type OperatingSystemPropertyInput = Record<string, unknown>;
export const operatingSystemPropertyNode = (value: OperatingSystemPropertyInput): OperatingSystemPropertyInput => objectSchemaOrgValueNode(value);

export type OrderPercentagePropertyInput = Record<string, unknown>;
export const orderPercentagePropertyNode = (value: OrderPercentagePropertyInput): OrderPercentagePropertyInput => objectSchemaOrgValueNode(value);

export type OrderValuePropertyInput = Record<string, unknown>;
export const orderValuePropertyNode = (value: OrderValuePropertyInput): OrderValuePropertyInput => objectSchemaOrgValueNode(value);

export type OrganizerPropertyInput = Record<string, unknown>;
export const organizerPropertyNode = (value: OrganizerPropertyInput): OrganizerPropertyInput => objectSchemaOrgValueNode(value);

export type OverdosagePropertyInput = Record<string, unknown>;
export const overdosagePropertyNode = (value: OverdosagePropertyInput): OverdosagePropertyInput => objectSchemaOrgValueNode(value);

export type OwnerPropertyInput = Record<string, unknown>;
export const ownerPropertyNode = (value: OwnerPropertyInput): OwnerPropertyInput => objectSchemaOrgValueNode(value);

export type OwnershipFundingInfoPropertyInput = Record<string, unknown>;
export const ownershipFundingInfoPropertyNode = (value: OwnershipFundingInfoPropertyInput): OwnershipFundingInfoPropertyInput => objectSchemaOrgValueNode(value);

export type OwnsPropertyInput = Record<string, unknown>;
export const ownsPropertyNode = (value: OwnsPropertyInput): OwnsPropertyInput => objectSchemaOrgValueNode(value);

export type PageEndPropertyInput = Record<string, unknown>;
export const pageEndPropertyNode = (value: PageEndPropertyInput): PageEndPropertyInput => objectSchemaOrgValueNode(value);

export type PageStartPropertyInput = Record<string, unknown>;
export const pageStartPropertyNode = (value: PageStartPropertyInput): PageStartPropertyInput => objectSchemaOrgValueNode(value);

export type PaginationPropertyInput = Record<string, unknown>;
export const paginationPropertyNode = (value: PaginationPropertyInput): PaginationPropertyInput => objectSchemaOrgValueNode(value);

export type ParentPropertyInput = Record<string, unknown>;
export const parentPropertyNode = (value: ParentPropertyInput): ParentPropertyInput => objectSchemaOrgValueNode(value);

export type ParentItemPropertyInput = Record<string, unknown>;
export const parentItemPropertyNode = (value: ParentItemPropertyInput): ParentItemPropertyInput => objectSchemaOrgValueNode(value);

export type ParentOrganizationPropertyInput = Record<string, unknown>;
export const parentOrganizationPropertyNode = (value: ParentOrganizationPropertyInput): ParentOrganizationPropertyInput => objectSchemaOrgValueNode(value);

export type ParentsPropertyInput = Record<string, unknown>;
export const parentsPropertyNode = (value: ParentsPropertyInput): ParentsPropertyInput => objectSchemaOrgValueNode(value);

export type ParentServicePropertyInput = Record<string, unknown>;
export const parentServicePropertyNode = (value: ParentServicePropertyInput): ParentServicePropertyInput => objectSchemaOrgValueNode(value);

export type ParentTaxonPropertyInput = Record<string, unknown>;
export const parentTaxonPropertyNode = (value: ParentTaxonPropertyInput): ParentTaxonPropertyInput => objectSchemaOrgValueNode(value);

export type ParticipantPropertyInput = Record<string, unknown>;
export const participantPropertyNode = (value: ParticipantPropertyInput): ParticipantPropertyInput => objectSchemaOrgValueNode(value);

export type PartOfEpisodePropertyInput = Record<string, unknown>;
export const partOfEpisodePropertyNode = (value: PartOfEpisodePropertyInput): PartOfEpisodePropertyInput => objectSchemaOrgValueNode(value);

export type PartOfSeasonPropertyInput = Record<string, unknown>;
export const partOfSeasonPropertyNode = (value: PartOfSeasonPropertyInput): PartOfSeasonPropertyInput => objectSchemaOrgValueNode(value);

export type PartOfSeriesPropertyInput = Record<string, unknown>;
export const partOfSeriesPropertyNode = (value: PartOfSeriesPropertyInput): PartOfSeriesPropertyInput => objectSchemaOrgValueNode(value);

export type PartOfSystemPropertyInput = Record<string, unknown>;
export const partOfSystemPropertyNode = (value: PartOfSystemPropertyInput): PartOfSystemPropertyInput => objectSchemaOrgValueNode(value);

export type PartOfTripPropertyInput = Record<string, unknown>;
export const partOfTripPropertyNode = (value: PartOfTripPropertyInput): PartOfTripPropertyInput => objectSchemaOrgValueNode(value);

export type PathophysiologyPropertyInput = Record<string, unknown>;
export const pathophysiologyPropertyNode = (value: PathophysiologyPropertyInput): PathophysiologyPropertyInput => objectSchemaOrgValueNode(value);

export type PatternPropertyInput = Record<string, unknown>;
export const patternPropertyNode = (value: PatternPropertyInput): PatternPropertyInput => objectSchemaOrgValueNode(value);

export type PaymentMethodTypePropertyInput = Record<string, unknown>;
export const paymentMethodTypePropertyNode = (value: PaymentMethodTypePropertyInput): PaymentMethodTypePropertyInput => objectSchemaOrgValueNode(value);

export type Percentile10PropertyInput = Record<string, unknown>;
export const percentile10PropertyNode = (value: Percentile10PropertyInput): Percentile10PropertyInput => objectSchemaOrgValueNode(value);

export type Percentile25PropertyInput = Record<string, unknown>;
export const percentile25PropertyNode = (value: Percentile25PropertyInput): Percentile25PropertyInput => objectSchemaOrgValueNode(value);

export type Percentile75PropertyInput = Record<string, unknown>;
export const percentile75PropertyNode = (value: Percentile75PropertyInput): Percentile75PropertyInput => objectSchemaOrgValueNode(value);

export type Percentile90PropertyInput = Record<string, unknown>;
export const percentile90PropertyNode = (value: Percentile90PropertyInput): Percentile90PropertyInput => objectSchemaOrgValueNode(value);

export type PerformerPropertyInput = Record<string, unknown>;
export const performerPropertyNode = (value: PerformerPropertyInput): PerformerPropertyInput => objectSchemaOrgValueNode(value);

export type PerformerInPropertyInput = Record<string, unknown>;
export const performerInPropertyNode = (value: PerformerInPropertyInput): PerformerInPropertyInput => objectSchemaOrgValueNode(value);

export type PerformersPropertyInput = Record<string, unknown>;
export const performersPropertyNode = (value: PerformersPropertyInput): PerformersPropertyInput => objectSchemaOrgValueNode(value);

export type PerformTimePropertyInput = Record<string, unknown>;
export const performTimePropertyNode = (value: PerformTimePropertyInput): PerformTimePropertyInput => objectSchemaOrgValueNode(value);

export type PermissionsPropertyInput = Record<string, unknown>;
export const permissionsPropertyNode = (value: PermissionsPropertyInput): PermissionsPropertyInput => objectSchemaOrgValueNode(value);

export type PhotoPropertyInput = Record<string, unknown>;
export const photoPropertyNode = (value: PhotoPropertyInput): PhotoPropertyInput => objectSchemaOrgValueNode(value);

export type PhotosPropertyInput = Record<string, unknown>;
export const photosPropertyNode = (value: PhotosPropertyInput): PhotosPropertyInput => objectSchemaOrgValueNode(value);

export type PhysiologicalBenefitsPropertyInput = Record<string, unknown>;
export const physiologicalBenefitsPropertyNode = (value: PhysiologicalBenefitsPropertyInput): PhysiologicalBenefitsPropertyInput => objectSchemaOrgValueNode(value);

export type PlayerTypePropertyInput = Record<string, unknown>;
export const playerTypePropertyNode = (value: PlayerTypePropertyInput): PlayerTypePropertyInput => objectSchemaOrgValueNode(value);

export type PolygonPropertyInput = Record<string, unknown>;
export const polygonPropertyNode = (value: PolygonPropertyInput): PolygonPropertyInput => objectSchemaOrgValueNode(value);

export type PopulationTypePropertyInput = Record<string, unknown>;
export const populationTypePropertyNode = (value: PopulationTypePropertyInput): PopulationTypePropertyInput => objectSchemaOrgValueNode(value);

export type PositionPropertyInput = Record<string, unknown>;
export const positionPropertyNode = (value: PositionPropertyInput): PositionPropertyInput => objectSchemaOrgValueNode(value);

export type PositiveNotesPropertyInput = Record<string, unknown>;
export const positiveNotesPropertyNode = (value: PositiveNotesPropertyInput): PositiveNotesPropertyInput => objectSchemaOrgValueNode(value);

export type PossibleComplicationPropertyInput = Record<string, unknown>;
export const possibleComplicationPropertyNode = (value: PossibleComplicationPropertyInput): PossibleComplicationPropertyInput => objectSchemaOrgValueNode(value);

export type PossibleTreatmentPropertyInput = Record<string, unknown>;
export const possibleTreatmentPropertyNode = (value: PossibleTreatmentPropertyInput): PossibleTreatmentPropertyInput => objectSchemaOrgValueNode(value);

export type PostalCodePropertyInput = Record<string, unknown>;
export const postalCodePropertyNode = (value: PostalCodePropertyInput): PostalCodePropertyInput => objectSchemaOrgValueNode(value);

export type PostalCodeBeginPropertyInput = Record<string, unknown>;
export const postalCodeBeginPropertyNode = (value: PostalCodeBeginPropertyInput): PostalCodeBeginPropertyInput => objectSchemaOrgValueNode(value);

export type PostalCodeEndPropertyInput = Record<string, unknown>;
export const postalCodeEndPropertyNode = (value: PostalCodeEndPropertyInput): PostalCodeEndPropertyInput => objectSchemaOrgValueNode(value);

export type PostalCodePrefixPropertyInput = Record<string, unknown>;
export const postalCodePrefixPropertyNode = (value: PostalCodePrefixPropertyInput): PostalCodePrefixPropertyInput => objectSchemaOrgValueNode(value);

export type PostalCodeRangePropertyInput = Record<string, unknown>;
export const postalCodeRangePropertyNode = (value: PostalCodeRangePropertyInput): PostalCodeRangePropertyInput => objectSchemaOrgValueNode(value);

export type PostOfficeBoxNumberPropertyInput = Record<string, unknown>;
export const postOfficeBoxNumberPropertyNode = (value: PostOfficeBoxNumberPropertyInput): PostOfficeBoxNumberPropertyInput => objectSchemaOrgValueNode(value);

export type PostOpPropertyInput = Record<string, unknown>;
export const postOpPropertyNode = (value: PostOpPropertyInput): PostOpPropertyInput => objectSchemaOrgValueNode(value);

export type PotentialActionPropertyInput = Record<string, unknown>;
export const potentialActionPropertyNode = (value: PotentialActionPropertyInput): PotentialActionPropertyInput => objectSchemaOrgValueNode(value);

export type PredecessorOfPropertyInput = Record<string, unknown>;
export const predecessorOfPropertyNode = (value: PredecessorOfPropertyInput): PredecessorOfPropertyInput => objectSchemaOrgValueNode(value);

export type PregnancyCategoryPropertyInput = Record<string, unknown>;
export const pregnancyCategoryPropertyNode = (value: PregnancyCategoryPropertyInput): PregnancyCategoryPropertyInput => objectSchemaOrgValueNode(value);

export type PregnancyWarningPropertyInput = Record<string, unknown>;
export const pregnancyWarningPropertyNode = (value: PregnancyWarningPropertyInput): PregnancyWarningPropertyInput => objectSchemaOrgValueNode(value);

export type PreOpPropertyInput = Record<string, unknown>;
export const preOpPropertyNode = (value: PreOpPropertyInput): PreOpPropertyInput => objectSchemaOrgValueNode(value);

export type PreparationPropertyInput = Record<string, unknown>;
export const preparationPropertyNode = (value: PreparationPropertyInput): PreparationPropertyInput => objectSchemaOrgValueNode(value);

export type PrepTimePropertyInput = Record<string, unknown>;
export const prepTimePropertyNode = (value: PrepTimePropertyInput): PrepTimePropertyInput => objectSchemaOrgValueNode(value);

export type PrescribingInfoPropertyInput = Record<string, unknown>;
export const prescribingInfoPropertyNode = (value: PrescribingInfoPropertyInput): PrescribingInfoPropertyInput => objectSchemaOrgValueNode(value);

export type PrescriptionStatusPropertyInput = Record<string, unknown>;
export const prescriptionStatusPropertyNode = (value: PrescriptionStatusPropertyInput): PrescriptionStatusPropertyInput => objectSchemaOrgValueNode(value);

export type PreviousItemPropertyInput = Record<string, unknown>;
export const previousItemPropertyNode = (value: PreviousItemPropertyInput): PreviousItemPropertyInput => objectSchemaOrgValueNode(value);

export type PreviousStartDatePropertyInput = Record<string, unknown>;
export const previousStartDatePropertyNode = (value: PreviousStartDatePropertyInput): PreviousStartDatePropertyInput => objectSchemaOrgValueNode(value);

export type PricePropertyInput = Record<string, unknown>;
export const pricePropertyNode = (value: PricePropertyInput): PricePropertyInput => objectSchemaOrgValueNode(value);

export type PriceComponentTypePropertyInput = Record<string, unknown>;
export const priceComponentTypePropertyNode = (value: PriceComponentTypePropertyInput): PriceComponentTypePropertyInput => objectSchemaOrgValueNode(value);

export type PriceCurrencyPropertyInput = Record<string, unknown>;
export const priceCurrencyPropertyNode = (value: PriceCurrencyPropertyInput): PriceCurrencyPropertyInput => objectSchemaOrgValueNode(value);

export type PriceSpecificationPropertyInput = Record<string, unknown>;
export const priceSpecificationPropertyNode = (value: PriceSpecificationPropertyInput): PriceSpecificationPropertyInput => objectSchemaOrgValueNode(value);

export type PriceTypePropertyInput = Record<string, unknown>;
export const priceTypePropertyNode = (value: PriceTypePropertyInput): PriceTypePropertyInput => objectSchemaOrgValueNode(value);

export type PriceValidUntilPropertyInput = Record<string, unknown>;
export const priceValidUntilPropertyNode = (value: PriceValidUntilPropertyInput): PriceValidUntilPropertyInput => objectSchemaOrgValueNode(value);

export type PrimaryImageOfPagePropertyInput = Record<string, unknown>;
export const primaryImageOfPagePropertyNode = (value: PrimaryImageOfPagePropertyInput): PrimaryImageOfPagePropertyInput => objectSchemaOrgValueNode(value);

export type PrimaryPreventionPropertyInput = Record<string, unknown>;
export const primaryPreventionPropertyNode = (value: PrimaryPreventionPropertyInput): PrimaryPreventionPropertyInput => objectSchemaOrgValueNode(value);

export type PrintColumnPropertyInput = Record<string, unknown>;
export const printColumnPropertyNode = (value: PrintColumnPropertyInput): PrintColumnPropertyInput => objectSchemaOrgValueNode(value);

export type PrintEditionPropertyInput = Record<string, unknown>;
export const printEditionPropertyNode = (value: PrintEditionPropertyInput): PrintEditionPropertyInput => objectSchemaOrgValueNode(value);

export type PrintPagePropertyInput = Record<string, unknown>;
export const printPagePropertyNode = (value: PrintPagePropertyInput): PrintPagePropertyInput => objectSchemaOrgValueNode(value);

export type PrintSectionPropertyInput = Record<string, unknown>;
export const printSectionPropertyNode = (value: PrintSectionPropertyInput): PrintSectionPropertyInput => objectSchemaOrgValueNode(value);

export type ProcedurePropertyInput = Record<string, unknown>;
export const procedurePropertyNode = (value: ProcedurePropertyInput): ProcedurePropertyInput => objectSchemaOrgValueNode(value);

export type ProcedureTypePropertyInput = Record<string, unknown>;
export const procedureTypePropertyNode = (value: ProcedureTypePropertyInput): ProcedureTypePropertyInput => objectSchemaOrgValueNode(value);

export type ProcessingTimePropertyInput = Record<string, unknown>;
export const processingTimePropertyNode = (value: ProcessingTimePropertyInput): ProcessingTimePropertyInput => objectSchemaOrgValueNode(value);

export type ProcessorRequirementsPropertyInput = Record<string, unknown>;
export const processorRequirementsPropertyNode = (value: ProcessorRequirementsPropertyInput): ProcessorRequirementsPropertyInput => objectSchemaOrgValueNode(value);

export type ProducerPropertyInput = Record<string, unknown>;
export const producerPropertyNode = (value: ProducerPropertyInput): ProducerPropertyInput => objectSchemaOrgValueNode(value);

export type ProducesPropertyInput = Record<string, unknown>;
export const producesPropertyNode = (value: ProducesPropertyInput): ProducesPropertyInput => objectSchemaOrgValueNode(value);

export type ProductGroupIDPropertyInput = Record<string, unknown>;
export const productGroupIDPropertyNode = (value: ProductGroupIDPropertyInput): ProductGroupIDPropertyInput => objectSchemaOrgValueNode(value);

export type ProductIDPropertyInput = Record<string, unknown>;
export const productIDPropertyNode = (value: ProductIDPropertyInput): ProductIDPropertyInput => objectSchemaOrgValueNode(value);

export type ProductionCompanyPropertyInput = Record<string, unknown>;
export const productionCompanyPropertyNode = (value: ProductionCompanyPropertyInput): ProductionCompanyPropertyInput => objectSchemaOrgValueNode(value);

export type ProductionDatePropertyInput = Record<string, unknown>;
export const productionDatePropertyNode = (value: ProductionDatePropertyInput): ProductionDatePropertyInput => objectSchemaOrgValueNode(value);

export type ProductSupportedPropertyInput = Record<string, unknown>;
export const productSupportedPropertyNode = (value: ProductSupportedPropertyInput): ProductSupportedPropertyInput => objectSchemaOrgValueNode(value);

export type ProgramPropertyInput = Record<string, unknown>;
export const programPropertyNode = (value: ProgramPropertyInput): ProgramPropertyInput => objectSchemaOrgValueNode(value);

export type ProgramNamePropertyInput = Record<string, unknown>;
export const programNamePropertyNode = (value: ProgramNamePropertyInput): ProgramNamePropertyInput => objectSchemaOrgValueNode(value);

export type PronounsPropertyInput = Record<string, unknown>;
export const pronounsPropertyNode = (value: PronounsPropertyInput): PronounsPropertyInput => objectSchemaOrgValueNode(value);

export type PropertyIDPropertyInput = Record<string, unknown>;
export const propertyIDPropertyNode = (value: PropertyIDPropertyInput): PropertyIDPropertyInput => objectSchemaOrgValueNode(value);

export type ProprietaryNamePropertyInput = Record<string, unknown>;
export const proprietaryNamePropertyNode = (value: ProprietaryNamePropertyInput): ProprietaryNamePropertyInput => objectSchemaOrgValueNode(value);

export type ProteinContentPropertyInput = Record<string, unknown>;
export const proteinContentPropertyNode = (value: ProteinContentPropertyInput): ProteinContentPropertyInput => objectSchemaOrgValueNode(value);

export type ProviderPropertyInput = Record<string, unknown>;
export const providerPropertyNode = (value: ProviderPropertyInput): ProviderPropertyInput => objectSchemaOrgValueNode(value);

export type ProviderMobilityPropertyInput = Record<string, unknown>;
export const providerMobilityPropertyNode = (value: ProviderMobilityPropertyInput): ProviderMobilityPropertyInput => objectSchemaOrgValueNode(value);

export type ProvidesBroadcastServicePropertyInput = Record<string, unknown>;
export const providesBroadcastServicePropertyNode = (value: ProvidesBroadcastServicePropertyInput): ProvidesBroadcastServicePropertyInput => objectSchemaOrgValueNode(value);

export type ProvidesServicePropertyInput = Record<string, unknown>;
export const providesServicePropertyNode = (value: ProvidesServicePropertyInput): ProvidesServicePropertyInput => objectSchemaOrgValueNode(value);

export type PublicAccessPropertyInput = Record<string, unknown>;
export const publicAccessPropertyNode = (value: PublicAccessPropertyInput): PublicAccessPropertyInput => objectSchemaOrgValueNode(value);

export type PublicationPropertyInput = Record<string, unknown>;
export const publicationPropertyNode = (value: PublicationPropertyInput): PublicationPropertyInput => objectSchemaOrgValueNode(value);

export type PublishedByPropertyInput = Record<string, unknown>;
export const publishedByPropertyNode = (value: PublishedByPropertyInput): PublishedByPropertyInput => objectSchemaOrgValueNode(value);

export type PublishedOnPropertyInput = Record<string, unknown>;
export const publishedOnPropertyNode = (value: PublishedOnPropertyInput): PublishedOnPropertyInput => objectSchemaOrgValueNode(value);

export type PublisherPropertyInput = Record<string, unknown>;
export const publisherPropertyNode = (value: PublisherPropertyInput): PublisherPropertyInput => objectSchemaOrgValueNode(value);

export type PublisherImprintPropertyInput = Record<string, unknown>;
export const publisherImprintPropertyNode = (value: PublisherImprintPropertyInput): PublisherImprintPropertyInput => objectSchemaOrgValueNode(value);

export type PublishingPrinciplesPropertyInput = Record<string, unknown>;
export const publishingPrinciplesPropertyNode = (value: PublishingPrinciplesPropertyInput): PublishingPrinciplesPropertyInput => objectSchemaOrgValueNode(value);

export type PurchaseDatePropertyInput = Record<string, unknown>;
export const purchaseDatePropertyNode = (value: PurchaseDatePropertyInput): PurchaseDatePropertyInput => objectSchemaOrgValueNode(value);

export type QualificationsPropertyInput = Record<string, unknown>;
export const qualificationsPropertyNode = (value: QualificationsPropertyInput): QualificationsPropertyInput => objectSchemaOrgValueNode(value);

export type RangeIncludesPropertyInput = Record<string, unknown>;
export const rangeIncludesPropertyNode = (value: RangeIncludesPropertyInput): RangeIncludesPropertyInput => objectSchemaOrgValueNode(value);

export type RatingCountPropertyInput = Record<string, unknown>;
export const ratingCountPropertyNode = (value: RatingCountPropertyInput): RatingCountPropertyInput => objectSchemaOrgValueNode(value);

export type RatingExplanationPropertyInput = Record<string, unknown>;
export const ratingExplanationPropertyNode = (value: RatingExplanationPropertyInput): RatingExplanationPropertyInput => objectSchemaOrgValueNode(value);

export type RatingValuePropertyInput = Record<string, unknown>;
export const ratingValuePropertyNode = (value: RatingValuePropertyInput): RatingValuePropertyInput => objectSchemaOrgValueNode(value);

export type RecognizedByPropertyInput = Record<string, unknown>;
export const recognizedByPropertyNode = (value: RecognizedByPropertyInput): RecognizedByPropertyInput => objectSchemaOrgValueNode(value);

export type RecognizingAuthorityPropertyInput = Record<string, unknown>;
export const recognizingAuthorityPropertyNode = (value: RecognizingAuthorityPropertyInput): RecognizingAuthorityPropertyInput => objectSchemaOrgValueNode(value);

export type RecordedAsPropertyInput = Record<string, unknown>;
export const recordedAsPropertyNode = (value: RecordedAsPropertyInput): RecordedAsPropertyInput => objectSchemaOrgValueNode(value);

export type RecordedAtPropertyInput = Record<string, unknown>;
export const recordedAtPropertyNode = (value: RecordedAtPropertyInput): RecordedAtPropertyInput => objectSchemaOrgValueNode(value);

export type RecordedInPropertyInput = Record<string, unknown>;
export const recordedInPropertyNode = (value: RecordedInPropertyInput): RecordedInPropertyInput => objectSchemaOrgValueNode(value);

export type RecordingOfPropertyInput = Record<string, unknown>;
export const recordingOfPropertyNode = (value: RecordingOfPropertyInput): RecordingOfPropertyInput => objectSchemaOrgValueNode(value);

export type RecordLabelPropertyInput = Record<string, unknown>;
export const recordLabelPropertyNode = (value: RecordLabelPropertyInput): RecordLabelPropertyInput => objectSchemaOrgValueNode(value);

export type RecourseLoanPropertyInput = Record<string, unknown>;
export const recourseLoanPropertyNode = (value: RecourseLoanPropertyInput): RecourseLoanPropertyInput => objectSchemaOrgValueNode(value);

export type ReferenceQuantityPropertyInput = Record<string, unknown>;
export const referenceQuantityPropertyNode = (value: ReferenceQuantityPropertyInput): ReferenceQuantityPropertyInput => objectSchemaOrgValueNode(value);

export type RefundTypePropertyInput = Record<string, unknown>;
export const refundTypePropertyNode = (value: RefundTypePropertyInput): RefundTypePropertyInput => objectSchemaOrgValueNode(value);

export type RegionsAllowedPropertyInput = Record<string, unknown>;
export const regionsAllowedPropertyNode = (value: RegionsAllowedPropertyInput): RegionsAllowedPropertyInput => objectSchemaOrgValueNode(value);

export type RelatedAnatomyPropertyInput = Record<string, unknown>;
export const relatedAnatomyPropertyNode = (value: RelatedAnatomyPropertyInput): RelatedAnatomyPropertyInput => objectSchemaOrgValueNode(value);

export type RelatedConditionPropertyInput = Record<string, unknown>;
export const relatedConditionPropertyNode = (value: RelatedConditionPropertyInput): RelatedConditionPropertyInput => objectSchemaOrgValueNode(value);

export type RelatedDrugPropertyInput = Record<string, unknown>;
export const relatedDrugPropertyNode = (value: RelatedDrugPropertyInput): RelatedDrugPropertyInput => objectSchemaOrgValueNode(value);

export type RelatedLinkPropertyInput = Record<string, unknown>;
export const relatedLinkPropertyNode = (value: RelatedLinkPropertyInput): RelatedLinkPropertyInput => objectSchemaOrgValueNode(value);

export type RelatedStructurePropertyInput = Record<string, unknown>;
export const relatedStructurePropertyNode = (value: RelatedStructurePropertyInput): RelatedStructurePropertyInput => objectSchemaOrgValueNode(value);

export type RelatedTherapyPropertyInput = Record<string, unknown>;
export const relatedTherapyPropertyNode = (value: RelatedTherapyPropertyInput): RelatedTherapyPropertyInput => objectSchemaOrgValueNode(value);

export type RelatedToPropertyInput = Record<string, unknown>;
export const relatedToPropertyNode = (value: RelatedToPropertyInput): RelatedToPropertyInput => objectSchemaOrgValueNode(value);

export type ReleaseDatePropertyInput = Record<string, unknown>;
export const releaseDatePropertyNode = (value: ReleaseDatePropertyInput): ReleaseDatePropertyInput => objectSchemaOrgValueNode(value);

export type ReleasedEventPropertyInput = Record<string, unknown>;
export const releasedEventPropertyNode = (value: ReleasedEventPropertyInput): ReleasedEventPropertyInput => objectSchemaOrgValueNode(value);

export type ReleaseNotesPropertyInput = Record<string, unknown>;
export const releaseNotesPropertyNode = (value: ReleaseNotesPropertyInput): ReleaseNotesPropertyInput => objectSchemaOrgValueNode(value);

export type ReleaseOfPropertyInput = Record<string, unknown>;
export const releaseOfPropertyNode = (value: ReleaseOfPropertyInput): ReleaseOfPropertyInput => objectSchemaOrgValueNode(value);

export type RelevantSpecialtyPropertyInput = Record<string, unknown>;
export const relevantSpecialtyPropertyNode = (value: RelevantSpecialtyPropertyInput): RelevantSpecialtyPropertyInput => objectSchemaOrgValueNode(value);

export type RemainingAttendeeCapacityPropertyInput = Record<string, unknown>;
export const remainingAttendeeCapacityPropertyNode = (value: RemainingAttendeeCapacityPropertyInput): RemainingAttendeeCapacityPropertyInput => objectSchemaOrgValueNode(value);

export type RenegotiableLoanPropertyInput = Record<string, unknown>;
export const renegotiableLoanPropertyNode = (value: RenegotiableLoanPropertyInput): RenegotiableLoanPropertyInput => objectSchemaOrgValueNode(value);

export type RepeatCountPropertyInput = Record<string, unknown>;
export const repeatCountPropertyNode = (value: RepeatCountPropertyInput): RepeatCountPropertyInput => objectSchemaOrgValueNode(value);

export type RepeatFrequencyPropertyInput = Record<string, unknown>;
export const repeatFrequencyPropertyNode = (value: RepeatFrequencyPropertyInput): RepeatFrequencyPropertyInput => objectSchemaOrgValueNode(value);

export type RepresentativeOfPagePropertyInput = Record<string, unknown>;
export const representativeOfPagePropertyNode = (value: RepresentativeOfPagePropertyInput): RepresentativeOfPagePropertyInput => objectSchemaOrgValueNode(value);

export type RequiredCollateralPropertyInput = Record<string, unknown>;
export const requiredCollateralPropertyNode = (value: RequiredCollateralPropertyInput): RequiredCollateralPropertyInput => objectSchemaOrgValueNode(value);

export type RequiredGenderPropertyInput = Record<string, unknown>;
export const requiredGenderPropertyNode = (value: RequiredGenderPropertyInput): RequiredGenderPropertyInput => objectSchemaOrgValueNode(value);

export type RequiredMaxAgePropertyInput = Record<string, unknown>;
export const requiredMaxAgePropertyNode = (value: RequiredMaxAgePropertyInput): RequiredMaxAgePropertyInput => objectSchemaOrgValueNode(value);

export type RequiredMinAgePropertyInput = Record<string, unknown>;
export const requiredMinAgePropertyNode = (value: RequiredMinAgePropertyInput): RequiredMinAgePropertyInput => objectSchemaOrgValueNode(value);

export type RequiredQuantityPropertyInput = Record<string, unknown>;
export const requiredQuantityPropertyNode = (value: RequiredQuantityPropertyInput): RequiredQuantityPropertyInput => objectSchemaOrgValueNode(value);

export type RequirementsPropertyInput = Record<string, unknown>;
export const requirementsPropertyNode = (value: RequirementsPropertyInput): RequirementsPropertyInput => objectSchemaOrgValueNode(value);

export type RequiresSubscriptionPropertyInput = Record<string, unknown>;
export const requiresSubscriptionPropertyNode = (value: RequiresSubscriptionPropertyInput): RequiresSubscriptionPropertyInput => objectSchemaOrgValueNode(value);

export type ResponsibilitiesPropertyInput = Record<string, unknown>;
export const responsibilitiesPropertyNode = (value: ResponsibilitiesPropertyInput): ResponsibilitiesPropertyInput => objectSchemaOrgValueNode(value);

export type RestockingFeePropertyInput = Record<string, unknown>;
export const restockingFeePropertyNode = (value: RestockingFeePropertyInput): RestockingFeePropertyInput => objectSchemaOrgValueNode(value);

export type ResultPropertyInput = Record<string, unknown>;
export const resultPropertyNode = (value: ResultPropertyInput): ResultPropertyInput => objectSchemaOrgValueNode(value);

export type ReturnFeesPropertyInput = Record<string, unknown>;
export const returnFeesPropertyNode = (value: ReturnFeesPropertyInput): ReturnFeesPropertyInput => objectSchemaOrgValueNode(value);

export type ReturnLabelSourcePropertyInput = Record<string, unknown>;
export const returnLabelSourcePropertyNode = (value: ReturnLabelSourcePropertyInput): ReturnLabelSourcePropertyInput => objectSchemaOrgValueNode(value);

export type ReturnMethodPropertyInput = Record<string, unknown>;
export const returnMethodPropertyNode = (value: ReturnMethodPropertyInput): ReturnMethodPropertyInput => objectSchemaOrgValueNode(value);

export type ReturnPolicyCategoryPropertyInput = Record<string, unknown>;
export const returnPolicyCategoryPropertyNode = (value: ReturnPolicyCategoryPropertyInput): ReturnPolicyCategoryPropertyInput => objectSchemaOrgValueNode(value);

export type ReturnPolicyCountryPropertyInput = Record<string, unknown>;
export const returnPolicyCountryPropertyNode = (value: ReturnPolicyCountryPropertyInput): ReturnPolicyCountryPropertyInput => objectSchemaOrgValueNode(value);

export type ReturnPolicySeasonalOverridePropertyInput = Record<string, unknown>;
export const returnPolicySeasonalOverridePropertyNode = (value: ReturnPolicySeasonalOverridePropertyInput): ReturnPolicySeasonalOverridePropertyInput => objectSchemaOrgValueNode(value);

export type ReturnShippingFeesAmountPropertyInput = Record<string, unknown>;
export const returnShippingFeesAmountPropertyNode = (value: ReturnShippingFeesAmountPropertyInput): ReturnShippingFeesAmountPropertyInput => objectSchemaOrgValueNode(value);

export type ReviewPropertyInput = Record<string, unknown>;
export const reviewPropertyNode = (value: ReviewPropertyInput): ReviewPropertyInput => objectSchemaOrgValueNode(value);

export type ReviewAspectPropertyInput = Record<string, unknown>;
export const reviewAspectPropertyNode = (value: ReviewAspectPropertyInput): ReviewAspectPropertyInput => objectSchemaOrgValueNode(value);

export type ReviewBodyPropertyInput = Record<string, unknown>;
export const reviewBodyPropertyNode = (value: ReviewBodyPropertyInput): ReviewBodyPropertyInput => objectSchemaOrgValueNode(value);

export type ReviewCountPropertyInput = Record<string, unknown>;
export const reviewCountPropertyNode = (value: ReviewCountPropertyInput): ReviewCountPropertyInput => objectSchemaOrgValueNode(value);

export type ReviewedByPropertyInput = Record<string, unknown>;
export const reviewedByPropertyNode = (value: ReviewedByPropertyInput): ReviewedByPropertyInput => objectSchemaOrgValueNode(value);

export type ReviewRatingPropertyInput = Record<string, unknown>;
export const reviewRatingPropertyNode = (value: ReviewRatingPropertyInput): ReviewRatingPropertyInput => objectSchemaOrgValueNode(value);

export type ReviewsPropertyInput = Record<string, unknown>;
export const reviewsPropertyNode = (value: ReviewsPropertyInput): ReviewsPropertyInput => objectSchemaOrgValueNode(value);

export type RiskFactorPropertyInput = Record<string, unknown>;
export const riskFactorPropertyNode = (value: RiskFactorPropertyInput): RiskFactorPropertyInput => objectSchemaOrgValueNode(value);

export type RisksPropertyInput = Record<string, unknown>;
export const risksPropertyNode = (value: RisksPropertyInput): RisksPropertyInput => objectSchemaOrgValueNode(value);

export type RuntimePlatformPropertyInput = Record<string, unknown>;
export const runtimePlatformPropertyNode = (value: RuntimePlatformPropertyInput): RuntimePlatformPropertyInput => objectSchemaOrgValueNode(value);

export type RxcuiPropertyInput = Record<string, unknown>;
export const rxcuiPropertyNode = (value: RxcuiPropertyInput): RxcuiPropertyInput => objectSchemaOrgValueNode(value);

export type SameAsPropertyInput = Record<string, unknown>;
export const sameAsPropertyNode = (value: SameAsPropertyInput): SameAsPropertyInput => objectSchemaOrgValueNode(value);

export type SaturatedFatContentPropertyInput = Record<string, unknown>;
export const saturatedFatContentPropertyNode = (value: SaturatedFatContentPropertyInput): SaturatedFatContentPropertyInput => objectSchemaOrgValueNode(value);

export type ScheduleTimezonePropertyInput = Record<string, unknown>;
export const scheduleTimezonePropertyNode = (value: ScheduleTimezonePropertyInput): ScheduleTimezonePropertyInput => objectSchemaOrgValueNode(value);

export type SchemaVersionPropertyInput = Record<string, unknown>;
export const schemaVersionPropertyNode = (value: SchemaVersionPropertyInput): SchemaVersionPropertyInput => objectSchemaOrgValueNode(value);

export type ScreenshotPropertyInput = Record<string, unknown>;
export const screenshotPropertyNode = (value: ScreenshotPropertyInput): ScreenshotPropertyInput => objectSchemaOrgValueNode(value);

export type SdDatePublishedPropertyInput = Record<string, unknown>;
export const sdDatePublishedPropertyNode = (value: SdDatePublishedPropertyInput): SdDatePublishedPropertyInput => objectSchemaOrgValueNode(value);

export type SdLicensePropertyInput = Record<string, unknown>;
export const sdLicensePropertyNode = (value: SdLicensePropertyInput): SdLicensePropertyInput => objectSchemaOrgValueNode(value);

export type SdPublisherPropertyInput = Record<string, unknown>;
export const sdPublisherPropertyNode = (value: SdPublisherPropertyInput): SdPublisherPropertyInput => objectSchemaOrgValueNode(value);

export type SeasonalOverridePropertyInput = Record<string, unknown>;
export const seasonalOverridePropertyNode = (value: SeasonalOverridePropertyInput): SeasonalOverridePropertyInput => objectSchemaOrgValueNode(value);

export type SeasonNumberPropertyInput = Record<string, unknown>;
export const seasonNumberPropertyNode = (value: SeasonNumberPropertyInput): SeasonNumberPropertyInput => objectSchemaOrgValueNode(value);

export type SecondaryPreventionPropertyInput = Record<string, unknown>;
export const secondaryPreventionPropertyNode = (value: SecondaryPreventionPropertyInput): SecondaryPreventionPropertyInput => objectSchemaOrgValueNode(value);

export type SeeksPropertyInput = Record<string, unknown>;
export const seeksPropertyNode = (value: SeeksPropertyInput): SeeksPropertyInput => objectSchemaOrgValueNode(value);

export type SellerPropertyInput = Record<string, unknown>;
export const sellerPropertyNode = (value: SellerPropertyInput): SellerPropertyInput => objectSchemaOrgValueNode(value);

export type SerialNumberPropertyInput = Record<string, unknown>;
export const serialNumberPropertyNode = (value: SerialNumberPropertyInput): SerialNumberPropertyInput => objectSchemaOrgValueNode(value);

export type SeriousAdverseOutcomePropertyInput = Record<string, unknown>;
export const seriousAdverseOutcomePropertyNode = (value: SeriousAdverseOutcomePropertyInput): SeriousAdverseOutcomePropertyInput => objectSchemaOrgValueNode(value);

export type ServiceAreaPropertyInput = Record<string, unknown>;
export const serviceAreaPropertyNode = (value: ServiceAreaPropertyInput): ServiceAreaPropertyInput => objectSchemaOrgValueNode(value);

export type ServiceAudiencePropertyInput = Record<string, unknown>;
export const serviceAudiencePropertyNode = (value: ServiceAudiencePropertyInput): ServiceAudiencePropertyInput => objectSchemaOrgValueNode(value);

export type ServiceLocationPropertyInput = Record<string, unknown>;
export const serviceLocationPropertyNode = (value: ServiceLocationPropertyInput): ServiceLocationPropertyInput => objectSchemaOrgValueNode(value);

export type ServiceOutputPropertyInput = Record<string, unknown>;
export const serviceOutputPropertyNode = (value: ServiceOutputPropertyInput): ServiceOutputPropertyInput => objectSchemaOrgValueNode(value);

export type ServicePhonePropertyInput = Record<string, unknown>;
export const servicePhonePropertyNode = (value: ServicePhonePropertyInput): ServicePhonePropertyInput => objectSchemaOrgValueNode(value);

export type ServicePostalAddressPropertyInput = Record<string, unknown>;
export const servicePostalAddressPropertyNode = (value: ServicePostalAddressPropertyInput): ServicePostalAddressPropertyInput => objectSchemaOrgValueNode(value);

export type ServiceSmsNumberPropertyInput = Record<string, unknown>;
export const serviceSmsNumberPropertyNode = (value: ServiceSmsNumberPropertyInput): ServiceSmsNumberPropertyInput => objectSchemaOrgValueNode(value);

export type ServiceTypePropertyInput = Record<string, unknown>;
export const serviceTypePropertyNode = (value: ServiceTypePropertyInput): ServiceTypePropertyInput => objectSchemaOrgValueNode(value);

export type ServiceUrlPropertyInput = Record<string, unknown>;
export const serviceUrlPropertyNode = (value: ServiceUrlPropertyInput): ServiceUrlPropertyInput => objectSchemaOrgValueNode(value);

export type ServingSizePropertyInput = Record<string, unknown>;
export const servingSizePropertyNode = (value: ServingSizePropertyInput): ServingSizePropertyInput => objectSchemaOrgValueNode(value);

export type Sha256PropertyInput = Record<string, unknown>;
export const sha256PropertyNode = (value: Sha256PropertyInput): Sha256PropertyInput => objectSchemaOrgValueNode(value);

export type SharedContentPropertyInput = Record<string, unknown>;
export const sharedContentPropertyNode = (value: SharedContentPropertyInput): SharedContentPropertyInput => objectSchemaOrgValueNode(value);

export type ShippingConditionsPropertyInput = Record<string, unknown>;
export const shippingConditionsPropertyNode = (value: ShippingConditionsPropertyInput): ShippingConditionsPropertyInput => objectSchemaOrgValueNode(value);

export type ShippingDestinationPropertyInput = Record<string, unknown>;
export const shippingDestinationPropertyNode = (value: ShippingDestinationPropertyInput): ShippingDestinationPropertyInput => objectSchemaOrgValueNode(value);

export type ShippingDetailsPropertyInput = Record<string, unknown>;
export const shippingDetailsPropertyNode = (value: ShippingDetailsPropertyInput): ShippingDetailsPropertyInput => objectSchemaOrgValueNode(value);

export type ShippingOriginPropertyInput = Record<string, unknown>;
export const shippingOriginPropertyNode = (value: ShippingOriginPropertyInput): ShippingOriginPropertyInput => objectSchemaOrgValueNode(value);

export type ShippingRatePropertyInput = Record<string, unknown>;
export const shippingRatePropertyNode = (value: ShippingRatePropertyInput): ShippingRatePropertyInput => objectSchemaOrgValueNode(value);

export type SiblingPropertyInput = Record<string, unknown>;
export const siblingPropertyNode = (value: SiblingPropertyInput): SiblingPropertyInput => objectSchemaOrgValueNode(value);

export type SiblingsPropertyInput = Record<string, unknown>;
export const siblingsPropertyNode = (value: SiblingsPropertyInput): SiblingsPropertyInput => objectSchemaOrgValueNode(value);

export type SignDetectedPropertyInput = Record<string, unknown>;
export const signDetectedPropertyNode = (value: SignDetectedPropertyInput): SignDetectedPropertyInput => objectSchemaOrgValueNode(value);

export type SignificancePropertyInput = Record<string, unknown>;
export const significancePropertyNode = (value: SignificancePropertyInput): SignificancePropertyInput => objectSchemaOrgValueNode(value);

export type SignificantLinkPropertyInput = Record<string, unknown>;
export const significantLinkPropertyNode = (value: SignificantLinkPropertyInput): SignificantLinkPropertyInput => objectSchemaOrgValueNode(value);

export type SignificantLinksPropertyInput = Record<string, unknown>;
export const significantLinksPropertyNode = (value: SignificantLinksPropertyInput): SignificantLinksPropertyInput => objectSchemaOrgValueNode(value);

export type SignOrSymptomPropertyInput = Record<string, unknown>;
export const signOrSymptomPropertyNode = (value: SignOrSymptomPropertyInput): SignOrSymptomPropertyInput => objectSchemaOrgValueNode(value);

export type SizePropertyInput = Record<string, unknown>;
export const sizePropertyNode = (value: SizePropertyInput): SizePropertyInput => objectSchemaOrgValueNode(value);

export type SkillsPropertyInput = Record<string, unknown>;
export const skillsPropertyNode = (value: SkillsPropertyInput): SkillsPropertyInput => objectSchemaOrgValueNode(value);

export type SkuPropertyInput = Record<string, unknown>;
export const skuPropertyNode = (value: SkuPropertyInput): SkuPropertyInput => objectSchemaOrgValueNode(value);

export type SloganPropertyInput = Record<string, unknown>;
export const sloganPropertyNode = (value: SloganPropertyInput): SloganPropertyInput => objectSchemaOrgValueNode(value);

export type SmokingAllowedPropertyInput = Record<string, unknown>;
export const smokingAllowedPropertyNode = (value: SmokingAllowedPropertyInput): SmokingAllowedPropertyInput => objectSchemaOrgValueNode(value);

export type SodiumContentPropertyInput = Record<string, unknown>;
export const sodiumContentPropertyNode = (value: SodiumContentPropertyInput): SodiumContentPropertyInput => objectSchemaOrgValueNode(value);

export type SoftwareAddOnPropertyInput = Record<string, unknown>;
export const softwareAddOnPropertyNode = (value: SoftwareAddOnPropertyInput): SoftwareAddOnPropertyInput => objectSchemaOrgValueNode(value);

export type SoftwareHelpPropertyInput = Record<string, unknown>;
export const softwareHelpPropertyNode = (value: SoftwareHelpPropertyInput): SoftwareHelpPropertyInput => objectSchemaOrgValueNode(value);

export type SoftwareRequirementsPropertyInput = Record<string, unknown>;
export const softwareRequirementsPropertyNode = (value: SoftwareRequirementsPropertyInput): SoftwareRequirementsPropertyInput => objectSchemaOrgValueNode(value);

export type SoftwareVersionPropertyInput = Record<string, unknown>;
export const softwareVersionPropertyNode = (value: SoftwareVersionPropertyInput): SoftwareVersionPropertyInput => objectSchemaOrgValueNode(value);

export type SourceOrganizationPropertyInput = Record<string, unknown>;
export const sourceOrganizationPropertyNode = (value: SourceOrganizationPropertyInput): SourceOrganizationPropertyInput => objectSchemaOrgValueNode(value);

export type SpatialPropertyInput = Record<string, unknown>;
export const spatialPropertyNode = (value: SpatialPropertyInput): SpatialPropertyInput => objectSchemaOrgValueNode(value);

export type SpatialCoveragePropertyInput = Record<string, unknown>;
export const spatialCoveragePropertyNode = (value: SpatialCoveragePropertyInput): SpatialCoveragePropertyInput => objectSchemaOrgValueNode(value);

export type SpeakablePropertyInput = Record<string, unknown>;
export const speakablePropertyNode = (value: SpeakablePropertyInput): SpeakablePropertyInput => objectSchemaOrgValueNode(value);

export type SpecialOpeningHoursSpecificationPropertyInput = Record<string, unknown>;
export const specialOpeningHoursSpecificationPropertyNode = (value: SpecialOpeningHoursSpecificationPropertyInput): SpecialOpeningHoursSpecificationPropertyInput => objectSchemaOrgValueNode(value);

export type SpecialtyPropertyInput = Record<string, unknown>;
export const specialtyPropertyNode = (value: SpecialtyPropertyInput): SpecialtyPropertyInput => objectSchemaOrgValueNode(value);

export type SponsorPropertyInput = Record<string, unknown>;
export const sponsorPropertyNode = (value: SponsorPropertyInput): SponsorPropertyInput => objectSchemaOrgValueNode(value);

export type SpousePropertyInput = Record<string, unknown>;
export const spousePropertyNode = (value: SpousePropertyInput): SpousePropertyInput => objectSchemaOrgValueNode(value);

export type StagePropertyInput = Record<string, unknown>;
export const stagePropertyNode = (value: StagePropertyInput): StagePropertyInput => objectSchemaOrgValueNode(value);

export type StageAsNumberPropertyInput = Record<string, unknown>;
export const stageAsNumberPropertyNode = (value: StageAsNumberPropertyInput): StageAsNumberPropertyInput => objectSchemaOrgValueNode(value);

export type StartDatePropertyInput = Record<string, unknown>;
export const startDatePropertyNode = (value: StartDatePropertyInput): StartDatePropertyInput => objectSchemaOrgValueNode(value);

export type StartOffsetPropertyInput = Record<string, unknown>;
export const startOffsetPropertyNode = (value: StartOffsetPropertyInput): StartOffsetPropertyInput => objectSchemaOrgValueNode(value);

export type StartTimePropertyInput = Record<string, unknown>;
export const startTimePropertyNode = (value: StartTimePropertyInput): StartTimePropertyInput => objectSchemaOrgValueNode(value);

export type StatTypePropertyInput = Record<string, unknown>;
export const statTypePropertyNode = (value: StatTypePropertyInput): StatTypePropertyInput => objectSchemaOrgValueNode(value);

export type StatusPropertyInput = Record<string, unknown>;
export const statusPropertyNode = (value: StatusPropertyInput): StatusPropertyInput => objectSchemaOrgValueNode(value);

export type StepPropertyInput = Record<string, unknown>;
export const stepPropertyNode = (value: StepPropertyInput): StepPropertyInput => objectSchemaOrgValueNode(value);

export type StepsPropertyInput = Record<string, unknown>;
export const stepsPropertyNode = (value: StepsPropertyInput): StepsPropertyInput => objectSchemaOrgValueNode(value);

export type StorageRequirementsPropertyInput = Record<string, unknown>;
export const storageRequirementsPropertyNode = (value: StorageRequirementsPropertyInput): StorageRequirementsPropertyInput => objectSchemaOrgValueNode(value);

export type StreetAddressPropertyInput = Record<string, unknown>;
export const streetAddressPropertyNode = (value: StreetAddressPropertyInput): StreetAddressPropertyInput => objectSchemaOrgValueNode(value);

export type StrengthUnitPropertyInput = Record<string, unknown>;
export const strengthUnitPropertyNode = (value: StrengthUnitPropertyInput): StrengthUnitPropertyInput => objectSchemaOrgValueNode(value);

export type StrengthValuePropertyInput = Record<string, unknown>;
export const strengthValuePropertyNode = (value: StrengthValuePropertyInput): StrengthValuePropertyInput => objectSchemaOrgValueNode(value);

export type StudyPropertyInput = Record<string, unknown>;
export const studyPropertyNode = (value: StudyPropertyInput): StudyPropertyInput => objectSchemaOrgValueNode(value);

export type StudyLocationPropertyInput = Record<string, unknown>;
export const studyLocationPropertyNode = (value: StudyLocationPropertyInput): StudyLocationPropertyInput => objectSchemaOrgValueNode(value);

export type StudySubjectPropertyInput = Record<string, unknown>;
export const studySubjectPropertyNode = (value: StudySubjectPropertyInput): StudySubjectPropertyInput => objectSchemaOrgValueNode(value);

export type SubEventPropertyInput = Record<string, unknown>;
export const subEventPropertyNode = (value: SubEventPropertyInput): SubEventPropertyInput => objectSchemaOrgValueNode(value);

export type SubEventsPropertyInput = Record<string, unknown>;
export const subEventsPropertyNode = (value: SubEventsPropertyInput): SubEventsPropertyInput => objectSchemaOrgValueNode(value);

export type SubjectOfPropertyInput = Record<string, unknown>;
export const subjectOfPropertyNode = (value: SubjectOfPropertyInput): SubjectOfPropertyInput => objectSchemaOrgValueNode(value);

export type SubOrganizationPropertyInput = Record<string, unknown>;
export const subOrganizationPropertyNode = (value: SubOrganizationPropertyInput): SubOrganizationPropertyInput => objectSchemaOrgValueNode(value);

export type SubStageSuffixPropertyInput = Record<string, unknown>;
export const subStageSuffixPropertyNode = (value: SubStageSuffixPropertyInput): SubStageSuffixPropertyInput => objectSchemaOrgValueNode(value);

export type SubStructurePropertyInput = Record<string, unknown>;
export const subStructurePropertyNode = (value: SubStructurePropertyInput): SubStructurePropertyInput => objectSchemaOrgValueNode(value);

export type SubTripPropertyInput = Record<string, unknown>;
export const subTripPropertyNode = (value: SubTripPropertyInput): SubTripPropertyInput => objectSchemaOrgValueNode(value);

export type SuccessorOfPropertyInput = Record<string, unknown>;
export const successorOfPropertyNode = (value: SuccessorOfPropertyInput): SuccessorOfPropertyInput => objectSchemaOrgValueNode(value);

export type SugarContentPropertyInput = Record<string, unknown>;
export const sugarContentPropertyNode = (value: SugarContentPropertyInput): SugarContentPropertyInput => objectSchemaOrgValueNode(value);

export type SuggestedAgePropertyInput = Record<string, unknown>;
export const suggestedAgePropertyNode = (value: SuggestedAgePropertyInput): SuggestedAgePropertyInput => objectSchemaOrgValueNode(value);

export type SuggestedGenderPropertyInput = Record<string, unknown>;
export const suggestedGenderPropertyNode = (value: SuggestedGenderPropertyInput): SuggestedGenderPropertyInput => objectSchemaOrgValueNode(value);

export type SuggestedMaxAgePropertyInput = Record<string, unknown>;
export const suggestedMaxAgePropertyNode = (value: SuggestedMaxAgePropertyInput): SuggestedMaxAgePropertyInput => objectSchemaOrgValueNode(value);

export type SuggestedMeasurementPropertyInput = Record<string, unknown>;
export const suggestedMeasurementPropertyNode = (value: SuggestedMeasurementPropertyInput): SuggestedMeasurementPropertyInput => objectSchemaOrgValueNode(value);

export type SuggestedMinAgePropertyInput = Record<string, unknown>;
export const suggestedMinAgePropertyNode = (value: SuggestedMinAgePropertyInput): SuggestedMinAgePropertyInput => objectSchemaOrgValueNode(value);

export type SuitableForDietPropertyInput = Record<string, unknown>;
export const suitableForDietPropertyNode = (value: SuitableForDietPropertyInput): SuitableForDietPropertyInput => objectSchemaOrgValueNode(value);

export type SuperEventPropertyInput = Record<string, unknown>;
export const superEventPropertyNode = (value: SuperEventPropertyInput): SuperEventPropertyInput => objectSchemaOrgValueNode(value);

export type SupersededByPropertyInput = Record<string, unknown>;
export const supersededByPropertyNode = (value: SupersededByPropertyInput): SupersededByPropertyInput => objectSchemaOrgValueNode(value);

export type SupplyPropertyInput = Record<string, unknown>;
export const supplyPropertyNode = (value: SupplyPropertyInput): SupplyPropertyInput => objectSchemaOrgValueNode(value);

export type SupportingDataPropertyInput = Record<string, unknown>;
export const supportingDataPropertyNode = (value: SupportingDataPropertyInput): SupportingDataPropertyInput => objectSchemaOrgValueNode(value);

export type TargetPropertyInput = Record<string, unknown>;
export const targetPropertyNode = (value: TargetPropertyInput): TargetPropertyInput => objectSchemaOrgValueNode(value);

export type TargetDescriptionPropertyInput = Record<string, unknown>;
export const targetDescriptionPropertyNode = (value: TargetDescriptionPropertyInput): TargetDescriptionPropertyInput => objectSchemaOrgValueNode(value);

export type TargetNamePropertyInput = Record<string, unknown>;
export const targetNamePropertyNode = (value: TargetNamePropertyInput): TargetNamePropertyInput => objectSchemaOrgValueNode(value);

export type TargetPopulationPropertyInput = Record<string, unknown>;
export const targetPopulationPropertyNode = (value: TargetPopulationPropertyInput): TargetPopulationPropertyInput => objectSchemaOrgValueNode(value);

export type TargetUrlPropertyInput = Record<string, unknown>;
export const targetUrlPropertyNode = (value: TargetUrlPropertyInput): TargetUrlPropertyInput => objectSchemaOrgValueNode(value);

export type TaxIDPropertyInput = Record<string, unknown>;
export const taxIDPropertyNode = (value: TaxIDPropertyInput): TaxIDPropertyInput => objectSchemaOrgValueNode(value);

export type TaxonomicRangePropertyInput = Record<string, unknown>;
export const taxonomicRangePropertyNode = (value: TaxonomicRangePropertyInput): TaxonomicRangePropertyInput => objectSchemaOrgValueNode(value);

export type TaxonRankPropertyInput = Record<string, unknown>;
export const taxonRankPropertyNode = (value: TaxonRankPropertyInput): TaxonRankPropertyInput => objectSchemaOrgValueNode(value);

export type TeachesPropertyInput = Record<string, unknown>;
export const teachesPropertyNode = (value: TeachesPropertyInput): TeachesPropertyInput => objectSchemaOrgValueNode(value);

export type TelephonePropertyInput = Record<string, unknown>;
export const telephonePropertyNode = (value: TelephonePropertyInput): TelephonePropertyInput => objectSchemaOrgValueNode(value);

export type TemporalPropertyInput = Record<string, unknown>;
export const temporalPropertyNode = (value: TemporalPropertyInput): TemporalPropertyInput => objectSchemaOrgValueNode(value);

export type TemporalCoveragePropertyInput = Record<string, unknown>;
export const temporalCoveragePropertyNode = (value: TemporalCoveragePropertyInput): TemporalCoveragePropertyInput => objectSchemaOrgValueNode(value);

export type TermCodePropertyInput = Record<string, unknown>;
export const termCodePropertyNode = (value: TermCodePropertyInput): TermCodePropertyInput => objectSchemaOrgValueNode(value);

export type TermsOfServicePropertyInput = Record<string, unknown>;
export const termsOfServicePropertyNode = (value: TermsOfServicePropertyInput): TermsOfServicePropertyInput => objectSchemaOrgValueNode(value);

export type TextPropertyInput = Record<string, unknown>;
export const textPropertyNode = (value: TextPropertyInput): TextPropertyInput => objectSchemaOrgValueNode(value);

export type ThumbnailPropertyInput = Record<string, unknown>;
export const thumbnailPropertyNode = (value: ThumbnailPropertyInput): ThumbnailPropertyInput => objectSchemaOrgValueNode(value);

export type ThumbnailUrlPropertyInput = Record<string, unknown>;
export const thumbnailUrlPropertyNode = (value: ThumbnailUrlPropertyInput): ThumbnailUrlPropertyInput => objectSchemaOrgValueNode(value);

export type TimeRequiredPropertyInput = Record<string, unknown>;
export const timeRequiredPropertyNode = (value: TimeRequiredPropertyInput): TimeRequiredPropertyInput => objectSchemaOrgValueNode(value);

export type TocContinuationPropertyInput = Record<string, unknown>;
export const tocContinuationPropertyNode = (value: TocContinuationPropertyInput): TocContinuationPropertyInput => objectSchemaOrgValueNode(value);

export type ToolPropertyInput = Record<string, unknown>;
export const toolPropertyNode = (value: ToolPropertyInput): ToolPropertyInput => objectSchemaOrgValueNode(value);

export type TotalTimePropertyInput = Record<string, unknown>;
export const totalTimePropertyNode = (value: TotalTimePropertyInput): TotalTimePropertyInput => objectSchemaOrgValueNode(value);

export type TourBookingPagePropertyInput = Record<string, unknown>;
export const tourBookingPagePropertyNode = (value: TourBookingPagePropertyInput): TourBookingPagePropertyInput => objectSchemaOrgValueNode(value);

export type TrackPropertyInput = Record<string, unknown>;
export const trackPropertyNode = (value: TrackPropertyInput): TrackPropertyInput => objectSchemaOrgValueNode(value);

export type TracksPropertyInput = Record<string, unknown>;
export const tracksPropertyNode = (value: TracksPropertyInput): TracksPropertyInput => objectSchemaOrgValueNode(value);

export type TrailerPropertyInput = Record<string, unknown>;
export const trailerPropertyNode = (value: TrailerPropertyInput): TrailerPropertyInput => objectSchemaOrgValueNode(value);

export type TranscriptPropertyInput = Record<string, unknown>;
export const transcriptPropertyNode = (value: TranscriptPropertyInput): TranscriptPropertyInput => objectSchemaOrgValueNode(value);

export type TransFatContentPropertyInput = Record<string, unknown>;
export const transFatContentPropertyNode = (value: TransFatContentPropertyInput): TransFatContentPropertyInput => objectSchemaOrgValueNode(value);

export type TransitTimePropertyInput = Record<string, unknown>;
export const transitTimePropertyNode = (value: TransitTimePropertyInput): TransitTimePropertyInput => objectSchemaOrgValueNode(value);

export type TranslationOfWorkPropertyInput = Record<string, unknown>;
export const translationOfWorkPropertyNode = (value: TranslationOfWorkPropertyInput): TranslationOfWorkPropertyInput => objectSchemaOrgValueNode(value);

export type TranslatorPropertyInput = Record<string, unknown>;
export const translatorPropertyNode = (value: TranslatorPropertyInput): TranslatorPropertyInput => objectSchemaOrgValueNode(value);

export type TripOriginPropertyInput = Record<string, unknown>;
export const tripOriginPropertyNode = (value: TripOriginPropertyInput): TripOriginPropertyInput => objectSchemaOrgValueNode(value);

export type TypeOfGoodPropertyInput = Record<string, unknown>;
export const typeOfGoodPropertyNode = (value: TypeOfGoodPropertyInput): TypeOfGoodPropertyInput => objectSchemaOrgValueNode(value);

export type TypicalAgeRangePropertyInput = Record<string, unknown>;
export const typicalAgeRangePropertyNode = (value: TypicalAgeRangePropertyInput): TypicalAgeRangePropertyInput => objectSchemaOrgValueNode(value);

export type TypicalTestPropertyInput = Record<string, unknown>;
export const typicalTestPropertyNode = (value: TypicalTestPropertyInput): TypicalTestPropertyInput => objectSchemaOrgValueNode(value);

export type UnitCodePropertyInput = Record<string, unknown>;
export const unitCodePropertyNode = (value: UnitCodePropertyInput): UnitCodePropertyInput => objectSchemaOrgValueNode(value);

export type UnitTextPropertyInput = Record<string, unknown>;
export const unitTextPropertyNode = (value: UnitTextPropertyInput): UnitTextPropertyInput => objectSchemaOrgValueNode(value);

export type UnnamedSourcesPolicyPropertyInput = Record<string, unknown>;
export const unnamedSourcesPolicyPropertyNode = (value: UnnamedSourcesPolicyPropertyInput): UnnamedSourcesPolicyPropertyInput => objectSchemaOrgValueNode(value);

export type UnsaturatedFatContentPropertyInput = Record<string, unknown>;
export const unsaturatedFatContentPropertyNode = (value: UnsaturatedFatContentPropertyInput): UnsaturatedFatContentPropertyInput => objectSchemaOrgValueNode(value);

export type UploadDatePropertyInput = Record<string, unknown>;
export const uploadDatePropertyNode = (value: UploadDatePropertyInput): UploadDatePropertyInput => objectSchemaOrgValueNode(value);

export type UpvoteCountPropertyInput = Record<string, unknown>;
export const upvoteCountPropertyNode = (value: UpvoteCountPropertyInput): UpvoteCountPropertyInput => objectSchemaOrgValueNode(value);

export type UrlPropertyInput = Record<string, unknown>;
export const urlPropertyNode = (value: UrlPropertyInput): UrlPropertyInput => objectSchemaOrgValueNode(value);

export type UrlTemplatePropertyInput = Record<string, unknown>;
export const urlTemplatePropertyNode = (value: UrlTemplatePropertyInput): UrlTemplatePropertyInput => objectSchemaOrgValueNode(value);

export type UsageInfoPropertyInput = Record<string, unknown>;
export const usageInfoPropertyNode = (value: UsageInfoPropertyInput): UsageInfoPropertyInput => objectSchemaOrgValueNode(value);

export type UsedToDiagnosePropertyInput = Record<string, unknown>;
export const usedToDiagnosePropertyNode = (value: UsedToDiagnosePropertyInput): UsedToDiagnosePropertyInput => objectSchemaOrgValueNode(value);

export type UserInteractionCountPropertyInput = Record<string, unknown>;
export const userInteractionCountPropertyNode = (value: UserInteractionCountPropertyInput): UserInteractionCountPropertyInput => objectSchemaOrgValueNode(value);

export type UsesDevicePropertyInput = Record<string, unknown>;
export const usesDevicePropertyNode = (value: UsesDevicePropertyInput): UsesDevicePropertyInput => objectSchemaOrgValueNode(value);

export type UsesHealthPlanIdStandardPropertyInput = Record<string, unknown>;
export const usesHealthPlanIdStandardPropertyNode = (value: UsesHealthPlanIdStandardPropertyInput): UsesHealthPlanIdStandardPropertyInput => objectSchemaOrgValueNode(value);

export type UtterancesPropertyInput = Record<string, unknown>;
export const utterancesPropertyNode = (value: UtterancesPropertyInput): UtterancesPropertyInput => objectSchemaOrgValueNode(value);

export type ValidForPropertyInput = Record<string, unknown>;
export const validForPropertyNode = (value: ValidForPropertyInput): ValidForPropertyInput => objectSchemaOrgValueNode(value);

export type ValidForMemberTierPropertyInput = Record<string, unknown>;
export const validForMemberTierPropertyNode = (value: ValidForMemberTierPropertyInput): ValidForMemberTierPropertyInput => objectSchemaOrgValueNode(value);

export type ValidFromPropertyInput = Record<string, unknown>;
export const validFromPropertyNode = (value: ValidFromPropertyInput): ValidFromPropertyInput => objectSchemaOrgValueNode(value);

export type ValidInPropertyInput = Record<string, unknown>;
export const validInPropertyNode = (value: ValidInPropertyInput): ValidInPropertyInput => objectSchemaOrgValueNode(value);

export type ValidThroughPropertyInput = Record<string, unknown>;
export const validThroughPropertyNode = (value: ValidThroughPropertyInput): ValidThroughPropertyInput => objectSchemaOrgValueNode(value);

export type ValuePropertyInput = Record<string, unknown>;
export const valuePropertyNode = (value: ValuePropertyInput): ValuePropertyInput => objectSchemaOrgValueNode(value);

export type ValueAddedTaxIncludedPropertyInput = Record<string, unknown>;
export const valueAddedTaxIncludedPropertyNode = (value: ValueAddedTaxIncludedPropertyInput): ValueAddedTaxIncludedPropertyInput => objectSchemaOrgValueNode(value);

export type ValueReferencePropertyInput = Record<string, unknown>;
export const valueReferencePropertyNode = (value: ValueReferencePropertyInput): ValueReferencePropertyInput => objectSchemaOrgValueNode(value);

export type VariableMeasuredPropertyInput = Record<string, unknown>;
export const variableMeasuredPropertyNode = (value: VariableMeasuredPropertyInput): VariableMeasuredPropertyInput => objectSchemaOrgValueNode(value);

export type VariesByPropertyInput = Record<string, unknown>;
export const variesByPropertyNode = (value: VariesByPropertyInput): VariesByPropertyInput => objectSchemaOrgValueNode(value);

export type VatIDPropertyInput = Record<string, unknown>;
export const vatIDPropertyNode = (value: VatIDPropertyInput): VatIDPropertyInput => objectSchemaOrgValueNode(value);

export type VersionPropertyInput = Record<string, unknown>;
export const versionPropertyNode = (value: VersionPropertyInput): VersionPropertyInput => objectSchemaOrgValueNode(value);

export type VideoPropertyInput = Record<string, unknown>;
export const videoPropertyNode = (value: VideoPropertyInput): VideoPropertyInput => objectSchemaOrgValueNode(value);

export type VideoFormatPropertyInput = Record<string, unknown>;
export const videoFormatPropertyNode = (value: VideoFormatPropertyInput): VideoFormatPropertyInput => objectSchemaOrgValueNode(value);

export type VideoFrameSizePropertyInput = Record<string, unknown>;
export const videoFrameSizePropertyNode = (value: VideoFrameSizePropertyInput): VideoFrameSizePropertyInput => objectSchemaOrgValueNode(value);

export type VideoQualityPropertyInput = Record<string, unknown>;
export const videoQualityPropertyNode = (value: VideoQualityPropertyInput): VideoQualityPropertyInput => objectSchemaOrgValueNode(value);

export type WarningPropertyInput = Record<string, unknown>;
export const warningPropertyNode = (value: WarningPropertyInput): WarningPropertyInput => objectSchemaOrgValueNode(value);

export type WarrantyPropertyInput = Record<string, unknown>;
export const warrantyPropertyNode = (value: WarrantyPropertyInput): WarrantyPropertyInput => objectSchemaOrgValueNode(value);

export type WarrantyScopePropertyInput = Record<string, unknown>;
export const warrantyScopePropertyNode = (value: WarrantyScopePropertyInput): WarrantyScopePropertyInput => objectSchemaOrgValueNode(value);

export type WeightPropertyInput = Record<string, unknown>;
export const weightPropertyNode = (value: WeightPropertyInput): WeightPropertyInput => objectSchemaOrgValueNode(value);

export type WeightPercentagePropertyInput = Record<string, unknown>;
export const weightPercentagePropertyNode = (value: WeightPercentagePropertyInput): WeightPercentagePropertyInput => objectSchemaOrgValueNode(value);

export type WidthPropertyInput = Record<string, unknown>;
export const widthPropertyNode = (value: WidthPropertyInput): WidthPropertyInput => objectSchemaOrgValueNode(value);

export type WordCountPropertyInput = Record<string, unknown>;
export const wordCountPropertyNode = (value: WordCountPropertyInput): WordCountPropertyInput => objectSchemaOrgValueNode(value);

export type WorkExamplePropertyInput = Record<string, unknown>;
export const workExamplePropertyNode = (value: WorkExamplePropertyInput): WorkExamplePropertyInput => objectSchemaOrgValueNode(value);

export type WorkFeaturedPropertyInput = Record<string, unknown>;
export const workFeaturedPropertyNode = (value: WorkFeaturedPropertyInput): WorkFeaturedPropertyInput => objectSchemaOrgValueNode(value);

export type WorkLocationPropertyInput = Record<string, unknown>;
export const workLocationPropertyNode = (value: WorkLocationPropertyInput): WorkLocationPropertyInput => objectSchemaOrgValueNode(value);

export type WorkPerformedPropertyInput = Record<string, unknown>;
export const workPerformedPropertyNode = (value: WorkPerformedPropertyInput): WorkPerformedPropertyInput => objectSchemaOrgValueNode(value);

export type WorksForPropertyInput = Record<string, unknown>;
export const worksForPropertyNode = (value: WorksForPropertyInput): WorksForPropertyInput => objectSchemaOrgValueNode(value);

export type WorkTranslationPropertyInput = Record<string, unknown>;
export const workTranslationPropertyNode = (value: WorkTranslationPropertyInput): WorkTranslationPropertyInput => objectSchemaOrgValueNode(value);

export type WorstRatingPropertyInput = Record<string, unknown>;
export const worstRatingPropertyNode = (value: WorstRatingPropertyInput): WorstRatingPropertyInput => objectSchemaOrgValueNode(value);

export type XpathPropertyInput = Record<string, unknown>;
export const xpathPropertyNode = (value: XpathPropertyInput): XpathPropertyInput => objectSchemaOrgValueNode(value);

export type YieldPropertyInput = Record<string, unknown>;
export const yieldPropertyNode = (value: YieldPropertyInput): YieldPropertyInput => objectSchemaOrgValueNode(value);
