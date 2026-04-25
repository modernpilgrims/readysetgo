// src/app/layout.tsx
import "@/styles/globals.css"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body className="bg-background text-foreground">
                {children}
            </body>
        </html>
    )
}