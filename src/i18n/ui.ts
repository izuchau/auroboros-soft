import type { Locale } from '../types';

const translations = {
  ru: {
    meta: {
      title: 'Auroboros Soft — торговые роботы для MOEX, крипто и международных бирж',
      description:
        'Разработка торговых роботов на заказ и готовые решения для MOEX, криптобирж и международных рынков. Алгоритмическая торговля с бэктестом и поддержкой.',
    },
    nav: {
      services: 'Услуги',
      products: 'Роботы',
      about: 'О нас',
      faq: 'FAQ',
      contact: 'Контакты',
      cta: 'Оставить заявку',
      menuOpen: 'Открыть меню',
      menuClose: 'Закрыть меню',
    },
    hero: {
      badge: 'Алгоритмическая торговля',
      titleLine1: 'Торговые роботы',
      titleLine2: 'для финансовых рынков',
      tagline: 'infinity in the universe',
      subtitle:
        'Автоматизация торговли на MOEX, криптобиржах и международных площадках. Готовые решения и разработка под вашу стратегию.',
      ctaPrimary: 'Обсудить проект',
      ctaSecondary: 'Готовые решения',
    },
    markets: {
      title: 'Рынки',
      subtitle: 'Работаем с ведущими биржами и торговыми площадками',
      items: [
        {
          title: 'MOEX',
          description: 'Акции, фьючерсы, валютный рынок Московской биржи',
        },
        {
          title: 'Crypto',
          description: 'Binance, Bybit, OKX и другие криптобиржи',
        },
        {
          title: 'International',
          description: 'Forex, US/EU equities через MetaTrader и API-брокеров',
        },
      ],
    },
    services: {
      title: 'Что мы делаем',
      subtitle: 'Полный цикл: от идеи до запуска и поддержки',
      items: [
        {
          title: 'Готовые роботы',
          description: 'Проверенные решения с бэктестом — запуск за несколько дней',
        },
        {
          title: 'Разработка на заказ',
          description: 'Робот под вашу стратегию, риск-профиль и инфраструктуру',
        },
        {
          title: 'Поддержка и доработка',
          description: 'Мониторинг, обновления, адаптация под изменения рынка',
        },
      ],
    },
    products: {
      title: 'Готовые решения',
      subtitle: 'Торговые роботы с демонстрацией работы',
      watchVideo: 'Смотреть видео',
      order: 'Заказать',
      strategy: 'Стратегия',
      price: 'Стоимость',
    },
    steps: {
      title: 'Как мы работаем',
      items: [
        { title: 'Анализ', description: 'Изучаем стратегию, рынок и технические требования' },
        { title: 'Разработка', description: 'Пишем робота, проводим бэктест и оптимизацию' },
        { title: 'Тестирование', description: 'Forward-test на демо-счёте перед запуском' },
        { title: 'Запуск', description: 'Деплой, настройка VPS и передача документации' },
      ],
    },
    benefits: {
      title: 'Почему Auroboros Soft',
      items: [
        { title: 'Бэктест', description: 'Тестирование на исторических данных перед запуском' },
        { title: 'Риск-менеджмент', description: 'Стоп-лоссы, лимиты и контроль просадки' },
        { title: 'Поддержка', description: 'Техническая помощь после запуска' },
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
      disclaimer:
        'Торговля на финансовых рынках сопряжена с риском потери капитала. Информация на сайте не является инвестиционной рекомендацией.',
      rights: 'Все права защищены',
    },
    legal: {
      privacyTitle: 'Политика конфиденциальности',
      termsTitle: 'Пользовательское соглашение',
      backHome: 'На главную',
    },
  },
  en: {
    meta: {
      title: 'Auroboros Soft — Trading Bots for MOEX, Crypto & Global Markets',
      description:
        'Custom trading bot development and ready-made solutions for MOEX, crypto exchanges, and international markets. Algorithmic trading with backtesting and support.',
    },
    nav: {
      services: 'Services',
      products: 'Bots',
      about: 'About',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Get in touch',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    hero: {
      badge: 'Algorithmic Trading',
      titleLine1: 'Trading bots',
      titleLine2: 'for financial markets',
      tagline: 'infinity in the universe',
      subtitle:
        'Automated trading on MOEX, crypto exchanges, and international markets. Ready-made solutions and custom development for your strategy.',
      ctaPrimary: 'Discuss project',
      ctaSecondary: 'Ready-made solutions',
    },
    markets: {
      title: 'Markets',
      subtitle: 'We work with leading exchanges and trading venues',
      items: [
        {
          title: 'MOEX',
          description: 'Equities, futures, and FX on Moscow Exchange',
        },
        {
          title: 'Crypto',
          description: 'Binance, Bybit, OKX, and other crypto exchanges',
        },
        {
          title: 'International',
          description: 'Forex, US/EU equities via MetaTrader and API brokers',
        },
      ],
    },
    services: {
      title: 'What we do',
      subtitle: 'Full cycle: from idea to launch and support',
      items: [
        {
          title: 'Ready-made bots',
          description: 'Proven solutions with backtesting — launch in days',
        },
        {
          title: 'Custom development',
          description: 'Bot tailored to your strategy, risk profile, and infrastructure',
        },
        {
          title: 'Support & updates',
          description: 'Monitoring, updates, and market adaptation',
        },
      ],
    },
    products: {
      title: 'Ready-made solutions',
      subtitle: 'Trading bots with demo videos',
      watchVideo: 'Watch video',
      order: 'Order',
      strategy: 'Strategy',
      price: 'Price',
    },
    steps: {
      title: 'How we work',
      items: [
        { title: 'Analysis', description: 'We study your strategy, market, and technical requirements' },
        { title: 'Development', description: 'Build the bot, run backtests and optimization' },
        { title: 'Testing', description: 'Forward-test on demo account before going live' },
        { title: 'Launch', description: 'Deploy, configure VPS, and hand over documentation' },
      ],
    },
    benefits: {
      title: 'Why Auroboros Soft',
      items: [
        { title: 'Backtesting', description: 'Historical data testing before launch' },
        { title: 'Risk management', description: 'Stop-losses, limits, and drawdown control' },
        { title: 'Support', description: 'Technical assistance after launch' },
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
      privacyLink: 'privacy policy',
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
      disclaimer:
        'Trading financial markets involves risk of capital loss. Information on this site is not investment advice.',
      rights: 'All rights reserved',
    },
    legal: {
      privacyTitle: 'Privacy Policy',
      termsTitle: 'Terms of Service',
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
