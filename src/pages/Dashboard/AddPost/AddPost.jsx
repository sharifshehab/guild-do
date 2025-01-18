import { Controller, useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import useToast from "../../../hooks/useToast";
import { useState } from "react";
import Container from "../../../components/Container";
import { Toaster } from "react-hot-toast";
import Select from 'react-select'
import { TbLoader3 } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AddPost = () => {
    const { register, handleSubmit, control, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { successToast, errorToast } = useToast();
    const [loading, setLoading] = useState(false);

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const { data: myPosts = [], refetch, isLoading } = useQuery({
        queryKey: ['myPosts', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/post-count?user=${user?.email}`)
            return res.data
        }
    });

    if (isLoading) {
        return <div className='min-h-screen flex items-center justify-center'>
            <span className='text-primaryColor'>Loading...</span>
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }

    if (myPosts.posts >= 5) {
        return (
            <div className='min-h-screen flex flex-col items-center justify-center space-y-3'>
                <Link className="btn">Become a Member</Link>
                <p className="text-center">You have reached the maximum number of posts allowed for a general user.
                    <br />Upgrade to a premium membership to increase your post limit.</p>
            </div>

        )
    }

    const onSubmit = async (formData) => {
        setLoading(true);
        try {
            const postData = {
                authorName: formData.author_name,
                authorEmail: formData.author_email,
                authorImage: formData.author_image,
                postTitle: formData.post_title,
                postTag: formData.post_tags.map(tag => tag.value),
                postDescription: formData.post_description,
                UpVote: parseInt(0),
                DownVote: parseInt(0),
                createdAt: new Date()
            }
            const res = await axiosSecure.post('/posts', postData);
            if (res.data.insertedId) {
                reset(); // Reset form
                successToast("Post added successful");
            }
        } catch (error) {
            console.error('Post adding error:', error);
            errorToast(`There was an error while adding the post: ${error.message}`)
        } finally {
            setLoading(false);
        }
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
                                        className="peer bg-darkColor border-[#e5eaf2] border outline-none ps-32 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
                                        {...register("author_name")}
                                        defaultValue={user?.displayName}
                                        readOnly
                                    />
                                    <span
                                        className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-primaryColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                        Author Name
                                    </span>
                                </label>
                                {errors.author_name && <span className="text-red-500 text-sm">{errors.author_name.message}</span>}
                            </div> {/* author name */}

                            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                <label className="relative">
                                    <input type="email"
                                        className="peer bg-darkColor border-[#e5eaf2] border outline-none ps-32 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
                                        {...register("author_email")}
                                        defaultValue={user?.email}
                                        readOnly
                                    />
                                    <span
                                        className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-primaryColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                        Author email
                                    </span>
                                </label>
                                {errors.author_email && <span className="text-red-500 text-sm">{errors.author_email.message}</span>}
                            </div> {/* author email */}
                        </div> {/* first-row */}

                        <div className="flex flex-col sm:flex-row items-center gap-5">
                            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                <label className="relative">
                                    <input type="text"
                                        className="peer bg-darkColor border-[#e5eaf2] border outline-none ps-32 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
                                        {...register("author_image")}
                                        defaultValue={user?.photoURL}
                                        readOnly
                                    />
                                    <span
                                        className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-primaryColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                        Author image
                                    </span>
                                </label>
                                {errors.author_image && <span className="text-red-500 text-sm">{errors.author_image.message}</span>}
                            </div> {/* author image */}

                            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                <label className="relative">
                                    <input type="text"
                                        className="peer bg-darkColor border-[#e5eaf2] border outline-none ps-24 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
                                        {...register("post_title", { required: "Post title is required", minLength: { value: 10, message: "minimum character length is 10" } })}
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
                                            isMulti={true}
                                            onChange={(selectedOption) => field.onChange(selectedOption)}
                                            onBlur={field.onBlur}
                                            value={field.value || []}
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
                                    className="peer min-h-72 bg-darkColor border-[#e5eaf2] border outline-none ps-[150px] pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
                                    {...register("post_description", { required: "Post description is required" })}
                                ></textarea>
                                <span
                                    className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-primaryColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                    Post description
                                </span>
                            </label>
                            {errors.post_description && <span className="text-red-500 text-sm">{errors.post_description.message}</span>}
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