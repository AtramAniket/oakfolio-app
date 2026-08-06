import {
	Line,
	XAxis,
	YAxis,
	Legend,
	Tooltip,
	LineChart,
	CartesianGrid,
	ResponsiveContainer,
} from 'recharts'

import {
	Card,
	CardTitle,
	CardHeader,
	CardContent,
	CardDescription,
} from '@/components/ui/card'


const PortfolioPerformance = ({ data }) => {
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
					<ResponsiveContainer
						width='100%'
						height='100%'
					>
						<LineChart data={data}>
							<CartesianGrid
								vertical={false} 
								strokeDasharray='3 3'
							/>
				      <XAxis 
				      	dataKey='date'
				      	stroke='var(--color-text-3)'
				      />
				      <YAxis stroke='var(--color-text-3)' />
				      <Legend />
				      <Line
		            type='step'
		            dot={false}
		            strokeWidth={3}
		            stroke='#7f5cce'
		            name='Portfolio Value'
		            dataKey='portfolioValue'
	             />
	             <Tooltip dataKey='portfolioValue' />
						</LineChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	)
}

export default PortfolioPerformance