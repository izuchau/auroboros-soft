export type Locale = 'ru' | 'en';

export type LocalizedString = Record<Locale, string>;

export type LocalizedList = Record<Locale, string[]>;

export type VideoProvider = 'youtube' | 'vk';

export interface ProductVideo {
  provider: VideoProvider;
  /** YouTube video ID or full VK embed URL */
  embedId: string;
}

export interface Product {
  id: string;
  name: LocalizedString;
  market: LocalizedString;
  strategy: LocalizedString;
  description: LocalizedString;
  price: LocalizedString;
  features: LocalizedList;
  video?: ProductVideo;
  boxLogo?: string;
}

export interface FAQItem {
  question: LocalizedString;
  answer: LocalizedString;
}
