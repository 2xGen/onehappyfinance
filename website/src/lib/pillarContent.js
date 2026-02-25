/**
 * Long-form overview sections for pillar pages (1,000–1,500 words per pillar).
 * Used for SEO depth, E-E-A-T, and topical authority. Includes institutional references where relevant.
 */

/** @type {Record<string, Record<string, { title: string; content: string }[]>>} */
export const PILLAR_OVERVIEW_SECTIONS = {
  en: {
    property: [
      {
        title: 'Who can buy property in Aruba',
        content: 'Both residents and non-residents can purchase property in Aruba. There are no restrictions on foreign ownership for freehold land or long-lease (erfpacht) property. Buyers typically work with a local notary, who handles the transfer and registration. Financing is available through Aruban banks for residents and, under certain conditions, for non-residents.',
      },
      {
        title: 'Freehold vs lease land',
        content: 'Freehold (eigendom) means you own the land and the building. Lease land (erfpacht) is long-term use rights—often 60 years—granted by the government or another landowner; you usually own the building but pay an annual canon (ground rent). Both types are common in Aruba. Financing terms and loan-to-value ratios can differ between the two; local banks and the Kadaster (land registry) are the sources for official information on ownership and encumbrances.',
      },
      {
        title: 'Costs of buying',
        content: 'Closing costs in Aruba typically total around 5–8% of the purchase price. They include transfer tax (overdrachtsbelasting), notary fees, and often a fee for the Kadaster. The notary handles the deed and registration. For exact rates and obligations, the Belastingdienst Aruba (tax authority) and your notary can provide up-to-date figures. Budget also for possible broker or legal advice.',
      },
      {
        title: 'Financing options',
        content: 'Local banks in Aruba offer mortgages for both freehold and lease-land property. Annuity mortgages (fixed monthly payments) are common. Terms often run 15–25 years. Non-residents can qualify; requirements and maximum loan-to-value may differ from residents. Our guides cover document checklists, borrowing capacity, and the steps from application to disbursement.',
      },
      {
        title: 'Timeline and process',
        content: 'From offer to transfer usually takes several weeks to a few months. Steps include agreement on price and conditions, due diligence (title, permits, lease terms if applicable), financing approval, and the notarial deed. The notary registers the transfer with the Kadaster. Using a notary and checking the land registry ensures a clear and legally sound transfer.',
      },
      {
        title: 'Areas in Aruba',
        content: 'Aruba offers a range of areas—from beachside and tourist-adjacent to quieter residential neighbourhoods. Prices and demand vary by location. When choosing an area, consider proximity to work or amenities, building and zoning rules, and whether the property is freehold or lease land. Our guides outline popular areas and what to look for.',
      },
      {
        title: 'Ongoing taxes and costs',
        content: 'As an owner you may face property tax, utilities, and—on lease land—the annual canon. The Belastingdienst Aruba administers relevant taxes. For lease land, the canon is set in the lease agreement. Planning for these ongoing costs is part of a realistic budget for owning property in Aruba.',
      },
      {
        title: 'Rental and use',
        content: 'If you plan to rent out your property, local rules and any HOA or lease conditions apply. Short-term rental regulations may differ from long-term. Tax implications for rental income also apply. Our guides and a local advisor can help you align with current rules.',
      },
    ],
    mortgages: [
      {
        title: 'Who can get a mortgage in Aruba',
        content: 'Residents and non-residents can apply for a mortgage with Aruban banks. Lenders assess income, employment or business stability, and credit history. Non-residents may need to meet additional criteria and lower loan-to-value limits. Documentation typically includes ID, proof of income, and details of the property.',
      },
      {
        title: 'Freehold vs lease land financing',
        content: 'Banks in Aruba finance both freehold and long-lease (erfpacht) property. For lease land, the remaining lease term and canon can affect terms and LTV. The Kadaster holds the official records. Our guides explain how financing differs between the two and what to prepare.',
      },
      {
        title: 'Typical products and terms',
        content: 'Annuity mortgages—with fixed monthly payments of interest and principal—are the norm. Terms of 15–25 years are common. Interest rates and conditions vary by bank and borrower profile. There is no single regulator for mortgage products; banks set their own criteria within local law.',
      },
      {
        title: 'Documents you will need',
        content: 'Banks usually request ID, proof of income (employment letter or business registration), recent bank statements, and property information. For non-residents, additional proof of assets or income may be required. A clear checklist speeds up the process; our mortgage requirements guide lists what to gather.',
      },
      {
        title: 'Borrowing capacity',
        content: 'Banks determine how much you can borrow from your income, existing debts, and the property value. Multiples and rules differ per lender. Our guide on borrowing capacity in Aruba explains the main factors and how to estimate your range.',
      },
      {
        title: 'From application to disbursement',
        content: 'The process usually involves application, submission of documents, property valuation, and approval. Once the notary has completed the deed and registration (including with the Kadaster where relevant), the bank disburses the loan. Timelines vary; your notary and bank can give a typical schedule.',
      },
    ],
    insurance: [
      {
        title: 'Mandatory coverage in Aruba',
        content: 'AZV (Algemene Ziektekostenverzekering) is the mandatory basic health insurance in Aruba. Once you are registered as a resident, you must enroll. For vehicles, third-party liability (WA) insurance is required by law. These are the two main compulsory coverages for individuals.',
      },
      {
        title: 'Optional but recommended',
        content: 'Home insurance, comprehensive car coverage, and liability insurance are not legally required but are often recommended. They protect your property, vehicle, and assets. Local brokers and insurers can tailor packages to your situation.',
      },
      {
        title: 'For new residents',
        content: 'After registering as a resident, arrange AZV enrollment and then add car and other policies as needed. Brokers and insurers on the island can explain options and help with paperwork. Our guides summarize what to do when you first move.',
      },
      {
        title: 'Costs and providers',
        content: 'AZV contributions are income-dependent. Car and home premiums depend on coverage, value, and provider. Comparing options and understanding what is included helps you choose suitable coverage at a reasonable cost.',
      },
      {
        title: 'Health and car in practice',
        content: 'AZV covers essential medical care. For gaps or extra comfort, supplementary health insurance exists. For cars, WA is the minimum; comprehensive and other add-ons are available. Our guides go into detail on both.',
      },
    ],
  },
  nl: {
    vastgoed: [
      {
        title: 'Wie kan vastgoed kopen in Aruba',
        content: 'Zowel inwoners als niet-inwoners kunnen vastgoed in Aruba kopen. Er zijn geen beperkingen voor buitenlanders voor vol eigendom of erfpacht. Kopers werken doorgaans met een lokale notaris, die de overdracht en inschrijving verzorgt. Financiering is mogelijk via Arubaanse banken voor inwoners en onder bepaalde voorwaarden voor niet-inwoners.',
      },
      {
        title: 'Eigendom vs erfpacht',
        content: 'Eigendom betekent dat u de grond en het gebouw bezit. Erfpacht is langdurig gebruiksrecht—vaak 60 jaar—verleend door de overheid of andere grondeigenaar; u bent meestal eigenaar van het gebouw maar betaalt een jaarlijkse canon. Beide vormen komen op Aruba voor. Financieringsvoorwaarden en LTV kunnen verschillen; lokale banken en het Kadaster zijn de bronnen voor officiële gegevens over eigendom en lasten.',
      },
      {
        title: 'Kosten van aankoop',
        content: 'Sluitingskosten op Aruba bedragen doorgaans circa 5–8% van de aankoopprijs. Daaronder vallen overdrachtsbelasting, notariskosten en vaak een kadastervergoeding. De notaris verzorgt de akte en inschrijving. Voor actuele tarieven en verplichtingen kunnen de Belastingdienst Aruba en uw notaris de juiste cijfers geven. Houd ook rekening met eventuele makelaars- of advieskosten.',
      },
      {
        title: 'Financieringsmogelijkheden',
        content: 'Lokale banken op Aruba bieden hypotheken voor zowel eigendom als erfpacht. Annuïteitenhypotheken (vaste maandlasten) zijn gebruikelijk. Looptijden zijn vaak 15–25 jaar. Niet-inwoners kunnen in aanmerking komen; vereisten en maximale LTV kunnen afwijken. Onze gidsen gaan in op documenten, leencapaciteit en de stappen van aanvraag tot uitbetaling.',
      },
      {
        title: 'Tijdlijn en proces',
        content: 'Van bod tot overdracht duurt meestal enkele weken tot een paar maanden. Stappen zijn: overeenstemming over prijs en voorwaarden, due diligence (titel, vergunningen, erfpachtvoorwaarden), financieringsgoedkeuring en de notariële akte. De notaris schrijft de overdracht in bij het Kadaster. Gebruik van een notaris en controle van het kadaster zorgen voor een zuivere en rechtsgeldige overdracht.',
      },
      {
        title: 'Gebieden in Aruba',
        content: 'Aruba biedt uiteenlopende gebieden—van strand en toeristisch tot rustige woonwijken. Prijzen en vraag verschillen per locatie. Bij uw keuze spelen o.a. bereikbaarheid, bouw- en bestemmingsregels en het onderscheid eigendom/erfpacht. Onze gidsen lichten populaire gebieden en aandachtspunten toe.',
      },
      {
        title: 'Doorlopende belastingen en kosten',
        content: 'Als eigenaar kunt u te maken krijgen met onroerendezaakbelasting, nutsvoorzieningen en—bij erfpacht—de jaarlijkse canon. De Belastingdienst Aruba beheert de relevante heffingen. Bij erfpacht staat de canon in de erfpachtakte. Reken deze doorlopende kosten mee in uw begroting.',
      },
      {
        title: 'Verhuur en gebruik',
        content: 'Bij verhuur gelden lokale regels en eventuele VvE- of erfpachtvoorwaarden. Regels voor kort verhuur kunnen afwijken van lang verhuur. Ook fiscale gevolgen van huurinkomsten zijn van toepassing. Onze gidsen en een lokale adviseur kunnen u helpen actueel te blijven.',
      },
    ],
    hypotheken: [
      {
        title: 'Wie kan een hypotheek krijgen in Aruba',
        content: 'Inwoners en niet-inwoners kunnen bij Arubaanse banken een hypotheek aanvragen. Banken beoordelen inkomen, werkgevers- of ondernemerszekerheid en kredietgeschiedenis. Niet-inwoners moeten soms aan extra eisen en lagere LTV voldoen. Documentatie omvat doorgaans ID, bewijs van inkomen en gegevens van de woning.',
      },
      {
        title: 'Financiering bij eigendom vs erfpacht',
        content: 'Banken op Aruba financieren zowel eigendom als erfpacht. Bij erfpacht kunnen resterende looptijd en canon de voorwaarden en LTV beïnvloeden. Het Kadaster beheert de officiële gegevens. Onze gidsen leggen de verschillen en voorbereiding uit.',
      },
      {
        title: 'Gangbare producten en looptijden',
        content: 'Annuïteitenhypotheken—met vaste maandlasten voor rente en aflossing—zijn gebruikelijk. Looptijden van 15–25 jaar komen vaak voor. Rentetarieven en voorwaarden verschillen per bank en aanvrager. Er is geen aparte toezichthouder; banken bepalen hun eigen criteria binnen de wet.',
      },
      {
        title: 'Documenten die u nodig heeft',
        content: 'Banken vragen meestal ID, bewijs van inkomen (werkgeversverklaring of inschrijving onderneming), recente bankafschriften en woninggegevens. Voor niet-inwoners kan extra bewijs van vermogen of inkomen nodig zijn. Onze gids over hypotheekvereisten somt het op.',
      },
      {
        title: 'Leencapaciteit',
        content: 'Banken bepalen uw leencapaciteit aan de hand van inkomen, bestaande schulden en de waarde van de woning. Multiples en regels verschillen per bank. Onze gids over leencapaciteit in Aruba legt de factoren en een ruime inschatting uit.',
      },
      {
        title: 'Van aanvraag tot uitbetaling',
        content: 'Het proces omvat meestal aanvraag, indienen van documenten, taxatie en goedkeuring. Na de notariële akte en inschrijving (waar relevant bij het Kadaster) volgt uitbetaling door de bank. De doorlooptijd varieert; uw notaris en bank kunnen een indicatie geven.',
      },
    ],
    verzekeringen: [
      {
        title: 'Verplichte dekking in Aruba',
        content: 'AZV (Algemene Ziektekostenverzekering) is de verplichte basis zorgverzekering op Aruba. Na inschrijving als inwoner moet u zich aanmelden. Voor voertuigen is WA-verzekering wettelijk verplicht. Dit zijn de twee belangrijkste verplichte verzekeringen voor particulieren.',
      },
      {
        title: 'Optioneel maar aanbevolen',
        content: 'Woonverzekering, allrisk autoverzekering en aansprakelijkheidsverzekering zijn niet verplicht maar worden vaak aangeraden. Ze beschermen uw woning, voertuig en vermogen. Lokale tussenpersonen en verzekeraars kunnen pakketten op maat aanbieden.',
      },
      {
        title: 'Voor nieuwe inwoners',
        content: 'Na inschrijving als inwoner regelt u eerst AZV en daarna zo nodig auto- en andere polissen. Tussenpersonen en verzekeraars op het eiland kunnen opties en formaliteiten toelichten. Onze gidsen vatten samen wat u bij uw verhuizing moet regelen.',
      },
      {
        title: 'Kosten en aanbieders',
        content: 'AZV-bijdragen zijn inkomensafhankelijk. Premies voor auto en woning hangen af van dekking, waarde en aanbieder. Vergelijken en weten wat er in zit helpt u een passende en betaalbare dekking te kiezen.',
      },
      {
        title: 'Zorg en auto in de praktijk',
        content: 'AZV dekt essentiële medische zorg. Voor aanvulling of extra comfort bestaat aanvullende zorgverzekering. Voor de auto is WA het minimum; allrisk en andere uitbreidingen zijn beschikbaar. Onze gidsen gaan hier dieper op in.',
      },
    ],
  },
};
