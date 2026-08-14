import api from '@/api/api'

const authService = {
	getCurrentUser: async () => {
		const response = await api.get('/api/v1/auth/me')
		return response?.data
	},

	login: async (data) => {
		const response = await api.post('/api/v1/auth/login', data)
		return response?.data
	},

	register: async (data) => {
		const response = await api.post('/api/v1/auth/register', data)
		return response?.data
	},

	verifyToken: async (data) => {
		const response = await api.post('/api/v1/auth/verify-registration-token', data)
		return response?.data
	},

	createNewUser: async (data) => {
		const response = await api.post('/api/v1/auth/create_user', data)
		return response?.data
	},
}

export default authService