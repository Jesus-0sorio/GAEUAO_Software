import React, { useEffect } from "react";
import { axiosPrivate } from "../../api/axios";
import useRefreshToken from "./useRefreshToken";
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFail, logout, refreshToken } from "../../store/slices/auth/authSlice";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();

    useEffect(() => {
        const responseInterceptor = axiosPrivate.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;
                if (error.response.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;
                    const res = await refresh();
                    if (res) {
                        return axiosPrivate(originalRequest);
                    }
                }
                return Promise.reject(error);
            }
        )}, [refresh]);
}
