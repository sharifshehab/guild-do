import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
const Categories = () => {
    return (
        <section>
            <Container>
                <SectionTitle title="tags"></SectionTitle>

                <div className="flex flex-wrap items-center justify-center gap-10">
                    <span className="bg-white py-2 px-5 cc text-center text-lg font-semibold text-secondaryColor tag-cut">Vanilla</span>
                    <span className="bg-white py-2 px-5 cc text-center text-lg font-semibold text-secondaryColor tag-cut">Vanilla</span>
                    <span className="bg-white py-2 px-5 cc text-center text-lg font-semibold text-secondaryColor tag-cut">Vanilla</span>
                    <span className="bg-white py-2 px-5 cc text-center text-lg font-semibold text-secondaryColor tag-cut">Vanilla</span>
                    <span className="bg-white py-2 px-5 cc text-center text-lg font-semibold text-secondaryColor tag-cut">Vanilla</span>
                    <span className="bg-white py-2 px-5 cc text-center text-lg font-semibold text-secondaryColor tag-cut">Vanilla</span>
                    <span className="bg-white py-2 px-5 cc text-center text-lg font-semibold text-secondaryColor tag-cut">Vanilla</span>
                    <span className="bg-white py-2 px-5 cc text-center text-lg font-semibold text-secondaryColor tag-cut">Vanilla</span>
                </div>

            </Container>
        </section>
    );
};

export default Categories;