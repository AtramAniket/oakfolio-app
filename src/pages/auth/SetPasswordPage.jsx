import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'


const SetPasswordPage = () => {

	return (
		<>
			<div className='flex min-h-screen items-center justify-center px-4'>
				<Card className='w-full max-w-md'>
				  <CardHeader className="space-y-2">
				    <CardTitle>Set your password</CardTitle>
				    <CardDescription>Choose a strong password to secure your Oakfolio account.</CardDescription>
				  </CardHeader>
				  <CardContent>
				    <form className="space-y-6">
				    		
				    		<div className="space-y-2">
				    			<Label htmlFor='password'>Password</Label>
				    			<Input
				    				required
				    				id='password'
				    				type='password'
				  					placeholder='Enter your password'
				    			/>
				    		</div>
				    		
				    		<div className="space-y-2">
				    			<Label htmlFor='confirm-password'>Confirm Password</Label>
				    			<Input
				    				required
				    				type='password'
				    				id='confirm-password'
				    				placeholder='Confirm your password'
				    			/>
				    		</div>

            		<Button className="w-full" type='submit'>
            			Set Password
            		</Button>
				    </form>
				  </CardContent>
				</Card>
			</div>
		</>
		)
}

export default SetPasswordPage