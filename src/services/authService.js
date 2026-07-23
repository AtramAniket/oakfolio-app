import api from '@/api/api'

const authService = {
	register: async (data) => {
		const response = await api.post('/auth/register', data)
		return response?.data
	},

	verify_token: async (data) => {
		const response = await api.post('/auth/verify-registration-token', data)
	},

	login: async (data) => {
		const response = await api.post('/auth/login', data)
		return response?.data
	}
}

export default authService