/**
 * Guide slug and title per locale for related-guides interlinking.
 * Keys match guide identity; values give path segment (no leading slash) and display title.
 */
export const GUIDE_LINKS = {
  buyingProperty: {
    en: { slug: 'buying-property-in-aruba', title: 'Buying Property in Aruba: Step-by-Step Overview (2026 Guide)' },
    nl: { slug: 'vastgoed-kopen-in-aruba', title: 'Vastgoed kopen in Aruba: Stap-voor-Stap Overzicht (2026 Gids)' },
  },
  costs: {
    en: { slug: 'costs-of-buying-property-in-aruba', title: 'Costs of Buying Property in Aruba (Taxes, Notary & Fees)' },
    nl: { slug: 'kosten-van-het-kopen-van-vastgoed-in-aruba', title: 'Kosten van het kopen van vastgoed in Aruba (Belastingen, Notaris & Kosten)' },
  },
  averageHousePrice: {
    en: { slug: 'average-house-price-in-aruba', title: 'Average House Price in Aruba' },
    nl: { slug: 'gemiddelde-huizenprijs-aruba', title: 'Gemiddelde huizenprijs in Aruba' },
  },
  differentAreas: {
    en: { slug: 'different-areas-in-aruba', title: "Different Areas in Aruba: A Guide to the Island's Neighborhoods" },
    nl: { slug: 'verschillende-gebieden-in-aruba', title: 'Verschillende gebieden in Aruba: Gids naar de buurten van het eiland' },
  },
  freeholdVsLease: {
    en: { slug: 'freehold-vs-lease-land-in-aruba', title: 'Freehold vs. Lease Land in Aruba' },
    nl: { slug: 'eigendom-vs-erfpacht-in-aruba', title: 'Eigendom vs. Erfpacht in Aruba' },
  },
  propertyOwnershipDifferences: {
    en: { slug: 'property-ownership-differences-aruba', title: 'Eigendom vs. Erfpacht in Aruba: Understanding Property Ownership Differences' },
    nl: { slug: 'vastgoedeigendom-verschillen-aruba', title: 'Eigendom vs. Erfpacht in Aruba: Verschillen in Vastgoedeigendom' },
  },
  foreignBuyersPractical: {
    en: { slug: 'foreign-buyers-aruba-practical-guide', title: 'Can Foreigners Buy Property in Aruba? A Practical Guide' },
    nl: { slug: 'vastgoed-kopen-aruba-als-buitenlander-praktische-gids', title: 'Kunnen Buitenlanders Vastgoed Kopen in Aruba? Een Praktische Gids' },
  },
  howToGetMortgage: {
    en: { slug: 'how-to-get-a-mortgage-in-aruba', title: 'How to Get a Mortgage in Aruba' },
    nl: { slug: 'hypotheek-in-aruba-complete-gids-voor-inwoners-en-niet-inwoners', title: 'Hypotheek in Aruba: Complete Gids voor Inwoners en Niet-Inwoners' },
  },
  mortgageRequirements: {
    en: { slug: 'mortgage-requirements-in-aruba', title: 'Mortgage Requirements in Aruba | Full Checklist' },
    nl: { slug: 'hypotheek-vereisten-in-aruba', title: 'Hypotheek Vereisten in Aruba | Checklist' },
  },
  howMuchBorrow: {
    en: { slug: 'how-much-can-you-borrow-in-aruba', title: 'How Much Can You Borrow in Aruba?' },
    nl: { slug: 'hoeveel-kun-je-lenen-in-aruba', title: 'Hoeveel Kun Je Lenen in Aruba?' },
  },
  annuityMortgage: {
    en: { slug: 'what-is-an-annuity-mortgage-in-aruba', title: 'What Is an Annuity Mortgage in Aruba?' },
    nl: { slug: 'wat-is-een-annuiteitenhypotheek-in-aruba', title: 'Wat is een Annuïteitenhypotheek in Aruba?' },
  },
  canForeignersMortgage: {
    en: { slug: 'can-foreigners-buy-property-in-aruba', title: 'Can Foreigners Buy Property in Aruba?' },
    nl: { slug: 'kunnen-buitenlanders-een-huis-kopen-op-aruba', title: 'Kunnen Buitenlanders een Huis Kopen op Aruba?' },
  },
  understandingInsurance: {
    en: { slug: 'understanding-insurance-in-aruba', title: 'Understanding Insurance in Aruba: A Simple Guide for Residents and Expats' },
    nl: { slug: 'verzekering-in-aruba-begrijpen', title: 'Verzekering in Aruba Begrijpen: Gids voor Inwoners en Expats' },
  },
  healthCarInsurance: {
    en: { slug: 'health-car-insurance-aruba-guide', title: 'Health & Car Insurance in Aruba' },
    nl: { slug: 'gezondheids-en-autoverzekering-aruba-gids', title: 'Gezondheids- en Autoverzekering in Aruba' },
  },
  insuranceTips: {
    en: { slug: 'insurance-aruba-tips-for-new-residents', title: 'How Insurance Works in Aruba: Tips for New Residents' },
    nl: { slug: 'verzekering-aruba-tips-voor-nieuwe-inwoners', title: 'Zo werkt verzekering in Aruba: Tips voor nieuwe inwoners' },
  },
};

