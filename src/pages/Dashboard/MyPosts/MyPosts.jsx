import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import TableRow from "./TableRow/TableRow";
import Loading from "../../../components/Loading";
import SectionTitle from "../../../components/SectionTitle";
import Container from "../../../components/Container";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyPosts = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { data: postCounts = { count: 0 } } = useQuery({
        queryKey: ['postCounts', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/postCounts/${user.email}`);
            return res.data;
        }
    });
    const itemsPerPage = 10;
    const numberOfPages = Math.ceil(postCounts?.count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()];
    const [currentPage, setCurrentPage] = useState(0);
    /* Go to Next / Previous page */
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages?.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    const { data: myPosts = [], refetch, isLoading } = useQuery({
        queryKey: ['userPosts', user?.email, currentPage, itemsPerPage],
        queryFn: async () => {
            const res = await axiosPublic.get(`/posts?email=${user?.email}&page=${currentPage}&size=${itemsPerPage}`);
            return res.data;
        }
    });
    if (isLoading) {
        return (<Loading></Loading>);
    }

    return (
        <>
            <Helmet><title>GuildDo - My Posts</title></Helmet>
            <Container>
                <section className="min-h-screen pt-8">
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
                                {myPosts?.length === 0 ? <p className="text-white py-5">No post found</p> :
                                    myPosts?.map(post => <TableRow key={post._id} post={post} refetch={refetch}></TableRow>)}
                            </tbody>
                        </table>
                    </div>

                    {myPosts?.length !== 0 &&
                        <div className="pagination col-span-2 flex justify-center">
                            <button onClick={handlePrevPage} className="px-5 py-3 bg-yellow-400 text-secondaryColor font-semibold prev-cut">Prev</button>
                            {
                                pages?.map(page => <button className={currentPage === page ? 'text-lg px-5 py-[9px] bg-white opacity-95 text-darkColor ' : 'bg-white px-5 py-3 text-secondaryColor'} onClick={() => setCurrentPage(page)} key={page}>{page + 1}</button>)
                            }
                            <button onClick={handleNextPage} className="px-5 py-3 bg-yellow-400 text-secondaryColor font-semibold next-cut">Next</button>
                        </div>
                    }
                </section>
            </Container>
        </>
    );
};

export default MyPosts;