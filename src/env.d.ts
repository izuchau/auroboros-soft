/// <reference types="astro/client" />

interface Window {
  grecaptcha?: {
    reset: (widgetId?: number) => void;
    getResponse: (widgetId?: number) => string;
  };
}

interface ImportMetaEnv {
  readonly PUBLIC_FORMSPREE_ID: string;
  readonly PUBLIC_RECAPTCHA_SITE_KEY: string;
  readonly PUBLIC_GA_MEASUREMENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
