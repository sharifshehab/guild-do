import Container from "../../../components/Container";
import TableRow from "./TableRow/TableRow";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle";

import skullEmpire from "../../../assets/images/skull.png";
import apexLegends from "../../../assets/images/Apex-Legends-Logo.png";
import overWatch from "../../../assets/images/over-watch-Logo.png";
import leagueOfLegends from "../../../assets/images/league-of-legends-logo.png";

import grim from "../../../assets/images/grim.png";
import counterStrick from "../../../assets/images/cs.png";
import dota from "../../../assets/images/dota2.png";
import pointBlank from "../../../assets/images/point-blank.png";

import valkyrie from "../../../assets/images/valkyrie.png";
import diablo from "../../../assets/images/diablo.webp";
import pathOfExile from "../../../assets/images/Path-of-Exile-2.png";
import teamFightTactics from "../../../assets/images/teamfight-tactics.png";

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
               

                <div className="grid grid-cols-3 gap-10">
                        
                    <div className=" col-span-full lg:col-span-2 relative">
                        <SectionTitle title="Forums"></SectionTitle>
                        <div className="overflow-x-auto min-h-screen bg-secondaryColor">
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

                    <div className="min-h-screen bg-transparent col-span-full lg:col-span-1">
                        <SectionTitle title="Elite titans"></SectionTitle>
                        <div className="space-y-10">

                            <div className="bg-yellow-400 title-cut flex items-center gap-4 ps-9 py-3">
                                <img src={skullEmpire} alt="" className="w-[60px]" />
                                <div>
                                    <h3 className="text-secondaryColor text-2xl md:text-3xl font-semibold">Skull Empire</h3>
                                    <div className="flex flex-wrap items-center md:space-x-3">
                                        <h4 className="text-white bg-secondaryColor p-1 md:p-2 next-cut">Conquered</h4>
                                        <div className="flex items-center justify-center">
                                            <img src={apexLegends} alt="" className="w-10" />
                                            <img src={overWatch} alt="" className="w-[70px]" />
                                            <img src={leagueOfLegends} alt="" className="w-12" />
                                        </div> {/* logos */}
                                    </div>
                                </div>
                            </div>{/* single */}

                            <div className="bg-yellow-400 title-cut flex items-center gap-4 ps-9 py-3">
                                <img src={valkyrie} alt="" className="w-[75px]" />
                                <div>
                                    <h3 className="text-secondaryColor text-2xl md:text-3xl font-semibold">Valkyrie</h3>
                                    <div className="flex flex-wrap items-center md:space-x-3">
                                        <h4 className="text-white bg-secondaryColor p-1 md:p-2 next-cut">Conquered</h4>
                                        <div className="flex items-center justify-center gap-3">
                                            <img src={counterStrick} alt="" className="w-12" />
                                            <img src={dota} alt="" className="w-11" />
                                            <img src={pointBlank} alt="" className="w-12" />
                                        </div> {/* logos */}
                                    </div>
                                </div>
                            </div>{/* single */}

                            <div className="bg-yellow-400 title-cut flex items-center gap-4 ps-9 py-3">
                                <img src={grim} alt="" className="w-[75px]" />
                                <div>
                                    <h3 className="text-secondaryColor text-2xl md:text-3xl font-semibold">GrimReaper</h3>
                                    <div className="flex flex-wrap items-center md:space-x-3">
                                        <h4 className="text-white bg-secondaryColor p-1 md:p-2 next-cut">Conquered</h4>
                                        <div className="flex items-center justify-center gap-2">
                                            <img src={pathOfExile} alt="" className="w-14" />
                                            <img src={diablo} alt="" className="w-12" />
                                            <img src={teamFightTactics} alt="" className="w-11" />
                                        </div> {/* logos */}
                                    </div>
                                </div>
                            </div>{/* single */}
                        </div>
                    </div>{/* sidebar */}

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