"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Howl } from "howler"
import { UserPlus } from "lucide-react"

const successSound = new Howl({
  src: ["/coin.wav"],
  volume: 0.5,
})

export function UserForm() {
  const [name, setName] = useState("")
  const [avatar, setAvatar] = useState("")
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("https://6752d87bf3754fcea7b9cea0.mockapi.io/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          avatar,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      successSound.play()
      setName("")
      setAvatar("")
      setTimeout(() => {
        router.push("/user-list")
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add user. Please try again.")
      console.error("Error adding user:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="bg-[#D8D6E9] backdrop-blur-sm">
      <CardHeader className="flex justify-center md:justify-start">
        <CardTitle className="flex items-center gap-2 text-navyblue">
          <UserPlus className="h-5 w-5" />
          Add New User
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-navyblue">
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="Enter user's name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-white/10 text-navyblue placeholder-navyblue/50"
              type="text"
              maxLength={20}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="avatar" className="text-sm font-medium text-navyblue">
              Avatar URL
            </Label>
            <Input
              id="avatar"
              placeholder="Enter avatar URL"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              required
              className="bg-white/10 text-navyblue placeholder-navyblue"
              type="url"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-navyblue text-white hover:bg-navyblue/70"
            disabled={isLoading}
          >
            {isLoading ? "Adding User..." : "Add User"}
          </Button>
        </form>
        {error && (
          <p className="text-red-500 text-sm mt-2">
            {error}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

