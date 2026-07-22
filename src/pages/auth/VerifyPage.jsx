import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import { useNavigate } from 'react-router'
import { CircleCheckBig } from 'lucide-react'

const VerifyPage = () => {

	const navigateTo = useNavigate()

	const handleLoginPageRedirect = () => {
		navigateTo('/login')
	}

  return (
    <div className='flex min-h-screen items-center justify-center px-4'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-4 text-center'>
          <CircleCheckBig className='mx-auto h-12 w-12 text-green-600' />

          <CardTitle>Email Verified</CardTitle>

          <CardDescription>
            Your email has been successfully verified.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className='text-center text-sm text-muted-foreground'>
            Your account is now ready to use. You can continue to the login page
            and sign in with your credentials.
          </p>
        </CardContent>

        <CardFooter className='justify-center'>
          <Button className='w-full' onClick={handleLoginPageRedirect}>
            Go to Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default VerifyPage;