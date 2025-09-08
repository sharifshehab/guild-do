import Categories from "./Categories/Categories";
import Content from "./Content/Content";
import Hero from "./Hero/Hero";
import Announcements from "./Announcements/Announcements";
import useAnnouncements from "../../API/useAnnouncements";
import SearchResults from "./SearchResults/SearchResults";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import About from "./About/About";
import Newsletter from "./Newsletter/Newsletter";
import Players from "./Players/Players";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    const [announcements, isLoading] = useAnnouncements(1);
    const { searchResult, setSearchResult } = useAuth();

    return (
        <>
            <Helmet><title>GuildDo - Uniting Gamers | Home</title></Helmet>
            <main>
                <Hero></Hero>
                {
                    searchResult.length > 0 &&
                    <SearchResults searchData={searchResult} setSearchResult={setSearchResult}></SearchResults>
                }
                {
                    announcements.length > 0 &&
                    <Announcements announcements={announcements} loading={isLoading}></Announcements>
                }
                <Categories></Categories>
                <Content></Content>
                <About></About>
                <Players></Players>
                <Testimonials></Testimonials>
                <Newsletter></Newsletter>
            </main>
        </>
    );
};

export default Home; 