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

const CheckEmailCard = ({
  email,
  onLogin,
  onResend,
  resendLoading = false,
}) => {
  return (
    <div className='flex min-h-screen items-center justify-center px-4'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-4 text-center'>
          <MailCheck className='mx-auto h-12 w-12 text-primary' />

          <CardTitle>Check your email</CardTitle>

          <CardDescription>
            We've sent a verification link to
          </CardDescription>

          <p className='break-all font-medium'>
            {email}
          </p>
        </CardHeader>

        <CardContent className='space-y-6'>
          <p className='text-center text-sm text-muted-foreground'>
            Click the verification link in the email to continue setting up your
            Oakfolio account.
          </p>

          <Button
            variant='outline'
            className='w-full'
            onClick={onResend}
            disabled={resendLoading}
          >
            {resendLoading
              ? 'Sending verification email...'
              : 'Resend verification email'}
          </Button>
        </CardContent>

        <CardFooter className='justify-center'>
          <Button
            type='button'
            variant='link'
            onClick={onLogin}
          >
            Back to Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CheckEmailCard