import formateDate from "../../../../components/formateDate";

const TableRow = ({ friend }) => {
    const { toUser, status, createdAt } = friend || {}
    const date = createdAt
        ? formateDate(createdAt, "yyyy-MM-dd")
        : "Loading...";
    const name = toUser.split("@")[0].charAt(0).toUpperCase() + toUser.split("@")[0].slice(1);
    return (
        <tr className="dark:text-primaryColor">
            <td>
                <h4>{name}</h4>
            </td>{/* name */}
            <td>
                <h4>{status ? 'friend' : status}</h4>
            </td>{/* status */}
            <td>
                <h4>{date}</h4>
            </td>{/* date */}
        </tr>
    );
};

export default TableRow;