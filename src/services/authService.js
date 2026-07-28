import api from '@/api/api'

const authService = {
	register: async (data) => {
		const response = await api.post('/auth/register', data)
		return response?.data
	},

	verifyToken: async (data) => {
		const response = await api.post('/auth/verify-registration-token', data)
		return response?.data
	},

	login: async (data) => {
		const response = await api.post('/auth/login', data)
		return response?.data
	},

	getCurrentUser: async () => {
		const response = await api.get('/auth/me')
		return response?.data
	}
}

export default authService