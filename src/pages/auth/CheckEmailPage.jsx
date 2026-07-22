import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import { MailCheck } from 'lucide-react'
import { useNavigate } from 'react-router'

const CheckEmailPage = () => {
  // TODO: Replace with actual email from state or query params
  const email = 'johndoe@example.com';

  const navigateTo = useNavigate()

	const handleLoginPageRedirect = () => {
		navigateTo('/login')
	}

  return (
    <div className='flex min-h-screen items-center justify-center px-4'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-4 text-center'>
          <MailCheck className='mx-auto h-12 w-12 text-primary' />

          <CardTitle>Check your email</CardTitle>

          <CardDescription>
            We've sent a verification link to
          </CardDescription>

          <p className='font-medium break-all'>{email}</p>
        </CardHeader>

        <CardContent className='space-y-6'>
          <p className='text-center text-sm text-muted-foreground'>
            Click the verification link in the email to continue setting up your
            Oakfolio account.
          </p>

          <Button variant='outline' className='w-full'>
            Resend verification email
          </Button>
        </CardContent>

        <CardFooter className='justify-center'>
          <Button variant='link' type='button' onClick={handleLoginPageRedirect}>
            Back to Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CheckEmailPage