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


const LoginPage = () => {

	const navigateTo = useNavigate()

	const handleRegisterPageRedirect = () => {
		navigateTo('/register')
	}

	return (
		<>
			<div className='flex min-h-screen items-center justify-center px-4'>
				<Card className='w-full max-w-md'>
				  <CardHeader className="space-y-2">
				    <CardTitle>Login</CardTitle>
				    <CardDescription>Signin to your account</CardDescription>
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
				    		
				    		<div className="space-y-2">
				    			<Label htmlFor='password'>Password</Label>
				    			<Input
				    				required
				    				id='password'
				    				type='password'
				    				placeholder='Enter your password'
				    			/>
				    		</div>
				    		
				    		<div className="flex justify-end">
		              <Button variant="link" type="button" className="px-0">
		                Forgot password?
		              </Button>
            		</div>

            		<Button className="w-full" type='submit'>Login</Button>
				    </form>
				  </CardContent>
				  <CardFooter className="justify-center text-sm text-muted-foreground">
	          Don't have an account?
	          <Button variant="link" type="button" onClick={handleRegisterPageRedirect} className="px-1">
	            Register
	          </Button>
        	</CardFooter>
				</Card>
			</div>
		</>
		)
}

export default LoginPage