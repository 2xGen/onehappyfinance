import { PILLAR_OVERVIEW_SECTIONS } from './pillarContent';

/**
 * Pillar pages: EN use /aw/mortgages, /aw/insurance, /aw/property;
 * NL use /aw/hypotheken, /aw/verzekeringen, /aw/vastgoed.
 * Maps slug → category (for filtering guides) and metadata for SEO.
 */

export const PILLAR_SLUGS = {
  en: ['mortgages', 'insurance', 'property'],
  nl: ['hypotheken', 'verzekeringen', 'vastgoed'],
};

/** Slug (for given locale) → category name used in guides data */
export const PILLAR_TO_CATEGORY = {
  en: {
    mortgages: 'Mortgages',
    insurance: 'Insurance',
    property: 'Property',
  },
  nl: {
    hypotheken: 'Hypotheken',
    verzekeringen: 'Verzekeringen',
    vastgoed: 'Vastgoed',
  },
};

/** Per-locale metadata for each pillar (slug → title, description, intro, quickInfo, faqs) */
export const PILLAR_META = {
  en: {
    mortgages: {
      title: 'Mortgages in Aruba',
      description: 'Considering a mortgage in Aruba? Here you\'ll find clear information on rates, requirements, borrowing power and the steps from application to transfer — so you can finance your home with confidence.',
      intro: 'Considering a mortgage in Aruba? Here you\'ll find clear information on rates, requirements, borrowing power and the steps from application to transfer — so you can finance your home with confidence.',
      quickInfo: [
        { title: 'Who can get a mortgage?', text: 'Residents and non-residents can apply. Banks typically require proof of income, employment or business registration, and a clean credit history.' },
        { title: 'Freehold vs lease land', text: 'Both are financeable. Freehold is full ownership; lease land is long-term use (e.g. 60 years) with an annual canon. Terms and LTV may differ.' },
        { title: 'Typical term', text: 'Mortgage terms in Aruba often run 15–25 years. Annuity mortgages (fixed monthly payments) are common.' },
        { title: 'Documents you’ll need', text: 'ID, proof of income, employment letter or business docs, bank statements, and property details. Banks may request additional paperwork.' },
      ],
      faqs: [
        { question: 'Can foreigners get a mortgage in Aruba?', answer: 'Yes. Non-residents can finance property in Aruba. Banks will assess income, assets, and credit. Requirements and maximum loan-to-value can differ from resident applications.' },
        { question: 'What is an annuity mortgage?', answer: 'An annuity mortgage has fixed monthly payments that include both interest and principal. The total payment stays the same over the term, so budgeting is easier.' },
        { question: 'How much can I borrow?', answer: 'Banks use your income, existing debts, and the property value to determine borrowing capacity. Rules and multiples vary by bank; our guides explain the basics and what to expect.' },
      ],
    },
    insurance: {
      title: 'Insurance in Aruba',
      description: 'Considering insurance in Aruba? Here you\'ll find clear information on AZV, car and home insurance, and what\'s required or recommended for you — so you can live on the island well covered.',
      intro: 'Considering insurance in Aruba? Here you\'ll find clear information on AZV, car and home insurance, and what\'s required or recommended for you — so you can live on the island well covered.',
      quickInfo: [
        { title: 'Mandatory coverage', text: 'AZV (Algemene Ziektekostenverzekering) is the mandatory basic health insurance. Third-party car insurance is required if you own or drive a vehicle.' },
        { title: 'Optional but recommended', text: 'Home insurance, comprehensive car coverage, and liability insurance are optional but often recommended for residents and property owners.' },
        { title: 'For new residents', text: 'Once registered, you must enroll in AZV. Car and other policies can be arranged through local brokers or insurers.' },
        { title: 'Costs', text: 'AZV contributions depend on income. Car and home premiums depend on coverage, value, and provider. Compare options before choosing.' },
      ],
      faqs: [
        { question: 'What is AZV?', answer: 'AZV is Aruba’s mandatory basic health insurance. It covers essential medical care. Enrollment is required once you are registered as a resident.' },
        { question: 'Is car insurance mandatory in Aruba?', answer: 'Yes. At least third-party liability coverage is required to drive. Comprehensive and other optional coverages are available.' },
        { question: 'Do I need home insurance?', answer: 'It’s not legally required but is recommended to protect your property and belongings against damage, theft, and natural events.' },
      ],
    },
    property: {
      title: 'Property in Aruba',
      description: 'Considering buying property in Aruba? Here you\'ll find clear information on costs, mortgage options, ownership types and the buying process — so you can take your next step with confidence.',
      intro: 'Considering buying property in Aruba? Here you\'ll find clear information on costs, mortgage options, ownership types and the buying process — so you can take your next step with confidence.',
      quickInfo: [
        { title: 'Who can buy?', text: 'Residents and foreigners can buy property. Freehold and long-lease (erfpacht) are both available; rules and financing may differ slightly.' },
        { title: 'Closing costs', text: 'Expect roughly 5–8% in closing costs: transfer tax, notary fees, and other expenses. Our guides break down the numbers.' },
        { title: 'Areas', text: 'From beachside to quieter neighbourhoods, Aruba has a range of areas. We outline popular locations and what to consider when choosing.' },
        { title: 'Process', text: 'From offer and due diligence to notary and transfer, the steps are clear. A notary handles the legal transfer of ownership.' },
      ],
      faqs: [
        { question: 'Can foreigners buy property in Aruba?', answer: 'Yes. Foreigners can purchase both freehold and lease-land property. The process is similar to residents; financing options are available through local banks.' },
        { question: 'What are the main costs when buying?', answer: 'Transfer tax, notary fees, and possible broker or other professional fees. Total closing costs are typically in the 5–8% range of the purchase price.' },
        { question: 'What is the difference between freehold and lease land?', answer: 'Freehold means you own the land. Lease land (erfpacht) gives long-term use (e.g. 60 years) with an annual fee; you typically own the building but not the land.' },
      ],
    },
  },
  nl: {
    hypotheken: {
      title: 'Hypotheken in Aruba',
      description: 'Overweegt u een hypotheek in Aruba? Hier vindt u heldere informatie over rentes, vereisten, leencapaciteit en de stappen van aanvraag tot overdracht — zodat u met vertrouwen uw woning financiert.',
      intro: 'Overweegt u een hypotheek in Aruba? Hier vindt u heldere informatie over rentes, vereisten, leencapaciteit en de stappen van aanvraag tot overdracht — zodat u met vertrouwen uw woning financiert.',
      quickInfo: [
        { title: 'Wie kan een hypotheek krijgen?', text: 'Inwoners en niet-inwoners kunnen aanvragen. Banken vragen doorgaans bewijs van inkomen, werkgeversverklaring of inschrijving onderneming en een schone kredietgeschiedenis.' },
        { title: 'Eigendom vs erfpacht', text: 'Beide zijn financierbaar. Eigendom is vol eigendom; erfpacht is langdurig gebruik (bijv. 60 jaar) met een jaarlijkse canon. Voorwaarden en LTV kunnen verschillen.' },
        { title: 'Gangbare looptijd', text: 'Hypotheeklooptijden in Aruba zijn vaak 15–25 jaar. Annuïteitenhypotheken (vaste maandlasten) zijn gebruikelijk.' },
        { title: 'Documenten die u nodig heeft', text: 'ID, bewijs van inkomen, werkgeversverklaring of bedrijfsdocumenten, bankafschriften en gegevens van de woning. Banken kunnen om extra stukken vragen.' },
      ],
      faqs: [
        { question: 'Kunnen buitenlanders een hypotheek krijgen in Aruba?', answer: 'Ja. Niet-inwoners kunnen vastgoed in Aruba financieren. Banken beoordelen inkomen, vermogen en krediet. Vereisten en maximale loan-to-value kunnen afwijken van aanvragen door inwoners.' },
        { question: 'Wat is een annuïteitenhypotheek?', answer: 'Bij een annuïteitenhypotheek zijn de maandlasten vast en bestaan uit rente en aflossing. Het totaalbedrag blijft gelijk gedurende de looptijd, wat budgetteren eenvoudiger maakt.' },
        { question: 'Hoeveel kan ik lenen?', answer: 'Banken bepalen de leencapaciteit aan de hand van uw inkomen, bestaande schulden en de waarde van de woning. Regels en multiples verschillen per bank; onze gidsen leggen de basis en wat u kunt verwachten.' },
      ],
    },
    verzekeringen: {
      title: 'Verzekeringen in Aruba',
      description: 'Overweegt u verzekering in Aruba? Hier vindt u heldere informatie over AZV, autoverzekering, woonverzekering en wat er voor u verplicht of aanbevolen is — zodat u goed verzekerd uw leven op het eiland voortzet.',
      intro: 'Overweegt u verzekering in Aruba? Hier vindt u heldere informatie over AZV, autoverzekering, woonverzekering en wat er voor u verplicht of aanbevolen is — zodat u goed verzekerd uw leven op het eiland voortzet.',
      quickInfo: [
        { title: 'Verplichte dekking', text: 'AZV (Algemene Ziektekostenverzekering) is de verplichte basis zorgverzekering. WA-autoverzekering is verplicht als u een voertuig bezit of bestuurt.' },
        { title: 'Optioneel maar aanbevolen', text: 'Woonverzekering, allrisk autoverzekering en aansprakelijkheidsverzekering zijn optioneel maar worden vaak aangeraden voor inwoners en eigenaren.' },
        { title: 'Voor nieuwe inwoners', text: 'Na inschrijving moet u zich aanmelden voor AZV. Auto- en andere verzekeringen kunnen via lokale tussenpersonen of verzekeraars worden afgesloten.' },
        { title: 'Kosten', text: 'AZV-bijdragen hangen af van inkomen. Premies voor auto en woning hangen af van dekking, waarde en aanbieder. Vergelijk opties voor u kiest.' },
      ],
      faqs: [
        { question: 'Wat is AZV?', answer: 'AZV is de verplichte basis zorgverzekering van Aruba. Deze dekt essentiële medische zorg. Aanmelding is verplicht zodra u als inwoner bent ingeschreven.' },
        { question: 'Is autoverzekering verplicht in Aruba?', answer: 'Ja. Minimaal WA-dekking is verplicht om te rijden. Allrisk en andere optionele dekkingen zijn beschikbaar.' },
        { question: 'Heb ik een woonverzekering nodig?', answer: 'Het is niet wettelijk verplicht maar wordt aanbevolen om uw woning en bezittingen te beschermen tegen schade, diefstal en natuurrampen.' },
      ],
    },
    vastgoed: {
      title: 'Vastgoed in Aruba',
      description: 'Overweegt u vastgoed te kopen in Aruba? Hier vindt u heldere informatie over kosten, hypotheekmogelijkheden, eigendomsvormen en het aankoopproces — zodat u met vertrouwen uw volgende stap zet.',
      intro: 'Overweegt u vastgoed te kopen in Aruba? Hier vindt u heldere informatie over kosten, hypotheekmogelijkheden, eigendomsvormen en het aankoopproces — zodat u met vertrouwen uw volgende stap zet.',
      quickInfo: [
        { title: 'Wie kan kopen?', text: 'Inwoners en buitenlanders kunnen vastgoed kopen. Vol eigendom en erfpacht zijn beide mogelijk; regels en financiering kunnen iets verschillen.' },
        { title: 'Sluitingskosten', text: 'Reken op circa 5–8% aan sluitingskosten: overdrachtsbelasting, notariskosten en overige kosten. Onze gidsen geven een overzicht van de bedragen.' },
        { title: 'Gebieden', text: 'Van strand tot rustigere wijken: Aruba heeft verschillende gebieden. We lichten populaire locaties toe en waar u op moet letten bij uw keuze.' },
        { title: 'Proces', text: 'Van bod en due diligence tot notaris en overdracht zijn de stappen helder. Een notaris verzorgt de juridische overdracht van het eigendom.' },
      ],
      faqs: [
        { question: 'Kunnen buitenlanders vastgoed kopen in Aruba?', answer: 'Ja. Buitenlanders kunnen zowel eigendom als erfpacht kopen. Het proces is vergelijkbaar met dat voor inwoners; financieringsmogelijkheden zijn beschikbaar via lokale banken.' },
        { question: 'Wat zijn de belangrijkste kosten bij aankoop?', answer: 'Overdrachtsbelasting, notariskosten en eventueel makelaars- of andere professionele kosten. Totale sluitingskosten liggen doorgaans rond 5–8% van de aankoopprijs.' },
        { question: 'Wat is het verschil tussen eigendom en erfpacht?', answer: 'Eigendom betekent dat u de grond bezit. Bij erfpacht heeft u langdurig gebruiksrecht (bijv. 60 jaar) tegen een jaarlijkse canon; u bent doorgaans eigenaar van het gebouw maar niet van de grond.' },
      ],
    },
  },
};

export function getPillarConfig(locale, pillarSlug) {
  const slugs = PILLAR_SLUGS[locale] || PILLAR_SLUGS.en;
  if (!slugs.includes(pillarSlug)) return null;
  const category = PILLAR_TO_CATEGORY[locale]?.[pillarSlug];
  const meta = PILLAR_META[locale]?.[pillarSlug];
  if (!category || !meta) return null;
  const overviewSections = PILLAR_OVERVIEW_SECTIONS[locale]?.[pillarSlug] ?? [];
  return { slug: pillarSlug, category, ...meta, overviewSections };
}

export function getPillarPath(locale, categoryKey) {
  const keyToSlug = {
    en: { Mortgages: 'mortgages', Insurance: 'insurance', Property: 'property' },
    nl: { Hypotheken: 'hypotheken', Verzekeringen: 'verzekeringen', Vastgoed: 'vastgoed' },
  };
  const slug = keyToSlug[locale]?.[categoryKey];
  return slug ? `/aw/${slug}` : null;
}
