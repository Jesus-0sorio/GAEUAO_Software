import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
	isAuthenticated: localStorage.getItem('token') ? true : false,
	error: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginSuccess: (state, action) => {
			console.log(action.payload)
			state.isAuthenticated = true;
			state.token = action.payload.token;
		},
		loginFail: (state, action) => {
			state.isAuthenticated = false;
			state.error = action.payload;
		},
		logout: (state) => {
			localStorage.removeItem('token');
			state.token = null;
			state.isAuthenticated = false;
			state.error = null;	
		},
		refreshToken: (state, action) => {
			state.token = action.payload;
		}
	},
});

export const { loginStart, loginSuccess, loginFail, logout, refreshToken } =
	authSlice.actions;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;