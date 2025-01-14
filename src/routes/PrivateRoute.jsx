import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className='min-h-screen flex items-center justify-center'>
            <span className='text-primaryColor'>Loading...</span>
            <span className="loading loading-ring loading-lg"></span>
        </div>                 
    }

    if (user && user?.uid) {
        return children;
    }
    return <Navigate to="/login" state={location.pathname} replace></Navigate>
};

export default PrivateRoute;