import {
	Card,
	CardTitle,
	CardHeader,
	CardContent,
} from '@/components/ui/card'

const MetricsCard = ({ metric }) => {
	const Icon = metric?.icon
	return (
		<Card className='transition-shadow hover:shadow-md'>
			<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
				<CardTitle className='text-sm font-medium text-muted-foreground'>
					{metric?.title}
				</CardTitle>
				{
					Icon && (
						<Icon className='h-5 w-5 text-muted-foreground'/>
					)
				}
			</CardHeader>
			<CardContent>
				<div className='text-3xl font-bold'>
					{metric?.value}
				</div>
				{
					metric?.trend && (
						<p className='text-xl'>{metric?.trend}</p>
					)
				}
				{
					metric?.subtitle && (
						<p>{metric?.subtitle}</p>
					)
				}
			</CardContent>
		</Card>
	)
}

export default MetricsCard