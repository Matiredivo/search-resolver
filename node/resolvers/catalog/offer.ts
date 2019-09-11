import { comparator, filter, gte, head, lte, propOr, sort } from 'ramda'

const InstallmentsCriteria = {
  ALL: 'ALL',
  MAX: 'MAX',
  MIN: 'MIN',
}

export const resolvers = {
  Offer: {
    Installments: (
      { Installments }: CommertialOffer,
      { criteria, rates }: { criteria?: string; rates?: boolean }
    ) => {
      if (criteria === InstallmentsCriteria.ALL) {
        return Installments
      }
      const filteredInstallments = !rates
        ? Installments
        : filter(({ InterestRate }) => !InterestRate, Installments)

      const compareFunc = criteria === InstallmentsCriteria.MAX ? gte : lte
      const byNumberOfInstallments = comparator<CatalogInstallment>(
        (previous, next) =>
          compareFunc(previous.NumberOfInstallments, next.NumberOfInstallments)
      )

      const installments = head(
        sort(byNumberOfInstallments, filteredInstallments)
      )
      return installments ? [installments] : null
    },
    teasers: propOr([], 'Teasers'),
    giftSkuIds: propOr([], 'GiftSkuIds'),
    discountHighlights: propOr([], 'DiscountHighLight'),
  },
}
