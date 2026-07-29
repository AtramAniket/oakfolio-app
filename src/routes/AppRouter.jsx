import {
	Route,
	Routes,
	BrowserRouter,
} from 'react-router-dom'


// Routes
import GuestRoutes from '@/routes/GuestRoutes'
import ProtectedRoutes from '@/routes/ProtectedRoutes'
import RegistrationRoutes from '@/routes/RegistrationRoutes'


// Auth Pages
import LoginPage from '@/pages/auth/LoginPage'
import VerifyPage from '@/pages/auth/VerifyPage'
import RegisterPage from '@/pages/auth/RegisterPage'


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
					<Route path='/register' element={<RegisterPage />} />
				</Route>
				<Route element={<RegistrationRoutes />}>
					<Route path='/verify' element={<VerifyPage />} />
				</Route>
				<Route element={<ProtectedRoutes />}>
					<Route path='/dashboard' element={<DashboardPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
		)
}

export default AppRouter