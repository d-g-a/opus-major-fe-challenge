"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { playWelcomeSound } from "@/utils/sounds"

export default function LandingPage() {

  const handleClick1 = () => {
    playWelcomeSound('sound1')
  }
  const handleClick2 = () => {
    playWelcomeSound('sound2')
  }
  const handleClick3 = () => {
    playWelcomeSound('sound3')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md w-full relative z-10">
        <Image
          src="/opus_major_logo.svg"
          alt="Opus Major Logo"
          width={300}
          height={68}
          priority
          className="mb-12 mx-auto"
        />
        <div className="flex flex-col gap-4">
          <Link 
            href="/dashboard/user-list" 
            className="w-full"
            onClick={handleClick1}
          >
            <Button
              size="lg"
              className="w-full bg-lightpurple backdrop-blur-sm text-navyblue font-bold hover:text-navyblue/90 font-montserrat transition-all rounded-2xl"
            >
              User List
            </Button>
          </Link>
          <Link 
            href="/dashboard/add-user" 
            className="w-full"
            onClick={handleClick2}
          >
            <Button
              size="lg"
              className="w-full bg-lightpurple backdrop-blur-sm text-navyblue font-bold hover:text-navyblue/90 font-montserrat transition-all rounded-2xl"
            >
              Add User
            </Button>
          </Link>
          <Link 
            href="/dashboard/user-chart" 
            className="w-full"
            onClick={handleClick3}
          >
            <Button
              size="lg"
              className="w-full bg-lightpurple backdrop-blur-sm text-navyblue font-bold hover:text-navyblue/90 font-montserrat transition-all rounded-2xl"
            >
              Users Chart
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

