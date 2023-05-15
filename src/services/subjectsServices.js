import { api } from '../api/axios';

export const subjectsServices = {
	getAll: async () => {
		try {
			const response = await api.get(`/subject`);

			return response;
		} catch (error) {
			console.log(error.response.data);
		}
	},
}