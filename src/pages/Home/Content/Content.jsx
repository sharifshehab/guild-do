import { useQuery } from "@tanstack/react-query";
import Container from "../../../components/Container";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import TableRow from "./TableRow/TableRow";

const Content = () => {
    const axiosPublic = useAxiosPublic();
    const { data: allPosts = [] } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await axiosPublic.get('/posts')
            return res.data
        }
    });
    console.log(allPosts);

    return (
        <Container>
            <div className="grid grid-cols-3 gap-8">
                {/* posts */}
                <div className="h-screen bg-red-600 col-span-full lg:col-span-2">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Forum</th>
                                    <th>tags</th>
                                    <th>comments count</th>
                                    <th>votes count</th>
                                    <th>Author</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row */}
                                {
                                    allPosts?.map(post => <TableRow key={post._id} post={post}></TableRow>)
                                }
                                
                            </tbody>
                        </table>
                    </div>

                </div>
                {/* sidebar */}
                <div className="h-screen bg-blue-600 col-span-full lg:col-span-1"></div>
            </div>
        </Container>
    );
};

export default Content;