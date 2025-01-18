
const SectionTitle = ({title ="section title"}) => {
    return (
        <div className="section-title bg-yellow-400 inline-block px-6 pt-3 pb-2 mb-10 both-cut">
            <h2 className="uppercase text-secondaryColor text-2xl lg:text-4xl font-bold">{title}</h2>
        </div>
    );
};

export default SectionTitle;