import {
	Card,
	CardTitle,
	CardHeader,
	CardContent,
} from '@/components/ui/card'

const MetricsCard = ({
	icon,
	title,
	value,
	trend,
	subtitle
}) => {
	const Icon = icon
	return (
		<Card className='transition-shadow hover:shadow-md'>
			<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
				<CardTitle className='text-sm font-medium text-muted-foreground'>
					{title}
				</CardTitle>
				{
					Icon && (
						<Icon className='h-5 w-5 text-muted-foreground'/>
					)
				}
			</CardHeader>
			<CardContent>
				<div className='text-3xl font-bold'>
					{value}
				</div>
				{
					trend && (
						<p>{trend}</p>
					)
				}
				{
					subtitle && (
						<p>{subtitle}</p>
					)
				}
			</CardContent>
		</Card>
	)
}

export default MetricsCard