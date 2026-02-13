'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { addLocaleToPath } from '@/i18n/config';
import { useLocale } from '@/src/contexts/LocaleContext';
import { Input } from '@/src/components/ui/input';
import { Button } from '@/src/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/src/components/ui/dialog';
import { X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const HERO_IMAGE_URL =
  'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/one%20happy%20finance.png';

const content = {
  en: {
    breadcrumb: 'Connect',
    heroLabel: 'Coming soon',
    heroHeadline: 'Responsible financial connections in Aruba',
    heroIntro:
      'OneHappyFinance is developing a structured way to connect individuals with established professionals in the areas of mortgage, property, and insurance.',
    heroCta: 'Register your interest below and we will notify you when Connect becomes operational.',
    ctaButton: 'Connect',
    indicateRole: 'I am registering as:',
    roleIndividual: 'Private Individual',
    roleProfessional: 'Financial or Real Estate Professional',
    roleIndividualCta:
      'Receive notification when structured introductions to vetted professionals become available.',
    roleProfessionalCta:
      'Express interest in being considered for future qualified client introductions.',
    formIntro: 'Leave your details and we will inform you when Connect goes live.',
    fullName: 'Name (optional)',
    email: 'Email address',
    companyName: 'Company (optional)',
    submit: 'Notify me when Connect launches',
    legalLine:
      'By submitting this form, you agree to be contacted regarding updates about OneHappyFinance and Connect. Participation is voluntary and non-binding. Data is processed in accordance with our Privacy Policy.',
    successMessage: "You're registered. We'll inform you when Connect launches.",
    errorMessage: 'Something went wrong. Please try again or email us directly.',
    submitting: 'Sending…',
    whyTitle: 'Why Connect',
    why1: 'Structured and informed introductions',
    why2: 'Clarity before commitment',
    why3: 'Independent and transparent positioning',
    why4: 'Focused exclusively on Aruba',
    statusTitle: 'Status',
    statusBody:
      'Connect is currently in early development. We will notify registered individuals and professionals once the service becomes operational.',
    tagline: 'Clear information leads to better decisions.',
    cta: 'Explore our guides',
  },
  nl: {
    breadcrumb: 'Connect',
    heroLabel: 'Binnenkort',
    heroHeadline: 'Verantwoorde financiële verbindingen in Aruba',
    heroIntro:
      'OneHappyFinance ontwikkelt een gestructureerde manier om particulieren te verbinden met gevestigde professionals op het gebied van hypotheek, vastgoed en verzekering.',
    heroCta:
      'Registreer hieronder uw belangstelling; we laten u weten wanneer Connect operationeel wordt.',
    ctaButton: 'Connect',
    indicateRole: 'Ik registreer mij als:',
    roleIndividual: 'Particulier',
    roleProfessional: 'Financieel of vastgoedprofessional',
    roleIndividualCta:
      'Ontvang een bericht wanneer gestructureerde introducties naar gecontroleerde professionals beschikbaar komen.',
    roleProfessionalCta:
      'Geef aan in aanmerking te willen komen voor toekomstige gekwalificeerde klantintroducties.',
    formIntro: 'Laat uw gegevens achter; we informeren u wanneer Connect live gaat.',
    fullName: 'Naam (optioneel)',
    email: 'E-mailadres',
    companyName: 'Bedrijf (optioneel)',
    submit: 'Breng me op de hoogte wanneer Connect van start gaat',
    legalLine:
      'Door dit formulier te verzenden, gaat u ermee akkoord dat wij contact met u opnemen over OneHappyFinance en Connect. Deelname is vrijwillig en niet-bindend. Gegevens worden verwerkt volgens ons Privacybeleid.',
    successMessage: "U staat geregistreerd. We informeren u wanneer Connect van start gaat.",
    errorMessage: 'Er ging iets mis. Probeer het opnieuw of mail ons.',
    submitting: 'Versturen…',
    whyTitle: 'Waarom Connect',
    why1: 'Gestructureerde en geïnformeerde introducties',
    why2: 'Duidelijkheid vóór commitment',
    why3: 'Onafhankelijke en transparante positionering',
    why4: 'Uitsluitend gericht op Aruba',
    statusTitle: 'Status',
    statusBody:
      'Connect bevindt zich momenteel in een vroege ontwikkelfase. We informeren geregistreerde particulieren en professionals zodra de dienst operationeel wordt.',
    tagline: 'Duidelijke informatie leidt tot betere beslissingen.',
    cta: 'Bekijk onze gidsen',
  },
};

export default function ConnectPageContent({ locale: localeProp }) {
  const { locale: contextLocale } = useLocale();
  const locale = localeProp ?? contextLocale ?? 'en';
  const t = content[locale] || content.en;
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitSignup = async ({ email, fullName, company, role: signupRole }) => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/connect-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          fullName: fullName?.trim() || '',
          company: company?.trim() || '',
          role: signupRole,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.error || t.errorMessage);
        return false;
      }
      setSubmitted(true);
      return true;
    } catch {
      setError(t.errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleIndividualSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email?.value;
    const fullName = form.fullName?.value;
    if (!email) return;
    await submitSignup({ email, fullName, company: '', role: 'individual' });
  };

  const handleProfessionalSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email?.value;
    const fullName = form.fullName?.value;
    const company = form.company?.value;
    if (!email) return;
    await submitSignup({ email, fullName, company: company || '', role: 'professional' });
  };

  const handleOpenChange = (next) => {
    setOpen(next);
    if (!next) {
      setRole(null);
      setSubmitted(false);
      setError(null);
    }
  };

  const guidesPath = addLocaleToPath('/aw/guides', locale);
  const inputClass =
    'h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

  // On mobile, scroll focused input into view after keyboard opens so user can still see the field
  const scrollInputIntoView = (e) => {
    setTimeout(() => {
      e.target.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 400);
  };

  return (
    <div className="min-h-screen">
      {/* Hero — title left, image right */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <nav aria-label="Breadcrumb" className="pt-2 pb-1 flex items-center gap-2 text-sm text-foreground/60">
            <Link href={`/${locale}`} className="hover:text-primary transition-colors">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="text-foreground/80">{t.breadcrumb}</span>
          </nav>
          <div className="grid md:grid-cols-2 items-center gap-6 md:gap-12 pt-2 md:pt-3 pb-10 md:pb-6">
            <div className="pt-2 md:pt-0 text-center md:text-left order-1">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
                {t.heroLabel}
              </p>
              <h1 className="font-heading text-4xl md:text-[42px] font-bold mb-4 leading-tight text-foreground">
                {t.heroHeadline}
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-3">
                {t.heroIntro}
              </p>
              <p className="text-base text-foreground/75 mb-6">
                {t.heroCta}
              </p>
              <Dialog open={open} onOpenChange={handleOpenChange}>
                <DialogTrigger asChild>
                  <Button size="lg" className="shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40">
                    {t.ctaButton}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <div className="sticky top-0 z-10 flex justify-end -mt-2 -mr-2 mb-2">
                    <DialogClose
                      aria-label="Close"
                      className="rounded-full p-2 text-foreground/70 hover:text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <X className="w-5 h-5" />
                    </DialogClose>
                  </div>
                  <DialogTitle className="sr-only">{t.ctaButton}</DialogTitle>
                  <div className="text-center flex flex-col items-center">
                    <p className="text-base font-semibold text-foreground/90 uppercase tracking-wide mb-3">
                      {t.indicateRole}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 w-full">
                      <button
                        type="button"
                        onClick={() => setRole('individual')}
                        className={cn(
                          'flex flex-col items-start gap-2 rounded-xl border-2 p-4 text-left transition-all duration-200',
                          role === 'individual'
                            ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                            : 'border-border bg-card hover:border-primary/70 hover:bg-primary/5'
                        )}
                      >
                        <span
                          className={cn(
                            'text-base font-bold tracking-tight',
                            role === 'individual' ? 'text-primary-foreground' : 'text-foreground'
                          )}
                        >
                          {t.roleIndividual}
                        </span>
                        <span
                          className={cn(
                            'text-sm leading-snug',
                            role === 'individual' ? 'text-primary-foreground/90' : 'text-foreground/70'
                          )}
                        >
                          {t.roleIndividualCta}
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setRole('professional')}
                        className={cn(
                          'flex flex-col items-start gap-2 rounded-xl border-2 p-4 text-left transition-all duration-200',
                          role === 'professional'
                            ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                            : 'border-border bg-card hover:border-primary/70 hover:bg-primary/5'
                        )}
                      >
                        <span
                          className={cn(
                            'text-base font-bold tracking-tight',
                            role === 'professional' ? 'text-primary-foreground' : 'text-foreground'
                          )}
                        >
                          {t.roleProfessional}
                        </span>
                        <span
                          className={cn(
                            'text-sm leading-snug',
                            role === 'professional' ? 'text-primary-foreground/90' : 'text-foreground/70'
                          )}
                        >
                          {t.roleProfessionalCta}
                        </span>
                      </button>
                    </div>

                    {error && (
                      <div className="rounded-xl border-2 border-destructive/30 bg-destructive/10 p-4 w-full text-center">
                        <p className="text-sm text-foreground">{error}</p>
                      </div>
                    )}

                    {submitted && (
                      <div className="rounded-xl border-2 border-primary/30 bg-primary/10 p-5 w-full text-center">
                        <p className="text-base text-foreground font-semibold">✓ {t.successMessage}</p>
                      </div>
                    )}

                    {role === 'individual' && !submitted && (
                      <>
                        <p className="text-foreground/85 text-base mb-4">{t.formIntro}</p>
                        <form onSubmit={handleIndividualSubmit} className="space-y-3 w-full text-center">
                          <Input
                            type="text"
                            name="fullName"
                            placeholder={t.fullName}
                            className={inputClass}
                            disabled={loading}
                            onFocus={scrollInputIntoView}
                          />
                          <Input
                            type="email"
                            name="email"
                            placeholder={t.email}
                            required
                            className={inputClass}
                            disabled={loading}
                            onFocus={scrollInputIntoView}
                          />
                          <Button
                            type="submit"
                            size="lg"
                            className="w-full h-12 text-sm font-semibold"
                            disabled={loading}
                          >
                            {loading ? t.submitting : t.submit}
                          </Button>
                          <p className="text-sm text-foreground/60 leading-snug">{t.legalLine}</p>
                        </form>
                      </>
                    )}

                    {role === 'professional' && !submitted && (
                      <>
                        <p className="text-foreground/85 text-base mb-4">{t.formIntro}</p>
                        <form onSubmit={handleProfessionalSubmit} className="space-y-3 w-full text-center">
                          <Input
                            type="text"
                            name="fullName"
                            placeholder={t.fullName}
                            className={inputClass}
                            disabled={loading}
                            onFocus={scrollInputIntoView}
                          />
                          <Input
                            type="email"
                            name="email"
                            placeholder={t.email}
                            required
                            className={inputClass}
                            disabled={loading}
                            onFocus={scrollInputIntoView}
                          />
                          <Input
                            type="text"
                            name="companyName"
                            placeholder={t.companyName}
                            className={inputClass}
                            disabled={loading}
                            onFocus={scrollInputIntoView}
                          />
                          <Button
                            type="submit"
                            size="lg"
                            className="w-full h-12 text-sm font-semibold"
                            disabled={loading}
                          >
                            {loading ? t.submitting : t.submit}
                          </Button>
                          <p className="text-sm text-foreground/60 leading-snug">{t.legalLine}</p>
                        </form>
                      </>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="relative h-80 md:h-auto order-2 mt-6 md:mt-0">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 rotate-3 md:rotate-3 translate-x-2 md:translate-x-4 ring-1 ring-black/5">
                <img
                  src={HERO_IMAGE_URL}
                  alt="One Happy Finance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Why Connect + Status */}
      <section className="border-t border-border/60 bg-muted/20">
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/70 mb-3">
                {t.whyTitle}
              </h2>
              <ul className="space-y-2 text-foreground/85">
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold" aria-hidden>•</span>
                  {t.why1}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold" aria-hidden>•</span>
                  {t.why2}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold" aria-hidden>•</span>
                  {t.why3}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold" aria-hidden>•</span>
                  {t.why4}
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/70 mb-3">
                {t.statusTitle}
              </h2>
              <p className="text-foreground/85 text-sm leading-relaxed">{t.statusBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="border-t border-border/60 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-foreground/80 font-medium">{t.tagline}</p>
          <p className="mt-3">
            <Link
              href={guidesPath}
              className="text-primary font-semibold hover:underline focus:outline-none focus:underline"
            >
              {t.cta} →
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
