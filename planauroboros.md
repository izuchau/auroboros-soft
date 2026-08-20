# Plan Auroboros Soft — лендинг

**Статус проекта:** 19 августа 2026  
**Папка:** `D:\Auroboros_Soft`  
**Live (временно):** https://auroboros-soft.vercel.app/ru/

---

## Deploy и инфраструктура

| Параметр | Значение |
|----------|----------|
| Прод | https://auroboros-soft.vercel.app/ru/ |
| Репозиторий | GitHub, ветка `main` |
| Деплой | Vercel — автодеплой при push в `main` |
| `site` / sitemap | `https://auroboros-soft.vercel.app` |

### Последние коммиты (19.08.2026)

| Коммит | Описание |
|--------|----------|
| `de227e6` | Новые секции лендинга (SocialInvite, LaunchSteps, VideoInvite, About) и обновление текстов |
| `2b1bc34` | SEO title — возврат к generic формулировке «Купить торговый робот…» |
| `e16f4c5` | Footer tagline — две строки под логотипом |
| `de0d501` | Products subtitle — отдельные строки MOEX / Bybit |
| `f02ba22` | Hero subtitle — одна строка «MOEX и Криптовалюты» |
| `6543bbc` | og:image из актуального logo.png |
| `1b53a3c` | reCAPTCHA — тёмная тема |
| `d6a2910` | SEO для запросов MOEX / Bybit |
| `c7a0883` | Яндекс.Метрика через cookie-баннер |

### Доступ из РФ

**18.08.2026:** без VPN не открывался (белый экран в MAX, Яндекс.Браузер); с VPN работал. К вечеру того же дня на Vercel снова заработало — **наблюдаем**, но переезд всё равно в плане.

> **Проблема:** `*.vercel.app` и IP Vercel **могут блокироваться в РФ** (Роскомнадзор / провайдер).  
> Симптомы: превью в MAX есть, по клику — белый экран; Яндекс.Браузер не открывает; **с VPN — работает**.  
> Это **не баг сайта** — код и деплой в порядке. Для клиентов из России нужен **свой домен и хостинг в РФ**.

### План переезда на `.ru` (не выполнен)

| Этап | Действие |
|------|----------|
| 1 | Купить домен **`auroborossoft.ru`** (REG.RU, Beget, Timeweb и т.п.) |
| 2 | Статический хостинг **в России** (Beget / Timeweb / REG.RU) — заливка `dist/` после `npm run build` |
| 3 | Привязать домен → сайт открывается **без VPN** |
| 4 | Обновить код и сервисы (чеклист ниже) |
| 5 | Vercel — оставить для тестов **или** отключить после переезда |

**Альтернативы:** свой домен на Vercel (не гарантия для РФ); VPS в РФ + прокси на Vercel (Caddy, ~150–300 ₽/мес).

**Чеклист после смены домена:**

- [ ] `astro.config.mjs` → `site: 'https://auroborossoft.ru'`
- [ ] `public/robots.txt` → URL sitemap
- [ ] Google reCAPTCHA → добавить новый домен
- [ ] Formspree — при необходимости обновить allowed domains
- [ ] Яндекс.Метрика, Вебмастер — новый адрес, переотправить sitemap
- [ ] Google Search Console — новое свойство или смена адреса
- [ ] `python scripts/generate-og-image.py` + redeploy
- [ ] Проверка: MAX, Telegram, Яндекс.Браузер, Chrome **без VPN**

**Автодеплой на российский хостинг (опционально):** GitHub Action `npm run build` → FTP/SFTP на Beget/Timeweb.

---

## SEO

### Meta и ключевые слова

- **Title (RU):** «Купить торговый робот для MOEX и Bybit — от 27 900 ₽ | Auroboros Soft» — generic формулировка без привязки к конкретным именам ботов в title
- **Description:** MOEX (акции, ОФЗ, облигации), Bybit (крипто), T-Bank, цена от 27 900 ₽
- **Keywords:** широкие запросы («купить торгового робота», «торговый робот MOEX», «торговый робот Bybit»…) **+ брендовые** `MOEX pro`, `CRYPTO pro`, `купить MOEX pro`, `купить CRYPTO pro` — для поиска по названию продуктов

### Подключённые сервисы

- [x] Schema.org: Organization, WebSite, **FAQ**, **Product** (MOEX pro, CRYPTO pro)
- [x] FAQ-секция с SEO-вопросами (цена, типы роботов, бесплатный робот)
- [x] **og:image** — из `logo.png` (`scripts/generate-og-image.py`)
- [x] Sitemap (`@astrojs/sitemap`)
- [x] **Яндекс.Вебмастер** — верификация + sitemap
- [x] **Google Search Console** — верификация + sitemap
- [x] **Яндекс.Метрика** (`111704399`) — после cookie-баннера
- [x] **GA4** (`G-5RY4R4N5WY`) — после cookie-баннера

---

## Секции лендинга (текущий порядок)

Файл: `src/components/templates/LandingPage.astro`

```
Hero → Markets → Services → SocialInvite → LaunchSteps → Products → Purchase → About → FAQ → VideoInvite → Contact
```

