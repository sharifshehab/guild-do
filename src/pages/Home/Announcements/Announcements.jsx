import Container from "../../../components/Container";
import SingleAnnouncement from "./SingleAnnouncement/SingleAnnouncement";
import SectionTitle from "../../../components/SectionTitle";
import Loading from "../../../components/Loading";

const Announcements = ({ announcements, loading }) => {
    if (loading) {
        return (
            <Loading></Loading>
        );
    }
    return (
        <section id="announcements">
            <Container>
                <SectionTitle title="announcements"></SectionTitle>
                <div className="space-y-10">
                    {
                        announcements?.map(announcement => <SingleAnnouncement key={announcement._id} announcement={announcement}></SingleAnnouncement>)
                    }
                </div>
            </Container>
        </section>
    );
};

export default Announcements;