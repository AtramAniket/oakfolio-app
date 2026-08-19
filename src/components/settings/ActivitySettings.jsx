import {
  Activity,
  CircleCheck,
  Info,
  LockKeyhole,
  Plus,
  Settings2,
  Trash2,
} from 'lucide-react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const activities = [
  {
    id: 1,
    category: 'portfolio',
    type: 'stock_added',
    title: 'Stock added',
    description: 'AAPL was added to your Long Term portfolio.',
    source: 'user',
    createdAt: 'Today, 11:42 AM',
    icon: Plus,
  },
  {
    id: 2,
    category: 'account',
    type: 'username_changed',
    title: 'Profile updated',
    description: 'Your username was changed successfully.',
    source: 'user',
    createdAt: 'Today, 10:18 AM',
    icon: Settings2,
  },
  {
    id: 3,
    category: 'security',
    type: 'login',
    title: 'New login',
    description: 'Signed in from Firefox on Linux.',
    source: 'user',
    createdAt: 'Today, 9:52 AM',
    icon: LockKeyhole,
  },
  {
    id: 4,
    category: 'portfolio',
    type: 'stock_removed',
    title: 'Stock removed',
    description: 'TSLA was removed from your Growth portfolio.',
    source: 'user',
    createdAt: 'Yesterday, 4:31 PM',
    icon: Trash2,
  },
  {
    id: 5,
    category: 'portfolio',
    type: 'insight_generated',
    title: 'Portfolio insight generated',
    description: 'Your weekly portfolio insight is ready.',
    source: 'scheduler',
    createdAt: 'Yesterday, 9:00 AM',
    icon: CircleCheck,
  },
]

const ActivitySettings = () => {
  return (
    <Card className="overflow-hidden p-0" >
      <CardHeader className='border-b bg-muted/50 px-6 py-4'>
        <div className='flex items-center gap-3'>
          <Activity className='h-7 w-7' />

          <div>
            <CardTitle>Activity</CardTitle>

            <p className='mt-1 text-sm text-muted-foreground'>
              A history of important activity on your Oakfolio account.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className='pt-6'>
        <div className='space-y-6'>
          {activities.map((activity) => {
            const Icon = activity.icon

            return (
              <div
                key={activity.id}
                className='flex gap-4'
              >
                <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-muted/40'>
                  <Icon className='h-4 w-4 text-muted-foreground' />
                </div>

                <div className='min-w-0 flex-1'>
                  <div className='flex flex-wrap items-center justify-between gap-2'>
                    <p className='text-sm font-medium'>
                      {activity.title}
                    </p>

                    <span className='text-xs text-muted-foreground'>
                      {activity.createdAt}
                    </span>
                  </div>

                  <p className='mt-1 text-sm text-muted-foreground'>
                    {activity.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

export default ActivitySettings