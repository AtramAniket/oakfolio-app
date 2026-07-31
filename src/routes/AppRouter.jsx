import {
	Route,
	Routes,
	BrowserRouter,
} from 'react-router-dom'


// Routes
import GuestRoutes from '@/routes/GuestRoutes'
import ProtectedRoutes from '@/routes/ProtectedRoutes'
import RegistrationRoutes from '@/routes/RegistrationRoutes'

// Layouts
import DashboardLayout from '@/layouts/DashboardLayout'

// Auth Pages
import LoginPage from '@/pages/auth/LoginPage'
import VerifyPage from '@/pages/auth/VerifyPage'
import RegisterPage from '@/pages/auth/RegisterPage'


// Landing Page
import LandingPage from '@/pages/public/LandingPage'

// Settings
import SettingsPage from '@/pages/settings/SettingsPage'

// Dashboard
import DashboardPage from '@/pages/dashboard/DashboardPage'

// Portfolio
import PortfolioPage from '@/pages/portfolio/PortfolioPage'

// Watchlist
import WatchlistPage from '@/pages/watchlist/WatchlistPage'





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
					<Route element={<DashboardLayout />}>
						<Route path='/settings' element={<SettingsPage />} />
						<Route path='/dashboard' element={<DashboardPage />} />
						<Route path='/portfolio' element={<PortfolioPage />} />
						<Route path='/watchlist' element={<WatchlistPage />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
		)
}

export default AppRouter