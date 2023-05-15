import React from "react";
import axios from "../../api/axios"
import { useDispatch } from "react-redux";
import { loginSuccess, loginFail, refreshToken } from "../../store/slices/auth/authSlice";


//Aún no funciona, para el futuro
export const useRefreshToken = () => {

    const dispatch = useDispatch();
    
    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true,
        });
        
        dispatch(refreshToken(response.data));

        return response.data;
    }

    return refresh;
}
