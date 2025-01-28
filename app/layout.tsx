import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "Opus Major | Coding Challenge",
  description: "by Diego Guerrero Alexander",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className={`${montserrat.variable} font-sans`}>
        <div
          className="min-h-screen bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/background.jpg')`
          }}
        >
          {/* Subtle overlay for better readability */}
          <div className="min-h-screen bg-black/10">{children}</div>
        </div>
      </body>
    </html>
  )
}

