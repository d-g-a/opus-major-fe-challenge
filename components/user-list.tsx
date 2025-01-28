"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface User {
  id: string
  name: string
  avatar: string
}

export function UserList() {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const response = await fetch("https://6752d87bf3754fcea7b9cea0.mockapi.io/users")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch users')
        setUsers([])
      } finally {
        setIsLoading(false)
      }
    }
    fetchUsers()
  }, [])

  // Sort users by id in descending order (assuming newer users have higher ids)
  const sortedUsers = [...users].sort((a, b) => Number.parseInt(b.id) - Number.parseInt(a.id))

  return (
    <Card className="bg-[#D8D6E9] backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-navyblue text-center md:text-left">User List</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {isLoading && (
          <div className="text-center text-navyblue">Loading users...</div>
        )}
        {error && (
          <div className="text-center text-red-500">{error}</div>
        )}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sortedUsers.map((user) => (
              <Card key={user.id} className="bg-[#10141D] backdrop-blur-sm ">
                <CardContent className="flex items-center p-4">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col overflow-hidden">
                    <p className="font-medium text-white text-sm truncate">{user.name}</p>
                    <span className="text-xs text-white/70">ID: {user.id}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

