Актуальная архитектура v1.1, с учётом того, что есть в проекте.

---

# 🧭 READYSETGO — ARCHITECTURE v1.1 (25.04.2026 00:06)

## 📁 ROOT

```
readysetgo/
├── public/
│   ├── images/
│   └── icons/
```

---

## 📁 SRC

```
src/
```

---

# 1. 🧱 APP (роутинг)

```
app/
```

```
├── layout.tsx          ← ROOT layout (ОБЯЗАТЕЛЬНО один)
├── page.tsx            ← redirect → /en
├── globals.css         ← (можно удалить, если используешь styles/)
```

---

## 🌍 MULTI-LOCALE

```
├── [locale]/
│   └── (marketing)/
│       ├── page.tsx
│       └── contact/
│           └── page.tsx
```

❗️ВАЖНО:

👉 у тебя НЕТ:

* `[locale]/layout.tsx` (и это ок)
* `(dashboard)` (пока не нужен)

---

## 🛠 ADMIN

```
├── (admin)/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx
│       └── leads/
│           └── page.tsx
```

---

## 🔌 API

```
├── api/
│   ├── leads/
│   │   └── route.ts
│   │
│   └── telegram/
│       └── test/
│           └── route.ts
```

---

# 2. 🧩 COMPONENTS (UI ТОЛЬКО)

```
components/
```

## Marketing (у тебя уже правильно)

```
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
```

---

## Forms

```
forms/
├── lead-form.tsx
├── login-button.tsx
```

---

## UI primitives

```
ui/
├── button.tsx
├── input.tsx
├── card.tsx
```

---

# 3. 📦 CONTENT (источник смысла)

```
content/
```

```
landing/
├── en.ts
├── ru.ts
├── index.ts
```

```
pricing/
└── index.ts
```

---

# 4. 🧠 LIB (вся логика)

```
lib/
```

## Auth

```
auth/
├── guards.ts
├── roles.ts
```

---

## Leads

```
leads/
├── lead-schema.ts
├── lead-mappers.ts
```

---

## Supabase

```
supabase/
├── client.ts
├── server.ts
├── admin.ts
```

---

## Telegram

```
telegram/
└── send-message.ts
```

---

## Utils

```
utils/
├── env.ts
├── dates.ts
```

---

# 5. 🗄 DB

```
db/
└── migrations/
    └── 0000_init.sql
```

---

# 6. 🎨 STYLES

```
styles/
└── globals.css   ← основной CSS (Tailwind v4)
```

---

# 7. 🔧 TYPES

```
types/
```

(пока можно не трогать)

---

# ⚠️ КРИТИЧЕСКИЕ ИЗМЕНЕНИЯ ОТ ТВОЕЙ ВЕРСИИ

Вот где ты “расходился с реальностью”:

---

## ❌ УДАЛЕНО / НЕ ИСПОЛЬЗУЕТСЯ

* `[locale]/layout.tsx` → нет
* `(dashboard)` → нет
* `lib/i18n` → нет
* `privacy page` → нет
* `auth pages` → нет

---

## ✅ ДОБАВЛЕНО ФАКТИЧЕСКИ

* `reality.tsx`
* `logic.tsx`
* `amplifiers.tsx`
* `examples.tsx`
* `facts.tsx`
* `final.tsx`

👉 это уже твоя **реальная продуктовая структура лендинга**

---

# 🧠 ЛОГИКА (ОБНОВЛЕННАЯ)

```
UI → components/
Content → content/
Logic → lib/
Routing → app/
Data → api → db
```

---

# 🌍 MULTI-LANGUAGE FLOW (АКТУАЛЬНЫЙ)

```
user → /ru

→ app/[locale]/(marketing)/page.tsx
→ await params
→ getLanding(locale)
→ render blocks
```

---

# 📥 LEAD FLOW

```
form → /api/leads → supabase → telegram
```

---

# ⚠️ ГДЕ СЕЙЧАС РИСК

Ты сейчас почти правильно всё сделал, но есть 3 зоны риска:

---

## 1. Tailwind v4 (ты уже столкнулся)

👉 решено частично
👉 дальше нужно нормализовать UI

---

## 2. Alias `@/`

Если tsconfig криво настроен → опять будут ошибки импорта

---

## 3. Layout hierarchy

👉 должен быть ТОЛЬКО один root layout

---

# 📊 ВАЖНО: ГДЕ ТЫ СЕЙЧАС

Ты уже:

✅ сделал архитектуру
✅ сделал multi-language
✅ сделал content систему
✅ сделал SSR

---

Ты НЕ сделал:

❗ нормальный UI
❗ lead capture
❗ UX flow

---

# 🚀 ДАЛЬШЕ

Теперь логично:

## Шаг 1

👉 делаем нормальный UI (Hero + Levels)

## Шаг 2

👉 добавляем форму (lead-form)

## Шаг 3

👉 подключаем Supabase + Telegram