import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
} from '@/components/ui/card'

import { Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import DeleteAccountDialog from '@/components/settings/DeleteAccountDialog'

const DangerZone = () => {
  return (
    <Card className="overflow-hidden p-0" >
      <CardHeader className='border-b bg-muted/50 px-6 py-4'>
        <div className='flex items-center gap-3'>
          <Trash2 className='h-7 w-7 text-destructive' />

          <div>
            <CardTitle className='text-destructive'>
              Danger Zone
            </CardTitle>

            <p className='mt-1 text-sm text-muted-foreground'>
              Irreversible and destructive account actions.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className='pt-6'>
        <div className='flex items-center justify-between gap-6'>
          <div className='space-y-1'>
            <p className='font-medium'>
              Delete account
            </p>

            <p className='text-sm text-muted-foreground'>
              Permanently delete your Oakfolio account and all
              associated data.
            </p>
          </div>

          <DeleteAccountDialog />
        </div>
      </CardContent>
    </Card>
  )
}

export default DangerZone