// app/dashboard/page.tsx
import ClientWrapper from "@/components/client-wrapper"

export default function Dashboard() {
  return (
    <div className="flex-1 overflow-auto">
      <ClientWrapper />
    </div>
  )
}