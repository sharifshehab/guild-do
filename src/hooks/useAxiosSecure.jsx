import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import Loading from "../components/Loading";

const axiosSecure = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: 'https://guild-do-server.vercel.app',
    withCredentials: true,
});

const useAxiosSecure = () => {
    const auth = useAuth();

    if (auth?.loading) {
        return <Loading></Loading>
    }

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptor', error.response);
            if (error.response.status === 401 ) {
                window.location.href = "/login";
            } else if (error.response.status === 403) {
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