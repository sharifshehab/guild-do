import Container from "../../components/Container"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import GoogleSignIn from "../shared/GoogleSignIn";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = async (formData) => {
        console.log(formData)
    }
    return (
        <Container>
            <section className="w-full">

                {/* title */}
                <div className="w-full flex flex-col items-center justify-center">
                    <h1 className="text-[2rem] font-bold text-primary leading-[36px]">Login</h1>
                </div>

                {/* form area */}
                <form className="w-full mt-12 bg-secondaryColor p-10" onSubmit={handleSubmit(onSubmit)}>

                    <div className="space-y-5">
                        <div className="flex flex-col gap-[5px] w-full">
                            <label className="relative">
                                <input type="email"
                                    className="peer bg-darkColor border-[#e5eaf2] border outline-none ps-28 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
                                    {...register("email", { required: "Email is required" })}
                                />
                                <span
                                    className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-primaryColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                    Your email
                                </span>
                            </label>
                            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                        </div> {/* name */}

                        <div className="flex flex-col gap-[5px] w-full">
                            <label className="relative">
                                <input type="password"
                                    className="peer bg-darkColor border-[#e5eaf2] border outline-none ps-28 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
                                    {...register("password", { required: "Password is required" })}
                                />
                                <span
                                    className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-primaryColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                    Password
                                </span>
                            </label>
                            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                        </div> {/* password */}
                    </div>

                    <button type="submit" className={`py-3 px-4 border border-primaryColor outline-none mt-[10px]`}>Login</button>
                    <div className="flex flex-col items-center">


                        {/* Login and other sign-in methods */}
                        <div className="flex flex-col items-center  justify-center mt-5 space-y-4">
                            <GoogleSignIn></GoogleSignIn>
                            <Link to="/register" className="text-white"> Don't have an account? <span className="text-gray-300 underline underline-offset-4 decoration-primaryColor">Register</span></Link>

                        </div>
                    </div>
                </form>


            </section>
        </Container>
    );
};

export default Login;