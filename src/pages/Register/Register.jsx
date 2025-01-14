import Container from "../../components/Container"
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import GoogleSignIn from "../shared/GoogleSignIn";
import useAuth from "../../hooks/useAuth";
import { Toaster } from 'react-hot-toast';
import useToast from "../../hooks/useToast";
import { useState } from "react";
// icons
import { TbLoader3 } from "react-icons/tb";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const { handleRegister, setUserNameAndPhoto} = useAuth();
    const { successToast, errorToast } = useToast();
        const [loading, setLoading] = useState(false);

    const onSubmit = async (formData) => {
        setLoading(true);

        // upload image to "imgbb" and then get an url
        const imageFile = { image: formData.photo[0] }
        const {data} = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        try {
           
            const userCredential = await handleRegister(formData.email, formData.password);
            const user = userCredential.user; 

           
            await setUserNameAndPhoto(formData.name, data.data.display_url);
            console.log(user);

/*             //  Save User info in the database
            const userInfo = {
                name: data.name,
                email: data.email
            }
            const res = await axiosPublic.post('/users', userInfo);
            if (res.data.insertedId) {
                setSuccess(true);
            } */

            reset(); // Reset form
            // success message toast
            successToast("Registration Successful");
        } catch (error) {
            console.error('Registration error:', error);
            if (error.code === "auth/email-already-in-use") {
                errorToast("This email is already in use. Please try another email address.")
            } else if (error.code === "auth/invalid-email") {
                errorToast("Invalid email. Please try another email address.");
            } else {
                errorToast("An unexpected error occurred. Please try again."); 
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container>
            <section className="w-full">

                {/* title */}
                <div className="w-full flex flex-col items-center justify-center">
                    <h1 className="text-[2rem] font-bold text-primary leading-[36px]">Register</h1>
                </div>

                {/* form area */}
                <form className="w-full mt-12 bg-secondaryColor p-10" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-5">
                        <div className="flex flex-col sm:flex-row items-center gap-5">

                            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                <label className="relative">
                                    <input type="text"
                                        className="peer bg-darkColor border-[#e5eaf2] border outline-none ps-28 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
                                        {...register("name", { required: "Name is required", minLength: {value: 5, message: "minimum character length is 5" } })}
                                    />
                                    <span
                                        className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-primaryColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                        Your name
                                    </span>
                                </label>
                                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                            </div> {/* name */}

                            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
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
                            </div> {/* email */}
                        </div> {/* first-row */}

                        <div className="flex flex-col sm:flex-row items-center gap-5">

                            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                <label className="relative inline-block bg-darkColor text-[#777777] border-[#e5eaf2] border px-5 py-3 cursor-pointer hover:text-white hover:border-primaryColor transition-colors duration-300">
                                    Select Image
                                    <input type="file"
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                        {...register("photo", { required: "Photo is required" })}
                                    />
                                </label>
                                {errors.photo && <span className="text-red-500 text-sm">{errors.photo.message}</span>}
                            </div> {/* photo */}

                            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                <label className="relative">
                                    <input type="password"
                                        className="peer bg-darkColor border-[#e5eaf2] border outline-none ps-28 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
                                        {...register("password", {
                                            required: "Password is required",
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,  // Password pattern
                                                message: "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character."
                                            }
                                        })}
                                    />
                                    <span
                                        className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-primaryColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                        Password
                                    </span>
                                </label>
                                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                            </div> {/* password */}
                        </div> {/* second-row */}
                    </div>

                    <button type="submit" className={`py-3 px-4 border border-primaryColor outline-none mt-[10px]`}>{loading ? <TbLoader3 size={22} className="animate-spin text-[#ffffff]"/> :'Register' }</button>
                    <div className="flex flex-col items-center">

                        {/* Login and other sign-in methods */}
                        <div className="flex flex-col items-center  justify-center mt-5 space-y-4">
                            <GoogleSignIn></GoogleSignIn>
                            <Link to="/login" className="text-white">Already have an account? <span className="text-gray-300 underline underline-offset-4 decoration-primaryColor">Log In</span></Link>
                        </div>
                    </div>
                </form>
                <Toaster />
            </section>
        </Container>
    );
};

export default Register;
