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
      ru: 'Акции РФ и ОФЗ — алгоритмическая торговля',
      en: 'Russian equities and OFZ bonds — algorithmic trading',
    },
    description: {
      ru: 'MOEX PRO — торговый робот для автоматической работы на Московской бирже по двум стратегиям: акции РФ и облигации Минфина РФ (ОФЗ). Подключается через брокера Т‑Банк, исполняет сделки по заданным правилам и помогает управлять риском без постоянного контроля терминала. Перед боевым запуском можно проверить робота в тестовом режиме — на реальных котировках, без отправки ордеров брокеру. Результат зависит от рынка и настроек; робот не гарантирует доходность и не подсказывает, что покупать или продавать.',
      en: 'MOEX PRO is a trading bot for automated execution on Moscow Exchange across two strategies: Russian equities and Minfin OFZ bonds. Connects via T-Bank, follows predefined rules, and helps manage risk without constant terminal monitoring. Before going live, you can run test mode on real market data without sending orders to the broker. Results depend on market conditions and settings; the bot does not guarantee returns and does not tell you what to buy or sell.',
    },
    price: {
      ru: '27 900 ₽',
      en: '27,900 RUB',
    },
    features: [
      { label: { ru: 'Лицензия: 1 компьютер', en: 'License: 1 computer' } },
      { label: { ru: 'Поддержка 30 дней', en: '30 days support' } },
      { label: { ru: 'Акции РФ и ОФЗ на MOEX', en: 'Russian equities and OFZ on MOEX' } },
      { label: { ru: 'Подключение через T-Банк', en: 'T-Bank broker integration' } },
      { label: { ru: 'Автовход и сопровождение позиций', en: 'Automated entry and position management' } },
      { label: { ru: 'Гибкие настройки и режимы риска', en: 'Flexible settings and risk modes' } },
      { label: { ru: 'Защита позиций: безубыток и трейлинг', en: 'Position protection: breakeven and trailing' } },
      { label: { ru: 'Усреднение (по желанию)', en: 'Averaging (optional)' } },
      { label: { ru: 'План Б — сопровождение при просадке', en: 'Plan B — drawdown recovery mode' } },
      { label: { ru: 'Тестовый режим — проверка на реальных котировках', en: 'Test mode — validation on live market data' } },
      { label: { ru: 'Веб-панель: сделки, P&L, логи', en: 'Web dashboard: trades, P&L, logs' } },
      { label: { ru: 'Уведомления в MAX', en: 'MAX notifications' } },
      { label: { ru: 'Риск-менеджмент', en: 'Risk management' } },
      { label: { ru: 'Техническая поддержка', en: 'Technical support' } },
    ],
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
      ru: 'Спот и фьючерсы — алгоритмическая торговля',
      en: 'Spot and futures — algorithmic trading',
    },
    description: {
      ru: 'CRYPTO PRO — торговый робот для автоматической работы на Bybit по двум стратегиям: спот (лонг) и бессрочные фьючерсы (лонг и шорт). Подключается через Bybit, исполняет сделки по заданным правилам и помогает управлять риском без постоянного контроля терминала. Перед боевым запуском можно проверить робота в тестовом режиме — на реальных котировках, без отправки ордеров на биржу. Результат зависит от рынка и настроек; робот не гарантирует доходность и не подсказывает, что покупать или продавать.',
      en: 'CRYPTO PRO is a trading bot for automated execution on Bybit across two strategies: spot (long) and perpetual futures (long and short). Connects via Bybit, follows predefined rules, and helps manage risk without constant terminal monitoring. Before going live, you can run test mode on real market data without sending orders to the exchange. Results depend on market conditions and settings; the bot does not guarantee returns and does not tell you what to buy or sell.',
    },
    price: {
      ru: '27 900 ₽',
      en: '27,900 RUB',
    },
    features: [
      { label: { ru: 'Лицензия: 1 компьютер', en: 'License: 1 computer' } },
      { label: { ru: 'Поддержка 30 дней', en: '30 days support' } },
      { label: { ru: 'Спот и фьючерсы на Bybit', en: 'Spot and futures on Bybit' } },
      { label: { ru: 'Подключение через Bybit', en: 'Bybit exchange integration' } },
      { label: { ru: 'Автовход и сопровождение позиций', en: 'Automated entry and position management' } },
      { label: { ru: 'Гибкие настройки и режимы риска', en: 'Flexible settings and risk modes' } },
      { label: { ru: 'Защита позиций: безубыток и трейлинг', en: 'Position protection: breakeven and trailing' } },
      { label: { ru: 'Усреднение (по желанию)', en: 'Averaging (optional)' } },
      { label: { ru: 'План Б — сопровождение при просадке', en: 'Plan B — drawdown recovery mode' } },
      { label: { ru: 'Тестовый режим — проверка на реальных котировках', en: 'Test mode — validation on live market data' } },
      { label: { ru: 'Веб-панель: сделки, P&L, инструменты', en: 'Web dashboard: trades, P&L, instruments' } },
      { label: { ru: 'Уведомления в Telegram', en: 'Telegram notifications' } },
      { label: { ru: 'Риск-менеджмент', en: 'Risk management' } },
      { label: { ru: 'Техническая поддержка', en: 'Technical support' } },
    ],
    boxLogo: '/images/products/crypto-pro-logo.png',
  },
];
