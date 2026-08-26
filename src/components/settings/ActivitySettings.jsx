import {
  Info,
  Plus,
  Trash2,
  Activity,
  Settings2,
  CircleCheck,
  LockKeyhole,
} from 'lucide-react'

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
} from '@/components/ui/card'

import { useState, useEffect } from 'react'
import activityService from '@/services/activityService'

const activityIcons = {
  system: Info,
  insight: CircleCheck,
  security: LockKeyhole,
  portfolio_update: Activity,
  account_settings: Settings2,
}

const ActivitySettings = () => {

  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(false)

  const loadActivities = async () => {
    setLoading(true)
    try{
      const response = await activityService.getAllActivities()

      setActivities(response?.activities)

    }
    catch(error){
      console.error(error)
    }
    finally{
      setLoading(false)
    }
  }

  const formatActivityDate = (date) => {
    return new Date(date).toLocaleString([], {
      dateStyle: 'medium',
      timeStyle: 'short',
    })
  }
  
  useEffect(() => {
    
    loadActivities()

  }, [])
  return (
    <Card className='min-h-[300px] overflow-hidden p-0' >
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
        {loading ? (
          <div className='flex min-h-[200px] items-center justify-center'>
            <p className='text-sm text-muted-foreground'>
              Loading activity...
            </p>
          </div>
        ) : activities?.length === 0 ? (
          <div className='flex min-h-[200px] flex-col items-center justify-center text-center'>
            <Activity className='mb-3 h-10 w-10 text-muted-foreground' />

            <p className='text-sm font-medium'>
              No activity yet
            </p>

            <p className='mt-1 max-w-sm text-sm text-muted-foreground'>
              Important actions and changes to your Oakfolio account will appear here.
            </p>
          </div>
        ) : (
          <div className='max-h-[400px] overflow-y-auto pr-2'>
            <div className='space-y-6 pb-4'>
              {activities.map((activity) => {
                const Icon = activityIcons[activity.type] || Info

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
                          {formatActivityDate(activity.created_at)}
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
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default ActivitySettings