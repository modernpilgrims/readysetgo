Архитектура v 1.0 от 24.04.2026 проекта Ready Set Go


readysetgo/
├── public/
│   ├── images/
│   └── icons/

├── src/
│
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │
│   │   │   ├── (marketing)/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── contact/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── privacy/
│   │   │   │       └── page.tsx
│   │   │
│   │   │   ├── (dashboard)/
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   └── requests/
│   │   │   │       └── page.tsx
│   │   │
│   │   │   └── auth/
│   │   │       ├── login/page.tsx
│   │   │       ├── error/page.tsx
│   │   │       └── callback/route.ts
│   │
│   │   ├── (admin)/
│   │   │   └── app/
│   │   │       ├── layout.tsx
│   │   │       ├── page.tsx
│   │   │       └── leads/
│   │   │           ├── page.tsx
│   │   │           └── [id]/page.tsx
│   │
│   │   ├── api/
│   │   │   ├── leads/route.ts
│   │   │   ├── telegram/test/route.ts
│   │   │   └── webhooks/
│   │
│   │   └── page.tsx   ← redirect → /en
│
│   ├── components/
│   │   ├── marketing/
│   │   │   ├── hero.tsx
│   │   │   ├── packages.tsx
│   │   │   ├── process.tsx
│   │   │   └── cta.tsx
│   │   │
│   │   ├── forms/
│   │   │   ├── lead-form.tsx
│   │   │   └── login-button.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   └── footer.tsx
│   │   │
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       └── card.tsx
│
│   ├── content/
│   │   ├── landing/
│   │   │   ├── en.ts
│   │   │   ├── ru.ts
│   │   │   ├── pl.ts
│   │   │   └── index.ts
│
│   ├── lib/
│   │   ├── i18n/
│   │   │   ├── config.ts
│   │   │   └── get-locale.ts
│   │   │
│   │   ├── supabase/
│   │   │   ├── client.ts
│   │   │   ├── server.ts
│   │   │   └── admin.ts
│   │   │
│   │   ├── leads/
│   │   │   ├── lead-schema.ts
│   │   │   └── lead-mappers.ts
│   │   │
│   │   ├── telegram/
│   │   │   └── send-message.ts
│   │   │
│   │   └── utils/
│   │       ├── env.ts
│   │       └── dates.ts
│
│   ├── db/
│   │   └── migrations/
│   │       └── 0000_init.sql
│
│   ├── types/
│   │   ├── database.ts
│   │   ├── lead.ts
│   │   └── profile.ts
│
│   └── styles/
│       └── globals.css
│
├── .env.local
├── next.config.ts
├── tsconfig.json
└── package.json

2. ЛОГИКА (ВАЖНО ПОНЯТЬ) 
📦 app/ 👉 только роутинг 👉 никакой бизнес-логики
📦 components/ 👉 только UI 👉 никаких текстов
📦 content/ 👉 ВСЕ тексты продукта
📦 lib/ 👉 вся логика и интеграции
📦 api/ 👉 точка входа данных
📦 db/ 👉 база и миграции

3. КЛЮЧЕВЫЕ ПРАВИЛА
❌ НЕ ДЕЛАЙ
тексты в компонентах
API вызовы в UI
Supabase из браузера напрямую
переводы через if
✅ ДЕЛАЙ
content → props → components
locale → routing
server → API → DB

4. MULTI-LANGUAGE FLOW
user → /ru
→ app/[locale]
→ getLanding(locale)
→ render UI

5. MVP FLOW
пользователь заходит
система определяет язык браузера пользователя или пользователь выбирает язык в dropdown menu
видит лендинг
отправляет форму
лид падает в Supabase
уведомление в Telegram
ты видишь в /admin