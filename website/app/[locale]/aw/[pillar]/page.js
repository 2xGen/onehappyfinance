import { notFound } from 'next/navigation';
import { getAlternateLanguages } from '@/i18n/config';
import { getPillarConfig, PILLAR_SLUGS } from '@/src/lib/pillars';
import PillarPageContent from '@/src/components/PillarPageContent';

const LOCALES = ['en', 'nl'];
const BASE_URL = 'https://onehappyfinance.com';
const DEFAULT_OG_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/onehappyfinance.png';

export async function generateStaticParams() {
  const params = [];
  for (const locale of LOCALES) {
    for (const pillar of PILLAR_SLUGS[locale]) {
      params.push({ locale, pillar });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { locale, pillar } = await params;
  const config = getPillarConfig(locale, pillar);
  if (!config) return { title: 'Aruba Guides' };
  const canonical = `${BASE_URL}/${locale}/aw/${pillar}`;
  return {
    title: config.title,
    description: config.description,
    alternates: {
      canonical,
      languages: getAlternateLanguages(`/aw/${pillar}`),
    },
    openGraph: {
      title: config.title,
      description: config.description,
      type: 'website',
      url: canonical,
      images: [
        { url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: config.title },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
    },
  };
}

function PillarSchema({ config, locale, pillar }) {
  const currentUrl = `${BASE_URL}/${locale}/aw/${pillar}`;
  const homeUrl = `${BASE_URL}/${locale}`;

  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: homeUrl },
      { '@type': 'ListItem', position: 2, name: config.title, item: currentUrl },
    ],
  };

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: config.title,
    description: config.description,
    url: currentUrl,
    breadcrumb: breadcrumbList,
    publisher: {
      '@type': 'Organization',
      name: 'OneHappyFinance',
      url: BASE_URL,
    },
  };

  const faqSchema = (config.faqs || []).length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: config.faqs.map((q) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: { '@type': 'Answer', text: q.answer },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
    </>
  );
}

export default async function PillarPage({ params }) {
  const { locale, pillar } = await params;
  const config = getPillarConfig(locale, pillar);
  if (!config) notFound();
  return (
    <>
      <PillarSchema config={config} locale={locale} pillar={pillar} />
      <PillarPageContent pillarSlug={pillar} config={config} />
    </>
  );
}
