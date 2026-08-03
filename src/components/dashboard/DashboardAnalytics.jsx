import AssetAllocation from '@/components/charts/dashboard/AssetAllocation'
import SectorAllocation from '@/components/charts/dashboard/SectorAllocation'
import PortfolioInsights from '@/components/charts/dashboard/PortfolioInsights'
import PortfolioPerformance from '@/components/charts/dashboard/PortfolioPerformance'

const DashboardAnalytics = () => {
	return (
		<>
			<section className='mt-8'>
				<div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
					<div className='col-span-2'>
						<PortfolioPerformance />
					</div>
					<div className='col-span-1'>
						<AssetAllocation />
					</div>
				</div>
			</section>

			<section className='mt-8'>
				<div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
					<div className='col-span-2'>
						<PortfolioInsights />
					</div>
					<div className='col-span-1'>
						<SectorAllocation />
					</div>
				</div>
			</section>
		</>
	)
}

export default DashboardAnalytics