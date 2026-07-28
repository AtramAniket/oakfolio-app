import { Outlet, Navigate } from 'react-router-dom'
import LoadingPage from '@/pages/common/LoadingPage'
import useAuth from '@/hooks/useAuth'

const GuestRoutes = () => {
	const { loading, isAuthenticated } = useAuth()

	if(loading){
		return <LoadingPage message='Restoring your session...' />
	}

	if(isAuthenticated){
		return <Navigate to='/dashboard' replace />
	}
	return <Outlet />
}

export default GuestRoutes