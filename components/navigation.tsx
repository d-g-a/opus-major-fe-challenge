"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { playWelcomeSound } from "@/utils/sounds"


export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    <>
      <header className="bg-transparent px-6 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm sticky top-0 z-50">
        <nav className="flex items-center justify-between max-w-6xl mx-auto">
          <Link href="/" className="flex items-center md:hidden">
            {/* Spacer for mobile layout */}
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center md:justify-start flex-grow md:flex-grow-0"
          >
            <Image
              src="/opus_major_logo.svg"
              alt="Opus Major Logo"
              width={126}
              height={28.8}
              priority
              className="h-8 w-auto"
            />
          </Link>

          <div 
            className="hidden md:flex items-center gap-8 font-bold group"
          >
            <Link 
              href="/dashboard/user-list" 
              onClick={() => handleClick1()}
              className={cn(
                "text-sm font-montserrat group-hover:opacity-60 hover:!opacity-100 transition-opacity",
                pathname === "/dashboard/user-list" ? "text-white" : "text-white/60 hover:text-white/80"
              )}
            >
              User List
            </Link>

            <Image
              src="/om_symbol.png"
              alt="OM Symbol"
              width={8}
              height={8}
              className="rotate-45 group-hover:opacity-60 transition-opacity"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <Link 
              href="/dashboard/add-user" 
              onClick={() => handleClick2()}
              className={cn(
                "text-sm font-montserrat group-hover:opacity-60 hover:!opacity-100 transition-opacity",
                pathname === "/dashboard/add-user" ? "text-white" : "text-white/60 hover:text-white/80"
              )}
            >
              Add User
            </Link>

            <Image
              src="/om_symbol.png"
              alt="OM Symbol"
              width={8}
              height={8}
              className="rotate-45 group-hover:opacity-60 transition-opacity"
              style={{ filter: "brightness(0) invert(1)" }}
            />

            <Link 
              href="/dashboard/user-chart" 
              onClick={() => handleClick3()}
              className={cn(
                "text-sm font-montserrat group-hover:opacity-60 hover:!opacity-100 transition-opacity",
                pathname === "/dashboard/user-chart" ? "text-white" : "text-white/60 hover:text-white/80"
              )}
            >
              Users Chart
            </Link>
          </div>
        </nav>
      </header>

      {/* OM Symbol menu button */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="md:hidden fixed bottom-5 right-5 z-50 w-20 h-20 flex items-center justify-center overflow-hidden cursor-pointer"
      >
        <Image
          src="/o_symbol.svg"
          alt="Menu"
          width={20}
          height={20}
          className="w-full h-full object-cover object-center"
        />
      </button>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#10141D] z-50 flex flex-col items-center justify-center md:hidden">
          <div className="flex flex-col items-center gap-8">
            <MobileNavLink href="/dashboard/user-list" onClick={() => setMobileMenuOpen(false)}>
              User List
            </MobileNavLink>
            <Image
              src="/om_symbol.png"
              alt="OM Symbol"
              width={10}
              height={10}
              className="rotate-45 group-hover:opacity-60 transition-opacity"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <MobileNavLink href="/dashboard/add-user" onClick={() => setMobileMenuOpen(false)}>
              Add User
            </MobileNavLink>
            <Image
              src="/om_symbol.png"
              alt="OM Symbol"
              width={10}
              height={10}
              className="rotate-45 group-hover:opacity-60 transition-opacity"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <MobileNavLink href="/dashboard/user-chart" onClick={() => setMobileMenuOpen(false)}>
              Users Chart
            </MobileNavLink>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute bottom-4 right-4 text-white p-2 hover:text-gray-300 transition-colors duration-200 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      )}
    </>
  )
}



interface MobileNavLinkProps {
  children: React.ReactNode
  href: string
  onClick: () => void
}

function MobileNavLink({ children, href, onClick }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-white text-3xl font-bold font-montserrat hover:text-gray-300 transition-colors duration-200 cursor-pointer"
    >
      {children}
    </Link>
  )
}

