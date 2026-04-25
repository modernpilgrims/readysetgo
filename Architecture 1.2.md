🧭 READYSETGO — ARCHITECTURE v1.2

Обновление: добавлен слой UI-системы

Цель: масштабируемый лендинг под любые рынки и языки

КАК ЭТО ЧИТАТЬ
app/        → роутинг
components/ → UI
content/    → смысл (тексты)
lib/        → логика
styles/     → визуальная система
api/        → обработка данных
db/         → база

СУТЬ
UI = много слоёв
Content = отдельно
Logic = отдельно

СХЕМА

readysetgo/
│
├── public/
│   ├── images/
│   └── icons/
│
├── src/
│
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                # redirect → /en
│   │   │
│   │   ├── [locale]/
│   │   │   └── (marketing)/
│   │   │       ├── page.tsx
│   │   │       └── contact/
│   │   │           └── page.tsx
│   │   │
│   │   ├── (admin)/
│   │   │   └── app/
│   │   │       ├── layout.tsx
│   │   │       ├── page.tsx
│   │   │       └── leads/
│   │   │           └── page.tsx
│   │   │
│   │   └── api/
│   │       ├── leads/
│   │       │   └── route.ts
│   │       └── telegram/
│   │           └── test/
│   │               └── route.ts
│
│   ├── components/
│   │
│   │   ├── ui/                     # primitives
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── card.tsx
│   │   │   └── icon.tsx
│   │   │
│   │   ├── typography/             # текстовая система
│   │   │   ├── heading.tsx
│   │   │   ├── text.tsx
│   │   │   └── label.tsx
│   │   │
│   │   ├── layout/                 # сетка и структура
│   │   │   ├── container.tsx
│   │   │   ├── section.tsx
│   │   │   ├── grid.tsx
│   │   │   └── stack.tsx
│   │   │
│   │   ├── composites/             # собранные элементы
│   │   │   ├── feature-item.tsx
│   │   │   ├── step-item.tsx
│   │   │   ├── level-card.tsx
│   │   │   ├── example-card.tsx
│   │   │   └── fact-row.tsx
│   │   │
│   │   ├── marketing/              # блоки лендинга
│   │   │   ├── hero.tsx
│   │   │   ├── reality.tsx
│   │   │   ├── logic.tsx
│   │   │   ├── process.tsx
│   │   │   ├── levels.tsx
│   │   │   ├── amplifiers.tsx
│   │   │   ├── examples.tsx
│   │   │   ├── facts.tsx
│   │   │   ├── final.tsx
│   │   │   └── cta.tsx
│   │   │
│   │   └── forms/
│   │       ├── lead-form.tsx
│   │       └── login-button.tsx
│
│   ├── content/
│   │   ├── landing/
│   │   │   ├── en.ts
│   │   │   ├── ru.ts
│   │   │   └── index.ts
│   │   │
│   │   └── pricing/
│   │       └── index.ts
│
│   ├── lib/
│   │
│   │   ├── auth/
│   │   │   ├── guards.ts
│   │   │   └── roles.ts
│   │   │
│   │   ├── leads/
│   │   │   ├── lead-schema.ts
│   │   │   └── lead-mappers.ts
│   │   │
│   │   ├── supabase/
│   │   │   ├── client.ts
│   │   │   ├── server.ts
│   │   │   └── admin.ts
│   │   │
│   │   ├── telegram/
│   │   │   └── send-message.ts
│   │   │
│   │   ├── ui/                     # helpers
│   │   │   ├── cn.ts
│   │   │   └── variants.ts
│   │   │
│   │   ├── locale/
│   │   │   └── theme.ts
│   │   │
│   │   └── utils/
│   │       ├── env.ts
│   │       └── dates.ts
│
│   ├── styles/
│   │   ├── globals.css
│   │   └── tokens.css
│
│   ├── db/
│   │   └── migrations/
│   │       └── 0000_init.sql
│
│   └── types/
│
└── package.json
__________________________________________________________________________________________________________________
📁 ROOT
readysetgo/
├── public/
│   ├── images/
│   └── icons/
📁 SRC
src/
1. 🧱 APP (роутинг)
app/
├── layout.tsx          ← единый root layout
├── page.tsx            ← redirect → /en
🌍 MULTI-LOCALE
├── [locale]/
│   └── (marketing)/
│       ├── page.tsx
│       └── contact/
│           └── page.tsx

❗️ВАЖНО:

