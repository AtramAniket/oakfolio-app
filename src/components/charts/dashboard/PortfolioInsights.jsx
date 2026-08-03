import {
	Card,
	CardTitle,
	CardHeader,
	CardContent,
	CardDescription,
} from '@/components/ui/card'

const PortfolioInsights = () => {
	return (
		<Card className='transition-shadow hover:shadow-md'>
			<CardHeader>
				<CardTitle className='text-lg'>
					Portfolio Insights
				</CardTitle>
				<CardDescription className='text-sm font-medium text-muted-foreground'>
					AI generated daily portfolio summary
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

export default PortfolioInsights