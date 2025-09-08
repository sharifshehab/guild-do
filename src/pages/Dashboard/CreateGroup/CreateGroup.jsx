import { Controller, useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import useToast from "../../../hooks/useToast";
import { useState } from "react";
import Container from "../../../components/Container";
import { Toaster } from "react-hot-toast";
import Select from 'react-select'
import { TbLoader3 } from "react-icons/tb";
import SectionTitle from "../../../components/SectionTitle";
import useTags from "../../../API/useTags";
import { Helmet } from "react-helmet-async";


const CreateGroup = () => {
    const { register, handleSubmit, control, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    // const axiosSecure = useAxiosSecure();
    const [allTags] = useTags();
    const { user } = useAuth();
    const { successToast, errorToast } = useToast();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (formData) => {
        setLoading(true);
        try {
            const groupData = {
                name: formData.group_name,
                description: formData.group_description,
                owner: formData.admin_email,
                tags: formData.group_tags.map(tag => tag.value),
                members: [],
                requests: [],
                createdAt: new Date()
            }

            const res = await axiosPublic.post('/groups', groupData);
            if (res.data.message) {
                errorToast(res.data.message);
            }
            if (res.data.insertedId) {
                reset(); // Reset form
                successToast("Group created successful");
            }
        } catch (error) {
            console.error('Group creation error:', error);
            errorToast(`There was an error while creating the group: ${error.message}`)
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Helmet><title>GuildDo - Create Group</title></Helmet>
            <Container>
                <section className="py-8 min-h-screen">

                    {/* title */}
                    <SectionTitle title="Create Group"></SectionTitle>

                    {/* form area */}
                    <form className="w-full bg-secondaryColor" onSubmit={handleSubmit(onSubmit)}>

                        <div className="space-y-5">

                            <div className="flex flex-col sm:flex-row items-center gap-5">
                                <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                    <label className="relative">
                                        <input type="text"
                                            className="peer text-white bg-darkColor border-[#e5eaf2] border outline-none ps-32 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
                                            {...register("group_name", { required: "Group name is required" })}
                                        />
                                        <span
                                            className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-primaryColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                            Group Name
                                        </span>
                                    </label>
                                    {errors.group_name && <span className="text-red-500 text-sm">{errors.group_name.message}</span>}
                                </div> {/* author name */}

                                <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                                    <label className="relative">
                                        <input type="email"
                                            className="peer text-white bg-darkColor border-[#e5eaf2] border outline-none ps-32 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
                                            {...register("admin_email")}
                                            defaultValue={user?.email}
                                            readOnly
                                        />
                                        <span
                                            className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-primaryColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                            Admin email
                                        </span>
                                    </label>
                                    {errors.admin_email && <span className="text-red-500 text-sm">{errors.admin_email.message}</span>}
                                </div> {/* author email */}
                            </div> {/* first-row */}


                            <div className="flex flex-col gap-[5px] w-full mt-[20px]">

                                <Controller
                                    name="group_tags"
                                    control={control}
                                    rules={{ required: "Group tag is required" }}
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
                                                placeholder="Select group tags"
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
                                        className="peer min-h-72 text-white bg-darkColor border-[#e5eaf2] border outline-none ps-[170px] pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
                                        {...register("group_description", { required: "Group description is required" })}
                                    ></textarea>
                                    <span
                                        className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-primaryColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                        Group Description
                                    </span>
                                </label>
                                {errors.group_description && <span className="text-red-500 text-sm">{errors.group_description.message}</span>}
                            </div>{/* post description */}

                        </div>{/* space-y-5 */}

                        <button type="submit" className='py-3 px-4 bg-yellow-400 font-medium outline-none mt-3 next-cut cursor-pointer border-r-8 border-white hover:border-r-0 hover:border-l-8 transition-all duration-200'>{loading ? <TbLoader3 size={22} className="animate-spin text-[#ffffff]" /> : 'Create Group'}</button>
                    </form>
                    <Toaster />
                </section>
            </Container>
        </>
    );
};

export default CreateGroup;