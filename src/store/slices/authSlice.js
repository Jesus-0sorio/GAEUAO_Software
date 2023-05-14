import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	token: null,
	isAuthenticated: false,
	error: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginSuccess: (state, action) => {
			state.isAuthenticated = true;
			state.user = action.payload.user;
			state.token = action.payload.token;
		},
		loginFail: (state, action) => {
			state.isAuthenticated = false;
			state.error = action.payload;
		},
		logout: (state) => {
			state.user = null;
			state.token = null;
			state.isAuthenticated = false;
			state.error = null;	
		},
	},
});

export const { loginStart, loginSuccess, loginFail, logout } =
	authSlice.actions;
