import PageHeader from '@/components/common/PageHeader'
import MetricsCard from '@/components/dashboard/MetricsCard'

const DashboardPage = () => {
	return (
		<>
			<PageHeader
				title='Dashboard'
				description='Monitor your portfolio performance and recent market activity.'
			/>

			<MetricsCard title='Performance' />
		</>
		)
}

export default DashboardPage