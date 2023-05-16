import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { NavBarStart } from './NavBarStart';

export const PrivateRoutes = ({ children }) => {
	const { token } = useSelector((state) => state.auth);
	useEffect(() => {
		console.log(token);
		if (!token) {
			<Navigate to='/' />;
		}
	}, [token]);

	return token ? (
		<>
			<NavBarStart />
			<Outlet />
		</>
	) : (
		<Navigate to='/' />
	);
};
