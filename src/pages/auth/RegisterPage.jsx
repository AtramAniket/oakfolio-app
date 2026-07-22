import {
  Card,
  CardTitle,
  CardAction,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

import { useNavigate } from 'react-router'


const RegisterPage = () => {

	const navigateTo = useNavigate()

	const handleLoginPageRedirect = () => {
		navigateTo('/login')
	}
	
	return (
		<>
			<div className='flex min-h-screen items-center justify-center px-4'>
				<Card className='w-full max-w-md'>
				  <CardHeader className="space-y-2">
				    <CardTitle>Create new account</CardTitle>
				    <CardDescription>Enter your email address to receive a verification link</CardDescription>
				  </CardHeader>
				  <CardContent>
				    <form className="space-y-6">
				    		<div className="space-y-2">
				    			<Label htmlFor='email'>Email</Label>
				    			<Input
				    				required
				    				id='email'
				    				type='email'
				  					placeholder='johndoe@example.com'
				    			/>
				    		</div>

				    		<Button className="w-full" type='submit'>Register</Button>
				    </form>
				  </CardContent>
				  <CardFooter className="justify-center text-sm text-muted-foreground">
          	Already have an account?
          	<Button variant="link" type="button" onClick={handleLoginPageRedirect} className="px-1">
            	Login
          	</Button>
        	</CardFooter>
				</Card>
			</div>
		</>
		)
}

export default RegisterPage