import { Bell, Moon } from 'lucide-react'

import UserNav from '@/components/layout/UserNav'

import  NotificationBell from '@/components/settings/NotificationBell'
import  AppearenceSettings from '@/components/settings/AppearenceSettings'

import { SidebarTrigger } from '@/components/ui/sidebar'


const AppTopbar = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">

      <SidebarTrigger />

      <div className="flex items-center gap-2">

        <AppearenceSettings />

      
        <NotificationBell />
        

        <UserNav />

      </div>

    </header>
  )
}

export default AppTopbar