import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	consultancies: null
};

export const consultanciesSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setConsultancies: (state, action) => {
			state.consultancies = action.payload.consultancies;
		},
		clearConsultancies: (state, action) => {
			state.consultancies = null;
		},
    }
});

export const { setConsultancies, clearConsultancies } = consultanciesSlice.actions;
