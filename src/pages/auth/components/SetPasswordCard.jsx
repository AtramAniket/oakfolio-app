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

const SetPasswordCard = ({
  password,
  onSubmit,
  error = '',
  onInputChange,
  confirmPassword,
  loading = false,
}) => {
  return (
    <div className='flex min-h-screen items-center justify-center px-4'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-2'>
          <CardTitle>Set your password</CardTitle>

          <CardDescription>
            Your email has been verified. Create a strong password to finish
            setting up your Oakfolio account.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={onSubmit}
            className='space-y-6'
          >
            <div className='space-y-2'>
              <Label htmlFor='password'>
                Password
              </Label>

              <Input
                required
                id='password'
                type='password'
                name='password'
                value={password}
                onChange={onInputChange}
                placeholder='Enter your password'
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='confirm-password'>
                Confirm Password
              </Label>

              <Input
                required
                type='password'
                id='confirm-password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={onInputChange}
                placeholder='Confirm your password'
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
              {loading
                ? 'Creating account...'
                : 'Create Account'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default SetPasswordCard