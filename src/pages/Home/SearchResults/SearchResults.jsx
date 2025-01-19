import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import SingleResult from "./SingleResult/SingleResult";

const SearchResults = ({ searchData }) => {

    return (
        <section id="announcements">
            <Container>
                <SectionTitle title="search results"></SectionTitle>
                <div className="space-y-10">
                    { 
                        searchData?.map(data => <SingleResult key={data._id} data={data}></SingleResult> )
                    }
                </div>
            </Container>
        </section>
    );
};

export default SearchResults;