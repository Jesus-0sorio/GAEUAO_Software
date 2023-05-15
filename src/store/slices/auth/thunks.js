import { api } from '../../../api/axios';
import {
	loginStart,
	loginSuccess,
	loginFail,
	logout,
	refreshToken,
} from './authSlice';
import { startLoading, stopLoading } from '../loadingSlice';

export const login = (email, password) => {
	return async (dispatch, getState) => {
		try {
			dispatch(startLoading());

			const response = await api.post('/auth/login', { email, password });
			localStorage.setItem('token', JSON.stringify(response.data));

			dispatch(
				loginSuccess({
					token: response.data,
				})
			);
			dispatch(stopLoading());
		} catch (error) {
			console.log(error);
			dispatch(loginFail(error.message));
		} 
	};
};
