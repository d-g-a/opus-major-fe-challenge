"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function AnimatedOmSymbol() {
  const [scrollRange, setScrollRange] = useState(0)
  const { scrollY } = useScroll()

  useEffect(() => {
    const updateScrollRange = () => {
      const documentHeight = document.documentElement.scrollHeight
      const viewportHeight = window.innerHeight
      setScrollRange(documentHeight - viewportHeight)
    }

    updateScrollRange()
    window.addEventListener("resize", updateScrollRange)
    return () => window.removeEventListener("resize", updateScrollRange)
  }, [])

  // Scroll-based rotation
  const scrollRotate = useTransform(scrollY, [0, scrollRange], [0, 360])

  return (
    <Link href="https://www.opusmajor.io/" target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
      <motion.div
        className="fixed bottom-8 left-8 md:left-auto md:right-8 z-50 w-16 h-16 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]"
        style={{ rotate: scrollRotate }}
        whileHover={{
          scale: 1.2,
          filter: "drop-shadow(0 0 20px rgba(255,215,0,0.5))",
        }}
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <motion.div
            whileHover={{
              animate: {
                filter: [
                  "drop-shadow(0 0 15px rgba(255,215,0,0.3))",
                  "drop-shadow(0 0 30px rgba(255,215,0,0.6))",
                  "drop-shadow(0 0 15px rgba(255,215,0,0.3))",
                ],
              },
              transition: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              },
            }}
          >
            <Image
              src="/OM_ROCK_Symbol.png"
              alt="OM Symbol"
              width={64}
              height={64}
              className="w-full h-full"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  )
}

