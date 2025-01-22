import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Post from "./Post";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";
import Container from "../../../components/Container";
import { Helmet } from "react-helmet-async";
// react icons
import { ImWarning } from "react-icons/im";


const MyProfile = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


    // user info
    const { data: userProfile = {} } = useQuery({
        queryKey: ['userProfile', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}?email=${user.email}`)
            return res.data
        }
    });
    const { name, email, badge } = userProfile || {};

    console.log(user.email);

    // user's top 3 post
    const { data: myPosts = [] } = useQuery({
        queryKey: ['userPosts', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/posts?email=${user?.email}&limit=3`)
            return res.data
        }
    });

    return (
        <>
            <Helmet><title>GuildDo - My Profile</title></Helmet>
            <Container>
                <section className="min-h-screen">

                    <div className="flex items-center justify-center min-h-screen my-10">

                        <div className="w-full lg:w-[60%] shadow-lg bg-darkColor">

                            <div className={`w-full relative`}>
                                <img
                                    alt={user?.displayName}
                                    src={user?.photoURL}
                                    referrerPolicy="no-referrer"
                                    className={`w-[80px] h-[80px] z-20 rounded-full ${userProfile?.badge === "Gold" ? 'border-yellow-400' : 'border-amber-700'} border-4 absolute -bottom-12 left-1/2 transform -translate-x-1/2 object-cover`}
                                />
                                <span className={`absolute top-5 z-10 ${userProfile?.badge === "Gold" ? 'right-[29%]' : 'right-[25%]'} ${userProfile?.badge === "Gold" ? 'md:right-[39%]' : 'md:right-[37%]'}  ${userProfile?.badge === "Gold" ? 'lg:right-[41%]' : 'lg:right-[39%]'} badge badge-md bg-secondaryColor pt-[3px] ps-4 rounded-none badge-cut ${userProfile?.badge === "Gold" ? 'text-yellow-400' : 'text-amber-700'}`}>{badge}</span>
                            </div>

                            <div className="w-full text-center mt-16">
                                <h2 className="font-semibold text-3xl capitalize text-yellow-400">{name}</h2>
                                <p className="text-text text-sm text-white">{email}</p>
                                {
                                    userProfile?.warn &&
                                    <div className="mt-3 px-4 py-1.5 bg-red-100 inline-flex items-center gap-2 tooltip tooltip-error" data-tip="A spam complaint is filed against you.">
                                        <h2 className="font-[600] text-3xl text-red-600">{userProfile?.warn}</h2>
                                        <ImWarning className="text-red-600" size={25} />
                                    </div>
                                }
                            </div>

                            <div className="mt-7 border-t border-border">
                                <div className="text-center pt-5">
                                    <SectionTitle title="my recent posts"></SectionTitle>
                                </div>
                                <div className="w-full pb-10 flex flex-wrap items-center justify-center gap-7 lg:gap-14 p-5">
                                    {
                                        myPosts?.length === 0 ? <p className="text-center text-white">No post found</p> :
                                            myPosts?.map(post => <Post key={post._id} post={post}></Post>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>{/* flex */}
                </section>
            </Container>
        </>
    );
};

export default MyProfile;