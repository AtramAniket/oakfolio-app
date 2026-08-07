import { Bell, Moon } from 'lucide-react'

import UserNav from '@/components/layout/UserNav'

import { SidebarTrigger } from '@/components/ui/sidebar'

const AppTopbar = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">

      <SidebarTrigger />

      <div className="flex items-center gap-2">

        <button
          type="button"
          className="rounded-md p-2 transition-colors hover:bg-muted"
          aria-label="Toggle theme"
        >
          <Moon className="h-5 w-5" />
        </button>

        <button
          type="button"
          className="rounded-md p-2 transition-colors hover:bg-muted"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>

        <UserNav />

      </div>

    </header>
  )
}

export default AppTopbar