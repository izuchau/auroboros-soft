import type { Locale } from '../types';

const translations = {
  ru: {
    meta: {
      title: 'Купить торговый робот для MOEX и Bybit — от 27 900 ₽ | Auroboros Soft',
      description:
        'Купить торгового робота для Московской биржи: акции, ОФЗ и облигации РФ. Торговый робот для криптовалюты на Bybit. MOEX pro и CRYPTO pro от 27 900 ₽ — торговля в авторежиме, бэктест и тестовый режим через T‑Bank.',
      keywords:
        'купить торгового робота, торговые роботы для московской биржи, торговый робот MOEX, робот для ОФЗ, торговый робот для облигаций россии, торговый робот для акций, купить робота для торговли, торговый робот недорого, торговый робот для криптовалюты, торговый робот Bybit, брокер T-Bank торговые роботы, торговля в авторежиме, автоматическая стратегия MOEX, торговый робот скальпер на заказ, какие бывают торговые роботы, алгоритмическая торговля, облигации робот, купить торговый робот для биржи',
    },
    nav: {
      services: 'Услуги',
      products: 'Роботы',
      about: 'Как мы работаем',
      faq: 'FAQ',
      contact: 'Контакты',
      cta: 'Оставить заявку',
      menuOpen: 'Открыть меню',
      menuClose: 'Закрыть меню',
      telegram: 'Telegram-канал',
    },
    hero: {
      badge: 'Алгоритмическая торговля',
      titleLine1: 'Торговые роботы',
      titleLine2: 'для финансовых рынков',
      tagline: 'Алгоритмы, дисциплина, контроль риска',
      subtitle: 'MOEX и Криптовалюты — готовые роботы и разработка на заказ',
      ctaPrimary: 'Обсудить проект',
      ctaSecondary: 'Готовые решения',
    },
    markets: {
      title: 'Рынки',
      subtitle: 'Работаем с ведущими биржами и торговыми площадками',
      partnersLabel: 'Биржи и брокеры',
      items: [
        {
          title: 'MOEX',
          description:
            'Торговые роботы для Московской биржи: акции РФ, облигации ОФЗ и корпоративные, фьючерсы, валюта и металлы. Подключение через брокера T‑Bank',
        },
        {
          title: 'Crypto',
          description:
            'Торговый робот для криптовалюты на Bybit — спот и фьючерсы. Binance, OKX и другие биржи — при разработке на заказ',
        },
        {
          title: 'International',
          description: 'Forex, US/EU equities через MetaTrader и API-брокеров — при разработке на заказ',
        },
      ],
    },
    services: {
      title: 'Что мы делаем',
      subtitle: 'Полный цикл: от идеи до запуска и поддержки',
      items: [
        {
          title: 'Готовые роботы',
          description: 'Протестированные решения: бэктест на истории и проверка на реальных котировках перед боевым запуском',
        },
        {
          title: 'Разработка на заказ',
          description: 'Робот под вашу стратегию и инфраструктуру — с гибкими настройками, бэктестом и тестовым режимом',
        },
        {
          title: 'Поддержка и доработка',
          description: 'Сопровождение после запуска: техническая поддержка, обновления и доработки под изменения рынка и ваши задачи',
        },
      ],
    },
    products: {
      title: 'Готовые решения',
      subtitle:
        'Купить торгового робота для MOEX и Bybit: акции, облигации ОФЗ, криптовалюта — от 27 900 ₽. Бэктест и тестовый режим перед боевым запуском',
      watchVideo: 'Смотреть видео',
      order: 'Заказать',
      strategy: 'Стратегии',
      price: 'Стоимость',
    },
    purchase: {
      title: 'Что входит в покупку',
      subtitle: 'После оплаты отправляем робота на email',
      subtitleItems: 'программу, инструкцию и лицензионный ключ',
      includedTitle: 'Вы получаете',
      includedItems: [
        'Программу-робота для установки на компьютер (Windows)',
        'Инструкцию по установке, настройке и подключению к брокеру или бирже',
        'Лицензионный ключ: одна лицензия — один компьютер',
        'Веб-дашборд: при запуске робота автоматически открывается панель в браузере',
        'Тестовый режим на реальных котировках перед боевой торговлей',
        'Бесплатная техническая поддержка — 30 дней после покупки',
      ],
      supportNote:
        'После 30 дней поддержка и обновления обсуждаются отдельно. Для роботов на заказ условия согласуются индивидуально.',
      trustTitle: 'Ваши деньги — на вашем счёте',
      trustItems: [
        'Робот не управляет вашими средствами и не принимает депозиты',
        'Счёт остаётся у брокера (T‑Bank) или на бирже (Bybit) — вы сами подключаете API или терминал',
        'Вы контролируете риски, объём позиций и можете остановить робота в любой момент',
      ],
      previewTitle: 'Скриншоты дашборда',
      previewNote: 'Веб-панель при запуске робота — MOEX pro и CRYPTO pro.',
      previewOpen: 'Нажмите на скрин — откроется в полном размере',
    },
    steps: {
      title: 'Как мы работаем',
      subtitle: 'От первого созвона до передачи робота и инструкции по запуску',
      items: [
        { title: 'Анализ', description: 'Изучаем стратегию, брокера или биржу и технические требования к роботу' },
        { title: 'Разработка', description: 'Разрабатываем робота, проводим бэктест и встраиваем гибкие настройки' },
        { title: 'Тестирование', description: 'Проверяем на истории и в тестовом режиме на реальных котировках' },
        { title: 'Запуск', description: 'Передаём робота, инструкцию по подключению к брокеру или бирже и настройке параметров' },
      ],
    },
    benefits: {
      title: 'Почему Auroboros Soft',
      items: [
        { title: 'Бэктест', description: 'Тестирование на истории и в тестовом режиме перед запуском' },
        { title: 'Риск-менеджмент', description: 'Стоп-лоссы, лимиты и контроль просадки' },
        { title: 'Поддержка', description: '30 дней бесплатной помощи после покупки готового робота' },
        { title: 'NDA', description: 'Конфиденциальность вашей стратегии' },
      ],
    },
    faq: {
      title: 'Частые вопросы',
    },
    contact: {
      title: 'Связаться с нами',
      subtitle: 'Оставьте заявку — ответим в течение 24 часов',
      name: 'Имя',
      email: 'Email',
      phone: 'Телефон',
      optional: 'необязательно',
      type: 'Тип заявки',
      typeReady: 'Готовый робот',
      typeCustom: 'Разработка на заказ',
      typeConsult: 'Консультация',
      product: 'Робот',
      market: 'Биржа / рынок',
      marketOptions: ['MOEX', 'Crypto', 'International', 'Другое'],
      message: 'Сообщение',
      messagePlaceholder: 'Например: интересует робот MOEX pro, прошу связаться',
      consent: 'Согласен с',
      privacyLink: 'политикой конфиденциальности',
      consentAnd: 'и',
      termsLink: 'пользовательским соглашением',
      submit: 'Отправить заявку',
      success: 'Заявка отправлена! Свяжемся с вами в ближайшее время.',
      error: 'Ошибка отправки. Попробуйте позже или напишите на email.',
      captchaRequired: 'Отметьте галочку «Я не робот»',
      orderTitle: 'Заказ робота',
    },
    footer: {
      tagline: 'Разработка торговых роботов для финансовых рынков',
      privacy: 'Конфиденциальность',
      terms: 'Соглашение',
      nda: 'Соглашение о нераспространении',
      links: 'Ссылки',
      contactHeading: 'Контакты',
      social: 'Соцсети',
      socialSoon: 'скоро',
      disclaimer:
        'Торговля на финансовых рынках связана с риском потери капитала. Робот не гарантирует доходность. Информация на сайте — не совет, что покупать или продавать.',
      rights: 'Все права защищены',
    },
    cookies: {
      ariaLabel: 'Уведомление о cookie',
      title: 'Мы используем cookie',
      description:
        'Сайт использует cookie и аналогичные технологии для работы, статистики и рекламы. Нажимая «Принять все», вы соглашаетесь с их использованием. Подробнее — в',
      privacyLink: 'политике конфиденциальности',
      disclaimer: 'Если вы не согласны — пожалуйста, прекратите использование сайта.',
      acceptAll: 'Принять все',
    },
    legal: {
      privacyTitle: 'Политика конфиденциальности',
      termsTitle: 'Пользовательское соглашение',
      ndaTitle: 'Соглашение о нераспространении',
      backHome: 'На главную',
    },
  },
  en: {
    meta: {
      title: 'Buy Trading Bot for MOEX & Bybit — from 27,900 RUB | Auroboros Soft',
      description:
        'Buy a trading bot for Moscow Exchange: Russian equities and OFZ bonds. Crypto bot for Bybit. MOEX pro and CRYPTO pro from 27,900 RUB — automated trading, backtesting, and test mode via T-Bank.',
      keywords:
        'buy trading bot, MOEX trading bot, OFZ bonds bot, crypto trading bot, Bybit, T-Bank, automated trading',
    },
    nav: {
      services: 'Services',
      products: 'Bots',
      about: 'How we work',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Get in touch',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      telegram: 'Telegram channel',
    },
    hero: {
      badge: 'Algorithmic Trading',
      titleLine1: 'Trading bots',
      titleLine2: 'for financial markets',
      tagline: 'Algorithms, discipline, risk control',
      subtitle: 'MOEX and crypto — ready-made bots and custom development',
      ctaPrimary: 'Discuss project',
      ctaSecondary: 'Ready-made solutions',
    },
    markets: {
      title: 'Markets',
      subtitle: 'We work with leading exchanges and trading venues',
      partnersLabel: 'Exchanges & brokers',
      items: [
        {
          title: 'MOEX',
          description: 'OFZ and corporate bonds, equities, futures, FX, and metals on Moscow Exchange',
        },
        {
          title: 'Crypto',
          description: 'Spot and futures on Bybit; Binance, OKX, and other exchanges — available via custom development',
        },
        {
          title: 'International',
          description: 'Forex, US/EU equities via MetaTrader and API brokers — available via custom development',
        },
      ],
    },
    services: {
      title: 'What we do',
      subtitle: 'Full cycle: from idea to launch and support',
      items: [
        {
          title: 'Ready-made bots',
          description: 'Proven solutions: historical backtesting and validation on live market data before going live',
        },
        {
          title: 'Custom development',
          description: 'A bot tailored to your strategy and infrastructure — with flexible settings, backtesting, and test mode',
        },
        {
          title: 'Support & updates',
          description: 'Post-launch support: technical help, updates, and improvements for market changes and your needs',
        },
      ],
    },
    products: {
      title: 'Ready-made solutions',
      subtitle:
        'Buy a trading bot for MOEX and Bybit: Russian equities, OFZ bonds, crypto — from 27,900 RUB. Backtesting and test mode before live launch',
      watchVideo: 'Watch video',
      order: 'Order',
      strategy: 'Strategies',
      price: 'Price',
    },
    purchase: {
      title: 'What\'s included',
      subtitle: 'After payment we email the bot to you',
      subtitleItems: 'the app, setup guide, and license key',
      includedTitle: 'You receive',
      includedItems: [
        'The trading bot app for installation on your computer (Windows)',
        'Setup guide: install, configure, and connect to your broker or exchange',
        'License key: one license — one computer',
        'Web dashboard: launches automatically in your browser when you start the bot',
        'Test mode on live market data before live trading',
        'Free technical support for 30 days after purchase',
      ],
      supportNote:
        'After 30 days, support and updates are agreed separately. Custom bots have individual terms.',
      trustTitle: 'Your funds stay in your account',
      trustItems: [
        'The bot does not manage your money or accept deposits',
        'Your account stays with your broker (T-Bank) or exchange (Bybit) — you connect API or terminal yourself',
        'You control risk, position size, and can stop the bot at any time',
      ],
      previewTitle: 'Dashboard screenshots',
      previewNote: 'Web panel on bot launch — MOEX pro and CRYPTO pro.',
      previewOpen: 'Click a screenshot to open full size',
    },
    steps: {
      title: 'How we work',
      subtitle: 'From the first call to delivering the bot and launch instructions',
      items: [
        { title: 'Analysis', description: 'We review your strategy, broker or exchange, and technical requirements for the bot' },
        { title: 'Development', description: 'We build the bot, run backtests, and integrate flexible settings' },
        { title: 'Testing', description: 'Historical backtesting and test mode on live market data' },
        { title: 'Launch', description: 'We deliver the bot with instructions for connecting to your broker or exchange and configuring the settings' },
      ],
    },
    benefits: {
      title: 'Why Auroboros Soft',
      items: [
        { title: 'Backtesting', description: 'Historical and test-mode validation before launch' },
        { title: 'Risk management', description: 'Stop-losses, limits, and drawdown control' },
        { title: 'Support', description: '30 days of free help after purchasing a ready-made bot' },
        { title: 'NDA', description: 'Confidentiality of your strategy' },
      ],
    },
    faq: {
      title: 'FAQ',
    },
    contact: {
      title: 'Contact us',
      subtitle: 'Submit a request — we respond within 24 hours',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      optional: 'optional',
      type: 'Request type',
      typeReady: 'Ready-made bot',
      typeCustom: 'Custom development',
      typeConsult: 'Consultation',
      product: 'Bot',
      market: 'Exchange / market',
      marketOptions: ['MOEX', 'Crypto', 'International', 'Other'],
      message: 'Message',
      messagePlaceholder: 'e.g. I am interested in MOEX pro, please contact me',
      consent: 'I agree to the',
      privacyLink: 'Privacy Policy',
      consentAnd: 'and',
      termsLink: 'Terms of Service',
      submit: 'Submit request',
      success: 'Request sent! We will contact you shortly.',
      error: 'Send failed. Please try again or email us directly.',
      captchaRequired: 'Please check the "I\'m not a robot" box',
      orderTitle: 'Order bot',
    },
    footer: {
      tagline: 'Trading bot development for financial markets',
      privacy: 'Privacy',
      terms: 'Terms',
      nda: 'Non-Disclosure Agreement',
      links: 'Links',
      contactHeading: 'Contact',
      social: 'Social',
      socialSoon: 'coming soon',
      disclaimer:
        'Trading financial markets involves the risk of losing capital. The bot does not guarantee returns. Information on this site is not advice on what to buy or sell.',
      rights: 'All rights reserved',
    },
    cookies: {
      ariaLabel: 'Cookie notice',
      title: 'We use cookies',
      description:
        'This site uses cookies and similar technologies for functionality, statistics, and advertising. By clicking "Accept all", you agree to their use. Learn more in our',
      privacyLink: 'Privacy Policy',
      disclaimer: 'If you do not agree, please stop using this website.',
      acceptAll: 'Accept all',
    },
    legal: {
      privacyTitle: 'Privacy Policy',
      termsTitle: 'Terms of Service',
      ndaTitle: 'Non-Disclosure Agreement',
      backHome: 'Back to home',
    },
  },
} as const;

export type Translations = (typeof translations)['ru'];

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  return maybeLocale === 'en' ? 'en' : 'ru';
}

export function localePath(locale: Locale, path = ''): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${normalized === '/' ? '' : normalized}`;
}
