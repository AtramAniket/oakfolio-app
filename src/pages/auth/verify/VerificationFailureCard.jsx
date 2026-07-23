import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardDescription,
} from '@/components/ui/card'

import { Button } from '@/components/ui/button'
import { CircleX } from 'lucide-react'

import { useNavigate } from 'react-router'

const VerificationFailureCard = () => {
  const navigate = useNavigate()

  return (
    <div className='flex min-h-screen items-center justify-center px-4'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-4 text-center'>
          <CircleX className='mx-auto h-12 w-12 text-destructive' />

          <CardTitle>Verification Failed</CardTitle>

          <CardDescription>
            This verification link is no longer valid or expired.
            <br />
            Please register again to receive a new verification email.
          </CardDescription>
        </CardHeader>

        <CardFooter>
          <Button
            className='w-full'
            onClick={() => navigate('/register')}
          >
            Register Again
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default VerificationFailureCard