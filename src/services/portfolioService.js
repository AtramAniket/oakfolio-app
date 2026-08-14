import api from '@/api/api'

const portfolioService = {
	getPortfolios: async () => {
		const response = await api.get('/api/v1/stocks/portfolios')
		return response?.data
	},

    createNewPortfolio: async (data) => {
        const response = await api.post('/api/v1/stocks/portfolios', data)
        return response?.data
    },

    deletePortfolio: async (portfolio_id) => {
        const response = await api.delete(`/api/v1/stocks/portfolios/${portfolio_id}`)
        return response?.data
    },

    editPortfolio: async (portfolio_id, data) => { 
        const response = await api.put(`/api/v1/stocks/portfolios/${portfolio_id}`, data)
        return response?.data
    },

    getAllHoldings: async (portfolio_id) => {
        const response = await api.get(`/api/v1/stocks/portfolios/${portfolio_id}/holdings`)
        return response?.data
    },

    addStockToPortfolio: async (portfolio_id, data) => {
        const response = await api.post(`/api/v1/stocks/portfolios/${portfolio_id}/holdings`, data)
        return response?.data
    },

    deleteStockFromPortfolio: async (portfolio_id, holding_id) => {
        const response = await api.delete(`/api/v1/stocks/portfolios/${portfolio_id}/holdings/${holding_id}`)
        return response?.data
    },

    editStockInPortfolio: async (portfolio_id, holding_id, data) => {
        const response = await api.put(`/api/v1/stocks/portfolios/${portfolio_id}/holdings/${holding_id}`, data)
        return response?.data
    },
}

export default portfolioService