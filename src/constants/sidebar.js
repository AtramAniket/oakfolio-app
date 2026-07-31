import { LayoutDashboard, BriefcaseBusiness, Star, Settings } from 'lucide-react'

export const SIDEBAR_NAVIGATION = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    path: '/portfolio',
    icon: BriefcaseBusiness,
  },
  {
    id: 'watchlist',
    label: 'Watchlist',
    path: '/watchlist',
    icon: Star,
  },
  {
    id: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: Settings,
  },
]