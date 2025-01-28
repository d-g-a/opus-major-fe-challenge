"use client"
import Image from "next/image"
import Link from "next/link"


export function Footer() {
  return (
    <footer className="bg-[#10141D] text-white py-4 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Footer */}
        <div className="hidden md:flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/opus_major_logo.svg"
              alt="Opus Major Logo"
              width={140}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span>Opus Major, 2025</span>
          </div>
          <Link
            href="https://www.linkedin.com/company/opusmajor"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <div className="bg-red rounded-full p-2 flex items-center justify-center w-10 h-10">
              <Image 
                src="/linkedin.svg" 
                alt="Linkedin" 
                width={24} 
                height={24} 
                className="h-6 w-6"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          </Link>
        </div>

        {/* Mobile Footer */}
        <div className="md:hidden flex flex-col items-center gap-4">
          <Link
            href="https://www.linkedin.com/company/opusmajor/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <Image src="/linkedin.svg" alt="Linkedin" width={20} height={20} />
          </Link>
          <div className="flex flex-col items-center gap-2 text-sm text-white/80">
            <span>Opus Major, 2025</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

