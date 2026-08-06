import {
	Bar,
	Cell,
	XAxis,
	YAxis,
	Legend,
	Tooltip,
	BarChart,
	ResponsiveContainer,
} from 'recharts'

import {
	Card,
	CardTitle,
	CardHeader,
	CardContent,
	CardDescription,
} from '@/components/ui/card'

const SectorAllocation = ({ data }) => {
	return (
		<Card className='transition-shadow hover:shadow-md'>
			<CardHeader>
				<CardTitle className='text-lg'>
					Sector Allocation
				</CardTitle>
				<CardDescription className='text-sm font-medium text-muted-foreground'>
					Portfolio diversification across sectors
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className='h-80 rounded-md border border-dashed'>
					<ResponsiveContainer
						width='100%'
						height='100%'
					>
						<BarChart
							data={data}
							layout='vertical'
							barCategoryGap={2}
						>
							<XAxis type='number' hide/>

							<YAxis
								width={100}
								type='category'
								dataKey='sector'/>

							<Bar dataKey='allocation' radius={[0, 8, 8, 0]}/>
						</BarChart>	
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	)
}

export default SectorAllocation