import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'https://guild-do-server.vercel.app',
    withCredentials: true,
});

const useAxiosSecure = () => {
    const auth = useAuth();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            // console.log('error tracked in the interceptor', error.response);
            if (error.response.status === 403) {
                auth?.handleLogOut()
                    .then(() => {
                        window.location.href = "/login";
                    })
                    .catch((error) => {
                        console.error(error)
                    });
            }
            return Promise.reject(error);
        });

    }, []);

    return axiosSecure;
};

export default useAxiosSecure;