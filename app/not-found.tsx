import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nat-Z0vdRzr_iZM-unsplash.jpg-1HoymqD9vYYhjDYrw4blECVNwwZqL6.jpeg')`,
      }}
    >
      <div className="bg-black/10 w-full h-full absolute" />
      <Card className="max-w-lg w-full mx-4 bg-[#10141D]/90 backdrop-blur-sm shadow-xl z-10">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-white">404 - Page Not Found</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-white/80 mb-6">Sorry, this page does not exist but feel free to learn more about us.</p>
          <Link href="https://www.opusmajor.io/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white/90 text-[#10141D] hover:bg-white">Learn More About Opus Major</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

