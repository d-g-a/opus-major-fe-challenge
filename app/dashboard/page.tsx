// app/(dashboard)/page.tsx
import dynamic from 'next/dynamic'

// Dynamically import the UserList with no SSR
const UserList = dynamic(() => import('@/components/user-list').then(mod => mod.UserList), {
  ssr: false,
  loading: () => <div>Loading...</div>
})

export default function Dashboard() {
  return (
    <div className="flex-1 overflow-auto">
      <UserList />
    </div>
  )
}