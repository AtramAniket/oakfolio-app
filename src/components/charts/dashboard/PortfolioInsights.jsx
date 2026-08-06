import {
	Card,
	CardTitle,
	CardHeader,
	CardContent,
	CardDescription,
} from '@/components/ui/card'

const PortfolioInsights = ( { data } ) => {
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
				<div className='h-80 rounded-md border border-dashed p-6 flex items-center'>
					<div className='space-y-5 w-full'>
					{
						data?.map((item, index)=>{

							const Icon = item?.icon
							
							return(
								
								<div className={`flex items-start gap-4 ${item?.color}`} key={item?.id}>
									
									<Icon className="h-5 w-5 shrink-0" />
									
									<p className='text-base leading-7'>{item?.message}</p>	
								
								</div>
								)
							})
					}
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export default PortfolioInsights