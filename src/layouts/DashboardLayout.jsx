import { Outlet } from 'react-router-dom'

import AppTopbar from '@/components/layout/AppTopbar'
import AppSidebar from '@/components/layout/AppSidebar'

const DashboardLayout = () => {
	return (
		<div className='flex min-h-screen'>
			<AppSidebar />

			<div className='flex flex-1 flex-col'>
				<AppTopbar />

				<main className='flex-1 p-6'>
					<Outlet />
				</main>
			</div>
		</div>
)}

export default DashboardLayout