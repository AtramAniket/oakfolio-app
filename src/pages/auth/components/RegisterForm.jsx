import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const RegisterForm = ({
  email,
  error,
  loading,
  onLogin,
  onSubmit,
  onEmailChange,
}) => {
  return (
    <div className='flex min-h-screen items-center justify-center px-4'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-2'>
          <CardTitle>Create new account</CardTitle>

          <CardDescription>
            Enter your email address to receive a verification link.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className='space-y-6' onSubmit={onSubmit}>
            <div className='space-y-2'>
              <Label htmlFor='email'>
                Email
              </Label>

              <Input
                required
                id='email'
                type='email'
                value={email}
                placeholder='johndoe@example.com'
                onChange={onEmailChange}
              />
            </div>

            {error && (
              <p className='text-sm text-destructive'>
                {error}
              </p>
            )}

            <Button
              type='submit'
              className='w-full'
              disabled={loading}
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </Button>
          </form>
        </CardContent>

        <CardFooter className='justify-center text-sm text-muted-foreground'>
          Already have an account?

          <Button
            type='button'
            variant='link'
            className='px-1'
            onClick={onLogin}
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default RegisterForm