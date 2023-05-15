import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {

    const { token } = useSelector((state) => state.auth);
    useEffect(() => {
        console.log(token);
    }, [token]);

    return token ? children : <Navigate to="/" />;
}