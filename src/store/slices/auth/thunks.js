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
		dispatch(startLoading());

		try {
			const response = await api.post('/auth/login', { email, password });
            localStorage.setItem('token', response.data.access_token);

			dispatch(
				loginSuccess({
					token: `Bearer ${response.data.access_token}`,
				})
			);
		} catch (error) {
			dispatch(loginFail(error.message));
		} finally {
			dispatch(stopLoading());
		}
	};
};
