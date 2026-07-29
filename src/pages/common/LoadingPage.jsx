import Spinner from '@/components/common/Spinner'

const LoadingPage = ({ 
	message='Restoring your session...'
}) => {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center bg-background px-6'>
			<h2 className='mt-6 text-lg font-medium text-foreground'>
				{message}
			</h2>

			<p className='mt-2 text-sm text-muted-foreground'>
				Oakfolio
			</p>

			<p className='text-xs text-muted-foreground'>
				Secure Portfolio Tracking
			</p>
		</div>
	)
}

export default LoadingPage