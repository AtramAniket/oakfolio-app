import { LockKeyhole } from 'lucide-react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import ChangePasswordDialog from '@/components/settings/ChangePasswordDialog'
import ActiveSessions from '@/components/settings/ActiveSessions'

const SecuritySettings = () => {
  return (
    <Card className="overflow-hidden p-0" >
      <CardHeader className='border-b bg-muted/50 px-6 py-4'>
        <div className='flex items-center gap-3'>
          <LockKeyhole className='h-7 w-7' />

          <div>
            <CardTitle>Security</CardTitle>

            <p className='mt-1 text-sm text-muted-foreground'>
              Manage your password and active sessions.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className='space-y-8 pt-6'>

        {/* Password */}
        <div className='flex items-center justify-between gap-6'>
          <div className='space-y-1'>
            <p className='font-medium'>Password</p>

            <p className='text-sm text-muted-foreground'>
              Keep your account secure with a strong password.
            </p>
          </div>

          <ChangePasswordDialog />
        </div>

        <div className='border-t' />

        {/* Sessions */}
        <ActiveSessions />

      </CardContent>
    </Card>
  )
}

export default SecuritySettings