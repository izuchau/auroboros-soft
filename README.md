# Auroboros Soft — Landing

Лендинг для продажи торговых роботов (MOEX, крипто, международные биржи).

**Стек:** Astro 7 + Tailwind CSS 4 + TypeScript  
**Языки:** RU / EN

## Быстрый старт

```bash
npm install
cp .env.example .env
npm run dev
```

Сайт: http://localhost:4321/ru/

## Настройка формы (email)

1. Зарегистрируйтесь на [formspree.io](https://formspree.io)
2. Создайте форму и скопируйте ID
3. В `.env` укажите: `PUBLIC_FORMSPREE_ID=ваш_id`

## CAPTCHA в форме (без перехода на другую страницу)

Встроенная CAPTCHA Formspree **всегда открывает отдельную страницу** — для формы на сайте используем **reCAPTCHA v2** (галочка прямо в форме).

### 1. Google reCAPTCHA

1. [google.com/recaptcha/admin](https://www.google.com/recaptcha/admin) → **Create**
2. Тип: **Challenge (v2)** → **「I'm not a robot」 Checkbox**
3. Domains: `localhost`, `127.0.0.1`, ваш домен
4. Скопируйте **Site Key** и **Secret Key**

### 2. Сайт — `.env`

```
PUBLIC_RECAPTCHA_SITE_KEY=ваш_site_key
```

Перезапустите: `npm run dev`

### 3. Formspree

1. **Settings** → **CAPTCHA** → **Изменить настройки**
2. CAPTCHA **включена**
3. **Custom reCAPTCHA Key** → вставьте **Secret Key** (не Site Key!)
4. Save

Форма остаётся на сайте: галочка → Отправить → сообщение об успехе.

## Добавление / редактирование роботов

Файл: `src/data/products.ts`

```ts
{
  id: 'my-bot',
  name: { ru: 'Название', en: 'Name' },
  // ...
  video: {
    provider: 'youtube',  // или 'vk'
    embedId: 'VIDEO_ID',  // YouTube ID или полный VK embed URL
  },
}
```

### YouTube

Из ссылки `https://www.youtube.com/watch?v=dQw4w9WgXcQ` возьмите ID: `dQw4w9WgXcQ`

### VK Video

1. Откройте видео на VK → «Поделиться» → «Код для вставки»
2. Скопируйте URL из атрибута `src` iframe
3. Вставьте в `embedId` целиком

## Email и реквизиты

- Email в footer: `auroboros.soft@gmail.com` (`src/components/layout/Footer.astro`)
- Formspree: `https://formspree.io/f/mwlevlbw` — заявки приходят на email, указанный в Formspree

## Деплой

### Vercel / Netlify

1. Подключите репозиторий
2. Build command: `npm run build`
3. Output directory: `dist`
4. Добавьте env: `PUBLIC_FORMSPREE_ID`

### GitHub Pages

Потребуется настроить `site` в `astro.config.mjs` и base path при необходимости.

## Структура

```
src/
  components/   UI, секции, формы
  data/         products.ts, faq.ts
  i18n/         переводы интерфейса
  layouts/      BaseLayout
  pages/        ru/, en/
```

## Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Dev-сервер |
| `npm run build` | Production-сборка |
| `npm run preview` | Просмотр сборки |
