# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed
- Sort breadcrumb values based on `selectedFacets`.

## [1.6.3] - 2020-06-25

### Fixed
- Error when `allSpecifications` is undefined.

## [1.6.2] - 2020-06-25

### Added
- Multiple values to `PRICERANGE`.

## [1.6.1] - 2020-06-25

### Added
- `extraData` when `productOriginVtex` is `true`.

## [1.6.0] - 2020-06-18

### Added
- `location` attributes.
- `searchState` parsing.

## [1.5.1] - 2020-06-17

### Removed
- Deprecated breadcrumb.

## [1.5.0] - 2020-06-17

### Added
- Redirect query.
- Breadcrumb to `facets`.

### Changed
- Remove `suggestions`, `correction` and `banners` from `productSearchV3` and create a query for each one.

## [1.4.1] - 2020-06-17

### Fixed

- `taxPercentage` calculation.

## [1.4.0] - 2020-06-15

### Added
- Extra data to the specification array.

## [1.3.4] - 2020-06-09

### Added
- `vtex.sae-analytics@2.x` as dependency.

## [1.3.3] - 2020-06-05

### Added
- `cacheId` to the `convertBiggyProduct`.

## [1.3.2] - 2020-06-04

### Changed
- Remove `-`from breadcrumb.

## [1.3.1] - 2020-06-03

### Changed
- Remove cacheId.

## [1.3.0] - 2020-06-02

### Added
- `hidden` property to the facets query.

### Changed
- `productClusterIds` don't show up in breadcrumb anymore.

## [1.2.0] - 2020-05-29

### Changed

- Allows specification filters with type `number` to be used as buckets.

### Fixed

- Error when receiving selected facets with `undefined` value.

## [1.1.7] - 2020-05-28

### Changed
- Replace spaces by hyphens in the `buildAttributePath` function.

## [1.1.6] - 2020-05-28

### Fixed
- Order by Release Date.

## [1.1.5] - 2020-05-14
### Changed
- Update `biggySearch` client timeout.

### Fixed
- Fix `undefined` installments causing products to not show up. 

## [1.1.4] - 2020-05-13

### Fixed
- Fix pricerange selection by removing it from the `compatibilityArgs`.

## [1.1.3] - 2020-05-08
### Added
- `taxPercentage` stub resolver on `Offer`.

## [1.1.2] - 2020-05-07

### Fixed
- NaN price in slider.

## [1.1.1] - 2020-05-05

### Fixed
- Remove filter by available SKU from `convertBiggyProduct`.

## [1.1.0] - 2020-05-20
### Fixed
- General adjustments
- Reset repo based on `vtex.search-graphql`

## [1.0.0] - 2020-05-09
### Changed
- Use Elastic instead of SOLR.

## [0.3.0] - 2020-04-20
### Added
- migrate search-graphql code to search-resolver

## [0.2.1] - 2020-04-16

## [0.2.0] - 2020-04-16 [YANKED]
### Added
- `spotPrice` resolver on `offer.ts`.

## [0.1.4] - 2020-04-15
### Fixed
- Remove unnecessary graphql-server dependency.

## [0.1.3] - 2020-04-03
### Changed
- Bump version to be built by `builder-hub@0.238.5` or higher.

## [0.1.2] - 2020-04-03
### Fixed
- Add portal segment policy.

## [0.1.0] - 2020-03-30
