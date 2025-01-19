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

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { setLoading, handleEmailLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state ? location?.state : '/';
    const { successToast, errorToast } = useToast();
    const [loginLoading, setLoginLoading] = useState(false);

    const onSubmit = async (formData) => {
        setLoginLoading(true);
        try {
            await handleEmailLogin(formData.email, formData.password);
            reset();
            successToast('Login successful');
            navigate(from, { replace: true });
        } catch (error) {
            errorToast(`Login error: ${error.message}`)
        } finally {
            setLoading(false);
            setLoginLoading(false);
        }

    }
    return (
        <Container>
            <section className="w-full min-h-screen flex flex-col items-center justify-center">

                {/* title */}
                <>
                    <SectionTitle title="login"></SectionTitle>
                </>

                {/* form area */}
                <form className="mx-auto w-1/2 bg-secondaryColor p-10" onSubmit={handleSubmit(onSubmit)}>

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

                    <button type="submit" className='py-3 px-4 font-semibold bg-yellow-400 outline-none mt-3 next-cut border-2 border-yellow-400 hover:border-white duration-300'>{loginLoading ? <TbLoader3 size={22} className="animate-spin text-[#ffffff]" /> : 'Login'}</button>
                </form>

                <div className="flex flex-col items-center">
                    {/* Login and other sign-in methods */}
                    <div className="flex flex-col items-center  justify-center mt-5 space-y-4">
                        <GoogleSignIn></GoogleSignIn>
                        <Link to="/register" className="text-white"> Don't have an account? <span className="text-gray-300 underline underline-offset-4 decoration-yellow-400">Register</span></Link>
                    </div>
                </div>


                <div className="section-title bg-yellow-400 inline-block px-6 p-2 mt-10 title-cut">
                    <Link to={'/'} className="text-darkColor font-bold">Go To Home Page</Link>
                </div>

                <Toaster />
            </section>
        </Container>
    );
};

export default Login;