import {
	Route,
	Routes,
	BrowserRouter,
} from 'react-router-dom'


// Routes
import GuestRoutes from '@/routes/GuestRoutes'
import PublicRoutes from '@/routes/PublicRoutes'
import ProtectedRoutes from '@/routes/ProtectedRoutes'


// Auth Pages
import LoginPage from '@/pages/auth/LoginPage'
import VerifyPage from '@/pages/auth/VerifyPage'
import RegisterPage from '@/pages/auth/RegisterPage'
import CheckEmailPage from '@/pages/auth/CheckEmailPage'
import SetPasswordPage from '@/pages/auth/SetPasswordPage'


// Landing Page
import LandingPage from '@/pages/public/LandingPage'


// Dashboard
import DashboardPage from '@/pages/dashboard/DashboardPage'



const AppRouter = () => {
	return(
		<BrowserRouter>
			<Routes>

				<Route path='/' element={<LandingPage />} />

				<Route element={<GuestRoutes />}>
					<Route path='/login' element={<LoginPage />} />
					<Route path='/verify' element={<VerifyPage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/check-email' element={<CheckEmailPage />} />
					<Route path='/set-password' element={<SetPasswordPage />} />
				</Route>
				<Route element={<PublicRoutes />}>
					
				</Route>
				<Route element={<ProtectedRoutes />}>
					<Route path='/dashboard' element={<DashboardPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
		)
}

export default AppRouter