import {
	Wallet,
	TrendingUp,
	IndianRupee,
	BriefcaseBusiness,
} from 'lucide-react'

export const PORTFOLIO_METRICS = [
	{
		icon: Wallet,
		trend: '+2.13%',
		value: '₹12,84,350',
		id:'portfolio-value',
		title: 'Portfolio Value',
		subtitle: 'Updated Just Now',
	},
	{
		trend: "+0.67%",
    value: "+₹8,540",
    icon: TrendingUp,
    id: "todays-change",
    title: "Today's Change",
    subtitle: "Compared to previous close",
  },
  {
    trend: "+12.47%",
    icon: IndianRupee,
    value: "+₹1,42,320",
    id: "total-gain-loss",
    title: "Total Gain / Loss",
    subtitle: "Since inception",
  },
  {
  	trend: null,
  	value: "18",
    id: "holdings",
    title: "Holdings",
    icon: BriefcaseBusiness,
    subtitle: "Across 8 sectors",
  },
]