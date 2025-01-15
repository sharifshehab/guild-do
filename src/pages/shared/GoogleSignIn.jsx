import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const GoogleSignIn = () => {
    const { handleGoogleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state ? location?.state : '/';

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(result => {
                const user = result.user;

                //  Save User info in the database
                const userInfo = {
                    name: user.displayName,
                    email: user.email,
                    badge: 'Bronze'
                }

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                    })
                navigate(from, { replace: true }); 
            }).catch((error) => {
                const errorMessage = error.message;
                // The email of the user's account used.
                console.error(error, errorMessage);
            });
    }
    return (
        <>
            <p className="text-xl font-medium text-primaryColor">Or sign in with</p>
            <button onClick={googleSignIn}
                className="border border-primaryColor  py-2 px-4 flex items-center gap-[10px] text-[1rem] text-white hover:bg-gray-50 hover:text-secondaryColor transition-all duration-200">
                <img src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png" alt="google logo"
                    className="w-[23px]" />
                Sign in with Google
            </button>
        </>
    );
};

export default GoogleSignIn;