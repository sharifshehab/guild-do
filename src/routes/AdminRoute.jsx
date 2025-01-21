import useAdmin from '../API/useAdmin';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading ) {
        return <div className='min-h-screen flex items-center justify-center'>
            <span className='text-yellow-400'>Loading...</span>
            <span className="loading loading-ring loading-lg"></span>
        </div>                 
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={location.pathname} replace></Navigate>
};

export default AdminRoute;