# Plan Auroboros Soft — лендинг

Статус проекта на **18 августа 2026**.  
Папка: `D:\Auroboros_Soft`  
**Live (временно):** https://auroboros-soft.vercel.app/ru/  
**Статус доступа из РФ:** 18.08.2026 — без VPN не открывался (белый экран в MAX, Яндекс.Браузер); с VPN работал. К вечеру того же дня на Vercel снова заработало — **наблюдаем**, но переезд всё равно в плане.

---

## ⚠️ Переезд: домен + хостинг для России (приоритет)

> **Проблема:** `*.vercel.app` и IP Vercel **могут блокироваться в РФ** (Роскомнадзор / провайдер).  
> Симптомы: превью в MAX есть, по клику — белый экран; Яндекс.Браузер не открывает; **с VPN — работает**.  
> Это **не баг сайта** — код и деплой в порядке. Для клиентов из России нужен **свой домен и хостинг в РФ**.

### Сейчас

- [x] Сайт на Vercel — работает для разработки и части пользователей
- [ ] **Мониторинг 18–19.08.2026** — проверять без VPN: телефон, MAX, Яндекс.Браузер, Chrome
- [ ] Если снова пропадёт — не ждать, начинать переезд

### Целевая схема (рекомендуется)

| Этап | Действие |
|------|----------|
| 1 | Купить домен **`auroborossoft.ru`** (REG.RU, Beget, Timeweb и т.п.) |
| 2 | Статический хостинг **в России** (Beget / Timeweb / REG.RU) — заливка папки `dist/` после `npm run build` |
| 3 | Привязать домен к хостингу → сайт открывается **без VPN** |
| 4 | Обновить в коде и сервисах (см. чеклист ниже) |
| 5 | Vercel — оставить для тестов **или** отключить после переезда |

### Альтернативы (если не Beget/Timeweb)

- **Свой домен на Vercel** — иногда помогает; не гарантия для РФ. При блокировке: A‑запись `76.76.21.21` (Vercel не рекомендует, но у некоторых заработало).
- **VPS в РФ + прокси на Vercel** (Caddy) — ~150–300 ₽/мес, сложнее в настройке.

### Чеклист после смены домена

- [ ] `astro.config.mjs` → `site: 'https://auroborossoft.ru'`
- [ ] `public/robots.txt` → URL sitemap
- [ ] Google reCAPTCHA → добавить новый домен
- [ ] Formspree — при необходимости обновить allowed domains
- [ ] Яндекс.Метрика, Вебмастер — новый адрес сайта, переотправить sitemap
- [ ] Google Search Console — добавить новое свойство или сменить адрес
- [ ] `python scripts/generate-og-image.py` + redeploy (og:url в meta)
- [ ] Проверка: MAX, Telegram, Яндекс.Браузер, Chrome **без VPN** на телефоне

### Автодеплой на российский хостинг (опционально, позже)

- [ ] GitHub Action: `npm run build` → заливка `dist/` по FTP/SFTP на Beget/Timeweb  
  (можно настроить, когда выберете хостинг)

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

> См. раздел **«Переезд: домен + хостинг для России»** выше — это главная задача по инфраструктуре.

- [ ] Зарегистрировать **`auroborossoft.ru`**
- [ ] Перенести прод на **российский статический хостинг** (не только Vercel)
- [ ] Пройти чеклист после смены домена (reCAPTCHA, Метрика, Вебмастер, Search Console, `astro.config.mjs`)

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

1. **Наблюдать Vercel без VPN** (18–19.08) — телефон, MAX, Яндекс.Браузер
2. **Купить `auroborossoft.ru` + хостинг в РФ** — когда будете готовы к переезду (см. чеклист)
3. **Видео** в карточки роботов (если есть запись)
4. **Реквизиты ООО** — когда зарегистрируете
