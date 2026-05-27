# Structured Data Type Support Matrix

Snapshot date: `2026-05-27`

Legend:

- `✨` = Google `Rich` support
- `🧩` = Google `Enh` support
- `⚠️` = Google deprecated / limited / phasing-out / not a practical current target
- `✅` = active Google target worth supporting for us

| Structured data type | Google feature | Risk/status | Target? | In `@mdwrk/structured-data` | JSON Schema for this type? | Concrete React component? |
|---|---:|---:|---:|---:|---:|---:|
| `AggregateRating` |  |  |  | Yes | No | Yes |
| `Answer` | `🧩` |  | `✅` | Yes | No | Yes |
| `Article` | `✨` |  | `✅` | Yes | No | Yes |
| `BlogPosting` | `✨` |  | `✅` | Yes | No | Yes |
| `Book` |  |  |  | Yes | No | Yes |
| `BroadcastEvent` | `🧩` |  | `✅` | Yes | No | Yes |
| `BreadcrumbList` | `✨` |  | `✅` | Yes | No | Yes |
| `ClaimReview` | `✨` |  | `✅` | Yes | No | Yes |
| `Clip` | `🧩` |  | `✅` | Yes | No | Yes |
| `Course` | `✨` |  | `✅` | Yes | No | Yes |
| `CourseInstance` |  |  |  | Yes | No | Yes |
| `Dataset` |  | `⚠️` |  | Yes | No | Yes |
| `DiscussionForumPosting` | `✨` |  | `✅` | Yes | No | Yes |
| `EmployerAggregateRating` | `✨` |  | `✅` | Yes | No | Yes |
| `Event` | `✨` |  | `✅` | Yes | No | Yes |
| `FAQPage` |  | `⚠️` |  | Yes | No | Yes |
| `HowTo` | `✨` |  | `✅` | Yes | No | Yes |
| `ImageObject` | `✨` |  | `✅` | Yes | No | Yes |
| `ItemList` | `🧩` |  | `✅` | Yes | No | Yes |
| `JobPosting` | `✨` |  | `✅` | Yes | No | Yes |
| `LearningResource` |  |  |  | Yes | No | Yes |
| `LocalBusiness` | `✨` |  | `✅` | Yes | No | Yes |
| `MathSolver` | `✨` |  | `✅` | Yes | No | Yes |
| `MemberProgram` |  |  |  | Yes | No | Yes |
| `MerchantReturnPolicy` | `🧩` |  | `✅` | Yes | No | Yes |
| `MonetaryAmountDistribution` | `🧩` |  | `✅` | Yes | No | Yes |
| `Movie` | `✨` |  | `✅` | Yes | No | Yes |
| `NewsArticle` | `✨` |  | `✅` | Yes | No | Yes |
| `OfferShippingDetails` | `🧩` |  | `✅` | Yes | No | Yes |
| `Organization` |  |  |  | Yes | No | Yes |
| `Product` | `✨` |  | `✅` | Yes | No | Yes |
| `ProductGroup` | `🧩` |  | `✅` | Yes | No | Yes |
| `ProfilePage` | `✨` |  | `✅` | Yes | No | Yes |
| `QAPage` | `✨` |  | `✅` | Yes | No | Yes |
| `Question` | `🧩` |  | `✅` | Yes | No | Yes |
| `Quiz` | `✨` |  | `✅` | Yes | No | Yes |
| `ReadAction` |  |  |  | Yes | No | Yes |
| `Recipe` | `✨` |  | `✅` | Yes | No | Yes |
| `Review` | `✨` |  | `✅` | Yes | No | Yes |
| `SoftwareApplication` | `✨` |  | `✅` | Yes | No | Yes |
| `SoftwareSourceCode` |  |  |  | Yes | No | Yes |
| `SolveMathAction` | `🧩` |  | `✅` | Yes | No | Yes |
| `SpeakableSpecification` |  |  |  | Yes | No | Yes |
| `TechArticle` |  |  |  | Yes | No | Yes |
| `VacationRental` | `✨` |  | `✅` | Yes | No | Yes |
| `Vehicle` | `✨` |  | `✅` | Yes | No | Yes |
| `VideoObject` | `✨` |  | `✅` | Yes | No | Yes |
| `WebApplication` |  |  |  | Yes | No | Yes |
| `WebPage` |  |  |  | Yes | No | Yes |
| `WebSite` |  |  |  | Yes | No | Yes |

## Recommended Buckets

Bucket rules:

- `implement JSON Schema next`
  Use for active Google targets already supported in runtime and React, but still missing per-type JSON Schema contracts.
- `keep as builder+React only`
  Use for supported types that remain valid/internal/useful, but are not current priority Google targets.
- `warn, don't invest further`
  Use for types that are deprecated, limited, or not practical current Google investments.

### Implement JSON Schema Next

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

### Keep as Builder+React Only

- `AggregateRating`
- `Book`
- `CourseInstance`
- `LearningResource`
- `MemberProgram`
- `Organization`
- `ReadAction`
- `SoftwareSourceCode`
- `SpeakableSpecification`
- `TechArticle`
- `WebApplication`
- `WebPage`
- `WebSite`

### Warn, Don't Invest Further

- `Dataset`
  Google relevance is outside normal Search rich results and is not a practical default investment target.
- `FAQPage`
  Google support is limited/deprecated enough that we should keep local support but avoid further investment as a Google-facing feature target.
