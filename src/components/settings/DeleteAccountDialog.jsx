import { useState } from 'react'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'

import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import authService from '@/services/authService'


const DeleteAccountDialog = () => {
  const { logout } = useAuth()
  
  const [open, setOpen] = useState(false)

  const handleDeleteAccount = async () => {
    try{

      const response = await authService.deleteUser()

      console.log(response?.message)

      await logout()
    }
    catch(error){
      console.error(error)
    }
    finally{
      setOpen(false)
    }
  }


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button variant='destructive'>
            Delete account
          </Button>
        }
      />

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete your account?</DialogTitle>

          <DialogDescription>
            This will permanently delete your Oakfolio account
            and all associated data. This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            variant='outline'
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>

          <Button
            variant='destructive'
            onClick={handleDeleteAccount}
          >
            Delete account
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteAccountDialog