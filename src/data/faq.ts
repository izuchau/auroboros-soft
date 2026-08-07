import type { FAQItem } from '../types';

export const faqItems: FAQItem[] = [
  {
    question: {
      ru: 'Какие биржи вы поддерживаете?',
      en: 'Which exchanges do you support?',
    },
    answer: {
      ru: 'Московская биржа (акции, фьючерсы, валюта), криптобиржи (Binance, Bybit, OKX и др.), а также международные площадки через MetaTrader, Interactive Brokers и API-брокеров.',
      en: 'Moscow Exchange (equities, futures, FX), crypto exchanges (Binance, Bybit, OKX, etc.), and international markets via MetaTrader, Interactive Brokers, and API brokers.',
    },
  },
  {
    question: {
      ru: 'Нужен ли VPS для запуска робота?',
      en: 'Do I need a VPS to run the bot?',
    },
    answer: {
      ru: 'Да, для круглосуточной работы рекомендуем VPS или выделенный сервер с минимальной задержкой до биржи. Поможем с настройкой.',
      en: 'Yes, for 24/7 operation we recommend a VPS or dedicated server with low latency to the exchange. We can help with setup.',
    },
  },
  {
    question: {
      ru: 'Есть ли бэктест и forward-test?',
      en: 'Do you provide backtest and forward-test?',
    },
    answer: {
      ru: 'Для каждого робота проводим бэктест на исторических данных. Forward-test на демо-счёте — перед запуском на реальном капитале.',
      en: 'Every bot is backtested on historical data. Forward-testing on a demo account is done before live deployment.',
    },
  },
  {
    question: {
      ru: 'Какие риски автоматической торговли?',
      en: 'What are the risks of automated trading?',
    },
    answer: {
      ru: 'Торговля на финансовых рынках сопряжена с риском потери капитала. Прошлые результаты не гарантируют будущую доходность. Роботы не являются инвестиционной рекомендацией.',
      en: 'Trading financial markets involves risk of capital loss. Past performance does not guarantee future results. Bots are not investment advice.',
    },
  },
  {
    question: {
      ru: 'Сроки разработки робота на заказ?',
      en: 'How long does custom development take?',
    },
    answer: {
      ru: 'От 2 до 8 недель в зависимости от сложности стратегии, количества инструментов и требований к инфраструктуре.',
      en: 'From 2 to 8 weeks depending on strategy complexity, number of instruments, and infrastructure requirements.',
    },
  },
  {
    question: {
      ru: 'Предоставляете ли исходный код?',
      en: 'Do you provide source code?',
    },
    answer: {
      ru: 'Для готовых решений — по договорённости. Для разработки на заказ исходный код передаётся клиенту согласно договору.',
      en: 'For ready-made solutions — by agreement. For custom development, source code is transferred to the client per contract.',
    },
  },
];
