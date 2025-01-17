import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Categories from "./Categories/Categories";
import Content from "./Content/Content";
import Hero from "./Hero/Hero";

const Home = () => {

    const axiosPublic = useAxiosPublic();
    const { data: announcements = [], isLoading } = useQuery({
        queryKey: ['allAnnouncements'],
        queryFn: async () => {
            const res = await axiosPublic.get('/announcements')
            return res.data
        }
    });
    console.log(announcements);

    return (
        <main>
            <Hero></Hero>
            <Categories></Categories>
            <Content></Content>
        </main>
    );
};

export default Home; 