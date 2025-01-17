import { useForm } from "react-hook-form";
import Container from "../../../components/Container";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { TbLoader3 } from "react-icons/tb";
import { useState } from "react";
import useToast from "../../../hooks/useToast";
import { Toaster } from "react-hot-toast";

const MakeAnnouncement = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { successToast, errorToast } = useToast();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (formData) => {
        setLoading(true);

        try {
            const announcementData = {
                authorName: formData.author_name,
                authorImage: formData.author_image,
                announcementTitle: formData.title,
                announcementDescription: formData.description,
                createdAt: new Date()
            }
            const res = await axiosSecure.post('/announcements', announcementData);
            if (res.data.insertedId) {
                reset(); // Reset form
                successToast("Announcement added successful");
            }
        } catch (error) {
            console.error('Post adding error:', error);
            errorToast(`There was an error while adding the announcement: ${error.message}`)
        } finally {
            setLoading(false);
        }
    }


    return (
        <Container>
            <section className="w-full">

                {/* title */}
                <div className="w-full flex flex-col items-center justify-center">
                    <h1 className="text-[2rem] font-bold text-primary leading-[36px]">Make Announcement</h1>
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
                            </div> {/* author name */}

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
                            </div> {/* author image */}
                        </div> {/* first-row */}

                        <div className="flex flex-col sm:flex-row items-center gap-5">

                            <div className="flex flex-col gap-[5px] w-full mt-[20px]">
                                <label className="relative">
                                    <input type="text"
                                        className="peer bg-darkColor border-[#e5eaf2] border outline-none ps-16 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
                                        {...register("title", { required: "Announcement title is required", minLength: { value: 10, message: "minimum character length is 10" } })}
                                    />
                                    <span
                                        className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-primaryColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                        Title
                                    </span>
                                </label>
                                {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
                            </div> {/* title */}

                        </div> {/* second-row */}

                        <div className="flex flex-col gap-[5px] w-full mt-[20px]">
                            <label className="relative w-full">
                                <textarea
                                    className="peer min-h-72 bg-darkColor border-[#e5eaf2] border outline-none ps-28 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
                                    {...register("description", { required: "Announcement description is required" })}
                                ></textarea>
                                <span
                                    className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-primaryColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                    Description
                                </span>
                            </label>
                            {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
                        </div>{/* post description */}

                    </div>{/* space-y-5 */}
                    <button type="submit" className={`py-3 px-4 border border-primaryColor outline-none mt-[10px]`}>{loading ? <TbLoader3 size={22} className="animate-spin text-[#ffffff]" /> : 'Add Announcement'}</button>
                </form>
                <Toaster />
            </section>
        </Container>
    );
};

export default MakeAnnouncement;