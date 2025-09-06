import useAnnouncements from "../../API/useAnnouncements";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import SectionTitle from "../../components/SectionTitle";
import SingleAnnouncement from "../Home/Announcements/SingleAnnouncement/SingleAnnouncement";

const AllAnnouncements = () => {
    const [announcements, isLoading] = useAnnouncements();

    if (isLoading) {
        return (
            <Loading></Loading>
        );
    }
    return (
        <section id="all-announcements" className="pt-40 min-h-screen">
            <Container>
                <SectionTitle title="All Announcements"></SectionTitle>
                <div className="space-y-10">
                    {
                        announcements?.map(announcement => <SingleAnnouncement key={announcement._id} announcement={announcement}></SingleAnnouncement>)
                    }
                </div>
            </Container>
        </section>
    );
};

export default AllAnnouncements;