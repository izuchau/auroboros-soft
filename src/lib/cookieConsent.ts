export const COOKIE_CONSENT_KEY = 'auroboros-cookie-consent';
export const COOKIE_CONSENT_VERSION = 1;

export type CookieConsentChoices = {
  version: number;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

export function parseCookieConsent(raw: string | null): CookieConsentChoices | null {
  if (!raw) return null;

  try {
    const data = JSON.parse(raw) as Partial<CookieConsentChoices>;
    if (data.version !== COOKIE_CONSENT_VERSION) return null;
    if (typeof data.analytics !== 'boolean' || typeof data.marketing !== 'boolean') return null;

    return {
      version: COOKIE_CONSENT_VERSION,
      necessary: true,
      analytics: data.analytics,
      marketing: data.marketing,
      updatedAt: typeof data.updatedAt === 'string' ? data.updatedAt : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function saveCookieConsent(choices: Omit<CookieConsentChoices, 'version' | 'necessary' | 'updatedAt'>): CookieConsentChoices {
  const consent: CookieConsentChoices = {
    version: COOKIE_CONSENT_VERSION,
    necessary: true,
    analytics: choices.analytics,
    marketing: choices.marketing,
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
  return consent;
}
