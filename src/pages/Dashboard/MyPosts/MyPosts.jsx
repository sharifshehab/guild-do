import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import TableRow from "./TableRow/TableRow";
import Loading from "../../../components/Loading";
import SectionTitle from "../../../components/SectionTitle";
import Container from "../../../components/Container";

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

    if (isLoading) {
        return (<Loading></Loading>);
    }

    return (
        <Container>
            <section>
                {/* title */}
                <SectionTitle title="my posts"></SectionTitle>

                <div className="overflow-x-auto">
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
            </section>
        </Container>
    );
};

export default MyPosts;