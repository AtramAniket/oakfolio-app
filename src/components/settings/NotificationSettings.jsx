import { useState } from 'react'

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
} from '@/components/ui/card'

import { Bell } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const NotificationSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true)

  return (
    <Card className="overflow-hidden p-0" >
      <CardHeader className='border-b bg-muted/50 px-6 py-4'>
    	  <div className='flex items-center gap-3'>
    	    <Bell className='h-7 w-7' />

    	    <div>
    	      <CardTitle>Notifications</CardTitle>

    	      <p className='mt-1 text-sm text-muted-foreground'>
    	        Manage how Oakfolio keeps you informed.
    	      </p>
    	    </div>
    	  </div>
    	</CardHeader>
      <CardContent>
        <div className='flex items-center justify-between gap-4'>
          <div className='space-y-1'>
            <Label htmlFor='email-notifications'>
              Email notifications
            </Label>

            <p className='text-sm text-muted-foreground'>
              Receive important portfolio and account updates by email.
            </p>
          </div>

          <Switch
            id='email-notifications'
            checked={emailNotifications}
            onCheckedChange={setEmailNotifications}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default NotificationSettings