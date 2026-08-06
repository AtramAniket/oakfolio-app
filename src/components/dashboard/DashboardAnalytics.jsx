import AssetAllocation from '@/components/charts/dashboard/AssetAllocation'
import SectorAllocation from '@/components/charts/dashboard/SectorAllocation'
import PortfolioInsights from '@/components/charts/dashboard/PortfolioInsights'
import PortfolioPerformance from '@/components/charts/dashboard/PortfolioPerformance'

import { PORTFOLIO_HISTORY } from '@/constants/portfolioHistory'
import { SECTOR_ALLOCATION } from '@/constants/sectorAllocation'
import { PORTFOLIO_INSIGHTS } from '@/constants/portfolioInsights'
import { ASSET_ALLOCATION, ASSET_COLORS } from '@/constants/assetAllocation'

const DashboardAnalytics = () => {
	return (
		<>
			<section className='mt-8'>
				<div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
					<div className='col-span-2'>
						<PortfolioPerformance data={PORTFOLIO_HISTORY} />
					</div>
					<div className='col-span-1'>
						<AssetAllocation data={ASSET_ALLOCATION} colors={ASSET_COLORS} />
					</div>
				</div>
			</section>

			<section className='mt-8'>
				<div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
					<div className='col-span-2'>
						<PortfolioInsights data={PORTFOLIO_INSIGHTS} />
					</div>
					<div className='col-span-1'>
						<SectorAllocation data = {SECTOR_ALLOCATION} />
					</div>
				</div>
			</section>
		</>
	)
}

export default DashboardAnalytics