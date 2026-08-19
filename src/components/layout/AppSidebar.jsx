import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroupContent,
} from '@/components/ui/sidebar'

import OakfolioLogo from '@/components/common/OakfolioLogo'

import { NavLink } from 'react-router-dom'

import { SIDEBAR_NAVIGATION } from '@/constants/sidebar'

const AppSidebar = () => {
	return (
		<Sidebar collapsible='icon'>
		  <SidebarHeader className='border-b py-2'>
		    <SidebarMenu>
		      <SidebarMenuItem>
		        <SidebarMenuButton
		          size='lg'
		          className='pointer-events-none'
		        >
		        	<OakfolioLogo />
		        </SidebarMenuButton>
		      </SidebarMenuItem>
		    </SidebarMenu>
		  </SidebarHeader>
		  <SidebarContent>
		    <SidebarGroup className='pt-4'>
		    	<SidebarGroupLabel>
		    		Main
		    	</SidebarGroupLabel>
		    	<SidebarGroupContent>
		    		<SidebarMenu>
		    			{
		    				SIDEBAR_NAVIGATION.map((item)=>(
		    					<SidebarMenuItem key={item.id}>
		    						<SidebarMenuButton
		    							className='h-10'
		    							tooltip={item.label}
		    							render={
		    								<NavLink
		    								  to={item.path}
		    								  className={({ isActive }) =>
		    								    [
		    								      "flex items-center gap-3 w-full",
		    								      isActive && "font-semibold",
		    								    ]
		    								      .filter(Boolean)
		    								      .join(" ")
		    								  }
		    								>
		    								  <item.icon className="h-5 w-5 shrink-0" />
		    								  <span className="truncate text-sm">
		    								    {item.label}
		    								  </span>
		    								</NavLink>
		    							}
		    							/>
		    					</SidebarMenuItem>
		    				))
		    			}
		    		</SidebarMenu>
		    	</SidebarGroupContent>
		    </SidebarGroup>
		  </SidebarContent>
		  <SidebarFooter className='border-t'>
		    <SidebarMenu>
		      <SidebarMenuItem>
		        <SidebarMenuButton>

		          <div className='flex aspect-square size-8 items-center justify-center rounded-full bg-muted'>
		            DK
		          </div>

		          <div className='grid flex-1 text-left text-sm'>
		            <span className='font-medium'>
		              Daddy Kool 😎
		            </span>

		            <span className='text-xs text-muted-foreground'>
		              Free Plan
		            </span>
		          </div>

		        </SidebarMenuButton>
		      </SidebarMenuItem>
		    </SidebarMenu>
		  </SidebarFooter>
		</Sidebar>
	)
}

export default AppSidebar