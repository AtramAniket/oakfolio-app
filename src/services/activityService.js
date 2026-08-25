import api from '@/api/api'

const activityService = {
	getAllActivities: async () => {
		const response = await api.get('/api/v1/activities')
		return response?.data
	},
}

export default activityService