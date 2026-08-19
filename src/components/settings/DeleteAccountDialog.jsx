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

import { Button } from '@/components/ui/button'

const DeleteAccountDialog = () => {
  const [open, setOpen] = useState(false)

  const handleDelete = () => {
    // TODO: ADD BACK-END LOGIC
    console.log('Delete account')

    setOpen(false)
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
            onClick={handleDelete}
          >
            Delete account
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteAccountDialog