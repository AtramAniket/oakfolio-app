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

import {useState} from 'react'
import { useNavigate } from 'react-router'
import useAuth from '@/hooks/useAuth'


const LoginPage = () => {

	const { login } = useAuth()

	const navigateTo = useNavigate()

	const [user, setUser] = useState({'email':'', 'password':''})

	const handleRegisterPageRedirect = () => {
		navigateTo('/register')
	}

	const handleInputChange = (event) => {
		const { name, value } = event.target

		setUser((prevUser)=>(
			{
				...prevUser,
				[name]: value
			}))
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		await login(user)
		navigateTo('/dashboard')
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
				    <form className="space-y-6" onSubmit={(e)=>handleSubmit(e)}>
				    		
				    		<div className="space-y-2">
				    			<Label htmlFor='email'>Email</Label>
				    			<Input
				    				required
				    				id='email'
				    				type='email'
				    				name='email'
				    				value={user.email}
				  					placeholder='johndoe@example.com'
				  					onChange={(e)=>handleInputChange(e)}
				    			/>
				    		</div>
				    		
				    		<div className="space-y-2">
				    			<Label htmlFor='password'>Password</Label>
				    			<Input
				    				required
				    				id='password'
				    				type='password'
				    				name='password'
				    				value={user.password}
				    				placeholder='Enter your password'
				    				onChange={(e)=>handleInputChange(e)}
				    			/>
				    		</div>
				    		
				    		<div className='flex justify-end'>
		              <Button variant='link' type='button' className='px-0'>
		                Forgot password?
		              </Button>
            		</div>

            		<Button 
            			type='submit'
            			className="w-full">
            				Login
            		</Button>
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