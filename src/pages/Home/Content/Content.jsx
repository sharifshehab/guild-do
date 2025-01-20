import Container from "../../../components/Container";
import TableRow from "./TableRow/TableRow";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle";

const Content = () => {
    const axiosPublic = useAxiosPublic();
    const { data: postsCount = { count: 0 } } = useQuery({
        queryKey: ['postsCount'],
        queryFn: async () => {
            const res = await axiosPublic.get('/postsCount');
            return res.data;
        }
    });

    const itemsPerPage = 5;

    console.log('postsCount', postsCount);

    const numberOfPages = Math.ceil(postsCount?.count / itemsPerPage)

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

    const { data: allPosts = [] } = useQuery({
        queryKey: ['allPosts', currentPage],
        queryFn: async () => {
            const res = await axiosPublic.get(`/posts?page=${currentPage}&size=${itemsPerPage}`);
            return res.data;
        }
    });


    return (
        <section>
            <Container>
                <SectionTitle title="Forums"></SectionTitle>

                <div className="grid grid-cols-3 gap-8">

                    <div className="min-h-screen bg-secondaryColor col-span-full lg:col-span-2 relative">
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead className="bg-white text-darkColor text-lg capitalize">
                                    <tr>
                                        <th>Title</th>
                                        <th>tags</th>
                                        <th>comments count</th>
                                        <th>votes count</th>
                                        <th>Author</th>
                                    </tr>
                                </thead>
                                <tbody className="px-10">
                                    {/* row */}
                                    {
                                        allPosts?.map(post => <TableRow key={post._id} post={post}></TableRow>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>{/* posts */}

                    <div className="min-h-screen bg-blue-600 col-span-full lg:col-span-1"></div>{/* sidebar */}

                    <div className="pagination col-span-2 flex justify-center">
                        <button onClick={handlePrevPage} className="px-5 py-3 bg-yellow-400 text-secondaryColor font-semibold prev-cut">Prev</button>
                        {
                            pages?.map(page => <button className={currentPage === page ? 'text-lg px-5 py-[9px] bg-white opacity-95 text-darkColor ' : 'bg-white px-5 py-3 text-secondaryColor'} onClick={() => setCurrentPage(page)} key={page}>{page + 1}</button>)
                        }
                        <button onClick={handleNextPage} className="px-5 py-3 bg-yellow-400 text-secondaryColor font-semibold next-cut">Next</button>
                    </div>{/* pagination */}
                </div>{/* grid */}
            </Container>
        </section>
    );
};

export default Content;