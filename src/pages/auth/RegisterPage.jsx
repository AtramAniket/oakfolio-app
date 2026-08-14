import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

import RegisterForm from '@/pages/auth/components/RegisterForm'
import CheckEmailCard from '@/pages/auth/components/CheckEmailCard'

import authService from '@/services/authService'
import { REGISTER_STEPS } from '@/constants/authFlow'

const RegisterPage = () => {
  const navigateTo = useNavigate()

  const [step, setStep] = useState(REGISTER_STEPS.FORM)

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [expiresIn, setExpiresIn] = useState(0)
  const [loading, setLoading] = useState(false)
  const [canResend, setCanResend] = useState(false)
  const [resendLoading, setResendLoading] = useState(false)

  const handleEmailInputChange = (event) => {
    setEmail(event.target.value)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    setError('')
    setLoading(true)

    try {
      const response =  await authService.register({
        email,
      })
      
      setExpiresIn(response?.expires_in ?? 0)
      setCanResend(response?.can_resend ?? false)

      setStep(REGISTER_STEPS.CHECK_EMAIL)
    } catch (err) {
      setError(
        err.response?.data?.detail ??
        'Something went wrong. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  const handleResendVerificationEmail = async () => {
    setResendLoading(true)

    try {
     const response =  await authService.register({
        email,
      })

      setCanResend(response?.can_resend ?? false)
      setExpiresIn(response?.expires_in ?? 0)
      setStep(REGISTER_STEPS.CHECK_EMAIL)
    } catch (err) {
      console.error(err)
    } finally {
      setResendLoading(false)
      setCanResend(false)
    }
  }

  const handleLoginRedirect = () => {
    navigateTo('/login')
  }

  useEffect(() => {
    if (expiresIn <= 0) {
      setCanResend(true)
      return
    }

    const timer = setInterval(() => {
      setExpiresIn((previous) => previous - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [expiresIn])



  switch (step) {
    case REGISTER_STEPS.CHECK_EMAIL:
      return (
        <CheckEmailCard
          email={email}
          canResend={canResend}
          expiresIn={expiresIn}
          resendLoading={resendLoading}
          onLogin={handleLoginRedirect}
          onResend={handleResendVerificationEmail}
        />
      )

    default:
      return (
        <RegisterForm
          email={email}
          error={error}
          loading={loading}
          onSubmit={handleFormSubmit}
          onLogin={handleLoginRedirect}
          onEmailChange={handleEmailInputChange}
        />
      )
  }
}

export default RegisterPage