'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from '@/src/contexts/LocaleContext';
import { removeLocaleFromPath, addLocaleToPath } from '@/i18n/config';
import { getCategoryForGuidePath } from '@/src/lib/guidesData';
import { getPillarPath, PILLAR_META } from '@/src/lib/pillars';

/**
 * Renders a link from the current guide page to its pillar (Mortgages, Insurance, or Property in Aruba).
 * Only shows when the current path is a guide subpage (e.g. /en/aw/guides/how-to-get-a-mortgage-in-aruba).
 */
export default function GuidePillarLink() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const t = useTranslations();

  const pathWithoutLocale = removeLocaleFromPath(pathname || '');
  const isGuideSubpage =
    pathWithoutLocale.startsWith('/aw/guides/') &&
    pathWithoutLocale.length > '/aw/guides/'.length;

  if (!isGuideSubpage) return null;

  const category = getCategoryForGuidePath(pathWithoutLocale, locale);
  if (!category) return null;

  const pillarPath = getPillarPath(locale, category);
  if (!pillarPath) return null;

  const slug = pillarPath.replace('/aw/', '');
  const pillarTitle = PILLAR_META[locale]?.[slug]?.title;
  if (!pillarTitle) return null;

  const href = addLocaleToPath(pillarPath, locale);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-10 md:pb-14">
      <nav aria-label="Pillar" className="mt-8 pt-8 border-t border-border">
        <p className="text-sm text-foreground/70">
          {t('guides.viewAllPillarGuides')}{' '}
          <Link
            href={href}
            className="font-medium text-primary hover:underline underline-offset-2"
          >
            {pillarTitle}
          </Link>
        </p>
      </nav>
    </div>
  );
}
