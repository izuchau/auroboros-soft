import type { Product } from '../types';

/**
 * Готовые торговые роботы.
 *
 * Видео (опционально):
 * YouTube: provider: 'youtube', embedId: 'VIDEO_ID'
 * VK: provider: 'vk', embedId: 'полный URL из iframe src'
 */
export const products: Product[] = [
  {
    id: 'moex-pro',
    name: {
      ru: 'MOEX pro',
      en: 'MOEX pro',
    },
    market: {
      ru: 'Московская биржа',
      en: 'Moscow Exchange',
    },
    strategy: {
      ru: 'Алгоритмическая торговля MOEX',
      en: 'MOEX algorithmic trading',
    },
    description: {
      ru: 'Торговый робот для автоматической торговли на Московской бирже. Встроенный риск-менеджмент и поддержка.',
      en: 'Trading bot for automated trading on Moscow Exchange with built-in risk management and support.',
    },
    price: {
      ru: '27 900 ₽',
      en: '27,900 RUB',
    },
    features: {
      ru: ['Рынок MOEX', 'Риск-менеджмент', 'Техническая поддержка'],
      en: ['MOEX market', 'Risk management', 'Technical support'],
    },
    boxLogo: '/images/products/moex-pro-logo.png',
  },
  {
    id: 'crypto-pro',
    name: {
      ru: 'CRYPTO pro',
      en: 'CRYPTO pro',
    },
    market: {
      ru: 'Криптобиржи',
      en: 'Crypto exchanges',
    },
    strategy: {
      ru: 'Алгоритмическая торговля криптовалютами',
      en: 'Crypto algorithmic trading',
    },
    description: {
      ru: 'Торговый робот для криптовалютных бирж. Автоматизация сделок с настраиваемыми параметрами риска.',
      en: 'Trading bot for crypto exchanges. Automated execution with configurable risk parameters.',
    },
    price: {
      ru: '27 900 ₽',
      en: '27,900 RUB',
    },
    features: {
      ru: ['Криптобиржи', 'Настраиваемые параметры', 'Техническая поддержка'],
      en: ['Crypto exchanges', 'Configurable parameters', 'Technical support'],
    },
    boxLogo: '/images/products/crypto-pro-logo.png',
  },
];
