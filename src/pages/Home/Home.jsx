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

const Home = () => {
    const [announcements, isLoading] = useAnnouncements();
    const { searchResult, setSearchResult } = useAuth();

    return (
        <>
            <Helmet><title>GuildDo - Uniting Gamers | Home</title></Helmet>
            <main>
                <Hero></Hero>
                {
                    announcements.length > 0 &&
                    <Announcements announcements={announcements} loading={isLoading}></Announcements>
                }
                {
                    searchResult.length > 0 &&
                    <SearchResults searchData={searchResult} setSearchResult={setSearchResult}></SearchResults>
                }
                <Categories></Categories>
                <Content></Content>
                <About></About>
                <Newsletter></Newsletter>
            </main>
        </>
    );
};

export default Home; 