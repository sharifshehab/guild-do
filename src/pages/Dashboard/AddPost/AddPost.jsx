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
import SectionTitle from "../../../components/SectionTitle";
import Loading from "../../../components/Loading";
import useTags from "../../../API/useTags";
import { Helmet } from "react-helmet-async";


const AddPost = () => {
    const { register, handleSubmit, control, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [allTags] = useTags();
    const { user } = useAuth();
    const { successToast, errorToast } = useToast();
    const [loading, setLoading] = useState(false);

    const { data: myPosts = [], refetch, isLoading: postLoading } = useQuery({
        queryKey: ['userPosts', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/posts?email=${user?.email}`);
            return res.data;
        }
    });

    const { data: userPayment = [], isLoading: paymentLoading } = useQuery({
        queryKey: ['userPayment', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user?.email}`)
            return res.data
        }
    });

    if (postLoading) {
        return <Loading></Loading>
    }
    if (paymentLoading) {
        return <Loading></Loading>
    }

    if (!userPayment.email && myPosts.length >= 5) {
        return (
            <div className='min-h-screen flex flex-col items-center justify-center space-y-3'>
                <Link to={'/dashboard/payment'}>
                    <button className='py-3 px-4 bg-yellow-400 font-medium outline-none mt-3 tag-cut  border-2 border-yellow-400 hover:border-white duration-300'>Become a Member</button>
                </Link>
                <p className="text-center text-white leading-loose">You have reached the maximum number of posts allowed for a general user.
                    <br />Upgrade to a premium membership with a one-time payment of just <span className="text-yellow-400 font-semibold">$50</span> to increase your post limit for lifetime.</p>
            </div>
        )
    }

    const onSubmit = async (formData) => {
        refetch();
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
        <>
            <Helmet><title>GuildDo - Add Post</title></Helmet>
            <Container>
                <section className="py-8 min-h-screen">

                    {/* title */}
                    <SectionTitle title="add post"></SectionTitle>

                    {/* form area */}
                    <form className="w-full bg-secondaryColor" onSubmit={handleSubmit(onSubmit)}>

                        <div className="space-y-5">

                            <div className="flex flex-col sm:flex-row items-center gap-5">
                                <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                    <label className="relative">
                                        <input type="text"
                                            className="peer text-white bg-darkColor border-[#e5eaf2] border outline-none ps-32 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
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
                                            className="peer text-white bg-darkColor border-[#e5eaf2] border outline-none ps-32 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
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
                                            className="peer text-white bg-darkColor border-[#e5eaf2] border outline-none ps-32 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
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
                                            className="peer text-white bg-darkColor border-[#e5eaf2] border outline-none ps-24 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
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
                                                options={allTags}
                                                isMulti={true}
                                                onChange={(selectedOption) => field.onChange(selectedOption)}
                                                onBlur={field.onBlur}
                                                isSearchable={false}
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
                                        className="peer min-h-72 text-white bg-darkColor border-[#e5eaf2] border outline-none ps-[150px] pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
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

                        <button type="submit" disabled={!userPayment.email && myPosts.length >= 5} className='py-3 px-4 bg-yellow-400 font-medium outline-none mt-3 next-cut border-2 border-yellow-400 cursor-pointer hover:border-white duration-300'>{loading ? <TbLoader3 size={22} className="animate-spin text-[#ffffff]" /> : 'Add Post'}</button>
                    </form>
                    <Toaster />
                </section>
            </Container>
        </>
    );
};

export default AddPost;