import { useNavigate } from 'react-router-dom'

import { User, LogOut, Settings } from 'lucide-react';

import { useAuth } from '@/hooks/useAuth';

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';

const UserNav = () => {

  const { logout } = useAuth();

  const navigateTo = useNavigate()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant='ghost' size='icon' aria-label='User menu' />}
      >
        <User className='h-5 w-5' />
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={logout}>
          <LogOut className='h-4 w-4' />
          Log out
        </DropdownMenuItem>

        <DropdownMenuItem onClick={()=> navigateTo('/settings')}>
          <Settings className='h-4 w-4' />
          Settings
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
