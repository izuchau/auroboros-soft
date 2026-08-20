/// <reference types="astro/client" />

interface Window {
  grecaptcha?: {
    enterprise?: {
      ready: (callback: () => void) => void;
      render: (
        container: HTMLElement | string,
        parameters: { sitekey: string; theme?: string; action?: string },
      ) => number;
      reset: (widgetId?: number) => void;
      getResponse: (widgetId?: number) => string;
    };
  };
  ym?: ((counterId: number, method: string, ...args: unknown[]) => void) & { a?: unknown[]; l?: number };
}

interface ImportMetaEnv {
  readonly PUBLIC_FORMSPREE_ID: string;
  readonly PUBLIC_RECAPTCHA_SITE_KEY: string;
  readonly PUBLIC_GA_MEASUREMENT_ID: string;
  readonly PUBLIC_YANDEX_METRIKA_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
