import { UserList } from "@/components/user-list"

export default function Dashboard() {
  return (
    <div className="flex-1 overflow-auto">
      <UserList />
    </div>
  )
}

