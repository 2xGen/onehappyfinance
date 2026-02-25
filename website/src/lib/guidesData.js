/**
 * Shared guides data for /aw/guides and pillar pages.
 * getGuides(locale) returns { title, excerpt, category, link, imgSrc, imgAlt }[].
 */

const GUIDES = [
  {
    en: {
      title: 'Buying Property in Aruba: Step-by-Step Overview (2026 Guide)',
      excerpt: 'From budget and location to notary and transfer — a clear overview of the property buying process in Aruba.',
      category: 'Property',
      link: '/aw/guides/buying-property-in-aruba',
      imgAlt: 'Buying Property in Aruba',
    },
    nl: {
      title: 'Vastgoed kopen in Aruba: Stap-voor-Stap Overzicht (2026 Gids)',
      excerpt: 'Van budget en gebied tot notaris en overdracht — een helder overzicht van het aankoopproces.',
      category: 'Vastgoed',
      link: '/aw/guides/vastgoed-kopen-in-aruba',
      imgAlt: 'Vastgoed kopen in Aruba',
    },
    imgSrc: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/property%20in%20aruba.png',
  },
  {
    en: {
      title: 'Costs of Buying Property in Aruba (Taxes, Notary & Fees)',
      excerpt: 'Full breakdown of closing costs (5–8%), transfer tax, notary fees, and ongoing annual expenses when buying property in Aruba.',
      category: 'Property',
      link: '/aw/guides/costs-of-buying-property-in-aruba',
      imgAlt: 'Costs of Buying Property in Aruba',
    },
    nl: {
      title: 'Kosten van het kopen van vastgoed in Aruba (Belastingen, Notaris & Kosten)',
      excerpt: 'Volledig overzicht van kosten: sluitingskosten 5–8%, overdrachtsbelasting, notariskosten en jaarlijkse lasten.',
      category: 'Vastgoed',
      link: '/aw/guides/kosten-van-het-kopen-van-vastgoed-in-aruba',
      imgAlt: 'Kosten van het kopen van vastgoed in Aruba',
    },
    imgSrc: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/costs%20of%20buyin%20gproperty%20in%20aruba.png',
  },
  {
    en: {
      title: 'How to Get a Mortgage in Aruba',
      excerpt: 'Step-by-step guide to getting a mortgage in Aruba for residents and non-residents.',
      category: 'Mortgages',
      link: '/aw/guides/how-to-get-a-mortgage-in-aruba',
      imgAlt: 'How to Get a Mortgage in Aruba',
    },
    nl: {
      title: 'Hypotheek in Aruba: Complete Gids voor Inwoners en Niet-Inwoners',
      excerpt: 'Zo krijg je een hypotheek in Aruba — stap voor stap uitgelegd.',
      category: 'Hypotheken',
      link: '/aw/guides/hypotheek-in-aruba-complete-gids-voor-inwoners-en-niet-inwoners',
      imgAlt: 'Hypotheek in Aruba',
    },
    imgSrc: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/How%20to%20Get%20a%20Mortgage%20in%20Aruba.png',
  },
  {
    en: {
      title: 'Can Foreigners Buy Property in Aruba?',
      excerpt: 'Freehold vs lease land, process, costs, and financing for non-residents.',
      category: 'Mortgages',
      link: '/aw/guides/can-foreigners-buy-property-in-aruba',
      imgAlt: 'Can Foreigners Buy Property in Aruba',
    },
    nl: {
      title: 'Kunnen Buitenlanders een Huis Kopen op Aruba?',
      excerpt: 'Eigendom vs erfpacht, proces, kosten en hypotheken voor niet-ingezetenen.',
      category: 'Hypotheken',
      link: '/aw/guides/kunnen-buitenlanders-een-huis-kopen-op-aruba',
      imgAlt: 'Kunnen Buitenlanders een Huis Kopen op Aruba?',
    },
    imgSrc: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Can%20Foreigners%20Buy%20Property%20in%20Aruba.png',
  },
  {
    en: {
      title: 'Mortgage Requirements in Aruba | Full Checklist',
      excerpt: 'Exactly which documents you need — plus a printable checklist and bank requirements.',
      category: 'Mortgages',
      link: '/aw/guides/mortgage-requirements-in-aruba',
      imgAlt: 'Mortgage Requirements in Aruba',
    },
    nl: {
      title: 'Hypotheek Vereisten in Aruba | Checklist',
      excerpt: 'Documenten voor een hypotheek op Aruba — inclusief checklist en bankvereisten.',
      category: 'Hypotheken',
      link: '/aw/guides/hypotheek-vereisten-in-aruba',
      imgAlt: 'Hypotheek Vereisten in Aruba',
    },
    imgSrc: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Mortgage%20Requirements%20in%20Aruba.png',
  },
  {
    en: {
      title: 'What Is an Annuity Mortgage in Aruba?',
      excerpt: 'How annuity mortgages work in Aruba — payments, pros & cons, eligibility, and examples.',
      category: 'Mortgages',
      link: '/aw/guides/what-is-an-annuity-mortgage-in-aruba',
      imgAlt: 'Annuity Mortgage in Aruba',
    },
    nl: {
      title: 'Wat is een Annuïteitenhypotheek?',
      excerpt: 'Hoe vaste maandlasten werken in Aruba — uitleg, voor- en nadelen en voorbeeld.',
      category: 'Hypotheken',
      link: '/aw/guides/wat-is-een-annuiteitenhypotheek-in-aruba',
      imgAlt: 'Annuïteitenhypotheek in Aruba',
    },
    imgSrc: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/What%20Is%20an%20Annuity%20Mortgage%20and%20How%20Does%20It%20Work%20in%20Aruba.png',
  },
  {
    en: {
      title: 'How Much Can You Borrow in Aruba?',
      excerpt: 'How banks calculate borrowing power — factors, example, calculators, tips, and FAQs.',
      category: 'Mortgages',
      link: '/aw/guides/how-much-can-you-borrow-in-aruba',
      imgAlt: 'How Much Can You Borrow in Aruba',
    },
    nl: {
      title: 'Hoeveel Kun Je Lenen in Aruba?',
      excerpt: 'Factoren, voorbeeldberekening, algemene berekening, tips en FAQ over leencapaciteit.',
      category: 'Hypotheken',
      link: '/aw/guides/hoeveel-kun-je-lenen-in-aruba',
      imgAlt: 'Hoeveel kun je lenen in Aruba',
    },
    imgSrc: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/How%20much%20can%20you%20borrow%20for%20a%20mortgage%20in%20aruba.png',
  },
  {
    en: {
      title: 'Freehold vs. Lease Land in Aruba',
      excerpt: 'Differences, fees, restrictions, and financing between freehold and lease land.',
      category: 'Mortgages',
      link: '/aw/guides/freehold-vs-lease-land-in-aruba',
      imgAlt: 'Freehold vs. Lease Land in Aruba',
    },
    nl: {
      title: 'Eigendom vs. Erfpacht in Aruba',
      excerpt: 'Verschillen, kosten, beperkingen en financiering tussen eigendom en erfpacht.',
      category: 'Hypotheken',
      link: '/aw/guides/eigendom-vs-erfpacht-in-aruba',
      imgAlt: 'Eigendom vs. Erfpacht in Aruba',
    },
    imgSrc: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Freehold%20vs.%20Lease%20Land%20in%20Aruba.png',
  },
  {
    en: {
      title: 'Eigendom vs. Erfpacht in Aruba: Understanding Property Ownership Differences',
      excerpt: 'Freehold vs long lease land: ownership rights, 60-year lease, annual canon, and financing.',
      category: 'Property',
      link: '/aw/guides/property-ownership-differences-aruba',
      imgAlt: 'Eigendom vs. Erfpacht in Aruba',
    },
    nl: {
      title: 'Eigendom vs. Erfpacht in Aruba: Verschillen in Vastgoedeigendom',
      excerpt: 'Vol eigendom vs erfpacht: eigendomsrechten, 60-jaar pacht, jaarlijkse canon en financiering.',
      category: 'Vastgoed',
      link: '/aw/guides/vastgoedeigendom-verschillen-aruba',
      imgAlt: 'Eigendom vs. Erfpacht in Aruba',
    },
    imgSrc: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/eigendom%20vs%20erfpacht.png',
  },
  {
    en: {
      title: 'Average House Price in Aruba',
      excerpt: 'What does a house cost in Aruba? Clear overview of price ranges by region and size, price per sq ft, and which factors drive the market.',
      category: 'Property',
      link: '/aw/guides/average-house-price-in-aruba',
      imgAlt: 'Average House Price in Aruba',
    },
    nl: {
      title: 'Gemiddelde huizenprijs in Aruba',
      excerpt: 'Wat kost een huis op Aruba? Overzicht van prijsbereiken per regio en woninggrootte, prijs per m² en welke factoren de huizenprijzen bepalen.',
      category: 'Vastgoed',
      link: '/aw/guides/gemiddelde-huizenprijs-aruba',
      imgAlt: 'Gemiddelde huizenprijs in Aruba',
    },
    imgSrc: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Average%20House%20Price%20in%20Aruba.png',
  },
  {
    en: {
      title: "Different Areas in Aruba: A Guide to the Island's Neighborhoods",
      excerpt: "From vibrant beachfront districts to quiet residential towns — a complete overview of Aruba's main locations and what makes each unique.",
      category: 'Property',
      link: '/aw/guides/different-areas-in-aruba',
      imgAlt: 'Different Areas in Aruba',
    },
    nl: {
      title: 'Verschillende gebieden in Aruba: Gids naar de buurten van het eiland',
      excerpt: 'Van levendige strandwijken tot rustige woonplaatsen — een compleet overzicht van de belangrijkste locaties in Aruba.',
      category: 'Vastgoed',
      link: '/aw/guides/verschillende-gebieden-in-aruba',
      imgAlt: 'Verschillende gebieden in Aruba',
    },
    imgSrc: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/different%20property%20areas%20in%20aruba.png',
  },
  {
    en: {
      title: 'Can Foreigners Buy Property in Aruba? A Practical Guide',
      excerpt: 'Legal requirements, residency, financing, taxes, and rental rules for international buyers. Owning property in Aruba is smooth, safe, and rewarding.',
      category: 'Property',
      link: '/aw/guides/foreign-buyers-aruba-practical-guide',
      imgAlt: 'Buying Property in Aruba as a Foreigner',
    },
    nl: {
      title: 'Kunnen Buitenlanders Vastgoed Kopen in Aruba? Een Praktische Gids',
      excerpt: 'Wettelijke vereisten, financiering, belastingen en verhuurregels voor internationale kopers. Vastgoed bezitten in Aruba is soepel, veilig en lonend.',
      category: 'Vastgoed',
      link: '/aw/guides/vastgoed-kopen-aruba-als-buitenlander-praktische-gids',
      imgAlt: 'Vastgoed kopen in Aruba als buitenlander',
    },
    imgSrc: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/buying%20property%20in%20aruba%20as%20a%20foreigner.png',
  },
  {
    en: {
      title: 'Understanding Insurance in Aruba: A Simple Guide for Residents and Expats',
      excerpt: 'Learn the basics of insurance in Aruba—AZV health, motor, home, liability, and business coverage.',
      category: 'Insurance',
      link: '/aw/guides/understanding-insurance-in-aruba',
      imgAlt: 'Insurance in Aruba',
    },
    nl: {
      title: 'Verzekering in Aruba Begrijpen: Gids voor Inwoners en Expats',
      excerpt: 'Leer de basis van verzekeringen in Aruba—AZV, motor, woning, aansprakelijkheid en bedrijfsdekking.',
      category: 'Verzekeringen',
      link: '/aw/guides/verzekering-in-aruba-begrijpen',
      imgAlt: 'Verzekering in Aruba',
    },
    imgSrc: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/insurance%20on%20aruba.png',
  },
  {
    en: {
      title: 'Health & Car Insurance in Aruba',
      excerpt: 'Key facts about health and car insurance in Aruba—requirements, costs, coverage, and practical tips for residents and visitors.',
      category: 'Insurance',
      link: '/aw/guides/health-car-insurance-aruba-guide',
      imgAlt: 'Health and Car Insurance in Aruba',
    },
    nl: {
      title: 'Gezondheids- en Autoverzekering in Aruba',
      excerpt: 'Belangrijke feiten over gezondheids- en autoverzekering in Aruba—AZV, verplichte aansprakelijkheid en praktische tips.',
      category: 'Verzekeringen',
      link: '/aw/guides/gezondheids-en-autoverzekering-aruba-gids',
      imgAlt: 'Gezondheids- en Autoverzekering in Aruba',
    },
    imgSrc: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/all%20about%20insurance%20in%20aruba.png',
  },
  {
    en: {
      title: 'How Insurance Works in Aruba: Tips for New Residents',
      excerpt: 'Learn how insurance works in Aruba as a new resident—coverage basics, required paperwork, and practical tips for health, car, and property insurance.',
      category: 'Insurance',
      link: '/aw/guides/insurance-aruba-tips-for-new-residents',
      imgAlt: 'How Insurance Works in Aruba',
    },
    nl: {
      title: 'Zo werkt verzekering in Aruba: Tips voor nieuwe inwoners',
      excerpt: 'Leer hoe verzekering werkt in Aruba als nieuwe inwoner—basisdekking, documenten en praktische tips voor gezondheid, auto en woning.',
      category: 'Verzekeringen',
      link: '/aw/guides/verzekering-aruba-tips-voor-nieuwe-inwoners',
      imgAlt: 'Zo werkt verzekering in Aruba',
    },
    imgSrc: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/How%20Insurance%20Works%20in%20Aruba.png',
  },
];

export function getGuides(locale) {
  const l = locale === 'nl' ? 'nl' : 'en';
  return GUIDES.map((g) => {
    const loc = g[l];
    return {
      title: loc.title,
      excerpt: loc.excerpt,
      category: loc.category,
      link: loc.link,
      imgSrc: g.imgSrc,
      imgAlt: loc.imgAlt,
    };
  });
}

/**
 * Get the guide category (e.g. "Mortgages", "Insurance", "Property") for a path like /aw/guides/how-to-get-a-mortgage-in-aruba.
 * Used to link from a guide page to its pillar. pathWithoutLocale should not include locale (e.g. /en).
 */
export function getCategoryForGuidePath(pathWithoutLocale, locale) {
  const normalized = pathWithoutLocale.startsWith('/') ? pathWithoutLocale : `/${pathWithoutLocale}`;
  const guides = getGuides(locale);
  const found = guides.find((g) => g.link === normalized || g.link === normalized.replace(/\/$/, ''));
  return found ? found.category : null;
}
