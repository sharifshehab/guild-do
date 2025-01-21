import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.init";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const AuthContext = createContext();
const auth = getAuth(app);

const ProviderContext = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [searchResult, setSearchResult] = useState([]);
    const axiosSecure = useAxiosSecure();


    const handleRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const setUserNameAndPhoto = (userName, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: photo
        });
    }

    const handleEmailLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const handleLogOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };

            if (currentUser?.email) {
                axiosSecure.post('/jwt', loggedUser)
                    .then(res => {
                        setLoading(false);
                    });
            } else {
                axiosSecure.post('/logout', {})
                    .then(res => {
                        setLoading(false);
                    });
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, [axiosSecure]);

    const authInfo = {
        user,
        loading,
        searchResult,
        setLoading,
        setSearchResult,
        handleRegister,
        setUserNameAndPhoto,
        handleEmailLogin,
        handleGoogleSignIn,
        handleLogOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ProviderContext;