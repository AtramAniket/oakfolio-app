import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
	const navigateTo = useNavigate()

	useEffect(() => {
		navigateTo('/login')
	}, [])

	return null
}

export default LandingPage