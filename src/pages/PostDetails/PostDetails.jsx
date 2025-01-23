import { Link, useParams } from "react-router-dom";
import Container from "../../components/Container";
import { format } from "date-fns";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";
import { Toaster } from "react-hot-toast";
import CommentForm from "./CommentForm/CommentForm";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
// icons
import { SlSocialFacebook } from "react-icons/sl";
import { RxTwitterLogo } from "react-icons/rx";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { LiaTagsSolid } from "react-icons/lia";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import image from "../../assets/images/post-details-BG.webp";

const PostDetails = () => {
    const { postId } = useParams();
    const { user } = useAuth();
    const { successToast, errorToast } = useToast();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

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

    const { _id, authorName, authorEmail, authorImage, createdAt, postTitle, postDescription, postTag, UpVote, DownVote } = post || {};
    const postDate = format(new Date(createdAt), "yyyy-MM-dd, HH:mm a");

    // up-vote
    const upVote = {
        email: user?.email,
        voteType: 'upvote'
    }
    const handleUpVote = async () => {
        const res = await axiosSecure.patch(`/posts/${postId}`, upVote)
        if (res.data.modifiedCount > 0) {
            successToast("Up-vote given successfully");
            refetch();
        }
    }

    // down-vote
    const downVote = {
        email: user?.email,
        voteType: 'downvote'
    }
    const handleDownVote = async () => {
        const res = await axiosSecure.patch(`/posts/${postId}`, downVote)
        if (res.data.modifiedCount > 0) {
            errorToast("Down-vote given successfully")
            refetch();
        }
    }

    return (
        <>
            <Helmet><title>GuildDo - Forum Details</title></Helmet>
            <Container>
                <div className="w-full shadow-lg bg-secondaryColor mt-20">
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
                                <h2 className="font-[500] text-[1.2rem] text-yellow-400">{authorName}</h2>
                                <p className="text-white text-[0.9rem]">{postDate}</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src={image}
                            alt=""
                            className="w-full h-[250px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-65"></div> {/* Overlay */}
                        <h2 className="text-primaryColor text-center text-2xl md:text-3xl lg:text-5xl font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{postTitle}</h2>
                    </div>

                    <div className="p-4">
                        <button className="flex items-end gap-2">
                            <LiaTagsSolid className="text-yellow-400" size={22} />
                            {postTag?.map((tag, idx) => <span key={idx} className="text-white">{tag}{idx < postTag.length - 1 && (<span className="text-yellow-400 text-xl">, </span>)}</span>)}
                        </button>
                    </div>

                    <p className="text-white p-6">
                        {postDescription}
                    </p>

                    <div className="flex items-center justify-between w-full p-4 ">
                        <div className="flex gap-3">

                            {
                                !user?.email ? (
                                    <>
                                        <Link to={'/login'}>
                                            <button className="flex items-center justify-center gap-1">
                                                <FiThumbsUp className="text-2xl p-1 text-yellow-400" size={25} /> <span className="text-white">{UpVote}</span>
                                            </button>
                                        </Link>

                                        <Link to={'/login'}>
                                            <button className="flex items-center justify-center gap-1" onClick={handleDownVote}>
                                                <FiThumbsDown className="text-2xl p-1 text-yellow-400" size={25} /> <span className="text-white">{DownVote}</span>
                                            </button>
                                        </Link>
                                    </>
                                ) : (
                                        <>
                                            <button className="flex items-center justify-center gap-1" onClick={handleUpVote}>
                                                <FiThumbsUp className="text-2xl p-1 text-yellow-400" size={25} /> <span className="text-white">{UpVote}</span>
                                            </button>

                                            <button className="flex items-center justify-center gap-1" onClick={handleDownVote}>
                                                <FiThumbsDown className="text-2xl p-1 text-yellow-400" size={25} /> <span className="text-white">{DownVote}</span>
                                            </button>
                                        </>
                                )
                            }

                        </div>

                        {/* social share */}
                        <div className="flex items-center gap-1">
                            <span className="text-yellow-400 font-semibold">Share:</span>

                            {
                                !user?.email ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <Link to={'/login'}>
                                            <SlSocialFacebook size={21} className="text-white" />
                                        </Link>
                                        <Link to={'/login'}>
                                            <RxTwitterLogo size={21} className="text-white" />
                                        </Link>
                                        <Link to={'/login'}>
                                            <IoLogoWhatsapp size={21} className="text-white" />
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center gap-2">
                                        <FacebookShareButton url={`http://localhost:5000/posts/${postId}`}>
                                            <SlSocialFacebook size={21} className="text-white" />
                                        </FacebookShareButton>

                                        <TwitterShareButton url={`http://localhost:5000/posts/${postId}`}>
                                            <RxTwitterLogo size={21} className="text-white" />
                                        </TwitterShareButton>

                                        <WhatsappShareButton url={`http://localhost:5000/posts/${postId}`}>
                                            <IoLogoWhatsapp size={21} className="text-white" />
                                        </WhatsappShareButton>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <Toaster />
                </div>
                <CommentForm id={_id} title={postTitle}></CommentForm>
            </Container >
        </>
    );
};

export default PostDetails;