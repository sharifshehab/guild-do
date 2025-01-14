import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const ProviderContext = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

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
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, []);

    const authInfo = {
        user,
        loading,
        setLoading,
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