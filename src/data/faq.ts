import type { FAQItem } from '../types';

export const faqItems: FAQItem[] = [
  {
    question: {
      ru: 'Какие биржи вы поддерживаете?',
      en: 'Which exchanges do you support?',
    },
    answer: {
      ru: 'Московская биржа (акции, облигации, фьючерсы, валюта, металлы). Готовый робот CRYPTO pro — Bybit; другие криптобиржи (Binance, OKX и др.) — при разработке на заказ. Международные площадки — через MetaTrader, Interactive Brokers и API-брокеров.',
      en: 'Moscow Exchange (equities, bonds, futures, FX, metals). Ready-made CRYPTO pro runs on Bybit; other crypto exchanges (Binance, OKX, etc.) are available via custom development. International markets via MetaTrader, Interactive Brokers, and API brokers.',
    },
  },
  {
    question: {
      ru: 'Нужен ли VPS для запуска робота?',
      en: 'Do I need a VPS to run the bot?',
    },
    answer: {
      ru: 'Нет, не обязательно — можно использовать домашний ПК. Для круглосуточной работы рекомендуем VPS или выделенный сервер с минимальной задержкой до биржи; это особенно актуально для криптобирж, которые торгуются 24/7. По вашему усмотрению: желательно, но не обязательно — всё зависит от вашего стиля торговли.',
      en: 'No, it is not required — you can use a home PC. For 24/7 operation we recommend a VPS or dedicated server with low latency to the exchange; this is especially relevant for crypto exchanges that trade around the clock. It is optional and depends on your trading style.',
    },
  },
  {
    question: {
      ru: 'Есть ли бэктест и тестовый режим?',
      en: 'Is there backtesting and a test mode?',
    },
    answer: {
      ru: 'Да. Проводим бэктест на исторических данных на этапе разработки и перед передачей робота. Перед боевым запуском можно проверить его в тестовом режиме — на реальных котировках, без отправки ордеров брокеру или на биржу.',
      en: 'Yes. We run historical backtests during development and before handover. Before going live, you can run test mode on real market quotes without sending orders to your broker or exchange.',
    },
  },
  {
    question: {
      ru: 'Какие риски автоматической торговли?',
      en: 'What are the risks of automated trading?',
    },
    answer: {
      ru: 'Торговля на финансовых рынках связана с риском потери капитала. Робот не гарантирует доходность — результат зависит от рынка, настроек и ваших решений. Успешный бэктест или тестовый прогон не означает, что в будущем будет так же. Мы не подсказываем, что покупать или продавать: робот лишь исполняет заложенные правила.',
      en: 'Trading financial markets involves the risk of losing capital. The bot does not guarantee returns — results depend on the market, settings, and your decisions. A successful backtest or test run does not mean future results will be the same. We do not tell you what to buy or sell: the bot only executes predefined rules.',
    },
  },
  {
    question: {
      ru: 'Сроки и стоимость разработки робота на заказ?',
      en: 'How long and how much does custom development cost?',
    },
    answer: {
      ru: 'Срок и стоимость зависят от сложности. Простой робот — от 2–4 недель, стоимость от 100 000 ₽. Сложные проекты (несколько стратегий, гибкие настройки, веб-панель, тестовый режим и доработка под реальную торговлю) — расчёт индивидуально, срок обычно от 1 до 4 месяцев и больше. Точные сроки и цену называем после анализа вашей стратегии.',
      en: 'Timelines and pricing depend on complexity. A simple bot takes 2–4 weeks and starts from 100,000 RUB. Complex projects (multiple strategies, flexible settings, a web dashboard, test mode, and live-trading polish) are quoted individually — typically 1 to 4 months or longer. We provide an exact estimate after reviewing your strategy.',
    },
  },
  {
    question: {
      ru: 'Предоставляете ли исходный код?',
      en: 'Do you provide source code?',
    },
    answer: {
      ru: 'По умолчанию мы передаём готовую программу и инструкцию по установке и настройке — без исходного кода. Это относится и к готовым решениям, и к разработке на заказ. Передача исходников возможна отдельно — обсуждаем индивидуально и оформляем дополнительным соглашением.',
      en: 'By default, we deliver the ready-to-use application and setup instructions — without source code. This applies to both ready-made products and custom development. Source code can be provided separately — we discuss it individually and formalize it in an additional agreement.',
    },
  },
  {
    question: {
      ru: 'Что я получу после покупки готового робота?',
      en: 'What do I get after buying a ready-made bot?',
    },
    answer: {
      ru: 'На email отправляем архив с программой, пошаговую инструкцию и лицензионный ключ. Устанавливаете робота как обычную программу на Windows. При запуске автоматически открывается веб-дашборд в браузере — там сделки, настройки, логи и статистика. Подключение к T‑Bank (MOEX pro) или Bybit (CRYPTO pro) настраиваете по инструкции.',
      en: 'We email an archive with the app, a step-by-step guide, and a license key. Install the bot on Windows like any desktop app. When you start it, the web dashboard opens automatically in your browser — trades, settings, logs, and stats. Connect to T-Bank (MOEX pro) or Bybit (CRYPTO pro) following the guide.',
    },
  },
  {
    question: {
      ru: 'Как работает лицензия?',
      en: 'How does licensing work?',
    },
    answer: {
      ru: 'Одна покупка — один лицензионный ключ — один компьютер. Ключ привязывается к вашему ПК при активации. Перенос на другой компьютер — по согласованию с поддержкой (например, при замене железа). Срок действия лицензии и условия продления указаны в инструкции и соглашении.',
      en: 'One purchase — one license key — one computer. The key binds to your PC on activation. Moving to another machine is handled with support (e.g. hardware replacement). License duration and renewal terms are in the guide and Terms of Service.',
    },
  },
  {
    question: {
      ru: 'Сколько длится бесплатная поддержка?',
      en: 'How long is free support included?',
    },
    answer: {
      ru: 'Для готовых роботов MOEX pro и CRYPTO pro — 30 дней с момента покупки: помощь с установкой, настройкой и первым запуском. После этого поддержка и обновления обсуждаются отдельно. Для разработки на заказ сроки и объём поддержки фиксируем при заказе.',
      en: 'For ready-made MOEX pro and CRYPTO pro bots — 30 days from purchase: help with install, setup, and first launch. After that, support and updates are agreed separately. Custom projects have support terms defined in your order.',
    },
  },
  {
    question: {
      ru: 'Робот управляет моими деньгами?',
      en: 'Does the bot control my money?',
    },
    answer: {
      ru: 'Нет. Мы не принимаем депозиты и не управляем вашим счётом. Деньги остаются у брокера (T‑Bank) или на бирже (Bybit). Робот только отправляет торговые команды по вашим настройкам через API или терминал. Вы сами задаёте риски и можете остановить программу в любой момент.',
      en: 'No. We do not take deposits or manage your account. Funds stay with your broker (T-Bank) or exchange (Bybit). The bot only sends trade commands per your settings via API or terminal. You set risk parameters and can stop the app at any time.',
    },
  },
  {
    question: {
      ru: 'Какой депозит нужен для торговли?',
      en: 'What deposit do I need to start trading?',
    },
    answer: {
      ru: 'Жёсткого минимума от нас нет. Робот может открыть сделку с минимальным объёмом, который допускает брокер или биржа для выбранного инструмента. Сколько денег держать на счёте — зависит от ваших торговых предпочтений: размер позиции, число одновременных сделок, инструмент и запас на просадку. Рекомендуем закладывать запас сверх одной минимальной сделки — конкретные цифры подскажем при настройке под ваш счёт.',
      en: 'We do not set a fixed minimum. The bot can open a trade at the minimum size allowed by your broker or exchange for the chosen instrument. How much to keep on the account depends on your trading preferences: position size, number of concurrent trades, instrument, and drawdown buffer. We recommend holding more than the cost of a single minimum trade — we can suggest amounts when helping you configure the bot for your account.',
    },
  },
  {
    question: {
      ru: 'Как проходит оплата и доставка?',
      en: 'How do payment and delivery work?',
    },
    answer: {
      ru: 'Оставляете заявку на сайте или пишете на email. Согласовываем детали, стоимость и способ оплаты (счёт, перевод — уточняем при заказе). После оплаты отправляем робота, инструкцию и ключ на ваш email. Обычно в течение от 1 до 24 часов, возможно до 2 рабочих дней после подтверждения оплаты.',
      en: 'Submit a request on the site or email us. We agree on details, price, and payment method (invoice, bank transfer — confirmed per order). After payment we send the bot, guide, and key to your email — usually within 1 to 24 hours, and in some cases up to 2 business days after payment is confirmed.',
    },
  },
  {
    question: {
      ru: 'На какой системе работает робот?',
      en: 'What system does the bot run on?',
    },
    answer: {
      ru: 'Готовые роботы — приложение для Windows 10/11 (64-bit) на ПК или VPS. Ставите как обычную программу — при запуске открывается веб-дашборд в браузере на этом же компьютере. Минимум: 4 ГБ RAM, ~500 МБ свободного места на диске, стабильный интернет и современный браузер (Chrome, Edge, Firefox). Комфортно — 8 ГБ RAM. Для торговли 24/7 на крипте VPS необязателен, но удобен.',
      en: 'Ready-made bots are Windows 10/11 (64-bit) apps for a PC or VPS. Install like a desktop app; on start the web dashboard opens in your browser on the same machine. Minimum: 4 GB RAM, ~500 MB free disk space, stable internet, and a modern browser (Chrome, Edge, Firefox). 8 GB RAM is comfortable. For 24/7 crypto trading a VPS is optional but convenient.',
    },
  },
];
