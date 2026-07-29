import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardContent,
  CardDescription,
} from '@/components/ui/card'

import { CircleCheckBig } from 'lucide-react'
import { Button } from '@/components/ui/button'

const RegistrationCompletedCard = ({
  onLogin,
}) => {
  return (
    <div className='flex min-h-screen items-center justify-center px-4'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-4 text-center'>
          <CircleCheckBig className='mx-auto h-12 w-12 text-primary' />

          <CardTitle>
            Account Created
          </CardTitle>

          <CardDescription>
            Your Oakfolio account has been created successfully.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className='text-center text-sm text-muted-foreground'>
            You can now sign in using your email address and password.
          </p>
        </CardContent>

        <CardFooter>
          <Button
            onClick={onLogin}
            className='w-full'
          >
            Continue to Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default RegistrationCompletedCard