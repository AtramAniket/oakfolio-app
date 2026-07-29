import { useState } from 'react'
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
  const [loading, setLoading] = useState(false)
  const [resendLoading, setResendLoading] = useState(false)

  const handleEmailInputChange = (event) => {
    setEmail(event.target.value)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    setError('')
    setLoading(true)

    try {
      await authService.register({
        email,
      })

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
      await authService.register({
        email,
      })

      setStep(REGISTER_STEPS.CHECK_EMAIL)
      // TODO:
      // await authService.resendVerificationEmail({ email })
    } catch (err) {
      console.error(err)
    } finally {
      setResendLoading(false)
    }
  }

  const handleLoginRedirect = () => {
    navigateTo('/login')
  }

  switch (step) {
    case REGISTER_STEPS.CHECK_EMAIL:
      return (
        <CheckEmailCard
          email={email}
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