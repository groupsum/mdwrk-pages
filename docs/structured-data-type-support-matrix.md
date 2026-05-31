# Structured Data Type Support Matrix

Snapshot date: `2026-05-30`

Legend:

- `✨` = Google `Rich` support
- `🧩` = Google `Enh` support
- `⚠️` = Google deprecated / limited / phasing-out / not a practical current target
- `✅` = active Google target worth supporting for us

| Structured data type | Google feature | Risk/status | Target? | In `@mdwrk/structured-data` | JSON Schema for this type? | JSON-LD React component? | First-class fused export in `@mdwrk/lander-react`? |
|---|---:|---:|---:|---:|---:|---:|---:|
| `AboutPage` |  |  |  | Yes | Yes | Yes | Yes |
| `AggregateRating` |  |  |  | Yes | Yes | Yes | Yes |
| `Answer` | `🧩` |  | `✅` | Yes | Yes | Yes | Yes |
| `Article` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `BlogPosting` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `Book` |  |  |  | Yes | Yes | Yes | Yes |
| `BroadcastEvent` | `🧩` |  | `✅` | Yes | Yes | Yes | Yes |
| `BreadcrumbList` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `CheckoutPage` |  |  |  | Yes | Yes | Yes | Yes |
| `ClaimReview` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `Clip` | `🧩` |  | `✅` | Yes | Yes | Yes | Yes |
| `CollectionPage` |  |  |  | Yes | Yes | Yes | Yes |
| `ContactPage` |  |  |  | Yes | Yes | Yes | Yes |
| `Course` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `CourseInstance` |  |  |  | Yes | Yes | Yes | Yes |
| `Dataset` |  | `⚠️` |  | Yes | Yes | Yes | Yes |
| `DiscussionForumPosting` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `EmployerAggregateRating` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `Event` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `FAQPage` |  | `⚠️` |  | Yes | Yes | Yes | Yes |
| `HowTo` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `ImageObject` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `ItemList` | `🧩` |  | `✅` | Yes | Yes | Yes | Yes |
| `ItemPage` |  |  |  | Yes | Yes | Yes | Yes |
| `JobPosting` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `LearningResource` |  |  |  | Yes | Yes | Yes | Yes |
| `LocalBusiness` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `MathSolver` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `MemberProgram` |  |  |  | Yes | Yes | Yes | Yes |
| `MerchantReturnPolicy` | `🧩` |  | `✅` | Yes | Yes | Yes | Yes |
| `MonetaryAmountDistribution` | `🧩` |  | `✅` | Yes | Yes | Yes | Yes |
| `Movie` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `NewsArticle` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `OfferShippingDetails` | `🧩` |  | `✅` | Yes | Yes | Yes | Yes |
| `Organization` |  |  |  | Yes | Yes | Yes | Yes |
| `Product` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `ProductGroup` | `🧩` |  | `✅` | Yes | Yes | Yes | Yes |
| `ProfilePage` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `QAPage` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `Question` | `🧩` |  | `✅` | Yes | Yes | Yes | Yes |
| `Quiz` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `ReadAction` |  |  |  | Yes | Yes | Yes | Yes |
| `RealEstateListing` |  |  |  | Yes | Yes | Yes | Yes |
| `Recipe` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `Review` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `SearchResultsPage` |  |  |  | Yes | Yes | Yes | Yes |
| `SoftwareApplication` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `SoftwareSourceCode` |  |  |  | Yes | Yes | Yes | Yes |
| `SolveMathAction` | `🧩` |  | `✅` | Yes | Yes | Yes | Yes |
| `SpeakableSpecification` |  |  |  | Yes | Yes | Yes | Yes |
| `TechArticle` |  |  |  | Yes | Yes | Yes | Yes |
| `VacationRental` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `Vehicle` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `VideoGallery` |  |  |  | Yes | Yes | Yes | Yes |
| `VideoObject` | `✨` |  | `✅` | Yes | Yes | Yes | Yes |
| `WebApplication` |  |  |  | Yes | Yes | Yes | Yes |
| `WebPage` |  |  |  | Yes | Yes | Yes | Yes |
| `WebSite` |  |  |  | Yes | Yes | Yes | Yes |

## Totals

- `@mdwrk/structured-data`: `58 / 58`
- `JSON Schema`: `58 / 58`
- `JSON-LD React component`: `58 / 58`
- `First-class fused export in @mdwrk/lander-react`: `58 / 58`

## Recommended Buckets

Bucket rules:

- `fully implemented active Google targets`
  Use for active Google targets already supported across builders, schema contracts, JSON-LD React wrappers, and fused visible semantic exports.
- `fully implemented lower-priority support`
  Use for supported types that remain valid/internal/useful, but are not current priority Google targets.
- `warn, don't invest further`
  Use for types that are deprecated, limited, or not practical current Google investments.

### Fully Implemented Active Google Targets

- `Answer`
- `Article`
- `BlogPosting`
- `BroadcastEvent`
- `BreadcrumbList`
- `ClaimReview`
- `Clip`
- `Course`
- `DiscussionForumPosting`
- `EmployerAggregateRating`
- `Event`
- `HowTo`
- `ImageObject`
- `ItemList`
- `JobPosting`
- `LocalBusiness`
- `MathSolver`
- `MerchantReturnPolicy`
- `MonetaryAmountDistribution`
- `Movie`
- `NewsArticle`
- `OfferShippingDetails`
- `Product`
- `ProductGroup`
- `ProfilePage`
- `QAPage`
- `Question`
- `Quiz`
- `Recipe`
- `Review`
- `SoftwareApplication`
- `SolveMathAction`
- `VacationRental`
- `Vehicle`
- `VideoObject`

### Fully Implemented Lower-Priority Support

- `AboutPage`
- `AggregateRating`
- `Book`
- `CheckoutPage`
- `CollectionPage`
- `ContactPage`
- `CourseInstance`
- `ItemPage`
- `LearningResource`
- `MemberProgram`
- `Organization`
- `ReadAction`
- `RealEstateListing`
- `SearchResultsPage`
- `SoftwareSourceCode`
- `SpeakableSpecification`
- `TechArticle`
- `VideoGallery`
- `WebApplication`
- `WebPage`
- `WebSite`

### Warn, Don't Invest Further

- `Dataset`
  Google relevance is outside normal Search rich results and is not a practical default investment target.
- `FAQPage`
  Google support is limited or deprecated enough that we should keep local support but avoid further investment as a Google-facing feature target.
