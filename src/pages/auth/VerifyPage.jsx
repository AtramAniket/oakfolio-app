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

import LoadingCard from '@/pages/auth/verify/LoadingCard'
import VerificationSuccessCard from '@/pages/auth/verify/VerificationSuccessCard'
import VerificationFailureCard from '@/pages/auth/verify/VerificationFailureCard'

import { useState, useEffect } from 'react'
import authService from '@/services/authService'
import { useNavigate, useSearchParams } from 'react-router'


const VerifyPage = () => {
	const navigateTo = useNavigate()
  const [searchParams] = useSearchParams()

  const token = searchParams.get('token', null)
  const [status, setStatus] = useState('loading')




  useEffect(()=>{
    if(!token){
      navigateTo('/register')
      return
    }
    verifyUserRegistrationToken()
  },[token])




  const verifyUserRegistrationToken = async () =>{
    setStatus('loading')

    try{

      const response = await authService.verify_token({
        verification_token: token,
      })

      if(response?.status === 'valid'){
        setStatus('success')

        setTimeout(() => {
          navigateTo('/set-password', {
          state: {
            token,
          }
        })
        }, 600)
      }
      else{
        setStatus('failure')
      }

    }
    catch(err){
      console.log(err)
    }
  }

  if(status === 'loading'){
    return <LoadingCard />
  }

  if(status === 'success'){
    return <VerificationSuccessCard />
  }

  return <VerificationFailureCard />

}

export default VerifyPage;