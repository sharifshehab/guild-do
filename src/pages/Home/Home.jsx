import Categories from "./Categories/Categories";
import Content from "./Content/Content";
import Hero from "./Hero/Hero";
import Announcements from "./Announcements/Announcements";
import useAnnouncements from "../../API/useAnnouncements";

const Home = () => {
    const [announcements, isLoading] = useAnnouncements();

    return (
        <main>
            <Hero></Hero>
            {
                announcements.length > 0 &&
                <Announcements announcements={announcements} loading={isLoading}></Announcements>
            }
            <Categories></Categories>
            <Content></Content>
        </main>
    );
};

export default Home; 