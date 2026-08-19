import { Bell, Check, Circle } from 'lucide-react'

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover'

import { Button } from '@/components/ui/button'
import { notifications } from '@/constants/notifications'
const NotificationBell = () => {
  const unreadCount = notifications.filter(
    (notification) => !notification.isRead
  ).length

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant='ghost'
            size='icon'
            className='relative'
            aria-label='Notifications'
          >
            <Bell className='h-5 w-5' />

            {unreadCount > 0 && (
              <span className='absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-destructive' />
            )}
          </Button>
        }
      />

      <PopoverContent
        align='end'
        className='w-[380px] p-0'
      >
        <div className='flex items-center justify-between border-b px-4 py-3'>
          <div>
            <h3 className='font-semibold'>
              Notifications
            </h3>

            {unreadCount > 0 && (
              <p className='text-xs text-muted-foreground'>
                {unreadCount} unread
              </p>
            )}
          </div>

          {unreadCount > 0 && (
            <Button
              variant='ghost'
              size='sm'
              className='text-xs'
            >
              <Check className='mr-1.5 h-3.5 w-3.5' />
              Mark all as read
            </Button>
          )}
        </div>

        <div className='max-h-[420px] overflow-y-auto'>
          {notifications.length === 0 ? (
            <div className='flex min-h-[180px] items-center justify-center px-4 text-sm text-muted-foreground'>
              No new notifications
            </div>
          ) : (
            <div className='divide-y'>
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex gap-3 px-4 py-4 transition-colors hover:bg-muted/50 ${
                    !notification.isRead
                      ? 'bg-muted/20'
                      : ''
                  }`}
                >
                  <div className='pt-1'>
                    {!notification.isRead ? (
                      <Circle className='h-2.5 w-2.5 fill-primary text-primary' />
                    ) : (
                      <div className='h-2.5 w-2.5' />
                    )}
                  </div>

                  <div className='min-w-0 flex-1'>
                    <p className='text-sm font-medium'>
                      {notification.title}
                    </p>

                    <p className='mt-1 text-sm text-muted-foreground'>
                      {notification.message}
                    </p>

                    <p className='mt-2 text-xs text-muted-foreground'>
                      {notification.createdAt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default NotificationBell