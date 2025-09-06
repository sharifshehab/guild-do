import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import SingleResult from "./SingleResult/SingleResult";

const SearchResults = ({ searchData, setSearchResult }) => {

    const clearSearch = () => {
        setSearchResult([]);
    }

    return (

        <section id="searchResults">
            <Container>
                <SectionTitle title="search results"></SectionTitle>
                <div className="space-y-10">
                    {
                        searchData?.map(data => <SingleResult key={data._id} data={data}></SingleResult>)
                    }
                </div>
                <div className="text-center mt-8">
                    <button onClick={clearSearch} className="px-5 py-3 bg-yellow-400 font-semibold hover:bg-yellow-500">Clear Search Result</button>
                </div>
            </Container>
        </section>

    );
};

export default SearchResults;