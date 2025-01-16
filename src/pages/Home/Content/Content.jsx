import Container from "../../../components/Container";
import TableRow from "./TableRow/TableRow";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import {  useState } from "react";

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
        queryKey: ['allPosts', currentPage, itemsPerPage],
        queryFn: async () => {
            const res = await axiosPublic.get(`/posts?page=${currentPage}&size=${itemsPerPage}`);
            return res.data;
        }
    });

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

            <div className="pagination">
                <button onClick={handlePrevPage} className="px-3 py-1 bg-white text-secondaryColor">Prev</button>
                {
                    pages?.map(page => <button className={currentPage === page ? 'px-3 py-1 bg-yellow-400 text-secondaryColor' : 'px-3 py-1 bg-primaryColor text-secondaryColor' } onClick={() => setCurrentPage(page)} key={page}>{page + 1}</button>)
                }                                                                                                               
                <button onClick={handleNextPage} className="px-3 py-1 bg-white text-secondaryColor">Next</button>
            </div>
        </Container>
    );
};

export default Content;