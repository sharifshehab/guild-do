import { useQuery } from "@tanstack/react-query";
import TableRow from "./TableRow/TableRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";
import Container from "../../../components/Container";
import Loading from "../../../components/Loading";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: userCounts = { count: 0 } } = useQuery({
        queryKey: ['userCounts'],
        queryFn: async () => {
            const res = await axiosSecure.get('/userCounts');
            return res.data;
        }
    });
    const itemsPerPage = 10;
    const numberOfPages = Math.ceil(userCounts?.count / itemsPerPage)
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

    const { data: allUsers = [], refetch, isLoading } = useQuery({
        queryKey: ['allUsers', currentPage, itemsPerPage],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?page=${currentPage}&size=${itemsPerPage}`)
            return res.data
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <>
            <Helmet><title>GuildDo - Manage Users</title></Helmet>
            <Container>
                <section className="min-h-screen pt-8">
                    {/* title */}
                    <SectionTitle title="Manage Users"></SectionTitle>

                    <div className="overflow-x-auto pb-32">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-sm dark:text-white">
                                    <th>User name</th>
                                    <th>User email</th>
                                    <th>Action</th>
                                    <th>Subscription Status</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>

                            <tbody>
                                {allUsers?.map(user => <TableRow key={user._id} user={user} refetch={refetch}></TableRow>)}
                            </tbody>
                        </table>
                    </div>

                    <div className="pagination col-span-2 flex justify-center">
                        <button onClick={handlePrevPage} className="px-5 py-3 bg-yellow-400 text-secondaryColor font-semibold prev-cut">Prev</button>
                        {
                            pages?.map(page => <button className={currentPage === page ? 'text-lg px-5 py-[9px] bg-white opacity-95 text-darkColor ' : 'bg-white px-5 py-3 text-secondaryColor'} onClick={() => setCurrentPage(page)} key={page}>{page + 1}</button>)
                        }
                        <button onClick={handleNextPage} className="px-5 py-3 bg-yellow-400 text-secondaryColor font-semibold next-cut">Next</button>
                    </div>{/* pagination */}
                </section>
            </Container>
        </>
    );
};

export default ManageUsers;