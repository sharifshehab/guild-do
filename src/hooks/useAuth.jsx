import { useContext } from "react";
import { AuthContext } from "../contexts/ProviderContext";

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;