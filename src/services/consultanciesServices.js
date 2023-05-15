import { api } from '../api/axios';

export const consultaciesServices = {
	get: async (id) => {
		try {
			const response = await api.get(`/monitoring/${id}`);

			return response;
		} catch (error) {
			console.log(error.response.data);
		}
	},

	getAllConsultancies: async () => {
		try {
			const response = await api.get('/monitoring');

			return response;
		} catch (error) {
			console.log(error.response.data.message);
		}
	},

	createConsultancy: async (data) => {
		try {
			const response = await api.post('/monitoring', data);

			return response;
		} catch (error) {
			console.log(error.response.data.message);
		}
	},

	getUpcomingConsultancies: async (id, token) => {
		try {
			const response = await api.get(`/monitoring/upcoming/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			});

			return response;
		} catch (error) {
			console.log(error.response.data.message);
		} finally {
		}
	},

	getConsultanciesByUser: async (id, token) => {
		try {
			const response = await api.get(`/monitoring/student/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			return response;
		} catch (error) {
			console.log(error.response.data.message);
		}
	},
};
