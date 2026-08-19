import { Monitor, Smartphone, Tablet } from 'lucide-react'

import { Button } from '@/components/ui/button'

const sessions = [
  {
    id: 1,
    device: 'Firefox',
    operatingSystem: 'Linux',
    lastActive: 'Just now',
    current: true,
    icon: Monitor,
  },
  {
    id: 2,
    device: 'Chrome',
    operatingSystem: 'Windows',
    lastActive: '2 hours ago',
    current: false,
    icon: Monitor,
  },
  {
    id: 3,
    device: 'Safari',
    operatingSystem: 'iPhone',
    lastActive: 'Yesterday',
    current: false,
    icon: Smartphone,
  },
]

const ActiveSessions = () => {
  return (
    <div className='space-y-4'>

      <div className='flex items-center justify-between gap-4'>
        <div>
          <p className='font-medium'>Active sessions</p>

          <p className='text-sm text-muted-foreground'>
            Devices where you're currently signed in.
          </p>
        </div>

        <Button
          variant='outline'
          size='sm'
          disabled={sessions.filter((session) => !session.current).length === 0}
        >
          Sign out all other sessions
        </Button>
      </div>

      <div className='space-y-3'>
        {sessions.map((session) => {
          const Icon = session.icon

          return (
            <div
              key={session.id}
              className='flex items-center justify-between rounded-lg border p-4'
            >
              <div className='flex items-center gap-3'>

                <Icon className='h-5 w-5 text-muted-foreground' />

                <div>
                  <div className='flex items-center gap-2'>
                    <p className='text-sm font-medium'>
                      {session.device} · {session.operatingSystem}
                    </p>

                    {session.current && (
                      <span className='rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary'>
                        Current
                      </span>
                    )}
                  </div>

                  <p className='text-xs text-muted-foreground'>
                    Last active: {session.lastActive}
                  </p>
                </div>

              </div>

              {!session.current && (
                <Button variant='ghost' size='sm'>
                  Sign out
                </Button>
              )}
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default ActiveSessions