import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import useTags from "../../../API/useTags";
const Categories = () => {
    const [allTags] = useTags();

    return (
        <section>
            <Container>
                <SectionTitle title="tags"></SectionTitle>

                <div className="flex flex-wrap items-center justify-center gap-10">
                    {
                        allTags?.map((tag, idx) =>
                            <span key={tag._id} className="bg-white py-2 px-5 cc text-center text-lg font-semibold text-secondaryColor border-y-[3px] border-yellow-400 tag-cut" data-aos="fade-up" data-aos-delay={idx * 200}>{tag.label}</span>
                        )
                    }
                </div>

            </Container>
        </section>
    );
};

export default Categories;