import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card'

import { Button } from '@/components/ui/button'
import { CircleX } from 'lucide-react'

const VerificationFailureCard = ({
  onRegister,
}) => {
  return (
    <div className='flex min-h-screen items-center justify-center px-4'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-4 text-center'>
          <CircleX className='mx-auto h-12 w-12 text-destructive' />

          <CardTitle>
            Verification Failed
          </CardTitle>

          <CardDescription>
            This verification link is invalid or has expired.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className='text-center text-sm text-muted-foreground'>
            Please register again to receive a new verification email.
          </p>
        </CardContent>

        <CardFooter>
          <Button
            className='w-full'
            onClick={onRegister}
          >
            Create New Account
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default VerificationFailureCard