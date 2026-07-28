import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import Spinner from '@/components/common/Spinner'

const LoadingCard = () => {
  return (
     <div className="flex min-h-screen items-center justify-center px-4">
       <Card className="w-full max-w-md">
         <CardHeader className="space-y-4 text-center">
           <Spinner />

           <CardTitle>Verifying Email</CardTitle>

           <CardDescription>
             Please wait while we verify your registration link.
           </CardDescription>
         </CardHeader>
       </Card>
     </div>
   )
}

export default LoadingCard