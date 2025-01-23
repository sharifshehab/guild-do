import formateDate from "../../../../components/formateDate";

const SingleAnnouncement = ({ announcement }) => {
    const { announcementTitle, announcementDescription, createdAt } = announcement || {};
    const date = formateDate(createdAt);

    return (
        <div className="border-b-2 border-yellow-400 space-y-4 pb-3">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-1">
                <h3 className="capitalize text-3xl font-semibold text-yellow-400 break-all">{announcementTitle}</h3>
                <span className="text-yellow-400 opacity-95 text-xs border px-2 pt-1">{date}</span>
            </div>
            <p className="leading-relaxed text-white">{announcementDescription}</p>
        </div>
    );
};

export default SingleAnnouncement;