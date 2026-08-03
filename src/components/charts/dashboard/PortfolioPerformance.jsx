import {
	Card,
	CardTitle,
	CardHeader,
	CardContent,
	CardDescription,
} from '@/components/ui/card'

const PortfolioPerformance = () => {
	return (
		<Card className='transition-shadow hover:shadow-md'>
			<CardHeader>
				<CardTitle className='text-lg'>
					Portfolio Performance
				</CardTitle>
				<CardDescription className='text-sm font-medium text-muted-foreground'>
					Portfolio value over time
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className='h-80 rounded-md border border-dashed'>
					{/*TODO: ADD ASSET ALLOCATION CHART*/}
				</div>
			</CardContent>
		</Card>
	)
}

export default PortfolioPerformance