нет [locale]/layout.tsx
routing = manual locale
/en, /ru — базовый уровень
🛠 ADMIN
├── (admin)/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx
│       └── leads/
│           └── page.tsx
🔌 API
├── api/
│   ├── leads/
│   │   └── route.ts
│   │
│   └── telegram/
│       └── test/
│           └── route.ts
2. 🧩 COMPONENTS (UI СИСТЕМА)
components/
🔹 1. UI PRIMITIVES (базовые элементы)
ui/
├── button.tsx
├── input.tsx
├── textarea.tsx
├── card.tsx
├── icon.tsx

👉 только визуал
👉 без бизнес-логики
👉 переиспользуемые

🔹 2. TYPOGRAPHY (текст как система)
typography/
├── heading.tsx
├── text.tsx
├── label.tsx

👉 управляет:

размерами текста
ритмом
читаемостью
🔹 3. LAYOUT (структура страницы)
layout/
├── container.tsx
├── section.tsx
├── grid.tsx
├── stack.tsx

👉 отвечает за:

ширину
отступы
сетку
выравнивание
🔹 4. COMPOSITES (сборка UI-блоков)
composites/
├── feature-item.tsx
├── step-item.tsx
├── level-card.tsx
├── example-card.tsx
├── fact-row.tsx

👉 связка между primitives и блоками
👉 убирает дублирование

🔹 5. MARKETING BLOCKS (структура лендинга)
marketing/
├── hero.tsx
├── reality.tsx
├── logic.tsx
├── process.tsx
├── levels.tsx
├── amplifiers.tsx
├── examples.tsx
├── facts.tsx
├── final.tsx
├── cta.tsx

👉 блоки:

не содержат сложных стилей
собираются из primitives + composites
🔹 6. FORMS
forms/
├── lead-form.tsx
├── login-button.tsx
3. 📦 CONTENT (источник смысла)
content/
landing/
├── en.ts
├── ru.ts
├── index.ts
pricing/
└── index.ts

👉 контент полностью отделён от UI
👉 поддержка multi-language через getLanding()

4. 🧠 LIB (логика)
lib/
Auth
auth/
├── guards.ts
├── roles.ts
Leads
leads/
├── lead-schema.ts
├── lead-mappers.ts
Supabase
supabase/
├── client.ts
├── server.ts
├── admin.ts
Telegram
telegram/
└── send-message.ts
Utils
utils/
├── env.ts
├── dates.ts
🔹 UI HELPERS (НОВОЕ)
ui/
├── cn.ts
├── variants.ts
🌍 LOCALE THEME (НОВОЕ)
locale/
└── theme.ts
export const localeTheme = {
  en: { accent: "neutral" },
  ru: { accent: "slate" },
}
5. 🎨 STYLES
styles/
├── globals.css
├── tokens.css
tokens.css
:root {
  --spacing-1: 8px;
  --spacing-2: 16px;
  --spacing-3: 24px;
  --spacing-4: 32px;

  --radius: 12px;

  --color-bg: #ffffff;
  --color-text: #0A0A0A;
  --color-muted: #6B7280;
  --color-border: #E5E7EB;
}
6. 🗄 DB
db/
└── migrations/
    └── 0000_init.sql
7. 🔧 TYPES
types/

(опционально)

🧠 ОБЩАЯ ЛОГИКА
UI → components/
Content → content/
Logic → lib/
Routing → app/
Data → api → db/
🌍 MULTI-LANGUAGE FLOW
user → /ru

→ app/[locale]/page.tsx
→ getLanding(locale)
→ render blocks
📥 LEAD FLOW
form → /api/leads → supabase → telegram
🔥 КЛЮЧЕВОЕ ИЗМЕНЕНИЕ v1.2
Было:
components = один слой
Стало:
primitives
→ typography
→ layout
→ composites
→ blocks

👉 это превращает проект из:

сайт

в

систему генерации лендингов
⚠️ КРИТИЧЕСКИЕ ПРАВИЛА
1. UI не пишется в блоках

❌ плохо:

<div className="px-6 py-12 text-xl">

✅ правильно:

<Section>
  <Container>
    <Heading />
  </Container>
</Section>
2. Повторяющиеся элементы → в composites
3. Контент отдельно от UI
4. Один layout
5. Простота > дизайн
📊 СТАТУС

Ты сейчас:

✅ архитектура
✅ multi-language
✅ структура лендинга

Осталось:

❗ UI система
❗ lead capture
❗ интеграции

🚀 ДАЛЬШЕ
собрать primitives
собрать layout
собрать composites
пересобрать блоки