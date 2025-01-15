import { useLoaderData, useParams } from "react-router-dom";
import Container from "../../components/Container";
import { format } from "date-fns";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// icons
import { HiMiniShare } from "react-icons/hi2";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { LiaTagsSolid } from "react-icons/lia";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

const PostDetails = () => {
    const { postId } = useParams();
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: post = {}, refetch, isLoading } = useQuery({
        queryKey: ['singlePost', postId],
        queryFn: async () => {
            const res = await axiosPublic.get(`/posts/${postId}`)
            return res.data
        }
    });

    if (isLoading) {
        return <div className='min-h-screen flex items-center justify-center'>
            <span className='text-primaryColor'>Loading...</span>
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }

    const { authorName, authorEmail, authorImage, createdAt, postTitle, postDescription, postTag, UpVote, DownVote } = post || {};
    const postDate = format(new Date(createdAt), "yyyy-MM-dd, HH:mm a");
  
    const data = {
        email: user.email
    }
    const handleVote = async() => {
        const res = await axiosPublic.patch(`/posts/${postId}`, data)
        console.log(res);

        if (res.data.modifiedCount > 0) {
            refetch();
        }
    }

    return (
        <Container>
            <div className="w-full shadow-lg bg-[#fff]">
                <div className="flex w-full justify-between items-center p-4">
                    <div className="flex items-center gap-4">

                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={authorImage}
                                alt="Avatar Tailwind CSS Component"
                                referrerPolicy="no-referrer"
                            />
                        </div>

                        <div>
                            <h2 className="font-[500] text-[1.2rem] text-darkColor">{authorName}</h2>
                            <p className="text-[#424242] text-[0.9rem]">{postDate}</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <img
                        src="https://img.freepik.com/premium-photo/tasty-tofu-stir-fry-with-veggies-crispy-tofu-
        fresh-cilantro-perfect-vegan-meal-healthy_763042-1514.jpg"
                        alt=""
                        className="w-full h-[250px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
                    <h2 className="text-primaryColor text-2xl font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{postTitle}</h2>
                </div>

                <div className="p-4">
                    <button className="flex gap-2">
                        <LiaTagsSolid className="text-secondaryColor" size={22} />
                        {postTag?.map((tag, idx) => <span key={idx} className="text-darkColor">{tag}{idx < postTag.length - 1 && ', '}</span>)}
                    </button>
                </div>


                <p className="text-[#424242] p-4">
                    {postDescription}
                </p>

                <div className="flex items-center justify-between w-full p-4 ">
                    <div className="flex gap-3 text-darkColor">

                        <button className="flex items-center justify-center gap-1" onClick={handleVote}>
                            <FiThumbsUp className="text-2xl p-1 text-secondaryColor" size={25} /> <span className="text-darkColor">{UpVote}</span>
                        </button>

                        <button className="flex items-center justify-center gap-1">
                            <FiThumbsDown className="text-2xl p-1 text-secondaryColor" size={25} /> <span className="text-darkColor">{DownVote}</span>
                        </button>
                    </div>

                    <HiMiniShare className="text-[#424242] text-[1.4rem] cursor-pointer" />
                </div>

            </div>
        </Container>
    );
};

export default PostDetails;