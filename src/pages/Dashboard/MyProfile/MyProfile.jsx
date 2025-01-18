import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
// react icons
import { MdVerified } from "react-icons/md";
import Post from "./Post";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyProfile = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    // user info
    const { data: userProfile = {} } = useQuery({
        queryKey: ['userProfile', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?email=${user?.email}`)
            return res.data
        }
    });
    const { _id, name, email, badge } = userProfile || {};

    // user top 3 post
    const { data: myPosts = [] } = useQuery({
        queryKey: ['userPosts', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/posts?email=${user?.email}&limit=3`)
            return res.data
        }
    });

    return (
        <>
            {/* title */}
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="text-[2rem] font-bold text-primary leading-[36px]">My Profile</h1>
            </div>

            <div className="flex items-center justify-center">
                <div className="w-full lg:w-[60%] shadow-lg rounded">

                    <div className="w-full h-[150px] relative bg-[url('https://img.freepik.com/premium-vector/content-writer-vector-colored-round-line-illustration_104589-2571.jpg')] bg-center">
                        <img
                            alt={user?.displayName}
                            src={user?.photoURL}
                            referrerPolicy="no-referrer"
                            className="w-[80px] h-[80px] rounded-full border-secondary border-4 absolute -bottom-12 left-1/2 transform -translate-x-1/2 object-cover"
                        />
                        <MdVerified
                            className="text-blue-500 p-[2px] text-[1.4rem] bg-white rounded-full absolute top-[50px] right-[4px]" />
                    </div>


                    <div className="w-full text-center mt-16">
                        <span className="">{badge}</span>
                        <h2 className="font-[600] text-[1.4rem]">{name}</h2>
                        <p className="text-text text-[0.9rem]">{email}</p>
                        
                        {
                            userProfile?.warn && <h2 className="font-[600] text-3xl text-red-500">{userProfile?.warn}</h2>
                        }
                        
                    </div>

                    <div className="mt-8 border-t border-border">
                        <h2 className="text-center">my recent posts</h2>
                        <div className="w-full p-4 flex items-center justify-center gap-14">

                            {
                                myPosts?.length === 0 ? <p className="text-center">no post found</p> :
                                myPosts?.map(post => <Post key={post._id} post={post}></Post>)
                            }
                        </div>
                    </div>

                </div>
            </div>{/* flex */}
        </>
    );
};

export default MyProfile;