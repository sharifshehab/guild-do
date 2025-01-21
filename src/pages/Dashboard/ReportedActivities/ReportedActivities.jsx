import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import TableRow from "./TableRow/TableRow";
import SectionTitle from "../../../components/SectionTitle";
import Container from "../../../components/Container";
import { Helmet } from "react-helmet-async";
import Loading from "../../../components/Loading";
import { useState } from "react";

const ReportedActivities = () => {
    const axiosSecure = useAxiosSecure();

    const { data: reportCounts = { count: 0 } } = useQuery({
        queryKey: ['reportCounts'],
        queryFn: async () => {
            const res = await axiosSecure.get('/reportCounts');
            return res.data;
        }
    });
    const itemsPerPage = 10;
    const numberOfPages = Math.ceil(reportCounts?.count / itemsPerPage)
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

    const { data: allReports = [], refetch, isLoading } = useQuery({
        queryKey: ['allReports', currentPage, itemsPerPage],
        queryFn: async () => {
            const res = await axiosSecure.get(`/reports?page=${currentPage}&size=${itemsPerPage}`)
            return res.data
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <>
            <Helmet><title>GuildDo - Reports</title></Helmet>
            <Container>
                <section className="min-h-screen pt-8">
                    <SectionTitle title="All Reports"></SectionTitle>

                    <div className="overflow-x-auto pb-32">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-sm dark:text-white">
                                    <th>Report</th>
                                    <th>Comment</th>
                                    <th>Commenter email</th>
                                    <th>Feedback</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {allReports?.length === 0 ? <p className="text-white py-5">No report found</p> :
                                    allReports?.map(data => <TableRow key={data._id} data={data} refetch={refetch}></TableRow>)}
                            </tbody>
                        </table>
                    </div>

                    {allReports?.length !== 0 &&
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

export default ReportedActivities;