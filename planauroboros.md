# Plan Auroboros Soft — лендинг

Статус проекта на **18 августа 2026**.  
Папка: `D:\Auroboros_Soft`  
**Live:** https://auroboros-soft.vercel.app/ru/

---

## Цель

Лендинг для продажи торговых роботов (MOEX, крипто, международные биржи).  
Языки: **RU / EN**.  
Заявки на email через **Formspree**.

---

## Что уже сделано

### Технологии и деплой

- [x] Astro 7 + Tailwind CSS 4 + TypeScript
- [x] Двуязычность: `/ru/` и `/en/`
- [x] GitHub → Vercel (автодеплой из `main`)
- [x] `site` и sitemap: `https://auroboros-soft.vercel.app`
- [x] Sitemap (`@astrojs/sitemap`)
- [x] Schema.org: Organization, WebSite, FAQ, Product (MOEX pro, CRYPTO pro)

### Дизайн и контент

- [x] Тёмная тема (cyan / `#22d3ee`)
- [x] Логотип **AUROBOROS** + «infinity in the universe» (`public/logo.png`)
- [x] Живой фон, шапка с рыночными данными, burger-меню на мобиле
- [x] Секции: Hero, рынки, услуги, роботы, покупка, этапы, преимущества, FAQ, контакты
- [x] Marquee бирж и брокеров (MOEX, QUIK, T-Bank, Bybit, Binance и др.)
- [x] Соцсети: Telegram, MAX, YouTube, TikTok, Instagram, VK Video
- [x] NDA-страница (`/ru/nda`, `/en/nda`)
- [x] Скриншоты дашборда MOEX pro / CRYPTO pro

### Продукты

- [x] **MOEX pro** — 27 900 ₽ (акции РФ, ОФЗ, T-Bank, уведомления MAX)
- [x] **CRYPTO pro** — 27 900 ₽ (Bybit спот/фьючерсы, Telegram)
- [x] Карточки + модалка «Заказать»

### Форма заявки

- [x] Formspree ID: `mwlevlbw` → auroboros.soft@gmail.com
- [x] AJAX-отправка, honeypot, согласие с privacy/terms
- [x] **Google reCAPTCHA v2** (тёмная тема, галочка в форме)
- [x] Formshield **отключён** (заявки уходили в Spam)

### SEO и аналитика

- [x] Meta title / description / keywords (MOEX, ОФЗ, Bybit, T-Bank)
- [x] FAQ с SEO-вопросами (цена, типы роботов, бесплатный робот)
- [x] **og:image** — из актуального `logo.png` (`scripts/generate-og-image.py`)
- [x] Яндекс.Вебмастер (верификация + sitemap)
- [x] Google Search Console (верификация + sitemap)
- [x] GA4 (`G-5RY4R4N5WY`) — после cookie-баннера
- [x] Яндекс.Метрика (`111704399`) — после cookie-баннера

### Юридические страницы

- [x] `/ru/privacy`, `/en/privacy`
- [x] `/ru/terms`, `/en/terms`
- [x] Дисклеймер о рисках в footer

---

## Не сделано / на потом

### Контент (ваши материалы)

- [ ] **Видеообзор** роботов → `products.ts` (YouTube / VK embed)
- [ ] **Отзывы клиентов** — только реальные, после продаж

### Юрлицо и оплата

- [ ] ООО «Ауроборос» (сейчас ИП; реквизиты на сайт — после регистрации)
- [ ] ИНН / ОГРН в footer
- [ ] Отдельный блок способов оплаты (счёт, СБП — частично в FAQ)

### Домен и инфраструктура

- [ ] Зарегистрировать свой домен (например `auroborossoft.ru`)
- [ ] После покупки: Vercel → Custom Domain, обновить `astro.config.mjs`, `robots.txt`, reCAPTCHA domains, Метрика, Вебмастер, Search Console

### Опционально

- [ ] Переобход главной в Яндекс.Вебмастере (ускоряет FAQ-сниппеты, не обязательно)
- [ ] Formspree «Restrict to Domain» (платная функция — сейчас CAPTCHA + honeypot)
- [ ] Блог / база знаний
- [ ] Юридические тексты — согласовать с юристом

**Не делаем:** фейковые отзывы, выдуманная доходность.

---

## Полезные команды

```bash
cd D:\Auroboros_Soft

# Локально
npm run dev
# → http://localhost:4321/ru/

# Сборка
npm run build

# Пересобрать og:image после смены logo.png
python scripts/generate-og-image.py
```

---

## Переменные окружения (Vercel / .env)

| Переменная | Назначение |
|------------|------------|
| `PUBLIC_FORMSPREE_ID` | `mwlevlbw` |
| `PUBLIC_RECAPTCHA_SITE_KEY` | Site Key reCAPTCHA v2 |
| `PUBLIC_GA_MEASUREMENT_ID` | `G-5RY4R4N5WY` |
| `PUBLIC_YANDEX_METRIKA_ID` | `111704399` |

Secret Key reCAPTCHA — только в Formspree → Settings → CAPTCHA → Custom reCAPTCHA Key.

---

## Formspree — текущие настройки

| Параметр | Значение |
|----------|----------|
| Form ID | `mwlevlbw` |
| Email (Workflow) | auroboros.soft@gmail.com |
| Formshield | **Disabled** |
| CAPTCHA | **Google reCAPTCHA v2** (Custom Key в Formspree) |

---

## Структура проекта

```
src/
  components/     UI, секции, формы
  data/           products.ts, faq.ts, partners.ts, social.ts
  i18n/           переводы RU/EN
  lib/seo.ts      Schema.org, og:image path
  layouts/        BaseLayout
  pages/          ru/, en/
public/
  logo.png        логотип на сайте
  og-image.png    превью при шаринге (генерируется из logo.png)
scripts/
  generate-og-image.py
.env              ключи (не коммитить)
```

---

## Следующий шаг

1. **Видео** в карточки роботов (если есть запись)
2. **Свой домен** — когда купите
3. **Реквизиты ООО** — когда зарегистрируете
