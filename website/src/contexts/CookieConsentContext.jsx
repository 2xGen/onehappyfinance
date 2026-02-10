'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'cookie-consent';

export const CookieConsentContext = createContext(null);

export function CookieConsentProvider({ children }) {
  const [consent, setConsentState] = useState(null);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'all' || stored === 'essential') {
        setConsentState(stored);
      } else {
        setBannerOpen(true);
      }
    } catch {
      setBannerOpen(true);
    }
  }, [mounted]);

  const setConsent = useCallback((value) => {
    setConsentState(value);
    setBannerOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {}
  }, []);

  const openBanner = useCallback(() => {
    setBannerOpen(true);
  }, []);

  const value = {
    consent,
    bannerOpen,
    setBannerOpen,
    setConsent,
    openBanner,
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error('useCookieConsent must be used within CookieConsentProvider');
  return ctx;
}
