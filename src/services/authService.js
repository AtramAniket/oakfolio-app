import api from '@/api/api'

const authService = {
	getCurrentUser: async () => {
		const response = await api.get('/auth/me')
		return response?.data
	},

	login: async (data) => {
		const response = await api.post('/auth/login', data)
		return response?.data
	},

	register: async (data) => {
		const response = await api.post('/auth/register', data)
		return response?.data
	},

	verifyToken: async (data) => {
		const response = await api.post('/auth/verify-registration-token', data)
		return response?.data
	},

	createNewUser: async (data) => {
		const response = await api.post('/auth/create_user', data)
		return response?.data
	},
}

export default authService