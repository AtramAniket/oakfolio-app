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

import { useState } from 'react'
import { useNavigate } from 'react-router'
import authService  from '@/services/authService'


const RegisterPage = () => {

	const navigateTo = useNavigate()

	const [error, setError] = useState('')
	const [email, setEmail] = useState('')
	const [loading, setLoading] = useState(false)

	const handleFormSubmit = async (event) => {
		event.preventDefault()
		
		setLoading(true)

		try{

			const response = await authService.register({
				email,
			})

			navigateTo('/check-email', {
				state: {
					email,
					response,
				},
			})
		}
		catch(err){
			setError(
				err.response?.data?.detail ??
				'Something went wrong. Please try again' 
			)
		}
		finally{
			setLoading(false)
		}
	}

	const handleEmailInputChange = (event) => {
		const { value } = event.target
		setEmail(value)
	}

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
				    				value={email}
				  					placeholder='johndoe@example.com'
				  					onChange={(event) => handleEmailInputChange(event)}
				    			/>
				    		</div>

				    		{
				    			error && (
				    				<p className='text-sm text-destructive'>
				    					{error}
				    				</p>
				    			)
				    		}

				    		<Button 
				    			type='submit'
				    			disabled={loading}
				    			className="w-full"
				    			onClick={(event) => handleFormSubmit(event)}
				    		>
				    			{loading ? 'Creating account...' : 'Create Account'}
				    		</Button>
				    </form>
				  </CardContent>
				  <CardFooter className="justify-center text-sm text-muted-foreground">
          	Already have an account?
          	<Button 
          		variant="link" type="button" onClick={handleLoginPageRedirect} className="px-1">
            	Login
          	</Button>
        	</CardFooter>
				</Card>
			</div>
		</>
		)
}

export default RegisterPage