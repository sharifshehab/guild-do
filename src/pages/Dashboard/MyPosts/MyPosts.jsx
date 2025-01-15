import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import TableRow from "./TableRow/TableRow";

const MyPosts = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: myPosts = [], refetch, isLoading } = useQuery({
        queryKey: ['userPosts', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/posts?email=${user?.email}`);
            return res.data;
        }
    });


    return (
        <>
            {/* title */}
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="text-[2rem] font-bold text-primary leading-[36px]">My posts</h1>
            </div>
            
            <div className="overflow-x-auto pb-32">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-sm dark:text-white">
                            <th>Post Title</th>
                            <th>Number of votes</th>
                            <th>Comments</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {myPosts?.map(post => <TableRow key={post._id} post={post} refetch={refetch}></TableRow>)}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyPosts;