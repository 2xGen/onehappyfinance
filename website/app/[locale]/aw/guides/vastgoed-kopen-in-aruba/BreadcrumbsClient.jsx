'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from '@/src/contexts/LocaleContext';

export default function BreadcrumbsClient() {
  const { locale } = useLocale();
  const pathname = usePathname();

  const isDutch = locale === 'nl';
  const labels = {
    home: isDutch ? 'Home' : 'Home',
    guides: isDutch ? 'Gidsen' : 'Guides',
    article: isDutch
      ? 'Vastgoed kopen in Aruba: Stap-voor-Stap Overzicht (2026 Gids)'
      : 'Buying Property in Aruba: Step-by-Step Overview (2026 Guide)',
  };

  const crumbs = [
    { name: labels.home, href: `/${locale}` },
    { name: labels.guides, href: `/${locale}/aw/guides` },
    { name: labels.article, href: pathname },
  ];

  return (
    <nav aria-label="Breadcrumb" className="mt-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-foreground/70">
        {crumbs.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            {i < crumbs.length - 1 ? (
              <Link href={c.href} className="hover:text-primary underline-offset-2 hover:underline">
                {c.name}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{c.name}</span>
            )}
            {i < crumbs.length - 1 && <span className="text-foreground/30">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
