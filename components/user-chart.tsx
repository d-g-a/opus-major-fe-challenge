"use client"

import { useState, useEffect } from "react"
import { Bar, BarChart } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { Clock } from "lucide-react"

interface ChartData {
  time: string
  users: number
}

export function UserChart() {
  const [chartData, setChartData] = useState<ChartData[]>([])
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const fetchData = async () => {
      // Simulate real-time data for the chart
      const now = new Date()
      const data: ChartData[] = []
      for (let i = 59; i >= 0; i--) {
        const time = new Date(now.getTime() - i * 60000)
        data.push({
          time: time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          users: Math.floor(Math.random() * 5) + 1, // 1-5 users per minute
        })
      }
      setChartData(data)
    }

    fetchData()
    const chartInterval = setInterval(fetchData, 60000) // Update chart every minute

    const timeInterval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000) // Update time every second

    return () => {
      clearInterval(chartInterval)
      clearInterval(timeInterval)
    }
  }, [])

  return (
    <div className="space-y-6">
      <Card className="bg-lightpurple backdrop-blur-sm">
        <CardHeader className="text-center md:text-left">
          <CardTitle className="text-lg font-bold text-navyblue">User Registrations Per Minute</CardTitle>
          <CardDescription className="text-navyblue/70">New users created per minute over the past hour</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              users: {
                label: "New Users",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="aspect-[2/1]"
          >
            <BarChart data={chartData} className="h-[350px] w-full" accessibilityLayer>
              <Bar dataKey="users" radius={[4, 4, 0, 0]} />
              <ChartTooltip
                content={({ payload }) => {
                  if (payload && payload.length) {
                    return (
                      <div className="rounded-lg bg-[#10141D] p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-white/70">Time</span>
                            <span className="font-bold text-white">{payload[0].payload.time}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-white/70">Users</span>
                            <span className="font-bold text-white">{payload[0].value}</span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
            </BarChart>
          </ChartContainer>
          <div className="mt-4 flex items-center justify-end space-x-2 text-sm text-navyblue/70">
            <Clock className="h-4 w-4" />
            <span>{currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

