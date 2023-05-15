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

	getAllConsultancies: async (token) => {
		try {
			const response = await api.get('/monitoring', {
				headers: { Authorization: `Bearer ${token}` },
			});

			return response;
		} catch (error) {
			console.log(error);
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

	getHistoryConsultancies: async (id, token) => {
		try {
			const response = await api.get(`/monitoring/history/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			});

			return response;
		} catch (error) {
			console.log(error.response.data.message);
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

	getConsultanciesBySubject: async (id, token) => {
		try {
			const response = await api.get(`/monitoring/subject/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			return response;
		} catch (error) {
			console.log(error.response.data.message);
		}
	},

	updateConsultancy: async (id, data, token) => {
		try {
			const response = await api.patch(`/monitoring/${id}`, data, {
				headers: { Authorization: `Bearer ${token}` },
			});

			return response;
		} catch (error) {
			console.log(error.response.data.message);
		}
	},
};
