import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});

const useAxiosSecure = () => {
    const auth = useAuth();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptor', error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                
                console.log('logout the user');
                window.location.href = "/login";

                // data?.handleLogOut()
                //     .then(() => {
                //         navigate('/login');     
                //     })
                //     .catch((error) => {
                //         console.error(error)
                //     });
            }
            return Promise.reject(error);
        });

    }, []);

    return axiosSecure;
};

export default useAxiosSecure;