import { api } from '../../../api/axios';
import { setConsultancies, clearConsultancies } from './consultanciesSlice';
import { startLoading, stopLoading } from '../loadingSlice';

export const getConsultancy = (id) => {
	return async (dispatch, getState) => {
		try {
			dispatch(startLoading());

			const response = await api.get(`/monitoring/${id}`);
			console.log(response.data);
			// dispatch(
			// 	loginSuccess({
			// 		token: `Bearer ${response.data.access_token}`,
			// 	})
			// );
		} catch (error) {
			console.log(error.response.data);
		} finally {
			dispatch(stopLoading());
		}
	};
};

export const getAllConsultancies = () => {
	return async (dispatch, getState) => {
		try {
			dispatch(startLoading());
			const response = await api.get('/monitoring');
			dispatch(stopLoading());

			dispatch(
				setConsultancies({
					consultancies: response.data,
				})
			);
		} catch (error) {
			console.log(error.response.data.message);
		}
	};
};

export const createConsultancy = (data) => {
	return async (dispatch, getState) => {
		try {
			dispatch(startLoading());
			const response = await api.post('/monitoring', data);
			dispatch(stopLoading());

			console.log(response.data);
		} catch (error) {
			console.log(error.response.data.message);
		}
	};
};

export const getUpcomingConsultancies = (id, token) => {
	return async (dispatch, getState) => {
		try {
			dispatch(startLoading());
			const response = await api.get(`/monitoring/upcoming/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			});

			dispatch(setConsultancies({ consultancies: response.data }));

			console.log(response.data);
		} catch (error) {
			console.log(error.response.data.message);
		} finally {
			dispatch(stopLoading());
		}
	};
};

export const getConsultanciesByUser = (id, token) => {
	return async (dispatch, getState) => {
		try {
			dispatch(startLoading());
			const response = await api.get(`/monitoring/student/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			});

			dispatch(setConsultancies({ consultancies: response.data }));
			dispatch(stopLoading());

			console.log(response.data);
		} catch (error) {
			console.log(error.response.data.message);
		}
	};
};
