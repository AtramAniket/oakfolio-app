import {
  Trophy,
  ArrowUp,
  ArrowDown,
  TrendingUp,
} from 'lucide-react'

export const PORTFOLIO_INSIGHTS = [
  {
    id: 1,
    icon: TrendingUp,
    color: "text-green-600",
    message: "Portfolio gained ₹8,540 (+0.67%) today.",
  },
  {
    id: 2,
    icon: ArrowUp,
    message: "TCS contributed the highest gain.",
  },
  {
    id: 3,
    icon: ArrowDown,
    message: "Reliance declined 1.3%.",
  },
  {
    id: 4,
    icon: Trophy,
    color: "text-amber-500",
    message: "Outperformed Nifty 50 by 0.42%.",
  },
]