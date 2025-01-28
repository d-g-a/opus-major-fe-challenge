"use client"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { AnimatedOmSymbol } from "@/components/animated-om-symbol"
import { Footer } from "@/components/footer"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed flex flex-col"
      style={{
        backgroundImage: `url('/background.jpg')`,
      }}
    >
      <div className="flex-1 bg-black/10 flex flex-col">
        <Navigation />
        <main className="container mx-auto max-w-7xl p-6 flex-grow">
          <Card className="h-full bg-[#10141D]/90 backdrop-blur-sm shadow-xl">
            <div className="p-6 h-full">{children}</div>
          </Card>
        </main>
        <AnimatedOmSymbol />
      </div>
      <Footer />
    </div>
  )
}