| # | Секция | Содержание |
|---|--------|------------|
| 1 | **Hero** | Заголовок, tagline, CTA |
| 2 | **Markets** | MOEX, Crypto, International |
| 3 | **Services** | Готовые роботы, разработка, поддержка |
| 4 | **SocialInvite** | Приглашение в **Telegram** и **MAX** — новости, поддержка, обновления |
| 5 | **LaunchSteps** | **3 шага:** открыть счёт (T-Bank / Bybit) → установить бота → тест → боевая торговля |
| 6 | **Products** | Карточки MOEX pro и CRYPTO pro |
| 7 | **Purchase** | Что входит в покупку, превью дашборда |
| 8 | **About** | «Почему Auroboros Soft» — преимущества (бэктест, риск-менеджмент, поддержка, NDA) |
| 9 | **FAQ** | Частые вопросы |
| 10 | **VideoInvite** | Приглашение на **YouTube** и **VK Видео** |
| 11 | **Contact** | Форма заявки (Formspree + reCAPTCHA) |

---

## Решения по текстам (copy)

| Место | Решение |
|-------|---------|
| **Hero subtitle** | Одна строка: «MOEX и Криптовалюты — готовые роботы и разработка на заказ» |
| **Products subtitle** | Две строки: «Купить торгового робота для MOEX: Акции, Облигации» / «Купить торгового робота для Bybit: Спот, Фьючерсы» |
| **Footer tagline** | Две строки под логотипом: «Разработка торговых роботов» / «для финансовых рынков» |
| **About (workProcess)** | Subtitle: «От первой заявки до передачи робота и инструкции по запуску» |
| **Имена ботов** | **Не упоминаются** в generic-блоках (SocialInvite, LaunchSteps, Hero, Services) — только на **карточках продуктов**, в **FAQ** и **SEO keywords** |
| **Footer disclaimer** | Полный юридический дисклеймер на всю ширину (не ИИР, риски, отказ от ответственности) |

---

## Что сделано ранее (накопленный функционал)

### Технологии

- [x] Astro 7 + Tailwind CSS 4 + TypeScript
- [x] Двуязычность: `/ru/` и `/en/`
- [x] Тёмная тема (cyan / `#22d3ee`)
- [x] Логотип **AUROBOROS** + «infinity in the universe» (`public/logo.png`)
- [x] Живой фон, шапка с рыночными данными, burger-меню на мобиле

### Контент и UI

- [x] **Partner marquee** — биржи и брокеры (MOEX, QUIK, T-Bank, Bybit, Binance и др.)
- [x] **Соцсети** в footer: Telegram, MAX, YouTube, TikTok, Instagram, VK Video
- [x] **NDA-страница** (`/ru/nda`, `/en/nda`)
- [x] Скриншоты дашборда MOEX pro / CRYPTO pro
- [x] **Purchase hovers** — интерактивные превью при наведении
- [x] **og:image** генерируется из logo (`scripts/generate-og-image.py`)

### Продукты

- [x] **MOEX pro** — 27 900 ₽ (акции РФ, ОФЗ, T-Bank, уведомления MAX)
- [x] **CRYPTO pro** — 27 900 ₽ (Bybit спот/фьючерсы, Telegram)
- [x] Карточки + модалка «Заказать»

### Форма заявки

- [x] Formspree → auroboros.soft@gmail.com
- [x] AJAX-отправка, honeypot, согласие с privacy/terms
- [x] **Google reCAPTCHA v2** — тёмная тема
- [x] Formshield **отключён** (заявки уходили в Spam)

### Юридические страницы

- [x] `/ru/privacy`, `/en/privacy`
- [x] `/ru/terms`, `/en/terms`

---

## Не сделано / только локально

| Задача | Статус |
|--------|--------|
| **`public/branding/`** — обложки YouTube / VK | Файлы есть локально (`youtube-banner.png`, `vk-video-cover.png`), пользователь переделает позже |
| **`scripts/generate-social-banners.py`** | Создан, **не закоммичен** |
| **Домен `.ru` + хостинг в РФ** | Не зарегистрирован, переезд pending |
| **Видеообзор** в карточках роботов | Ждём материалы пользователя |
| **Отзывы клиентов** | Только реальные, после продаж |
| **ООО «Ауроборос»** | Сейчас ИП; реквизиты — после регистрации |
| **Formspree «Restrict to Domain»** | Платная функция — сейчас CAPTCHA + honeypot |

**Не делаем:** фейковые отзывы, выдуманная доходность.

---

## Переменные окружения (Vercel / .env)

| Переменная | Значение / назначение |
|------------|----------------------|
| `PUBLIC_FORMSPREE_ID` | `mwlevlbw` |
| `PUBLIC_RECAPTCHA_SITE_KEY` | Site Key reCAPTCHA v2 (тёмная тема) |
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
  components/
    templates/LandingPage.astro   порядок секций
    sections/                     Hero, Markets, Services, SocialInvite, LaunchSteps, …
    forms/ContactForm.astro       Formspree + reCAPTCHA
    layout/                       Header, Footer
  data/                           products.ts, faq.ts, partners.ts, social.ts
  i18n/ui.ts                      переводы RU/EN, все тексты лендинга
  lib/seo.ts                      Schema.org, og:image path
  layouts/BaseLayout.astro
  pages/                          ru/, en/
public/
  logo.png                        логотип на сайте
  og-image.png                    превью при шаринге (генерируется из logo.png)
  branding/                       обложки соцсетей (локально, не в git)
scripts/
  generate-og-image.py
  generate-social-banners.py        не закоммичен
.env                              ключи (не коммитить)
```

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

## Следующие шаги

1. **Наблюдать Vercel без VPN** (18–19.08) — телефон, MAX, Яндекс.Браузер
2. **Купить `auroborossoft.ru` + хостинг в РФ** — когда будете готовы (см. чеклист переезда)
3. **Обложки соцсетей** — переделать `public/branding/` и закоммитить скрипт генерации
4. **Видео** в карточки роботов — когда будет запись
5. **Реквизиты ООО** — когда зарегистрируете
