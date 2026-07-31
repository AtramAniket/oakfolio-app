import { NavLink } from 'react-router-dom'

import { SIDEBAR_NAVIGATION } from '@/constants/sidebar'

const AppSidebar = () => {
	return (
		<aside className='bg-primary text-white'>
			<section className='app-branding'>
				<img src='#' alt='oakfoli-brand-logo' />
			</section>
			<section className='app-navigation'>
				<nav className='sidebar-navigation'>
					<ul>
						{
							SIDEBAR_NAVIGATION.map((navItem) =>(
									<li key={navItem.id}>
										<NavLink 
											to={navItem.path} 
											className={({ isActive }) => 
											[
									       "flex items-center gap-3 justify-start rounded-md px-3 py-2 transition-colors",
									       isActive
									           ? "bg-primary text-primary-foreground"
									           : "text-muted-foreground hover:bg-muted",
											].join(" ")}
										>
											<navItem.icon className='h-5 w-5'/>
											{navItem.label}
										</NavLink>
									</li>
								))
						}
					</ul>
				</nav>
			</section>
		</aside>
	)
}

export default AppSidebar