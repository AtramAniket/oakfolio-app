import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import AppTopbar from '@/components/layout/AppTopbar'
import AppSidebar from '@/components/layout/AppSidebar'

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

const DashboardLayout = () => {
	

	return (
		<SidebarProvider defaultOpen>
			<AppSidebar   />

			<SidebarInset>
				<AppTopbar />

				<main className='flex-1 p-6'>
					<Outlet />
				</main>
			</SidebarInset>
		</SidebarProvider>
)}

export default DashboardLayout