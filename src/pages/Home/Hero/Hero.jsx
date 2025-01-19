import Container from "../../../components/Container";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
// react icons
import { CiSearch } from "react-icons/ci";
import useAuth from "../../../hooks/useAuth";

const Hero = () => {
    const axiosPublic = useAxiosPublic();
    const [search, setSearch] = useState('');
    const { setSearchResult } = useAuth();

    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText);
    }

    useEffect(() => {
        if (search) {
            axiosPublic.get(`/posts?search=${search}`)
                .then(data => setSearchResult(data.data));
        }
    }, [search, axiosPublic]);

    return (

        <section className="relative flex flex-col items-center justify-center w-full h-[800px] bg-heroBG bg-no-repeat bg-cover bg-center my-0">
            {/* image overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <Container>
                <div className="relative text-center z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl leading-snug lg:leading-tight font-semibold uppercase text-white">
                        Ultimate <span className="text-yellow-400">Challenges</span> With the Hottest Headlines
                    </h1>
                    <p className="text-xl text-yellow-400 mt-2 capitalize">
                        Conquer the Gaming Arena and collide with Current Updates
                    </p>

                    <div className="relative my-5">
                        <form action="#" onSubmit={handleSearch}>
                            <input name="search" placeholder="Search with tags.."
                                className="py-3 px-4 w-full outline-none bg-gray-100 text-secondaryColor" />
                            <button
                                className="h-full absolute top-0 right-0 bg-yellow-400 px-3 text-white text-xl">
                                <CiSearch className="text-darkColor" />
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;