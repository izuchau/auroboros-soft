/// <reference types="astro/client" />

interface Window {
  smartCaptcha?: {
    render: (
      container: HTMLElement | string,
      params: {
        sitekey: string;
        callback?: (token: string) => void;
        hl?: string;
        test?: boolean;
      },
    ) => number;
    reset: (widgetId?: number) => void;
    getResponse: (widgetId?: number) => string;
  };
  initSmartCaptcha?: () => void;
  ym?: ((counterId: number, method: string, ...args: unknown[]) => void) & { a?: unknown[]; l?: number };
}

interface ImportMetaEnv {
  readonly PUBLIC_FORMSPREE_ID: string;
  readonly PUBLIC_YANDEX_SMARTCAPTCHA_CLIENT_KEY: string;
  readonly PUBLIC_GA_MEASUREMENT_ID: string;
  readonly PUBLIC_YANDEX_METRIKA_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
