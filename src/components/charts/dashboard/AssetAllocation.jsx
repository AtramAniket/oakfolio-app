import {
	Pie,
	Cell,
	Tooltip,
	PieChart,
	ResponsiveContainer,
} from 'recharts'

import {
	Card,
	CardTitle,
	CardHeader,
	CardContent,
	CardDescription,
} from '@/components/ui/card'

import { useState } from 'react'

const AssetAllocation = ({ data, colors }) => {
	const [activeIndex, setActiveIndex] = useState(0)
	
	const handlePieEnter = (_, index) => {
		setActiveIndex(index)
	}
	
	return (
		<Card className='transition-shadow hover:shadow-md'>
			<CardHeader>
				<CardTitle className='text-lg'>
					Asset Allocation
				</CardTitle>
				<CardDescription className='text-sm font-medium text-muted-foreground'>
					Portfolio distribution by holding
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className='h-80 rounded-md border border-dashed'>
					<ResponsiveContainer 
						width='100%'
						height='100%'
					>
						<PieChart width='100%' >
							<Pie
								data={data}
								dataKey='value'
								paddingAngle={3}
    						cornerRadius={6}
								outerRadius={'80%'}
								innerRadius={'60%'}
    						activeIndex={activeIndex}
    						className='cursor-pointer'
    						onMouseEnter={handlePieEnter}
							>
								{data?.map((_, index) => (
                    <Cell 
                    	key={`cell-${index}`}
                    	fill={colors[index % colors.length]}
                    />
                ))}
							</Pie>
							<Tooltip />
						</PieChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	)
}

export default AssetAllocation