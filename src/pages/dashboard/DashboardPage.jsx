import PageHeader from '@/components/common/PageHeader'
import PortfolioOverview from '@/components/dashboard/PortfolioOverview'
import DashboardAnalytics from '@/components/dashboard/DashboardAnalytics'

const DashboardPage = () => {
	return (
		<>
			<PageHeader
				title='Dashboard'
				description='Monitor your portfolio performance and recent market activity.'
			/>

			<PortfolioOverview />

			<DashboardAnalytics />

		</>
		)
}

export default DashboardPage