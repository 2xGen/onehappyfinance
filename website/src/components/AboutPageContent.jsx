'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { addLocaleToPath } from '@/i18n/config';

const IMG = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/One%20Happy%20Finance%20Aruba.png';

const content = {
  en: {
    breadcrumb: 'About OneHappyFinance',
    title: 'About OneHappyFinance',
    intro: 'OneHappyFinance was created to make financial information in Aruba clearer, more transparent, and easier to understand — for residents, expats, and anyone planning a future on the island.',
    cta: 'Explore our guides',
    whyTitle: 'Why we exist',
    whyBody: 'Financial decisions in Aruba often come with uncertainty. Mortgages, insurance, and property structures are explained differently by banks, brokers, and agencies, making it hard to know what truly applies to your situation. OneHappyFinance exists to bring clarity. We translate complex financial topics into plain language, grounded in Aruba\'s laws and everyday reality.',
    independentTitle: 'Independent & informational',
    independentBody: 'OneHappyFinance is an independent informational platform. We are not a bank, insurer, mortgage provider, or real estate agency. Our role is to help readers understand how things work, what options exist, and what questions to ask — without sales pressure or hidden agendas.',
    arubaTitle: 'Built specifically for Aruba',
    arubaBody: 'We focus exclusively on Aruba. Our guides take local regulations, common practices, and real-life scenarios into account — from AZV health insurance and mandatory motor coverage to freehold versus lease land. Content is reviewed and updated to stay aligned with changes in the local market.',
    whoTitle: 'Who OneHappyFinance is for',
    whoBody: 'Our content is written for residents, expats, returnees, and foreign buyers who want reliable, unbiased information before making important financial decisions. Guides are available in English and Dutch, with Papiamento planned.',
    directionTitle: 'Our direction',
    directionBody: 'OneHappyFinance is being built step by step. The long-term vision is to grow into a central reference point for financial decisions in Aruba — covering property, insurance, and related topics — while remaining transparent, independent, and locally focused. If readers are ever connected with local professionals, this will always be disclosed clearly.',
    tagline: 'Clear information leads to better decisions.',
  },
  nl: {
    breadcrumb: 'Over OneHappyFinance',
    title: 'Over OneHappyFinance',
    intro: 'OneHappyFinance is opgezet om financiële informatie over Aruba duidelijker, transparanter en begrijpelijker te maken — voor inwoners, expats en iedereen die een toekomst op het eiland plant.',
    cta: 'Bekijk onze gidsen',
    whyTitle: 'Waarom we bestaan',
    whyBody: 'Financiële beslissingen in Aruba gaan vaak gepaard met onzekerheid. Hypotheken, verzekeringen en eigendomsstructuren worden door banken, bemiddelaars en agentschappen verschillend uitgelegd, waardoor het lastig is te weten wat echt op jouw situatie van toepassing is. OneHappyFinance bestaat om duidelijkheid te bieden. Wij vertalen complexe financiële onderwerpen naar begrijpelijke taal, gebaseerd op de wetten en dagelijkse realiteit van Aruba.',
    independentTitle: 'Onafhankelijk & informatief',
    independentBody: 'OneHappyFinance is een onafhankelijk informatief platform. Wij zijn geen bank, verzekeraar, hypotheekverstrekker of makelaar. Onze rol is lezers te helpen begrijpen hoe dingen werken, welke opties er zijn en welke vragen ze moeten stellen — zonder verkoopdruk of verborgen agenda\'s.',
    arubaTitle: 'Specifiek voor Aruba',
    arubaBody: 'We richten ons uitsluitend op Aruba. Onze gidsen houden rekening met lokale regelgeving, gangbare praktijken en situaties uit de praktijk — van AZV-ziektekostenverzekering en verplichte motorverzekering tot eigendom versus erfpacht. De inhoud wordt beoordeeld en bijgewerkt om aan te sluiten bij ontwikkelingen op de lokale markt.',
    whoTitle: 'Voor wie OneHappyFinance is',
    whoBody: 'Onze inhoud is geschreven voor inwoners, expats, terugkeerders en buitenlandse kopers die betrouwbare, onpartijdige informatie willen voordat ze belangrijke financiële beslissingen nemen. Gidsen zijn beschikbaar in het Engels en Nederlands; Papiamento is gepland.',
    directionTitle: 'Onze richting',
    directionBody: 'OneHappyFinance wordt stap voor stap opgebouwd. De langetermijnvisie is uitgroeien tot een centraal referentiepunt voor financiële beslissingen in Aruba — met onderwerpen als onroerend goed, verzekeringen en aanverwante thema\'s — terwijl we transparant, onafhankelijk en lokaal gericht blijven. Als lezers ooit in contact worden gebracht met lokale professionals, wordt dit altijd duidelijk vermeld.',
    tagline: 'Duidelijke informatie leidt tot betere beslissingen.',
  },
};

export default function AboutPageContent({ locale = 'en' }) {
  const t = content[locale] || content.en;
  const guidesPath = addLocaleToPath('/aw/guides', locale);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-foreground/70">
        <Link href={`/${locale}`} className="hover:text-primary">Home</Link>
        <span className="mx-2">/</span>
        <span>{t.breadcrumb}</span>
      </nav>

      <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground mb-4">
        {t.title}
      </h1>
      <p className="text-base md:text-lg text-foreground/80 leading-7 md:leading-8 mb-10">
        {t.intro}
      </p>

      <div className="rounded-xl overflow-hidden mb-12 shadow-md">
        <Image
          src={IMG}
          alt="OneHappyFinance Aruba"
          width={800}
          height={450}
          className="w-full h-auto aspect-video object-cover"
        />
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-3">
            {t.whyTitle}
          </h2>
          <p className="text-foreground/80 leading-7 md:leading-8">{t.whyBody}</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-3">
            {t.independentTitle}
          </h2>
          <p className="text-foreground/80 leading-7 md:leading-8">{t.independentBody}</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-3">
            {t.arubaTitle}
          </h2>
          <p className="text-foreground/80 leading-7 md:leading-8">{t.arubaBody}</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-3">
            {t.whoTitle}
          </h2>
          <p className="text-foreground/80 leading-7 md:leading-8">{t.whoBody}</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-3">
            {t.directionTitle}
          </h2>
          <p className="text-foreground/80 leading-7 md:leading-8">{t.directionBody}</p>
        </section>
      </div>

      <p className="mt-14 pt-8 border-t border-border text-center text-foreground/80 text-base md:text-lg leading-7 md:leading-8 font-medium">
        {t.tagline}
      </p>
      <p className="mt-4 text-center">
        <Link href={guidesPath} className="text-primary font-medium hover:underline">
          {t.cta} →
        </Link>
      </p>
    </div>
  );
}
