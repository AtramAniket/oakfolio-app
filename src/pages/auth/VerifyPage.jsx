import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import { useState, useEffect } from 'react'
import { CircleCheckBig } from 'lucide-react'
import authService from '@/services/authService'
import { useNavigate, useSearchParams } from 'react-router'


const VerifyPage = () => {
	const navigateTo = useNavigate()
  const [searchParams] = useSearchParams()

  const token = searchParams.get('token')
  const [loading, setLoading] = useState(false)




  useEffect(()=>{
    if(!token){
      navigateTo('/register')
      return
    }
    verifyUserRegistrationToken()
  },[token])




  const verifyUserRegistrationToken = async () =>{
    setLoading(true)

    try{

      const response = await authService.verify_token({
        verification_token: token,
      })

      if(response?.token_valid){
        navigateTo('/set-password', {
        state: {
          token,
        }
      })
      }
      else{
        navigateTo('/register')
      }

    }
    catch(err){
      console.log(err)
    }
    finally {
      setLoading(false)
    }

  }

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