import type { Locale } from '../types';

const translations = {
  ru: {
    meta: {
      title:
        'Купить торгового робота для торговли на Московской бирже Акциями и ОФЗ. Торговые боты для фондового и криптовалютного рынка, биржи.',
      description:
        'Купить торгового робота для Московской биржи: акции, ОФЗ и облигации РФ. Торговый робот для криптовалюты на Bybit. MOEX pro и CRYPTO pro от 27 900 ₽ — торговля в авторежиме, бэктест и тестовый режим через T‑Bank.',
      keywords:
        'купить торгового робота, торговые роботы для московской биржи, торговый робот MOEX, робот для ОФЗ, торговый робот для облигаций россии, торговый робот для акций, купить робота для торговли, торговый робот недорого, торговый робот для криптовалюты, торговый робот Bybit, брокер T-Bank торговые роботы, торговля в авторежиме, автоматическая стратегия MOEX, торговый робот скальпер на заказ, какие бывают торговые роботы, алгоритмическая торговля, облигации робот, купить торговый робот для биржи, MOEX pro, CRYPTO pro, купить MOEX pro, купить CRYPTO pro, торговый робот MOEX pro',
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
      subtitleLines: [
        'Купить торгового робота для MOEX: Акции, Облигации',
        'Bybit: Криптовалюта',
      ],
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
      subtitle: 'От первой заявки до передачи робота и инструкции по запуску',
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
    launchSteps: {
      title: 'Подключение и запуск: 3 шага',
      subtitle: 'От открытия счёта до боевой торговли',
      cta: 'Оставить заявку',
      items: [
        {
          title: 'Откройте счёт',
          description:
            'Откройте счёт в T‑Bank для торговли на Московской бирже и счёт на Bybit для крипторынка.',
        },
        {
          title: 'Установите бота',
          description: 'Получите робота на email и установите по инструкции на компьютер.',
        },
        {
          title: 'Запустите робота',
          description:
            'Сначала тестовый режим на реальных котировках, затем боевая торговля с вашими настройками.',
        },
      ],
    },
    socialInvite: {
      title: 'Будьте в курсе: новости и поддержка',
      subtitle: 'Подписывайтесь — публикуем обновления роботов, отвечаем на вопросы и помогаем с первыми шагами',
      telegramHeadline: 'Загляните в Telegram-канал',
      telegramDescription:
        'Результаты торговли, обновления, ответы на вопросы и помощь с запуском.',
      telegramCta: 'Перейти в Telegram',
      maxHeadline: 'Присоединяйтесь в MAX',
      maxDescription: 'Новости, анонсы и поддержка — дублируем важное в канале MAX.',
      maxCta: 'Перейти в MAX',
    },
    faq: {
      title: 'Частые вопросы',
    },
    videoInvite: {
      title: 'Смотрите видео и обзоры',
      subtitle:
        'Демонстрации платформы, разборы функций и ответы на частые вопросы — в наших видеоканалах',
      youtubeHeadline: 'Обзоры и демонстрации на YouTube',
      youtubeDescription:
        'Записи с разбором интерфейса, настройки роботов и практические советы по запуску.',
      youtubeCta: 'Смотреть на YouTube',
      vkvideoHeadline: 'Видео на VK Видео',
      vkvideoDescription:
        'Те же материалы на VK Видео — удобно смотреть без VPN и делиться ссылкой.',
      vkvideoCta: 'Смотреть VK Видео',
    },
    contact: {
      title: 'Связаться с нами',
      subtitle: 'Оставьте заявку — ответим в течение 24 часов',
      name: 'Имя',
      email: 'Email',
      phone: 'Телефон',
      optional: 'необязательно',
      phonePlaceholder: '+7 (999) 123-45-67',
      phoneInvalid: 'Введите корректный номер: +7, 8 или 10 цифр для РФ',
      notRobot: 'Я не робот',
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
      taglineLines: ['Разработка торговых роботов', 'для финансовых рынков'],
      privacy: 'Конфиденциальность',
      terms: 'Соглашение',
      nda: 'Соглашение о нераспространении',
      links: 'Ссылки',
      contactHeading: 'Контакты',
      social: 'Соцсети',
      socialSoon: 'скоро',
      disclaimer: {
        title: 'Важная информация, дисклеймер, отказ от ответственности.',
        intro:
          'Вся информация, представленная на данном сайте, и предлагаемые услуги, товары носят исключительно информационный характер и не являются:',
        items: [
          'Индивидуальной инвестиционной рекомендацией (ИИР) в соответствии с Федеральным законом от 22.04.1996 N 39-ФЗ «О рынке ценных бумаг».',
          'Предложением или побуждением к совершению каких-либо действий, сделок с ценными бумагами или иными финансовыми инструментами.',
          'Гарантией получения прибыли или избежания убытков.',
        ],
        paragraphs: [
          'Решения об инвестициях всегда должны приниматься инвестором самостоятельно, на основе его собственного анализа и оценки рисков. Исполнитель услуг не несет ответственности за результаты инвестиционных решений, принятых на основе информации, представленной в данной статье, в процессе консультации, в результате получения услуги. Рекомендуется обращаться за консультацией к лицензированному финансовому советнику, имеющему квалификационный аттестат в соответствии с законодательством РФ.',
          'Торговля на финансовых рынках связана с риском потери части или всего капитала. Роботы не гарантируют доходность, прибыль в прошлом не гарантирует прибыль в будущем. Информация на сайте — не совет, что покупать или продавать или какие действия предпринимать.',
        ],
      },
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
      title:
        'Buy a trading bot for Moscow Exchange stocks and OFZ. Trading bots for stock and crypto markets and exchanges.',
      description:
        'Buy a trading bot for Moscow Exchange: Russian equities and OFZ bonds. Crypto bot for Bybit. MOEX pro and CRYPTO pro from 27,900 RUB — automated trading, backtesting, and test mode via T-Bank.',
      keywords:
        'buy trading bot, MOEX trading bot, OFZ bonds bot, crypto trading bot, Bybit, T-Bank, automated trading, MOEX pro, CRYPTO pro, buy MOEX pro',
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
      subtitleLines: [
        'Buy a trading bot for MOEX: Equities, Bonds',
        'Bybit: Cryptocurrency',
      ],
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
      subtitle: 'From first request to bot delivery and launch instructions',
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
    launchSteps: {
      title: 'Connect and launch: 3 steps',
      subtitle: 'From broker accounts to live trading',
      cta: 'Get in touch',
      items: [
        {
          title: 'Open accounts',
          description:
            'Open a T-Bank account for MOEX trading and a Bybit account for crypto markets.',
        },
        {
          title: 'Install the bot',
          description: 'Receive the bot by email and install it on your computer using the guide.',
        },
        {
          title: 'Launch the bot',
          description:
            'Start in test mode on live market data, then switch to live trading with your settings.',
        },
      ],
    },
    socialInvite: {
      title: 'Stay in the loop: news and support',
      subtitle: 'Subscribe for bot updates, Q&A, and help getting started',
      telegramHeadline: 'Visit our Telegram channel',
      telegramDescription:
        'Trading results, updates, Q&A, and launch support.',
      telegramCta: 'Join Telegram',
      maxHeadline: 'Join us on MAX',
      maxDescription: 'News, announcements, and support — we mirror important updates on MAX.',
      maxCta: 'Join MAX',
    },
    faq: {
      title: 'FAQ',
    },
    videoInvite: {
      title: 'Watch our videos and reviews',
      subtitle:
        'Platform demos, feature walkthroughs, and answers to common questions — on our video channels',
      youtubeHeadline: 'Reviews and demos on YouTube',
      youtubeDescription:
        'Walkthroughs of the interface, bot setup, and practical tips for getting started.',
      youtubeCta: 'Watch on YouTube',
      vkvideoHeadline: 'Videos on VK Video',
      vkvideoDescription:
        'The same content on VK Video — easy to watch and share with a single link.',
      vkvideoCta: 'Watch on VK Video',
    },
    contact: {
      title: 'Contact us',
      subtitle: 'Submit a request — we respond within 24 hours',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      optional: 'optional',
      phonePlaceholder: '+7 (999) 123-45-67',
      phoneInvalid: 'Enter a valid phone number: +7, 8, or 10 digits for RU',
      notRobot: "I'm not a robot",
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
      taglineLines: ['Trading bot development', 'for financial markets'],
      privacy: 'Privacy',
      terms: 'Terms',
      nda: 'Non-Disclosure Agreement',
      links: 'Links',
      contactHeading: 'Contact',
      social: 'Social',
      socialSoon: 'coming soon',
      disclaimer: {
        title: 'Important Information, Disclaimer, and Limitation of Liability',
        intro:
          'All information presented on this website, and the services and products offered, are provided for informational purposes only and do not constitute:',
        items: [
          'Individual investment recommendations (IIR) within the meaning of Federal Law No. 39-FZ of 22 April 1996 "On the Securities Market".',
          'An offer or solicitation to perform any actions or transactions involving securities or other financial instruments.',
          'A guarantee of profit or avoidance of losses.',
        ],
        paragraphs: [
          'Investment decisions should always be made independently by the investor based on their own analysis and risk assessment. The service provider is not liable for the results of investment decisions made based on information presented on this website, during consultations, or as a result of receiving services. We recommend consulting a licensed financial advisor holding the appropriate qualification certificate under applicable law.',
          'Trading in financial markets involves the risk of losing part or all of your capital. Trading bots do not guarantee returns; past performance does not guarantee future results. Information on this website is not advice on what to buy, sell, or otherwise do.',
        ],
      },
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
  const normalized = path ? (path.startsWith('/') ? path : `/${path}`) : '/';
  const withSlash = normalized === '/' ? '/' : normalized.replace(/\/?$/, '/');

  if (locale === 'ru') {
    return withSlash;
  }
  return withSlash === '/' ? '/en/' : `/en${withSlash}`;
}
