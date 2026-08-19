import { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const ChangePasswordDialog = () => {
  const [open, setOpen] = useState(false)

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    // Backend integration will be added later.

    console.log({
      currentPassword,
      newPassword,
      confirmPassword,
    })

    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={
        <Button variant='outline'>
          Change password
        </Button>
      } />

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change password</DialogTitle>

          <DialogDescription>
            Enter your current password and choose a new password.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className='space-y-5'>

          <div className='space-y-2'>
            <Label htmlFor='current-password'>
              Current password
            </Label>

            <Input
              id='current-password'
              type='password'
              value={currentPassword}
              onChange={(event) =>
                setCurrentPassword(event.target.value)
              }
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='new-password'>
              New password
            </Label>

            <Input
              id='new-password'
              type='password'
              value={newPassword}
              onChange={(event) =>
                setNewPassword(event.target.value)
              }
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='confirm-password'>
              Confirm new password
            </Label>

            <Input
              id='confirm-password'
              type='password'
              value={confirmPassword}
              onChange={(event) =>
                setConfirmPassword(event.target.value)
              }
            />
          </div>

          <DialogFooter>
            <Button type='submit'>
              Update password
            </Button>
          </DialogFooter>

        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ChangePasswordDialog