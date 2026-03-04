'use client';

import React from 'react';
import { useTranslations } from '@/src/contexts/LocaleContext';

const USPS = ['usp1', 'usp2', 'usp3', 'usp4', 'usp5', 'usp6'];

export default function HomeUsps() {
  const t = useTranslations();

  return (
    <section className="bg-primary text-white py-4 px-4">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex flex-wrap justify-evenly items-center gap-y-3 gap-x-2">
          {USPS.map((key, i) => (
            <React.Fragment key={key}>
              <p className="text-[17px] m-0">{t(`home.${key}`)}</p>
              {i < USPS.length - 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-white/80 shrink-0 hidden sm:block" aria-hidden />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
