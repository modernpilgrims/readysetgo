export type Landing = {
    hero: {
        title: string
        subtitle: string
        description: string
        note: string
        ctaPrimary: string
        ctaSecondary: string
    }

    reality: {
        title: string
        items: string[]
        result: string
        conclusion: string
    }

    logic: {
        title: string
        items: string[]
        note: string
    }

    process: {
        title: string
        steps: {
            title: string
            description: string
        }[]
        result: string
    }

    levels: {
        title: string
        subtitle: string
        items: {
            [key: string]: {
                name: string
                description: string
            }
        }
        cta: string
        note: string
    }

    amplifiers: {
        title: string
        items: string[]
        note: string
        conclusion: string
    }

    examples: {
        title: string
        subtitle: string
        items: {
            title: string
            task: string
            format: string
            result: string
            cta: string
        }[]
        more: string
    }

    facts: {
        title: string
        items: {
            title: string
            value: string
            note: string
        }[]
        conclusion: string
    }

    final: {
        text: string
        cta: string
        secondary?: {
            title: string
            text: string
            cta: string
        }
    }
}

export const landing_en: Landing = {
    hero: {
        title: "Ready Set Go",
        subtitle: "Websites that bring clients",
        description: "For small and medium businesses",
        note: "Clear structure. Real results. Edit without a developer.",
        ctaPrimary: "Get a website",
        ctaSecondary: "See examples",
    },

    reality: {
        title: "Websites don't fail because of poor design",
        items: [
            "your offer is unclear",
            "there is no strong reason to choose you",
            "the structure is chaotic",
            "the content stays the same",
        ],
        result:
            "Result: visitors see pages, not a business. No trust → no requests.",
        conclusion:
            "The website is online. It simply does not work for you.",
    },

    logic: {
        title: "We do not just build websites",
        items: [
            "explains your business in seconds",
            "shows why to choose you",
            "guides visitors to a request",
            "stays easy to manage without a developer",
        ],
        note: "Only what drives the result. The rest stays out.",
    },

    process: {
        title: "4 clear steps",
        steps: [
            {
                title: "Understand your business",
                description: "We see how you earn and who buys from you.",
            },
            {
                title: "Build the structure",
                description: "Clear logic: what goes where, and why.",
            },
            {
                title: "Design + assemble",
                description: "Nothing extra. Only what works.",
            },
            {
                title: "Launch + handover",
                description: "You learn to manage the website yourself.",
            },
        ],
        result: "Result: a working tool. Full control stays with you.",
    },

    levels: {
        title: "Three levels. One goal: a working tool",
        subtitle: "Choose the depth you need",

        items: {
            launch: {
                name: "Launch",
                description:
                    "For new projects, single service, quick validation",
            },
            core: {
                name: "Core",
                description:
                    "For established business that needs steady leads",
            },
            system: {
                name: "System",
                description:
                    "For scaling, multiple offers, complex sales flow",
            },
        },

        cta: "Get a website",
        note: "Final price is fixed after a 15-min task call.",
    },

    amplifiers: {
        title: "Additional elements to strengthen the result",
        items: [
            "Basic brand rules",
            "Social media setup",
            "Sales presentations",
            "Simple bots / contact forms",
            "Text templates and clear messaging",
        ],
        note:
            "Not sold separately. Included with the core solution.",
        conclusion:
            "Website as core. Everything else when it helps.",
    },

    examples: {
        title: "Examples of work",
        subtitle: "Working tools that explain a business",

        items: [
            {
                title: "Local service",
                task:
                    "clients didn't understand the difference from competitors",
                format:
                    "website + clear service structure + texts",
                result:
                    "a working tool. The client manages it independently.",
                cta: "View",
            },
            {
                title: "B2B supply",
                task:
                    "complex product, hard to explain on one page",
                format:
                    "landing page + product structure + sales presentation",
                result:
                    "a clear system. Request becomes a logical next step.",
                cta: "View",
            },
            {
                title: "Business services",
                task:
                    "no structure → visitors get lost, no requests",
                format:
                    "website + page logic + basic brand rules",
                result:
                    "a tool that works without us.",
                cta: "View",
            },
        ],

        more: "See more examples",
    },

    facts: {
        title: "What to expect",

        items: [
            {
                title: "Timeline",
                value: "4 weeks on average",
                note:
                    "Depends on the scope of your data, not design complexity.",
            },
            {
                title: "Revisions",
                value: "within your level",
                note:
                    "Endless changes are not included. Clarity first.",
            },
            {
                title: "Texts",
                value: "we help structure your content",
                note:
                    "You own the meaning. We make it clear.",
            },
            {
                title: "After launch",
                value: "you manage the website yourself",
                note:
                    "No dependency on a developer.",
            },
        ],

        conclusion: "Transparency before start. Control after.",
    },

    final: {
        text:
            "We structure the website so the business speaks for itself",
        cta: "Get a website",

        secondary: {
            title: "Not sure what you need?",
            text:
                "Sometimes the problem is not the website. It's how the business or product is built.",
            cta: "Go deeper → Modern Pilgrims",
        },
    },
}