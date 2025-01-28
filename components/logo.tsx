import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/opus_major_logo-p93zto5eMyZKOQcKzY66iUaWH1zpnq.svg"
        alt="Opus Major Logo"
        width={162}
        height={43.2}
        priority
        className="h-12 w-auto"
      />
    </div>
  )
}

