export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'en';
  
  const titles = {
    en: 'Financial Guides for Aruba | OneHappyFinance',
    nl: 'Financiële Gidsen voor Aruba | OneHappyFinance',
  };

  const descriptions = {
    en: 'Explore our expert guides on mortgages, insurance, finance, and retirement in Aruba. Get the clarity you need to make smart financial decisions.',
    nl: 'Ontdek onze deskundige gidsen over hypotheken, verzekeringen, financiën en pensioen in Aruba. Krijg de helderheid die u nodig heeft om slimme financiële beslissingen te nemen.',
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: {
      canonical: `https://onehappyfinance.com/${locale}/aw/guides`,
    },
  };
}

export default function GuidesLayout({ children }) {
  return <>{children}</>;
}

