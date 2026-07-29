import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

import LoadingPage from '@/pages/common/LoadingPage'
import SetPasswordCard from '@/pages/auth/components/SetPasswordCard'
import VerificationFailureCard from '@/pages/auth/components/VerificationFailureCard'
import RegistrationCompletedCard from '@/pages/auth/components/RegistrationCompletedCard'

import authService from '@/services/authService'

import { VERIFY_STEPS } from '@/constants/authFlow'

const VerifyPage = () => {
  const navigateTo = useNavigate()
  const [searchParams] = useSearchParams()

  const token = searchParams.get('token')

  const [step, setStep] = useState(VERIFY_STEPS.LOADING)

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const verifyRegistrationToken = async () => {
    try {
      const response = await authService.verifyToken({
        verification_token: token,
      })

      if (response.status === 'valid') {
        setStep(VERIFY_STEPS.PASSWORD)
      } else {
        setStep(VERIFY_STEPS.FAILURE)
      }
    } catch (err) {
      setStep(VERIFY_STEPS.FAILURE)
    }
  }

  useEffect(() => {
    if (!token) {
      navigateTo('/register', { replace: true })
      return
    }

    verifyRegistrationToken()
  }, [token])

  const handleInputChange = (event) => {
    const { name, value } = event.target

    if (name === 'password') {
      setPassword(value)
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value)
    }
  }

  const handlePasswordSubmit = async (event) => {
    event.preventDefault()

    setError('')
    setLoading(true)

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    try {
      await authService.createNewUser({
        token,
        password,
      })

      setStep(VERIFY_STEPS.COMPLETED)
    } catch (err) {
      setError(
        err.response?.data?.detail ??
        'Something went wrong. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  const handleLoginRedirect = () => {
    navigateTo('/login')
  }

  const handleRegisterRedirect = () => {
    navigateTo('/register')
  }

  switch (step) {
    case VERIFY_STEPS.LOADING:
      return <LoadingPage />

    case VERIFY_STEPS.PASSWORD:
      return (
        <SetPasswordCard
          password={password}
          confirmPassword={confirmPassword}
          loading={loading}
          error={error}
          onInputChange={handleInputChange}
          onSubmit={handlePasswordSubmit}
        />
      )

    case VERIFY_STEPS.COMPLETED:
      return (
        <RegistrationCompletedCard
          onLogin={handleLoginRedirect}
        />
      )

    case VERIFY_STEPS.FAILURE:
      return (
        <VerificationFailureCard
          onRegister={handleRegisterRedirect}
        />
      )

    default:
      return <LoadingPage />
  }
}

export default VerifyPage