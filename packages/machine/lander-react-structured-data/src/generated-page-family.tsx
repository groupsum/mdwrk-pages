import React from "react";
import type { CompiledStructuredDataIntent } from "@mdwrk/lander-core";
import type { StructuredDataIntentRendererEntry } from "./index.js";
import {
  type AnatomicalStructureInput,
  type AnatomicalSystemInput,
  type BioChemEntityInput,
  type CmnsClsClassifierInput,
  type CmnsColCollectionInput,
  type CmnsGeGeopoliticalEntityInput,
  type DDxElementInput,
  type DietInput,
  type DoseScheduleInput,
  type DrugInput,
  type DrugClassInput,
  type DrugLegalStatusInput,
  type DrugStrengthInput,
  type FiboFndAgrCtrMutualContractualAgreementInput,
  type FiboFndArrDocCertificateInput,
  type PaymentCardInput,
  type PaymentMethodInput,
  type PeopleAudienceInput,
  type PerformingGroupInput,
  type PersonInput,
  type PhotographInput,
  type PlaceInput,
  type PostalAddressInput,
  type PostalCodeRangeSpecificationInput,
  type PriceSpecificationInput,
  type BooleanInput,
  type DateInput,
  type DateTimeInput,
  type NumberInput,
  type QuantityInput,
  type TextInput,
  type TimeInput,
  type ActionStatusTypeInput,
  type AdultOrientedEnumerationInput,
  type BusinessEntityTypeInput,
  type BusinessFunctionInput,
  type CertificationStatusEnumerationInput,
  type ContactPointOptionInput,
  type DayOfWeekInput,
  type DeliveryMethodInput,
  type DigitalPlatformEnumerationInput,
  type DrugPregnancyCategoryInput,
  type DrugPrescriptionStatusInput,
  type EnergyEfficiencyEnumerationInput,
  type EUEnergyEfficiencyEnumerationInput,
  type EventAttendanceModeEnumerationInput,
  type EventStatusTypeInput,
  type FulfillmentTypeEnumerationInput,
  type GenderTypeInput,
  type GovernmentBenefitsTypeInput,
  type IPTCDigitalSourceEnumerationInput,
  type ItemAvailabilityInput,
  type ItemListOrderTypeInput,
  type MapCategoryTypeInput,
  type MeasurementMethodEnumInput,
  type MeasurementTypeEnumerationInput,
  type MediaEnumerationInput,
  type MedicalAudienceTypeInput,
  type MedicalEnumerationInput,
  type MedicalEvidenceLevelInput,
  type MedicalProcedureTypeInput,
  type MedicalSpecialtyInput,
  type MedicalStudyStatusInput,
  type MedicineSystemInput,
  type MerchantReturnEnumerationInput,
  type MusicAlbumProductionTypeInput,
  type MusicAlbumReleaseTypeInput,
  type MusicReleaseFormatTypeInput,
  type NonprofitTypeInput,
  type OfferItemConditionInput,
  type PaymentMethodTypeInput,
  type PhysicalActivityCategoryInput,
  type PhysicalExamInput,
  type PriceComponentTypeEnumerationInput,
  type PriceTypeEnumerationInput,
  type QualitativeValueInput,
  type RefundTypeEnumerationInput,
  type RestrictedDietInput,
  type ReturnFeesEnumerationInput,
  type ReturnLabelSourceEnumerationInput,
  type ReturnMethodEnumerationInput,
  type SizeSpecificationInput,
  type SpecialtyInput,
  type StatusEnumerationInput,
  type TierBenefitEnumerationInput,
  type WarrantyScopeInput,
  type AboutPropertyInput,
  type AbstractPropertyInput,
  type AcceptedPaymentMethodPropertyInput,
  type AccessibilityAPIPropertyInput,
  type AccessibilityControlPropertyInput,
  type AccessibilityFeaturePropertyInput,
  type AccessibilityHazardPropertyInput,
  type AccessibilitySummaryPropertyInput,
  type AccessModePropertyInput,
  type AccessModeSufficientPropertyInput,
  type AccountablePersonPropertyInput,
  type AcquireLicensePagePropertyInput,
  type ActionableFeedbackPolicyPropertyInput,
  type ActionApplicationPropertyInput,
  type ActionPlatformPropertyInput,
  type ActionProcessPropertyInput,
  type ActionStatusPropertyInput,
  type ActiveIngredientPropertyInput,
  type ActorPropertyInput,
  type ActorsPropertyInput,
  type AdditionalNamePropertyInput,
  type AdditionalPropertyPropertyInput,
  type AdditionalTypePropertyInput,
  type AddOnPropertyInput,
  type AddressPropertyInput,
  type AddressCountryPropertyInput,
  type AddressLocalityPropertyInput,
  type AddressRegionPropertyInput,
  type AdministrationRoutePropertyInput,
  type AdvanceBookingRequirementPropertyInput,
  type AdverseOutcomePropertyInput,
  type AffectedByPropertyInput,
  type AffiliationPropertyInput,
  type AgentPropertyInput,
  type AgentInteractionStatisticPropertyInput,
  type AggregateElementPropertyInput,
  type AggregateRatingPropertyInput,
  type AlbumPropertyInput,
  type AlbumProductionTypePropertyInput,
  type AlbumReleasePropertyInput,
  type AlbumReleaseTypePropertyInput,
  type AlbumsPropertyInput,
  type AlcoholWarningPropertyInput,
  type AlignmentTypePropertyInput,
  type AlternateNamePropertyInput,
  type AlternativeHeadlinePropertyInput,
  type AlternativeOfPropertyInput,
  type AlumniPropertyInput,
  type AlumniOfPropertyInput,
  type AmenityFeaturePropertyInput,
  type AmountPropertyInput,
  type AmountOfThisGoodPropertyInput,
  type AnnualPercentageRatePropertyInput,
  type AppearancePropertyInput,
  type ApplicableCountryPropertyInput,
  type ApplicableLocationPropertyInput,
  type ApplicationPropertyInput,
  type ApplicationCategoryPropertyInput,
  type ApplicationSubCategoryPropertyInput,
  type ApplicationSuitePropertyInput,
  type AppliesToDeliveryMethodPropertyInput,
  type ArchivedAtPropertyInput,
  type AreaPropertyInput,
  type AreaServedPropertyInput,
  type ArrivalTimePropertyInput,
  type ArticleBodyPropertyInput,
  type ArticleSectionPropertyInput,
  type AsinPropertyInput,
  type AspectPropertyInput,
  type AssessesPropertyInput,
  type AssociatedAnatomyPropertyInput,
  type AssociatedArticlePropertyInput,
  type AssociatedClaimReviewPropertyInput,
  type AssociatedDiseasePropertyInput,
  type AssociatedMediaPropertyInput,
  type AssociatedMediaReviewPropertyInput,
  type AssociatedPathophysiologyPropertyInput,
  type AssociatedReviewPropertyInput,
  type AttendeePropertyInput,
  type AttendeesPropertyInput,
  type AudiencePropertyInput,
  type AudienceTypePropertyInput,
  type AudioPropertyInput,
  type AuditDatePropertyInput,
  type AuthenticatorPropertyInput,
  type AuthorPropertyInput,
  type AvailabilityPropertyInput,
  type AvailabilityEndsPropertyInput,
  type AvailabilityStartsPropertyInput,
  type AvailableAtOrFromPropertyInput,
  type AvailableChannelPropertyInput,
  type AvailableDeliveryMethodPropertyInput,
  type AvailableInPropertyInput,
  type AvailableLanguagePropertyInput,
  type AvailableOnDevicePropertyInput,
  type AvailableStrengthPropertyInput,
  type AwardPropertyInput,
  type AwardsPropertyInput,
  type BackstoryPropertyInput,
  type BenefitsSummaryUrlPropertyInput,
  type BestRatingPropertyInput,
  type BillingDurationPropertyInput,
  type BillingIncrementPropertyInput,
  type BillingStartPropertyInput,
  type BioChemInteractionPropertyInput,
  type BioChemSimilarityPropertyInput,
  type BiologicalRolePropertyInput,
  type BirthDatePropertyInput,
  type BirthPlacePropertyInput,
  type BitratePropertyInput,
  type BodyLocationPropertyInput,
  type BoxPropertyInput,
  type BranchCodePropertyInput,
  type BrandPropertyInput,
  type BreadcrumbPropertyInput,
  type BreastfeedingWarningPropertyInput,
  type BroadcastAffiliateOfPropertyInput,
  type BroadcastChannelIdPropertyInput,
  type BroadcastDisplayNamePropertyInput,
  type BroadcasterPropertyInput,
  type BroadcastFrequencyPropertyInput,
  type BroadcastFrequencyValuePropertyInput,
  type BroadcastServiceTierPropertyInput,
  type BroadcastSignalModulationPropertyInput,
  type BroadcastSubChannelPropertyInput,
  type BroadcastTimezonePropertyInput,
  type BrokerPropertyInput,
  type BusinessDaysPropertyInput,
  type BusinessFunctionPropertyInput,
  type ByArtistPropertyInput,
  type ByDayPropertyInput,
  type ByMonthPropertyInput,
  type ByMonthDayPropertyInput,
  type ByMonthWeekPropertyInput,
  type CallSignPropertyInput,
  type CaloriesPropertyInput,
  type CaptionPropertyInput,
  type CarbohydrateContentPropertyInput,
  type CashBackPropertyInput,
  type CatalogPropertyInput,
  type CatalogNumberPropertyInput,
  type CategoryPropertyInput,
  type CausePropertyInput,
  type CauseOfPropertyInput,
  type CertificationIdentificationPropertyInput,
  type CertificationRatingPropertyInput,
  type CertificationStatusPropertyInput,
  type CharacterPropertyInput,
  type CheckoutPageURLTemplatePropertyInput,
  type ChildrenPropertyInput,
  type ChildTaxonPropertyInput,
  type CholesterolContentPropertyInput,
  type CirclePropertyInput,
  type CitationPropertyInput,
  type ClaimInterpreterPropertyInput,
  type ClincalPharmacologyPropertyInput,
  type ClinicalPharmacologyPropertyInput,
  type ClipNumberPropertyInput,
  type ClosesPropertyInput,
  type CodePropertyInput,
  type CodeValuePropertyInput,
  type CodingSystemPropertyInput,
  type ColleaguePropertyInput,
  type ColleaguesPropertyInput,
  type ColorPropertyInput,
  type ColorSwatchPropertyInput,
  type CommentPropertyInput,
  type CommentCountPropertyInput,
  type CompanyRegistrationPropertyInput,
  type CompetencyRequiredPropertyInput,
  type ComposerPropertyInput,
  type ComprisedOfPropertyInput,
  type ConditionsOfAccessPropertyInput,
  type ConnectedToPropertyInput,
  type ConstraintPropertyPropertyInput,
  type ContactlessPaymentPropertyInput,
  type ContactOptionPropertyInput,
  type ContactPointPropertyInput,
  type ContactPointsPropertyInput,
  type ContactTypePropertyInput,
  type ContainedInPropertyInput,
  type ContainedInPlacePropertyInput,
  type ContainsPlacePropertyInput,
  type ContentLocationPropertyInput,
  type ContentRatingPropertyInput,
  type ContentReferenceTimePropertyInput,
  type ContentSizePropertyInput,
  type ContentTypePropertyInput,
  type ContentUrlPropertyInput,
  type ContraindicationPropertyInput,
  type ContributorPropertyInput,
  type CopyrightHolderPropertyInput,
  type CopyrightNoticePropertyInput,
  type CopyrightYearPropertyInput,
  type CorrectionPropertyInput,
  type CorrectionsPolicyPropertyInput,
  type CountriesNotSupportedPropertyInput,
  type CountriesSupportedPropertyInput,
  type CountryOfAssemblyPropertyInput,
  type CountryOfLastProcessingPropertyInput,
  type CountryOfOriginPropertyInput,
  type CreativeWorkStatusPropertyInput,
  type CreatorPropertyInput,
  type CredentialCategoryPropertyInput,
  type CreditedToPropertyInput,
  type CreditTextPropertyInput,
  type CssSelectorPropertyInput,
  type CurrencyPropertyInput,
  type CustomerRemorseReturnFeesPropertyInput,
  type CustomerRemorseReturnLabelSourcePropertyInput,
  type CustomerRemorseReturnShippingFeesAmountPropertyInput,
  type CutoffTimePropertyInput,
  type DataFeedElementPropertyInput,
  type DatasetPropertyInput,
  type DatasetTimeIntervalPropertyInput,
  type DateCreatedPropertyInput,
  type DateDeletedPropertyInput,
  type DatelinePropertyInput,
  type DateModifiedPropertyInput,
  type DatePostedPropertyInput,
  type DatePublishedPropertyInput,
  type DayOfWeekPropertyInput,
  type DeathDatePropertyInput,
  type DeathPlacePropertyInput,
  type DeliveryLeadTimePropertyInput,
  type DeliveryTimePropertyInput,
  type DepartmentPropertyInput,
  type DepartureTimePropertyInput,
  type DepthPropertyInput,
  type DescriptionPropertyInput,
  type DevicePropertyInput,
  type DiagnosisPropertyInput,
  type DiagramPropertyInput,
  type DietFeaturesPropertyInput,
  type DifferentialDiagnosisPropertyInput,
  type DigitalSourceTypePropertyInput,
  type DirectorPropertyInput,
  type DirectorsPropertyInput,
  type DisambiguatingDescriptionPropertyInput,
  type DiscussionUrlPropertyInput,
  type DisplayLocationPropertyInput,
  type DissolutionDatePropertyInput,
  type DistinguishingSignPropertyInput,
  type DistributionPropertyInput,
  type DiversityPolicyPropertyInput,
  type DiversityStaffingReportPropertyInput,
  type DoesNotShipPropertyInput,
  type DomainIncludesPropertyInput,
  type DoorTimePropertyInput,
  type DosageFormPropertyInput,
  type DoseSchedulePropertyInput,
  type DoseUnitPropertyInput,
  type DoseValuePropertyInput,
  type DownloadUrlPropertyInput,
  type DownPaymentPropertyInput,
  type DownvoteCountPropertyInput,
  type DrugPropertyInput,
  type DrugClassPropertyInput,
  type DrugUnitPropertyInput,
  type DunsPropertyInput,
  type DuplicateTherapyPropertyInput,
  type DurationPropertyInput,
  type DurationOfWarrantyPropertyInput,
  type EarlyPrepaymentPenaltyPropertyInput,
  type EditEIDRPropertyInput,
  type EditorPropertyInput,
  type EducationalAlignmentPropertyInput,
  type EducationalFrameworkPropertyInput,
  type EducationalLevelPropertyInput,
  type EducationalUsePropertyInput,
  type EducationRequirementsPropertyInput,
  type ElevationPropertyInput,
  type EligibleCustomerTypePropertyInput,
  type EligibleDurationPropertyInput,
  type EligibleQuantityPropertyInput,
  type EligibleRegionPropertyInput,
  type EligibleTransactionVolumePropertyInput,
  type EmailPropertyInput,
  type EmbeddedTextCaptionPropertyInput,
  type EmbedUrlPropertyInput,
  type EmployeePropertyInput,
  type EmployeesPropertyInput,
  type EncodesBioChemEntityPropertyInput,
  type EncodesCreativeWorkPropertyInput,
  type EncodingPropertyInput,
  type EncodingFormatPropertyInput,
  type EncodingsPropertyInput,
  type EncodingTypePropertyInput,
  type EndDatePropertyInput,
  type EndOffsetPropertyInput,
  type EndorsersPropertyInput,
  type EndTimePropertyInput,
  type EnergyEfficiencyScaleMaxPropertyInput,
  type EnergyEfficiencyScaleMinPropertyInput,
  type EpidemiologyPropertyInput,
  type EpisodePropertyInput,
  type EpisodeNumberPropertyInput,
  type EpisodesPropertyInput,
  type ErrorPropertyInput,
  type EstimatedCostPropertyInput,
  type EstimatedSalaryPropertyInput,
  type EthicsPolicyPropertyInput,
  type EventPropertyInput,
  type EventAttendanceModePropertyInput,
  type EventsPropertyInput,
  type EventSchedulePropertyInput,
  type EventStatusPropertyInput,
  type EvidenceLevelPropertyInput,
  type EvidenceOriginPropertyInput,
  type ExampleOfWorkPropertyInput,
  type ExceptDatePropertyInput,
  type ExifDataPropertyInput,
  type ExpectedPrognosisPropertyInput,
  type ExpectsAcceptanceOfPropertyInput,
  type ExperienceRequirementsPropertyInput,
  type ExpertConsiderationsPropertyInput,
  type ExpiresPropertyInput,
  type ExpressedInPropertyInput,
  type ExtendedAddressPropertyInput,
  type FamilyNamePropertyInput,
  type FatContentPropertyInput,
  type FaxNumberPropertyInput,
  type FeatureListPropertyInput,
  type FeesAndCommissionsSpecificationPropertyInput,
  type FiberContentPropertyInput,
  type FileFormatPropertyInput,
  type FileSizePropertyInput,
  type FirstAppearancePropertyInput,
  type FirstPerformancePropertyInput,
  type FloorLimitPropertyInput,
  type FollowsPropertyInput,
  type FollowupPropertyInput,
  type FoodWarningPropertyInput,
  type FounderPropertyInput,
  type FoundersPropertyInput,
  type FoundingDatePropertyInput,
  type FoundingLocationPropertyInput,
  type FreePropertyInput,
  type FreeShippingThresholdPropertyInput,
  type FrequencyPropertyInput,
  type FulfillmentTypePropertyInput,
  type FundedItemPropertyInput,
  type FunderPropertyInput,
  type FundingPropertyInput,
  type GenderPropertyInput,
  type GenrePropertyInput,
  type GeoPropertyInput,
  type GeoContainsPropertyInput,
  type GeoCoveredByPropertyInput,
  type GeoCoversPropertyInput,
  type GeoCrossesPropertyInput,
  type GeoDisjointPropertyInput,
  type GeoEqualsPropertyInput,
  type GeographicAreaPropertyInput,
  type GeoIntersectsPropertyInput,
  type GeoOverlapsPropertyInput,
  type GeoTouchesPropertyInput,
  type GeoWithinPropertyInput,
  type GivenNamePropertyInput,
  type GlobalLocationNumberPropertyInput,
  type GracePeriodPropertyInput,
  type GtinPropertyInput,
  type Gtin12PropertyInput,
  type Gtin13PropertyInput,
  type Gtin14PropertyInput,
  type Gtin8PropertyInput,
  type GuidelinePropertyInput,
  type GuidelineDatePropertyInput,
  type GuidelineSubjectPropertyInput,
  type HandlingTimePropertyInput,
  type HasAdultConsiderationPropertyInput,
  type HasBioChemEntityPartPropertyInput,
  type HasBioPolymerSequencePropertyInput,
  type HasBroadcastChannelPropertyInput,
  type HasCategoryCodePropertyInput,
  type HasCertificationPropertyInput,
  type HasCredentialPropertyInput,
  type HasDefinedTermPropertyInput,
  type HasDriveThroughServicePropertyInput,
  type HasEnergyConsumptionDetailsPropertyInput,
  type HasEnergyEfficiencyCategoryPropertyInput,
  type HasGS1DigitalLinkPropertyInput,
  type HasMapPropertyInput,
  type HasMeasurementPropertyInput,
  type HasMemberProgramPropertyInput,
  type HasMenuItemPropertyInput,
  type HasMenuSectionPropertyInput,
  type HasMerchantReturnPolicyPropertyInput,
  type HasMolecularFunctionPropertyInput,
  type HasOccupationPropertyInput,
  type HasOfferCatalogPropertyInput,
  type HasPartPropertyInput,
  type HasParticipationOfferPropertyInput,
  type HasPOSPropertyInput,
  type HasRepresentationPropertyInput,
  type HasShippingServicePropertyInput,
  type HasSponsorshipOfferPropertyInput,
  type HasTierBenefitPropertyInput,
  type HasTierRequirementPropertyInput,
  type HasTiersPropertyInput,
  type HasVariantPropertyInput,
  type HeadlinePropertyInput,
  type HealthConditionPropertyInput,
  type HealthPlanCoinsuranceOptionPropertyInput,
  type HealthPlanCoinsuranceRatePropertyInput,
  type HealthPlanCopayPropertyInput,
  type HealthPlanCopayOptionPropertyInput,
  type HealthPlanCostSharingPropertyInput,
  type HealthPlanDrugOptionPropertyInput,
  type HealthPlanDrugTierPropertyInput,
  type HealthPlanIdPropertyInput,
  type HealthPlanMarketingUrlPropertyInput,
  type HealthPlanNetworkIdPropertyInput,
  type HealthPlanNetworkTierPropertyInput,
  type HealthPlanPharmacyCategoryPropertyInput,
  type HeightPropertyInput,
  type HighPricePropertyInput,
  type HomeLocationPropertyInput,
  type HonorificPrefixPropertyInput,
  type HonorificSuffixPropertyInput,
  type HostingOrganizationPropertyInput,
  type HoursAvailablePropertyInput,
  type HowPerformedPropertyInput,
  type HttpMethodPropertyInput,
  type IdentifierPropertyInput,
  type IdentifyingExamPropertyInput,
  type IdentifyingTestPropertyInput,
  type ImagePropertyInput,
  type InAlbumPropertyInput,
  type InBroadcastLineupPropertyInput,
  type IncludedCompositionPropertyInput,
  type IncludedDataCatalogPropertyInput,
  type IncludedInDataCatalogPropertyInput,
  type IncludedInHealthInsurancePlanPropertyInput,
  type IncludesHealthPlanFormularyPropertyInput,
  type IncludesHealthPlanNetworkPropertyInput,
  type IncludesObjectPropertyInput,
  type InCodeSetPropertyInput,
  type IncreasesRiskOfPropertyInput,
  type InDefinedTermSetPropertyInput,
  type IneligibleRegionPropertyInput,
  type InLanguagePropertyInput,
  type InPlaylistPropertyInput,
  type InProductGroupWithIDPropertyInput,
  type InstallUrlPropertyInput,
  type InStoreReturnsOfferedPropertyInput,
  type InstrumentPropertyInput,
  type InteractingDrugPropertyInput,
  type InteractionServicePropertyInput,
  type InteractionStatisticPropertyInput,
  type InteractionTypePropertyInput,
  type InteractivityTypePropertyInput,
  type InterestRatePropertyInput,
  type InterpretedAsClaimPropertyInput,
  type InventoryLevelPropertyInput,
  type InverseOfPropertyInput,
  type IsAccessibleForFreePropertyInput,
  type IsAccessoryOrSparePartForPropertyInput,
  type IsAvailableGenericallyPropertyInput,
  type IsBasedOnPropertyInput,
  type IsBasedOnUrlPropertyInput,
  type IsConsumableForPropertyInput,
  type IsEncodedByBioChemEntityPropertyInput,
  type IsFamilyFriendlyPropertyInput,
  type IsicV4PropertyInput,
  type IsInvolvedInBiologicalProcessPropertyInput,
  type IsLocatedInSubcellularLocationPropertyInput,
  type Iso6523CodePropertyInput,
  type IsPartOfPropertyInput,
  type IsPartOfBioChemEntityPropertyInput,
  type IsProprietaryPropertyInput,
  type IsrcCodePropertyInput,
  type IsRelatedToPropertyInput,
  type IsSimilarToPropertyInput,
  type IssnPropertyInput,
  type IssuedByPropertyInput,
  type IsTierOfPropertyInput,
  type IsUnlabelledFallbackPropertyInput,
  type IsVariantOfPropertyInput,
  type IswcCodePropertyInput,
  type ItemPropertyInput,
  type ItemConditionPropertyInput,
  type ItemDefectReturnFeesPropertyInput,
  type ItemDefectReturnLabelSourcePropertyInput,
  type ItemDefectReturnShippingFeesAmountPropertyInput,
  type ItemListElementPropertyInput,
  type ItemListOrderPropertyInput,
  type ItemOfferedPropertyInput,
  type ItemReviewedPropertyInput,
  type ItineraryPropertyInput,
  type JobTitlePropertyInput,
  type KeywordsPropertyInput,
  type KnowsPropertyInput,
  type KnowsAboutPropertyInput,
  type KnowsLanguagePropertyInput,
  type LabelDetailsPropertyInput,
  type LastReviewedPropertyInput,
  type LatitudePropertyInput,
  type LearningResourceTypePropertyInput,
  type LeaseLengthPropertyInput,
  type LegalAddressPropertyInput,
  type LegalNamePropertyInput,
  type LegalRepresentativePropertyInput,
  type LegalStatusPropertyInput,
  type LeiCodePropertyInput,
  type LicensePropertyInput,
  type LifeEventPropertyInput,
  type LinePropertyInput,
  type LoanPaymentAmountPropertyInput,
  type LoanPaymentFrequencyPropertyInput,
  type LoanRepaymentFormPropertyInput,
  type LoanTermPropertyInput,
  type LoanTypePropertyInput,
  type LocationPropertyInput,
  type LocationCreatedPropertyInput,
  type LogoPropertyInput,
  type LongitudePropertyInput,
  type LowPricePropertyInput,
  type LyricistPropertyInput,
  type LyricsPropertyInput,
  type MainContentOfPagePropertyInput,
  type MainEntityPropertyInput,
  type MainEntityOfPagePropertyInput,
  type MaintainerPropertyInput,
  type MakesOfferPropertyInput,
  type ManufacturerPropertyInput,
  type MapPropertyInput,
  type MapsPropertyInput,
  type MapTypePropertyInput,
  type MaterialPropertyInput,
  type MaterialExtentPropertyInput,
  type MaximumAttendeeCapacityPropertyInput,
  type MaximumIntakePropertyInput,
  type MaximumPhysicalAttendeeCapacityPropertyInput,
  type MaximumVirtualAttendeeCapacityPropertyInput,
  type MaxPricePropertyInput,
  type MaxValuePropertyInput,
  type MeasuredPropertyPropertyInput,
  type MeasurementDenominatorPropertyInput,
  type MeasurementMethodPropertyInput,
  type MeasurementQualifierPropertyInput,
  type MeasurementTechniquePropertyInput,
  type MechanismOfActionPropertyInput,
  type MedianPropertyInput,
  type MedicalAudiencePropertyInput,
  type MedicineSystemPropertyInput,
  type MemberPropertyInput,
  type MemberOfPropertyInput,
  type MembersPropertyInput,
  type MembershipNumberPropertyInput,
  type MembershipPointsEarnedPropertyInput,
  type MemoryRequirementsPropertyInput,
  type MentionsPropertyInput,
  type MenuAddOnPropertyInput,
  type MerchantReturnDaysPropertyInput,
  type MerchantReturnLinkPropertyInput,
  type MinPricePropertyInput,
  type MinValuePropertyInput,
  type MobileUrlPropertyInput,
  type ModelPropertyInput,
  type MonthlyMinimumRepaymentAmountPropertyInput,
  type MonthsOfExperiencePropertyInput,
  type MpnPropertyInput,
  type MusicalKeyPropertyInput,
  type MusicArrangementPropertyInput,
  type MusicByPropertyInput,
  type MusicCompositionFormPropertyInput,
  type MusicGroupMemberPropertyInput,
  type MusicReleaseFormatPropertyInput,
  type NaicsPropertyInput,
  type NamePropertyInput,
  type NationalityPropertyInput,
  type NaturalProgressionPropertyInput,
  type NegativeNotesPropertyInput,
  type NetWorthPropertyInput,
  type NextItemPropertyInput,
  type NonprofitStatusPropertyInput,
  type NonProprietaryNamePropertyInput,
  type NormalRangePropertyInput,
  type NsnPropertyInput,
  type NumberOfEmployeesPropertyInput,
  type NumberOfEpisodesPropertyInput,
  type NumberOfItemsPropertyInput,
  type NumberOfLoanPaymentsPropertyInput,
  type NumConstraintsPropertyInput,
  type NumItemsPropertyInput,
  type NumTracksPropertyInput,
  type NutritionPropertyInput,
  type ObjectPropertyInput,
  type OccupationalCategoryPropertyInput,
  type OccupationLocationPropertyInput,
  type OfferCountPropertyInput,
  type OfferedByPropertyInput,
  type OffersPropertyInput,
  type OffersPrescriptionByMailPropertyInput,
  type OpeningHoursPropertyInput,
  type OpeningHoursSpecificationPropertyInput,
  type OpensPropertyInput,
  type OperatingSystemPropertyInput,
  type OrderPercentagePropertyInput,
  type OrderValuePropertyInput,
  type OrganizerPropertyInput,
  type OverdosagePropertyInput,
  type OwnerPropertyInput,
  type OwnershipFundingInfoPropertyInput,
  type OwnsPropertyInput,
  type PageEndPropertyInput,
  type PageStartPropertyInput,
  type PaginationPropertyInput,
  type ParentPropertyInput,
  type ParentItemPropertyInput,
  type ParentOrganizationPropertyInput,
  type ParentsPropertyInput,
  type ParentServicePropertyInput,
  type ParentTaxonPropertyInput,
  type ParticipantPropertyInput,
  type PartOfEpisodePropertyInput,
  type PartOfSeasonPropertyInput,
  type PartOfSeriesPropertyInput,
  type PartOfSystemPropertyInput,
  type PartOfTripPropertyInput,
  type PathophysiologyPropertyInput,
  type PatternPropertyInput,
  type PaymentMethodTypePropertyInput,
  type Percentile10PropertyInput,
  type Percentile25PropertyInput,
  type Percentile75PropertyInput,
  type Percentile90PropertyInput,
  type PerformerPropertyInput,
  type PerformerInPropertyInput,
  type PerformersPropertyInput,
  type PerformTimePropertyInput,
  type PermissionsPropertyInput,
  type PhotoPropertyInput,
  type PhotosPropertyInput,
  type PhysiologicalBenefitsPropertyInput,
  type PlayerTypePropertyInput,
  type PolygonPropertyInput,
  type PopulationTypePropertyInput,
  type PositionPropertyInput,
  type PositiveNotesPropertyInput,
  type PossibleComplicationPropertyInput,
  type PossibleTreatmentPropertyInput,
  type PostalCodePropertyInput,
  type PostalCodeBeginPropertyInput,
  type PostalCodeEndPropertyInput,
  type PostalCodePrefixPropertyInput,
  type PostalCodeRangePropertyInput,
  type PostOfficeBoxNumberPropertyInput,
  type PostOpPropertyInput,
  type PotentialActionPropertyInput,
  type PredecessorOfPropertyInput,
  type PregnancyCategoryPropertyInput,
  type PregnancyWarningPropertyInput,
  type PreOpPropertyInput,
  type PreparationPropertyInput,
  type PrepTimePropertyInput,
  type PrescribingInfoPropertyInput,
  type PrescriptionStatusPropertyInput,
  type PreviousItemPropertyInput,
  type PreviousStartDatePropertyInput,
  type PricePropertyInput,
  type PriceComponentTypePropertyInput,
  type PriceCurrencyPropertyInput,
  type PriceSpecificationPropertyInput,
  type PriceTypePropertyInput,
  type PriceValidUntilPropertyInput,
  type PrimaryImageOfPagePropertyInput,
  type PrimaryPreventionPropertyInput,
  type PrintColumnPropertyInput,
  type PrintEditionPropertyInput,
  type PrintPagePropertyInput,
  type PrintSectionPropertyInput,
  type ProcedurePropertyInput,
  type ProcedureTypePropertyInput,
  type ProcessingTimePropertyInput,
  type ProcessorRequirementsPropertyInput,
  type ProducerPropertyInput,
  type ProducesPropertyInput,
  type ProductGroupIDPropertyInput,
  type ProductIDPropertyInput,
  type ProductionCompanyPropertyInput,
  type ProductionDatePropertyInput,
  type ProductSupportedPropertyInput,
  type ProgramPropertyInput,
  type ProgramNamePropertyInput,
  type PronounsPropertyInput,
  type PropertyIDPropertyInput,
  type ProprietaryNamePropertyInput,
  type ProteinContentPropertyInput,
  type ProviderPropertyInput,
  type ProviderMobilityPropertyInput,
  type ProvidesBroadcastServicePropertyInput,
  type ProvidesServicePropertyInput,
  type PublicAccessPropertyInput,
  type PublicationPropertyInput,
  type PublishedByPropertyInput,
  type PublishedOnPropertyInput,
  type PublisherPropertyInput,
  type PublisherImprintPropertyInput,
  type PublishingPrinciplesPropertyInput,
  type PurchaseDatePropertyInput,
  type QualificationsPropertyInput,
  type RangeIncludesPropertyInput,
  type RatingCountPropertyInput,
  type RatingExplanationPropertyInput,
  type RatingValuePropertyInput,
  type RecognizedByPropertyInput,
  type RecognizingAuthorityPropertyInput,
  type RecordedAsPropertyInput,
  type RecordedAtPropertyInput,
  type RecordedInPropertyInput,
  type RecordingOfPropertyInput,
  type RecordLabelPropertyInput,
  type RecourseLoanPropertyInput,
  type ReferenceQuantityPropertyInput,
  type RefundTypePropertyInput,
  type RegionsAllowedPropertyInput,
  type RelatedAnatomyPropertyInput,
  type RelatedConditionPropertyInput,
  type RelatedDrugPropertyInput,
  type RelatedLinkPropertyInput,
  type RelatedStructurePropertyInput,
  type RelatedTherapyPropertyInput,
  type RelatedToPropertyInput,
  type ReleaseDatePropertyInput,
  type ReleasedEventPropertyInput,
  type ReleaseNotesPropertyInput,
  type ReleaseOfPropertyInput,
  type RelevantSpecialtyPropertyInput,
  type RemainingAttendeeCapacityPropertyInput,
  type RenegotiableLoanPropertyInput,
  type RepeatCountPropertyInput,
  type RepeatFrequencyPropertyInput,
  type RepresentativeOfPagePropertyInput,
  type RequiredCollateralPropertyInput,
  type RequiredGenderPropertyInput,
  type RequiredMaxAgePropertyInput,
  type RequiredMinAgePropertyInput,
  type RequiredQuantityPropertyInput,
  type RequirementsPropertyInput,
  type RequiresSubscriptionPropertyInput,
  type ResponsibilitiesPropertyInput,
  type RestockingFeePropertyInput,
  type ResultPropertyInput,
  type ReturnFeesPropertyInput,
  type ReturnLabelSourcePropertyInput,
  type ReturnMethodPropertyInput,
  type ReturnPolicyCategoryPropertyInput,
  type ReturnPolicyCountryPropertyInput,
  type ReturnPolicySeasonalOverridePropertyInput,
  type ReturnShippingFeesAmountPropertyInput,
  type ReviewPropertyInput,
  type ReviewAspectPropertyInput,
  type ReviewBodyPropertyInput,
  type ReviewCountPropertyInput,
  type ReviewedByPropertyInput,
  type ReviewRatingPropertyInput,
  type ReviewsPropertyInput,
  type RiskFactorPropertyInput,
  type RisksPropertyInput,
  type RuntimePlatformPropertyInput,
  type RxcuiPropertyInput,
  type SameAsPropertyInput,
  type SaturatedFatContentPropertyInput,
  type ScheduleTimezonePropertyInput,
  type SchemaVersionPropertyInput,
  type ScreenshotPropertyInput,
  type SdDatePublishedPropertyInput,
  type SdLicensePropertyInput,
  type SdPublisherPropertyInput,
  type SeasonalOverridePropertyInput,
  type SeasonNumberPropertyInput,
  type SecondaryPreventionPropertyInput,
  type SeeksPropertyInput,
  type SellerPropertyInput,
  type SerialNumberPropertyInput,
  type SeriousAdverseOutcomePropertyInput,
  type ServiceAreaPropertyInput,
  type ServiceAudiencePropertyInput,
  type ServiceLocationPropertyInput,
  type ServiceOutputPropertyInput,
  type ServicePhonePropertyInput,
  type ServicePostalAddressPropertyInput,
  type ServiceSmsNumberPropertyInput,
  type ServiceTypePropertyInput,
  type ServiceUrlPropertyInput,
  type ServingSizePropertyInput,
  type Sha256PropertyInput,
  type SharedContentPropertyInput,
  type ShippingConditionsPropertyInput,
  type ShippingDestinationPropertyInput,
  type ShippingDetailsPropertyInput,
  type ShippingOriginPropertyInput,
  type ShippingRatePropertyInput,
  type SiblingPropertyInput,
  type SiblingsPropertyInput,
  type SignDetectedPropertyInput,
  type SignificancePropertyInput,
  type SignificantLinkPropertyInput,
  type SignificantLinksPropertyInput,
  type SignOrSymptomPropertyInput,
  type SizePropertyInput,
  type SkillsPropertyInput,
  type SkuPropertyInput,
  type SloganPropertyInput,
  type SmokingAllowedPropertyInput,
  type SodiumContentPropertyInput,
  type SoftwareAddOnPropertyInput,
  type SoftwareHelpPropertyInput,
  type SoftwareRequirementsPropertyInput,
  type SoftwareVersionPropertyInput,
  type SourceOrganizationPropertyInput,
  type SpatialPropertyInput,
  type SpatialCoveragePropertyInput,
  type SpeakablePropertyInput,
  type SpecialOpeningHoursSpecificationPropertyInput,
  type SpecialtyPropertyInput,
  type SponsorPropertyInput,
  type SpousePropertyInput,
  type StagePropertyInput,
  type StageAsNumberPropertyInput,
  type StartDatePropertyInput,
  type StartOffsetPropertyInput,
  type StartTimePropertyInput,
  type StatTypePropertyInput,
  type StatusPropertyInput,
  type StepPropertyInput,
  type StepsPropertyInput,
  type StorageRequirementsPropertyInput,
  type StreetAddressPropertyInput,
  type StrengthUnitPropertyInput,
  type StrengthValuePropertyInput,
  type StudyPropertyInput,
  type StudyLocationPropertyInput,
  type StudySubjectPropertyInput,
  type SubEventPropertyInput,
  type SubEventsPropertyInput,
  type SubjectOfPropertyInput,
  type SubOrganizationPropertyInput,
  type SubStageSuffixPropertyInput,
  type SubStructurePropertyInput,
  type SubTripPropertyInput,
  type SuccessorOfPropertyInput,
  type SugarContentPropertyInput,
  type SuggestedAgePropertyInput,
  type SuggestedGenderPropertyInput,
  type SuggestedMaxAgePropertyInput,
  type SuggestedMeasurementPropertyInput,
  type SuggestedMinAgePropertyInput,
  type SuitableForDietPropertyInput,
  type SuperEventPropertyInput,
  type SupersededByPropertyInput,
  type SupplyPropertyInput,
  type SupportingDataPropertyInput,
  type TargetPropertyInput,
  type TargetDescriptionPropertyInput,
  type TargetNamePropertyInput,
  type TargetPopulationPropertyInput,
  type TargetUrlPropertyInput,
  type TaxIDPropertyInput,
  type TaxonomicRangePropertyInput,
  type TaxonRankPropertyInput,
  type TeachesPropertyInput,
  type TelephonePropertyInput,
  type TemporalPropertyInput,
  type TemporalCoveragePropertyInput,
  type TermCodePropertyInput,
  type TermsOfServicePropertyInput,
  type TextPropertyInput,
  type ThumbnailPropertyInput,
  type ThumbnailUrlPropertyInput,
  type TimeRequiredPropertyInput,
  type TocContinuationPropertyInput,
  type ToolPropertyInput,
  type TotalTimePropertyInput,
  type TourBookingPagePropertyInput,
  type TrackPropertyInput,
  type TracksPropertyInput,
  type TrailerPropertyInput,
  type TranscriptPropertyInput,
  type TransFatContentPropertyInput,
  type TransitTimePropertyInput,
  type TranslationOfWorkPropertyInput,
  type TranslatorPropertyInput,
  type TripOriginPropertyInput,
  type TypeOfGoodPropertyInput,
  type TypicalAgeRangePropertyInput,
  type TypicalTestPropertyInput,
  type UnitCodePropertyInput,
  type UnitTextPropertyInput,
  type UnnamedSourcesPolicyPropertyInput,
  type UnsaturatedFatContentPropertyInput,
  type UploadDatePropertyInput,
  type UpvoteCountPropertyInput,
  type UrlPropertyInput,
  type UrlTemplatePropertyInput,
  type UsageInfoPropertyInput,
  type UsedToDiagnosePropertyInput,
  type UserInteractionCountPropertyInput,
  type UsesDevicePropertyInput,
  type UsesHealthPlanIdStandardPropertyInput,
  type UtterancesPropertyInput,
  type ValidForPropertyInput,
  type ValidForMemberTierPropertyInput,
  type ValidFromPropertyInput,
  type ValidInPropertyInput,
  type ValidThroughPropertyInput,
  type ValuePropertyInput,
  type ValueAddedTaxIncludedPropertyInput,
  type ValueReferencePropertyInput,
  type VariableMeasuredPropertyInput,
  type VariesByPropertyInput,
  type VatIDPropertyInput,
  type VersionPropertyInput,
  type VideoPropertyInput,
  type VideoFormatPropertyInput,
  type VideoFrameSizePropertyInput,
  type VideoQualityPropertyInput,
  type WarningPropertyInput,
  type WarrantyPropertyInput,
  type WarrantyScopePropertyInput,
  type WeightPropertyInput,
  type WeightPercentagePropertyInput,
  type WidthPropertyInput,
  type WordCountPropertyInput,
  type WorkExamplePropertyInput,
  type WorkFeaturedPropertyInput,
  type WorkLocationPropertyInput,
  type WorkPerformedPropertyInput,
  type WorksForPropertyInput,
  type WorkTranslationPropertyInput,
  type WorstRatingPropertyInput,
  type XpathPropertyInput,
  type YieldPropertyInput,
} from "@mdwrk/structured-data";

function PrimitiveStructuredData({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function ObjectStructuredData({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data ?? {}) }} />;
}

export interface AnatomicalStructureStructuredDataProps { data: AnatomicalStructureInput; }
export function AnatomicalStructureStructuredData({ data }: AnatomicalStructureStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AnatomicalSystemStructuredDataProps { data: AnatomicalSystemInput; }
export function AnatomicalSystemStructuredData({ data }: AnatomicalSystemStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BioChemEntityStructuredDataProps { data: BioChemEntityInput; }
export function BioChemEntityStructuredData({ data }: BioChemEntityStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CmnsClsClassifierStructuredDataProps { data: CmnsClsClassifierInput; }
export function CmnsClsClassifierStructuredData({ data }: CmnsClsClassifierStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CmnsColCollectionStructuredDataProps { data: CmnsColCollectionInput; }
export function CmnsColCollectionStructuredData({ data }: CmnsColCollectionStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CmnsGeGeopoliticalEntityStructuredDataProps { data: CmnsGeGeopoliticalEntityInput; }
export function CmnsGeGeopoliticalEntityStructuredData({ data }: CmnsGeGeopoliticalEntityStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DDxElementStructuredDataProps { data: DDxElementInput; }
export function DDxElementStructuredData({ data }: DDxElementStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DietStructuredDataProps { data: DietInput; }
export function DietStructuredData({ data }: DietStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DoseScheduleStructuredDataProps { data: DoseScheduleInput; }
export function DoseScheduleStructuredData({ data }: DoseScheduleStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DrugStructuredDataProps { data: DrugInput; }
export function DrugStructuredData({ data }: DrugStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DrugClassStructuredDataProps { data: DrugClassInput; }
export function DrugClassStructuredData({ data }: DrugClassStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DrugLegalStatusStructuredDataProps { data: DrugLegalStatusInput; }
export function DrugLegalStatusStructuredData({ data }: DrugLegalStatusStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DrugStrengthStructuredDataProps { data: DrugStrengthInput; }
export function DrugStrengthStructuredData({ data }: DrugStrengthStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FiboFndAgrCtrMutualContractualAgreementStructuredDataProps { data: FiboFndAgrCtrMutualContractualAgreementInput; }
export function FiboFndAgrCtrMutualContractualAgreementStructuredData({ data }: FiboFndAgrCtrMutualContractualAgreementStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FiboFndArrDocCertificateStructuredDataProps { data: FiboFndArrDocCertificateInput; }
export function FiboFndArrDocCertificateStructuredData({ data }: FiboFndArrDocCertificateStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PaymentCardStructuredDataProps { data: PaymentCardInput; }
export function PaymentCardStructuredData({ data }: PaymentCardStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PaymentMethodStructuredDataProps { data: PaymentMethodInput; }
export function PaymentMethodStructuredData({ data }: PaymentMethodStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PeopleAudienceStructuredDataProps { data: PeopleAudienceInput; }
export function PeopleAudienceStructuredData({ data }: PeopleAudienceStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PerformingGroupStructuredDataProps { data: PerformingGroupInput; }
export function PerformingGroupStructuredData({ data }: PerformingGroupStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PersonStructuredDataProps { data: PersonInput; }
export function PersonStructuredData({ data }: PersonStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PhotographStructuredDataProps { data: PhotographInput; }
export function PhotographStructuredData({ data }: PhotographStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PlaceStructuredDataProps { data: PlaceInput; }
export function PlaceStructuredData({ data }: PlaceStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PostalAddressStructuredDataProps { data: PostalAddressInput; }
export function PostalAddressStructuredData({ data }: PostalAddressStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PostalCodeRangeSpecificationStructuredDataProps { data: PostalCodeRangeSpecificationInput; }
export function PostalCodeRangeSpecificationStructuredData({ data }: PostalCodeRangeSpecificationStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PriceSpecificationStructuredDataProps { data: PriceSpecificationInput; }
export function PriceSpecificationStructuredData({ data }: PriceSpecificationStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BooleanStructuredDataProps { data: BooleanInput; }
export function BooleanStructuredData({ data }: BooleanStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface DateStructuredDataProps { data: DateInput; }
export function DateStructuredData({ data }: DateStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface DateTimeStructuredDataProps { data: DateTimeInput; }
export function DateTimeStructuredData({ data }: DateTimeStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface NumberStructuredDataProps { data: NumberInput; }
export function NumberStructuredData({ data }: NumberStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface QuantityStructuredDataProps { data: QuantityInput; }
export function QuantityStructuredData({ data }: QuantityStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface TextStructuredDataProps { data: TextInput; }
export function TextStructuredData({ data }: TextStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface TimeStructuredDataProps { data: TimeInput; }
export function TimeStructuredData({ data }: TimeStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface ActionStatusTypeStructuredDataProps { data: ActionStatusTypeInput; }
export function ActionStatusTypeStructuredData({ data }: ActionStatusTypeStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface AdultOrientedEnumerationStructuredDataProps { data: AdultOrientedEnumerationInput; }
export function AdultOrientedEnumerationStructuredData({ data }: AdultOrientedEnumerationStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface BusinessEntityTypeStructuredDataProps { data: BusinessEntityTypeInput; }
export function BusinessEntityTypeStructuredData({ data }: BusinessEntityTypeStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface BusinessFunctionStructuredDataProps { data: BusinessFunctionInput; }
export function BusinessFunctionStructuredData({ data }: BusinessFunctionStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface CertificationStatusEnumerationStructuredDataProps { data: CertificationStatusEnumerationInput; }
export function CertificationStatusEnumerationStructuredData({ data }: CertificationStatusEnumerationStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface ContactPointOptionStructuredDataProps { data: ContactPointOptionInput; }
export function ContactPointOptionStructuredData({ data }: ContactPointOptionStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface DayOfWeekStructuredDataProps { data: DayOfWeekInput; }
export function DayOfWeekStructuredData({ data }: DayOfWeekStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface DeliveryMethodStructuredDataProps { data: DeliveryMethodInput; }
export function DeliveryMethodStructuredData({ data }: DeliveryMethodStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface DigitalPlatformEnumerationStructuredDataProps { data: DigitalPlatformEnumerationInput; }
export function DigitalPlatformEnumerationStructuredData({ data }: DigitalPlatformEnumerationStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface DrugPregnancyCategoryStructuredDataProps { data: DrugPregnancyCategoryInput; }
export function DrugPregnancyCategoryStructuredData({ data }: DrugPregnancyCategoryStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface DrugPrescriptionStatusStructuredDataProps { data: DrugPrescriptionStatusInput; }
export function DrugPrescriptionStatusStructuredData({ data }: DrugPrescriptionStatusStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface EnergyEfficiencyEnumerationStructuredDataProps { data: EnergyEfficiencyEnumerationInput; }
export function EnergyEfficiencyEnumerationStructuredData({ data }: EnergyEfficiencyEnumerationStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface EUEnergyEfficiencyEnumerationStructuredDataProps { data: EUEnergyEfficiencyEnumerationInput; }
export function EUEnergyEfficiencyEnumerationStructuredData({ data }: EUEnergyEfficiencyEnumerationStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface EventAttendanceModeEnumerationStructuredDataProps { data: EventAttendanceModeEnumerationInput; }
export function EventAttendanceModeEnumerationStructuredData({ data }: EventAttendanceModeEnumerationStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface EventStatusTypeStructuredDataProps { data: EventStatusTypeInput; }
export function EventStatusTypeStructuredData({ data }: EventStatusTypeStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface FulfillmentTypeEnumerationStructuredDataProps { data: FulfillmentTypeEnumerationInput; }
export function FulfillmentTypeEnumerationStructuredData({ data }: FulfillmentTypeEnumerationStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface GenderTypeStructuredDataProps { data: GenderTypeInput; }
export function GenderTypeStructuredData({ data }: GenderTypeStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface GovernmentBenefitsTypeStructuredDataProps { data: GovernmentBenefitsTypeInput; }
export function GovernmentBenefitsTypeStructuredData({ data }: GovernmentBenefitsTypeStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface IPTCDigitalSourceEnumerationStructuredDataProps { data: IPTCDigitalSourceEnumerationInput; }
export function IPTCDigitalSourceEnumerationStructuredData({ data }: IPTCDigitalSourceEnumerationStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface ItemAvailabilityStructuredDataProps { data: ItemAvailabilityInput; }
export function ItemAvailabilityStructuredData({ data }: ItemAvailabilityStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface ItemListOrderTypeStructuredDataProps { data: ItemListOrderTypeInput; }
export function ItemListOrderTypeStructuredData({ data }: ItemListOrderTypeStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface MapCategoryTypeStructuredDataProps { data: MapCategoryTypeInput; }
export function MapCategoryTypeStructuredData({ data }: MapCategoryTypeStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface MeasurementMethodEnumStructuredDataProps { data: MeasurementMethodEnumInput; }
export function MeasurementMethodEnumStructuredData({ data }: MeasurementMethodEnumStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface MeasurementTypeEnumerationStructuredDataProps { data: MeasurementTypeEnumerationInput; }
export function MeasurementTypeEnumerationStructuredData({ data }: MeasurementTypeEnumerationStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface MediaEnumerationStructuredDataProps { data: MediaEnumerationInput; }
export function MediaEnumerationStructuredData({ data }: MediaEnumerationStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface MedicalAudienceTypeStructuredDataProps { data: MedicalAudienceTypeInput; }
export function MedicalAudienceTypeStructuredData({ data }: MedicalAudienceTypeStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface MedicalEnumerationStructuredDataProps { data: MedicalEnumerationInput; }
export function MedicalEnumerationStructuredData({ data }: MedicalEnumerationStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface MedicalEvidenceLevelStructuredDataProps { data: MedicalEvidenceLevelInput; }
export function MedicalEvidenceLevelStructuredData({ data }: MedicalEvidenceLevelStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface MedicalProcedureTypeStructuredDataProps { data: MedicalProcedureTypeInput; }
export function MedicalProcedureTypeStructuredData({ data }: MedicalProcedureTypeStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface MedicalSpecialtyStructuredDataProps { data: MedicalSpecialtyInput; }
export function MedicalSpecialtyStructuredData({ data }: MedicalSpecialtyStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface MedicalStudyStatusStructuredDataProps { data: MedicalStudyStatusInput; }
export function MedicalStudyStatusStructuredData({ data }: MedicalStudyStatusStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface MedicineSystemStructuredDataProps { data: MedicineSystemInput; }
export function MedicineSystemStructuredData({ data }: MedicineSystemStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface MerchantReturnEnumerationStructuredDataProps { data: MerchantReturnEnumerationInput; }
export function MerchantReturnEnumerationStructuredData({ data }: MerchantReturnEnumerationStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface MusicAlbumProductionTypeStructuredDataProps { data: MusicAlbumProductionTypeInput; }
export function MusicAlbumProductionTypeStructuredData({ data }: MusicAlbumProductionTypeStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface MusicAlbumReleaseTypeStructuredDataProps { data: MusicAlbumReleaseTypeInput; }
export function MusicAlbumReleaseTypeStructuredData({ data }: MusicAlbumReleaseTypeStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface MusicReleaseFormatTypeStructuredDataProps { data: MusicReleaseFormatTypeInput; }
export function MusicReleaseFormatTypeStructuredData({ data }: MusicReleaseFormatTypeStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface NonprofitTypeStructuredDataProps { data: NonprofitTypeInput; }
export function NonprofitTypeStructuredData({ data }: NonprofitTypeStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface OfferItemConditionStructuredDataProps { data: OfferItemConditionInput; }
export function OfferItemConditionStructuredData({ data }: OfferItemConditionStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface PaymentMethodTypeStructuredDataProps { data: PaymentMethodTypeInput; }
export function PaymentMethodTypeStructuredData({ data }: PaymentMethodTypeStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface PhysicalActivityCategoryStructuredDataProps { data: PhysicalActivityCategoryInput; }
export function PhysicalActivityCategoryStructuredData({ data }: PhysicalActivityCategoryStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface PhysicalExamStructuredDataProps { data: PhysicalExamInput; }
export function PhysicalExamStructuredData({ data }: PhysicalExamStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface PriceComponentTypeEnumerationStructuredDataProps { data: PriceComponentTypeEnumerationInput; }
export function PriceComponentTypeEnumerationStructuredData({ data }: PriceComponentTypeEnumerationStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface PriceTypeEnumerationStructuredDataProps { data: PriceTypeEnumerationInput; }
export function PriceTypeEnumerationStructuredData({ data }: PriceTypeEnumerationStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface QualitativeValueStructuredDataProps { data: QualitativeValueInput; }
export function QualitativeValueStructuredData({ data }: QualitativeValueStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface RefundTypeEnumerationStructuredDataProps { data: RefundTypeEnumerationInput; }
export function RefundTypeEnumerationStructuredData({ data }: RefundTypeEnumerationStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface RestrictedDietStructuredDataProps { data: RestrictedDietInput; }
export function RestrictedDietStructuredData({ data }: RestrictedDietStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface ReturnFeesEnumerationStructuredDataProps { data: ReturnFeesEnumerationInput; }
export function ReturnFeesEnumerationStructuredData({ data }: ReturnFeesEnumerationStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface ReturnLabelSourceEnumerationStructuredDataProps { data: ReturnLabelSourceEnumerationInput; }
export function ReturnLabelSourceEnumerationStructuredData({ data }: ReturnLabelSourceEnumerationStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface ReturnMethodEnumerationStructuredDataProps { data: ReturnMethodEnumerationInput; }
export function ReturnMethodEnumerationStructuredData({ data }: ReturnMethodEnumerationStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface SizeSpecificationStructuredDataProps { data: SizeSpecificationInput; }
export function SizeSpecificationStructuredData({ data }: SizeSpecificationStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface SpecialtyStructuredDataProps { data: SpecialtyInput; }
export function SpecialtyStructuredData({ data }: SpecialtyStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface StatusEnumerationStructuredDataProps { data: StatusEnumerationInput; }
export function StatusEnumerationStructuredData({ data }: StatusEnumerationStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface TierBenefitEnumerationStructuredDataProps { data: TierBenefitEnumerationInput; }
export function TierBenefitEnumerationStructuredData({ data }: TierBenefitEnumerationStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface WarrantyScopeStructuredDataProps { data: WarrantyScopeInput; }
export function WarrantyScopeStructuredData({ data }: WarrantyScopeStructuredDataProps) {
  return <PrimitiveStructuredData data={data} />;
}

export interface AboutPropertyStructuredDataProps { data: AboutPropertyInput; }
export function AboutPropertyStructuredData({ data }: AboutPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AbstractPropertyStructuredDataProps { data: AbstractPropertyInput; }
export function AbstractPropertyStructuredData({ data }: AbstractPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AcceptedPaymentMethodPropertyStructuredDataProps { data: AcceptedPaymentMethodPropertyInput; }
export function AcceptedPaymentMethodPropertyStructuredData({ data }: AcceptedPaymentMethodPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AccessibilityAPIPropertyStructuredDataProps { data: AccessibilityAPIPropertyInput; }
export function AccessibilityAPIPropertyStructuredData({ data }: AccessibilityAPIPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AccessibilityControlPropertyStructuredDataProps { data: AccessibilityControlPropertyInput; }
export function AccessibilityControlPropertyStructuredData({ data }: AccessibilityControlPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AccessibilityFeaturePropertyStructuredDataProps { data: AccessibilityFeaturePropertyInput; }
export function AccessibilityFeaturePropertyStructuredData({ data }: AccessibilityFeaturePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AccessibilityHazardPropertyStructuredDataProps { data: AccessibilityHazardPropertyInput; }
export function AccessibilityHazardPropertyStructuredData({ data }: AccessibilityHazardPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AccessibilitySummaryPropertyStructuredDataProps { data: AccessibilitySummaryPropertyInput; }
export function AccessibilitySummaryPropertyStructuredData({ data }: AccessibilitySummaryPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AccessModePropertyStructuredDataProps { data: AccessModePropertyInput; }
export function AccessModePropertyStructuredData({ data }: AccessModePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AccessModeSufficientPropertyStructuredDataProps { data: AccessModeSufficientPropertyInput; }
export function AccessModeSufficientPropertyStructuredData({ data }: AccessModeSufficientPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AccountablePersonPropertyStructuredDataProps { data: AccountablePersonPropertyInput; }
export function AccountablePersonPropertyStructuredData({ data }: AccountablePersonPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AcquireLicensePagePropertyStructuredDataProps { data: AcquireLicensePagePropertyInput; }
export function AcquireLicensePagePropertyStructuredData({ data }: AcquireLicensePagePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ActionableFeedbackPolicyPropertyStructuredDataProps { data: ActionableFeedbackPolicyPropertyInput; }
export function ActionableFeedbackPolicyPropertyStructuredData({ data }: ActionableFeedbackPolicyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ActionApplicationPropertyStructuredDataProps { data: ActionApplicationPropertyInput; }
export function ActionApplicationPropertyStructuredData({ data }: ActionApplicationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ActionPlatformPropertyStructuredDataProps { data: ActionPlatformPropertyInput; }
export function ActionPlatformPropertyStructuredData({ data }: ActionPlatformPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ActionProcessPropertyStructuredDataProps { data: ActionProcessPropertyInput; }
export function ActionProcessPropertyStructuredData({ data }: ActionProcessPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ActionStatusPropertyStructuredDataProps { data: ActionStatusPropertyInput; }
export function ActionStatusPropertyStructuredData({ data }: ActionStatusPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ActiveIngredientPropertyStructuredDataProps { data: ActiveIngredientPropertyInput; }
export function ActiveIngredientPropertyStructuredData({ data }: ActiveIngredientPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ActorPropertyStructuredDataProps { data: ActorPropertyInput; }
export function ActorPropertyStructuredData({ data }: ActorPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ActorsPropertyStructuredDataProps { data: ActorsPropertyInput; }
export function ActorsPropertyStructuredData({ data }: ActorsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AdditionalNamePropertyStructuredDataProps { data: AdditionalNamePropertyInput; }
export function AdditionalNamePropertyStructuredData({ data }: AdditionalNamePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AdditionalPropertyPropertyStructuredDataProps { data: AdditionalPropertyPropertyInput; }
export function AdditionalPropertyPropertyStructuredData({ data }: AdditionalPropertyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AdditionalTypePropertyStructuredDataProps { data: AdditionalTypePropertyInput; }
export function AdditionalTypePropertyStructuredData({ data }: AdditionalTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AddOnPropertyStructuredDataProps { data: AddOnPropertyInput; }
export function AddOnPropertyStructuredData({ data }: AddOnPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AddressPropertyStructuredDataProps { data: AddressPropertyInput; }
export function AddressPropertyStructuredData({ data }: AddressPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AddressCountryPropertyStructuredDataProps { data: AddressCountryPropertyInput; }
export function AddressCountryPropertyStructuredData({ data }: AddressCountryPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AddressLocalityPropertyStructuredDataProps { data: AddressLocalityPropertyInput; }
export function AddressLocalityPropertyStructuredData({ data }: AddressLocalityPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AddressRegionPropertyStructuredDataProps { data: AddressRegionPropertyInput; }
export function AddressRegionPropertyStructuredData({ data }: AddressRegionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AdministrationRoutePropertyStructuredDataProps { data: AdministrationRoutePropertyInput; }
export function AdministrationRoutePropertyStructuredData({ data }: AdministrationRoutePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AdvanceBookingRequirementPropertyStructuredDataProps { data: AdvanceBookingRequirementPropertyInput; }
export function AdvanceBookingRequirementPropertyStructuredData({ data }: AdvanceBookingRequirementPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AdverseOutcomePropertyStructuredDataProps { data: AdverseOutcomePropertyInput; }
export function AdverseOutcomePropertyStructuredData({ data }: AdverseOutcomePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AffectedByPropertyStructuredDataProps { data: AffectedByPropertyInput; }
export function AffectedByPropertyStructuredData({ data }: AffectedByPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AffiliationPropertyStructuredDataProps { data: AffiliationPropertyInput; }
export function AffiliationPropertyStructuredData({ data }: AffiliationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AgentPropertyStructuredDataProps { data: AgentPropertyInput; }
export function AgentPropertyStructuredData({ data }: AgentPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AgentInteractionStatisticPropertyStructuredDataProps { data: AgentInteractionStatisticPropertyInput; }
export function AgentInteractionStatisticPropertyStructuredData({ data }: AgentInteractionStatisticPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AggregateElementPropertyStructuredDataProps { data: AggregateElementPropertyInput; }
export function AggregateElementPropertyStructuredData({ data }: AggregateElementPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AggregateRatingPropertyStructuredDataProps { data: AggregateRatingPropertyInput; }
export function AggregateRatingPropertyStructuredData({ data }: AggregateRatingPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AlbumPropertyStructuredDataProps { data: AlbumPropertyInput; }
export function AlbumPropertyStructuredData({ data }: AlbumPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AlbumProductionTypePropertyStructuredDataProps { data: AlbumProductionTypePropertyInput; }
export function AlbumProductionTypePropertyStructuredData({ data }: AlbumProductionTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AlbumReleasePropertyStructuredDataProps { data: AlbumReleasePropertyInput; }
export function AlbumReleasePropertyStructuredData({ data }: AlbumReleasePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AlbumReleaseTypePropertyStructuredDataProps { data: AlbumReleaseTypePropertyInput; }
export function AlbumReleaseTypePropertyStructuredData({ data }: AlbumReleaseTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AlbumsPropertyStructuredDataProps { data: AlbumsPropertyInput; }
export function AlbumsPropertyStructuredData({ data }: AlbumsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AlcoholWarningPropertyStructuredDataProps { data: AlcoholWarningPropertyInput; }
export function AlcoholWarningPropertyStructuredData({ data }: AlcoholWarningPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AlignmentTypePropertyStructuredDataProps { data: AlignmentTypePropertyInput; }
export function AlignmentTypePropertyStructuredData({ data }: AlignmentTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AlternateNamePropertyStructuredDataProps { data: AlternateNamePropertyInput; }
export function AlternateNamePropertyStructuredData({ data }: AlternateNamePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AlternativeHeadlinePropertyStructuredDataProps { data: AlternativeHeadlinePropertyInput; }
export function AlternativeHeadlinePropertyStructuredData({ data }: AlternativeHeadlinePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AlternativeOfPropertyStructuredDataProps { data: AlternativeOfPropertyInput; }
export function AlternativeOfPropertyStructuredData({ data }: AlternativeOfPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AlumniPropertyStructuredDataProps { data: AlumniPropertyInput; }
export function AlumniPropertyStructuredData({ data }: AlumniPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AlumniOfPropertyStructuredDataProps { data: AlumniOfPropertyInput; }
export function AlumniOfPropertyStructuredData({ data }: AlumniOfPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AmenityFeaturePropertyStructuredDataProps { data: AmenityFeaturePropertyInput; }
export function AmenityFeaturePropertyStructuredData({ data }: AmenityFeaturePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AmountPropertyStructuredDataProps { data: AmountPropertyInput; }
export function AmountPropertyStructuredData({ data }: AmountPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AmountOfThisGoodPropertyStructuredDataProps { data: AmountOfThisGoodPropertyInput; }
export function AmountOfThisGoodPropertyStructuredData({ data }: AmountOfThisGoodPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AnnualPercentageRatePropertyStructuredDataProps { data: AnnualPercentageRatePropertyInput; }
export function AnnualPercentageRatePropertyStructuredData({ data }: AnnualPercentageRatePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AppearancePropertyStructuredDataProps { data: AppearancePropertyInput; }
export function AppearancePropertyStructuredData({ data }: AppearancePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ApplicableCountryPropertyStructuredDataProps { data: ApplicableCountryPropertyInput; }
export function ApplicableCountryPropertyStructuredData({ data }: ApplicableCountryPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ApplicableLocationPropertyStructuredDataProps { data: ApplicableLocationPropertyInput; }
export function ApplicableLocationPropertyStructuredData({ data }: ApplicableLocationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ApplicationPropertyStructuredDataProps { data: ApplicationPropertyInput; }
export function ApplicationPropertyStructuredData({ data }: ApplicationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ApplicationCategoryPropertyStructuredDataProps { data: ApplicationCategoryPropertyInput; }
export function ApplicationCategoryPropertyStructuredData({ data }: ApplicationCategoryPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ApplicationSubCategoryPropertyStructuredDataProps { data: ApplicationSubCategoryPropertyInput; }
export function ApplicationSubCategoryPropertyStructuredData({ data }: ApplicationSubCategoryPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ApplicationSuitePropertyStructuredDataProps { data: ApplicationSuitePropertyInput; }
export function ApplicationSuitePropertyStructuredData({ data }: ApplicationSuitePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AppliesToDeliveryMethodPropertyStructuredDataProps { data: AppliesToDeliveryMethodPropertyInput; }
export function AppliesToDeliveryMethodPropertyStructuredData({ data }: AppliesToDeliveryMethodPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ArchivedAtPropertyStructuredDataProps { data: ArchivedAtPropertyInput; }
export function ArchivedAtPropertyStructuredData({ data }: ArchivedAtPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AreaPropertyStructuredDataProps { data: AreaPropertyInput; }
export function AreaPropertyStructuredData({ data }: AreaPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AreaServedPropertyStructuredDataProps { data: AreaServedPropertyInput; }
export function AreaServedPropertyStructuredData({ data }: AreaServedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ArrivalTimePropertyStructuredDataProps { data: ArrivalTimePropertyInput; }
export function ArrivalTimePropertyStructuredData({ data }: ArrivalTimePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ArticleBodyPropertyStructuredDataProps { data: ArticleBodyPropertyInput; }
export function ArticleBodyPropertyStructuredData({ data }: ArticleBodyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ArticleSectionPropertyStructuredDataProps { data: ArticleSectionPropertyInput; }
export function ArticleSectionPropertyStructuredData({ data }: ArticleSectionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AsinPropertyStructuredDataProps { data: AsinPropertyInput; }
export function AsinPropertyStructuredData({ data }: AsinPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AspectPropertyStructuredDataProps { data: AspectPropertyInput; }
export function AspectPropertyStructuredData({ data }: AspectPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AssessesPropertyStructuredDataProps { data: AssessesPropertyInput; }
export function AssessesPropertyStructuredData({ data }: AssessesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AssociatedAnatomyPropertyStructuredDataProps { data: AssociatedAnatomyPropertyInput; }
export function AssociatedAnatomyPropertyStructuredData({ data }: AssociatedAnatomyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AssociatedArticlePropertyStructuredDataProps { data: AssociatedArticlePropertyInput; }
export function AssociatedArticlePropertyStructuredData({ data }: AssociatedArticlePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AssociatedClaimReviewPropertyStructuredDataProps { data: AssociatedClaimReviewPropertyInput; }
export function AssociatedClaimReviewPropertyStructuredData({ data }: AssociatedClaimReviewPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AssociatedDiseasePropertyStructuredDataProps { data: AssociatedDiseasePropertyInput; }
export function AssociatedDiseasePropertyStructuredData({ data }: AssociatedDiseasePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AssociatedMediaPropertyStructuredDataProps { data: AssociatedMediaPropertyInput; }
export function AssociatedMediaPropertyStructuredData({ data }: AssociatedMediaPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AssociatedMediaReviewPropertyStructuredDataProps { data: AssociatedMediaReviewPropertyInput; }
export function AssociatedMediaReviewPropertyStructuredData({ data }: AssociatedMediaReviewPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AssociatedPathophysiologyPropertyStructuredDataProps { data: AssociatedPathophysiologyPropertyInput; }
export function AssociatedPathophysiologyPropertyStructuredData({ data }: AssociatedPathophysiologyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AssociatedReviewPropertyStructuredDataProps { data: AssociatedReviewPropertyInput; }
export function AssociatedReviewPropertyStructuredData({ data }: AssociatedReviewPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AttendeePropertyStructuredDataProps { data: AttendeePropertyInput; }
export function AttendeePropertyStructuredData({ data }: AttendeePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AttendeesPropertyStructuredDataProps { data: AttendeesPropertyInput; }
export function AttendeesPropertyStructuredData({ data }: AttendeesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AudiencePropertyStructuredDataProps { data: AudiencePropertyInput; }
export function AudiencePropertyStructuredData({ data }: AudiencePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AudienceTypePropertyStructuredDataProps { data: AudienceTypePropertyInput; }
export function AudienceTypePropertyStructuredData({ data }: AudienceTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AudioPropertyStructuredDataProps { data: AudioPropertyInput; }
export function AudioPropertyStructuredData({ data }: AudioPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AuditDatePropertyStructuredDataProps { data: AuditDatePropertyInput; }
export function AuditDatePropertyStructuredData({ data }: AuditDatePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AuthenticatorPropertyStructuredDataProps { data: AuthenticatorPropertyInput; }
export function AuthenticatorPropertyStructuredData({ data }: AuthenticatorPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AuthorPropertyStructuredDataProps { data: AuthorPropertyInput; }
export function AuthorPropertyStructuredData({ data }: AuthorPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AvailabilityPropertyStructuredDataProps { data: AvailabilityPropertyInput; }
export function AvailabilityPropertyStructuredData({ data }: AvailabilityPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AvailabilityEndsPropertyStructuredDataProps { data: AvailabilityEndsPropertyInput; }
export function AvailabilityEndsPropertyStructuredData({ data }: AvailabilityEndsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AvailabilityStartsPropertyStructuredDataProps { data: AvailabilityStartsPropertyInput; }
export function AvailabilityStartsPropertyStructuredData({ data }: AvailabilityStartsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AvailableAtOrFromPropertyStructuredDataProps { data: AvailableAtOrFromPropertyInput; }
export function AvailableAtOrFromPropertyStructuredData({ data }: AvailableAtOrFromPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AvailableChannelPropertyStructuredDataProps { data: AvailableChannelPropertyInput; }
export function AvailableChannelPropertyStructuredData({ data }: AvailableChannelPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AvailableDeliveryMethodPropertyStructuredDataProps { data: AvailableDeliveryMethodPropertyInput; }
export function AvailableDeliveryMethodPropertyStructuredData({ data }: AvailableDeliveryMethodPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AvailableInPropertyStructuredDataProps { data: AvailableInPropertyInput; }
export function AvailableInPropertyStructuredData({ data }: AvailableInPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AvailableLanguagePropertyStructuredDataProps { data: AvailableLanguagePropertyInput; }
export function AvailableLanguagePropertyStructuredData({ data }: AvailableLanguagePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AvailableOnDevicePropertyStructuredDataProps { data: AvailableOnDevicePropertyInput; }
export function AvailableOnDevicePropertyStructuredData({ data }: AvailableOnDevicePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AvailableStrengthPropertyStructuredDataProps { data: AvailableStrengthPropertyInput; }
export function AvailableStrengthPropertyStructuredData({ data }: AvailableStrengthPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AwardPropertyStructuredDataProps { data: AwardPropertyInput; }
export function AwardPropertyStructuredData({ data }: AwardPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface AwardsPropertyStructuredDataProps { data: AwardsPropertyInput; }
export function AwardsPropertyStructuredData({ data }: AwardsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BackstoryPropertyStructuredDataProps { data: BackstoryPropertyInput; }
export function BackstoryPropertyStructuredData({ data }: BackstoryPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BenefitsSummaryUrlPropertyStructuredDataProps { data: BenefitsSummaryUrlPropertyInput; }
export function BenefitsSummaryUrlPropertyStructuredData({ data }: BenefitsSummaryUrlPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BestRatingPropertyStructuredDataProps { data: BestRatingPropertyInput; }
export function BestRatingPropertyStructuredData({ data }: BestRatingPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BillingDurationPropertyStructuredDataProps { data: BillingDurationPropertyInput; }
export function BillingDurationPropertyStructuredData({ data }: BillingDurationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BillingIncrementPropertyStructuredDataProps { data: BillingIncrementPropertyInput; }
export function BillingIncrementPropertyStructuredData({ data }: BillingIncrementPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BillingStartPropertyStructuredDataProps { data: BillingStartPropertyInput; }
export function BillingStartPropertyStructuredData({ data }: BillingStartPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BioChemInteractionPropertyStructuredDataProps { data: BioChemInteractionPropertyInput; }
export function BioChemInteractionPropertyStructuredData({ data }: BioChemInteractionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BioChemSimilarityPropertyStructuredDataProps { data: BioChemSimilarityPropertyInput; }
export function BioChemSimilarityPropertyStructuredData({ data }: BioChemSimilarityPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BiologicalRolePropertyStructuredDataProps { data: BiologicalRolePropertyInput; }
export function BiologicalRolePropertyStructuredData({ data }: BiologicalRolePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BirthDatePropertyStructuredDataProps { data: BirthDatePropertyInput; }
export function BirthDatePropertyStructuredData({ data }: BirthDatePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BirthPlacePropertyStructuredDataProps { data: BirthPlacePropertyInput; }
export function BirthPlacePropertyStructuredData({ data }: BirthPlacePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BitratePropertyStructuredDataProps { data: BitratePropertyInput; }
export function BitratePropertyStructuredData({ data }: BitratePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BodyLocationPropertyStructuredDataProps { data: BodyLocationPropertyInput; }
export function BodyLocationPropertyStructuredData({ data }: BodyLocationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BoxPropertyStructuredDataProps { data: BoxPropertyInput; }
export function BoxPropertyStructuredData({ data }: BoxPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BranchCodePropertyStructuredDataProps { data: BranchCodePropertyInput; }
export function BranchCodePropertyStructuredData({ data }: BranchCodePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BrandPropertyStructuredDataProps { data: BrandPropertyInput; }
export function BrandPropertyStructuredData({ data }: BrandPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BreadcrumbPropertyStructuredDataProps { data: BreadcrumbPropertyInput; }
export function BreadcrumbPropertyStructuredData({ data }: BreadcrumbPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BreastfeedingWarningPropertyStructuredDataProps { data: BreastfeedingWarningPropertyInput; }
export function BreastfeedingWarningPropertyStructuredData({ data }: BreastfeedingWarningPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BroadcastAffiliateOfPropertyStructuredDataProps { data: BroadcastAffiliateOfPropertyInput; }
export function BroadcastAffiliateOfPropertyStructuredData({ data }: BroadcastAffiliateOfPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BroadcastChannelIdPropertyStructuredDataProps { data: BroadcastChannelIdPropertyInput; }
export function BroadcastChannelIdPropertyStructuredData({ data }: BroadcastChannelIdPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BroadcastDisplayNamePropertyStructuredDataProps { data: BroadcastDisplayNamePropertyInput; }
export function BroadcastDisplayNamePropertyStructuredData({ data }: BroadcastDisplayNamePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BroadcasterPropertyStructuredDataProps { data: BroadcasterPropertyInput; }
export function BroadcasterPropertyStructuredData({ data }: BroadcasterPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BroadcastFrequencyPropertyStructuredDataProps { data: BroadcastFrequencyPropertyInput; }
export function BroadcastFrequencyPropertyStructuredData({ data }: BroadcastFrequencyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BroadcastFrequencyValuePropertyStructuredDataProps { data: BroadcastFrequencyValuePropertyInput; }
export function BroadcastFrequencyValuePropertyStructuredData({ data }: BroadcastFrequencyValuePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BroadcastServiceTierPropertyStructuredDataProps { data: BroadcastServiceTierPropertyInput; }
export function BroadcastServiceTierPropertyStructuredData({ data }: BroadcastServiceTierPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BroadcastSignalModulationPropertyStructuredDataProps { data: BroadcastSignalModulationPropertyInput; }
export function BroadcastSignalModulationPropertyStructuredData({ data }: BroadcastSignalModulationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BroadcastSubChannelPropertyStructuredDataProps { data: BroadcastSubChannelPropertyInput; }
export function BroadcastSubChannelPropertyStructuredData({ data }: BroadcastSubChannelPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BroadcastTimezonePropertyStructuredDataProps { data: BroadcastTimezonePropertyInput; }
export function BroadcastTimezonePropertyStructuredData({ data }: BroadcastTimezonePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BrokerPropertyStructuredDataProps { data: BrokerPropertyInput; }
export function BrokerPropertyStructuredData({ data }: BrokerPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BusinessDaysPropertyStructuredDataProps { data: BusinessDaysPropertyInput; }
export function BusinessDaysPropertyStructuredData({ data }: BusinessDaysPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface BusinessFunctionPropertyStructuredDataProps { data: BusinessFunctionPropertyInput; }
export function BusinessFunctionPropertyStructuredData({ data }: BusinessFunctionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ByArtistPropertyStructuredDataProps { data: ByArtistPropertyInput; }
export function ByArtistPropertyStructuredData({ data }: ByArtistPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ByDayPropertyStructuredDataProps { data: ByDayPropertyInput; }
export function ByDayPropertyStructuredData({ data }: ByDayPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ByMonthPropertyStructuredDataProps { data: ByMonthPropertyInput; }
export function ByMonthPropertyStructuredData({ data }: ByMonthPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ByMonthDayPropertyStructuredDataProps { data: ByMonthDayPropertyInput; }
export function ByMonthDayPropertyStructuredData({ data }: ByMonthDayPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ByMonthWeekPropertyStructuredDataProps { data: ByMonthWeekPropertyInput; }
export function ByMonthWeekPropertyStructuredData({ data }: ByMonthWeekPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CallSignPropertyStructuredDataProps { data: CallSignPropertyInput; }
export function CallSignPropertyStructuredData({ data }: CallSignPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CaloriesPropertyStructuredDataProps { data: CaloriesPropertyInput; }
export function CaloriesPropertyStructuredData({ data }: CaloriesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CaptionPropertyStructuredDataProps { data: CaptionPropertyInput; }
export function CaptionPropertyStructuredData({ data }: CaptionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CarbohydrateContentPropertyStructuredDataProps { data: CarbohydrateContentPropertyInput; }
export function CarbohydrateContentPropertyStructuredData({ data }: CarbohydrateContentPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CashBackPropertyStructuredDataProps { data: CashBackPropertyInput; }
export function CashBackPropertyStructuredData({ data }: CashBackPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CatalogPropertyStructuredDataProps { data: CatalogPropertyInput; }
export function CatalogPropertyStructuredData({ data }: CatalogPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CatalogNumberPropertyStructuredDataProps { data: CatalogNumberPropertyInput; }
export function CatalogNumberPropertyStructuredData({ data }: CatalogNumberPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CategoryPropertyStructuredDataProps { data: CategoryPropertyInput; }
export function CategoryPropertyStructuredData({ data }: CategoryPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CausePropertyStructuredDataProps { data: CausePropertyInput; }
export function CausePropertyStructuredData({ data }: CausePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CauseOfPropertyStructuredDataProps { data: CauseOfPropertyInput; }
export function CauseOfPropertyStructuredData({ data }: CauseOfPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CertificationIdentificationPropertyStructuredDataProps { data: CertificationIdentificationPropertyInput; }
export function CertificationIdentificationPropertyStructuredData({ data }: CertificationIdentificationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CertificationRatingPropertyStructuredDataProps { data: CertificationRatingPropertyInput; }
export function CertificationRatingPropertyStructuredData({ data }: CertificationRatingPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CertificationStatusPropertyStructuredDataProps { data: CertificationStatusPropertyInput; }
export function CertificationStatusPropertyStructuredData({ data }: CertificationStatusPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CharacterPropertyStructuredDataProps { data: CharacterPropertyInput; }
export function CharacterPropertyStructuredData({ data }: CharacterPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CheckoutPageURLTemplatePropertyStructuredDataProps { data: CheckoutPageURLTemplatePropertyInput; }
export function CheckoutPageURLTemplatePropertyStructuredData({ data }: CheckoutPageURLTemplatePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ChildrenPropertyStructuredDataProps { data: ChildrenPropertyInput; }
export function ChildrenPropertyStructuredData({ data }: ChildrenPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ChildTaxonPropertyStructuredDataProps { data: ChildTaxonPropertyInput; }
export function ChildTaxonPropertyStructuredData({ data }: ChildTaxonPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CholesterolContentPropertyStructuredDataProps { data: CholesterolContentPropertyInput; }
export function CholesterolContentPropertyStructuredData({ data }: CholesterolContentPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CirclePropertyStructuredDataProps { data: CirclePropertyInput; }
export function CirclePropertyStructuredData({ data }: CirclePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CitationPropertyStructuredDataProps { data: CitationPropertyInput; }
export function CitationPropertyStructuredData({ data }: CitationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ClaimInterpreterPropertyStructuredDataProps { data: ClaimInterpreterPropertyInput; }
export function ClaimInterpreterPropertyStructuredData({ data }: ClaimInterpreterPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ClincalPharmacologyPropertyStructuredDataProps { data: ClincalPharmacologyPropertyInput; }
export function ClincalPharmacologyPropertyStructuredData({ data }: ClincalPharmacologyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ClinicalPharmacologyPropertyStructuredDataProps { data: ClinicalPharmacologyPropertyInput; }
export function ClinicalPharmacologyPropertyStructuredData({ data }: ClinicalPharmacologyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ClipNumberPropertyStructuredDataProps { data: ClipNumberPropertyInput; }
export function ClipNumberPropertyStructuredData({ data }: ClipNumberPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ClosesPropertyStructuredDataProps { data: ClosesPropertyInput; }
export function ClosesPropertyStructuredData({ data }: ClosesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CodePropertyStructuredDataProps { data: CodePropertyInput; }
export function CodePropertyStructuredData({ data }: CodePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CodeValuePropertyStructuredDataProps { data: CodeValuePropertyInput; }
export function CodeValuePropertyStructuredData({ data }: CodeValuePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CodingSystemPropertyStructuredDataProps { data: CodingSystemPropertyInput; }
export function CodingSystemPropertyStructuredData({ data }: CodingSystemPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ColleaguePropertyStructuredDataProps { data: ColleaguePropertyInput; }
export function ColleaguePropertyStructuredData({ data }: ColleaguePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ColleaguesPropertyStructuredDataProps { data: ColleaguesPropertyInput; }
export function ColleaguesPropertyStructuredData({ data }: ColleaguesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ColorPropertyStructuredDataProps { data: ColorPropertyInput; }
export function ColorPropertyStructuredData({ data }: ColorPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ColorSwatchPropertyStructuredDataProps { data: ColorSwatchPropertyInput; }
export function ColorSwatchPropertyStructuredData({ data }: ColorSwatchPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CommentPropertyStructuredDataProps { data: CommentPropertyInput; }
export function CommentPropertyStructuredData({ data }: CommentPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CommentCountPropertyStructuredDataProps { data: CommentCountPropertyInput; }
export function CommentCountPropertyStructuredData({ data }: CommentCountPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CompanyRegistrationPropertyStructuredDataProps { data: CompanyRegistrationPropertyInput; }
export function CompanyRegistrationPropertyStructuredData({ data }: CompanyRegistrationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CompetencyRequiredPropertyStructuredDataProps { data: CompetencyRequiredPropertyInput; }
export function CompetencyRequiredPropertyStructuredData({ data }: CompetencyRequiredPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ComposerPropertyStructuredDataProps { data: ComposerPropertyInput; }
export function ComposerPropertyStructuredData({ data }: ComposerPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ComprisedOfPropertyStructuredDataProps { data: ComprisedOfPropertyInput; }
export function ComprisedOfPropertyStructuredData({ data }: ComprisedOfPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ConditionsOfAccessPropertyStructuredDataProps { data: ConditionsOfAccessPropertyInput; }
export function ConditionsOfAccessPropertyStructuredData({ data }: ConditionsOfAccessPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ConnectedToPropertyStructuredDataProps { data: ConnectedToPropertyInput; }
export function ConnectedToPropertyStructuredData({ data }: ConnectedToPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ConstraintPropertyPropertyStructuredDataProps { data: ConstraintPropertyPropertyInput; }
export function ConstraintPropertyPropertyStructuredData({ data }: ConstraintPropertyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ContactlessPaymentPropertyStructuredDataProps { data: ContactlessPaymentPropertyInput; }
export function ContactlessPaymentPropertyStructuredData({ data }: ContactlessPaymentPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ContactOptionPropertyStructuredDataProps { data: ContactOptionPropertyInput; }
export function ContactOptionPropertyStructuredData({ data }: ContactOptionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ContactPointPropertyStructuredDataProps { data: ContactPointPropertyInput; }
export function ContactPointPropertyStructuredData({ data }: ContactPointPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ContactPointsPropertyStructuredDataProps { data: ContactPointsPropertyInput; }
export function ContactPointsPropertyStructuredData({ data }: ContactPointsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ContactTypePropertyStructuredDataProps { data: ContactTypePropertyInput; }
export function ContactTypePropertyStructuredData({ data }: ContactTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ContainedInPropertyStructuredDataProps { data: ContainedInPropertyInput; }
export function ContainedInPropertyStructuredData({ data }: ContainedInPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ContainedInPlacePropertyStructuredDataProps { data: ContainedInPlacePropertyInput; }
export function ContainedInPlacePropertyStructuredData({ data }: ContainedInPlacePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ContainsPlacePropertyStructuredDataProps { data: ContainsPlacePropertyInput; }
export function ContainsPlacePropertyStructuredData({ data }: ContainsPlacePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ContentLocationPropertyStructuredDataProps { data: ContentLocationPropertyInput; }
export function ContentLocationPropertyStructuredData({ data }: ContentLocationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ContentRatingPropertyStructuredDataProps { data: ContentRatingPropertyInput; }
export function ContentRatingPropertyStructuredData({ data }: ContentRatingPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ContentReferenceTimePropertyStructuredDataProps { data: ContentReferenceTimePropertyInput; }
export function ContentReferenceTimePropertyStructuredData({ data }: ContentReferenceTimePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ContentSizePropertyStructuredDataProps { data: ContentSizePropertyInput; }
export function ContentSizePropertyStructuredData({ data }: ContentSizePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ContentTypePropertyStructuredDataProps { data: ContentTypePropertyInput; }
export function ContentTypePropertyStructuredData({ data }: ContentTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ContentUrlPropertyStructuredDataProps { data: ContentUrlPropertyInput; }
export function ContentUrlPropertyStructuredData({ data }: ContentUrlPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ContraindicationPropertyStructuredDataProps { data: ContraindicationPropertyInput; }
export function ContraindicationPropertyStructuredData({ data }: ContraindicationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ContributorPropertyStructuredDataProps { data: ContributorPropertyInput; }
export function ContributorPropertyStructuredData({ data }: ContributorPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CopyrightHolderPropertyStructuredDataProps { data: CopyrightHolderPropertyInput; }
export function CopyrightHolderPropertyStructuredData({ data }: CopyrightHolderPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CopyrightNoticePropertyStructuredDataProps { data: CopyrightNoticePropertyInput; }
export function CopyrightNoticePropertyStructuredData({ data }: CopyrightNoticePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CopyrightYearPropertyStructuredDataProps { data: CopyrightYearPropertyInput; }
export function CopyrightYearPropertyStructuredData({ data }: CopyrightYearPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CorrectionPropertyStructuredDataProps { data: CorrectionPropertyInput; }
export function CorrectionPropertyStructuredData({ data }: CorrectionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CorrectionsPolicyPropertyStructuredDataProps { data: CorrectionsPolicyPropertyInput; }
export function CorrectionsPolicyPropertyStructuredData({ data }: CorrectionsPolicyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CountriesNotSupportedPropertyStructuredDataProps { data: CountriesNotSupportedPropertyInput; }
export function CountriesNotSupportedPropertyStructuredData({ data }: CountriesNotSupportedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CountriesSupportedPropertyStructuredDataProps { data: CountriesSupportedPropertyInput; }
export function CountriesSupportedPropertyStructuredData({ data }: CountriesSupportedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CountryOfAssemblyPropertyStructuredDataProps { data: CountryOfAssemblyPropertyInput; }
export function CountryOfAssemblyPropertyStructuredData({ data }: CountryOfAssemblyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CountryOfLastProcessingPropertyStructuredDataProps { data: CountryOfLastProcessingPropertyInput; }
export function CountryOfLastProcessingPropertyStructuredData({ data }: CountryOfLastProcessingPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CountryOfOriginPropertyStructuredDataProps { data: CountryOfOriginPropertyInput; }
export function CountryOfOriginPropertyStructuredData({ data }: CountryOfOriginPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CreativeWorkStatusPropertyStructuredDataProps { data: CreativeWorkStatusPropertyInput; }
export function CreativeWorkStatusPropertyStructuredData({ data }: CreativeWorkStatusPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CreatorPropertyStructuredDataProps { data: CreatorPropertyInput; }
export function CreatorPropertyStructuredData({ data }: CreatorPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CredentialCategoryPropertyStructuredDataProps { data: CredentialCategoryPropertyInput; }
export function CredentialCategoryPropertyStructuredData({ data }: CredentialCategoryPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CreditedToPropertyStructuredDataProps { data: CreditedToPropertyInput; }
export function CreditedToPropertyStructuredData({ data }: CreditedToPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CreditTextPropertyStructuredDataProps { data: CreditTextPropertyInput; }
export function CreditTextPropertyStructuredData({ data }: CreditTextPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CssSelectorPropertyStructuredDataProps { data: CssSelectorPropertyInput; }
export function CssSelectorPropertyStructuredData({ data }: CssSelectorPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CurrencyPropertyStructuredDataProps { data: CurrencyPropertyInput; }
export function CurrencyPropertyStructuredData({ data }: CurrencyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CustomerRemorseReturnFeesPropertyStructuredDataProps { data: CustomerRemorseReturnFeesPropertyInput; }
export function CustomerRemorseReturnFeesPropertyStructuredData({ data }: CustomerRemorseReturnFeesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CustomerRemorseReturnLabelSourcePropertyStructuredDataProps { data: CustomerRemorseReturnLabelSourcePropertyInput; }
export function CustomerRemorseReturnLabelSourcePropertyStructuredData({ data }: CustomerRemorseReturnLabelSourcePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CustomerRemorseReturnShippingFeesAmountPropertyStructuredDataProps { data: CustomerRemorseReturnShippingFeesAmountPropertyInput; }
export function CustomerRemorseReturnShippingFeesAmountPropertyStructuredData({ data }: CustomerRemorseReturnShippingFeesAmountPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface CutoffTimePropertyStructuredDataProps { data: CutoffTimePropertyInput; }
export function CutoffTimePropertyStructuredData({ data }: CutoffTimePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DataFeedElementPropertyStructuredDataProps { data: DataFeedElementPropertyInput; }
export function DataFeedElementPropertyStructuredData({ data }: DataFeedElementPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DatasetPropertyStructuredDataProps { data: DatasetPropertyInput; }
export function DatasetPropertyStructuredData({ data }: DatasetPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DatasetTimeIntervalPropertyStructuredDataProps { data: DatasetTimeIntervalPropertyInput; }
export function DatasetTimeIntervalPropertyStructuredData({ data }: DatasetTimeIntervalPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DateCreatedPropertyStructuredDataProps { data: DateCreatedPropertyInput; }
export function DateCreatedPropertyStructuredData({ data }: DateCreatedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DateDeletedPropertyStructuredDataProps { data: DateDeletedPropertyInput; }
export function DateDeletedPropertyStructuredData({ data }: DateDeletedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DatelinePropertyStructuredDataProps { data: DatelinePropertyInput; }
export function DatelinePropertyStructuredData({ data }: DatelinePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DateModifiedPropertyStructuredDataProps { data: DateModifiedPropertyInput; }
export function DateModifiedPropertyStructuredData({ data }: DateModifiedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DatePostedPropertyStructuredDataProps { data: DatePostedPropertyInput; }
export function DatePostedPropertyStructuredData({ data }: DatePostedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DatePublishedPropertyStructuredDataProps { data: DatePublishedPropertyInput; }
export function DatePublishedPropertyStructuredData({ data }: DatePublishedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DayOfWeekPropertyStructuredDataProps { data: DayOfWeekPropertyInput; }
export function DayOfWeekPropertyStructuredData({ data }: DayOfWeekPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DeathDatePropertyStructuredDataProps { data: DeathDatePropertyInput; }
export function DeathDatePropertyStructuredData({ data }: DeathDatePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DeathPlacePropertyStructuredDataProps { data: DeathPlacePropertyInput; }
export function DeathPlacePropertyStructuredData({ data }: DeathPlacePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DeliveryLeadTimePropertyStructuredDataProps { data: DeliveryLeadTimePropertyInput; }
export function DeliveryLeadTimePropertyStructuredData({ data }: DeliveryLeadTimePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DeliveryTimePropertyStructuredDataProps { data: DeliveryTimePropertyInput; }
export function DeliveryTimePropertyStructuredData({ data }: DeliveryTimePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DepartmentPropertyStructuredDataProps { data: DepartmentPropertyInput; }
export function DepartmentPropertyStructuredData({ data }: DepartmentPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DepartureTimePropertyStructuredDataProps { data: DepartureTimePropertyInput; }
export function DepartureTimePropertyStructuredData({ data }: DepartureTimePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DepthPropertyStructuredDataProps { data: DepthPropertyInput; }
export function DepthPropertyStructuredData({ data }: DepthPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DescriptionPropertyStructuredDataProps { data: DescriptionPropertyInput; }
export function DescriptionPropertyStructuredData({ data }: DescriptionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DevicePropertyStructuredDataProps { data: DevicePropertyInput; }
export function DevicePropertyStructuredData({ data }: DevicePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DiagnosisPropertyStructuredDataProps { data: DiagnosisPropertyInput; }
export function DiagnosisPropertyStructuredData({ data }: DiagnosisPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DiagramPropertyStructuredDataProps { data: DiagramPropertyInput; }
export function DiagramPropertyStructuredData({ data }: DiagramPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DietFeaturesPropertyStructuredDataProps { data: DietFeaturesPropertyInput; }
export function DietFeaturesPropertyStructuredData({ data }: DietFeaturesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DifferentialDiagnosisPropertyStructuredDataProps { data: DifferentialDiagnosisPropertyInput; }
export function DifferentialDiagnosisPropertyStructuredData({ data }: DifferentialDiagnosisPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DigitalSourceTypePropertyStructuredDataProps { data: DigitalSourceTypePropertyInput; }
export function DigitalSourceTypePropertyStructuredData({ data }: DigitalSourceTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DirectorPropertyStructuredDataProps { data: DirectorPropertyInput; }
export function DirectorPropertyStructuredData({ data }: DirectorPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DirectorsPropertyStructuredDataProps { data: DirectorsPropertyInput; }
export function DirectorsPropertyStructuredData({ data }: DirectorsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DisambiguatingDescriptionPropertyStructuredDataProps { data: DisambiguatingDescriptionPropertyInput; }
export function DisambiguatingDescriptionPropertyStructuredData({ data }: DisambiguatingDescriptionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DiscussionUrlPropertyStructuredDataProps { data: DiscussionUrlPropertyInput; }
export function DiscussionUrlPropertyStructuredData({ data }: DiscussionUrlPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DisplayLocationPropertyStructuredDataProps { data: DisplayLocationPropertyInput; }
export function DisplayLocationPropertyStructuredData({ data }: DisplayLocationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DissolutionDatePropertyStructuredDataProps { data: DissolutionDatePropertyInput; }
export function DissolutionDatePropertyStructuredData({ data }: DissolutionDatePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DistinguishingSignPropertyStructuredDataProps { data: DistinguishingSignPropertyInput; }
export function DistinguishingSignPropertyStructuredData({ data }: DistinguishingSignPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DistributionPropertyStructuredDataProps { data: DistributionPropertyInput; }
export function DistributionPropertyStructuredData({ data }: DistributionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DiversityPolicyPropertyStructuredDataProps { data: DiversityPolicyPropertyInput; }
export function DiversityPolicyPropertyStructuredData({ data }: DiversityPolicyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DiversityStaffingReportPropertyStructuredDataProps { data: DiversityStaffingReportPropertyInput; }
export function DiversityStaffingReportPropertyStructuredData({ data }: DiversityStaffingReportPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DoesNotShipPropertyStructuredDataProps { data: DoesNotShipPropertyInput; }
export function DoesNotShipPropertyStructuredData({ data }: DoesNotShipPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DomainIncludesPropertyStructuredDataProps { data: DomainIncludesPropertyInput; }
export function DomainIncludesPropertyStructuredData({ data }: DomainIncludesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DoorTimePropertyStructuredDataProps { data: DoorTimePropertyInput; }
export function DoorTimePropertyStructuredData({ data }: DoorTimePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DosageFormPropertyStructuredDataProps { data: DosageFormPropertyInput; }
export function DosageFormPropertyStructuredData({ data }: DosageFormPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DoseSchedulePropertyStructuredDataProps { data: DoseSchedulePropertyInput; }
export function DoseSchedulePropertyStructuredData({ data }: DoseSchedulePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DoseUnitPropertyStructuredDataProps { data: DoseUnitPropertyInput; }
export function DoseUnitPropertyStructuredData({ data }: DoseUnitPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DoseValuePropertyStructuredDataProps { data: DoseValuePropertyInput; }
export function DoseValuePropertyStructuredData({ data }: DoseValuePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DownloadUrlPropertyStructuredDataProps { data: DownloadUrlPropertyInput; }
export function DownloadUrlPropertyStructuredData({ data }: DownloadUrlPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DownPaymentPropertyStructuredDataProps { data: DownPaymentPropertyInput; }
export function DownPaymentPropertyStructuredData({ data }: DownPaymentPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DownvoteCountPropertyStructuredDataProps { data: DownvoteCountPropertyInput; }
export function DownvoteCountPropertyStructuredData({ data }: DownvoteCountPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DrugPropertyStructuredDataProps { data: DrugPropertyInput; }
export function DrugPropertyStructuredData({ data }: DrugPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DrugClassPropertyStructuredDataProps { data: DrugClassPropertyInput; }
export function DrugClassPropertyStructuredData({ data }: DrugClassPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DrugUnitPropertyStructuredDataProps { data: DrugUnitPropertyInput; }
export function DrugUnitPropertyStructuredData({ data }: DrugUnitPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DunsPropertyStructuredDataProps { data: DunsPropertyInput; }
export function DunsPropertyStructuredData({ data }: DunsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DuplicateTherapyPropertyStructuredDataProps { data: DuplicateTherapyPropertyInput; }
export function DuplicateTherapyPropertyStructuredData({ data }: DuplicateTherapyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DurationPropertyStructuredDataProps { data: DurationPropertyInput; }
export function DurationPropertyStructuredData({ data }: DurationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface DurationOfWarrantyPropertyStructuredDataProps { data: DurationOfWarrantyPropertyInput; }
export function DurationOfWarrantyPropertyStructuredData({ data }: DurationOfWarrantyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EarlyPrepaymentPenaltyPropertyStructuredDataProps { data: EarlyPrepaymentPenaltyPropertyInput; }
export function EarlyPrepaymentPenaltyPropertyStructuredData({ data }: EarlyPrepaymentPenaltyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EditEIDRPropertyStructuredDataProps { data: EditEIDRPropertyInput; }
export function EditEIDRPropertyStructuredData({ data }: EditEIDRPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EditorPropertyStructuredDataProps { data: EditorPropertyInput; }
export function EditorPropertyStructuredData({ data }: EditorPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EducationalAlignmentPropertyStructuredDataProps { data: EducationalAlignmentPropertyInput; }
export function EducationalAlignmentPropertyStructuredData({ data }: EducationalAlignmentPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EducationalFrameworkPropertyStructuredDataProps { data: EducationalFrameworkPropertyInput; }
export function EducationalFrameworkPropertyStructuredData({ data }: EducationalFrameworkPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EducationalLevelPropertyStructuredDataProps { data: EducationalLevelPropertyInput; }
export function EducationalLevelPropertyStructuredData({ data }: EducationalLevelPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EducationalUsePropertyStructuredDataProps { data: EducationalUsePropertyInput; }
export function EducationalUsePropertyStructuredData({ data }: EducationalUsePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EducationRequirementsPropertyStructuredDataProps { data: EducationRequirementsPropertyInput; }
export function EducationRequirementsPropertyStructuredData({ data }: EducationRequirementsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ElevationPropertyStructuredDataProps { data: ElevationPropertyInput; }
export function ElevationPropertyStructuredData({ data }: ElevationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EligibleCustomerTypePropertyStructuredDataProps { data: EligibleCustomerTypePropertyInput; }
export function EligibleCustomerTypePropertyStructuredData({ data }: EligibleCustomerTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EligibleDurationPropertyStructuredDataProps { data: EligibleDurationPropertyInput; }
export function EligibleDurationPropertyStructuredData({ data }: EligibleDurationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EligibleQuantityPropertyStructuredDataProps { data: EligibleQuantityPropertyInput; }
export function EligibleQuantityPropertyStructuredData({ data }: EligibleQuantityPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EligibleRegionPropertyStructuredDataProps { data: EligibleRegionPropertyInput; }
export function EligibleRegionPropertyStructuredData({ data }: EligibleRegionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EligibleTransactionVolumePropertyStructuredDataProps { data: EligibleTransactionVolumePropertyInput; }
export function EligibleTransactionVolumePropertyStructuredData({ data }: EligibleTransactionVolumePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EmailPropertyStructuredDataProps { data: EmailPropertyInput; }
export function EmailPropertyStructuredData({ data }: EmailPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EmbeddedTextCaptionPropertyStructuredDataProps { data: EmbeddedTextCaptionPropertyInput; }
export function EmbeddedTextCaptionPropertyStructuredData({ data }: EmbeddedTextCaptionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EmbedUrlPropertyStructuredDataProps { data: EmbedUrlPropertyInput; }
export function EmbedUrlPropertyStructuredData({ data }: EmbedUrlPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EmployeePropertyStructuredDataProps { data: EmployeePropertyInput; }
export function EmployeePropertyStructuredData({ data }: EmployeePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EmployeesPropertyStructuredDataProps { data: EmployeesPropertyInput; }
export function EmployeesPropertyStructuredData({ data }: EmployeesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EncodesBioChemEntityPropertyStructuredDataProps { data: EncodesBioChemEntityPropertyInput; }
export function EncodesBioChemEntityPropertyStructuredData({ data }: EncodesBioChemEntityPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EncodesCreativeWorkPropertyStructuredDataProps { data: EncodesCreativeWorkPropertyInput; }
export function EncodesCreativeWorkPropertyStructuredData({ data }: EncodesCreativeWorkPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EncodingPropertyStructuredDataProps { data: EncodingPropertyInput; }
export function EncodingPropertyStructuredData({ data }: EncodingPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EncodingFormatPropertyStructuredDataProps { data: EncodingFormatPropertyInput; }
export function EncodingFormatPropertyStructuredData({ data }: EncodingFormatPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EncodingsPropertyStructuredDataProps { data: EncodingsPropertyInput; }
export function EncodingsPropertyStructuredData({ data }: EncodingsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EncodingTypePropertyStructuredDataProps { data: EncodingTypePropertyInput; }
export function EncodingTypePropertyStructuredData({ data }: EncodingTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EndDatePropertyStructuredDataProps { data: EndDatePropertyInput; }
export function EndDatePropertyStructuredData({ data }: EndDatePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EndOffsetPropertyStructuredDataProps { data: EndOffsetPropertyInput; }
export function EndOffsetPropertyStructuredData({ data }: EndOffsetPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EndorsersPropertyStructuredDataProps { data: EndorsersPropertyInput; }
export function EndorsersPropertyStructuredData({ data }: EndorsersPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EndTimePropertyStructuredDataProps { data: EndTimePropertyInput; }
export function EndTimePropertyStructuredData({ data }: EndTimePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EnergyEfficiencyScaleMaxPropertyStructuredDataProps { data: EnergyEfficiencyScaleMaxPropertyInput; }
export function EnergyEfficiencyScaleMaxPropertyStructuredData({ data }: EnergyEfficiencyScaleMaxPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EnergyEfficiencyScaleMinPropertyStructuredDataProps { data: EnergyEfficiencyScaleMinPropertyInput; }
export function EnergyEfficiencyScaleMinPropertyStructuredData({ data }: EnergyEfficiencyScaleMinPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EpidemiologyPropertyStructuredDataProps { data: EpidemiologyPropertyInput; }
export function EpidemiologyPropertyStructuredData({ data }: EpidemiologyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EpisodePropertyStructuredDataProps { data: EpisodePropertyInput; }
export function EpisodePropertyStructuredData({ data }: EpisodePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EpisodeNumberPropertyStructuredDataProps { data: EpisodeNumberPropertyInput; }
export function EpisodeNumberPropertyStructuredData({ data }: EpisodeNumberPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EpisodesPropertyStructuredDataProps { data: EpisodesPropertyInput; }
export function EpisodesPropertyStructuredData({ data }: EpisodesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ErrorPropertyStructuredDataProps { data: ErrorPropertyInput; }
export function ErrorPropertyStructuredData({ data }: ErrorPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EstimatedCostPropertyStructuredDataProps { data: EstimatedCostPropertyInput; }
export function EstimatedCostPropertyStructuredData({ data }: EstimatedCostPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EstimatedSalaryPropertyStructuredDataProps { data: EstimatedSalaryPropertyInput; }
export function EstimatedSalaryPropertyStructuredData({ data }: EstimatedSalaryPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EthicsPolicyPropertyStructuredDataProps { data: EthicsPolicyPropertyInput; }
export function EthicsPolicyPropertyStructuredData({ data }: EthicsPolicyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EventPropertyStructuredDataProps { data: EventPropertyInput; }
export function EventPropertyStructuredData({ data }: EventPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EventAttendanceModePropertyStructuredDataProps { data: EventAttendanceModePropertyInput; }
export function EventAttendanceModePropertyStructuredData({ data }: EventAttendanceModePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EventsPropertyStructuredDataProps { data: EventsPropertyInput; }
export function EventsPropertyStructuredData({ data }: EventsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EventSchedulePropertyStructuredDataProps { data: EventSchedulePropertyInput; }
export function EventSchedulePropertyStructuredData({ data }: EventSchedulePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EventStatusPropertyStructuredDataProps { data: EventStatusPropertyInput; }
export function EventStatusPropertyStructuredData({ data }: EventStatusPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EvidenceLevelPropertyStructuredDataProps { data: EvidenceLevelPropertyInput; }
export function EvidenceLevelPropertyStructuredData({ data }: EvidenceLevelPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface EvidenceOriginPropertyStructuredDataProps { data: EvidenceOriginPropertyInput; }
export function EvidenceOriginPropertyStructuredData({ data }: EvidenceOriginPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ExampleOfWorkPropertyStructuredDataProps { data: ExampleOfWorkPropertyInput; }
export function ExampleOfWorkPropertyStructuredData({ data }: ExampleOfWorkPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ExceptDatePropertyStructuredDataProps { data: ExceptDatePropertyInput; }
export function ExceptDatePropertyStructuredData({ data }: ExceptDatePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ExifDataPropertyStructuredDataProps { data: ExifDataPropertyInput; }
export function ExifDataPropertyStructuredData({ data }: ExifDataPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ExpectedPrognosisPropertyStructuredDataProps { data: ExpectedPrognosisPropertyInput; }
export function ExpectedPrognosisPropertyStructuredData({ data }: ExpectedPrognosisPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ExpectsAcceptanceOfPropertyStructuredDataProps { data: ExpectsAcceptanceOfPropertyInput; }
export function ExpectsAcceptanceOfPropertyStructuredData({ data }: ExpectsAcceptanceOfPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ExperienceRequirementsPropertyStructuredDataProps { data: ExperienceRequirementsPropertyInput; }
export function ExperienceRequirementsPropertyStructuredData({ data }: ExperienceRequirementsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ExpertConsiderationsPropertyStructuredDataProps { data: ExpertConsiderationsPropertyInput; }
export function ExpertConsiderationsPropertyStructuredData({ data }: ExpertConsiderationsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ExpiresPropertyStructuredDataProps { data: ExpiresPropertyInput; }
export function ExpiresPropertyStructuredData({ data }: ExpiresPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ExpressedInPropertyStructuredDataProps { data: ExpressedInPropertyInput; }
export function ExpressedInPropertyStructuredData({ data }: ExpressedInPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ExtendedAddressPropertyStructuredDataProps { data: ExtendedAddressPropertyInput; }
export function ExtendedAddressPropertyStructuredData({ data }: ExtendedAddressPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FamilyNamePropertyStructuredDataProps { data: FamilyNamePropertyInput; }
export function FamilyNamePropertyStructuredData({ data }: FamilyNamePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FatContentPropertyStructuredDataProps { data: FatContentPropertyInput; }
export function FatContentPropertyStructuredData({ data }: FatContentPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FaxNumberPropertyStructuredDataProps { data: FaxNumberPropertyInput; }
export function FaxNumberPropertyStructuredData({ data }: FaxNumberPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FeatureListPropertyStructuredDataProps { data: FeatureListPropertyInput; }
export function FeatureListPropertyStructuredData({ data }: FeatureListPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FeesAndCommissionsSpecificationPropertyStructuredDataProps { data: FeesAndCommissionsSpecificationPropertyInput; }
export function FeesAndCommissionsSpecificationPropertyStructuredData({ data }: FeesAndCommissionsSpecificationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FiberContentPropertyStructuredDataProps { data: FiberContentPropertyInput; }
export function FiberContentPropertyStructuredData({ data }: FiberContentPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FileFormatPropertyStructuredDataProps { data: FileFormatPropertyInput; }
export function FileFormatPropertyStructuredData({ data }: FileFormatPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FileSizePropertyStructuredDataProps { data: FileSizePropertyInput; }
export function FileSizePropertyStructuredData({ data }: FileSizePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FirstAppearancePropertyStructuredDataProps { data: FirstAppearancePropertyInput; }
export function FirstAppearancePropertyStructuredData({ data }: FirstAppearancePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FirstPerformancePropertyStructuredDataProps { data: FirstPerformancePropertyInput; }
export function FirstPerformancePropertyStructuredData({ data }: FirstPerformancePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FloorLimitPropertyStructuredDataProps { data: FloorLimitPropertyInput; }
export function FloorLimitPropertyStructuredData({ data }: FloorLimitPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FollowsPropertyStructuredDataProps { data: FollowsPropertyInput; }
export function FollowsPropertyStructuredData({ data }: FollowsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FollowupPropertyStructuredDataProps { data: FollowupPropertyInput; }
export function FollowupPropertyStructuredData({ data }: FollowupPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FoodWarningPropertyStructuredDataProps { data: FoodWarningPropertyInput; }
export function FoodWarningPropertyStructuredData({ data }: FoodWarningPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FounderPropertyStructuredDataProps { data: FounderPropertyInput; }
export function FounderPropertyStructuredData({ data }: FounderPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FoundersPropertyStructuredDataProps { data: FoundersPropertyInput; }
export function FoundersPropertyStructuredData({ data }: FoundersPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FoundingDatePropertyStructuredDataProps { data: FoundingDatePropertyInput; }
export function FoundingDatePropertyStructuredData({ data }: FoundingDatePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FoundingLocationPropertyStructuredDataProps { data: FoundingLocationPropertyInput; }
export function FoundingLocationPropertyStructuredData({ data }: FoundingLocationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FreePropertyStructuredDataProps { data: FreePropertyInput; }
export function FreePropertyStructuredData({ data }: FreePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FreeShippingThresholdPropertyStructuredDataProps { data: FreeShippingThresholdPropertyInput; }
export function FreeShippingThresholdPropertyStructuredData({ data }: FreeShippingThresholdPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FrequencyPropertyStructuredDataProps { data: FrequencyPropertyInput; }
export function FrequencyPropertyStructuredData({ data }: FrequencyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FulfillmentTypePropertyStructuredDataProps { data: FulfillmentTypePropertyInput; }
export function FulfillmentTypePropertyStructuredData({ data }: FulfillmentTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FundedItemPropertyStructuredDataProps { data: FundedItemPropertyInput; }
export function FundedItemPropertyStructuredData({ data }: FundedItemPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FunderPropertyStructuredDataProps { data: FunderPropertyInput; }
export function FunderPropertyStructuredData({ data }: FunderPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface FundingPropertyStructuredDataProps { data: FundingPropertyInput; }
export function FundingPropertyStructuredData({ data }: FundingPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface GenderPropertyStructuredDataProps { data: GenderPropertyInput; }
export function GenderPropertyStructuredData({ data }: GenderPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface GenrePropertyStructuredDataProps { data: GenrePropertyInput; }
export function GenrePropertyStructuredData({ data }: GenrePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface GeoPropertyStructuredDataProps { data: GeoPropertyInput; }
export function GeoPropertyStructuredData({ data }: GeoPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface GeoContainsPropertyStructuredDataProps { data: GeoContainsPropertyInput; }
export function GeoContainsPropertyStructuredData({ data }: GeoContainsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface GeoCoveredByPropertyStructuredDataProps { data: GeoCoveredByPropertyInput; }
export function GeoCoveredByPropertyStructuredData({ data }: GeoCoveredByPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface GeoCoversPropertyStructuredDataProps { data: GeoCoversPropertyInput; }
export function GeoCoversPropertyStructuredData({ data }: GeoCoversPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface GeoCrossesPropertyStructuredDataProps { data: GeoCrossesPropertyInput; }
export function GeoCrossesPropertyStructuredData({ data }: GeoCrossesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface GeoDisjointPropertyStructuredDataProps { data: GeoDisjointPropertyInput; }
export function GeoDisjointPropertyStructuredData({ data }: GeoDisjointPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface GeoEqualsPropertyStructuredDataProps { data: GeoEqualsPropertyInput; }
export function GeoEqualsPropertyStructuredData({ data }: GeoEqualsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface GeographicAreaPropertyStructuredDataProps { data: GeographicAreaPropertyInput; }
export function GeographicAreaPropertyStructuredData({ data }: GeographicAreaPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface GeoIntersectsPropertyStructuredDataProps { data: GeoIntersectsPropertyInput; }
export function GeoIntersectsPropertyStructuredData({ data }: GeoIntersectsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface GeoOverlapsPropertyStructuredDataProps { data: GeoOverlapsPropertyInput; }
export function GeoOverlapsPropertyStructuredData({ data }: GeoOverlapsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface GeoTouchesPropertyStructuredDataProps { data: GeoTouchesPropertyInput; }
export function GeoTouchesPropertyStructuredData({ data }: GeoTouchesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface GeoWithinPropertyStructuredDataProps { data: GeoWithinPropertyInput; }
export function GeoWithinPropertyStructuredData({ data }: GeoWithinPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface GivenNamePropertyStructuredDataProps { data: GivenNamePropertyInput; }
export function GivenNamePropertyStructuredData({ data }: GivenNamePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface GlobalLocationNumberPropertyStructuredDataProps { data: GlobalLocationNumberPropertyInput; }
export function GlobalLocationNumberPropertyStructuredData({ data }: GlobalLocationNumberPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface GracePeriodPropertyStructuredDataProps { data: GracePeriodPropertyInput; }
export function GracePeriodPropertyStructuredData({ data }: GracePeriodPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface GtinPropertyStructuredDataProps { data: GtinPropertyInput; }
export function GtinPropertyStructuredData({ data }: GtinPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface Gtin12PropertyStructuredDataProps { data: Gtin12PropertyInput; }
export function Gtin12PropertyStructuredData({ data }: Gtin12PropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface Gtin13PropertyStructuredDataProps { data: Gtin13PropertyInput; }
export function Gtin13PropertyStructuredData({ data }: Gtin13PropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface Gtin14PropertyStructuredDataProps { data: Gtin14PropertyInput; }
export function Gtin14PropertyStructuredData({ data }: Gtin14PropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface Gtin8PropertyStructuredDataProps { data: Gtin8PropertyInput; }
export function Gtin8PropertyStructuredData({ data }: Gtin8PropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface GuidelinePropertyStructuredDataProps { data: GuidelinePropertyInput; }
export function GuidelinePropertyStructuredData({ data }: GuidelinePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface GuidelineDatePropertyStructuredDataProps { data: GuidelineDatePropertyInput; }
export function GuidelineDatePropertyStructuredData({ data }: GuidelineDatePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface GuidelineSubjectPropertyStructuredDataProps { data: GuidelineSubjectPropertyInput; }
export function GuidelineSubjectPropertyStructuredData({ data }: GuidelineSubjectPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HandlingTimePropertyStructuredDataProps { data: HandlingTimePropertyInput; }
export function HandlingTimePropertyStructuredData({ data }: HandlingTimePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasAdultConsiderationPropertyStructuredDataProps { data: HasAdultConsiderationPropertyInput; }
export function HasAdultConsiderationPropertyStructuredData({ data }: HasAdultConsiderationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasBioChemEntityPartPropertyStructuredDataProps { data: HasBioChemEntityPartPropertyInput; }
export function HasBioChemEntityPartPropertyStructuredData({ data }: HasBioChemEntityPartPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasBioPolymerSequencePropertyStructuredDataProps { data: HasBioPolymerSequencePropertyInput; }
export function HasBioPolymerSequencePropertyStructuredData({ data }: HasBioPolymerSequencePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasBroadcastChannelPropertyStructuredDataProps { data: HasBroadcastChannelPropertyInput; }
export function HasBroadcastChannelPropertyStructuredData({ data }: HasBroadcastChannelPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasCategoryCodePropertyStructuredDataProps { data: HasCategoryCodePropertyInput; }
export function HasCategoryCodePropertyStructuredData({ data }: HasCategoryCodePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasCertificationPropertyStructuredDataProps { data: HasCertificationPropertyInput; }
export function HasCertificationPropertyStructuredData({ data }: HasCertificationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasCredentialPropertyStructuredDataProps { data: HasCredentialPropertyInput; }
export function HasCredentialPropertyStructuredData({ data }: HasCredentialPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasDefinedTermPropertyStructuredDataProps { data: HasDefinedTermPropertyInput; }
export function HasDefinedTermPropertyStructuredData({ data }: HasDefinedTermPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasDriveThroughServicePropertyStructuredDataProps { data: HasDriveThroughServicePropertyInput; }
export function HasDriveThroughServicePropertyStructuredData({ data }: HasDriveThroughServicePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasEnergyConsumptionDetailsPropertyStructuredDataProps { data: HasEnergyConsumptionDetailsPropertyInput; }
export function HasEnergyConsumptionDetailsPropertyStructuredData({ data }: HasEnergyConsumptionDetailsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasEnergyEfficiencyCategoryPropertyStructuredDataProps { data: HasEnergyEfficiencyCategoryPropertyInput; }
export function HasEnergyEfficiencyCategoryPropertyStructuredData({ data }: HasEnergyEfficiencyCategoryPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasGS1DigitalLinkPropertyStructuredDataProps { data: HasGS1DigitalLinkPropertyInput; }
export function HasGS1DigitalLinkPropertyStructuredData({ data }: HasGS1DigitalLinkPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasMapPropertyStructuredDataProps { data: HasMapPropertyInput; }
export function HasMapPropertyStructuredData({ data }: HasMapPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasMeasurementPropertyStructuredDataProps { data: HasMeasurementPropertyInput; }
export function HasMeasurementPropertyStructuredData({ data }: HasMeasurementPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasMemberProgramPropertyStructuredDataProps { data: HasMemberProgramPropertyInput; }
export function HasMemberProgramPropertyStructuredData({ data }: HasMemberProgramPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasMenuItemPropertyStructuredDataProps { data: HasMenuItemPropertyInput; }
export function HasMenuItemPropertyStructuredData({ data }: HasMenuItemPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasMenuSectionPropertyStructuredDataProps { data: HasMenuSectionPropertyInput; }
export function HasMenuSectionPropertyStructuredData({ data }: HasMenuSectionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasMerchantReturnPolicyPropertyStructuredDataProps { data: HasMerchantReturnPolicyPropertyInput; }
export function HasMerchantReturnPolicyPropertyStructuredData({ data }: HasMerchantReturnPolicyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasMolecularFunctionPropertyStructuredDataProps { data: HasMolecularFunctionPropertyInput; }
export function HasMolecularFunctionPropertyStructuredData({ data }: HasMolecularFunctionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasOccupationPropertyStructuredDataProps { data: HasOccupationPropertyInput; }
export function HasOccupationPropertyStructuredData({ data }: HasOccupationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasOfferCatalogPropertyStructuredDataProps { data: HasOfferCatalogPropertyInput; }
export function HasOfferCatalogPropertyStructuredData({ data }: HasOfferCatalogPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasPartPropertyStructuredDataProps { data: HasPartPropertyInput; }
export function HasPartPropertyStructuredData({ data }: HasPartPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasParticipationOfferPropertyStructuredDataProps { data: HasParticipationOfferPropertyInput; }
export function HasParticipationOfferPropertyStructuredData({ data }: HasParticipationOfferPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasPOSPropertyStructuredDataProps { data: HasPOSPropertyInput; }
export function HasPOSPropertyStructuredData({ data }: HasPOSPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasRepresentationPropertyStructuredDataProps { data: HasRepresentationPropertyInput; }
export function HasRepresentationPropertyStructuredData({ data }: HasRepresentationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasShippingServicePropertyStructuredDataProps { data: HasShippingServicePropertyInput; }
export function HasShippingServicePropertyStructuredData({ data }: HasShippingServicePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasSponsorshipOfferPropertyStructuredDataProps { data: HasSponsorshipOfferPropertyInput; }
export function HasSponsorshipOfferPropertyStructuredData({ data }: HasSponsorshipOfferPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasTierBenefitPropertyStructuredDataProps { data: HasTierBenefitPropertyInput; }
export function HasTierBenefitPropertyStructuredData({ data }: HasTierBenefitPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasTierRequirementPropertyStructuredDataProps { data: HasTierRequirementPropertyInput; }
export function HasTierRequirementPropertyStructuredData({ data }: HasTierRequirementPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasTiersPropertyStructuredDataProps { data: HasTiersPropertyInput; }
export function HasTiersPropertyStructuredData({ data }: HasTiersPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HasVariantPropertyStructuredDataProps { data: HasVariantPropertyInput; }
export function HasVariantPropertyStructuredData({ data }: HasVariantPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HeadlinePropertyStructuredDataProps { data: HeadlinePropertyInput; }
export function HeadlinePropertyStructuredData({ data }: HeadlinePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HealthConditionPropertyStructuredDataProps { data: HealthConditionPropertyInput; }
export function HealthConditionPropertyStructuredData({ data }: HealthConditionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HealthPlanCoinsuranceOptionPropertyStructuredDataProps { data: HealthPlanCoinsuranceOptionPropertyInput; }
export function HealthPlanCoinsuranceOptionPropertyStructuredData({ data }: HealthPlanCoinsuranceOptionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HealthPlanCoinsuranceRatePropertyStructuredDataProps { data: HealthPlanCoinsuranceRatePropertyInput; }
export function HealthPlanCoinsuranceRatePropertyStructuredData({ data }: HealthPlanCoinsuranceRatePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HealthPlanCopayPropertyStructuredDataProps { data: HealthPlanCopayPropertyInput; }
export function HealthPlanCopayPropertyStructuredData({ data }: HealthPlanCopayPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HealthPlanCopayOptionPropertyStructuredDataProps { data: HealthPlanCopayOptionPropertyInput; }
export function HealthPlanCopayOptionPropertyStructuredData({ data }: HealthPlanCopayOptionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HealthPlanCostSharingPropertyStructuredDataProps { data: HealthPlanCostSharingPropertyInput; }
export function HealthPlanCostSharingPropertyStructuredData({ data }: HealthPlanCostSharingPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HealthPlanDrugOptionPropertyStructuredDataProps { data: HealthPlanDrugOptionPropertyInput; }
export function HealthPlanDrugOptionPropertyStructuredData({ data }: HealthPlanDrugOptionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HealthPlanDrugTierPropertyStructuredDataProps { data: HealthPlanDrugTierPropertyInput; }
export function HealthPlanDrugTierPropertyStructuredData({ data }: HealthPlanDrugTierPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HealthPlanIdPropertyStructuredDataProps { data: HealthPlanIdPropertyInput; }
export function HealthPlanIdPropertyStructuredData({ data }: HealthPlanIdPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HealthPlanMarketingUrlPropertyStructuredDataProps { data: HealthPlanMarketingUrlPropertyInput; }
export function HealthPlanMarketingUrlPropertyStructuredData({ data }: HealthPlanMarketingUrlPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HealthPlanNetworkIdPropertyStructuredDataProps { data: HealthPlanNetworkIdPropertyInput; }
export function HealthPlanNetworkIdPropertyStructuredData({ data }: HealthPlanNetworkIdPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HealthPlanNetworkTierPropertyStructuredDataProps { data: HealthPlanNetworkTierPropertyInput; }
export function HealthPlanNetworkTierPropertyStructuredData({ data }: HealthPlanNetworkTierPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HealthPlanPharmacyCategoryPropertyStructuredDataProps { data: HealthPlanPharmacyCategoryPropertyInput; }
export function HealthPlanPharmacyCategoryPropertyStructuredData({ data }: HealthPlanPharmacyCategoryPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HeightPropertyStructuredDataProps { data: HeightPropertyInput; }
export function HeightPropertyStructuredData({ data }: HeightPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HighPricePropertyStructuredDataProps { data: HighPricePropertyInput; }
export function HighPricePropertyStructuredData({ data }: HighPricePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HomeLocationPropertyStructuredDataProps { data: HomeLocationPropertyInput; }
export function HomeLocationPropertyStructuredData({ data }: HomeLocationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HonorificPrefixPropertyStructuredDataProps { data: HonorificPrefixPropertyInput; }
export function HonorificPrefixPropertyStructuredData({ data }: HonorificPrefixPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HonorificSuffixPropertyStructuredDataProps { data: HonorificSuffixPropertyInput; }
export function HonorificSuffixPropertyStructuredData({ data }: HonorificSuffixPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HostingOrganizationPropertyStructuredDataProps { data: HostingOrganizationPropertyInput; }
export function HostingOrganizationPropertyStructuredData({ data }: HostingOrganizationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HoursAvailablePropertyStructuredDataProps { data: HoursAvailablePropertyInput; }
export function HoursAvailablePropertyStructuredData({ data }: HoursAvailablePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HowPerformedPropertyStructuredDataProps { data: HowPerformedPropertyInput; }
export function HowPerformedPropertyStructuredData({ data }: HowPerformedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface HttpMethodPropertyStructuredDataProps { data: HttpMethodPropertyInput; }
export function HttpMethodPropertyStructuredData({ data }: HttpMethodPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IdentifierPropertyStructuredDataProps { data: IdentifierPropertyInput; }
export function IdentifierPropertyStructuredData({ data }: IdentifierPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IdentifyingExamPropertyStructuredDataProps { data: IdentifyingExamPropertyInput; }
export function IdentifyingExamPropertyStructuredData({ data }: IdentifyingExamPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IdentifyingTestPropertyStructuredDataProps { data: IdentifyingTestPropertyInput; }
export function IdentifyingTestPropertyStructuredData({ data }: IdentifyingTestPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ImagePropertyStructuredDataProps { data: ImagePropertyInput; }
export function ImagePropertyStructuredData({ data }: ImagePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface InAlbumPropertyStructuredDataProps { data: InAlbumPropertyInput; }
export function InAlbumPropertyStructuredData({ data }: InAlbumPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface InBroadcastLineupPropertyStructuredDataProps { data: InBroadcastLineupPropertyInput; }
export function InBroadcastLineupPropertyStructuredData({ data }: InBroadcastLineupPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IncludedCompositionPropertyStructuredDataProps { data: IncludedCompositionPropertyInput; }
export function IncludedCompositionPropertyStructuredData({ data }: IncludedCompositionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IncludedDataCatalogPropertyStructuredDataProps { data: IncludedDataCatalogPropertyInput; }
export function IncludedDataCatalogPropertyStructuredData({ data }: IncludedDataCatalogPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IncludedInDataCatalogPropertyStructuredDataProps { data: IncludedInDataCatalogPropertyInput; }
export function IncludedInDataCatalogPropertyStructuredData({ data }: IncludedInDataCatalogPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IncludedInHealthInsurancePlanPropertyStructuredDataProps { data: IncludedInHealthInsurancePlanPropertyInput; }
export function IncludedInHealthInsurancePlanPropertyStructuredData({ data }: IncludedInHealthInsurancePlanPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IncludesHealthPlanFormularyPropertyStructuredDataProps { data: IncludesHealthPlanFormularyPropertyInput; }
export function IncludesHealthPlanFormularyPropertyStructuredData({ data }: IncludesHealthPlanFormularyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IncludesHealthPlanNetworkPropertyStructuredDataProps { data: IncludesHealthPlanNetworkPropertyInput; }
export function IncludesHealthPlanNetworkPropertyStructuredData({ data }: IncludesHealthPlanNetworkPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IncludesObjectPropertyStructuredDataProps { data: IncludesObjectPropertyInput; }
export function IncludesObjectPropertyStructuredData({ data }: IncludesObjectPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface InCodeSetPropertyStructuredDataProps { data: InCodeSetPropertyInput; }
export function InCodeSetPropertyStructuredData({ data }: InCodeSetPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IncreasesRiskOfPropertyStructuredDataProps { data: IncreasesRiskOfPropertyInput; }
export function IncreasesRiskOfPropertyStructuredData({ data }: IncreasesRiskOfPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface InDefinedTermSetPropertyStructuredDataProps { data: InDefinedTermSetPropertyInput; }
export function InDefinedTermSetPropertyStructuredData({ data }: InDefinedTermSetPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IneligibleRegionPropertyStructuredDataProps { data: IneligibleRegionPropertyInput; }
export function IneligibleRegionPropertyStructuredData({ data }: IneligibleRegionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface InLanguagePropertyStructuredDataProps { data: InLanguagePropertyInput; }
export function InLanguagePropertyStructuredData({ data }: InLanguagePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface InPlaylistPropertyStructuredDataProps { data: InPlaylistPropertyInput; }
export function InPlaylistPropertyStructuredData({ data }: InPlaylistPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface InProductGroupWithIDPropertyStructuredDataProps { data: InProductGroupWithIDPropertyInput; }
export function InProductGroupWithIDPropertyStructuredData({ data }: InProductGroupWithIDPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface InstallUrlPropertyStructuredDataProps { data: InstallUrlPropertyInput; }
export function InstallUrlPropertyStructuredData({ data }: InstallUrlPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface InStoreReturnsOfferedPropertyStructuredDataProps { data: InStoreReturnsOfferedPropertyInput; }
export function InStoreReturnsOfferedPropertyStructuredData({ data }: InStoreReturnsOfferedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface InstrumentPropertyStructuredDataProps { data: InstrumentPropertyInput; }
export function InstrumentPropertyStructuredData({ data }: InstrumentPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface InteractingDrugPropertyStructuredDataProps { data: InteractingDrugPropertyInput; }
export function InteractingDrugPropertyStructuredData({ data }: InteractingDrugPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface InteractionServicePropertyStructuredDataProps { data: InteractionServicePropertyInput; }
export function InteractionServicePropertyStructuredData({ data }: InteractionServicePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface InteractionStatisticPropertyStructuredDataProps { data: InteractionStatisticPropertyInput; }
export function InteractionStatisticPropertyStructuredData({ data }: InteractionStatisticPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface InteractionTypePropertyStructuredDataProps { data: InteractionTypePropertyInput; }
export function InteractionTypePropertyStructuredData({ data }: InteractionTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface InteractivityTypePropertyStructuredDataProps { data: InteractivityTypePropertyInput; }
export function InteractivityTypePropertyStructuredData({ data }: InteractivityTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface InterestRatePropertyStructuredDataProps { data: InterestRatePropertyInput; }
export function InterestRatePropertyStructuredData({ data }: InterestRatePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface InterpretedAsClaimPropertyStructuredDataProps { data: InterpretedAsClaimPropertyInput; }
export function InterpretedAsClaimPropertyStructuredData({ data }: InterpretedAsClaimPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface InventoryLevelPropertyStructuredDataProps { data: InventoryLevelPropertyInput; }
export function InventoryLevelPropertyStructuredData({ data }: InventoryLevelPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface InverseOfPropertyStructuredDataProps { data: InverseOfPropertyInput; }
export function InverseOfPropertyStructuredData({ data }: InverseOfPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IsAccessibleForFreePropertyStructuredDataProps { data: IsAccessibleForFreePropertyInput; }
export function IsAccessibleForFreePropertyStructuredData({ data }: IsAccessibleForFreePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IsAccessoryOrSparePartForPropertyStructuredDataProps { data: IsAccessoryOrSparePartForPropertyInput; }
export function IsAccessoryOrSparePartForPropertyStructuredData({ data }: IsAccessoryOrSparePartForPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IsAvailableGenericallyPropertyStructuredDataProps { data: IsAvailableGenericallyPropertyInput; }
export function IsAvailableGenericallyPropertyStructuredData({ data }: IsAvailableGenericallyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IsBasedOnPropertyStructuredDataProps { data: IsBasedOnPropertyInput; }
export function IsBasedOnPropertyStructuredData({ data }: IsBasedOnPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IsBasedOnUrlPropertyStructuredDataProps { data: IsBasedOnUrlPropertyInput; }
export function IsBasedOnUrlPropertyStructuredData({ data }: IsBasedOnUrlPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IsConsumableForPropertyStructuredDataProps { data: IsConsumableForPropertyInput; }
export function IsConsumableForPropertyStructuredData({ data }: IsConsumableForPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IsEncodedByBioChemEntityPropertyStructuredDataProps { data: IsEncodedByBioChemEntityPropertyInput; }
export function IsEncodedByBioChemEntityPropertyStructuredData({ data }: IsEncodedByBioChemEntityPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IsFamilyFriendlyPropertyStructuredDataProps { data: IsFamilyFriendlyPropertyInput; }
export function IsFamilyFriendlyPropertyStructuredData({ data }: IsFamilyFriendlyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IsicV4PropertyStructuredDataProps { data: IsicV4PropertyInput; }
export function IsicV4PropertyStructuredData({ data }: IsicV4PropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IsInvolvedInBiologicalProcessPropertyStructuredDataProps { data: IsInvolvedInBiologicalProcessPropertyInput; }
export function IsInvolvedInBiologicalProcessPropertyStructuredData({ data }: IsInvolvedInBiologicalProcessPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IsLocatedInSubcellularLocationPropertyStructuredDataProps { data: IsLocatedInSubcellularLocationPropertyInput; }
export function IsLocatedInSubcellularLocationPropertyStructuredData({ data }: IsLocatedInSubcellularLocationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface Iso6523CodePropertyStructuredDataProps { data: Iso6523CodePropertyInput; }
export function Iso6523CodePropertyStructuredData({ data }: Iso6523CodePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IsPartOfPropertyStructuredDataProps { data: IsPartOfPropertyInput; }
export function IsPartOfPropertyStructuredData({ data }: IsPartOfPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IsPartOfBioChemEntityPropertyStructuredDataProps { data: IsPartOfBioChemEntityPropertyInput; }
export function IsPartOfBioChemEntityPropertyStructuredData({ data }: IsPartOfBioChemEntityPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IsProprietaryPropertyStructuredDataProps { data: IsProprietaryPropertyInput; }
export function IsProprietaryPropertyStructuredData({ data }: IsProprietaryPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IsrcCodePropertyStructuredDataProps { data: IsrcCodePropertyInput; }
export function IsrcCodePropertyStructuredData({ data }: IsrcCodePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IsRelatedToPropertyStructuredDataProps { data: IsRelatedToPropertyInput; }
export function IsRelatedToPropertyStructuredData({ data }: IsRelatedToPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IsSimilarToPropertyStructuredDataProps { data: IsSimilarToPropertyInput; }
export function IsSimilarToPropertyStructuredData({ data }: IsSimilarToPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IssnPropertyStructuredDataProps { data: IssnPropertyInput; }
export function IssnPropertyStructuredData({ data }: IssnPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IssuedByPropertyStructuredDataProps { data: IssuedByPropertyInput; }
export function IssuedByPropertyStructuredData({ data }: IssuedByPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IsTierOfPropertyStructuredDataProps { data: IsTierOfPropertyInput; }
export function IsTierOfPropertyStructuredData({ data }: IsTierOfPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IsUnlabelledFallbackPropertyStructuredDataProps { data: IsUnlabelledFallbackPropertyInput; }
export function IsUnlabelledFallbackPropertyStructuredData({ data }: IsUnlabelledFallbackPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IsVariantOfPropertyStructuredDataProps { data: IsVariantOfPropertyInput; }
export function IsVariantOfPropertyStructuredData({ data }: IsVariantOfPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface IswcCodePropertyStructuredDataProps { data: IswcCodePropertyInput; }
export function IswcCodePropertyStructuredData({ data }: IswcCodePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ItemPropertyStructuredDataProps { data: ItemPropertyInput; }
export function ItemPropertyStructuredData({ data }: ItemPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ItemConditionPropertyStructuredDataProps { data: ItemConditionPropertyInput; }
export function ItemConditionPropertyStructuredData({ data }: ItemConditionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ItemDefectReturnFeesPropertyStructuredDataProps { data: ItemDefectReturnFeesPropertyInput; }
export function ItemDefectReturnFeesPropertyStructuredData({ data }: ItemDefectReturnFeesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ItemDefectReturnLabelSourcePropertyStructuredDataProps { data: ItemDefectReturnLabelSourcePropertyInput; }
export function ItemDefectReturnLabelSourcePropertyStructuredData({ data }: ItemDefectReturnLabelSourcePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ItemDefectReturnShippingFeesAmountPropertyStructuredDataProps { data: ItemDefectReturnShippingFeesAmountPropertyInput; }
export function ItemDefectReturnShippingFeesAmountPropertyStructuredData({ data }: ItemDefectReturnShippingFeesAmountPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ItemListElementPropertyStructuredDataProps { data: ItemListElementPropertyInput; }
export function ItemListElementPropertyStructuredData({ data }: ItemListElementPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ItemListOrderPropertyStructuredDataProps { data: ItemListOrderPropertyInput; }
export function ItemListOrderPropertyStructuredData({ data }: ItemListOrderPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ItemOfferedPropertyStructuredDataProps { data: ItemOfferedPropertyInput; }
export function ItemOfferedPropertyStructuredData({ data }: ItemOfferedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ItemReviewedPropertyStructuredDataProps { data: ItemReviewedPropertyInput; }
export function ItemReviewedPropertyStructuredData({ data }: ItemReviewedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ItineraryPropertyStructuredDataProps { data: ItineraryPropertyInput; }
export function ItineraryPropertyStructuredData({ data }: ItineraryPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface JobTitlePropertyStructuredDataProps { data: JobTitlePropertyInput; }
export function JobTitlePropertyStructuredData({ data }: JobTitlePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface KeywordsPropertyStructuredDataProps { data: KeywordsPropertyInput; }
export function KeywordsPropertyStructuredData({ data }: KeywordsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface KnowsPropertyStructuredDataProps { data: KnowsPropertyInput; }
export function KnowsPropertyStructuredData({ data }: KnowsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface KnowsAboutPropertyStructuredDataProps { data: KnowsAboutPropertyInput; }
export function KnowsAboutPropertyStructuredData({ data }: KnowsAboutPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface KnowsLanguagePropertyStructuredDataProps { data: KnowsLanguagePropertyInput; }
export function KnowsLanguagePropertyStructuredData({ data }: KnowsLanguagePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LabelDetailsPropertyStructuredDataProps { data: LabelDetailsPropertyInput; }
export function LabelDetailsPropertyStructuredData({ data }: LabelDetailsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LastReviewedPropertyStructuredDataProps { data: LastReviewedPropertyInput; }
export function LastReviewedPropertyStructuredData({ data }: LastReviewedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LatitudePropertyStructuredDataProps { data: LatitudePropertyInput; }
export function LatitudePropertyStructuredData({ data }: LatitudePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LearningResourceTypePropertyStructuredDataProps { data: LearningResourceTypePropertyInput; }
export function LearningResourceTypePropertyStructuredData({ data }: LearningResourceTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LeaseLengthPropertyStructuredDataProps { data: LeaseLengthPropertyInput; }
export function LeaseLengthPropertyStructuredData({ data }: LeaseLengthPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LegalAddressPropertyStructuredDataProps { data: LegalAddressPropertyInput; }
export function LegalAddressPropertyStructuredData({ data }: LegalAddressPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LegalNamePropertyStructuredDataProps { data: LegalNamePropertyInput; }
export function LegalNamePropertyStructuredData({ data }: LegalNamePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LegalRepresentativePropertyStructuredDataProps { data: LegalRepresentativePropertyInput; }
export function LegalRepresentativePropertyStructuredData({ data }: LegalRepresentativePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LegalStatusPropertyStructuredDataProps { data: LegalStatusPropertyInput; }
export function LegalStatusPropertyStructuredData({ data }: LegalStatusPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LeiCodePropertyStructuredDataProps { data: LeiCodePropertyInput; }
export function LeiCodePropertyStructuredData({ data }: LeiCodePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LicensePropertyStructuredDataProps { data: LicensePropertyInput; }
export function LicensePropertyStructuredData({ data }: LicensePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LifeEventPropertyStructuredDataProps { data: LifeEventPropertyInput; }
export function LifeEventPropertyStructuredData({ data }: LifeEventPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LinePropertyStructuredDataProps { data: LinePropertyInput; }
export function LinePropertyStructuredData({ data }: LinePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LoanPaymentAmountPropertyStructuredDataProps { data: LoanPaymentAmountPropertyInput; }
export function LoanPaymentAmountPropertyStructuredData({ data }: LoanPaymentAmountPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LoanPaymentFrequencyPropertyStructuredDataProps { data: LoanPaymentFrequencyPropertyInput; }
export function LoanPaymentFrequencyPropertyStructuredData({ data }: LoanPaymentFrequencyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LoanRepaymentFormPropertyStructuredDataProps { data: LoanRepaymentFormPropertyInput; }
export function LoanRepaymentFormPropertyStructuredData({ data }: LoanRepaymentFormPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LoanTermPropertyStructuredDataProps { data: LoanTermPropertyInput; }
export function LoanTermPropertyStructuredData({ data }: LoanTermPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LoanTypePropertyStructuredDataProps { data: LoanTypePropertyInput; }
export function LoanTypePropertyStructuredData({ data }: LoanTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LocationPropertyStructuredDataProps { data: LocationPropertyInput; }
export function LocationPropertyStructuredData({ data }: LocationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LocationCreatedPropertyStructuredDataProps { data: LocationCreatedPropertyInput; }
export function LocationCreatedPropertyStructuredData({ data }: LocationCreatedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LogoPropertyStructuredDataProps { data: LogoPropertyInput; }
export function LogoPropertyStructuredData({ data }: LogoPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LongitudePropertyStructuredDataProps { data: LongitudePropertyInput; }
export function LongitudePropertyStructuredData({ data }: LongitudePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LowPricePropertyStructuredDataProps { data: LowPricePropertyInput; }
export function LowPricePropertyStructuredData({ data }: LowPricePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LyricistPropertyStructuredDataProps { data: LyricistPropertyInput; }
export function LyricistPropertyStructuredData({ data }: LyricistPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface LyricsPropertyStructuredDataProps { data: LyricsPropertyInput; }
export function LyricsPropertyStructuredData({ data }: LyricsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MainContentOfPagePropertyStructuredDataProps { data: MainContentOfPagePropertyInput; }
export function MainContentOfPagePropertyStructuredData({ data }: MainContentOfPagePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MainEntityPropertyStructuredDataProps { data: MainEntityPropertyInput; }
export function MainEntityPropertyStructuredData({ data }: MainEntityPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MainEntityOfPagePropertyStructuredDataProps { data: MainEntityOfPagePropertyInput; }
export function MainEntityOfPagePropertyStructuredData({ data }: MainEntityOfPagePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MaintainerPropertyStructuredDataProps { data: MaintainerPropertyInput; }
export function MaintainerPropertyStructuredData({ data }: MaintainerPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MakesOfferPropertyStructuredDataProps { data: MakesOfferPropertyInput; }
export function MakesOfferPropertyStructuredData({ data }: MakesOfferPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ManufacturerPropertyStructuredDataProps { data: ManufacturerPropertyInput; }
export function ManufacturerPropertyStructuredData({ data }: ManufacturerPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MapPropertyStructuredDataProps { data: MapPropertyInput; }
export function MapPropertyStructuredData({ data }: MapPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MapsPropertyStructuredDataProps { data: MapsPropertyInput; }
export function MapsPropertyStructuredData({ data }: MapsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MapTypePropertyStructuredDataProps { data: MapTypePropertyInput; }
export function MapTypePropertyStructuredData({ data }: MapTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MaterialPropertyStructuredDataProps { data: MaterialPropertyInput; }
export function MaterialPropertyStructuredData({ data }: MaterialPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MaterialExtentPropertyStructuredDataProps { data: MaterialExtentPropertyInput; }
export function MaterialExtentPropertyStructuredData({ data }: MaterialExtentPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MaximumAttendeeCapacityPropertyStructuredDataProps { data: MaximumAttendeeCapacityPropertyInput; }
export function MaximumAttendeeCapacityPropertyStructuredData({ data }: MaximumAttendeeCapacityPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MaximumIntakePropertyStructuredDataProps { data: MaximumIntakePropertyInput; }
export function MaximumIntakePropertyStructuredData({ data }: MaximumIntakePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MaximumPhysicalAttendeeCapacityPropertyStructuredDataProps { data: MaximumPhysicalAttendeeCapacityPropertyInput; }
export function MaximumPhysicalAttendeeCapacityPropertyStructuredData({ data }: MaximumPhysicalAttendeeCapacityPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MaximumVirtualAttendeeCapacityPropertyStructuredDataProps { data: MaximumVirtualAttendeeCapacityPropertyInput; }
export function MaximumVirtualAttendeeCapacityPropertyStructuredData({ data }: MaximumVirtualAttendeeCapacityPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MaxPricePropertyStructuredDataProps { data: MaxPricePropertyInput; }
export function MaxPricePropertyStructuredData({ data }: MaxPricePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MaxValuePropertyStructuredDataProps { data: MaxValuePropertyInput; }
export function MaxValuePropertyStructuredData({ data }: MaxValuePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MeasuredPropertyPropertyStructuredDataProps { data: MeasuredPropertyPropertyInput; }
export function MeasuredPropertyPropertyStructuredData({ data }: MeasuredPropertyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MeasurementDenominatorPropertyStructuredDataProps { data: MeasurementDenominatorPropertyInput; }
export function MeasurementDenominatorPropertyStructuredData({ data }: MeasurementDenominatorPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MeasurementMethodPropertyStructuredDataProps { data: MeasurementMethodPropertyInput; }
export function MeasurementMethodPropertyStructuredData({ data }: MeasurementMethodPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MeasurementQualifierPropertyStructuredDataProps { data: MeasurementQualifierPropertyInput; }
export function MeasurementQualifierPropertyStructuredData({ data }: MeasurementQualifierPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MeasurementTechniquePropertyStructuredDataProps { data: MeasurementTechniquePropertyInput; }
export function MeasurementTechniquePropertyStructuredData({ data }: MeasurementTechniquePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MechanismOfActionPropertyStructuredDataProps { data: MechanismOfActionPropertyInput; }
export function MechanismOfActionPropertyStructuredData({ data }: MechanismOfActionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MedianPropertyStructuredDataProps { data: MedianPropertyInput; }
export function MedianPropertyStructuredData({ data }: MedianPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MedicalAudiencePropertyStructuredDataProps { data: MedicalAudiencePropertyInput; }
export function MedicalAudiencePropertyStructuredData({ data }: MedicalAudiencePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MedicineSystemPropertyStructuredDataProps { data: MedicineSystemPropertyInput; }
export function MedicineSystemPropertyStructuredData({ data }: MedicineSystemPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MemberPropertyStructuredDataProps { data: MemberPropertyInput; }
export function MemberPropertyStructuredData({ data }: MemberPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MemberOfPropertyStructuredDataProps { data: MemberOfPropertyInput; }
export function MemberOfPropertyStructuredData({ data }: MemberOfPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MembersPropertyStructuredDataProps { data: MembersPropertyInput; }
export function MembersPropertyStructuredData({ data }: MembersPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MembershipNumberPropertyStructuredDataProps { data: MembershipNumberPropertyInput; }
export function MembershipNumberPropertyStructuredData({ data }: MembershipNumberPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MembershipPointsEarnedPropertyStructuredDataProps { data: MembershipPointsEarnedPropertyInput; }
export function MembershipPointsEarnedPropertyStructuredData({ data }: MembershipPointsEarnedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MemoryRequirementsPropertyStructuredDataProps { data: MemoryRequirementsPropertyInput; }
export function MemoryRequirementsPropertyStructuredData({ data }: MemoryRequirementsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MentionsPropertyStructuredDataProps { data: MentionsPropertyInput; }
export function MentionsPropertyStructuredData({ data }: MentionsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MenuAddOnPropertyStructuredDataProps { data: MenuAddOnPropertyInput; }
export function MenuAddOnPropertyStructuredData({ data }: MenuAddOnPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MerchantReturnDaysPropertyStructuredDataProps { data: MerchantReturnDaysPropertyInput; }
export function MerchantReturnDaysPropertyStructuredData({ data }: MerchantReturnDaysPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MerchantReturnLinkPropertyStructuredDataProps { data: MerchantReturnLinkPropertyInput; }
export function MerchantReturnLinkPropertyStructuredData({ data }: MerchantReturnLinkPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MinPricePropertyStructuredDataProps { data: MinPricePropertyInput; }
export function MinPricePropertyStructuredData({ data }: MinPricePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MinValuePropertyStructuredDataProps { data: MinValuePropertyInput; }
export function MinValuePropertyStructuredData({ data }: MinValuePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MobileUrlPropertyStructuredDataProps { data: MobileUrlPropertyInput; }
export function MobileUrlPropertyStructuredData({ data }: MobileUrlPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ModelPropertyStructuredDataProps { data: ModelPropertyInput; }
export function ModelPropertyStructuredData({ data }: ModelPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MonthlyMinimumRepaymentAmountPropertyStructuredDataProps { data: MonthlyMinimumRepaymentAmountPropertyInput; }
export function MonthlyMinimumRepaymentAmountPropertyStructuredData({ data }: MonthlyMinimumRepaymentAmountPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MonthsOfExperiencePropertyStructuredDataProps { data: MonthsOfExperiencePropertyInput; }
export function MonthsOfExperiencePropertyStructuredData({ data }: MonthsOfExperiencePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MpnPropertyStructuredDataProps { data: MpnPropertyInput; }
export function MpnPropertyStructuredData({ data }: MpnPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MusicalKeyPropertyStructuredDataProps { data: MusicalKeyPropertyInput; }
export function MusicalKeyPropertyStructuredData({ data }: MusicalKeyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MusicArrangementPropertyStructuredDataProps { data: MusicArrangementPropertyInput; }
export function MusicArrangementPropertyStructuredData({ data }: MusicArrangementPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MusicByPropertyStructuredDataProps { data: MusicByPropertyInput; }
export function MusicByPropertyStructuredData({ data }: MusicByPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MusicCompositionFormPropertyStructuredDataProps { data: MusicCompositionFormPropertyInput; }
export function MusicCompositionFormPropertyStructuredData({ data }: MusicCompositionFormPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MusicGroupMemberPropertyStructuredDataProps { data: MusicGroupMemberPropertyInput; }
export function MusicGroupMemberPropertyStructuredData({ data }: MusicGroupMemberPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface MusicReleaseFormatPropertyStructuredDataProps { data: MusicReleaseFormatPropertyInput; }
export function MusicReleaseFormatPropertyStructuredData({ data }: MusicReleaseFormatPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface NaicsPropertyStructuredDataProps { data: NaicsPropertyInput; }
export function NaicsPropertyStructuredData({ data }: NaicsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface NamePropertyStructuredDataProps { data: NamePropertyInput; }
export function NamePropertyStructuredData({ data }: NamePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface NationalityPropertyStructuredDataProps { data: NationalityPropertyInput; }
export function NationalityPropertyStructuredData({ data }: NationalityPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface NaturalProgressionPropertyStructuredDataProps { data: NaturalProgressionPropertyInput; }
export function NaturalProgressionPropertyStructuredData({ data }: NaturalProgressionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface NegativeNotesPropertyStructuredDataProps { data: NegativeNotesPropertyInput; }
export function NegativeNotesPropertyStructuredData({ data }: NegativeNotesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface NetWorthPropertyStructuredDataProps { data: NetWorthPropertyInput; }
export function NetWorthPropertyStructuredData({ data }: NetWorthPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface NextItemPropertyStructuredDataProps { data: NextItemPropertyInput; }
export function NextItemPropertyStructuredData({ data }: NextItemPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface NonprofitStatusPropertyStructuredDataProps { data: NonprofitStatusPropertyInput; }
export function NonprofitStatusPropertyStructuredData({ data }: NonprofitStatusPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface NonProprietaryNamePropertyStructuredDataProps { data: NonProprietaryNamePropertyInput; }
export function NonProprietaryNamePropertyStructuredData({ data }: NonProprietaryNamePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface NormalRangePropertyStructuredDataProps { data: NormalRangePropertyInput; }
export function NormalRangePropertyStructuredData({ data }: NormalRangePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface NsnPropertyStructuredDataProps { data: NsnPropertyInput; }
export function NsnPropertyStructuredData({ data }: NsnPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface NumberOfEmployeesPropertyStructuredDataProps { data: NumberOfEmployeesPropertyInput; }
export function NumberOfEmployeesPropertyStructuredData({ data }: NumberOfEmployeesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface NumberOfEpisodesPropertyStructuredDataProps { data: NumberOfEpisodesPropertyInput; }
export function NumberOfEpisodesPropertyStructuredData({ data }: NumberOfEpisodesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface NumberOfItemsPropertyStructuredDataProps { data: NumberOfItemsPropertyInput; }
export function NumberOfItemsPropertyStructuredData({ data }: NumberOfItemsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface NumberOfLoanPaymentsPropertyStructuredDataProps { data: NumberOfLoanPaymentsPropertyInput; }
export function NumberOfLoanPaymentsPropertyStructuredData({ data }: NumberOfLoanPaymentsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface NumConstraintsPropertyStructuredDataProps { data: NumConstraintsPropertyInput; }
export function NumConstraintsPropertyStructuredData({ data }: NumConstraintsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface NumItemsPropertyStructuredDataProps { data: NumItemsPropertyInput; }
export function NumItemsPropertyStructuredData({ data }: NumItemsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface NumTracksPropertyStructuredDataProps { data: NumTracksPropertyInput; }
export function NumTracksPropertyStructuredData({ data }: NumTracksPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface NutritionPropertyStructuredDataProps { data: NutritionPropertyInput; }
export function NutritionPropertyStructuredData({ data }: NutritionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ObjectPropertyStructuredDataProps { data: ObjectPropertyInput; }
export function ObjectPropertyStructuredData({ data }: ObjectPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface OccupationalCategoryPropertyStructuredDataProps { data: OccupationalCategoryPropertyInput; }
export function OccupationalCategoryPropertyStructuredData({ data }: OccupationalCategoryPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface OccupationLocationPropertyStructuredDataProps { data: OccupationLocationPropertyInput; }
export function OccupationLocationPropertyStructuredData({ data }: OccupationLocationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface OfferCountPropertyStructuredDataProps { data: OfferCountPropertyInput; }
export function OfferCountPropertyStructuredData({ data }: OfferCountPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface OfferedByPropertyStructuredDataProps { data: OfferedByPropertyInput; }
export function OfferedByPropertyStructuredData({ data }: OfferedByPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface OffersPropertyStructuredDataProps { data: OffersPropertyInput; }
export function OffersPropertyStructuredData({ data }: OffersPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface OffersPrescriptionByMailPropertyStructuredDataProps { data: OffersPrescriptionByMailPropertyInput; }
export function OffersPrescriptionByMailPropertyStructuredData({ data }: OffersPrescriptionByMailPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface OpeningHoursPropertyStructuredDataProps { data: OpeningHoursPropertyInput; }
export function OpeningHoursPropertyStructuredData({ data }: OpeningHoursPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface OpeningHoursSpecificationPropertyStructuredDataProps { data: OpeningHoursSpecificationPropertyInput; }
export function OpeningHoursSpecificationPropertyStructuredData({ data }: OpeningHoursSpecificationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface OpensPropertyStructuredDataProps { data: OpensPropertyInput; }
export function OpensPropertyStructuredData({ data }: OpensPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface OperatingSystemPropertyStructuredDataProps { data: OperatingSystemPropertyInput; }
export function OperatingSystemPropertyStructuredData({ data }: OperatingSystemPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface OrderPercentagePropertyStructuredDataProps { data: OrderPercentagePropertyInput; }
export function OrderPercentagePropertyStructuredData({ data }: OrderPercentagePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface OrderValuePropertyStructuredDataProps { data: OrderValuePropertyInput; }
export function OrderValuePropertyStructuredData({ data }: OrderValuePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface OrganizerPropertyStructuredDataProps { data: OrganizerPropertyInput; }
export function OrganizerPropertyStructuredData({ data }: OrganizerPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface OverdosagePropertyStructuredDataProps { data: OverdosagePropertyInput; }
export function OverdosagePropertyStructuredData({ data }: OverdosagePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface OwnerPropertyStructuredDataProps { data: OwnerPropertyInput; }
export function OwnerPropertyStructuredData({ data }: OwnerPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface OwnershipFundingInfoPropertyStructuredDataProps { data: OwnershipFundingInfoPropertyInput; }
export function OwnershipFundingInfoPropertyStructuredData({ data }: OwnershipFundingInfoPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface OwnsPropertyStructuredDataProps { data: OwnsPropertyInput; }
export function OwnsPropertyStructuredData({ data }: OwnsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PageEndPropertyStructuredDataProps { data: PageEndPropertyInput; }
export function PageEndPropertyStructuredData({ data }: PageEndPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PageStartPropertyStructuredDataProps { data: PageStartPropertyInput; }
export function PageStartPropertyStructuredData({ data }: PageStartPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PaginationPropertyStructuredDataProps { data: PaginationPropertyInput; }
export function PaginationPropertyStructuredData({ data }: PaginationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ParentPropertyStructuredDataProps { data: ParentPropertyInput; }
export function ParentPropertyStructuredData({ data }: ParentPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ParentItemPropertyStructuredDataProps { data: ParentItemPropertyInput; }
export function ParentItemPropertyStructuredData({ data }: ParentItemPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ParentOrganizationPropertyStructuredDataProps { data: ParentOrganizationPropertyInput; }
export function ParentOrganizationPropertyStructuredData({ data }: ParentOrganizationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ParentsPropertyStructuredDataProps { data: ParentsPropertyInput; }
export function ParentsPropertyStructuredData({ data }: ParentsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ParentServicePropertyStructuredDataProps { data: ParentServicePropertyInput; }
export function ParentServicePropertyStructuredData({ data }: ParentServicePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ParentTaxonPropertyStructuredDataProps { data: ParentTaxonPropertyInput; }
export function ParentTaxonPropertyStructuredData({ data }: ParentTaxonPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ParticipantPropertyStructuredDataProps { data: ParticipantPropertyInput; }
export function ParticipantPropertyStructuredData({ data }: ParticipantPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PartOfEpisodePropertyStructuredDataProps { data: PartOfEpisodePropertyInput; }
export function PartOfEpisodePropertyStructuredData({ data }: PartOfEpisodePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PartOfSeasonPropertyStructuredDataProps { data: PartOfSeasonPropertyInput; }
export function PartOfSeasonPropertyStructuredData({ data }: PartOfSeasonPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PartOfSeriesPropertyStructuredDataProps { data: PartOfSeriesPropertyInput; }
export function PartOfSeriesPropertyStructuredData({ data }: PartOfSeriesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PartOfSystemPropertyStructuredDataProps { data: PartOfSystemPropertyInput; }
export function PartOfSystemPropertyStructuredData({ data }: PartOfSystemPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PartOfTripPropertyStructuredDataProps { data: PartOfTripPropertyInput; }
export function PartOfTripPropertyStructuredData({ data }: PartOfTripPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PathophysiologyPropertyStructuredDataProps { data: PathophysiologyPropertyInput; }
export function PathophysiologyPropertyStructuredData({ data }: PathophysiologyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PatternPropertyStructuredDataProps { data: PatternPropertyInput; }
export function PatternPropertyStructuredData({ data }: PatternPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PaymentMethodTypePropertyStructuredDataProps { data: PaymentMethodTypePropertyInput; }
export function PaymentMethodTypePropertyStructuredData({ data }: PaymentMethodTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface Percentile10PropertyStructuredDataProps { data: Percentile10PropertyInput; }
export function Percentile10PropertyStructuredData({ data }: Percentile10PropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface Percentile25PropertyStructuredDataProps { data: Percentile25PropertyInput; }
export function Percentile25PropertyStructuredData({ data }: Percentile25PropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface Percentile75PropertyStructuredDataProps { data: Percentile75PropertyInput; }
export function Percentile75PropertyStructuredData({ data }: Percentile75PropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface Percentile90PropertyStructuredDataProps { data: Percentile90PropertyInput; }
export function Percentile90PropertyStructuredData({ data }: Percentile90PropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PerformerPropertyStructuredDataProps { data: PerformerPropertyInput; }
export function PerformerPropertyStructuredData({ data }: PerformerPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PerformerInPropertyStructuredDataProps { data: PerformerInPropertyInput; }
export function PerformerInPropertyStructuredData({ data }: PerformerInPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PerformersPropertyStructuredDataProps { data: PerformersPropertyInput; }
export function PerformersPropertyStructuredData({ data }: PerformersPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PerformTimePropertyStructuredDataProps { data: PerformTimePropertyInput; }
export function PerformTimePropertyStructuredData({ data }: PerformTimePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PermissionsPropertyStructuredDataProps { data: PermissionsPropertyInput; }
export function PermissionsPropertyStructuredData({ data }: PermissionsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PhotoPropertyStructuredDataProps { data: PhotoPropertyInput; }
export function PhotoPropertyStructuredData({ data }: PhotoPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PhotosPropertyStructuredDataProps { data: PhotosPropertyInput; }
export function PhotosPropertyStructuredData({ data }: PhotosPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PhysiologicalBenefitsPropertyStructuredDataProps { data: PhysiologicalBenefitsPropertyInput; }
export function PhysiologicalBenefitsPropertyStructuredData({ data }: PhysiologicalBenefitsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PlayerTypePropertyStructuredDataProps { data: PlayerTypePropertyInput; }
export function PlayerTypePropertyStructuredData({ data }: PlayerTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PolygonPropertyStructuredDataProps { data: PolygonPropertyInput; }
export function PolygonPropertyStructuredData({ data }: PolygonPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PopulationTypePropertyStructuredDataProps { data: PopulationTypePropertyInput; }
export function PopulationTypePropertyStructuredData({ data }: PopulationTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PositionPropertyStructuredDataProps { data: PositionPropertyInput; }
export function PositionPropertyStructuredData({ data }: PositionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PositiveNotesPropertyStructuredDataProps { data: PositiveNotesPropertyInput; }
export function PositiveNotesPropertyStructuredData({ data }: PositiveNotesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PossibleComplicationPropertyStructuredDataProps { data: PossibleComplicationPropertyInput; }
export function PossibleComplicationPropertyStructuredData({ data }: PossibleComplicationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PossibleTreatmentPropertyStructuredDataProps { data: PossibleTreatmentPropertyInput; }
export function PossibleTreatmentPropertyStructuredData({ data }: PossibleTreatmentPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PostalCodePropertyStructuredDataProps { data: PostalCodePropertyInput; }
export function PostalCodePropertyStructuredData({ data }: PostalCodePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PostalCodeBeginPropertyStructuredDataProps { data: PostalCodeBeginPropertyInput; }
export function PostalCodeBeginPropertyStructuredData({ data }: PostalCodeBeginPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PostalCodeEndPropertyStructuredDataProps { data: PostalCodeEndPropertyInput; }
export function PostalCodeEndPropertyStructuredData({ data }: PostalCodeEndPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PostalCodePrefixPropertyStructuredDataProps { data: PostalCodePrefixPropertyInput; }
export function PostalCodePrefixPropertyStructuredData({ data }: PostalCodePrefixPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PostalCodeRangePropertyStructuredDataProps { data: PostalCodeRangePropertyInput; }
export function PostalCodeRangePropertyStructuredData({ data }: PostalCodeRangePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PostOfficeBoxNumberPropertyStructuredDataProps { data: PostOfficeBoxNumberPropertyInput; }
export function PostOfficeBoxNumberPropertyStructuredData({ data }: PostOfficeBoxNumberPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PostOpPropertyStructuredDataProps { data: PostOpPropertyInput; }
export function PostOpPropertyStructuredData({ data }: PostOpPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PotentialActionPropertyStructuredDataProps { data: PotentialActionPropertyInput; }
export function PotentialActionPropertyStructuredData({ data }: PotentialActionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PredecessorOfPropertyStructuredDataProps { data: PredecessorOfPropertyInput; }
export function PredecessorOfPropertyStructuredData({ data }: PredecessorOfPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PregnancyCategoryPropertyStructuredDataProps { data: PregnancyCategoryPropertyInput; }
export function PregnancyCategoryPropertyStructuredData({ data }: PregnancyCategoryPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PregnancyWarningPropertyStructuredDataProps { data: PregnancyWarningPropertyInput; }
export function PregnancyWarningPropertyStructuredData({ data }: PregnancyWarningPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PreOpPropertyStructuredDataProps { data: PreOpPropertyInput; }
export function PreOpPropertyStructuredData({ data }: PreOpPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PreparationPropertyStructuredDataProps { data: PreparationPropertyInput; }
export function PreparationPropertyStructuredData({ data }: PreparationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PrepTimePropertyStructuredDataProps { data: PrepTimePropertyInput; }
export function PrepTimePropertyStructuredData({ data }: PrepTimePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PrescribingInfoPropertyStructuredDataProps { data: PrescribingInfoPropertyInput; }
export function PrescribingInfoPropertyStructuredData({ data }: PrescribingInfoPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PrescriptionStatusPropertyStructuredDataProps { data: PrescriptionStatusPropertyInput; }
export function PrescriptionStatusPropertyStructuredData({ data }: PrescriptionStatusPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PreviousItemPropertyStructuredDataProps { data: PreviousItemPropertyInput; }
export function PreviousItemPropertyStructuredData({ data }: PreviousItemPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PreviousStartDatePropertyStructuredDataProps { data: PreviousStartDatePropertyInput; }
export function PreviousStartDatePropertyStructuredData({ data }: PreviousStartDatePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PricePropertyStructuredDataProps { data: PricePropertyInput; }
export function PricePropertyStructuredData({ data }: PricePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PriceComponentTypePropertyStructuredDataProps { data: PriceComponentTypePropertyInput; }
export function PriceComponentTypePropertyStructuredData({ data }: PriceComponentTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PriceCurrencyPropertyStructuredDataProps { data: PriceCurrencyPropertyInput; }
export function PriceCurrencyPropertyStructuredData({ data }: PriceCurrencyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PriceSpecificationPropertyStructuredDataProps { data: PriceSpecificationPropertyInput; }
export function PriceSpecificationPropertyStructuredData({ data }: PriceSpecificationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PriceTypePropertyStructuredDataProps { data: PriceTypePropertyInput; }
export function PriceTypePropertyStructuredData({ data }: PriceTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PriceValidUntilPropertyStructuredDataProps { data: PriceValidUntilPropertyInput; }
export function PriceValidUntilPropertyStructuredData({ data }: PriceValidUntilPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PrimaryImageOfPagePropertyStructuredDataProps { data: PrimaryImageOfPagePropertyInput; }
export function PrimaryImageOfPagePropertyStructuredData({ data }: PrimaryImageOfPagePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PrimaryPreventionPropertyStructuredDataProps { data: PrimaryPreventionPropertyInput; }
export function PrimaryPreventionPropertyStructuredData({ data }: PrimaryPreventionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PrintColumnPropertyStructuredDataProps { data: PrintColumnPropertyInput; }
export function PrintColumnPropertyStructuredData({ data }: PrintColumnPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PrintEditionPropertyStructuredDataProps { data: PrintEditionPropertyInput; }
export function PrintEditionPropertyStructuredData({ data }: PrintEditionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PrintPagePropertyStructuredDataProps { data: PrintPagePropertyInput; }
export function PrintPagePropertyStructuredData({ data }: PrintPagePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PrintSectionPropertyStructuredDataProps { data: PrintSectionPropertyInput; }
export function PrintSectionPropertyStructuredData({ data }: PrintSectionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ProcedurePropertyStructuredDataProps { data: ProcedurePropertyInput; }
export function ProcedurePropertyStructuredData({ data }: ProcedurePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ProcedureTypePropertyStructuredDataProps { data: ProcedureTypePropertyInput; }
export function ProcedureTypePropertyStructuredData({ data }: ProcedureTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ProcessingTimePropertyStructuredDataProps { data: ProcessingTimePropertyInput; }
export function ProcessingTimePropertyStructuredData({ data }: ProcessingTimePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ProcessorRequirementsPropertyStructuredDataProps { data: ProcessorRequirementsPropertyInput; }
export function ProcessorRequirementsPropertyStructuredData({ data }: ProcessorRequirementsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ProducerPropertyStructuredDataProps { data: ProducerPropertyInput; }
export function ProducerPropertyStructuredData({ data }: ProducerPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ProducesPropertyStructuredDataProps { data: ProducesPropertyInput; }
export function ProducesPropertyStructuredData({ data }: ProducesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ProductGroupIDPropertyStructuredDataProps { data: ProductGroupIDPropertyInput; }
export function ProductGroupIDPropertyStructuredData({ data }: ProductGroupIDPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ProductIDPropertyStructuredDataProps { data: ProductIDPropertyInput; }
export function ProductIDPropertyStructuredData({ data }: ProductIDPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ProductionCompanyPropertyStructuredDataProps { data: ProductionCompanyPropertyInput; }
export function ProductionCompanyPropertyStructuredData({ data }: ProductionCompanyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ProductionDatePropertyStructuredDataProps { data: ProductionDatePropertyInput; }
export function ProductionDatePropertyStructuredData({ data }: ProductionDatePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ProductSupportedPropertyStructuredDataProps { data: ProductSupportedPropertyInput; }
export function ProductSupportedPropertyStructuredData({ data }: ProductSupportedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ProgramPropertyStructuredDataProps { data: ProgramPropertyInput; }
export function ProgramPropertyStructuredData({ data }: ProgramPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ProgramNamePropertyStructuredDataProps { data: ProgramNamePropertyInput; }
export function ProgramNamePropertyStructuredData({ data }: ProgramNamePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PronounsPropertyStructuredDataProps { data: PronounsPropertyInput; }
export function PronounsPropertyStructuredData({ data }: PronounsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PropertyIDPropertyStructuredDataProps { data: PropertyIDPropertyInput; }
export function PropertyIDPropertyStructuredData({ data }: PropertyIDPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ProprietaryNamePropertyStructuredDataProps { data: ProprietaryNamePropertyInput; }
export function ProprietaryNamePropertyStructuredData({ data }: ProprietaryNamePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ProteinContentPropertyStructuredDataProps { data: ProteinContentPropertyInput; }
export function ProteinContentPropertyStructuredData({ data }: ProteinContentPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ProviderPropertyStructuredDataProps { data: ProviderPropertyInput; }
export function ProviderPropertyStructuredData({ data }: ProviderPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ProviderMobilityPropertyStructuredDataProps { data: ProviderMobilityPropertyInput; }
export function ProviderMobilityPropertyStructuredData({ data }: ProviderMobilityPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ProvidesBroadcastServicePropertyStructuredDataProps { data: ProvidesBroadcastServicePropertyInput; }
export function ProvidesBroadcastServicePropertyStructuredData({ data }: ProvidesBroadcastServicePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ProvidesServicePropertyStructuredDataProps { data: ProvidesServicePropertyInput; }
export function ProvidesServicePropertyStructuredData({ data }: ProvidesServicePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PublicAccessPropertyStructuredDataProps { data: PublicAccessPropertyInput; }
export function PublicAccessPropertyStructuredData({ data }: PublicAccessPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PublicationPropertyStructuredDataProps { data: PublicationPropertyInput; }
export function PublicationPropertyStructuredData({ data }: PublicationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PublishedByPropertyStructuredDataProps { data: PublishedByPropertyInput; }
export function PublishedByPropertyStructuredData({ data }: PublishedByPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PublishedOnPropertyStructuredDataProps { data: PublishedOnPropertyInput; }
export function PublishedOnPropertyStructuredData({ data }: PublishedOnPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PublisherPropertyStructuredDataProps { data: PublisherPropertyInput; }
export function PublisherPropertyStructuredData({ data }: PublisherPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PublisherImprintPropertyStructuredDataProps { data: PublisherImprintPropertyInput; }
export function PublisherImprintPropertyStructuredData({ data }: PublisherImprintPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PublishingPrinciplesPropertyStructuredDataProps { data: PublishingPrinciplesPropertyInput; }
export function PublishingPrinciplesPropertyStructuredData({ data }: PublishingPrinciplesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface PurchaseDatePropertyStructuredDataProps { data: PurchaseDatePropertyInput; }
export function PurchaseDatePropertyStructuredData({ data }: PurchaseDatePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface QualificationsPropertyStructuredDataProps { data: QualificationsPropertyInput; }
export function QualificationsPropertyStructuredData({ data }: QualificationsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RangeIncludesPropertyStructuredDataProps { data: RangeIncludesPropertyInput; }
export function RangeIncludesPropertyStructuredData({ data }: RangeIncludesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RatingCountPropertyStructuredDataProps { data: RatingCountPropertyInput; }
export function RatingCountPropertyStructuredData({ data }: RatingCountPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RatingExplanationPropertyStructuredDataProps { data: RatingExplanationPropertyInput; }
export function RatingExplanationPropertyStructuredData({ data }: RatingExplanationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RatingValuePropertyStructuredDataProps { data: RatingValuePropertyInput; }
export function RatingValuePropertyStructuredData({ data }: RatingValuePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RecognizedByPropertyStructuredDataProps { data: RecognizedByPropertyInput; }
export function RecognizedByPropertyStructuredData({ data }: RecognizedByPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RecognizingAuthorityPropertyStructuredDataProps { data: RecognizingAuthorityPropertyInput; }
export function RecognizingAuthorityPropertyStructuredData({ data }: RecognizingAuthorityPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RecordedAsPropertyStructuredDataProps { data: RecordedAsPropertyInput; }
export function RecordedAsPropertyStructuredData({ data }: RecordedAsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RecordedAtPropertyStructuredDataProps { data: RecordedAtPropertyInput; }
export function RecordedAtPropertyStructuredData({ data }: RecordedAtPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RecordedInPropertyStructuredDataProps { data: RecordedInPropertyInput; }
export function RecordedInPropertyStructuredData({ data }: RecordedInPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RecordingOfPropertyStructuredDataProps { data: RecordingOfPropertyInput; }
export function RecordingOfPropertyStructuredData({ data }: RecordingOfPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RecordLabelPropertyStructuredDataProps { data: RecordLabelPropertyInput; }
export function RecordLabelPropertyStructuredData({ data }: RecordLabelPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RecourseLoanPropertyStructuredDataProps { data: RecourseLoanPropertyInput; }
export function RecourseLoanPropertyStructuredData({ data }: RecourseLoanPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ReferenceQuantityPropertyStructuredDataProps { data: ReferenceQuantityPropertyInput; }
export function ReferenceQuantityPropertyStructuredData({ data }: ReferenceQuantityPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RefundTypePropertyStructuredDataProps { data: RefundTypePropertyInput; }
export function RefundTypePropertyStructuredData({ data }: RefundTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RegionsAllowedPropertyStructuredDataProps { data: RegionsAllowedPropertyInput; }
export function RegionsAllowedPropertyStructuredData({ data }: RegionsAllowedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RelatedAnatomyPropertyStructuredDataProps { data: RelatedAnatomyPropertyInput; }
export function RelatedAnatomyPropertyStructuredData({ data }: RelatedAnatomyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RelatedConditionPropertyStructuredDataProps { data: RelatedConditionPropertyInput; }
export function RelatedConditionPropertyStructuredData({ data }: RelatedConditionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RelatedDrugPropertyStructuredDataProps { data: RelatedDrugPropertyInput; }
export function RelatedDrugPropertyStructuredData({ data }: RelatedDrugPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RelatedLinkPropertyStructuredDataProps { data: RelatedLinkPropertyInput; }
export function RelatedLinkPropertyStructuredData({ data }: RelatedLinkPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RelatedStructurePropertyStructuredDataProps { data: RelatedStructurePropertyInput; }
export function RelatedStructurePropertyStructuredData({ data }: RelatedStructurePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RelatedTherapyPropertyStructuredDataProps { data: RelatedTherapyPropertyInput; }
export function RelatedTherapyPropertyStructuredData({ data }: RelatedTherapyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RelatedToPropertyStructuredDataProps { data: RelatedToPropertyInput; }
export function RelatedToPropertyStructuredData({ data }: RelatedToPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ReleaseDatePropertyStructuredDataProps { data: ReleaseDatePropertyInput; }
export function ReleaseDatePropertyStructuredData({ data }: ReleaseDatePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ReleasedEventPropertyStructuredDataProps { data: ReleasedEventPropertyInput; }
export function ReleasedEventPropertyStructuredData({ data }: ReleasedEventPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ReleaseNotesPropertyStructuredDataProps { data: ReleaseNotesPropertyInput; }
export function ReleaseNotesPropertyStructuredData({ data }: ReleaseNotesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ReleaseOfPropertyStructuredDataProps { data: ReleaseOfPropertyInput; }
export function ReleaseOfPropertyStructuredData({ data }: ReleaseOfPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RelevantSpecialtyPropertyStructuredDataProps { data: RelevantSpecialtyPropertyInput; }
export function RelevantSpecialtyPropertyStructuredData({ data }: RelevantSpecialtyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RemainingAttendeeCapacityPropertyStructuredDataProps { data: RemainingAttendeeCapacityPropertyInput; }
export function RemainingAttendeeCapacityPropertyStructuredData({ data }: RemainingAttendeeCapacityPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RenegotiableLoanPropertyStructuredDataProps { data: RenegotiableLoanPropertyInput; }
export function RenegotiableLoanPropertyStructuredData({ data }: RenegotiableLoanPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RepeatCountPropertyStructuredDataProps { data: RepeatCountPropertyInput; }
export function RepeatCountPropertyStructuredData({ data }: RepeatCountPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RepeatFrequencyPropertyStructuredDataProps { data: RepeatFrequencyPropertyInput; }
export function RepeatFrequencyPropertyStructuredData({ data }: RepeatFrequencyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RepresentativeOfPagePropertyStructuredDataProps { data: RepresentativeOfPagePropertyInput; }
export function RepresentativeOfPagePropertyStructuredData({ data }: RepresentativeOfPagePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RequiredCollateralPropertyStructuredDataProps { data: RequiredCollateralPropertyInput; }
export function RequiredCollateralPropertyStructuredData({ data }: RequiredCollateralPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RequiredGenderPropertyStructuredDataProps { data: RequiredGenderPropertyInput; }
export function RequiredGenderPropertyStructuredData({ data }: RequiredGenderPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RequiredMaxAgePropertyStructuredDataProps { data: RequiredMaxAgePropertyInput; }
export function RequiredMaxAgePropertyStructuredData({ data }: RequiredMaxAgePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RequiredMinAgePropertyStructuredDataProps { data: RequiredMinAgePropertyInput; }
export function RequiredMinAgePropertyStructuredData({ data }: RequiredMinAgePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RequiredQuantityPropertyStructuredDataProps { data: RequiredQuantityPropertyInput; }
export function RequiredQuantityPropertyStructuredData({ data }: RequiredQuantityPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RequirementsPropertyStructuredDataProps { data: RequirementsPropertyInput; }
export function RequirementsPropertyStructuredData({ data }: RequirementsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RequiresSubscriptionPropertyStructuredDataProps { data: RequiresSubscriptionPropertyInput; }
export function RequiresSubscriptionPropertyStructuredData({ data }: RequiresSubscriptionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ResponsibilitiesPropertyStructuredDataProps { data: ResponsibilitiesPropertyInput; }
export function ResponsibilitiesPropertyStructuredData({ data }: ResponsibilitiesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RestockingFeePropertyStructuredDataProps { data: RestockingFeePropertyInput; }
export function RestockingFeePropertyStructuredData({ data }: RestockingFeePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ResultPropertyStructuredDataProps { data: ResultPropertyInput; }
export function ResultPropertyStructuredData({ data }: ResultPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ReturnFeesPropertyStructuredDataProps { data: ReturnFeesPropertyInput; }
export function ReturnFeesPropertyStructuredData({ data }: ReturnFeesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ReturnLabelSourcePropertyStructuredDataProps { data: ReturnLabelSourcePropertyInput; }
export function ReturnLabelSourcePropertyStructuredData({ data }: ReturnLabelSourcePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ReturnMethodPropertyStructuredDataProps { data: ReturnMethodPropertyInput; }
export function ReturnMethodPropertyStructuredData({ data }: ReturnMethodPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ReturnPolicyCategoryPropertyStructuredDataProps { data: ReturnPolicyCategoryPropertyInput; }
export function ReturnPolicyCategoryPropertyStructuredData({ data }: ReturnPolicyCategoryPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ReturnPolicyCountryPropertyStructuredDataProps { data: ReturnPolicyCountryPropertyInput; }
export function ReturnPolicyCountryPropertyStructuredData({ data }: ReturnPolicyCountryPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ReturnPolicySeasonalOverridePropertyStructuredDataProps { data: ReturnPolicySeasonalOverridePropertyInput; }
export function ReturnPolicySeasonalOverridePropertyStructuredData({ data }: ReturnPolicySeasonalOverridePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ReturnShippingFeesAmountPropertyStructuredDataProps { data: ReturnShippingFeesAmountPropertyInput; }
export function ReturnShippingFeesAmountPropertyStructuredData({ data }: ReturnShippingFeesAmountPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ReviewPropertyStructuredDataProps { data: ReviewPropertyInput; }
export function ReviewPropertyStructuredData({ data }: ReviewPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ReviewAspectPropertyStructuredDataProps { data: ReviewAspectPropertyInput; }
export function ReviewAspectPropertyStructuredData({ data }: ReviewAspectPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ReviewBodyPropertyStructuredDataProps { data: ReviewBodyPropertyInput; }
export function ReviewBodyPropertyStructuredData({ data }: ReviewBodyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ReviewCountPropertyStructuredDataProps { data: ReviewCountPropertyInput; }
export function ReviewCountPropertyStructuredData({ data }: ReviewCountPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ReviewedByPropertyStructuredDataProps { data: ReviewedByPropertyInput; }
export function ReviewedByPropertyStructuredData({ data }: ReviewedByPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ReviewRatingPropertyStructuredDataProps { data: ReviewRatingPropertyInput; }
export function ReviewRatingPropertyStructuredData({ data }: ReviewRatingPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ReviewsPropertyStructuredDataProps { data: ReviewsPropertyInput; }
export function ReviewsPropertyStructuredData({ data }: ReviewsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RiskFactorPropertyStructuredDataProps { data: RiskFactorPropertyInput; }
export function RiskFactorPropertyStructuredData({ data }: RiskFactorPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RisksPropertyStructuredDataProps { data: RisksPropertyInput; }
export function RisksPropertyStructuredData({ data }: RisksPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RuntimePlatformPropertyStructuredDataProps { data: RuntimePlatformPropertyInput; }
export function RuntimePlatformPropertyStructuredData({ data }: RuntimePlatformPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface RxcuiPropertyStructuredDataProps { data: RxcuiPropertyInput; }
export function RxcuiPropertyStructuredData({ data }: RxcuiPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SameAsPropertyStructuredDataProps { data: SameAsPropertyInput; }
export function SameAsPropertyStructuredData({ data }: SameAsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SaturatedFatContentPropertyStructuredDataProps { data: SaturatedFatContentPropertyInput; }
export function SaturatedFatContentPropertyStructuredData({ data }: SaturatedFatContentPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ScheduleTimezonePropertyStructuredDataProps { data: ScheduleTimezonePropertyInput; }
export function ScheduleTimezonePropertyStructuredData({ data }: ScheduleTimezonePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SchemaVersionPropertyStructuredDataProps { data: SchemaVersionPropertyInput; }
export function SchemaVersionPropertyStructuredData({ data }: SchemaVersionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ScreenshotPropertyStructuredDataProps { data: ScreenshotPropertyInput; }
export function ScreenshotPropertyStructuredData({ data }: ScreenshotPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SdDatePublishedPropertyStructuredDataProps { data: SdDatePublishedPropertyInput; }
export function SdDatePublishedPropertyStructuredData({ data }: SdDatePublishedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SdLicensePropertyStructuredDataProps { data: SdLicensePropertyInput; }
export function SdLicensePropertyStructuredData({ data }: SdLicensePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SdPublisherPropertyStructuredDataProps { data: SdPublisherPropertyInput; }
export function SdPublisherPropertyStructuredData({ data }: SdPublisherPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SeasonalOverridePropertyStructuredDataProps { data: SeasonalOverridePropertyInput; }
export function SeasonalOverridePropertyStructuredData({ data }: SeasonalOverridePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SeasonNumberPropertyStructuredDataProps { data: SeasonNumberPropertyInput; }
export function SeasonNumberPropertyStructuredData({ data }: SeasonNumberPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SecondaryPreventionPropertyStructuredDataProps { data: SecondaryPreventionPropertyInput; }
export function SecondaryPreventionPropertyStructuredData({ data }: SecondaryPreventionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SeeksPropertyStructuredDataProps { data: SeeksPropertyInput; }
export function SeeksPropertyStructuredData({ data }: SeeksPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SellerPropertyStructuredDataProps { data: SellerPropertyInput; }
export function SellerPropertyStructuredData({ data }: SellerPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SerialNumberPropertyStructuredDataProps { data: SerialNumberPropertyInput; }
export function SerialNumberPropertyStructuredData({ data }: SerialNumberPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SeriousAdverseOutcomePropertyStructuredDataProps { data: SeriousAdverseOutcomePropertyInput; }
export function SeriousAdverseOutcomePropertyStructuredData({ data }: SeriousAdverseOutcomePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ServiceAreaPropertyStructuredDataProps { data: ServiceAreaPropertyInput; }
export function ServiceAreaPropertyStructuredData({ data }: ServiceAreaPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ServiceAudiencePropertyStructuredDataProps { data: ServiceAudiencePropertyInput; }
export function ServiceAudiencePropertyStructuredData({ data }: ServiceAudiencePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ServiceLocationPropertyStructuredDataProps { data: ServiceLocationPropertyInput; }
export function ServiceLocationPropertyStructuredData({ data }: ServiceLocationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ServiceOutputPropertyStructuredDataProps { data: ServiceOutputPropertyInput; }
export function ServiceOutputPropertyStructuredData({ data }: ServiceOutputPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ServicePhonePropertyStructuredDataProps { data: ServicePhonePropertyInput; }
export function ServicePhonePropertyStructuredData({ data }: ServicePhonePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ServicePostalAddressPropertyStructuredDataProps { data: ServicePostalAddressPropertyInput; }
export function ServicePostalAddressPropertyStructuredData({ data }: ServicePostalAddressPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ServiceSmsNumberPropertyStructuredDataProps { data: ServiceSmsNumberPropertyInput; }
export function ServiceSmsNumberPropertyStructuredData({ data }: ServiceSmsNumberPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ServiceTypePropertyStructuredDataProps { data: ServiceTypePropertyInput; }
export function ServiceTypePropertyStructuredData({ data }: ServiceTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ServiceUrlPropertyStructuredDataProps { data: ServiceUrlPropertyInput; }
export function ServiceUrlPropertyStructuredData({ data }: ServiceUrlPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ServingSizePropertyStructuredDataProps { data: ServingSizePropertyInput; }
export function ServingSizePropertyStructuredData({ data }: ServingSizePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface Sha256PropertyStructuredDataProps { data: Sha256PropertyInput; }
export function Sha256PropertyStructuredData({ data }: Sha256PropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SharedContentPropertyStructuredDataProps { data: SharedContentPropertyInput; }
export function SharedContentPropertyStructuredData({ data }: SharedContentPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ShippingConditionsPropertyStructuredDataProps { data: ShippingConditionsPropertyInput; }
export function ShippingConditionsPropertyStructuredData({ data }: ShippingConditionsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ShippingDestinationPropertyStructuredDataProps { data: ShippingDestinationPropertyInput; }
export function ShippingDestinationPropertyStructuredData({ data }: ShippingDestinationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ShippingDetailsPropertyStructuredDataProps { data: ShippingDetailsPropertyInput; }
export function ShippingDetailsPropertyStructuredData({ data }: ShippingDetailsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ShippingOriginPropertyStructuredDataProps { data: ShippingOriginPropertyInput; }
export function ShippingOriginPropertyStructuredData({ data }: ShippingOriginPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ShippingRatePropertyStructuredDataProps { data: ShippingRatePropertyInput; }
export function ShippingRatePropertyStructuredData({ data }: ShippingRatePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SiblingPropertyStructuredDataProps { data: SiblingPropertyInput; }
export function SiblingPropertyStructuredData({ data }: SiblingPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SiblingsPropertyStructuredDataProps { data: SiblingsPropertyInput; }
export function SiblingsPropertyStructuredData({ data }: SiblingsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SignDetectedPropertyStructuredDataProps { data: SignDetectedPropertyInput; }
export function SignDetectedPropertyStructuredData({ data }: SignDetectedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SignificancePropertyStructuredDataProps { data: SignificancePropertyInput; }
export function SignificancePropertyStructuredData({ data }: SignificancePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SignificantLinkPropertyStructuredDataProps { data: SignificantLinkPropertyInput; }
export function SignificantLinkPropertyStructuredData({ data }: SignificantLinkPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SignificantLinksPropertyStructuredDataProps { data: SignificantLinksPropertyInput; }
export function SignificantLinksPropertyStructuredData({ data }: SignificantLinksPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SignOrSymptomPropertyStructuredDataProps { data: SignOrSymptomPropertyInput; }
export function SignOrSymptomPropertyStructuredData({ data }: SignOrSymptomPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SizePropertyStructuredDataProps { data: SizePropertyInput; }
export function SizePropertyStructuredData({ data }: SizePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SkillsPropertyStructuredDataProps { data: SkillsPropertyInput; }
export function SkillsPropertyStructuredData({ data }: SkillsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SkuPropertyStructuredDataProps { data: SkuPropertyInput; }
export function SkuPropertyStructuredData({ data }: SkuPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SloganPropertyStructuredDataProps { data: SloganPropertyInput; }
export function SloganPropertyStructuredData({ data }: SloganPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SmokingAllowedPropertyStructuredDataProps { data: SmokingAllowedPropertyInput; }
export function SmokingAllowedPropertyStructuredData({ data }: SmokingAllowedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SodiumContentPropertyStructuredDataProps { data: SodiumContentPropertyInput; }
export function SodiumContentPropertyStructuredData({ data }: SodiumContentPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SoftwareAddOnPropertyStructuredDataProps { data: SoftwareAddOnPropertyInput; }
export function SoftwareAddOnPropertyStructuredData({ data }: SoftwareAddOnPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SoftwareHelpPropertyStructuredDataProps { data: SoftwareHelpPropertyInput; }
export function SoftwareHelpPropertyStructuredData({ data }: SoftwareHelpPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SoftwareRequirementsPropertyStructuredDataProps { data: SoftwareRequirementsPropertyInput; }
export function SoftwareRequirementsPropertyStructuredData({ data }: SoftwareRequirementsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SoftwareVersionPropertyStructuredDataProps { data: SoftwareVersionPropertyInput; }
export function SoftwareVersionPropertyStructuredData({ data }: SoftwareVersionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SourceOrganizationPropertyStructuredDataProps { data: SourceOrganizationPropertyInput; }
export function SourceOrganizationPropertyStructuredData({ data }: SourceOrganizationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SpatialPropertyStructuredDataProps { data: SpatialPropertyInput; }
export function SpatialPropertyStructuredData({ data }: SpatialPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SpatialCoveragePropertyStructuredDataProps { data: SpatialCoveragePropertyInput; }
export function SpatialCoveragePropertyStructuredData({ data }: SpatialCoveragePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SpeakablePropertyStructuredDataProps { data: SpeakablePropertyInput; }
export function SpeakablePropertyStructuredData({ data }: SpeakablePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SpecialOpeningHoursSpecificationPropertyStructuredDataProps { data: SpecialOpeningHoursSpecificationPropertyInput; }
export function SpecialOpeningHoursSpecificationPropertyStructuredData({ data }: SpecialOpeningHoursSpecificationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SpecialtyPropertyStructuredDataProps { data: SpecialtyPropertyInput; }
export function SpecialtyPropertyStructuredData({ data }: SpecialtyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SponsorPropertyStructuredDataProps { data: SponsorPropertyInput; }
export function SponsorPropertyStructuredData({ data }: SponsorPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SpousePropertyStructuredDataProps { data: SpousePropertyInput; }
export function SpousePropertyStructuredData({ data }: SpousePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface StagePropertyStructuredDataProps { data: StagePropertyInput; }
export function StagePropertyStructuredData({ data }: StagePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface StageAsNumberPropertyStructuredDataProps { data: StageAsNumberPropertyInput; }
export function StageAsNumberPropertyStructuredData({ data }: StageAsNumberPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface StartDatePropertyStructuredDataProps { data: StartDatePropertyInput; }
export function StartDatePropertyStructuredData({ data }: StartDatePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface StartOffsetPropertyStructuredDataProps { data: StartOffsetPropertyInput; }
export function StartOffsetPropertyStructuredData({ data }: StartOffsetPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface StartTimePropertyStructuredDataProps { data: StartTimePropertyInput; }
export function StartTimePropertyStructuredData({ data }: StartTimePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface StatTypePropertyStructuredDataProps { data: StatTypePropertyInput; }
export function StatTypePropertyStructuredData({ data }: StatTypePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface StatusPropertyStructuredDataProps { data: StatusPropertyInput; }
export function StatusPropertyStructuredData({ data }: StatusPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface StepPropertyStructuredDataProps { data: StepPropertyInput; }
export function StepPropertyStructuredData({ data }: StepPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface StepsPropertyStructuredDataProps { data: StepsPropertyInput; }
export function StepsPropertyStructuredData({ data }: StepsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface StorageRequirementsPropertyStructuredDataProps { data: StorageRequirementsPropertyInput; }
export function StorageRequirementsPropertyStructuredData({ data }: StorageRequirementsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface StreetAddressPropertyStructuredDataProps { data: StreetAddressPropertyInput; }
export function StreetAddressPropertyStructuredData({ data }: StreetAddressPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface StrengthUnitPropertyStructuredDataProps { data: StrengthUnitPropertyInput; }
export function StrengthUnitPropertyStructuredData({ data }: StrengthUnitPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface StrengthValuePropertyStructuredDataProps { data: StrengthValuePropertyInput; }
export function StrengthValuePropertyStructuredData({ data }: StrengthValuePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface StudyPropertyStructuredDataProps { data: StudyPropertyInput; }
export function StudyPropertyStructuredData({ data }: StudyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface StudyLocationPropertyStructuredDataProps { data: StudyLocationPropertyInput; }
export function StudyLocationPropertyStructuredData({ data }: StudyLocationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface StudySubjectPropertyStructuredDataProps { data: StudySubjectPropertyInput; }
export function StudySubjectPropertyStructuredData({ data }: StudySubjectPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SubEventPropertyStructuredDataProps { data: SubEventPropertyInput; }
export function SubEventPropertyStructuredData({ data }: SubEventPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SubEventsPropertyStructuredDataProps { data: SubEventsPropertyInput; }
export function SubEventsPropertyStructuredData({ data }: SubEventsPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SubjectOfPropertyStructuredDataProps { data: SubjectOfPropertyInput; }
export function SubjectOfPropertyStructuredData({ data }: SubjectOfPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SubOrganizationPropertyStructuredDataProps { data: SubOrganizationPropertyInput; }
export function SubOrganizationPropertyStructuredData({ data }: SubOrganizationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SubStageSuffixPropertyStructuredDataProps { data: SubStageSuffixPropertyInput; }
export function SubStageSuffixPropertyStructuredData({ data }: SubStageSuffixPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SubStructurePropertyStructuredDataProps { data: SubStructurePropertyInput; }
export function SubStructurePropertyStructuredData({ data }: SubStructurePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SubTripPropertyStructuredDataProps { data: SubTripPropertyInput; }
export function SubTripPropertyStructuredData({ data }: SubTripPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SuccessorOfPropertyStructuredDataProps { data: SuccessorOfPropertyInput; }
export function SuccessorOfPropertyStructuredData({ data }: SuccessorOfPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SugarContentPropertyStructuredDataProps { data: SugarContentPropertyInput; }
export function SugarContentPropertyStructuredData({ data }: SugarContentPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SuggestedAgePropertyStructuredDataProps { data: SuggestedAgePropertyInput; }
export function SuggestedAgePropertyStructuredData({ data }: SuggestedAgePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SuggestedGenderPropertyStructuredDataProps { data: SuggestedGenderPropertyInput; }
export function SuggestedGenderPropertyStructuredData({ data }: SuggestedGenderPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SuggestedMaxAgePropertyStructuredDataProps { data: SuggestedMaxAgePropertyInput; }
export function SuggestedMaxAgePropertyStructuredData({ data }: SuggestedMaxAgePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SuggestedMeasurementPropertyStructuredDataProps { data: SuggestedMeasurementPropertyInput; }
export function SuggestedMeasurementPropertyStructuredData({ data }: SuggestedMeasurementPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SuggestedMinAgePropertyStructuredDataProps { data: SuggestedMinAgePropertyInput; }
export function SuggestedMinAgePropertyStructuredData({ data }: SuggestedMinAgePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SuitableForDietPropertyStructuredDataProps { data: SuitableForDietPropertyInput; }
export function SuitableForDietPropertyStructuredData({ data }: SuitableForDietPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SuperEventPropertyStructuredDataProps { data: SuperEventPropertyInput; }
export function SuperEventPropertyStructuredData({ data }: SuperEventPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SupersededByPropertyStructuredDataProps { data: SupersededByPropertyInput; }
export function SupersededByPropertyStructuredData({ data }: SupersededByPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SupplyPropertyStructuredDataProps { data: SupplyPropertyInput; }
export function SupplyPropertyStructuredData({ data }: SupplyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface SupportingDataPropertyStructuredDataProps { data: SupportingDataPropertyInput; }
export function SupportingDataPropertyStructuredData({ data }: SupportingDataPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TargetPropertyStructuredDataProps { data: TargetPropertyInput; }
export function TargetPropertyStructuredData({ data }: TargetPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TargetDescriptionPropertyStructuredDataProps { data: TargetDescriptionPropertyInput; }
export function TargetDescriptionPropertyStructuredData({ data }: TargetDescriptionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TargetNamePropertyStructuredDataProps { data: TargetNamePropertyInput; }
export function TargetNamePropertyStructuredData({ data }: TargetNamePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TargetPopulationPropertyStructuredDataProps { data: TargetPopulationPropertyInput; }
export function TargetPopulationPropertyStructuredData({ data }: TargetPopulationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TargetUrlPropertyStructuredDataProps { data: TargetUrlPropertyInput; }
export function TargetUrlPropertyStructuredData({ data }: TargetUrlPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TaxIDPropertyStructuredDataProps { data: TaxIDPropertyInput; }
export function TaxIDPropertyStructuredData({ data }: TaxIDPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TaxonomicRangePropertyStructuredDataProps { data: TaxonomicRangePropertyInput; }
export function TaxonomicRangePropertyStructuredData({ data }: TaxonomicRangePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TaxonRankPropertyStructuredDataProps { data: TaxonRankPropertyInput; }
export function TaxonRankPropertyStructuredData({ data }: TaxonRankPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TeachesPropertyStructuredDataProps { data: TeachesPropertyInput; }
export function TeachesPropertyStructuredData({ data }: TeachesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TelephonePropertyStructuredDataProps { data: TelephonePropertyInput; }
export function TelephonePropertyStructuredData({ data }: TelephonePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TemporalPropertyStructuredDataProps { data: TemporalPropertyInput; }
export function TemporalPropertyStructuredData({ data }: TemporalPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TemporalCoveragePropertyStructuredDataProps { data: TemporalCoveragePropertyInput; }
export function TemporalCoveragePropertyStructuredData({ data }: TemporalCoveragePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TermCodePropertyStructuredDataProps { data: TermCodePropertyInput; }
export function TermCodePropertyStructuredData({ data }: TermCodePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TermsOfServicePropertyStructuredDataProps { data: TermsOfServicePropertyInput; }
export function TermsOfServicePropertyStructuredData({ data }: TermsOfServicePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TextPropertyStructuredDataProps { data: TextPropertyInput; }
export function TextPropertyStructuredData({ data }: TextPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ThumbnailPropertyStructuredDataProps { data: ThumbnailPropertyInput; }
export function ThumbnailPropertyStructuredData({ data }: ThumbnailPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ThumbnailUrlPropertyStructuredDataProps { data: ThumbnailUrlPropertyInput; }
export function ThumbnailUrlPropertyStructuredData({ data }: ThumbnailUrlPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TimeRequiredPropertyStructuredDataProps { data: TimeRequiredPropertyInput; }
export function TimeRequiredPropertyStructuredData({ data }: TimeRequiredPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TocContinuationPropertyStructuredDataProps { data: TocContinuationPropertyInput; }
export function TocContinuationPropertyStructuredData({ data }: TocContinuationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ToolPropertyStructuredDataProps { data: ToolPropertyInput; }
export function ToolPropertyStructuredData({ data }: ToolPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TotalTimePropertyStructuredDataProps { data: TotalTimePropertyInput; }
export function TotalTimePropertyStructuredData({ data }: TotalTimePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TourBookingPagePropertyStructuredDataProps { data: TourBookingPagePropertyInput; }
export function TourBookingPagePropertyStructuredData({ data }: TourBookingPagePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TrackPropertyStructuredDataProps { data: TrackPropertyInput; }
export function TrackPropertyStructuredData({ data }: TrackPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TracksPropertyStructuredDataProps { data: TracksPropertyInput; }
export function TracksPropertyStructuredData({ data }: TracksPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TrailerPropertyStructuredDataProps { data: TrailerPropertyInput; }
export function TrailerPropertyStructuredData({ data }: TrailerPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TranscriptPropertyStructuredDataProps { data: TranscriptPropertyInput; }
export function TranscriptPropertyStructuredData({ data }: TranscriptPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TransFatContentPropertyStructuredDataProps { data: TransFatContentPropertyInput; }
export function TransFatContentPropertyStructuredData({ data }: TransFatContentPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TransitTimePropertyStructuredDataProps { data: TransitTimePropertyInput; }
export function TransitTimePropertyStructuredData({ data }: TransitTimePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TranslationOfWorkPropertyStructuredDataProps { data: TranslationOfWorkPropertyInput; }
export function TranslationOfWorkPropertyStructuredData({ data }: TranslationOfWorkPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TranslatorPropertyStructuredDataProps { data: TranslatorPropertyInput; }
export function TranslatorPropertyStructuredData({ data }: TranslatorPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TripOriginPropertyStructuredDataProps { data: TripOriginPropertyInput; }
export function TripOriginPropertyStructuredData({ data }: TripOriginPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TypeOfGoodPropertyStructuredDataProps { data: TypeOfGoodPropertyInput; }
export function TypeOfGoodPropertyStructuredData({ data }: TypeOfGoodPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TypicalAgeRangePropertyStructuredDataProps { data: TypicalAgeRangePropertyInput; }
export function TypicalAgeRangePropertyStructuredData({ data }: TypicalAgeRangePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface TypicalTestPropertyStructuredDataProps { data: TypicalTestPropertyInput; }
export function TypicalTestPropertyStructuredData({ data }: TypicalTestPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface UnitCodePropertyStructuredDataProps { data: UnitCodePropertyInput; }
export function UnitCodePropertyStructuredData({ data }: UnitCodePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface UnitTextPropertyStructuredDataProps { data: UnitTextPropertyInput; }
export function UnitTextPropertyStructuredData({ data }: UnitTextPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface UnnamedSourcesPolicyPropertyStructuredDataProps { data: UnnamedSourcesPolicyPropertyInput; }
export function UnnamedSourcesPolicyPropertyStructuredData({ data }: UnnamedSourcesPolicyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface UnsaturatedFatContentPropertyStructuredDataProps { data: UnsaturatedFatContentPropertyInput; }
export function UnsaturatedFatContentPropertyStructuredData({ data }: UnsaturatedFatContentPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface UploadDatePropertyStructuredDataProps { data: UploadDatePropertyInput; }
export function UploadDatePropertyStructuredData({ data }: UploadDatePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface UpvoteCountPropertyStructuredDataProps { data: UpvoteCountPropertyInput; }
export function UpvoteCountPropertyStructuredData({ data }: UpvoteCountPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface UrlPropertyStructuredDataProps { data: UrlPropertyInput; }
export function UrlPropertyStructuredData({ data }: UrlPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface UrlTemplatePropertyStructuredDataProps { data: UrlTemplatePropertyInput; }
export function UrlTemplatePropertyStructuredData({ data }: UrlTemplatePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface UsageInfoPropertyStructuredDataProps { data: UsageInfoPropertyInput; }
export function UsageInfoPropertyStructuredData({ data }: UsageInfoPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface UsedToDiagnosePropertyStructuredDataProps { data: UsedToDiagnosePropertyInput; }
export function UsedToDiagnosePropertyStructuredData({ data }: UsedToDiagnosePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface UserInteractionCountPropertyStructuredDataProps { data: UserInteractionCountPropertyInput; }
export function UserInteractionCountPropertyStructuredData({ data }: UserInteractionCountPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface UsesDevicePropertyStructuredDataProps { data: UsesDevicePropertyInput; }
export function UsesDevicePropertyStructuredData({ data }: UsesDevicePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface UsesHealthPlanIdStandardPropertyStructuredDataProps { data: UsesHealthPlanIdStandardPropertyInput; }
export function UsesHealthPlanIdStandardPropertyStructuredData({ data }: UsesHealthPlanIdStandardPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface UtterancesPropertyStructuredDataProps { data: UtterancesPropertyInput; }
export function UtterancesPropertyStructuredData({ data }: UtterancesPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ValidForPropertyStructuredDataProps { data: ValidForPropertyInput; }
export function ValidForPropertyStructuredData({ data }: ValidForPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ValidForMemberTierPropertyStructuredDataProps { data: ValidForMemberTierPropertyInput; }
export function ValidForMemberTierPropertyStructuredData({ data }: ValidForMemberTierPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ValidFromPropertyStructuredDataProps { data: ValidFromPropertyInput; }
export function ValidFromPropertyStructuredData({ data }: ValidFromPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ValidInPropertyStructuredDataProps { data: ValidInPropertyInput; }
export function ValidInPropertyStructuredData({ data }: ValidInPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ValidThroughPropertyStructuredDataProps { data: ValidThroughPropertyInput; }
export function ValidThroughPropertyStructuredData({ data }: ValidThroughPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ValuePropertyStructuredDataProps { data: ValuePropertyInput; }
export function ValuePropertyStructuredData({ data }: ValuePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ValueAddedTaxIncludedPropertyStructuredDataProps { data: ValueAddedTaxIncludedPropertyInput; }
export function ValueAddedTaxIncludedPropertyStructuredData({ data }: ValueAddedTaxIncludedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface ValueReferencePropertyStructuredDataProps { data: ValueReferencePropertyInput; }
export function ValueReferencePropertyStructuredData({ data }: ValueReferencePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface VariableMeasuredPropertyStructuredDataProps { data: VariableMeasuredPropertyInput; }
export function VariableMeasuredPropertyStructuredData({ data }: VariableMeasuredPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface VariesByPropertyStructuredDataProps { data: VariesByPropertyInput; }
export function VariesByPropertyStructuredData({ data }: VariesByPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface VatIDPropertyStructuredDataProps { data: VatIDPropertyInput; }
export function VatIDPropertyStructuredData({ data }: VatIDPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface VersionPropertyStructuredDataProps { data: VersionPropertyInput; }
export function VersionPropertyStructuredData({ data }: VersionPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface VideoPropertyStructuredDataProps { data: VideoPropertyInput; }
export function VideoPropertyStructuredData({ data }: VideoPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface VideoFormatPropertyStructuredDataProps { data: VideoFormatPropertyInput; }
export function VideoFormatPropertyStructuredData({ data }: VideoFormatPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface VideoFrameSizePropertyStructuredDataProps { data: VideoFrameSizePropertyInput; }
export function VideoFrameSizePropertyStructuredData({ data }: VideoFrameSizePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface VideoQualityPropertyStructuredDataProps { data: VideoQualityPropertyInput; }
export function VideoQualityPropertyStructuredData({ data }: VideoQualityPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface WarningPropertyStructuredDataProps { data: WarningPropertyInput; }
export function WarningPropertyStructuredData({ data }: WarningPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface WarrantyPropertyStructuredDataProps { data: WarrantyPropertyInput; }
export function WarrantyPropertyStructuredData({ data }: WarrantyPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface WarrantyScopePropertyStructuredDataProps { data: WarrantyScopePropertyInput; }
export function WarrantyScopePropertyStructuredData({ data }: WarrantyScopePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface WeightPropertyStructuredDataProps { data: WeightPropertyInput; }
export function WeightPropertyStructuredData({ data }: WeightPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface WeightPercentagePropertyStructuredDataProps { data: WeightPercentagePropertyInput; }
export function WeightPercentagePropertyStructuredData({ data }: WeightPercentagePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface WidthPropertyStructuredDataProps { data: WidthPropertyInput; }
export function WidthPropertyStructuredData({ data }: WidthPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface WordCountPropertyStructuredDataProps { data: WordCountPropertyInput; }
export function WordCountPropertyStructuredData({ data }: WordCountPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface WorkExamplePropertyStructuredDataProps { data: WorkExamplePropertyInput; }
export function WorkExamplePropertyStructuredData({ data }: WorkExamplePropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface WorkFeaturedPropertyStructuredDataProps { data: WorkFeaturedPropertyInput; }
export function WorkFeaturedPropertyStructuredData({ data }: WorkFeaturedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface WorkLocationPropertyStructuredDataProps { data: WorkLocationPropertyInput; }
export function WorkLocationPropertyStructuredData({ data }: WorkLocationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface WorkPerformedPropertyStructuredDataProps { data: WorkPerformedPropertyInput; }
export function WorkPerformedPropertyStructuredData({ data }: WorkPerformedPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface WorksForPropertyStructuredDataProps { data: WorksForPropertyInput; }
export function WorksForPropertyStructuredData({ data }: WorksForPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface WorkTranslationPropertyStructuredDataProps { data: WorkTranslationPropertyInput; }
export function WorkTranslationPropertyStructuredData({ data }: WorkTranslationPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface WorstRatingPropertyStructuredDataProps { data: WorstRatingPropertyInput; }
export function WorstRatingPropertyStructuredData({ data }: WorstRatingPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface XpathPropertyStructuredDataProps { data: XpathPropertyInput; }
export function XpathPropertyStructuredData({ data }: XpathPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export interface YieldPropertyStructuredDataProps { data: YieldPropertyInput; }
export function YieldPropertyStructuredData({ data }: YieldPropertyStructuredDataProps) {
  return <ObjectStructuredData data={data} />;
}

export const generatedPageFamilyIntentRegistry = Object.freeze({
  "AnatomicalStructure": {
    componentName: "AnatomicalStructureStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AnatomicalStructureStructuredData data={intent.data as AnatomicalStructureInput} />,
  },
  "AnatomicalSystem": {
    componentName: "AnatomicalSystemStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AnatomicalSystemStructuredData data={intent.data as AnatomicalSystemInput} />,
  },
  "BioChemEntity": {
    componentName: "BioChemEntityStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BioChemEntityStructuredData data={intent.data as BioChemEntityInput} />,
  },
  "cmns-cls_Classifier": {
    componentName: "CmnsClsClassifierStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CmnsClsClassifierStructuredData data={intent.data as CmnsClsClassifierInput} />,
  },
  "cmns-col_Collection": {
    componentName: "CmnsColCollectionStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CmnsColCollectionStructuredData data={intent.data as CmnsColCollectionInput} />,
  },
  "cmns-ge_GeopoliticalEntity": {
    componentName: "CmnsGeGeopoliticalEntityStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CmnsGeGeopoliticalEntityStructuredData data={intent.data as CmnsGeGeopoliticalEntityInput} />,
  },
  "DDxElement": {
    componentName: "DDxElementStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DDxElementStructuredData data={intent.data as DDxElementInput} />,
  },
  "Diet": {
    componentName: "DietStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DietStructuredData data={intent.data as DietInput} />,
  },
  "DoseSchedule": {
    componentName: "DoseScheduleStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DoseScheduleStructuredData data={intent.data as DoseScheduleInput} />,
  },
  "Drug": {
    componentName: "DrugStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DrugStructuredData data={intent.data as DrugInput} />,
  },
  "DrugClass": {
    componentName: "DrugClassStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DrugClassStructuredData data={intent.data as DrugClassInput} />,
  },
  "DrugLegalStatus": {
    componentName: "DrugLegalStatusStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DrugLegalStatusStructuredData data={intent.data as DrugLegalStatusInput} />,
  },
  "DrugStrength": {
    componentName: "DrugStrengthStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DrugStrengthStructuredData data={intent.data as DrugStrengthInput} />,
  },
  "fibo-fnd-agr-ctr_MutualContractualAgreement": {
    componentName: "FiboFndAgrCtrMutualContractualAgreementStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FiboFndAgrCtrMutualContractualAgreementStructuredData data={intent.data as FiboFndAgrCtrMutualContractualAgreementInput} />,
  },
  "fibo-fnd-arr-doc_Certificate": {
    componentName: "FiboFndArrDocCertificateStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FiboFndArrDocCertificateStructuredData data={intent.data as FiboFndArrDocCertificateInput} />,
  },
  "PaymentCard": {
    componentName: "PaymentCardStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PaymentCardStructuredData data={intent.data as PaymentCardInput} />,
  },
  "PaymentMethod": {
    componentName: "PaymentMethodStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PaymentMethodStructuredData data={intent.data as PaymentMethodInput} />,
  },
  "PeopleAudience": {
    componentName: "PeopleAudienceStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PeopleAudienceStructuredData data={intent.data as PeopleAudienceInput} />,
  },
  "PerformingGroup": {
    componentName: "PerformingGroupStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PerformingGroupStructuredData data={intent.data as PerformingGroupInput} />,
  },
  "Person": {
    componentName: "PersonStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PersonStructuredData data={intent.data as PersonInput} />,
  },
  "Photograph": {
    componentName: "PhotographStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PhotographStructuredData data={intent.data as PhotographInput} />,
  },
  "Place": {
    componentName: "PlaceStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PlaceStructuredData data={intent.data as PlaceInput} />,
  },
  "PostalAddress": {
    componentName: "PostalAddressStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PostalAddressStructuredData data={intent.data as PostalAddressInput} />,
  },
  "PostalCodeRangeSpecification": {
    componentName: "PostalCodeRangeSpecificationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PostalCodeRangeSpecificationStructuredData data={intent.data as PostalCodeRangeSpecificationInput} />,
  },
  "PriceSpecification": {
    componentName: "PriceSpecificationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PriceSpecificationStructuredData data={intent.data as PriceSpecificationInput} />,
  },
  "Boolean": {
    componentName: "BooleanStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BooleanStructuredData data={intent.data as BooleanInput} />,
  },
  "Date": {
    componentName: "DateStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DateStructuredData data={intent.data as DateInput} />,
  },
  "DateTime": {
    componentName: "DateTimeStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DateTimeStructuredData data={intent.data as DateTimeInput} />,
  },
  "Number": {
    componentName: "NumberStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <NumberStructuredData data={intent.data as NumberInput} />,
  },
  "Quantity": {
    componentName: "QuantityStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <QuantityStructuredData data={intent.data as QuantityInput} />,
  },
  "Text": {
    componentName: "TextStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TextStructuredData data={intent.data as TextInput} />,
  },
  "Time": {
    componentName: "TimeStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TimeStructuredData data={intent.data as TimeInput} />,
  },
  "ActionStatusType": {
    componentName: "ActionStatusTypeStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ActionStatusTypeStructuredData data={intent.data as ActionStatusTypeInput} />,
  },
  "AdultOrientedEnumeration": {
    componentName: "AdultOrientedEnumerationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AdultOrientedEnumerationStructuredData data={intent.data as AdultOrientedEnumerationInput} />,
  },
  "BusinessEntityType": {
    componentName: "BusinessEntityTypeStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BusinessEntityTypeStructuredData data={intent.data as BusinessEntityTypeInput} />,
  },
  "BusinessFunction": {
    componentName: "BusinessFunctionStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BusinessFunctionStructuredData data={intent.data as BusinessFunctionInput} />,
  },
  "CertificationStatusEnumeration": {
    componentName: "CertificationStatusEnumerationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CertificationStatusEnumerationStructuredData data={intent.data as CertificationStatusEnumerationInput} />,
  },
  "ContactPointOption": {
    componentName: "ContactPointOptionStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ContactPointOptionStructuredData data={intent.data as ContactPointOptionInput} />,
  },
  "DayOfWeek": {
    componentName: "DayOfWeekStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DayOfWeekStructuredData data={intent.data as DayOfWeekInput} />,
  },
  "DeliveryMethod": {
    componentName: "DeliveryMethodStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DeliveryMethodStructuredData data={intent.data as DeliveryMethodInput} />,
  },
  "DigitalPlatformEnumeration": {
    componentName: "DigitalPlatformEnumerationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DigitalPlatformEnumerationStructuredData data={intent.data as DigitalPlatformEnumerationInput} />,
  },
  "DrugPregnancyCategory": {
    componentName: "DrugPregnancyCategoryStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DrugPregnancyCategoryStructuredData data={intent.data as DrugPregnancyCategoryInput} />,
  },
  "DrugPrescriptionStatus": {
    componentName: "DrugPrescriptionStatusStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DrugPrescriptionStatusStructuredData data={intent.data as DrugPrescriptionStatusInput} />,
  },
  "EnergyEfficiencyEnumeration": {
    componentName: "EnergyEfficiencyEnumerationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EnergyEfficiencyEnumerationStructuredData data={intent.data as EnergyEfficiencyEnumerationInput} />,
  },
  "EUEnergyEfficiencyEnumeration": {
    componentName: "EUEnergyEfficiencyEnumerationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EUEnergyEfficiencyEnumerationStructuredData data={intent.data as EUEnergyEfficiencyEnumerationInput} />,
  },
  "EventAttendanceModeEnumeration": {
    componentName: "EventAttendanceModeEnumerationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EventAttendanceModeEnumerationStructuredData data={intent.data as EventAttendanceModeEnumerationInput} />,
  },
  "EventStatusType": {
    componentName: "EventStatusTypeStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EventStatusTypeStructuredData data={intent.data as EventStatusTypeInput} />,
  },
  "FulfillmentTypeEnumeration": {
    componentName: "FulfillmentTypeEnumerationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FulfillmentTypeEnumerationStructuredData data={intent.data as FulfillmentTypeEnumerationInput} />,
  },
  "GenderType": {
    componentName: "GenderTypeStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GenderTypeStructuredData data={intent.data as GenderTypeInput} />,
  },
  "GovernmentBenefitsType": {
    componentName: "GovernmentBenefitsTypeStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GovernmentBenefitsTypeStructuredData data={intent.data as GovernmentBenefitsTypeInput} />,
  },
  "IPTCDigitalSourceEnumeration": {
    componentName: "IPTCDigitalSourceEnumerationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IPTCDigitalSourceEnumerationStructuredData data={intent.data as IPTCDigitalSourceEnumerationInput} />,
  },
  "ItemAvailability": {
    componentName: "ItemAvailabilityStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ItemAvailabilityStructuredData data={intent.data as ItemAvailabilityInput} />,
  },
  "ItemListOrderType": {
    componentName: "ItemListOrderTypeStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ItemListOrderTypeStructuredData data={intent.data as ItemListOrderTypeInput} />,
  },
  "MapCategoryType": {
    componentName: "MapCategoryTypeStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MapCategoryTypeStructuredData data={intent.data as MapCategoryTypeInput} />,
  },
  "MeasurementMethodEnum": {
    componentName: "MeasurementMethodEnumStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MeasurementMethodEnumStructuredData data={intent.data as MeasurementMethodEnumInput} />,
  },
  "MeasurementTypeEnumeration": {
    componentName: "MeasurementTypeEnumerationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MeasurementTypeEnumerationStructuredData data={intent.data as MeasurementTypeEnumerationInput} />,
  },
  "MediaEnumeration": {
    componentName: "MediaEnumerationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MediaEnumerationStructuredData data={intent.data as MediaEnumerationInput} />,
  },
  "MedicalAudienceType": {
    componentName: "MedicalAudienceTypeStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MedicalAudienceTypeStructuredData data={intent.data as MedicalAudienceTypeInput} />,
  },
  "MedicalEnumeration": {
    componentName: "MedicalEnumerationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MedicalEnumerationStructuredData data={intent.data as MedicalEnumerationInput} />,
  },
  "MedicalEvidenceLevel": {
    componentName: "MedicalEvidenceLevelStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MedicalEvidenceLevelStructuredData data={intent.data as MedicalEvidenceLevelInput} />,
  },
  "MedicalProcedureType": {
    componentName: "MedicalProcedureTypeStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MedicalProcedureTypeStructuredData data={intent.data as MedicalProcedureTypeInput} />,
  },
  "MedicalSpecialty": {
    componentName: "MedicalSpecialtyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MedicalSpecialtyStructuredData data={intent.data as MedicalSpecialtyInput} />,
  },
  "MedicalStudyStatus": {
    componentName: "MedicalStudyStatusStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MedicalStudyStatusStructuredData data={intent.data as MedicalStudyStatusInput} />,
  },
  "MedicineSystem": {
    componentName: "MedicineSystemStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MedicineSystemStructuredData data={intent.data as MedicineSystemInput} />,
  },
  "MerchantReturnEnumeration": {
    componentName: "MerchantReturnEnumerationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MerchantReturnEnumerationStructuredData data={intent.data as MerchantReturnEnumerationInput} />,
  },
  "MusicAlbumProductionType": {
    componentName: "MusicAlbumProductionTypeStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MusicAlbumProductionTypeStructuredData data={intent.data as MusicAlbumProductionTypeInput} />,
  },
  "MusicAlbumReleaseType": {
    componentName: "MusicAlbumReleaseTypeStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MusicAlbumReleaseTypeStructuredData data={intent.data as MusicAlbumReleaseTypeInput} />,
  },
  "MusicReleaseFormatType": {
    componentName: "MusicReleaseFormatTypeStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MusicReleaseFormatTypeStructuredData data={intent.data as MusicReleaseFormatTypeInput} />,
  },
  "NonprofitType": {
    componentName: "NonprofitTypeStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <NonprofitTypeStructuredData data={intent.data as NonprofitTypeInput} />,
  },
  "OfferItemCondition": {
    componentName: "OfferItemConditionStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <OfferItemConditionStructuredData data={intent.data as OfferItemConditionInput} />,
  },
  "PaymentMethodType": {
    componentName: "PaymentMethodTypeStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PaymentMethodTypeStructuredData data={intent.data as PaymentMethodTypeInput} />,
  },
  "PhysicalActivityCategory": {
    componentName: "PhysicalActivityCategoryStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PhysicalActivityCategoryStructuredData data={intent.data as PhysicalActivityCategoryInput} />,
  },
  "PhysicalExam": {
    componentName: "PhysicalExamStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PhysicalExamStructuredData data={intent.data as PhysicalExamInput} />,
  },
  "PriceComponentTypeEnumeration": {
    componentName: "PriceComponentTypeEnumerationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PriceComponentTypeEnumerationStructuredData data={intent.data as PriceComponentTypeEnumerationInput} />,
  },
  "PriceTypeEnumeration": {
    componentName: "PriceTypeEnumerationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PriceTypeEnumerationStructuredData data={intent.data as PriceTypeEnumerationInput} />,
  },
  "QualitativeValue": {
    componentName: "QualitativeValueStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <QualitativeValueStructuredData data={intent.data as QualitativeValueInput} />,
  },
  "RefundTypeEnumeration": {
    componentName: "RefundTypeEnumerationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RefundTypeEnumerationStructuredData data={intent.data as RefundTypeEnumerationInput} />,
  },
  "RestrictedDiet": {
    componentName: "RestrictedDietStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RestrictedDietStructuredData data={intent.data as RestrictedDietInput} />,
  },
  "ReturnFeesEnumeration": {
    componentName: "ReturnFeesEnumerationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReturnFeesEnumerationStructuredData data={intent.data as ReturnFeesEnumerationInput} />,
  },
  "ReturnLabelSourceEnumeration": {
    componentName: "ReturnLabelSourceEnumerationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReturnLabelSourceEnumerationStructuredData data={intent.data as ReturnLabelSourceEnumerationInput} />,
  },
  "ReturnMethodEnumeration": {
    componentName: "ReturnMethodEnumerationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReturnMethodEnumerationStructuredData data={intent.data as ReturnMethodEnumerationInput} />,
  },
  "SizeSpecification": {
    componentName: "SizeSpecificationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SizeSpecificationStructuredData data={intent.data as SizeSpecificationInput} />,
  },
  "Specialty": {
    componentName: "SpecialtyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SpecialtyStructuredData data={intent.data as SpecialtyInput} />,
  },
  "StatusEnumeration": {
    componentName: "StatusEnumerationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <StatusEnumerationStructuredData data={intent.data as StatusEnumerationInput} />,
  },
  "TierBenefitEnumeration": {
    componentName: "TierBenefitEnumerationStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TierBenefitEnumerationStructuredData data={intent.data as TierBenefitEnumerationInput} />,
  },
  "WarrantyScope": {
    componentName: "WarrantyScopeStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <WarrantyScopeStructuredData data={intent.data as WarrantyScopeInput} />,
  },
  "about": {
    componentName: "AboutPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AboutPropertyStructuredData data={intent.data as AboutPropertyInput} />,
  },
  "abstract": {
    componentName: "AbstractPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AbstractPropertyStructuredData data={intent.data as AbstractPropertyInput} />,
  },
  "acceptedPaymentMethod": {
    componentName: "AcceptedPaymentMethodPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AcceptedPaymentMethodPropertyStructuredData data={intent.data as AcceptedPaymentMethodPropertyInput} />,
  },
  "accessibilityAPI": {
    componentName: "AccessibilityAPIPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AccessibilityAPIPropertyStructuredData data={intent.data as AccessibilityAPIPropertyInput} />,
  },
  "accessibilityControl": {
    componentName: "AccessibilityControlPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AccessibilityControlPropertyStructuredData data={intent.data as AccessibilityControlPropertyInput} />,
  },
  "accessibilityFeature": {
    componentName: "AccessibilityFeaturePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AccessibilityFeaturePropertyStructuredData data={intent.data as AccessibilityFeaturePropertyInput} />,
  },
  "accessibilityHazard": {
    componentName: "AccessibilityHazardPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AccessibilityHazardPropertyStructuredData data={intent.data as AccessibilityHazardPropertyInput} />,
  },
  "accessibilitySummary": {
    componentName: "AccessibilitySummaryPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AccessibilitySummaryPropertyStructuredData data={intent.data as AccessibilitySummaryPropertyInput} />,
  },
  "accessMode": {
    componentName: "AccessModePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AccessModePropertyStructuredData data={intent.data as AccessModePropertyInput} />,
  },
  "accessModeSufficient": {
    componentName: "AccessModeSufficientPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AccessModeSufficientPropertyStructuredData data={intent.data as AccessModeSufficientPropertyInput} />,
  },
  "accountablePerson": {
    componentName: "AccountablePersonPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AccountablePersonPropertyStructuredData data={intent.data as AccountablePersonPropertyInput} />,
  },
  "acquireLicensePage": {
    componentName: "AcquireLicensePagePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AcquireLicensePagePropertyStructuredData data={intent.data as AcquireLicensePagePropertyInput} />,
  },
  "actionableFeedbackPolicy": {
    componentName: "ActionableFeedbackPolicyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ActionableFeedbackPolicyPropertyStructuredData data={intent.data as ActionableFeedbackPolicyPropertyInput} />,
  },
  "actionApplication": {
    componentName: "ActionApplicationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ActionApplicationPropertyStructuredData data={intent.data as ActionApplicationPropertyInput} />,
  },
  "actionPlatform": {
    componentName: "ActionPlatformPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ActionPlatformPropertyStructuredData data={intent.data as ActionPlatformPropertyInput} />,
  },
  "actionProcess": {
    componentName: "ActionProcessPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ActionProcessPropertyStructuredData data={intent.data as ActionProcessPropertyInput} />,
  },
  "actionStatus": {
    componentName: "ActionStatusPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ActionStatusPropertyStructuredData data={intent.data as ActionStatusPropertyInput} />,
  },
  "activeIngredient": {
    componentName: "ActiveIngredientPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ActiveIngredientPropertyStructuredData data={intent.data as ActiveIngredientPropertyInput} />,
  },
  "actor": {
    componentName: "ActorPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ActorPropertyStructuredData data={intent.data as ActorPropertyInput} />,
  },
  "actors": {
    componentName: "ActorsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ActorsPropertyStructuredData data={intent.data as ActorsPropertyInput} />,
  },
  "additionalName": {
    componentName: "AdditionalNamePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AdditionalNamePropertyStructuredData data={intent.data as AdditionalNamePropertyInput} />,
  },
  "additionalProperty": {
    componentName: "AdditionalPropertyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AdditionalPropertyPropertyStructuredData data={intent.data as AdditionalPropertyPropertyInput} />,
  },
  "additionalType": {
    componentName: "AdditionalTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AdditionalTypePropertyStructuredData data={intent.data as AdditionalTypePropertyInput} />,
  },
  "addOn": {
    componentName: "AddOnPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AddOnPropertyStructuredData data={intent.data as AddOnPropertyInput} />,
  },
  "address": {
    componentName: "AddressPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AddressPropertyStructuredData data={intent.data as AddressPropertyInput} />,
  },
  "addressCountry": {
    componentName: "AddressCountryPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AddressCountryPropertyStructuredData data={intent.data as AddressCountryPropertyInput} />,
  },
  "addressLocality": {
    componentName: "AddressLocalityPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AddressLocalityPropertyStructuredData data={intent.data as AddressLocalityPropertyInput} />,
  },
  "addressRegion": {
    componentName: "AddressRegionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AddressRegionPropertyStructuredData data={intent.data as AddressRegionPropertyInput} />,
  },
  "administrationRoute": {
    componentName: "AdministrationRoutePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AdministrationRoutePropertyStructuredData data={intent.data as AdministrationRoutePropertyInput} />,
  },
  "advanceBookingRequirement": {
    componentName: "AdvanceBookingRequirementPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AdvanceBookingRequirementPropertyStructuredData data={intent.data as AdvanceBookingRequirementPropertyInput} />,
  },
  "adverseOutcome": {
    componentName: "AdverseOutcomePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AdverseOutcomePropertyStructuredData data={intent.data as AdverseOutcomePropertyInput} />,
  },
  "affectedBy": {
    componentName: "AffectedByPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AffectedByPropertyStructuredData data={intent.data as AffectedByPropertyInput} />,
  },
  "affiliation": {
    componentName: "AffiliationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AffiliationPropertyStructuredData data={intent.data as AffiliationPropertyInput} />,
  },
  "agent": {
    componentName: "AgentPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AgentPropertyStructuredData data={intent.data as AgentPropertyInput} />,
  },
  "agentInteractionStatistic": {
    componentName: "AgentInteractionStatisticPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AgentInteractionStatisticPropertyStructuredData data={intent.data as AgentInteractionStatisticPropertyInput} />,
  },
  "aggregateElement": {
    componentName: "AggregateElementPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AggregateElementPropertyStructuredData data={intent.data as AggregateElementPropertyInput} />,
  },
  "aggregateRating": {
    componentName: "AggregateRatingPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AggregateRatingPropertyStructuredData data={intent.data as AggregateRatingPropertyInput} />,
  },
  "album": {
    componentName: "AlbumPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AlbumPropertyStructuredData data={intent.data as AlbumPropertyInput} />,
  },
  "albumProductionType": {
    componentName: "AlbumProductionTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AlbumProductionTypePropertyStructuredData data={intent.data as AlbumProductionTypePropertyInput} />,
  },
  "albumRelease": {
    componentName: "AlbumReleasePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AlbumReleasePropertyStructuredData data={intent.data as AlbumReleasePropertyInput} />,
  },
  "albumReleaseType": {
    componentName: "AlbumReleaseTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AlbumReleaseTypePropertyStructuredData data={intent.data as AlbumReleaseTypePropertyInput} />,
  },
  "albums": {
    componentName: "AlbumsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AlbumsPropertyStructuredData data={intent.data as AlbumsPropertyInput} />,
  },
  "alcoholWarning": {
    componentName: "AlcoholWarningPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AlcoholWarningPropertyStructuredData data={intent.data as AlcoholWarningPropertyInput} />,
  },
  "alignmentType": {
    componentName: "AlignmentTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AlignmentTypePropertyStructuredData data={intent.data as AlignmentTypePropertyInput} />,
  },
  "alternateName": {
    componentName: "AlternateNamePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AlternateNamePropertyStructuredData data={intent.data as AlternateNamePropertyInput} />,
  },
  "alternativeHeadline": {
    componentName: "AlternativeHeadlinePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AlternativeHeadlinePropertyStructuredData data={intent.data as AlternativeHeadlinePropertyInput} />,
  },
  "alternativeOf": {
    componentName: "AlternativeOfPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AlternativeOfPropertyStructuredData data={intent.data as AlternativeOfPropertyInput} />,
  },
  "alumni": {
    componentName: "AlumniPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AlumniPropertyStructuredData data={intent.data as AlumniPropertyInput} />,
  },
  "alumniOf": {
    componentName: "AlumniOfPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AlumniOfPropertyStructuredData data={intent.data as AlumniOfPropertyInput} />,
  },
  "amenityFeature": {
    componentName: "AmenityFeaturePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AmenityFeaturePropertyStructuredData data={intent.data as AmenityFeaturePropertyInput} />,
  },
  "amount": {
    componentName: "AmountPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AmountPropertyStructuredData data={intent.data as AmountPropertyInput} />,
  },
  "amountOfThisGood": {
    componentName: "AmountOfThisGoodPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AmountOfThisGoodPropertyStructuredData data={intent.data as AmountOfThisGoodPropertyInput} />,
  },
  "annualPercentageRate": {
    componentName: "AnnualPercentageRatePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AnnualPercentageRatePropertyStructuredData data={intent.data as AnnualPercentageRatePropertyInput} />,
  },
  "appearance": {
    componentName: "AppearancePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AppearancePropertyStructuredData data={intent.data as AppearancePropertyInput} />,
  },
  "applicableCountry": {
    componentName: "ApplicableCountryPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ApplicableCountryPropertyStructuredData data={intent.data as ApplicableCountryPropertyInput} />,
  },
  "applicableLocation": {
    componentName: "ApplicableLocationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ApplicableLocationPropertyStructuredData data={intent.data as ApplicableLocationPropertyInput} />,
  },
  "application": {
    componentName: "ApplicationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ApplicationPropertyStructuredData data={intent.data as ApplicationPropertyInput} />,
  },
  "applicationCategory": {
    componentName: "ApplicationCategoryPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ApplicationCategoryPropertyStructuredData data={intent.data as ApplicationCategoryPropertyInput} />,
  },
  "applicationSubCategory": {
    componentName: "ApplicationSubCategoryPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ApplicationSubCategoryPropertyStructuredData data={intent.data as ApplicationSubCategoryPropertyInput} />,
  },
  "applicationSuite": {
    componentName: "ApplicationSuitePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ApplicationSuitePropertyStructuredData data={intent.data as ApplicationSuitePropertyInput} />,
  },
  "appliesToDeliveryMethod": {
    componentName: "AppliesToDeliveryMethodPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AppliesToDeliveryMethodPropertyStructuredData data={intent.data as AppliesToDeliveryMethodPropertyInput} />,
  },
  "archivedAt": {
    componentName: "ArchivedAtPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ArchivedAtPropertyStructuredData data={intent.data as ArchivedAtPropertyInput} />,
  },
  "area": {
    componentName: "AreaPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AreaPropertyStructuredData data={intent.data as AreaPropertyInput} />,
  },
  "areaServed": {
    componentName: "AreaServedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AreaServedPropertyStructuredData data={intent.data as AreaServedPropertyInput} />,
  },
  "arrivalTime": {
    componentName: "ArrivalTimePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ArrivalTimePropertyStructuredData data={intent.data as ArrivalTimePropertyInput} />,
  },
  "articleBody": {
    componentName: "ArticleBodyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ArticleBodyPropertyStructuredData data={intent.data as ArticleBodyPropertyInput} />,
  },
  "articleSection": {
    componentName: "ArticleSectionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ArticleSectionPropertyStructuredData data={intent.data as ArticleSectionPropertyInput} />,
  },
  "asin": {
    componentName: "AsinPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AsinPropertyStructuredData data={intent.data as AsinPropertyInput} />,
  },
  "aspect": {
    componentName: "AspectPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AspectPropertyStructuredData data={intent.data as AspectPropertyInput} />,
  },
  "assesses": {
    componentName: "AssessesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AssessesPropertyStructuredData data={intent.data as AssessesPropertyInput} />,
  },
  "associatedAnatomy": {
    componentName: "AssociatedAnatomyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AssociatedAnatomyPropertyStructuredData data={intent.data as AssociatedAnatomyPropertyInput} />,
  },
  "associatedArticle": {
    componentName: "AssociatedArticlePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AssociatedArticlePropertyStructuredData data={intent.data as AssociatedArticlePropertyInput} />,
  },
  "associatedClaimReview": {
    componentName: "AssociatedClaimReviewPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AssociatedClaimReviewPropertyStructuredData data={intent.data as AssociatedClaimReviewPropertyInput} />,
  },
  "associatedDisease": {
    componentName: "AssociatedDiseasePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AssociatedDiseasePropertyStructuredData data={intent.data as AssociatedDiseasePropertyInput} />,
  },
  "associatedMedia": {
    componentName: "AssociatedMediaPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AssociatedMediaPropertyStructuredData data={intent.data as AssociatedMediaPropertyInput} />,
  },
  "associatedMediaReview": {
    componentName: "AssociatedMediaReviewPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AssociatedMediaReviewPropertyStructuredData data={intent.data as AssociatedMediaReviewPropertyInput} />,
  },
  "associatedPathophysiology": {
    componentName: "AssociatedPathophysiologyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AssociatedPathophysiologyPropertyStructuredData data={intent.data as AssociatedPathophysiologyPropertyInput} />,
  },
  "associatedReview": {
    componentName: "AssociatedReviewPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AssociatedReviewPropertyStructuredData data={intent.data as AssociatedReviewPropertyInput} />,
  },
  "attendee": {
    componentName: "AttendeePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AttendeePropertyStructuredData data={intent.data as AttendeePropertyInput} />,
  },
  "attendees": {
    componentName: "AttendeesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AttendeesPropertyStructuredData data={intent.data as AttendeesPropertyInput} />,
  },
  "audience": {
    componentName: "AudiencePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AudiencePropertyStructuredData data={intent.data as AudiencePropertyInput} />,
  },
  "audienceType": {
    componentName: "AudienceTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AudienceTypePropertyStructuredData data={intent.data as AudienceTypePropertyInput} />,
  },
  "audio": {
    componentName: "AudioPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AudioPropertyStructuredData data={intent.data as AudioPropertyInput} />,
  },
  "auditDate": {
    componentName: "AuditDatePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AuditDatePropertyStructuredData data={intent.data as AuditDatePropertyInput} />,
  },
  "authenticator": {
    componentName: "AuthenticatorPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AuthenticatorPropertyStructuredData data={intent.data as AuthenticatorPropertyInput} />,
  },
  "author": {
    componentName: "AuthorPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AuthorPropertyStructuredData data={intent.data as AuthorPropertyInput} />,
  },
  "availability": {
    componentName: "AvailabilityPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AvailabilityPropertyStructuredData data={intent.data as AvailabilityPropertyInput} />,
  },
  "availabilityEnds": {
    componentName: "AvailabilityEndsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AvailabilityEndsPropertyStructuredData data={intent.data as AvailabilityEndsPropertyInput} />,
  },
  "availabilityStarts": {
    componentName: "AvailabilityStartsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AvailabilityStartsPropertyStructuredData data={intent.data as AvailabilityStartsPropertyInput} />,
  },
  "availableAtOrFrom": {
    componentName: "AvailableAtOrFromPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AvailableAtOrFromPropertyStructuredData data={intent.data as AvailableAtOrFromPropertyInput} />,
  },
  "availableChannel": {
    componentName: "AvailableChannelPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AvailableChannelPropertyStructuredData data={intent.data as AvailableChannelPropertyInput} />,
  },
  "availableDeliveryMethod": {
    componentName: "AvailableDeliveryMethodPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AvailableDeliveryMethodPropertyStructuredData data={intent.data as AvailableDeliveryMethodPropertyInput} />,
  },
  "availableIn": {
    componentName: "AvailableInPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AvailableInPropertyStructuredData data={intent.data as AvailableInPropertyInput} />,
  },
  "availableLanguage": {
    componentName: "AvailableLanguagePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AvailableLanguagePropertyStructuredData data={intent.data as AvailableLanguagePropertyInput} />,
  },
  "availableOnDevice": {
    componentName: "AvailableOnDevicePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AvailableOnDevicePropertyStructuredData data={intent.data as AvailableOnDevicePropertyInput} />,
  },
  "availableStrength": {
    componentName: "AvailableStrengthPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AvailableStrengthPropertyStructuredData data={intent.data as AvailableStrengthPropertyInput} />,
  },
  "award": {
    componentName: "AwardPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AwardPropertyStructuredData data={intent.data as AwardPropertyInput} />,
  },
  "awards": {
    componentName: "AwardsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <AwardsPropertyStructuredData data={intent.data as AwardsPropertyInput} />,
  },
  "backstory": {
    componentName: "BackstoryPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BackstoryPropertyStructuredData data={intent.data as BackstoryPropertyInput} />,
  },
  "benefitsSummaryUrl": {
    componentName: "BenefitsSummaryUrlPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BenefitsSummaryUrlPropertyStructuredData data={intent.data as BenefitsSummaryUrlPropertyInput} />,
  },
  "bestRating": {
    componentName: "BestRatingPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BestRatingPropertyStructuredData data={intent.data as BestRatingPropertyInput} />,
  },
  "billingDuration": {
    componentName: "BillingDurationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BillingDurationPropertyStructuredData data={intent.data as BillingDurationPropertyInput} />,
  },
  "billingIncrement": {
    componentName: "BillingIncrementPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BillingIncrementPropertyStructuredData data={intent.data as BillingIncrementPropertyInput} />,
  },
  "billingStart": {
    componentName: "BillingStartPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BillingStartPropertyStructuredData data={intent.data as BillingStartPropertyInput} />,
  },
  "bioChemInteraction": {
    componentName: "BioChemInteractionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BioChemInteractionPropertyStructuredData data={intent.data as BioChemInteractionPropertyInput} />,
  },
  "bioChemSimilarity": {
    componentName: "BioChemSimilarityPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BioChemSimilarityPropertyStructuredData data={intent.data as BioChemSimilarityPropertyInput} />,
  },
  "biologicalRole": {
    componentName: "BiologicalRolePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BiologicalRolePropertyStructuredData data={intent.data as BiologicalRolePropertyInput} />,
  },
  "birthDate": {
    componentName: "BirthDatePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BirthDatePropertyStructuredData data={intent.data as BirthDatePropertyInput} />,
  },
  "birthPlace": {
    componentName: "BirthPlacePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BirthPlacePropertyStructuredData data={intent.data as BirthPlacePropertyInput} />,
  },
  "bitrate": {
    componentName: "BitratePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BitratePropertyStructuredData data={intent.data as BitratePropertyInput} />,
  },
  "bodyLocation": {
    componentName: "BodyLocationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BodyLocationPropertyStructuredData data={intent.data as BodyLocationPropertyInput} />,
  },
  "box": {
    componentName: "BoxPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BoxPropertyStructuredData data={intent.data as BoxPropertyInput} />,
  },
  "branchCode": {
    componentName: "BranchCodePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BranchCodePropertyStructuredData data={intent.data as BranchCodePropertyInput} />,
  },
  "brand": {
    componentName: "BrandPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BrandPropertyStructuredData data={intent.data as BrandPropertyInput} />,
  },
  "breadcrumb": {
    componentName: "BreadcrumbPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BreadcrumbPropertyStructuredData data={intent.data as BreadcrumbPropertyInput} />,
  },
  "breastfeedingWarning": {
    componentName: "BreastfeedingWarningPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BreastfeedingWarningPropertyStructuredData data={intent.data as BreastfeedingWarningPropertyInput} />,
  },
  "broadcastAffiliateOf": {
    componentName: "BroadcastAffiliateOfPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BroadcastAffiliateOfPropertyStructuredData data={intent.data as BroadcastAffiliateOfPropertyInput} />,
  },
  "broadcastChannelId": {
    componentName: "BroadcastChannelIdPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BroadcastChannelIdPropertyStructuredData data={intent.data as BroadcastChannelIdPropertyInput} />,
  },
  "broadcastDisplayName": {
    componentName: "BroadcastDisplayNamePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BroadcastDisplayNamePropertyStructuredData data={intent.data as BroadcastDisplayNamePropertyInput} />,
  },
  "broadcaster": {
    componentName: "BroadcasterPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BroadcasterPropertyStructuredData data={intent.data as BroadcasterPropertyInput} />,
  },
  "broadcastFrequency": {
    componentName: "BroadcastFrequencyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BroadcastFrequencyPropertyStructuredData data={intent.data as BroadcastFrequencyPropertyInput} />,
  },
  "broadcastFrequencyValue": {
    componentName: "BroadcastFrequencyValuePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BroadcastFrequencyValuePropertyStructuredData data={intent.data as BroadcastFrequencyValuePropertyInput} />,
  },
  "broadcastServiceTier": {
    componentName: "BroadcastServiceTierPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BroadcastServiceTierPropertyStructuredData data={intent.data as BroadcastServiceTierPropertyInput} />,
  },
  "broadcastSignalModulation": {
    componentName: "BroadcastSignalModulationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BroadcastSignalModulationPropertyStructuredData data={intent.data as BroadcastSignalModulationPropertyInput} />,
  },
  "broadcastSubChannel": {
    componentName: "BroadcastSubChannelPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BroadcastSubChannelPropertyStructuredData data={intent.data as BroadcastSubChannelPropertyInput} />,
  },
  "broadcastTimezone": {
    componentName: "BroadcastTimezonePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BroadcastTimezonePropertyStructuredData data={intent.data as BroadcastTimezonePropertyInput} />,
  },
  "broker": {
    componentName: "BrokerPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BrokerPropertyStructuredData data={intent.data as BrokerPropertyInput} />,
  },
  "businessDays": {
    componentName: "BusinessDaysPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BusinessDaysPropertyStructuredData data={intent.data as BusinessDaysPropertyInput} />,
  },
  "businessFunction": {
    componentName: "BusinessFunctionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <BusinessFunctionPropertyStructuredData data={intent.data as BusinessFunctionPropertyInput} />,
  },
  "byArtist": {
    componentName: "ByArtistPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ByArtistPropertyStructuredData data={intent.data as ByArtistPropertyInput} />,
  },
  "byDay": {
    componentName: "ByDayPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ByDayPropertyStructuredData data={intent.data as ByDayPropertyInput} />,
  },
  "byMonth": {
    componentName: "ByMonthPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ByMonthPropertyStructuredData data={intent.data as ByMonthPropertyInput} />,
  },
  "byMonthDay": {
    componentName: "ByMonthDayPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ByMonthDayPropertyStructuredData data={intent.data as ByMonthDayPropertyInput} />,
  },
  "byMonthWeek": {
    componentName: "ByMonthWeekPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ByMonthWeekPropertyStructuredData data={intent.data as ByMonthWeekPropertyInput} />,
  },
  "callSign": {
    componentName: "CallSignPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CallSignPropertyStructuredData data={intent.data as CallSignPropertyInput} />,
  },
  "calories": {
    componentName: "CaloriesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CaloriesPropertyStructuredData data={intent.data as CaloriesPropertyInput} />,
  },
  "caption": {
    componentName: "CaptionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CaptionPropertyStructuredData data={intent.data as CaptionPropertyInput} />,
  },
  "carbohydrateContent": {
    componentName: "CarbohydrateContentPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CarbohydrateContentPropertyStructuredData data={intent.data as CarbohydrateContentPropertyInput} />,
  },
  "cashBack": {
    componentName: "CashBackPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CashBackPropertyStructuredData data={intent.data as CashBackPropertyInput} />,
  },
  "catalog": {
    componentName: "CatalogPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CatalogPropertyStructuredData data={intent.data as CatalogPropertyInput} />,
  },
  "catalogNumber": {
    componentName: "CatalogNumberPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CatalogNumberPropertyStructuredData data={intent.data as CatalogNumberPropertyInput} />,
  },
  "category": {
    componentName: "CategoryPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CategoryPropertyStructuredData data={intent.data as CategoryPropertyInput} />,
  },
  "cause": {
    componentName: "CausePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CausePropertyStructuredData data={intent.data as CausePropertyInput} />,
  },
  "causeOf": {
    componentName: "CauseOfPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CauseOfPropertyStructuredData data={intent.data as CauseOfPropertyInput} />,
  },
  "certificationIdentification": {
    componentName: "CertificationIdentificationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CertificationIdentificationPropertyStructuredData data={intent.data as CertificationIdentificationPropertyInput} />,
  },
  "certificationRating": {
    componentName: "CertificationRatingPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CertificationRatingPropertyStructuredData data={intent.data as CertificationRatingPropertyInput} />,
  },
  "certificationStatus": {
    componentName: "CertificationStatusPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CertificationStatusPropertyStructuredData data={intent.data as CertificationStatusPropertyInput} />,
  },
  "character": {
    componentName: "CharacterPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CharacterPropertyStructuredData data={intent.data as CharacterPropertyInput} />,
  },
  "checkoutPageURLTemplate": {
    componentName: "CheckoutPageURLTemplatePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CheckoutPageURLTemplatePropertyStructuredData data={intent.data as CheckoutPageURLTemplatePropertyInput} />,
  },
  "children": {
    componentName: "ChildrenPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ChildrenPropertyStructuredData data={intent.data as ChildrenPropertyInput} />,
  },
  "childTaxon": {
    componentName: "ChildTaxonPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ChildTaxonPropertyStructuredData data={intent.data as ChildTaxonPropertyInput} />,
  },
  "cholesterolContent": {
    componentName: "CholesterolContentPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CholesterolContentPropertyStructuredData data={intent.data as CholesterolContentPropertyInput} />,
  },
  "circle": {
    componentName: "CirclePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CirclePropertyStructuredData data={intent.data as CirclePropertyInput} />,
  },
  "citation": {
    componentName: "CitationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CitationPropertyStructuredData data={intent.data as CitationPropertyInput} />,
  },
  "claimInterpreter": {
    componentName: "ClaimInterpreterPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ClaimInterpreterPropertyStructuredData data={intent.data as ClaimInterpreterPropertyInput} />,
  },
  "clincalPharmacology": {
    componentName: "ClincalPharmacologyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ClincalPharmacologyPropertyStructuredData data={intent.data as ClincalPharmacologyPropertyInput} />,
  },
  "clinicalPharmacology": {
    componentName: "ClinicalPharmacologyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ClinicalPharmacologyPropertyStructuredData data={intent.data as ClinicalPharmacologyPropertyInput} />,
  },
  "clipNumber": {
    componentName: "ClipNumberPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ClipNumberPropertyStructuredData data={intent.data as ClipNumberPropertyInput} />,
  },
  "closes": {
    componentName: "ClosesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ClosesPropertyStructuredData data={intent.data as ClosesPropertyInput} />,
  },
  "code": {
    componentName: "CodePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CodePropertyStructuredData data={intent.data as CodePropertyInput} />,
  },
  "codeValue": {
    componentName: "CodeValuePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CodeValuePropertyStructuredData data={intent.data as CodeValuePropertyInput} />,
  },
  "codingSystem": {
    componentName: "CodingSystemPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CodingSystemPropertyStructuredData data={intent.data as CodingSystemPropertyInput} />,
  },
  "colleague": {
    componentName: "ColleaguePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ColleaguePropertyStructuredData data={intent.data as ColleaguePropertyInput} />,
  },
  "colleagues": {
    componentName: "ColleaguesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ColleaguesPropertyStructuredData data={intent.data as ColleaguesPropertyInput} />,
  },
  "color": {
    componentName: "ColorPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ColorPropertyStructuredData data={intent.data as ColorPropertyInput} />,
  },
  "colorSwatch": {
    componentName: "ColorSwatchPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ColorSwatchPropertyStructuredData data={intent.data as ColorSwatchPropertyInput} />,
  },
  "comment": {
    componentName: "CommentPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CommentPropertyStructuredData data={intent.data as CommentPropertyInput} />,
  },
  "commentCount": {
    componentName: "CommentCountPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CommentCountPropertyStructuredData data={intent.data as CommentCountPropertyInput} />,
  },
  "companyRegistration": {
    componentName: "CompanyRegistrationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CompanyRegistrationPropertyStructuredData data={intent.data as CompanyRegistrationPropertyInput} />,
  },
  "competencyRequired": {
    componentName: "CompetencyRequiredPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CompetencyRequiredPropertyStructuredData data={intent.data as CompetencyRequiredPropertyInput} />,
  },
  "composer": {
    componentName: "ComposerPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ComposerPropertyStructuredData data={intent.data as ComposerPropertyInput} />,
  },
  "comprisedOf": {
    componentName: "ComprisedOfPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ComprisedOfPropertyStructuredData data={intent.data as ComprisedOfPropertyInput} />,
  },
  "conditionsOfAccess": {
    componentName: "ConditionsOfAccessPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ConditionsOfAccessPropertyStructuredData data={intent.data as ConditionsOfAccessPropertyInput} />,
  },
  "connectedTo": {
    componentName: "ConnectedToPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ConnectedToPropertyStructuredData data={intent.data as ConnectedToPropertyInput} />,
  },
  "constraintProperty": {
    componentName: "ConstraintPropertyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ConstraintPropertyPropertyStructuredData data={intent.data as ConstraintPropertyPropertyInput} />,
  },
  "contactlessPayment": {
    componentName: "ContactlessPaymentPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ContactlessPaymentPropertyStructuredData data={intent.data as ContactlessPaymentPropertyInput} />,
  },
  "contactOption": {
    componentName: "ContactOptionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ContactOptionPropertyStructuredData data={intent.data as ContactOptionPropertyInput} />,
  },
  "contactPoint": {
    componentName: "ContactPointPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ContactPointPropertyStructuredData data={intent.data as ContactPointPropertyInput} />,
  },
  "contactPoints": {
    componentName: "ContactPointsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ContactPointsPropertyStructuredData data={intent.data as ContactPointsPropertyInput} />,
  },
  "contactType": {
    componentName: "ContactTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ContactTypePropertyStructuredData data={intent.data as ContactTypePropertyInput} />,
  },
  "containedIn": {
    componentName: "ContainedInPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ContainedInPropertyStructuredData data={intent.data as ContainedInPropertyInput} />,
  },
  "containedInPlace": {
    componentName: "ContainedInPlacePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ContainedInPlacePropertyStructuredData data={intent.data as ContainedInPlacePropertyInput} />,
  },
  "containsPlace": {
    componentName: "ContainsPlacePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ContainsPlacePropertyStructuredData data={intent.data as ContainsPlacePropertyInput} />,
  },
  "contentLocation": {
    componentName: "ContentLocationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ContentLocationPropertyStructuredData data={intent.data as ContentLocationPropertyInput} />,
  },
  "contentRating": {
    componentName: "ContentRatingPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ContentRatingPropertyStructuredData data={intent.data as ContentRatingPropertyInput} />,
  },
  "contentReferenceTime": {
    componentName: "ContentReferenceTimePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ContentReferenceTimePropertyStructuredData data={intent.data as ContentReferenceTimePropertyInput} />,
  },
  "contentSize": {
    componentName: "ContentSizePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ContentSizePropertyStructuredData data={intent.data as ContentSizePropertyInput} />,
  },
  "contentType": {
    componentName: "ContentTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ContentTypePropertyStructuredData data={intent.data as ContentTypePropertyInput} />,
  },
  "contentUrl": {
    componentName: "ContentUrlPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ContentUrlPropertyStructuredData data={intent.data as ContentUrlPropertyInput} />,
  },
  "contraindication": {
    componentName: "ContraindicationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ContraindicationPropertyStructuredData data={intent.data as ContraindicationPropertyInput} />,
  },
  "contributor": {
    componentName: "ContributorPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ContributorPropertyStructuredData data={intent.data as ContributorPropertyInput} />,
  },
  "copyrightHolder": {
    componentName: "CopyrightHolderPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CopyrightHolderPropertyStructuredData data={intent.data as CopyrightHolderPropertyInput} />,
  },
  "copyrightNotice": {
    componentName: "CopyrightNoticePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CopyrightNoticePropertyStructuredData data={intent.data as CopyrightNoticePropertyInput} />,
  },
  "copyrightYear": {
    componentName: "CopyrightYearPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CopyrightYearPropertyStructuredData data={intent.data as CopyrightYearPropertyInput} />,
  },
  "correction": {
    componentName: "CorrectionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CorrectionPropertyStructuredData data={intent.data as CorrectionPropertyInput} />,
  },
  "correctionsPolicy": {
    componentName: "CorrectionsPolicyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CorrectionsPolicyPropertyStructuredData data={intent.data as CorrectionsPolicyPropertyInput} />,
  },
  "countriesNotSupported": {
    componentName: "CountriesNotSupportedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CountriesNotSupportedPropertyStructuredData data={intent.data as CountriesNotSupportedPropertyInput} />,
  },
  "countriesSupported": {
    componentName: "CountriesSupportedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CountriesSupportedPropertyStructuredData data={intent.data as CountriesSupportedPropertyInput} />,
  },
  "countryOfAssembly": {
    componentName: "CountryOfAssemblyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CountryOfAssemblyPropertyStructuredData data={intent.data as CountryOfAssemblyPropertyInput} />,
  },
  "countryOfLastProcessing": {
    componentName: "CountryOfLastProcessingPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CountryOfLastProcessingPropertyStructuredData data={intent.data as CountryOfLastProcessingPropertyInput} />,
  },
  "countryOfOrigin": {
    componentName: "CountryOfOriginPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CountryOfOriginPropertyStructuredData data={intent.data as CountryOfOriginPropertyInput} />,
  },
  "creativeWorkStatus": {
    componentName: "CreativeWorkStatusPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CreativeWorkStatusPropertyStructuredData data={intent.data as CreativeWorkStatusPropertyInput} />,
  },
  "creator": {
    componentName: "CreatorPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CreatorPropertyStructuredData data={intent.data as CreatorPropertyInput} />,
  },
  "credentialCategory": {
    componentName: "CredentialCategoryPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CredentialCategoryPropertyStructuredData data={intent.data as CredentialCategoryPropertyInput} />,
  },
  "creditedTo": {
    componentName: "CreditedToPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CreditedToPropertyStructuredData data={intent.data as CreditedToPropertyInput} />,
  },
  "creditText": {
    componentName: "CreditTextPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CreditTextPropertyStructuredData data={intent.data as CreditTextPropertyInput} />,
  },
  "cssSelector": {
    componentName: "CssSelectorPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CssSelectorPropertyStructuredData data={intent.data as CssSelectorPropertyInput} />,
  },
  "currency": {
    componentName: "CurrencyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CurrencyPropertyStructuredData data={intent.data as CurrencyPropertyInput} />,
  },
  "customerRemorseReturnFees": {
    componentName: "CustomerRemorseReturnFeesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CustomerRemorseReturnFeesPropertyStructuredData data={intent.data as CustomerRemorseReturnFeesPropertyInput} />,
  },
  "customerRemorseReturnLabelSource": {
    componentName: "CustomerRemorseReturnLabelSourcePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CustomerRemorseReturnLabelSourcePropertyStructuredData data={intent.data as CustomerRemorseReturnLabelSourcePropertyInput} />,
  },
  "customerRemorseReturnShippingFeesAmount": {
    componentName: "CustomerRemorseReturnShippingFeesAmountPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CustomerRemorseReturnShippingFeesAmountPropertyStructuredData data={intent.data as CustomerRemorseReturnShippingFeesAmountPropertyInput} />,
  },
  "cutoffTime": {
    componentName: "CutoffTimePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <CutoffTimePropertyStructuredData data={intent.data as CutoffTimePropertyInput} />,
  },
  "dataFeedElement": {
    componentName: "DataFeedElementPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DataFeedElementPropertyStructuredData data={intent.data as DataFeedElementPropertyInput} />,
  },
  "dataset": {
    componentName: "DatasetPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DatasetPropertyStructuredData data={intent.data as DatasetPropertyInput} />,
  },
  "datasetTimeInterval": {
    componentName: "DatasetTimeIntervalPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DatasetTimeIntervalPropertyStructuredData data={intent.data as DatasetTimeIntervalPropertyInput} />,
  },
  "dateCreated": {
    componentName: "DateCreatedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DateCreatedPropertyStructuredData data={intent.data as DateCreatedPropertyInput} />,
  },
  "dateDeleted": {
    componentName: "DateDeletedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DateDeletedPropertyStructuredData data={intent.data as DateDeletedPropertyInput} />,
  },
  "dateline": {
    componentName: "DatelinePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DatelinePropertyStructuredData data={intent.data as DatelinePropertyInput} />,
  },
  "dateModified": {
    componentName: "DateModifiedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DateModifiedPropertyStructuredData data={intent.data as DateModifiedPropertyInput} />,
  },
  "datePosted": {
    componentName: "DatePostedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DatePostedPropertyStructuredData data={intent.data as DatePostedPropertyInput} />,
  },
  "datePublished": {
    componentName: "DatePublishedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DatePublishedPropertyStructuredData data={intent.data as DatePublishedPropertyInput} />,
  },
  "dayOfWeek": {
    componentName: "DayOfWeekPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DayOfWeekPropertyStructuredData data={intent.data as DayOfWeekPropertyInput} />,
  },
  "deathDate": {
    componentName: "DeathDatePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DeathDatePropertyStructuredData data={intent.data as DeathDatePropertyInput} />,
  },
  "deathPlace": {
    componentName: "DeathPlacePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DeathPlacePropertyStructuredData data={intent.data as DeathPlacePropertyInput} />,
  },
  "deliveryLeadTime": {
    componentName: "DeliveryLeadTimePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DeliveryLeadTimePropertyStructuredData data={intent.data as DeliveryLeadTimePropertyInput} />,
  },
  "deliveryTime": {
    componentName: "DeliveryTimePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DeliveryTimePropertyStructuredData data={intent.data as DeliveryTimePropertyInput} />,
  },
  "department": {
    componentName: "DepartmentPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DepartmentPropertyStructuredData data={intent.data as DepartmentPropertyInput} />,
  },
  "departureTime": {
    componentName: "DepartureTimePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DepartureTimePropertyStructuredData data={intent.data as DepartureTimePropertyInput} />,
  },
  "depth": {
    componentName: "DepthPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DepthPropertyStructuredData data={intent.data as DepthPropertyInput} />,
  },
  "description": {
    componentName: "DescriptionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DescriptionPropertyStructuredData data={intent.data as DescriptionPropertyInput} />,
  },
  "device": {
    componentName: "DevicePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DevicePropertyStructuredData data={intent.data as DevicePropertyInput} />,
  },
  "diagnosis": {
    componentName: "DiagnosisPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DiagnosisPropertyStructuredData data={intent.data as DiagnosisPropertyInput} />,
  },
  "diagram": {
    componentName: "DiagramPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DiagramPropertyStructuredData data={intent.data as DiagramPropertyInput} />,
  },
  "dietFeatures": {
    componentName: "DietFeaturesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DietFeaturesPropertyStructuredData data={intent.data as DietFeaturesPropertyInput} />,
  },
  "differentialDiagnosis": {
    componentName: "DifferentialDiagnosisPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DifferentialDiagnosisPropertyStructuredData data={intent.data as DifferentialDiagnosisPropertyInput} />,
  },
  "digitalSourceType": {
    componentName: "DigitalSourceTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DigitalSourceTypePropertyStructuredData data={intent.data as DigitalSourceTypePropertyInput} />,
  },
  "director": {
    componentName: "DirectorPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DirectorPropertyStructuredData data={intent.data as DirectorPropertyInput} />,
  },
  "directors": {
    componentName: "DirectorsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DirectorsPropertyStructuredData data={intent.data as DirectorsPropertyInput} />,
  },
  "disambiguatingDescription": {
    componentName: "DisambiguatingDescriptionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DisambiguatingDescriptionPropertyStructuredData data={intent.data as DisambiguatingDescriptionPropertyInput} />,
  },
  "discussionUrl": {
    componentName: "DiscussionUrlPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DiscussionUrlPropertyStructuredData data={intent.data as DiscussionUrlPropertyInput} />,
  },
  "displayLocation": {
    componentName: "DisplayLocationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DisplayLocationPropertyStructuredData data={intent.data as DisplayLocationPropertyInput} />,
  },
  "dissolutionDate": {
    componentName: "DissolutionDatePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DissolutionDatePropertyStructuredData data={intent.data as DissolutionDatePropertyInput} />,
  },
  "distinguishingSign": {
    componentName: "DistinguishingSignPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DistinguishingSignPropertyStructuredData data={intent.data as DistinguishingSignPropertyInput} />,
  },
  "distribution": {
    componentName: "DistributionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DistributionPropertyStructuredData data={intent.data as DistributionPropertyInput} />,
  },
  "diversityPolicy": {
    componentName: "DiversityPolicyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DiversityPolicyPropertyStructuredData data={intent.data as DiversityPolicyPropertyInput} />,
  },
  "diversityStaffingReport": {
    componentName: "DiversityStaffingReportPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DiversityStaffingReportPropertyStructuredData data={intent.data as DiversityStaffingReportPropertyInput} />,
  },
  "doesNotShip": {
    componentName: "DoesNotShipPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DoesNotShipPropertyStructuredData data={intent.data as DoesNotShipPropertyInput} />,
  },
  "domainIncludes": {
    componentName: "DomainIncludesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DomainIncludesPropertyStructuredData data={intent.data as DomainIncludesPropertyInput} />,
  },
  "doorTime": {
    componentName: "DoorTimePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DoorTimePropertyStructuredData data={intent.data as DoorTimePropertyInput} />,
  },
  "dosageForm": {
    componentName: "DosageFormPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DosageFormPropertyStructuredData data={intent.data as DosageFormPropertyInput} />,
  },
  "doseSchedule": {
    componentName: "DoseSchedulePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DoseSchedulePropertyStructuredData data={intent.data as DoseSchedulePropertyInput} />,
  },
  "doseUnit": {
    componentName: "DoseUnitPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DoseUnitPropertyStructuredData data={intent.data as DoseUnitPropertyInput} />,
  },
  "doseValue": {
    componentName: "DoseValuePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DoseValuePropertyStructuredData data={intent.data as DoseValuePropertyInput} />,
  },
  "downloadUrl": {
    componentName: "DownloadUrlPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DownloadUrlPropertyStructuredData data={intent.data as DownloadUrlPropertyInput} />,
  },
  "downPayment": {
    componentName: "DownPaymentPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DownPaymentPropertyStructuredData data={intent.data as DownPaymentPropertyInput} />,
  },
  "downvoteCount": {
    componentName: "DownvoteCountPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DownvoteCountPropertyStructuredData data={intent.data as DownvoteCountPropertyInput} />,
  },
  "drug": {
    componentName: "DrugPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DrugPropertyStructuredData data={intent.data as DrugPropertyInput} />,
  },
  "drugClass": {
    componentName: "DrugClassPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DrugClassPropertyStructuredData data={intent.data as DrugClassPropertyInput} />,
  },
  "drugUnit": {
    componentName: "DrugUnitPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DrugUnitPropertyStructuredData data={intent.data as DrugUnitPropertyInput} />,
  },
  "duns": {
    componentName: "DunsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DunsPropertyStructuredData data={intent.data as DunsPropertyInput} />,
  },
  "duplicateTherapy": {
    componentName: "DuplicateTherapyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DuplicateTherapyPropertyStructuredData data={intent.data as DuplicateTherapyPropertyInput} />,
  },
  "duration": {
    componentName: "DurationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DurationPropertyStructuredData data={intent.data as DurationPropertyInput} />,
  },
  "durationOfWarranty": {
    componentName: "DurationOfWarrantyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <DurationOfWarrantyPropertyStructuredData data={intent.data as DurationOfWarrantyPropertyInput} />,
  },
  "earlyPrepaymentPenalty": {
    componentName: "EarlyPrepaymentPenaltyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EarlyPrepaymentPenaltyPropertyStructuredData data={intent.data as EarlyPrepaymentPenaltyPropertyInput} />,
  },
  "editEIDR": {
    componentName: "EditEIDRPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EditEIDRPropertyStructuredData data={intent.data as EditEIDRPropertyInput} />,
  },
  "editor": {
    componentName: "EditorPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EditorPropertyStructuredData data={intent.data as EditorPropertyInput} />,
  },
  "educationalAlignment": {
    componentName: "EducationalAlignmentPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EducationalAlignmentPropertyStructuredData data={intent.data as EducationalAlignmentPropertyInput} />,
  },
  "educationalFramework": {
    componentName: "EducationalFrameworkPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EducationalFrameworkPropertyStructuredData data={intent.data as EducationalFrameworkPropertyInput} />,
  },
  "educationalLevel": {
    componentName: "EducationalLevelPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EducationalLevelPropertyStructuredData data={intent.data as EducationalLevelPropertyInput} />,
  },
  "educationalUse": {
    componentName: "EducationalUsePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EducationalUsePropertyStructuredData data={intent.data as EducationalUsePropertyInput} />,
  },
  "educationRequirements": {
    componentName: "EducationRequirementsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EducationRequirementsPropertyStructuredData data={intent.data as EducationRequirementsPropertyInput} />,
  },
  "elevation": {
    componentName: "ElevationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ElevationPropertyStructuredData data={intent.data as ElevationPropertyInput} />,
  },
  "eligibleCustomerType": {
    componentName: "EligibleCustomerTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EligibleCustomerTypePropertyStructuredData data={intent.data as EligibleCustomerTypePropertyInput} />,
  },
  "eligibleDuration": {
    componentName: "EligibleDurationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EligibleDurationPropertyStructuredData data={intent.data as EligibleDurationPropertyInput} />,
  },
  "eligibleQuantity": {
    componentName: "EligibleQuantityPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EligibleQuantityPropertyStructuredData data={intent.data as EligibleQuantityPropertyInput} />,
  },
  "eligibleRegion": {
    componentName: "EligibleRegionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EligibleRegionPropertyStructuredData data={intent.data as EligibleRegionPropertyInput} />,
  },
  "eligibleTransactionVolume": {
    componentName: "EligibleTransactionVolumePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EligibleTransactionVolumePropertyStructuredData data={intent.data as EligibleTransactionVolumePropertyInput} />,
  },
  "email": {
    componentName: "EmailPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EmailPropertyStructuredData data={intent.data as EmailPropertyInput} />,
  },
  "embeddedTextCaption": {
    componentName: "EmbeddedTextCaptionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EmbeddedTextCaptionPropertyStructuredData data={intent.data as EmbeddedTextCaptionPropertyInput} />,
  },
  "embedUrl": {
    componentName: "EmbedUrlPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EmbedUrlPropertyStructuredData data={intent.data as EmbedUrlPropertyInput} />,
  },
  "employee": {
    componentName: "EmployeePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EmployeePropertyStructuredData data={intent.data as EmployeePropertyInput} />,
  },
  "employees": {
    componentName: "EmployeesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EmployeesPropertyStructuredData data={intent.data as EmployeesPropertyInput} />,
  },
  "encodesBioChemEntity": {
    componentName: "EncodesBioChemEntityPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EncodesBioChemEntityPropertyStructuredData data={intent.data as EncodesBioChemEntityPropertyInput} />,
  },
  "encodesCreativeWork": {
    componentName: "EncodesCreativeWorkPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EncodesCreativeWorkPropertyStructuredData data={intent.data as EncodesCreativeWorkPropertyInput} />,
  },
  "encoding": {
    componentName: "EncodingPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EncodingPropertyStructuredData data={intent.data as EncodingPropertyInput} />,
  },
  "encodingFormat": {
    componentName: "EncodingFormatPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EncodingFormatPropertyStructuredData data={intent.data as EncodingFormatPropertyInput} />,
  },
  "encodings": {
    componentName: "EncodingsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EncodingsPropertyStructuredData data={intent.data as EncodingsPropertyInput} />,
  },
  "encodingType": {
    componentName: "EncodingTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EncodingTypePropertyStructuredData data={intent.data as EncodingTypePropertyInput} />,
  },
  "endDate": {
    componentName: "EndDatePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EndDatePropertyStructuredData data={intent.data as EndDatePropertyInput} />,
  },
  "endOffset": {
    componentName: "EndOffsetPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EndOffsetPropertyStructuredData data={intent.data as EndOffsetPropertyInput} />,
  },
  "endorsers": {
    componentName: "EndorsersPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EndorsersPropertyStructuredData data={intent.data as EndorsersPropertyInput} />,
  },
  "endTime": {
    componentName: "EndTimePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EndTimePropertyStructuredData data={intent.data as EndTimePropertyInput} />,
  },
  "energyEfficiencyScaleMax": {
    componentName: "EnergyEfficiencyScaleMaxPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EnergyEfficiencyScaleMaxPropertyStructuredData data={intent.data as EnergyEfficiencyScaleMaxPropertyInput} />,
  },
  "energyEfficiencyScaleMin": {
    componentName: "EnergyEfficiencyScaleMinPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EnergyEfficiencyScaleMinPropertyStructuredData data={intent.data as EnergyEfficiencyScaleMinPropertyInput} />,
  },
  "epidemiology": {
    componentName: "EpidemiologyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EpidemiologyPropertyStructuredData data={intent.data as EpidemiologyPropertyInput} />,
  },
  "episode": {
    componentName: "EpisodePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EpisodePropertyStructuredData data={intent.data as EpisodePropertyInput} />,
  },
  "episodeNumber": {
    componentName: "EpisodeNumberPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EpisodeNumberPropertyStructuredData data={intent.data as EpisodeNumberPropertyInput} />,
  },
  "episodes": {
    componentName: "EpisodesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EpisodesPropertyStructuredData data={intent.data as EpisodesPropertyInput} />,
  },
  "error": {
    componentName: "ErrorPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ErrorPropertyStructuredData data={intent.data as ErrorPropertyInput} />,
  },
  "estimatedCost": {
    componentName: "EstimatedCostPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EstimatedCostPropertyStructuredData data={intent.data as EstimatedCostPropertyInput} />,
  },
  "estimatedSalary": {
    componentName: "EstimatedSalaryPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EstimatedSalaryPropertyStructuredData data={intent.data as EstimatedSalaryPropertyInput} />,
  },
  "ethicsPolicy": {
    componentName: "EthicsPolicyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EthicsPolicyPropertyStructuredData data={intent.data as EthicsPolicyPropertyInput} />,
  },
  "event": {
    componentName: "EventPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EventPropertyStructuredData data={intent.data as EventPropertyInput} />,
  },
  "eventAttendanceMode": {
    componentName: "EventAttendanceModePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EventAttendanceModePropertyStructuredData data={intent.data as EventAttendanceModePropertyInput} />,
  },
  "events": {
    componentName: "EventsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EventsPropertyStructuredData data={intent.data as EventsPropertyInput} />,
  },
  "eventSchedule": {
    componentName: "EventSchedulePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EventSchedulePropertyStructuredData data={intent.data as EventSchedulePropertyInput} />,
  },
  "eventStatus": {
    componentName: "EventStatusPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EventStatusPropertyStructuredData data={intent.data as EventStatusPropertyInput} />,
  },
  "evidenceLevel": {
    componentName: "EvidenceLevelPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EvidenceLevelPropertyStructuredData data={intent.data as EvidenceLevelPropertyInput} />,
  },
  "evidenceOrigin": {
    componentName: "EvidenceOriginPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <EvidenceOriginPropertyStructuredData data={intent.data as EvidenceOriginPropertyInput} />,
  },
  "exampleOfWork": {
    componentName: "ExampleOfWorkPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ExampleOfWorkPropertyStructuredData data={intent.data as ExampleOfWorkPropertyInput} />,
  },
  "exceptDate": {
    componentName: "ExceptDatePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ExceptDatePropertyStructuredData data={intent.data as ExceptDatePropertyInput} />,
  },
  "exifData": {
    componentName: "ExifDataPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ExifDataPropertyStructuredData data={intent.data as ExifDataPropertyInput} />,
  },
  "expectedPrognosis": {
    componentName: "ExpectedPrognosisPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ExpectedPrognosisPropertyStructuredData data={intent.data as ExpectedPrognosisPropertyInput} />,
  },
  "expectsAcceptanceOf": {
    componentName: "ExpectsAcceptanceOfPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ExpectsAcceptanceOfPropertyStructuredData data={intent.data as ExpectsAcceptanceOfPropertyInput} />,
  },
  "experienceRequirements": {
    componentName: "ExperienceRequirementsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ExperienceRequirementsPropertyStructuredData data={intent.data as ExperienceRequirementsPropertyInput} />,
  },
  "expertConsiderations": {
    componentName: "ExpertConsiderationsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ExpertConsiderationsPropertyStructuredData data={intent.data as ExpertConsiderationsPropertyInput} />,
  },
  "expires": {
    componentName: "ExpiresPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ExpiresPropertyStructuredData data={intent.data as ExpiresPropertyInput} />,
  },
  "expressedIn": {
    componentName: "ExpressedInPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ExpressedInPropertyStructuredData data={intent.data as ExpressedInPropertyInput} />,
  },
  "extendedAddress": {
    componentName: "ExtendedAddressPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ExtendedAddressPropertyStructuredData data={intent.data as ExtendedAddressPropertyInput} />,
  },
  "familyName": {
    componentName: "FamilyNamePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FamilyNamePropertyStructuredData data={intent.data as FamilyNamePropertyInput} />,
  },
  "fatContent": {
    componentName: "FatContentPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FatContentPropertyStructuredData data={intent.data as FatContentPropertyInput} />,
  },
  "faxNumber": {
    componentName: "FaxNumberPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FaxNumberPropertyStructuredData data={intent.data as FaxNumberPropertyInput} />,
  },
  "featureList": {
    componentName: "FeatureListPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FeatureListPropertyStructuredData data={intent.data as FeatureListPropertyInput} />,
  },
  "feesAndCommissionsSpecification": {
    componentName: "FeesAndCommissionsSpecificationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FeesAndCommissionsSpecificationPropertyStructuredData data={intent.data as FeesAndCommissionsSpecificationPropertyInput} />,
  },
  "fiberContent": {
    componentName: "FiberContentPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FiberContentPropertyStructuredData data={intent.data as FiberContentPropertyInput} />,
  },
  "fileFormat": {
    componentName: "FileFormatPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FileFormatPropertyStructuredData data={intent.data as FileFormatPropertyInput} />,
  },
  "fileSize": {
    componentName: "FileSizePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FileSizePropertyStructuredData data={intent.data as FileSizePropertyInput} />,
  },
  "firstAppearance": {
    componentName: "FirstAppearancePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FirstAppearancePropertyStructuredData data={intent.data as FirstAppearancePropertyInput} />,
  },
  "firstPerformance": {
    componentName: "FirstPerformancePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FirstPerformancePropertyStructuredData data={intent.data as FirstPerformancePropertyInput} />,
  },
  "floorLimit": {
    componentName: "FloorLimitPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FloorLimitPropertyStructuredData data={intent.data as FloorLimitPropertyInput} />,
  },
  "follows": {
    componentName: "FollowsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FollowsPropertyStructuredData data={intent.data as FollowsPropertyInput} />,
  },
  "followup": {
    componentName: "FollowupPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FollowupPropertyStructuredData data={intent.data as FollowupPropertyInput} />,
  },
  "foodWarning": {
    componentName: "FoodWarningPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FoodWarningPropertyStructuredData data={intent.data as FoodWarningPropertyInput} />,
  },
  "founder": {
    componentName: "FounderPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FounderPropertyStructuredData data={intent.data as FounderPropertyInput} />,
  },
  "founders": {
    componentName: "FoundersPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FoundersPropertyStructuredData data={intent.data as FoundersPropertyInput} />,
  },
  "foundingDate": {
    componentName: "FoundingDatePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FoundingDatePropertyStructuredData data={intent.data as FoundingDatePropertyInput} />,
  },
  "foundingLocation": {
    componentName: "FoundingLocationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FoundingLocationPropertyStructuredData data={intent.data as FoundingLocationPropertyInput} />,
  },
  "free": {
    componentName: "FreePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FreePropertyStructuredData data={intent.data as FreePropertyInput} />,
  },
  "freeShippingThreshold": {
    componentName: "FreeShippingThresholdPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FreeShippingThresholdPropertyStructuredData data={intent.data as FreeShippingThresholdPropertyInput} />,
  },
  "frequency": {
    componentName: "FrequencyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FrequencyPropertyStructuredData data={intent.data as FrequencyPropertyInput} />,
  },
  "fulfillmentType": {
    componentName: "FulfillmentTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FulfillmentTypePropertyStructuredData data={intent.data as FulfillmentTypePropertyInput} />,
  },
  "fundedItem": {
    componentName: "FundedItemPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FundedItemPropertyStructuredData data={intent.data as FundedItemPropertyInput} />,
  },
  "funder": {
    componentName: "FunderPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FunderPropertyStructuredData data={intent.data as FunderPropertyInput} />,
  },
  "funding": {
    componentName: "FundingPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <FundingPropertyStructuredData data={intent.data as FundingPropertyInput} />,
  },
  "gender": {
    componentName: "GenderPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GenderPropertyStructuredData data={intent.data as GenderPropertyInput} />,
  },
  "genre": {
    componentName: "GenrePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GenrePropertyStructuredData data={intent.data as GenrePropertyInput} />,
  },
  "geo": {
    componentName: "GeoPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GeoPropertyStructuredData data={intent.data as GeoPropertyInput} />,
  },
  "geoContains": {
    componentName: "GeoContainsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GeoContainsPropertyStructuredData data={intent.data as GeoContainsPropertyInput} />,
  },
  "geoCoveredBy": {
    componentName: "GeoCoveredByPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GeoCoveredByPropertyStructuredData data={intent.data as GeoCoveredByPropertyInput} />,
  },
  "geoCovers": {
    componentName: "GeoCoversPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GeoCoversPropertyStructuredData data={intent.data as GeoCoversPropertyInput} />,
  },
  "geoCrosses": {
    componentName: "GeoCrossesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GeoCrossesPropertyStructuredData data={intent.data as GeoCrossesPropertyInput} />,
  },
  "geoDisjoint": {
    componentName: "GeoDisjointPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GeoDisjointPropertyStructuredData data={intent.data as GeoDisjointPropertyInput} />,
  },
  "geoEquals": {
    componentName: "GeoEqualsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GeoEqualsPropertyStructuredData data={intent.data as GeoEqualsPropertyInput} />,
  },
  "geographicArea": {
    componentName: "GeographicAreaPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GeographicAreaPropertyStructuredData data={intent.data as GeographicAreaPropertyInput} />,
  },
  "geoIntersects": {
    componentName: "GeoIntersectsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GeoIntersectsPropertyStructuredData data={intent.data as GeoIntersectsPropertyInput} />,
  },
  "geoOverlaps": {
    componentName: "GeoOverlapsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GeoOverlapsPropertyStructuredData data={intent.data as GeoOverlapsPropertyInput} />,
  },
  "geoTouches": {
    componentName: "GeoTouchesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GeoTouchesPropertyStructuredData data={intent.data as GeoTouchesPropertyInput} />,
  },
  "geoWithin": {
    componentName: "GeoWithinPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GeoWithinPropertyStructuredData data={intent.data as GeoWithinPropertyInput} />,
  },
  "givenName": {
    componentName: "GivenNamePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GivenNamePropertyStructuredData data={intent.data as GivenNamePropertyInput} />,
  },
  "globalLocationNumber": {
    componentName: "GlobalLocationNumberPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GlobalLocationNumberPropertyStructuredData data={intent.data as GlobalLocationNumberPropertyInput} />,
  },
  "gracePeriod": {
    componentName: "GracePeriodPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GracePeriodPropertyStructuredData data={intent.data as GracePeriodPropertyInput} />,
  },
  "gtin": {
    componentName: "GtinPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GtinPropertyStructuredData data={intent.data as GtinPropertyInput} />,
  },
  "gtin12": {
    componentName: "Gtin12PropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <Gtin12PropertyStructuredData data={intent.data as Gtin12PropertyInput} />,
  },
  "gtin13": {
    componentName: "Gtin13PropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <Gtin13PropertyStructuredData data={intent.data as Gtin13PropertyInput} />,
  },
  "gtin14": {
    componentName: "Gtin14PropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <Gtin14PropertyStructuredData data={intent.data as Gtin14PropertyInput} />,
  },
  "gtin8": {
    componentName: "Gtin8PropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <Gtin8PropertyStructuredData data={intent.data as Gtin8PropertyInput} />,
  },
  "guideline": {
    componentName: "GuidelinePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GuidelinePropertyStructuredData data={intent.data as GuidelinePropertyInput} />,
  },
  "guidelineDate": {
    componentName: "GuidelineDatePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GuidelineDatePropertyStructuredData data={intent.data as GuidelineDatePropertyInput} />,
  },
  "guidelineSubject": {
    componentName: "GuidelineSubjectPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <GuidelineSubjectPropertyStructuredData data={intent.data as GuidelineSubjectPropertyInput} />,
  },
  "handlingTime": {
    componentName: "HandlingTimePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HandlingTimePropertyStructuredData data={intent.data as HandlingTimePropertyInput} />,
  },
  "hasAdultConsideration": {
    componentName: "HasAdultConsiderationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasAdultConsiderationPropertyStructuredData data={intent.data as HasAdultConsiderationPropertyInput} />,
  },
  "hasBioChemEntityPart": {
    componentName: "HasBioChemEntityPartPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasBioChemEntityPartPropertyStructuredData data={intent.data as HasBioChemEntityPartPropertyInput} />,
  },
  "hasBioPolymerSequence": {
    componentName: "HasBioPolymerSequencePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasBioPolymerSequencePropertyStructuredData data={intent.data as HasBioPolymerSequencePropertyInput} />,
  },
  "hasBroadcastChannel": {
    componentName: "HasBroadcastChannelPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasBroadcastChannelPropertyStructuredData data={intent.data as HasBroadcastChannelPropertyInput} />,
  },
  "hasCategoryCode": {
    componentName: "HasCategoryCodePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasCategoryCodePropertyStructuredData data={intent.data as HasCategoryCodePropertyInput} />,
  },
  "hasCertification": {
    componentName: "HasCertificationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasCertificationPropertyStructuredData data={intent.data as HasCertificationPropertyInput} />,
  },
  "hasCredential": {
    componentName: "HasCredentialPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasCredentialPropertyStructuredData data={intent.data as HasCredentialPropertyInput} />,
  },
  "hasDefinedTerm": {
    componentName: "HasDefinedTermPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasDefinedTermPropertyStructuredData data={intent.data as HasDefinedTermPropertyInput} />,
  },
  "hasDriveThroughService": {
    componentName: "HasDriveThroughServicePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasDriveThroughServicePropertyStructuredData data={intent.data as HasDriveThroughServicePropertyInput} />,
  },
  "hasEnergyConsumptionDetails": {
    componentName: "HasEnergyConsumptionDetailsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasEnergyConsumptionDetailsPropertyStructuredData data={intent.data as HasEnergyConsumptionDetailsPropertyInput} />,
  },
  "hasEnergyEfficiencyCategory": {
    componentName: "HasEnergyEfficiencyCategoryPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasEnergyEfficiencyCategoryPropertyStructuredData data={intent.data as HasEnergyEfficiencyCategoryPropertyInput} />,
  },
  "hasGS1DigitalLink": {
    componentName: "HasGS1DigitalLinkPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasGS1DigitalLinkPropertyStructuredData data={intent.data as HasGS1DigitalLinkPropertyInput} />,
  },
  "hasMap": {
    componentName: "HasMapPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasMapPropertyStructuredData data={intent.data as HasMapPropertyInput} />,
  },
  "hasMeasurement": {
    componentName: "HasMeasurementPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasMeasurementPropertyStructuredData data={intent.data as HasMeasurementPropertyInput} />,
  },
  "hasMemberProgram": {
    componentName: "HasMemberProgramPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasMemberProgramPropertyStructuredData data={intent.data as HasMemberProgramPropertyInput} />,
  },
  "hasMenuItem": {
    componentName: "HasMenuItemPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasMenuItemPropertyStructuredData data={intent.data as HasMenuItemPropertyInput} />,
  },
  "hasMenuSection": {
    componentName: "HasMenuSectionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasMenuSectionPropertyStructuredData data={intent.data as HasMenuSectionPropertyInput} />,
  },
  "hasMerchantReturnPolicy": {
    componentName: "HasMerchantReturnPolicyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasMerchantReturnPolicyPropertyStructuredData data={intent.data as HasMerchantReturnPolicyPropertyInput} />,
  },
  "hasMolecularFunction": {
    componentName: "HasMolecularFunctionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasMolecularFunctionPropertyStructuredData data={intent.data as HasMolecularFunctionPropertyInput} />,
  },
  "hasOccupation": {
    componentName: "HasOccupationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasOccupationPropertyStructuredData data={intent.data as HasOccupationPropertyInput} />,
  },
  "hasOfferCatalog": {
    componentName: "HasOfferCatalogPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasOfferCatalogPropertyStructuredData data={intent.data as HasOfferCatalogPropertyInput} />,
  },
  "hasPart": {
    componentName: "HasPartPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasPartPropertyStructuredData data={intent.data as HasPartPropertyInput} />,
  },
  "hasParticipationOffer": {
    componentName: "HasParticipationOfferPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasParticipationOfferPropertyStructuredData data={intent.data as HasParticipationOfferPropertyInput} />,
  },
  "hasPOS": {
    componentName: "HasPOSPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasPOSPropertyStructuredData data={intent.data as HasPOSPropertyInput} />,
  },
  "hasRepresentation": {
    componentName: "HasRepresentationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasRepresentationPropertyStructuredData data={intent.data as HasRepresentationPropertyInput} />,
  },
  "hasShippingService": {
    componentName: "HasShippingServicePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasShippingServicePropertyStructuredData data={intent.data as HasShippingServicePropertyInput} />,
  },
  "hasSponsorshipOffer": {
    componentName: "HasSponsorshipOfferPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasSponsorshipOfferPropertyStructuredData data={intent.data as HasSponsorshipOfferPropertyInput} />,
  },
  "hasTierBenefit": {
    componentName: "HasTierBenefitPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasTierBenefitPropertyStructuredData data={intent.data as HasTierBenefitPropertyInput} />,
  },
  "hasTierRequirement": {
    componentName: "HasTierRequirementPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasTierRequirementPropertyStructuredData data={intent.data as HasTierRequirementPropertyInput} />,
  },
  "hasTiers": {
    componentName: "HasTiersPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasTiersPropertyStructuredData data={intent.data as HasTiersPropertyInput} />,
  },
  "hasVariant": {
    componentName: "HasVariantPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HasVariantPropertyStructuredData data={intent.data as HasVariantPropertyInput} />,
  },
  "headline": {
    componentName: "HeadlinePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HeadlinePropertyStructuredData data={intent.data as HeadlinePropertyInput} />,
  },
  "healthCondition": {
    componentName: "HealthConditionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HealthConditionPropertyStructuredData data={intent.data as HealthConditionPropertyInput} />,
  },
  "healthPlanCoinsuranceOption": {
    componentName: "HealthPlanCoinsuranceOptionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HealthPlanCoinsuranceOptionPropertyStructuredData data={intent.data as HealthPlanCoinsuranceOptionPropertyInput} />,
  },
  "healthPlanCoinsuranceRate": {
    componentName: "HealthPlanCoinsuranceRatePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HealthPlanCoinsuranceRatePropertyStructuredData data={intent.data as HealthPlanCoinsuranceRatePropertyInput} />,
  },
  "healthPlanCopay": {
    componentName: "HealthPlanCopayPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HealthPlanCopayPropertyStructuredData data={intent.data as HealthPlanCopayPropertyInput} />,
  },
  "healthPlanCopayOption": {
    componentName: "HealthPlanCopayOptionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HealthPlanCopayOptionPropertyStructuredData data={intent.data as HealthPlanCopayOptionPropertyInput} />,
  },
  "healthPlanCostSharing": {
    componentName: "HealthPlanCostSharingPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HealthPlanCostSharingPropertyStructuredData data={intent.data as HealthPlanCostSharingPropertyInput} />,
  },
  "healthPlanDrugOption": {
    componentName: "HealthPlanDrugOptionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HealthPlanDrugOptionPropertyStructuredData data={intent.data as HealthPlanDrugOptionPropertyInput} />,
  },
  "healthPlanDrugTier": {
    componentName: "HealthPlanDrugTierPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HealthPlanDrugTierPropertyStructuredData data={intent.data as HealthPlanDrugTierPropertyInput} />,
  },
  "healthPlanId": {
    componentName: "HealthPlanIdPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HealthPlanIdPropertyStructuredData data={intent.data as HealthPlanIdPropertyInput} />,
  },
  "healthPlanMarketingUrl": {
    componentName: "HealthPlanMarketingUrlPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HealthPlanMarketingUrlPropertyStructuredData data={intent.data as HealthPlanMarketingUrlPropertyInput} />,
  },
  "healthPlanNetworkId": {
    componentName: "HealthPlanNetworkIdPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HealthPlanNetworkIdPropertyStructuredData data={intent.data as HealthPlanNetworkIdPropertyInput} />,
  },
  "healthPlanNetworkTier": {
    componentName: "HealthPlanNetworkTierPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HealthPlanNetworkTierPropertyStructuredData data={intent.data as HealthPlanNetworkTierPropertyInput} />,
  },
  "healthPlanPharmacyCategory": {
    componentName: "HealthPlanPharmacyCategoryPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HealthPlanPharmacyCategoryPropertyStructuredData data={intent.data as HealthPlanPharmacyCategoryPropertyInput} />,
  },
  "height": {
    componentName: "HeightPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HeightPropertyStructuredData data={intent.data as HeightPropertyInput} />,
  },
  "highPrice": {
    componentName: "HighPricePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HighPricePropertyStructuredData data={intent.data as HighPricePropertyInput} />,
  },
  "homeLocation": {
    componentName: "HomeLocationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HomeLocationPropertyStructuredData data={intent.data as HomeLocationPropertyInput} />,
  },
  "honorificPrefix": {
    componentName: "HonorificPrefixPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HonorificPrefixPropertyStructuredData data={intent.data as HonorificPrefixPropertyInput} />,
  },
  "honorificSuffix": {
    componentName: "HonorificSuffixPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HonorificSuffixPropertyStructuredData data={intent.data as HonorificSuffixPropertyInput} />,
  },
  "hostingOrganization": {
    componentName: "HostingOrganizationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HostingOrganizationPropertyStructuredData data={intent.data as HostingOrganizationPropertyInput} />,
  },
  "hoursAvailable": {
    componentName: "HoursAvailablePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HoursAvailablePropertyStructuredData data={intent.data as HoursAvailablePropertyInput} />,
  },
  "howPerformed": {
    componentName: "HowPerformedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HowPerformedPropertyStructuredData data={intent.data as HowPerformedPropertyInput} />,
  },
  "httpMethod": {
    componentName: "HttpMethodPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <HttpMethodPropertyStructuredData data={intent.data as HttpMethodPropertyInput} />,
  },
  "identifier": {
    componentName: "IdentifierPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IdentifierPropertyStructuredData data={intent.data as IdentifierPropertyInput} />,
  },
  "identifyingExam": {
    componentName: "IdentifyingExamPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IdentifyingExamPropertyStructuredData data={intent.data as IdentifyingExamPropertyInput} />,
  },
  "identifyingTest": {
    componentName: "IdentifyingTestPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IdentifyingTestPropertyStructuredData data={intent.data as IdentifyingTestPropertyInput} />,
  },
  "image": {
    componentName: "ImagePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ImagePropertyStructuredData data={intent.data as ImagePropertyInput} />,
  },
  "inAlbum": {
    componentName: "InAlbumPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <InAlbumPropertyStructuredData data={intent.data as InAlbumPropertyInput} />,
  },
  "inBroadcastLineup": {
    componentName: "InBroadcastLineupPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <InBroadcastLineupPropertyStructuredData data={intent.data as InBroadcastLineupPropertyInput} />,
  },
  "includedComposition": {
    componentName: "IncludedCompositionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IncludedCompositionPropertyStructuredData data={intent.data as IncludedCompositionPropertyInput} />,
  },
  "includedDataCatalog": {
    componentName: "IncludedDataCatalogPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IncludedDataCatalogPropertyStructuredData data={intent.data as IncludedDataCatalogPropertyInput} />,
  },
  "includedInDataCatalog": {
    componentName: "IncludedInDataCatalogPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IncludedInDataCatalogPropertyStructuredData data={intent.data as IncludedInDataCatalogPropertyInput} />,
  },
  "includedInHealthInsurancePlan": {
    componentName: "IncludedInHealthInsurancePlanPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IncludedInHealthInsurancePlanPropertyStructuredData data={intent.data as IncludedInHealthInsurancePlanPropertyInput} />,
  },
  "includesHealthPlanFormulary": {
    componentName: "IncludesHealthPlanFormularyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IncludesHealthPlanFormularyPropertyStructuredData data={intent.data as IncludesHealthPlanFormularyPropertyInput} />,
  },
  "includesHealthPlanNetwork": {
    componentName: "IncludesHealthPlanNetworkPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IncludesHealthPlanNetworkPropertyStructuredData data={intent.data as IncludesHealthPlanNetworkPropertyInput} />,
  },
  "includesObject": {
    componentName: "IncludesObjectPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IncludesObjectPropertyStructuredData data={intent.data as IncludesObjectPropertyInput} />,
  },
  "inCodeSet": {
    componentName: "InCodeSetPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <InCodeSetPropertyStructuredData data={intent.data as InCodeSetPropertyInput} />,
  },
  "increasesRiskOf": {
    componentName: "IncreasesRiskOfPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IncreasesRiskOfPropertyStructuredData data={intent.data as IncreasesRiskOfPropertyInput} />,
  },
  "inDefinedTermSet": {
    componentName: "InDefinedTermSetPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <InDefinedTermSetPropertyStructuredData data={intent.data as InDefinedTermSetPropertyInput} />,
  },
  "ineligibleRegion": {
    componentName: "IneligibleRegionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IneligibleRegionPropertyStructuredData data={intent.data as IneligibleRegionPropertyInput} />,
  },
  "inLanguage": {
    componentName: "InLanguagePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <InLanguagePropertyStructuredData data={intent.data as InLanguagePropertyInput} />,
  },
  "inPlaylist": {
    componentName: "InPlaylistPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <InPlaylistPropertyStructuredData data={intent.data as InPlaylistPropertyInput} />,
  },
  "inProductGroupWithID": {
    componentName: "InProductGroupWithIDPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <InProductGroupWithIDPropertyStructuredData data={intent.data as InProductGroupWithIDPropertyInput} />,
  },
  "installUrl": {
    componentName: "InstallUrlPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <InstallUrlPropertyStructuredData data={intent.data as InstallUrlPropertyInput} />,
  },
  "inStoreReturnsOffered": {
    componentName: "InStoreReturnsOfferedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <InStoreReturnsOfferedPropertyStructuredData data={intent.data as InStoreReturnsOfferedPropertyInput} />,
  },
  "instrument": {
    componentName: "InstrumentPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <InstrumentPropertyStructuredData data={intent.data as InstrumentPropertyInput} />,
  },
  "interactingDrug": {
    componentName: "InteractingDrugPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <InteractingDrugPropertyStructuredData data={intent.data as InteractingDrugPropertyInput} />,
  },
  "interactionService": {
    componentName: "InteractionServicePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <InteractionServicePropertyStructuredData data={intent.data as InteractionServicePropertyInput} />,
  },
  "interactionStatistic": {
    componentName: "InteractionStatisticPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <InteractionStatisticPropertyStructuredData data={intent.data as InteractionStatisticPropertyInput} />,
  },
  "interactionType": {
    componentName: "InteractionTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <InteractionTypePropertyStructuredData data={intent.data as InteractionTypePropertyInput} />,
  },
  "interactivityType": {
    componentName: "InteractivityTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <InteractivityTypePropertyStructuredData data={intent.data as InteractivityTypePropertyInput} />,
  },
  "interestRate": {
    componentName: "InterestRatePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <InterestRatePropertyStructuredData data={intent.data as InterestRatePropertyInput} />,
  },
  "interpretedAsClaim": {
    componentName: "InterpretedAsClaimPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <InterpretedAsClaimPropertyStructuredData data={intent.data as InterpretedAsClaimPropertyInput} />,
  },
  "inventoryLevel": {
    componentName: "InventoryLevelPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <InventoryLevelPropertyStructuredData data={intent.data as InventoryLevelPropertyInput} />,
  },
  "inverseOf": {
    componentName: "InverseOfPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <InverseOfPropertyStructuredData data={intent.data as InverseOfPropertyInput} />,
  },
  "isAccessibleForFree": {
    componentName: "IsAccessibleForFreePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IsAccessibleForFreePropertyStructuredData data={intent.data as IsAccessibleForFreePropertyInput} />,
  },
  "isAccessoryOrSparePartFor": {
    componentName: "IsAccessoryOrSparePartForPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IsAccessoryOrSparePartForPropertyStructuredData data={intent.data as IsAccessoryOrSparePartForPropertyInput} />,
  },
  "isAvailableGenerically": {
    componentName: "IsAvailableGenericallyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IsAvailableGenericallyPropertyStructuredData data={intent.data as IsAvailableGenericallyPropertyInput} />,
  },
  "isBasedOn": {
    componentName: "IsBasedOnPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IsBasedOnPropertyStructuredData data={intent.data as IsBasedOnPropertyInput} />,
  },
  "isBasedOnUrl": {
    componentName: "IsBasedOnUrlPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IsBasedOnUrlPropertyStructuredData data={intent.data as IsBasedOnUrlPropertyInput} />,
  },
  "isConsumableFor": {
    componentName: "IsConsumableForPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IsConsumableForPropertyStructuredData data={intent.data as IsConsumableForPropertyInput} />,
  },
  "isEncodedByBioChemEntity": {
    componentName: "IsEncodedByBioChemEntityPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IsEncodedByBioChemEntityPropertyStructuredData data={intent.data as IsEncodedByBioChemEntityPropertyInput} />,
  },
  "isFamilyFriendly": {
    componentName: "IsFamilyFriendlyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IsFamilyFriendlyPropertyStructuredData data={intent.data as IsFamilyFriendlyPropertyInput} />,
  },
  "isicV4": {
    componentName: "IsicV4PropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IsicV4PropertyStructuredData data={intent.data as IsicV4PropertyInput} />,
  },
  "isInvolvedInBiologicalProcess": {
    componentName: "IsInvolvedInBiologicalProcessPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IsInvolvedInBiologicalProcessPropertyStructuredData data={intent.data as IsInvolvedInBiologicalProcessPropertyInput} />,
  },
  "isLocatedInSubcellularLocation": {
    componentName: "IsLocatedInSubcellularLocationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IsLocatedInSubcellularLocationPropertyStructuredData data={intent.data as IsLocatedInSubcellularLocationPropertyInput} />,
  },
  "iso6523Code": {
    componentName: "Iso6523CodePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <Iso6523CodePropertyStructuredData data={intent.data as Iso6523CodePropertyInput} />,
  },
  "isPartOf": {
    componentName: "IsPartOfPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IsPartOfPropertyStructuredData data={intent.data as IsPartOfPropertyInput} />,
  },
  "isPartOfBioChemEntity": {
    componentName: "IsPartOfBioChemEntityPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IsPartOfBioChemEntityPropertyStructuredData data={intent.data as IsPartOfBioChemEntityPropertyInput} />,
  },
  "isProprietary": {
    componentName: "IsProprietaryPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IsProprietaryPropertyStructuredData data={intent.data as IsProprietaryPropertyInput} />,
  },
  "isrcCode": {
    componentName: "IsrcCodePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IsrcCodePropertyStructuredData data={intent.data as IsrcCodePropertyInput} />,
  },
  "isRelatedTo": {
    componentName: "IsRelatedToPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IsRelatedToPropertyStructuredData data={intent.data as IsRelatedToPropertyInput} />,
  },
  "isSimilarTo": {
    componentName: "IsSimilarToPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IsSimilarToPropertyStructuredData data={intent.data as IsSimilarToPropertyInput} />,
  },
  "issn": {
    componentName: "IssnPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IssnPropertyStructuredData data={intent.data as IssnPropertyInput} />,
  },
  "issuedBy": {
    componentName: "IssuedByPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IssuedByPropertyStructuredData data={intent.data as IssuedByPropertyInput} />,
  },
  "isTierOf": {
    componentName: "IsTierOfPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IsTierOfPropertyStructuredData data={intent.data as IsTierOfPropertyInput} />,
  },
  "isUnlabelledFallback": {
    componentName: "IsUnlabelledFallbackPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IsUnlabelledFallbackPropertyStructuredData data={intent.data as IsUnlabelledFallbackPropertyInput} />,
  },
  "isVariantOf": {
    componentName: "IsVariantOfPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IsVariantOfPropertyStructuredData data={intent.data as IsVariantOfPropertyInput} />,
  },
  "iswcCode": {
    componentName: "IswcCodePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <IswcCodePropertyStructuredData data={intent.data as IswcCodePropertyInput} />,
  },
  "item": {
    componentName: "ItemPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ItemPropertyStructuredData data={intent.data as ItemPropertyInput} />,
  },
  "itemCondition": {
    componentName: "ItemConditionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ItemConditionPropertyStructuredData data={intent.data as ItemConditionPropertyInput} />,
  },
  "itemDefectReturnFees": {
    componentName: "ItemDefectReturnFeesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ItemDefectReturnFeesPropertyStructuredData data={intent.data as ItemDefectReturnFeesPropertyInput} />,
  },
  "itemDefectReturnLabelSource": {
    componentName: "ItemDefectReturnLabelSourcePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ItemDefectReturnLabelSourcePropertyStructuredData data={intent.data as ItemDefectReturnLabelSourcePropertyInput} />,
  },
  "itemDefectReturnShippingFeesAmount": {
    componentName: "ItemDefectReturnShippingFeesAmountPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ItemDefectReturnShippingFeesAmountPropertyStructuredData data={intent.data as ItemDefectReturnShippingFeesAmountPropertyInput} />,
  },
  "itemListElement": {
    componentName: "ItemListElementPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ItemListElementPropertyStructuredData data={intent.data as ItemListElementPropertyInput} />,
  },
  "itemListOrder": {
    componentName: "ItemListOrderPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ItemListOrderPropertyStructuredData data={intent.data as ItemListOrderPropertyInput} />,
  },
  "itemOffered": {
    componentName: "ItemOfferedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ItemOfferedPropertyStructuredData data={intent.data as ItemOfferedPropertyInput} />,
  },
  "itemReviewed": {
    componentName: "ItemReviewedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ItemReviewedPropertyStructuredData data={intent.data as ItemReviewedPropertyInput} />,
  },
  "itinerary": {
    componentName: "ItineraryPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ItineraryPropertyStructuredData data={intent.data as ItineraryPropertyInput} />,
  },
  "jobTitle": {
    componentName: "JobTitlePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <JobTitlePropertyStructuredData data={intent.data as JobTitlePropertyInput} />,
  },
  "keywords": {
    componentName: "KeywordsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <KeywordsPropertyStructuredData data={intent.data as KeywordsPropertyInput} />,
  },
  "knows": {
    componentName: "KnowsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <KnowsPropertyStructuredData data={intent.data as KnowsPropertyInput} />,
  },
  "knowsAbout": {
    componentName: "KnowsAboutPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <KnowsAboutPropertyStructuredData data={intent.data as KnowsAboutPropertyInput} />,
  },
  "knowsLanguage": {
    componentName: "KnowsLanguagePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <KnowsLanguagePropertyStructuredData data={intent.data as KnowsLanguagePropertyInput} />,
  },
  "labelDetails": {
    componentName: "LabelDetailsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LabelDetailsPropertyStructuredData data={intent.data as LabelDetailsPropertyInput} />,
  },
  "lastReviewed": {
    componentName: "LastReviewedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LastReviewedPropertyStructuredData data={intent.data as LastReviewedPropertyInput} />,
  },
  "latitude": {
    componentName: "LatitudePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LatitudePropertyStructuredData data={intent.data as LatitudePropertyInput} />,
  },
  "learningResourceType": {
    componentName: "LearningResourceTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LearningResourceTypePropertyStructuredData data={intent.data as LearningResourceTypePropertyInput} />,
  },
  "leaseLength": {
    componentName: "LeaseLengthPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LeaseLengthPropertyStructuredData data={intent.data as LeaseLengthPropertyInput} />,
  },
  "legalAddress": {
    componentName: "LegalAddressPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LegalAddressPropertyStructuredData data={intent.data as LegalAddressPropertyInput} />,
  },
  "legalName": {
    componentName: "LegalNamePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LegalNamePropertyStructuredData data={intent.data as LegalNamePropertyInput} />,
  },
  "legalRepresentative": {
    componentName: "LegalRepresentativePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LegalRepresentativePropertyStructuredData data={intent.data as LegalRepresentativePropertyInput} />,
  },
  "legalStatus": {
    componentName: "LegalStatusPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LegalStatusPropertyStructuredData data={intent.data as LegalStatusPropertyInput} />,
  },
  "leiCode": {
    componentName: "LeiCodePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LeiCodePropertyStructuredData data={intent.data as LeiCodePropertyInput} />,
  },
  "license": {
    componentName: "LicensePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LicensePropertyStructuredData data={intent.data as LicensePropertyInput} />,
  },
  "lifeEvent": {
    componentName: "LifeEventPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LifeEventPropertyStructuredData data={intent.data as LifeEventPropertyInput} />,
  },
  "line": {
    componentName: "LinePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LinePropertyStructuredData data={intent.data as LinePropertyInput} />,
  },
  "loanPaymentAmount": {
    componentName: "LoanPaymentAmountPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LoanPaymentAmountPropertyStructuredData data={intent.data as LoanPaymentAmountPropertyInput} />,
  },
  "loanPaymentFrequency": {
    componentName: "LoanPaymentFrequencyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LoanPaymentFrequencyPropertyStructuredData data={intent.data as LoanPaymentFrequencyPropertyInput} />,
  },
  "loanRepaymentForm": {
    componentName: "LoanRepaymentFormPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LoanRepaymentFormPropertyStructuredData data={intent.data as LoanRepaymentFormPropertyInput} />,
  },
  "loanTerm": {
    componentName: "LoanTermPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LoanTermPropertyStructuredData data={intent.data as LoanTermPropertyInput} />,
  },
  "loanType": {
    componentName: "LoanTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LoanTypePropertyStructuredData data={intent.data as LoanTypePropertyInput} />,
  },
  "location": {
    componentName: "LocationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LocationPropertyStructuredData data={intent.data as LocationPropertyInput} />,
  },
  "locationCreated": {
    componentName: "LocationCreatedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LocationCreatedPropertyStructuredData data={intent.data as LocationCreatedPropertyInput} />,
  },
  "logo": {
    componentName: "LogoPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LogoPropertyStructuredData data={intent.data as LogoPropertyInput} />,
  },
  "longitude": {
    componentName: "LongitudePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LongitudePropertyStructuredData data={intent.data as LongitudePropertyInput} />,
  },
  "lowPrice": {
    componentName: "LowPricePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LowPricePropertyStructuredData data={intent.data as LowPricePropertyInput} />,
  },
  "lyricist": {
    componentName: "LyricistPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LyricistPropertyStructuredData data={intent.data as LyricistPropertyInput} />,
  },
  "lyrics": {
    componentName: "LyricsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <LyricsPropertyStructuredData data={intent.data as LyricsPropertyInput} />,
  },
  "mainContentOfPage": {
    componentName: "MainContentOfPagePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MainContentOfPagePropertyStructuredData data={intent.data as MainContentOfPagePropertyInput} />,
  },
  "mainEntity": {
    componentName: "MainEntityPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MainEntityPropertyStructuredData data={intent.data as MainEntityPropertyInput} />,
  },
  "mainEntityOfPage": {
    componentName: "MainEntityOfPagePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MainEntityOfPagePropertyStructuredData data={intent.data as MainEntityOfPagePropertyInput} />,
  },
  "maintainer": {
    componentName: "MaintainerPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MaintainerPropertyStructuredData data={intent.data as MaintainerPropertyInput} />,
  },
  "makesOffer": {
    componentName: "MakesOfferPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MakesOfferPropertyStructuredData data={intent.data as MakesOfferPropertyInput} />,
  },
  "manufacturer": {
    componentName: "ManufacturerPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ManufacturerPropertyStructuredData data={intent.data as ManufacturerPropertyInput} />,
  },
  "map": {
    componentName: "MapPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MapPropertyStructuredData data={intent.data as MapPropertyInput} />,
  },
  "maps": {
    componentName: "MapsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MapsPropertyStructuredData data={intent.data as MapsPropertyInput} />,
  },
  "mapType": {
    componentName: "MapTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MapTypePropertyStructuredData data={intent.data as MapTypePropertyInput} />,
  },
  "material": {
    componentName: "MaterialPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MaterialPropertyStructuredData data={intent.data as MaterialPropertyInput} />,
  },
  "materialExtent": {
    componentName: "MaterialExtentPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MaterialExtentPropertyStructuredData data={intent.data as MaterialExtentPropertyInput} />,
  },
  "maximumAttendeeCapacity": {
    componentName: "MaximumAttendeeCapacityPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MaximumAttendeeCapacityPropertyStructuredData data={intent.data as MaximumAttendeeCapacityPropertyInput} />,
  },
  "maximumIntake": {
    componentName: "MaximumIntakePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MaximumIntakePropertyStructuredData data={intent.data as MaximumIntakePropertyInput} />,
  },
  "maximumPhysicalAttendeeCapacity": {
    componentName: "MaximumPhysicalAttendeeCapacityPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MaximumPhysicalAttendeeCapacityPropertyStructuredData data={intent.data as MaximumPhysicalAttendeeCapacityPropertyInput} />,
  },
  "maximumVirtualAttendeeCapacity": {
    componentName: "MaximumVirtualAttendeeCapacityPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MaximumVirtualAttendeeCapacityPropertyStructuredData data={intent.data as MaximumVirtualAttendeeCapacityPropertyInput} />,
  },
  "maxPrice": {
    componentName: "MaxPricePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MaxPricePropertyStructuredData data={intent.data as MaxPricePropertyInput} />,
  },
  "maxValue": {
    componentName: "MaxValuePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MaxValuePropertyStructuredData data={intent.data as MaxValuePropertyInput} />,
  },
  "measuredProperty": {
    componentName: "MeasuredPropertyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MeasuredPropertyPropertyStructuredData data={intent.data as MeasuredPropertyPropertyInput} />,
  },
  "measurementDenominator": {
    componentName: "MeasurementDenominatorPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MeasurementDenominatorPropertyStructuredData data={intent.data as MeasurementDenominatorPropertyInput} />,
  },
  "measurementMethod": {
    componentName: "MeasurementMethodPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MeasurementMethodPropertyStructuredData data={intent.data as MeasurementMethodPropertyInput} />,
  },
  "measurementQualifier": {
    componentName: "MeasurementQualifierPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MeasurementQualifierPropertyStructuredData data={intent.data as MeasurementQualifierPropertyInput} />,
  },
  "measurementTechnique": {
    componentName: "MeasurementTechniquePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MeasurementTechniquePropertyStructuredData data={intent.data as MeasurementTechniquePropertyInput} />,
  },
  "mechanismOfAction": {
    componentName: "MechanismOfActionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MechanismOfActionPropertyStructuredData data={intent.data as MechanismOfActionPropertyInput} />,
  },
  "median": {
    componentName: "MedianPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MedianPropertyStructuredData data={intent.data as MedianPropertyInput} />,
  },
  "medicalAudience": {
    componentName: "MedicalAudiencePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MedicalAudiencePropertyStructuredData data={intent.data as MedicalAudiencePropertyInput} />,
  },
  "medicineSystem": {
    componentName: "MedicineSystemPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MedicineSystemPropertyStructuredData data={intent.data as MedicineSystemPropertyInput} />,
  },
  "member": {
    componentName: "MemberPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MemberPropertyStructuredData data={intent.data as MemberPropertyInput} />,
  },
  "memberOf": {
    componentName: "MemberOfPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MemberOfPropertyStructuredData data={intent.data as MemberOfPropertyInput} />,
  },
  "members": {
    componentName: "MembersPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MembersPropertyStructuredData data={intent.data as MembersPropertyInput} />,
  },
  "membershipNumber": {
    componentName: "MembershipNumberPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MembershipNumberPropertyStructuredData data={intent.data as MembershipNumberPropertyInput} />,
  },
  "membershipPointsEarned": {
    componentName: "MembershipPointsEarnedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MembershipPointsEarnedPropertyStructuredData data={intent.data as MembershipPointsEarnedPropertyInput} />,
  },
  "memoryRequirements": {
    componentName: "MemoryRequirementsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MemoryRequirementsPropertyStructuredData data={intent.data as MemoryRequirementsPropertyInput} />,
  },
  "mentions": {
    componentName: "MentionsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MentionsPropertyStructuredData data={intent.data as MentionsPropertyInput} />,
  },
  "menuAddOn": {
    componentName: "MenuAddOnPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MenuAddOnPropertyStructuredData data={intent.data as MenuAddOnPropertyInput} />,
  },
  "merchantReturnDays": {
    componentName: "MerchantReturnDaysPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MerchantReturnDaysPropertyStructuredData data={intent.data as MerchantReturnDaysPropertyInput} />,
  },
  "merchantReturnLink": {
    componentName: "MerchantReturnLinkPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MerchantReturnLinkPropertyStructuredData data={intent.data as MerchantReturnLinkPropertyInput} />,
  },
  "minPrice": {
    componentName: "MinPricePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MinPricePropertyStructuredData data={intent.data as MinPricePropertyInput} />,
  },
  "minValue": {
    componentName: "MinValuePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MinValuePropertyStructuredData data={intent.data as MinValuePropertyInput} />,
  },
  "mobileUrl": {
    componentName: "MobileUrlPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MobileUrlPropertyStructuredData data={intent.data as MobileUrlPropertyInput} />,
  },
  "model": {
    componentName: "ModelPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ModelPropertyStructuredData data={intent.data as ModelPropertyInput} />,
  },
  "monthlyMinimumRepaymentAmount": {
    componentName: "MonthlyMinimumRepaymentAmountPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MonthlyMinimumRepaymentAmountPropertyStructuredData data={intent.data as MonthlyMinimumRepaymentAmountPropertyInput} />,
  },
  "monthsOfExperience": {
    componentName: "MonthsOfExperiencePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MonthsOfExperiencePropertyStructuredData data={intent.data as MonthsOfExperiencePropertyInput} />,
  },
  "mpn": {
    componentName: "MpnPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MpnPropertyStructuredData data={intent.data as MpnPropertyInput} />,
  },
  "musicalKey": {
    componentName: "MusicalKeyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MusicalKeyPropertyStructuredData data={intent.data as MusicalKeyPropertyInput} />,
  },
  "musicArrangement": {
    componentName: "MusicArrangementPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MusicArrangementPropertyStructuredData data={intent.data as MusicArrangementPropertyInput} />,
  },
  "musicBy": {
    componentName: "MusicByPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MusicByPropertyStructuredData data={intent.data as MusicByPropertyInput} />,
  },
  "musicCompositionForm": {
    componentName: "MusicCompositionFormPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MusicCompositionFormPropertyStructuredData data={intent.data as MusicCompositionFormPropertyInput} />,
  },
  "musicGroupMember": {
    componentName: "MusicGroupMemberPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MusicGroupMemberPropertyStructuredData data={intent.data as MusicGroupMemberPropertyInput} />,
  },
  "musicReleaseFormat": {
    componentName: "MusicReleaseFormatPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <MusicReleaseFormatPropertyStructuredData data={intent.data as MusicReleaseFormatPropertyInput} />,
  },
  "naics": {
    componentName: "NaicsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <NaicsPropertyStructuredData data={intent.data as NaicsPropertyInput} />,
  },
  "name": {
    componentName: "NamePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <NamePropertyStructuredData data={intent.data as NamePropertyInput} />,
  },
  "nationality": {
    componentName: "NationalityPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <NationalityPropertyStructuredData data={intent.data as NationalityPropertyInput} />,
  },
  "naturalProgression": {
    componentName: "NaturalProgressionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <NaturalProgressionPropertyStructuredData data={intent.data as NaturalProgressionPropertyInput} />,
  },
  "negativeNotes": {
    componentName: "NegativeNotesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <NegativeNotesPropertyStructuredData data={intent.data as NegativeNotesPropertyInput} />,
  },
  "netWorth": {
    componentName: "NetWorthPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <NetWorthPropertyStructuredData data={intent.data as NetWorthPropertyInput} />,
  },
  "nextItem": {
    componentName: "NextItemPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <NextItemPropertyStructuredData data={intent.data as NextItemPropertyInput} />,
  },
  "nonprofitStatus": {
    componentName: "NonprofitStatusPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <NonprofitStatusPropertyStructuredData data={intent.data as NonprofitStatusPropertyInput} />,
  },
  "nonProprietaryName": {
    componentName: "NonProprietaryNamePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <NonProprietaryNamePropertyStructuredData data={intent.data as NonProprietaryNamePropertyInput} />,
  },
  "normalRange": {
    componentName: "NormalRangePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <NormalRangePropertyStructuredData data={intent.data as NormalRangePropertyInput} />,
  },
  "nsn": {
    componentName: "NsnPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <NsnPropertyStructuredData data={intent.data as NsnPropertyInput} />,
  },
  "numberOfEmployees": {
    componentName: "NumberOfEmployeesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <NumberOfEmployeesPropertyStructuredData data={intent.data as NumberOfEmployeesPropertyInput} />,
  },
  "numberOfEpisodes": {
    componentName: "NumberOfEpisodesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <NumberOfEpisodesPropertyStructuredData data={intent.data as NumberOfEpisodesPropertyInput} />,
  },
  "numberOfItems": {
    componentName: "NumberOfItemsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <NumberOfItemsPropertyStructuredData data={intent.data as NumberOfItemsPropertyInput} />,
  },
  "numberOfLoanPayments": {
    componentName: "NumberOfLoanPaymentsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <NumberOfLoanPaymentsPropertyStructuredData data={intent.data as NumberOfLoanPaymentsPropertyInput} />,
  },
  "numConstraints": {
    componentName: "NumConstraintsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <NumConstraintsPropertyStructuredData data={intent.data as NumConstraintsPropertyInput} />,
  },
  "numItems": {
    componentName: "NumItemsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <NumItemsPropertyStructuredData data={intent.data as NumItemsPropertyInput} />,
  },
  "numTracks": {
    componentName: "NumTracksPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <NumTracksPropertyStructuredData data={intent.data as NumTracksPropertyInput} />,
  },
  "nutrition": {
    componentName: "NutritionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <NutritionPropertyStructuredData data={intent.data as NutritionPropertyInput} />,
  },
  "object": {
    componentName: "ObjectPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ObjectPropertyStructuredData data={intent.data as ObjectPropertyInput} />,
  },
  "occupationalCategory": {
    componentName: "OccupationalCategoryPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <OccupationalCategoryPropertyStructuredData data={intent.data as OccupationalCategoryPropertyInput} />,
  },
  "occupationLocation": {
    componentName: "OccupationLocationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <OccupationLocationPropertyStructuredData data={intent.data as OccupationLocationPropertyInput} />,
  },
  "offerCount": {
    componentName: "OfferCountPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <OfferCountPropertyStructuredData data={intent.data as OfferCountPropertyInput} />,
  },
  "offeredBy": {
    componentName: "OfferedByPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <OfferedByPropertyStructuredData data={intent.data as OfferedByPropertyInput} />,
  },
  "offers": {
    componentName: "OffersPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <OffersPropertyStructuredData data={intent.data as OffersPropertyInput} />,
  },
  "offersPrescriptionByMail": {
    componentName: "OffersPrescriptionByMailPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <OffersPrescriptionByMailPropertyStructuredData data={intent.data as OffersPrescriptionByMailPropertyInput} />,
  },
  "openingHours": {
    componentName: "OpeningHoursPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <OpeningHoursPropertyStructuredData data={intent.data as OpeningHoursPropertyInput} />,
  },
  "openingHoursSpecification": {
    componentName: "OpeningHoursSpecificationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <OpeningHoursSpecificationPropertyStructuredData data={intent.data as OpeningHoursSpecificationPropertyInput} />,
  },
  "opens": {
    componentName: "OpensPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <OpensPropertyStructuredData data={intent.data as OpensPropertyInput} />,
  },
  "operatingSystem": {
    componentName: "OperatingSystemPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <OperatingSystemPropertyStructuredData data={intent.data as OperatingSystemPropertyInput} />,
  },
  "orderPercentage": {
    componentName: "OrderPercentagePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <OrderPercentagePropertyStructuredData data={intent.data as OrderPercentagePropertyInput} />,
  },
  "orderValue": {
    componentName: "OrderValuePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <OrderValuePropertyStructuredData data={intent.data as OrderValuePropertyInput} />,
  },
  "organizer": {
    componentName: "OrganizerPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <OrganizerPropertyStructuredData data={intent.data as OrganizerPropertyInput} />,
  },
  "overdosage": {
    componentName: "OverdosagePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <OverdosagePropertyStructuredData data={intent.data as OverdosagePropertyInput} />,
  },
  "owner": {
    componentName: "OwnerPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <OwnerPropertyStructuredData data={intent.data as OwnerPropertyInput} />,
  },
  "ownershipFundingInfo": {
    componentName: "OwnershipFundingInfoPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <OwnershipFundingInfoPropertyStructuredData data={intent.data as OwnershipFundingInfoPropertyInput} />,
  },
  "owns": {
    componentName: "OwnsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <OwnsPropertyStructuredData data={intent.data as OwnsPropertyInput} />,
  },
  "pageEnd": {
    componentName: "PageEndPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PageEndPropertyStructuredData data={intent.data as PageEndPropertyInput} />,
  },
  "pageStart": {
    componentName: "PageStartPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PageStartPropertyStructuredData data={intent.data as PageStartPropertyInput} />,
  },
  "pagination": {
    componentName: "PaginationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PaginationPropertyStructuredData data={intent.data as PaginationPropertyInput} />,
  },
  "parent": {
    componentName: "ParentPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ParentPropertyStructuredData data={intent.data as ParentPropertyInput} />,
  },
  "parentItem": {
    componentName: "ParentItemPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ParentItemPropertyStructuredData data={intent.data as ParentItemPropertyInput} />,
  },
  "parentOrganization": {
    componentName: "ParentOrganizationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ParentOrganizationPropertyStructuredData data={intent.data as ParentOrganizationPropertyInput} />,
  },
  "parents": {
    componentName: "ParentsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ParentsPropertyStructuredData data={intent.data as ParentsPropertyInput} />,
  },
  "parentService": {
    componentName: "ParentServicePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ParentServicePropertyStructuredData data={intent.data as ParentServicePropertyInput} />,
  },
  "parentTaxon": {
    componentName: "ParentTaxonPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ParentTaxonPropertyStructuredData data={intent.data as ParentTaxonPropertyInput} />,
  },
  "participant": {
    componentName: "ParticipantPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ParticipantPropertyStructuredData data={intent.data as ParticipantPropertyInput} />,
  },
  "partOfEpisode": {
    componentName: "PartOfEpisodePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PartOfEpisodePropertyStructuredData data={intent.data as PartOfEpisodePropertyInput} />,
  },
  "partOfSeason": {
    componentName: "PartOfSeasonPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PartOfSeasonPropertyStructuredData data={intent.data as PartOfSeasonPropertyInput} />,
  },
  "partOfSeries": {
    componentName: "PartOfSeriesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PartOfSeriesPropertyStructuredData data={intent.data as PartOfSeriesPropertyInput} />,
  },
  "partOfSystem": {
    componentName: "PartOfSystemPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PartOfSystemPropertyStructuredData data={intent.data as PartOfSystemPropertyInput} />,
  },
  "partOfTrip": {
    componentName: "PartOfTripPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PartOfTripPropertyStructuredData data={intent.data as PartOfTripPropertyInput} />,
  },
  "pathophysiology": {
    componentName: "PathophysiologyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PathophysiologyPropertyStructuredData data={intent.data as PathophysiologyPropertyInput} />,
  },
  "pattern": {
    componentName: "PatternPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PatternPropertyStructuredData data={intent.data as PatternPropertyInput} />,
  },
  "paymentMethodType": {
    componentName: "PaymentMethodTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PaymentMethodTypePropertyStructuredData data={intent.data as PaymentMethodTypePropertyInput} />,
  },
  "percentile10": {
    componentName: "Percentile10PropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <Percentile10PropertyStructuredData data={intent.data as Percentile10PropertyInput} />,
  },
  "percentile25": {
    componentName: "Percentile25PropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <Percentile25PropertyStructuredData data={intent.data as Percentile25PropertyInput} />,
  },
  "percentile75": {
    componentName: "Percentile75PropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <Percentile75PropertyStructuredData data={intent.data as Percentile75PropertyInput} />,
  },
  "percentile90": {
    componentName: "Percentile90PropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <Percentile90PropertyStructuredData data={intent.data as Percentile90PropertyInput} />,
  },
  "performer": {
    componentName: "PerformerPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PerformerPropertyStructuredData data={intent.data as PerformerPropertyInput} />,
  },
  "performerIn": {
    componentName: "PerformerInPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PerformerInPropertyStructuredData data={intent.data as PerformerInPropertyInput} />,
  },
  "performers": {
    componentName: "PerformersPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PerformersPropertyStructuredData data={intent.data as PerformersPropertyInput} />,
  },
  "performTime": {
    componentName: "PerformTimePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PerformTimePropertyStructuredData data={intent.data as PerformTimePropertyInput} />,
  },
  "permissions": {
    componentName: "PermissionsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PermissionsPropertyStructuredData data={intent.data as PermissionsPropertyInput} />,
  },
  "photo": {
    componentName: "PhotoPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PhotoPropertyStructuredData data={intent.data as PhotoPropertyInput} />,
  },
  "photos": {
    componentName: "PhotosPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PhotosPropertyStructuredData data={intent.data as PhotosPropertyInput} />,
  },
  "physiologicalBenefits": {
    componentName: "PhysiologicalBenefitsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PhysiologicalBenefitsPropertyStructuredData data={intent.data as PhysiologicalBenefitsPropertyInput} />,
  },
  "playerType": {
    componentName: "PlayerTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PlayerTypePropertyStructuredData data={intent.data as PlayerTypePropertyInput} />,
  },
  "polygon": {
    componentName: "PolygonPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PolygonPropertyStructuredData data={intent.data as PolygonPropertyInput} />,
  },
  "populationType": {
    componentName: "PopulationTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PopulationTypePropertyStructuredData data={intent.data as PopulationTypePropertyInput} />,
  },
  "position": {
    componentName: "PositionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PositionPropertyStructuredData data={intent.data as PositionPropertyInput} />,
  },
  "positiveNotes": {
    componentName: "PositiveNotesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PositiveNotesPropertyStructuredData data={intent.data as PositiveNotesPropertyInput} />,
  },
  "possibleComplication": {
    componentName: "PossibleComplicationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PossibleComplicationPropertyStructuredData data={intent.data as PossibleComplicationPropertyInput} />,
  },
  "possibleTreatment": {
    componentName: "PossibleTreatmentPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PossibleTreatmentPropertyStructuredData data={intent.data as PossibleTreatmentPropertyInput} />,
  },
  "postalCode": {
    componentName: "PostalCodePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PostalCodePropertyStructuredData data={intent.data as PostalCodePropertyInput} />,
  },
  "postalCodeBegin": {
    componentName: "PostalCodeBeginPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PostalCodeBeginPropertyStructuredData data={intent.data as PostalCodeBeginPropertyInput} />,
  },
  "postalCodeEnd": {
    componentName: "PostalCodeEndPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PostalCodeEndPropertyStructuredData data={intent.data as PostalCodeEndPropertyInput} />,
  },
  "postalCodePrefix": {
    componentName: "PostalCodePrefixPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PostalCodePrefixPropertyStructuredData data={intent.data as PostalCodePrefixPropertyInput} />,
  },
  "postalCodeRange": {
    componentName: "PostalCodeRangePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PostalCodeRangePropertyStructuredData data={intent.data as PostalCodeRangePropertyInput} />,
  },
  "postOfficeBoxNumber": {
    componentName: "PostOfficeBoxNumberPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PostOfficeBoxNumberPropertyStructuredData data={intent.data as PostOfficeBoxNumberPropertyInput} />,
  },
  "postOp": {
    componentName: "PostOpPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PostOpPropertyStructuredData data={intent.data as PostOpPropertyInput} />,
  },
  "potentialAction": {
    componentName: "PotentialActionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PotentialActionPropertyStructuredData data={intent.data as PotentialActionPropertyInput} />,
  },
  "predecessorOf": {
    componentName: "PredecessorOfPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PredecessorOfPropertyStructuredData data={intent.data as PredecessorOfPropertyInput} />,
  },
  "pregnancyCategory": {
    componentName: "PregnancyCategoryPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PregnancyCategoryPropertyStructuredData data={intent.data as PregnancyCategoryPropertyInput} />,
  },
  "pregnancyWarning": {
    componentName: "PregnancyWarningPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PregnancyWarningPropertyStructuredData data={intent.data as PregnancyWarningPropertyInput} />,
  },
  "preOp": {
    componentName: "PreOpPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PreOpPropertyStructuredData data={intent.data as PreOpPropertyInput} />,
  },
  "preparation": {
    componentName: "PreparationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PreparationPropertyStructuredData data={intent.data as PreparationPropertyInput} />,
  },
  "prepTime": {
    componentName: "PrepTimePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PrepTimePropertyStructuredData data={intent.data as PrepTimePropertyInput} />,
  },
  "prescribingInfo": {
    componentName: "PrescribingInfoPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PrescribingInfoPropertyStructuredData data={intent.data as PrescribingInfoPropertyInput} />,
  },
  "prescriptionStatus": {
    componentName: "PrescriptionStatusPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PrescriptionStatusPropertyStructuredData data={intent.data as PrescriptionStatusPropertyInput} />,
  },
  "previousItem": {
    componentName: "PreviousItemPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PreviousItemPropertyStructuredData data={intent.data as PreviousItemPropertyInput} />,
  },
  "previousStartDate": {
    componentName: "PreviousStartDatePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PreviousStartDatePropertyStructuredData data={intent.data as PreviousStartDatePropertyInput} />,
  },
  "price": {
    componentName: "PricePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PricePropertyStructuredData data={intent.data as PricePropertyInput} />,
  },
  "priceComponentType": {
    componentName: "PriceComponentTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PriceComponentTypePropertyStructuredData data={intent.data as PriceComponentTypePropertyInput} />,
  },
  "priceCurrency": {
    componentName: "PriceCurrencyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PriceCurrencyPropertyStructuredData data={intent.data as PriceCurrencyPropertyInput} />,
  },
  "priceSpecification": {
    componentName: "PriceSpecificationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PriceSpecificationPropertyStructuredData data={intent.data as PriceSpecificationPropertyInput} />,
  },
  "priceType": {
    componentName: "PriceTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PriceTypePropertyStructuredData data={intent.data as PriceTypePropertyInput} />,
  },
  "priceValidUntil": {
    componentName: "PriceValidUntilPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PriceValidUntilPropertyStructuredData data={intent.data as PriceValidUntilPropertyInput} />,
  },
  "primaryImageOfPage": {
    componentName: "PrimaryImageOfPagePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PrimaryImageOfPagePropertyStructuredData data={intent.data as PrimaryImageOfPagePropertyInput} />,
  },
  "primaryPrevention": {
    componentName: "PrimaryPreventionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PrimaryPreventionPropertyStructuredData data={intent.data as PrimaryPreventionPropertyInput} />,
  },
  "printColumn": {
    componentName: "PrintColumnPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PrintColumnPropertyStructuredData data={intent.data as PrintColumnPropertyInput} />,
  },
  "printEdition": {
    componentName: "PrintEditionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PrintEditionPropertyStructuredData data={intent.data as PrintEditionPropertyInput} />,
  },
  "printPage": {
    componentName: "PrintPagePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PrintPagePropertyStructuredData data={intent.data as PrintPagePropertyInput} />,
  },
  "printSection": {
    componentName: "PrintSectionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PrintSectionPropertyStructuredData data={intent.data as PrintSectionPropertyInput} />,
  },
  "procedure": {
    componentName: "ProcedurePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ProcedurePropertyStructuredData data={intent.data as ProcedurePropertyInput} />,
  },
  "procedureType": {
    componentName: "ProcedureTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ProcedureTypePropertyStructuredData data={intent.data as ProcedureTypePropertyInput} />,
  },
  "processingTime": {
    componentName: "ProcessingTimePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ProcessingTimePropertyStructuredData data={intent.data as ProcessingTimePropertyInput} />,
  },
  "processorRequirements": {
    componentName: "ProcessorRequirementsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ProcessorRequirementsPropertyStructuredData data={intent.data as ProcessorRequirementsPropertyInput} />,
  },
  "producer": {
    componentName: "ProducerPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ProducerPropertyStructuredData data={intent.data as ProducerPropertyInput} />,
  },
  "produces": {
    componentName: "ProducesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ProducesPropertyStructuredData data={intent.data as ProducesPropertyInput} />,
  },
  "productGroupID": {
    componentName: "ProductGroupIDPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ProductGroupIDPropertyStructuredData data={intent.data as ProductGroupIDPropertyInput} />,
  },
  "productID": {
    componentName: "ProductIDPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ProductIDPropertyStructuredData data={intent.data as ProductIDPropertyInput} />,
  },
  "productionCompany": {
    componentName: "ProductionCompanyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ProductionCompanyPropertyStructuredData data={intent.data as ProductionCompanyPropertyInput} />,
  },
  "productionDate": {
    componentName: "ProductionDatePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ProductionDatePropertyStructuredData data={intent.data as ProductionDatePropertyInput} />,
  },
  "productSupported": {
    componentName: "ProductSupportedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ProductSupportedPropertyStructuredData data={intent.data as ProductSupportedPropertyInput} />,
  },
  "program": {
    componentName: "ProgramPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ProgramPropertyStructuredData data={intent.data as ProgramPropertyInput} />,
  },
  "programName": {
    componentName: "ProgramNamePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ProgramNamePropertyStructuredData data={intent.data as ProgramNamePropertyInput} />,
  },
  "pronouns": {
    componentName: "PronounsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PronounsPropertyStructuredData data={intent.data as PronounsPropertyInput} />,
  },
  "propertyID": {
    componentName: "PropertyIDPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PropertyIDPropertyStructuredData data={intent.data as PropertyIDPropertyInput} />,
  },
  "proprietaryName": {
    componentName: "ProprietaryNamePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ProprietaryNamePropertyStructuredData data={intent.data as ProprietaryNamePropertyInput} />,
  },
  "proteinContent": {
    componentName: "ProteinContentPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ProteinContentPropertyStructuredData data={intent.data as ProteinContentPropertyInput} />,
  },
  "provider": {
    componentName: "ProviderPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ProviderPropertyStructuredData data={intent.data as ProviderPropertyInput} />,
  },
  "providerMobility": {
    componentName: "ProviderMobilityPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ProviderMobilityPropertyStructuredData data={intent.data as ProviderMobilityPropertyInput} />,
  },
  "providesBroadcastService": {
    componentName: "ProvidesBroadcastServicePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ProvidesBroadcastServicePropertyStructuredData data={intent.data as ProvidesBroadcastServicePropertyInput} />,
  },
  "providesService": {
    componentName: "ProvidesServicePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ProvidesServicePropertyStructuredData data={intent.data as ProvidesServicePropertyInput} />,
  },
  "publicAccess": {
    componentName: "PublicAccessPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PublicAccessPropertyStructuredData data={intent.data as PublicAccessPropertyInput} />,
  },
  "publication": {
    componentName: "PublicationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PublicationPropertyStructuredData data={intent.data as PublicationPropertyInput} />,
  },
  "publishedBy": {
    componentName: "PublishedByPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PublishedByPropertyStructuredData data={intent.data as PublishedByPropertyInput} />,
  },
  "publishedOn": {
    componentName: "PublishedOnPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PublishedOnPropertyStructuredData data={intent.data as PublishedOnPropertyInput} />,
  },
  "publisher": {
    componentName: "PublisherPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PublisherPropertyStructuredData data={intent.data as PublisherPropertyInput} />,
  },
  "publisherImprint": {
    componentName: "PublisherImprintPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PublisherImprintPropertyStructuredData data={intent.data as PublisherImprintPropertyInput} />,
  },
  "publishingPrinciples": {
    componentName: "PublishingPrinciplesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PublishingPrinciplesPropertyStructuredData data={intent.data as PublishingPrinciplesPropertyInput} />,
  },
  "purchaseDate": {
    componentName: "PurchaseDatePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <PurchaseDatePropertyStructuredData data={intent.data as PurchaseDatePropertyInput} />,
  },
  "qualifications": {
    componentName: "QualificationsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <QualificationsPropertyStructuredData data={intent.data as QualificationsPropertyInput} />,
  },
  "rangeIncludes": {
    componentName: "RangeIncludesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RangeIncludesPropertyStructuredData data={intent.data as RangeIncludesPropertyInput} />,
  },
  "ratingCount": {
    componentName: "RatingCountPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RatingCountPropertyStructuredData data={intent.data as RatingCountPropertyInput} />,
  },
  "ratingExplanation": {
    componentName: "RatingExplanationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RatingExplanationPropertyStructuredData data={intent.data as RatingExplanationPropertyInput} />,
  },
  "ratingValue": {
    componentName: "RatingValuePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RatingValuePropertyStructuredData data={intent.data as RatingValuePropertyInput} />,
  },
  "recognizedBy": {
    componentName: "RecognizedByPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RecognizedByPropertyStructuredData data={intent.data as RecognizedByPropertyInput} />,
  },
  "recognizingAuthority": {
    componentName: "RecognizingAuthorityPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RecognizingAuthorityPropertyStructuredData data={intent.data as RecognizingAuthorityPropertyInput} />,
  },
  "recordedAs": {
    componentName: "RecordedAsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RecordedAsPropertyStructuredData data={intent.data as RecordedAsPropertyInput} />,
  },
  "recordedAt": {
    componentName: "RecordedAtPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RecordedAtPropertyStructuredData data={intent.data as RecordedAtPropertyInput} />,
  },
  "recordedIn": {
    componentName: "RecordedInPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RecordedInPropertyStructuredData data={intent.data as RecordedInPropertyInput} />,
  },
  "recordingOf": {
    componentName: "RecordingOfPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RecordingOfPropertyStructuredData data={intent.data as RecordingOfPropertyInput} />,
  },
  "recordLabel": {
    componentName: "RecordLabelPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RecordLabelPropertyStructuredData data={intent.data as RecordLabelPropertyInput} />,
  },
  "recourseLoan": {
    componentName: "RecourseLoanPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RecourseLoanPropertyStructuredData data={intent.data as RecourseLoanPropertyInput} />,
  },
  "referenceQuantity": {
    componentName: "ReferenceQuantityPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReferenceQuantityPropertyStructuredData data={intent.data as ReferenceQuantityPropertyInput} />,
  },
  "refundType": {
    componentName: "RefundTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RefundTypePropertyStructuredData data={intent.data as RefundTypePropertyInput} />,
  },
  "regionsAllowed": {
    componentName: "RegionsAllowedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RegionsAllowedPropertyStructuredData data={intent.data as RegionsAllowedPropertyInput} />,
  },
  "relatedAnatomy": {
    componentName: "RelatedAnatomyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RelatedAnatomyPropertyStructuredData data={intent.data as RelatedAnatomyPropertyInput} />,
  },
  "relatedCondition": {
    componentName: "RelatedConditionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RelatedConditionPropertyStructuredData data={intent.data as RelatedConditionPropertyInput} />,
  },
  "relatedDrug": {
    componentName: "RelatedDrugPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RelatedDrugPropertyStructuredData data={intent.data as RelatedDrugPropertyInput} />,
  },
  "relatedLink": {
    componentName: "RelatedLinkPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RelatedLinkPropertyStructuredData data={intent.data as RelatedLinkPropertyInput} />,
  },
  "relatedStructure": {
    componentName: "RelatedStructurePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RelatedStructurePropertyStructuredData data={intent.data as RelatedStructurePropertyInput} />,
  },
  "relatedTherapy": {
    componentName: "RelatedTherapyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RelatedTherapyPropertyStructuredData data={intent.data as RelatedTherapyPropertyInput} />,
  },
  "relatedTo": {
    componentName: "RelatedToPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RelatedToPropertyStructuredData data={intent.data as RelatedToPropertyInput} />,
  },
  "releaseDate": {
    componentName: "ReleaseDatePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReleaseDatePropertyStructuredData data={intent.data as ReleaseDatePropertyInput} />,
  },
  "releasedEvent": {
    componentName: "ReleasedEventPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReleasedEventPropertyStructuredData data={intent.data as ReleasedEventPropertyInput} />,
  },
  "releaseNotes": {
    componentName: "ReleaseNotesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReleaseNotesPropertyStructuredData data={intent.data as ReleaseNotesPropertyInput} />,
  },
  "releaseOf": {
    componentName: "ReleaseOfPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReleaseOfPropertyStructuredData data={intent.data as ReleaseOfPropertyInput} />,
  },
  "relevantSpecialty": {
    componentName: "RelevantSpecialtyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RelevantSpecialtyPropertyStructuredData data={intent.data as RelevantSpecialtyPropertyInput} />,
  },
  "remainingAttendeeCapacity": {
    componentName: "RemainingAttendeeCapacityPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RemainingAttendeeCapacityPropertyStructuredData data={intent.data as RemainingAttendeeCapacityPropertyInput} />,
  },
  "renegotiableLoan": {
    componentName: "RenegotiableLoanPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RenegotiableLoanPropertyStructuredData data={intent.data as RenegotiableLoanPropertyInput} />,
  },
  "repeatCount": {
    componentName: "RepeatCountPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RepeatCountPropertyStructuredData data={intent.data as RepeatCountPropertyInput} />,
  },
  "repeatFrequency": {
    componentName: "RepeatFrequencyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RepeatFrequencyPropertyStructuredData data={intent.data as RepeatFrequencyPropertyInput} />,
  },
  "representativeOfPage": {
    componentName: "RepresentativeOfPagePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RepresentativeOfPagePropertyStructuredData data={intent.data as RepresentativeOfPagePropertyInput} />,
  },
  "requiredCollateral": {
    componentName: "RequiredCollateralPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RequiredCollateralPropertyStructuredData data={intent.data as RequiredCollateralPropertyInput} />,
  },
  "requiredGender": {
    componentName: "RequiredGenderPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RequiredGenderPropertyStructuredData data={intent.data as RequiredGenderPropertyInput} />,
  },
  "requiredMaxAge": {
    componentName: "RequiredMaxAgePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RequiredMaxAgePropertyStructuredData data={intent.data as RequiredMaxAgePropertyInput} />,
  },
  "requiredMinAge": {
    componentName: "RequiredMinAgePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RequiredMinAgePropertyStructuredData data={intent.data as RequiredMinAgePropertyInput} />,
  },
  "requiredQuantity": {
    componentName: "RequiredQuantityPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RequiredQuantityPropertyStructuredData data={intent.data as RequiredQuantityPropertyInput} />,
  },
  "requirements": {
    componentName: "RequirementsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RequirementsPropertyStructuredData data={intent.data as RequirementsPropertyInput} />,
  },
  "requiresSubscription": {
    componentName: "RequiresSubscriptionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RequiresSubscriptionPropertyStructuredData data={intent.data as RequiresSubscriptionPropertyInput} />,
  },
  "responsibilities": {
    componentName: "ResponsibilitiesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ResponsibilitiesPropertyStructuredData data={intent.data as ResponsibilitiesPropertyInput} />,
  },
  "restockingFee": {
    componentName: "RestockingFeePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RestockingFeePropertyStructuredData data={intent.data as RestockingFeePropertyInput} />,
  },
  "result": {
    componentName: "ResultPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ResultPropertyStructuredData data={intent.data as ResultPropertyInput} />,
  },
  "returnFees": {
    componentName: "ReturnFeesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReturnFeesPropertyStructuredData data={intent.data as ReturnFeesPropertyInput} />,
  },
  "returnLabelSource": {
    componentName: "ReturnLabelSourcePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReturnLabelSourcePropertyStructuredData data={intent.data as ReturnLabelSourcePropertyInput} />,
  },
  "returnMethod": {
    componentName: "ReturnMethodPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReturnMethodPropertyStructuredData data={intent.data as ReturnMethodPropertyInput} />,
  },
  "returnPolicyCategory": {
    componentName: "ReturnPolicyCategoryPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReturnPolicyCategoryPropertyStructuredData data={intent.data as ReturnPolicyCategoryPropertyInput} />,
  },
  "returnPolicyCountry": {
    componentName: "ReturnPolicyCountryPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReturnPolicyCountryPropertyStructuredData data={intent.data as ReturnPolicyCountryPropertyInput} />,
  },
  "returnPolicySeasonalOverride": {
    componentName: "ReturnPolicySeasonalOverridePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReturnPolicySeasonalOverridePropertyStructuredData data={intent.data as ReturnPolicySeasonalOverridePropertyInput} />,
  },
  "returnShippingFeesAmount": {
    componentName: "ReturnShippingFeesAmountPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReturnShippingFeesAmountPropertyStructuredData data={intent.data as ReturnShippingFeesAmountPropertyInput} />,
  },
  "review": {
    componentName: "ReviewPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReviewPropertyStructuredData data={intent.data as ReviewPropertyInput} />,
  },
  "reviewAspect": {
    componentName: "ReviewAspectPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReviewAspectPropertyStructuredData data={intent.data as ReviewAspectPropertyInput} />,
  },
  "reviewBody": {
    componentName: "ReviewBodyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReviewBodyPropertyStructuredData data={intent.data as ReviewBodyPropertyInput} />,
  },
  "reviewCount": {
    componentName: "ReviewCountPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReviewCountPropertyStructuredData data={intent.data as ReviewCountPropertyInput} />,
  },
  "reviewedBy": {
    componentName: "ReviewedByPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReviewedByPropertyStructuredData data={intent.data as ReviewedByPropertyInput} />,
  },
  "reviewRating": {
    componentName: "ReviewRatingPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReviewRatingPropertyStructuredData data={intent.data as ReviewRatingPropertyInput} />,
  },
  "reviews": {
    componentName: "ReviewsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ReviewsPropertyStructuredData data={intent.data as ReviewsPropertyInput} />,
  },
  "riskFactor": {
    componentName: "RiskFactorPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RiskFactorPropertyStructuredData data={intent.data as RiskFactorPropertyInput} />,
  },
  "risks": {
    componentName: "RisksPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RisksPropertyStructuredData data={intent.data as RisksPropertyInput} />,
  },
  "runtimePlatform": {
    componentName: "RuntimePlatformPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RuntimePlatformPropertyStructuredData data={intent.data as RuntimePlatformPropertyInput} />,
  },
  "rxcui": {
    componentName: "RxcuiPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <RxcuiPropertyStructuredData data={intent.data as RxcuiPropertyInput} />,
  },
  "sameAs": {
    componentName: "SameAsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SameAsPropertyStructuredData data={intent.data as SameAsPropertyInput} />,
  },
  "saturatedFatContent": {
    componentName: "SaturatedFatContentPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SaturatedFatContentPropertyStructuredData data={intent.data as SaturatedFatContentPropertyInput} />,
  },
  "scheduleTimezone": {
    componentName: "ScheduleTimezonePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ScheduleTimezonePropertyStructuredData data={intent.data as ScheduleTimezonePropertyInput} />,
  },
  "schemaVersion": {
    componentName: "SchemaVersionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SchemaVersionPropertyStructuredData data={intent.data as SchemaVersionPropertyInput} />,
  },
  "screenshot": {
    componentName: "ScreenshotPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ScreenshotPropertyStructuredData data={intent.data as ScreenshotPropertyInput} />,
  },
  "sdDatePublished": {
    componentName: "SdDatePublishedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SdDatePublishedPropertyStructuredData data={intent.data as SdDatePublishedPropertyInput} />,
  },
  "sdLicense": {
    componentName: "SdLicensePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SdLicensePropertyStructuredData data={intent.data as SdLicensePropertyInput} />,
  },
  "sdPublisher": {
    componentName: "SdPublisherPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SdPublisherPropertyStructuredData data={intent.data as SdPublisherPropertyInput} />,
  },
  "seasonalOverride": {
    componentName: "SeasonalOverridePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SeasonalOverridePropertyStructuredData data={intent.data as SeasonalOverridePropertyInput} />,
  },
  "seasonNumber": {
    componentName: "SeasonNumberPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SeasonNumberPropertyStructuredData data={intent.data as SeasonNumberPropertyInput} />,
  },
  "secondaryPrevention": {
    componentName: "SecondaryPreventionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SecondaryPreventionPropertyStructuredData data={intent.data as SecondaryPreventionPropertyInput} />,
  },
  "seeks": {
    componentName: "SeeksPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SeeksPropertyStructuredData data={intent.data as SeeksPropertyInput} />,
  },
  "seller": {
    componentName: "SellerPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SellerPropertyStructuredData data={intent.data as SellerPropertyInput} />,
  },
  "serialNumber": {
    componentName: "SerialNumberPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SerialNumberPropertyStructuredData data={intent.data as SerialNumberPropertyInput} />,
  },
  "seriousAdverseOutcome": {
    componentName: "SeriousAdverseOutcomePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SeriousAdverseOutcomePropertyStructuredData data={intent.data as SeriousAdverseOutcomePropertyInput} />,
  },
  "serviceArea": {
    componentName: "ServiceAreaPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ServiceAreaPropertyStructuredData data={intent.data as ServiceAreaPropertyInput} />,
  },
  "serviceAudience": {
    componentName: "ServiceAudiencePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ServiceAudiencePropertyStructuredData data={intent.data as ServiceAudiencePropertyInput} />,
  },
  "serviceLocation": {
    componentName: "ServiceLocationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ServiceLocationPropertyStructuredData data={intent.data as ServiceLocationPropertyInput} />,
  },
  "serviceOutput": {
    componentName: "ServiceOutputPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ServiceOutputPropertyStructuredData data={intent.data as ServiceOutputPropertyInput} />,
  },
  "servicePhone": {
    componentName: "ServicePhonePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ServicePhonePropertyStructuredData data={intent.data as ServicePhonePropertyInput} />,
  },
  "servicePostalAddress": {
    componentName: "ServicePostalAddressPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ServicePostalAddressPropertyStructuredData data={intent.data as ServicePostalAddressPropertyInput} />,
  },
  "serviceSmsNumber": {
    componentName: "ServiceSmsNumberPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ServiceSmsNumberPropertyStructuredData data={intent.data as ServiceSmsNumberPropertyInput} />,
  },
  "serviceType": {
    componentName: "ServiceTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ServiceTypePropertyStructuredData data={intent.data as ServiceTypePropertyInput} />,
  },
  "serviceUrl": {
    componentName: "ServiceUrlPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ServiceUrlPropertyStructuredData data={intent.data as ServiceUrlPropertyInput} />,
  },
  "servingSize": {
    componentName: "ServingSizePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ServingSizePropertyStructuredData data={intent.data as ServingSizePropertyInput} />,
  },
  "sha256": {
    componentName: "Sha256PropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <Sha256PropertyStructuredData data={intent.data as Sha256PropertyInput} />,
  },
  "sharedContent": {
    componentName: "SharedContentPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SharedContentPropertyStructuredData data={intent.data as SharedContentPropertyInput} />,
  },
  "shippingConditions": {
    componentName: "ShippingConditionsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ShippingConditionsPropertyStructuredData data={intent.data as ShippingConditionsPropertyInput} />,
  },
  "shippingDestination": {
    componentName: "ShippingDestinationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ShippingDestinationPropertyStructuredData data={intent.data as ShippingDestinationPropertyInput} />,
  },
  "shippingDetails": {
    componentName: "ShippingDetailsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ShippingDetailsPropertyStructuredData data={intent.data as ShippingDetailsPropertyInput} />,
  },
  "shippingOrigin": {
    componentName: "ShippingOriginPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ShippingOriginPropertyStructuredData data={intent.data as ShippingOriginPropertyInput} />,
  },
  "shippingRate": {
    componentName: "ShippingRatePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ShippingRatePropertyStructuredData data={intent.data as ShippingRatePropertyInput} />,
  },
  "sibling": {
    componentName: "SiblingPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SiblingPropertyStructuredData data={intent.data as SiblingPropertyInput} />,
  },
  "siblings": {
    componentName: "SiblingsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SiblingsPropertyStructuredData data={intent.data as SiblingsPropertyInput} />,
  },
  "signDetected": {
    componentName: "SignDetectedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SignDetectedPropertyStructuredData data={intent.data as SignDetectedPropertyInput} />,
  },
  "significance": {
    componentName: "SignificancePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SignificancePropertyStructuredData data={intent.data as SignificancePropertyInput} />,
  },
  "significantLink": {
    componentName: "SignificantLinkPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SignificantLinkPropertyStructuredData data={intent.data as SignificantLinkPropertyInput} />,
  },
  "significantLinks": {
    componentName: "SignificantLinksPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SignificantLinksPropertyStructuredData data={intent.data as SignificantLinksPropertyInput} />,
  },
  "signOrSymptom": {
    componentName: "SignOrSymptomPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SignOrSymptomPropertyStructuredData data={intent.data as SignOrSymptomPropertyInput} />,
  },
  "size": {
    componentName: "SizePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SizePropertyStructuredData data={intent.data as SizePropertyInput} />,
  },
  "skills": {
    componentName: "SkillsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SkillsPropertyStructuredData data={intent.data as SkillsPropertyInput} />,
  },
  "sku": {
    componentName: "SkuPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SkuPropertyStructuredData data={intent.data as SkuPropertyInput} />,
  },
  "slogan": {
    componentName: "SloganPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SloganPropertyStructuredData data={intent.data as SloganPropertyInput} />,
  },
  "smokingAllowed": {
    componentName: "SmokingAllowedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SmokingAllowedPropertyStructuredData data={intent.data as SmokingAllowedPropertyInput} />,
  },
  "sodiumContent": {
    componentName: "SodiumContentPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SodiumContentPropertyStructuredData data={intent.data as SodiumContentPropertyInput} />,
  },
  "softwareAddOn": {
    componentName: "SoftwareAddOnPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SoftwareAddOnPropertyStructuredData data={intent.data as SoftwareAddOnPropertyInput} />,
  },
  "softwareHelp": {
    componentName: "SoftwareHelpPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SoftwareHelpPropertyStructuredData data={intent.data as SoftwareHelpPropertyInput} />,
  },
  "softwareRequirements": {
    componentName: "SoftwareRequirementsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SoftwareRequirementsPropertyStructuredData data={intent.data as SoftwareRequirementsPropertyInput} />,
  },
  "softwareVersion": {
    componentName: "SoftwareVersionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SoftwareVersionPropertyStructuredData data={intent.data as SoftwareVersionPropertyInput} />,
  },
  "sourceOrganization": {
    componentName: "SourceOrganizationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SourceOrganizationPropertyStructuredData data={intent.data as SourceOrganizationPropertyInput} />,
  },
  "spatial": {
    componentName: "SpatialPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SpatialPropertyStructuredData data={intent.data as SpatialPropertyInput} />,
  },
  "spatialCoverage": {
    componentName: "SpatialCoveragePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SpatialCoveragePropertyStructuredData data={intent.data as SpatialCoveragePropertyInput} />,
  },
  "speakable": {
    componentName: "SpeakablePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SpeakablePropertyStructuredData data={intent.data as SpeakablePropertyInput} />,
  },
  "specialOpeningHoursSpecification": {
    componentName: "SpecialOpeningHoursSpecificationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SpecialOpeningHoursSpecificationPropertyStructuredData data={intent.data as SpecialOpeningHoursSpecificationPropertyInput} />,
  },
  "specialty": {
    componentName: "SpecialtyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SpecialtyPropertyStructuredData data={intent.data as SpecialtyPropertyInput} />,
  },
  "sponsor": {
    componentName: "SponsorPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SponsorPropertyStructuredData data={intent.data as SponsorPropertyInput} />,
  },
  "spouse": {
    componentName: "SpousePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SpousePropertyStructuredData data={intent.data as SpousePropertyInput} />,
  },
  "stage": {
    componentName: "StagePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <StagePropertyStructuredData data={intent.data as StagePropertyInput} />,
  },
  "stageAsNumber": {
    componentName: "StageAsNumberPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <StageAsNumberPropertyStructuredData data={intent.data as StageAsNumberPropertyInput} />,
  },
  "startDate": {
    componentName: "StartDatePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <StartDatePropertyStructuredData data={intent.data as StartDatePropertyInput} />,
  },
  "startOffset": {
    componentName: "StartOffsetPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <StartOffsetPropertyStructuredData data={intent.data as StartOffsetPropertyInput} />,
  },
  "startTime": {
    componentName: "StartTimePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <StartTimePropertyStructuredData data={intent.data as StartTimePropertyInput} />,
  },
  "statType": {
    componentName: "StatTypePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <StatTypePropertyStructuredData data={intent.data as StatTypePropertyInput} />,
  },
  "status": {
    componentName: "StatusPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <StatusPropertyStructuredData data={intent.data as StatusPropertyInput} />,
  },
  "step": {
    componentName: "StepPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <StepPropertyStructuredData data={intent.data as StepPropertyInput} />,
  },
  "steps": {
    componentName: "StepsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <StepsPropertyStructuredData data={intent.data as StepsPropertyInput} />,
  },
  "storageRequirements": {
    componentName: "StorageRequirementsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <StorageRequirementsPropertyStructuredData data={intent.data as StorageRequirementsPropertyInput} />,
  },
  "streetAddress": {
    componentName: "StreetAddressPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <StreetAddressPropertyStructuredData data={intent.data as StreetAddressPropertyInput} />,
  },
  "strengthUnit": {
    componentName: "StrengthUnitPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <StrengthUnitPropertyStructuredData data={intent.data as StrengthUnitPropertyInput} />,
  },
  "strengthValue": {
    componentName: "StrengthValuePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <StrengthValuePropertyStructuredData data={intent.data as StrengthValuePropertyInput} />,
  },
  "study": {
    componentName: "StudyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <StudyPropertyStructuredData data={intent.data as StudyPropertyInput} />,
  },
  "studyLocation": {
    componentName: "StudyLocationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <StudyLocationPropertyStructuredData data={intent.data as StudyLocationPropertyInput} />,
  },
  "studySubject": {
    componentName: "StudySubjectPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <StudySubjectPropertyStructuredData data={intent.data as StudySubjectPropertyInput} />,
  },
  "subEvent": {
    componentName: "SubEventPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SubEventPropertyStructuredData data={intent.data as SubEventPropertyInput} />,
  },
  "subEvents": {
    componentName: "SubEventsPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SubEventsPropertyStructuredData data={intent.data as SubEventsPropertyInput} />,
  },
  "subjectOf": {
    componentName: "SubjectOfPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SubjectOfPropertyStructuredData data={intent.data as SubjectOfPropertyInput} />,
  },
  "subOrganization": {
    componentName: "SubOrganizationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SubOrganizationPropertyStructuredData data={intent.data as SubOrganizationPropertyInput} />,
  },
  "subStageSuffix": {
    componentName: "SubStageSuffixPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SubStageSuffixPropertyStructuredData data={intent.data as SubStageSuffixPropertyInput} />,
  },
  "subStructure": {
    componentName: "SubStructurePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SubStructurePropertyStructuredData data={intent.data as SubStructurePropertyInput} />,
  },
  "subTrip": {
    componentName: "SubTripPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SubTripPropertyStructuredData data={intent.data as SubTripPropertyInput} />,
  },
  "successorOf": {
    componentName: "SuccessorOfPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SuccessorOfPropertyStructuredData data={intent.data as SuccessorOfPropertyInput} />,
  },
  "sugarContent": {
    componentName: "SugarContentPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SugarContentPropertyStructuredData data={intent.data as SugarContentPropertyInput} />,
  },
  "suggestedAge": {
    componentName: "SuggestedAgePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SuggestedAgePropertyStructuredData data={intent.data as SuggestedAgePropertyInput} />,
  },
  "suggestedGender": {
    componentName: "SuggestedGenderPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SuggestedGenderPropertyStructuredData data={intent.data as SuggestedGenderPropertyInput} />,
  },
  "suggestedMaxAge": {
    componentName: "SuggestedMaxAgePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SuggestedMaxAgePropertyStructuredData data={intent.data as SuggestedMaxAgePropertyInput} />,
  },
  "suggestedMeasurement": {
    componentName: "SuggestedMeasurementPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SuggestedMeasurementPropertyStructuredData data={intent.data as SuggestedMeasurementPropertyInput} />,
  },
  "suggestedMinAge": {
    componentName: "SuggestedMinAgePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SuggestedMinAgePropertyStructuredData data={intent.data as SuggestedMinAgePropertyInput} />,
  },
  "suitableForDiet": {
    componentName: "SuitableForDietPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SuitableForDietPropertyStructuredData data={intent.data as SuitableForDietPropertyInput} />,
  },
  "superEvent": {
    componentName: "SuperEventPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SuperEventPropertyStructuredData data={intent.data as SuperEventPropertyInput} />,
  },
  "supersededBy": {
    componentName: "SupersededByPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SupersededByPropertyStructuredData data={intent.data as SupersededByPropertyInput} />,
  },
  "supply": {
    componentName: "SupplyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SupplyPropertyStructuredData data={intent.data as SupplyPropertyInput} />,
  },
  "supportingData": {
    componentName: "SupportingDataPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <SupportingDataPropertyStructuredData data={intent.data as SupportingDataPropertyInput} />,
  },
  "target": {
    componentName: "TargetPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TargetPropertyStructuredData data={intent.data as TargetPropertyInput} />,
  },
  "targetDescription": {
    componentName: "TargetDescriptionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TargetDescriptionPropertyStructuredData data={intent.data as TargetDescriptionPropertyInput} />,
  },
  "targetName": {
    componentName: "TargetNamePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TargetNamePropertyStructuredData data={intent.data as TargetNamePropertyInput} />,
  },
  "targetPopulation": {
    componentName: "TargetPopulationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TargetPopulationPropertyStructuredData data={intent.data as TargetPopulationPropertyInput} />,
  },
  "targetUrl": {
    componentName: "TargetUrlPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TargetUrlPropertyStructuredData data={intent.data as TargetUrlPropertyInput} />,
  },
  "taxID": {
    componentName: "TaxIDPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TaxIDPropertyStructuredData data={intent.data as TaxIDPropertyInput} />,
  },
  "taxonomicRange": {
    componentName: "TaxonomicRangePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TaxonomicRangePropertyStructuredData data={intent.data as TaxonomicRangePropertyInput} />,
  },
  "taxonRank": {
    componentName: "TaxonRankPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TaxonRankPropertyStructuredData data={intent.data as TaxonRankPropertyInput} />,
  },
  "teaches": {
    componentName: "TeachesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TeachesPropertyStructuredData data={intent.data as TeachesPropertyInput} />,
  },
  "telephone": {
    componentName: "TelephonePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TelephonePropertyStructuredData data={intent.data as TelephonePropertyInput} />,
  },
  "temporal": {
    componentName: "TemporalPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TemporalPropertyStructuredData data={intent.data as TemporalPropertyInput} />,
  },
  "temporalCoverage": {
    componentName: "TemporalCoveragePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TemporalCoveragePropertyStructuredData data={intent.data as TemporalCoveragePropertyInput} />,
  },
  "termCode": {
    componentName: "TermCodePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TermCodePropertyStructuredData data={intent.data as TermCodePropertyInput} />,
  },
  "termsOfService": {
    componentName: "TermsOfServicePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TermsOfServicePropertyStructuredData data={intent.data as TermsOfServicePropertyInput} />,
  },
  "text": {
    componentName: "TextPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TextPropertyStructuredData data={intent.data as TextPropertyInput} />,
  },
  "thumbnail": {
    componentName: "ThumbnailPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ThumbnailPropertyStructuredData data={intent.data as ThumbnailPropertyInput} />,
  },
  "thumbnailUrl": {
    componentName: "ThumbnailUrlPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ThumbnailUrlPropertyStructuredData data={intent.data as ThumbnailUrlPropertyInput} />,
  },
  "timeRequired": {
    componentName: "TimeRequiredPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TimeRequiredPropertyStructuredData data={intent.data as TimeRequiredPropertyInput} />,
  },
  "tocContinuation": {
    componentName: "TocContinuationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TocContinuationPropertyStructuredData data={intent.data as TocContinuationPropertyInput} />,
  },
  "tool": {
    componentName: "ToolPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ToolPropertyStructuredData data={intent.data as ToolPropertyInput} />,
  },
  "totalTime": {
    componentName: "TotalTimePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TotalTimePropertyStructuredData data={intent.data as TotalTimePropertyInput} />,
  },
  "tourBookingPage": {
    componentName: "TourBookingPagePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TourBookingPagePropertyStructuredData data={intent.data as TourBookingPagePropertyInput} />,
  },
  "track": {
    componentName: "TrackPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TrackPropertyStructuredData data={intent.data as TrackPropertyInput} />,
  },
  "tracks": {
    componentName: "TracksPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TracksPropertyStructuredData data={intent.data as TracksPropertyInput} />,
  },
  "trailer": {
    componentName: "TrailerPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TrailerPropertyStructuredData data={intent.data as TrailerPropertyInput} />,
  },
  "transcript": {
    componentName: "TranscriptPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TranscriptPropertyStructuredData data={intent.data as TranscriptPropertyInput} />,
  },
  "transFatContent": {
    componentName: "TransFatContentPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TransFatContentPropertyStructuredData data={intent.data as TransFatContentPropertyInput} />,
  },
  "transitTime": {
    componentName: "TransitTimePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TransitTimePropertyStructuredData data={intent.data as TransitTimePropertyInput} />,
  },
  "translationOfWork": {
    componentName: "TranslationOfWorkPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TranslationOfWorkPropertyStructuredData data={intent.data as TranslationOfWorkPropertyInput} />,
  },
  "translator": {
    componentName: "TranslatorPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TranslatorPropertyStructuredData data={intent.data as TranslatorPropertyInput} />,
  },
  "tripOrigin": {
    componentName: "TripOriginPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TripOriginPropertyStructuredData data={intent.data as TripOriginPropertyInput} />,
  },
  "typeOfGood": {
    componentName: "TypeOfGoodPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TypeOfGoodPropertyStructuredData data={intent.data as TypeOfGoodPropertyInput} />,
  },
  "typicalAgeRange": {
    componentName: "TypicalAgeRangePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TypicalAgeRangePropertyStructuredData data={intent.data as TypicalAgeRangePropertyInput} />,
  },
  "typicalTest": {
    componentName: "TypicalTestPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <TypicalTestPropertyStructuredData data={intent.data as TypicalTestPropertyInput} />,
  },
  "unitCode": {
    componentName: "UnitCodePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <UnitCodePropertyStructuredData data={intent.data as UnitCodePropertyInput} />,
  },
  "unitText": {
    componentName: "UnitTextPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <UnitTextPropertyStructuredData data={intent.data as UnitTextPropertyInput} />,
  },
  "unnamedSourcesPolicy": {
    componentName: "UnnamedSourcesPolicyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <UnnamedSourcesPolicyPropertyStructuredData data={intent.data as UnnamedSourcesPolicyPropertyInput} />,
  },
  "unsaturatedFatContent": {
    componentName: "UnsaturatedFatContentPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <UnsaturatedFatContentPropertyStructuredData data={intent.data as UnsaturatedFatContentPropertyInput} />,
  },
  "uploadDate": {
    componentName: "UploadDatePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <UploadDatePropertyStructuredData data={intent.data as UploadDatePropertyInput} />,
  },
  "upvoteCount": {
    componentName: "UpvoteCountPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <UpvoteCountPropertyStructuredData data={intent.data as UpvoteCountPropertyInput} />,
  },
  "url": {
    componentName: "UrlPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <UrlPropertyStructuredData data={intent.data as UrlPropertyInput} />,
  },
  "urlTemplate": {
    componentName: "UrlTemplatePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <UrlTemplatePropertyStructuredData data={intent.data as UrlTemplatePropertyInput} />,
  },
  "usageInfo": {
    componentName: "UsageInfoPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <UsageInfoPropertyStructuredData data={intent.data as UsageInfoPropertyInput} />,
  },
  "usedToDiagnose": {
    componentName: "UsedToDiagnosePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <UsedToDiagnosePropertyStructuredData data={intent.data as UsedToDiagnosePropertyInput} />,
  },
  "userInteractionCount": {
    componentName: "UserInteractionCountPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <UserInteractionCountPropertyStructuredData data={intent.data as UserInteractionCountPropertyInput} />,
  },
  "usesDevice": {
    componentName: "UsesDevicePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <UsesDevicePropertyStructuredData data={intent.data as UsesDevicePropertyInput} />,
  },
  "usesHealthPlanIdStandard": {
    componentName: "UsesHealthPlanIdStandardPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <UsesHealthPlanIdStandardPropertyStructuredData data={intent.data as UsesHealthPlanIdStandardPropertyInput} />,
  },
  "utterances": {
    componentName: "UtterancesPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <UtterancesPropertyStructuredData data={intent.data as UtterancesPropertyInput} />,
  },
  "validFor": {
    componentName: "ValidForPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ValidForPropertyStructuredData data={intent.data as ValidForPropertyInput} />,
  },
  "validForMemberTier": {
    componentName: "ValidForMemberTierPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ValidForMemberTierPropertyStructuredData data={intent.data as ValidForMemberTierPropertyInput} />,
  },
  "validFrom": {
    componentName: "ValidFromPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ValidFromPropertyStructuredData data={intent.data as ValidFromPropertyInput} />,
  },
  "validIn": {
    componentName: "ValidInPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ValidInPropertyStructuredData data={intent.data as ValidInPropertyInput} />,
  },
  "validThrough": {
    componentName: "ValidThroughPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ValidThroughPropertyStructuredData data={intent.data as ValidThroughPropertyInput} />,
  },
  "value": {
    componentName: "ValuePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ValuePropertyStructuredData data={intent.data as ValuePropertyInput} />,
  },
  "valueAddedTaxIncluded": {
    componentName: "ValueAddedTaxIncludedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ValueAddedTaxIncludedPropertyStructuredData data={intent.data as ValueAddedTaxIncludedPropertyInput} />,
  },
  "valueReference": {
    componentName: "ValueReferencePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <ValueReferencePropertyStructuredData data={intent.data as ValueReferencePropertyInput} />,
  },
  "variableMeasured": {
    componentName: "VariableMeasuredPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <VariableMeasuredPropertyStructuredData data={intent.data as VariableMeasuredPropertyInput} />,
  },
  "variesBy": {
    componentName: "VariesByPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <VariesByPropertyStructuredData data={intent.data as VariesByPropertyInput} />,
  },
  "vatID": {
    componentName: "VatIDPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <VatIDPropertyStructuredData data={intent.data as VatIDPropertyInput} />,
  },
  "version": {
    componentName: "VersionPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <VersionPropertyStructuredData data={intent.data as VersionPropertyInput} />,
  },
  "video": {
    componentName: "VideoPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <VideoPropertyStructuredData data={intent.data as VideoPropertyInput} />,
  },
  "videoFormat": {
    componentName: "VideoFormatPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <VideoFormatPropertyStructuredData data={intent.data as VideoFormatPropertyInput} />,
  },
  "videoFrameSize": {
    componentName: "VideoFrameSizePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <VideoFrameSizePropertyStructuredData data={intent.data as VideoFrameSizePropertyInput} />,
  },
  "videoQuality": {
    componentName: "VideoQualityPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <VideoQualityPropertyStructuredData data={intent.data as VideoQualityPropertyInput} />,
  },
  "warning": {
    componentName: "WarningPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <WarningPropertyStructuredData data={intent.data as WarningPropertyInput} />,
  },
  "warranty": {
    componentName: "WarrantyPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <WarrantyPropertyStructuredData data={intent.data as WarrantyPropertyInput} />,
  },
  "warrantyScope": {
    componentName: "WarrantyScopePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <WarrantyScopePropertyStructuredData data={intent.data as WarrantyScopePropertyInput} />,
  },
  "weight": {
    componentName: "WeightPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <WeightPropertyStructuredData data={intent.data as WeightPropertyInput} />,
  },
  "weightPercentage": {
    componentName: "WeightPercentagePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <WeightPercentagePropertyStructuredData data={intent.data as WeightPercentagePropertyInput} />,
  },
  "width": {
    componentName: "WidthPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <WidthPropertyStructuredData data={intent.data as WidthPropertyInput} />,
  },
  "wordCount": {
    componentName: "WordCountPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <WordCountPropertyStructuredData data={intent.data as WordCountPropertyInput} />,
  },
  "workExample": {
    componentName: "WorkExamplePropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <WorkExamplePropertyStructuredData data={intent.data as WorkExamplePropertyInput} />,
  },
  "workFeatured": {
    componentName: "WorkFeaturedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <WorkFeaturedPropertyStructuredData data={intent.data as WorkFeaturedPropertyInput} />,
  },
  "workLocation": {
    componentName: "WorkLocationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <WorkLocationPropertyStructuredData data={intent.data as WorkLocationPropertyInput} />,
  },
  "workPerformed": {
    componentName: "WorkPerformedPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <WorkPerformedPropertyStructuredData data={intent.data as WorkPerformedPropertyInput} />,
  },
  "worksFor": {
    componentName: "WorksForPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <WorksForPropertyStructuredData data={intent.data as WorksForPropertyInput} />,
  },
  "workTranslation": {
    componentName: "WorkTranslationPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <WorkTranslationPropertyStructuredData data={intent.data as WorkTranslationPropertyInput} />,
  },
  "worstRating": {
    componentName: "WorstRatingPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <WorstRatingPropertyStructuredData data={intent.data as WorstRatingPropertyInput} />,
  },
  "xpath": {
    componentName: "XpathPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <XpathPropertyStructuredData data={intent.data as XpathPropertyInput} />,
  },
  "yield": {
    componentName: "YieldPropertyStructuredData",
    render: (intent: CompiledStructuredDataIntent) => <YieldPropertyStructuredData data={intent.data as YieldPropertyInput} />,
  },
}) satisfies Record<string, StructuredDataIntentRendererEntry>;
