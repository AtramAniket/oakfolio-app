import { User } from 'lucide-react'

const UserNav = () => {
	return (
		<div>
			<button
        type='button'
        aria-label='User menu'
        className='rounded-full p-2 transition-colors hover:bg-muted'
    	>
      	<User className='h-5 w-5' />
    	</button>
		</div>
	)
}

export default UserNav