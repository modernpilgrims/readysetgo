readysetgo/
│
├── public/
│   ├── icons/
│   │   ├── file.svg
│   │   ├── globe.svg
│   │   ├── next.svg
│   │   ├── vercel.svg
│   │   └── window.svg
│   │
│   └── images/
│       ├── beauty-en.png
│       ├── houses-ru.png
│       └── renovation-pl.png
│
├── src/
│
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                  # redirect → /en
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
│   │   ├── api/
│   │   │   ├── leads/
│   │   │   │   └── route.ts
│   │   │   │
│   │   │   └── telegram/
│   │   │       └── test/
│   │   │           └── route.ts
│   │   │
│   │   └── auth/
│   │       ├── callback/
│   │       │   └── route.ts
│   │       ├── error/
│   │       │   └── page.tsx
│   │       └── login/
│   │           └── page.tsx
│
│   ├── components/
│   │
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── card.tsx
│   │   │   ├── icon.tsx
│   │   │   └── logo.tsx
│   │   │
│   │   ├── typography/
│   │   │   ├── heading.tsx
│   │   │   ├── text.tsx
│   │   │   └── label.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── container.tsx
│   │   │   ├── section.tsx
│   │   │   ├── grid.tsx
│   │   │   └── stack.tsx
│   │   │
│   │   ├── composites/
│   │   │   ├── example-card.tsx
│   │   │   ├── fact-row.tsx
│   │   │   ├── feature-item.tsx
│   │   │   ├── level-card.tsx
│   │   │   └── step-item.tsx
│   │   │
│   │   ├── marketing/
│   │   │   ├── hero.tsx
│   │   │   ├── hero-visual.tsx
│   │   │   ├── header.tsx
│   │   │   ├── reality.tsx
│   │   │   ├── logic.tsx
│   │   │   ├── process.tsx
│   │   │   ├── levels.tsx
│   │   │   ├── amplifiers.tsx
│   │   │   ├── examples.tsx
│   │   │   ├── facts.tsx
│   │   │   ├── final.tsx
│   │   │   ├── cta.tsx
│   │   │   └── page-client.tsx
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
│   │   ├── media/
│   │   │   └── hero.ts
│   │   │
│   │   └── pricing/
│   │       └── index.ts
│
│   ├── lib/
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
│   │   ├── locale/
│   │   │   └── theme.ts
│   │   │
│   │   ├── ui/
│   │   │   ├── cn.ts
│   │   │   └── variants.ts
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
│       ├── database.ts
│       ├── lead.ts
│       └── profile.ts
│
├── .env.example
├── .env.local
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── Architecture.md
├── Architecture 1.1.md
├── Architecture 1.2.md
├── README.md
├── middleware.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── package-lock.json


                                                    💡 Состояние системы на 25.04.2026 


