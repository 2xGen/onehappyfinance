import Link from 'next/link';
import { GUIDE_LINKS } from '@/src/lib/guideLinks';

const SECTION_TITLE = {
  en: 'Related guides',
  nl: 'Gerelateerde gidsen',
};

export default function RelatedGuides({ locale, keys }) {
  const loc = locale === 'nl' ? 'nl' : 'en';
  const title = SECTION_TITLE[loc];

  if (!keys || keys.length === 0) return null;

  const links = keys
    .map((key) => {
      const g = GUIDE_LINKS[key];
      if (!g || !g[loc]) return null;
      return { href: `/${locale}/aw/guides/${g[loc].slug}`, label: g[loc].title, key };
    })
    .filter(Boolean);

  if (links.length === 0) return null;

  return (
    <section id="related-guides" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
      <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-foreground">{title}</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {links.map(({ href, label, key }) => (
          <li key={key}>
            <Link
              href={href}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/10 hover:border-primary/40 transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
