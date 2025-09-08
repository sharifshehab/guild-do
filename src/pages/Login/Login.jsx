import Container from "../../components/Container"
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleSignIn from "../shared/GoogleSignIn";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";
// icons
import { TbLoader3 } from "react-icons/tb";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import SectionTitle from "../../components/SectionTitle";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { setLoading, handleEmailLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state ? location?.state : '/';

    const { errorToast } = useToast();
    const [loginLoading, setLoginLoading] = useState(false);

    // Handle Login Form
    const onSubmit = async (formData) => {
        setLoginLoading(true);
        try {
            await handleEmailLogin(formData.email, formData.password);
            reset();
            console.log(user);
            // navigate(from, { replace: true });
        } catch (error) {
            errorToast(`Login error: ${error.message}`)
        } finally {
            setLoading(false);
            setLoginLoading(false);
        }
    }

    // Handle Preset Admin Login
    const adminLogin = async () => {
        setLoginLoading(true);
        try {
            await handleEmailLogin("svshuvo696@gmail.com", "Arnshera@$00196");
            reset();
            navigate(location?.state ? location?.state : '/dashboard/admin-dashboard', { replace: true });
        } catch (error) {
            errorToast(`Login error: ${error.message}`)
        } finally {
            setLoading(false);
            setLoginLoading(false);
        }
    }

    // Handle Preset User Login
    const userLogin = async () => {
        setLoginLoading(true);
        try {
            await handleEmailLogin("danielwilson@gmail.com", "Daniel$006");
            reset();
            navigate(from, { replace: true });
        } catch (error) {
            errorToast(`Login error: ${error.message}`)
        } finally {
            setLoading(false);
            setLoginLoading(false);
        }
    }

    // Handle Preset Premium User Login
    const premiumUserLogin = async () => {
        setLoginLoading(true);
        try {
            await handleEmailLogin("ruekassen@gmail.com", "Ruekas$001");
            reset();
            navigate(from, { replace: true });
        } catch (error) {
            errorToast(`Login error: ${error.message}`)
        } finally {
            setLoading(false);
            setLoginLoading(false);
        }
    }



    return (
        <>
            <Helmet><title>GuildDo - Login</title></Helmet>
            <Container>
                <section className="w-full min-h-screen flex flex-col items-center justify-center py-5">

                    {/* title */}
                    <>
                        <SectionTitle title="login"></SectionTitle>
                    </>

                    {/* form area */}
                    <form className="mx-auto w-full md:w-1/2 bg-secondaryColor p-10" onSubmit={handleSubmit(onSubmit)}>

                        <div className="space-y-5">
                            <div className="flex flex-col gap-[5px] w-full">
                                <label className="relative">
                                    <input type="email"
                                        className="peer text-white bg-darkColor border-[#e5eaf2] border outline-none ps-28 pe-5 py-3 w-full focus:border-yellow-400 transition-colors duration-300"
                                        {...register("email", { required: "Email is required" })}
                                    />
                                    <span
                                        className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-yellow-400 peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                        Your email
                                    </span>
                                </label>
                                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                            </div> {/* name */}

                            <div className="flex flex-col gap-[5px] w-full">
                                <label className="relative">
                                    <input type="password"
                                        className="peer text-white bg-darkColor border-[#e5eaf2] border outline-none ps-28 pe-5 py-3 w-full focus:border-yellow-400 transition-colors duration-300"
                                        {...register("password", { required: "Password is required" })}
                                    />
                                    <span
                                        className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-yellow-400 peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                        Password
                                    </span>
                                </label>
                                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                            </div> {/* password */}
                        </div>

                        <button type="submit" className='py-3 px-4 font-semibold hover:text-slate-600 bg-yellow-400 outline-none mt-3 next-cut border-r-8 border-white hover:border-r-0 hover:border-l-8 transition-all duration-200'>{loginLoading ? <TbLoader3 size={22} className="animate-spin text-[#ffffff]" /> : 'Login'}</button>
                    </form>

                    {/* Preset credentials */}
                    <div className="my-10 space-y-5">
                        <h3 className="text-white text-2xl underline underline-offset-4 decoration-yellow-400 text-center">Demo Credentials</h3>
                        <div className="flex items-center flex-col md:flex-row justify-center gap-2">
                            {/* Admin */}
                            <button type="submit" className='py-3 px-4 font-semibold bg-yellow-400 outline-none prev-cut  border-l-8 border-white hover:border-r-8 hover:border-l-0 transition-all duration-200' onClick={adminLogin}>Login As Admin</button>

                            {/* Separator */}
                            <span className="w-px h-10 bg-white mx-2"></span>

                            {/* premium user */}
                            <button type="submit" className='py-3 px-4 font-semibold bg-yellow-400 outline-none title-cut border-x-8 border-white hover:opacity-85 transition-all duration-200' onClick={premiumUserLogin}>Login As Premium User</button>

                            {/* Separator */}
                            <span className="w-px h-10 bg-white mx-2"></span>

                            {/* user */}
                            <button type="submit" className='py-3 px-4 font-semibold bg-yellow-400 outline-none next-cut border-r-8 border-white hover:border-r-0 hover:border-l-8 transition-all duration-200' onClick={userLogin}>Login As User</button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        {/* Login and other sign-in methods */}
                        <div className="flex flex-col items-center justify-center mt-5 space-y-4">
                            <GoogleSignIn></GoogleSignIn>
                            <Link to="/register" className="text-white"> Don't have an account?{" "}<span className="text-yellow-400 hover:underline underline-offset-4 decoration-yellow-400 transition-all duration-700 ease-in-out">Register</span></Link>
                        </div>
                    </div>

                    <div className="section-title bg-yellow-400 inline-block cursor-pointer px-6 p-2 mt-10 title-cut hover:border-x-8 hover:bg-yellow-500 duration-300">
                        <Link to={'/'} className="text-darkColor font-bold">Go To Home Page</Link>
                    </div>

                    <Toaster />
                </section>
            </Container>
        </>
    );
};

export default Login;