/**
 * For each guide key, list of related guide keys to show as links.
 * Matches the user's specified interlink structure.
 */
export const RELATED_KEYS = {
  // 1. Buying Property in Aruba
  buyingProperty: ['costs', 'freeholdVsLease', 'propertyOwnershipDifferences', 'howToGetMortgage', 'mortgageRequirements', 'averageHousePrice', 'differentAreas', 'foreignBuyersPractical', 'understandingInsurance'],
  // 2. Costs of Buying Property
  costs: ['buyingProperty', 'freeholdVsLease', 'propertyOwnershipDifferences', 'howToGetMortgage', 'mortgageRequirements', 'foreignBuyersPractical', 'averageHousePrice'],
  // 3. Average House Price
  averageHousePrice: ['buyingProperty', 'costs', 'differentAreas', 'howMuchBorrow', 'howToGetMortgage', 'foreignBuyersPractical'],
  // 4. Different Areas in Aruba
  differentAreas: ['averageHousePrice', 'buyingProperty', 'costs', 'foreignBuyersPractical'],
  // 5. Freehold vs. Lease Land
  freeholdVsLease: ['propertyOwnershipDifferences', 'costs', 'howToGetMortgage', 'mortgageRequirements', 'buyingProperty', 'foreignBuyersPractical'],
  // 6. Eigendom vs. Erfpacht (Property Ownership Differences)
  propertyOwnershipDifferences: ['freeholdVsLease', 'costs', 'howToGetMortgage', 'buyingProperty'],
  // 7. Can Foreigners Buy? A Practical Guide (property)
  foreignBuyersPractical: ['buyingProperty', 'costs', 'freeholdVsLease', 'howToGetMortgage', 'mortgageRequirements', 'howMuchBorrow', 'differentAreas'],
  // 8. How to Get a Mortgage
  howToGetMortgage: ['mortgageRequirements', 'howMuchBorrow', 'annuityMortgage', 'freeholdVsLease', 'buyingProperty', 'costs', 'foreignBuyersPractical'],
  // 9. Mortgage Requirements
  mortgageRequirements: ['howToGetMortgage', 'howMuchBorrow', 'annuityMortgage', 'freeholdVsLease', 'foreignBuyersPractical'],
  // 10. How Much Can You Borrow
  howMuchBorrow: ['howToGetMortgage', 'mortgageRequirements', 'annuityMortgage', 'averageHousePrice', 'costs'],
  // 11. What Is an Annuity Mortgage
  annuityMortgage: ['howToGetMortgage', 'mortgageRequirements', 'howMuchBorrow', 'freeholdVsLease'],
  // 12. Can Foreigners Buy? (Mortgage version)
  canForeignersMortgage: ['foreignBuyersPractical', 'howToGetMortgage', 'mortgageRequirements', 'freeholdVsLease', 'costs'],
  // 13. Understanding Insurance
  understandingInsurance: ['healthCarInsurance', 'insuranceTips', 'buyingProperty', 'costs'],
  // 14. Health & Car Insurance
  healthCarInsurance: ['understandingInsurance', 'insuranceTips'],
  // 15. How Insurance Works (Tips for New Residents)
  insuranceTips: ['understandingInsurance', 'healthCarInsurance', 'buyingProperty'],
};
