import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import { CircleCheckBig } from 'lucide-react'

const VerificationSuccessCard = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4 text-center">
          <CircleCheckBig className="mx-auto h-12 w-12 text-green-600" />

          <CardTitle>Email Verified</CardTitle>

          <CardDescription>
            Your email has been successfully verified.
            <br />
            Redirecting you to set your password...
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}

export default VerificationSuccessCard