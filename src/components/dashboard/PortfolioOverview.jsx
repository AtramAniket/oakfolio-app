import { PORTFOLIO_METRICS } from '@/constants/portfolioMetrics'
import MetricsCard from '@/components/dashboard/MetricsCard'

const PortfolioOverview = () => {
	return (
		<section>
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
				{
					PORTFOLIO_METRICS.map((metric) => (
						<MetricsCard metric={metric} key={metric.id} />
						))
				}
			</div>
		</section>
	)
}

export default PortfolioOverview