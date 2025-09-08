import formateDate from "../../../../components/formateDate";

const GroupTableRow = ({ group }) => {
    const { _id, name, description, members, createdAt } = group || {}
    const date = createdAt
        ? formateDate(createdAt, "yyyy-MM-dd")
        : "Loading...";

    return (
        <tr className="dark:text-primaryColor">
            <td>
                <h4 className="font-semibold">{<h4>{name}</h4>}</h4>
            </td>{/* name */}
            <td>
                <h4>{members.length}</h4>
            </td>{/* members count */}
            <td className="hidden sm:table-cell w-[40%]">
                <p className="leading-relaxed text-white">{description}</p>
            </td>{/* description */}
            <td>
                <h4>{date}</h4>
            </td>{/* date */}
        </tr>
    );
};

export default GroupTableRow;