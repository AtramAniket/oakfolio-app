export const notifications = [
  {
    id: 1,
    category: 'portfolio',
    type: 'stock_added',
    title: 'Stock added',
    message: 'AAPL was added to your Long Term portfolio.',
    createdAt: '2 minutes ago',
    isRead: false,
  },
  {
    id: 2,
    category: 'account',
    type: 'username_changed',
    title: 'Profile updated',
    message: 'Your username was changed successfully.',
    createdAt: '1 hour ago',
    isRead: false,
  },
  {
    id: 3,
    category: 'portfolio',
    type: 'insight_generated',
    title: 'Portfolio insight generated',
    message: 'Your weekly portfolio insight is ready.',
    createdAt: 'Yesterday',
    isRead: true,
  },
]