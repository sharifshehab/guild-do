import { Controller, useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import useToast from "../../../hooks/useToast";
import { useState } from "react";
import Container from "../../../components/Container";
import { Toaster } from "react-hot-toast";
import Select from 'react-select'
import { TbLoader3 } from "react-icons/tb";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPost = () => {
    const { register, handleSubmit, control, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { successToast, errorToast } = useToast();
    const [loading, setLoading] = useState(false);

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const onSubmit = async (postData) => {
        setLoading(true);
        console.log(postData);

        // upload image to "imgbb" and then get an url
        // const imageFile = { image: formData.photo[0] }
        // const { data } = await axiosPublic.post(image_hosting_api, imageFile, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // });

        // try {

        //     const userCredential = await handleRegister(formData.email, formData.password);
        //     const user = userCredential.user;


        //     await setUserNameAndPhoto(formData.name, data.data.display_url);
        //     console.log(user);

        //     /*             //  Save User info in the database
        //                 const userInfo = {
        //                     name: data.name,
        //                     email: data.email
        //                 }
        //                 const res = await axiosPublic.post('/users', userInfo);
        //                 if (res.data.insertedId) {
        //                     setSuccess(true);
        //                 } */

        //     reset(); // Reset form
        //     // success message toast
        //     successToast("Registration Successful");
        // } catch (error) {
        //     console.error('Registration error:', error);
        //     if (error.code === "auth/email-already-in-use") {
        //         errorToast("This email is already in use. Please try another email address.")
        //     } else if (error.code === "auth/invalid-email") {
        //         errorToast("Invalid email. Please try another email address.");
        //     } else {
        //         errorToast("An unexpected error occurred. Please try again.");
        //     }
        // } finally {
        //     setLoading(false);
        // }
    }
    return (
        <Container>
            <section className="w-full">

                {/* title */}
                <div className="w-full flex flex-col items-center justify-center">
                    <h1 className="text-[2rem] font-bold text-primary leading-[36px]">Add post</h1>
                </div>

                {/* form area */}
                <form className="w-full mt-12 bg-secondaryColor p-10" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-5">

                        <div className="flex flex-col sm:flex-row items-center gap-5">

                            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                <label className="relative">
                                    <input type="text"
                                        className="peer bg-darkColor border-[#e5eaf2] border outline-none ps-28 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
                                        {...register("author_name", { required: "Author Name is required", minLength: { value: 5, message: "minimum character length is 5" } })}
                                    />
                                    <span
                                        className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-primaryColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                        Name
                                    </span>
                                </label>
                                {errors.author_name && <span className="text-red-500 text-sm">{errors.author_name.message}</span>}
                            </div> {/* author name */}

                            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                <label className="relative">
                                    <input type="email"
                                        className="peer bg-darkColor border-[#e5eaf2] border outline-none ps-28 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
                                        {...register("author_email", { required: "Author Email is required" })}
                                    />
                                    <span
                                        className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-primaryColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                        Email
                                    </span>
                                </label>
                                {errors.author_email && <span className="text-red-500 text-sm">{errors.author_email.message}</span>}
                            </div> {/* author email */}
                        </div> {/* first-row */}

                        <div className="flex flex-col sm:flex-row items-center gap-5">

                            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                <label className="relative inline-block bg-darkColor text-[#777777] border-[#e5eaf2] border px-5 py-3 cursor-pointer hover:border-primaryColor transition-colors duration-300">
                                    Author Image
                                    <input type="file"
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                        // {...register("author_image", { required: "Author image is required" })}
                                    />
                                </label>
                                {/* {errors.author_image && <span className="text-red-500 text-sm">{errors.author_image.message}</span>} */}
                            </div> {/* author image */}

                            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                <label className="relative">
                                    <input type="text"
                                        className="peer bg-darkColor border-[#e5eaf2] border outline-none ps-28 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
                                        {...register("post_title", { required: "Post title is required", minLength: { value: 10, message: "minimum character length is 5" } })}
                                    />
                                    <span
                                        className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-primaryColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                        Post title
                                    </span>
                                </label>
                                {errors.post_title && <span className="text-red-500 text-sm">{errors.post_title.message}</span>}
                            </div> {/* post title */}
                        </div> {/* second-row */}

                        <div className="flex flex-col gap-[5px] w-full mt-[20px]">
                            
                            <Controller
                                name="post_tags"
                                control={control}
                                rules={{ required: "Post tag is required" }}
                                render={({ field, fieldState }) => (
                                    <div>
                                        <Select
                                            {...field}
                                            options={options}
                                            onChange={(selectedOption) => field.onChange(selectedOption)}
                                            onBlur={field.onBlur}
                                            value={field.value}
                                            placeholder="Select post tags"
                                            className="gd-post-select"
                                            classNamePrefix="gd-post"
                                        />
                                        {fieldState.error && <span className="text-red-500 text-sm">{fieldState.error.message}</span>}
                                    </div>
                                )}
                            />

                        </div>{/* post tags */}


                        <div className="flex flex-col gap-[5px] w-full mt-[20px]">
                            <label className="relative w-full">
                                <textarea
                                    className="peer min-h-72 bg-darkColor border-[#e5eaf2] border outline-none ps-36 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
                                    {...register("post_description", { required: "Post description is required"})}
                                ></textarea>
                                <span
                                    className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-primaryColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                    Post description
                                </span>
                            </label>
                            {errors.post_title && <span className="text-red-500 text-sm">{errors.post_title.message}</span>}
                        </div>{/* post description */}

                    </div>{/* space-y-5 */}
                    <button type="submit" className={`py-3 px-4 border border-primaryColor outline-none mt-[10px]`}>{loading ? <TbLoader3 size={22} className="animate-spin text-[#ffffff]" /> : 'Add Post'}</button>
                </form>
                <Toaster />
            </section>
        </Container>
    );
};

export default AddPost;