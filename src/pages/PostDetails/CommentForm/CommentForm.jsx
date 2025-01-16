import { useForm } from "react-hook-form";
import { Toaster } from 'react-hot-toast';
import { useState } from "react";
// icons
import { TbLoader3 } from "react-icons/tb";
import Container from '../../../components/Container';
import useAuth from "../../../hooks/useAuth";
import useToast from "../../../hooks/useToast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CommentForm = ({ id, title }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { successToast, errorToast } = useToast();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (formData) => {
        setLoading(true);
        try {
            //  Save comment in the database
            const commentData = {
                name: user?.displayName,
                email: user?.email,
                postId: id,
                postTitle: title,
                comment: formData.comment
            }
            const res = await axiosSecure.post('/comments', commentData);
            if (res.data.insertedId) {
                reset(); // Reset form
                // success message toast
                successToast("Comment Posted Successful");
            }
        } catch (error) {
            console.error('Comment posting error:', error);
            errorToast(`There was an error while posting the comment: ${error.message}`)
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container>
            <section className="w-full">

                {/* form area */}
                <form className="w-full mt-12 bg-secondaryColor p-10" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-[2rem] font-bold text-primary leading-[36px] mb-3">Leave a comment</h1>

                    <div className="space-y-5">
                        {
                            user?.email &&
                            <div className="flex flex-col sm:flex-row items-center gap-5">

                                <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                    <label className="relative">
                                        <input type="text"
                                            className="peer bg-darkColor border-[#e5eaf2] border outline-none ps-28 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
                                            {...register("name")}
                                            defaultValue={user?.displayName}
                                            readOnly
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
                                            {...register("email")}
                                            defaultValue={user?.email}
                                            readOnly
                                        />
                                        <span
                                            className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-primaryColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                            Your email
                                        </span>
                                    </label>
                                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                                </div> {/* email */}
                            </div> /* first-row */
                        }

                        <div className="flex flex-col gap-[5px] w-full mt-[20px]">
                            <label className="relative w-full">
                                <textarea
                                    className="peer min-h-72 bg-darkColor border-[#e5eaf2] border outline-none ps-[150px] pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
                                    {...register("comment", { required: "Comment is required" })}
                                ></textarea>
                                <span
                                    className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-primaryColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                    Your comment...
                                </span>
                            </label>
                            {errors.comment && <span className="text-red-500 text-sm">{errors.comment.message}</span>}
                        </div>{/* post description */}


                    </div>


                    <button type="submit" className={`py-3 px-4 border border-primaryColor outline-none mt-[10px]`}>{loading ? <TbLoader3 size={22} className="animate-spin text-[#ffffff]" /> : 'Post Comment'}</button>
                </form>
                <Toaster />
            </section>
        </Container>
    );
};

export default CommentForm;