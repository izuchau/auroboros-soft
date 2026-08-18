import type { Locale } from '../types';
import type { FAQItem } from '../types';
import { faqItems } from '../data/faq';
import { products } from '../data/products';
import { socialLinks } from '../data/social';
const SITE_NAME = 'Auroboros Soft';
const CONTACT_EMAIL = 'auroboros.soft@gmail.com';

export const OG_IMAGE_PATH = '/og-image.png';
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export function absoluteUrl(path: string, site: URL | string): string {
  return new URL(path, site).href;
}

export function buildOrganizationSchema(site: URL | string) {
  const sameAs = socialLinks.filter((link) => !link.comingSoon).map((link) => link.href);

  return {
    '@type': 'Organization',
    '@id': `${absoluteUrl('/', site)}#organization`,
    name: SITE_NAME,
    url: absoluteUrl('/', site),
    logo: absoluteUrl('/logo.png', site),
    email: CONTACT_EMAIL,
    sameAs,
  };
}

export function buildWebSiteSchema(site: URL | string) {
  return {
    '@type': 'WebSite',
    '@id': `${absoluteUrl('/', site)}#website`,
    name: SITE_NAME,
    url: absoluteUrl('/', site),
    publisher: { '@id': `${absoluteUrl('/', site)}#organization` },
    inLanguage: ['ru-RU', 'en-US'],
  };
}

export function buildFaqPageSchema(locale: Locale, site: URL | string) {
  return {
    '@type': 'FAQPage',
    '@id': `${absoluteUrl(`/${locale}/`, site)}#faq`,
    mainEntity: faqItems.map((item) => faqItemToQuestion(item, locale)),
  };
}

function faqItemToQuestion(item: FAQItem, locale: Locale) {
  return {
    '@type': 'Question',
    name: item.question[locale],
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer[locale],
    },
  };
}

const PRODUCT_PRICE_RUB = 27900;

export function buildProductSchemas(locale: Locale, site: URL | string) {
  return products.map((product) => ({
    '@type': 'Product',
    '@id': `${absoluteUrl(`/${locale}/#products`, site)}#${product.id}`,
    name: product.name[locale],
    description: product.description[locale],
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    category: product.market[locale],
    offers: {
      '@type': 'Offer',
      price: PRODUCT_PRICE_RUB,
      priceCurrency: 'RUB',
      availability: 'https://schema.org/InStock',
      url: absoluteUrl(`/${locale}/#products`, site),
      seller: {
        '@type': 'Organization',
        name: SITE_NAME,
      },
    },
  }));
}

export function buildLandingStructuredData(locale: Locale, site: URL | string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationSchema(site),
      buildWebSiteSchema(site),
      buildFaqPageSchema(locale, site),
      ...buildProductSchemas(locale, site),
    ],
  };
}

export function buildSiteStructuredData(site: URL | string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [buildOrganizationSchema(site), buildWebSiteSchema(site)],
  };
}
