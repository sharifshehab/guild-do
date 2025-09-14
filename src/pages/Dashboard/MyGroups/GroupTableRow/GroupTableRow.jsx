import { Link } from "react-router-dom";
import formateDate from "../../../../components/formateDate";

const GroupTableRow = ({ group }) => {
    const { _id, name, description, members, requests, createdAt } = group || {}
    const date = createdAt
        ? formateDate(createdAt, "yyyy-MM-dd")
        : "Loading...";

    return (
        <tr className="dark:text-primaryColor">
            <td>
                <h4 className="font-semibold">{<h4>{name}</h4>}</h4>
            </td>{/* name */}
            <td className="hidden sm:table-cell w-[40%]">
                <p className="leading-relaxed text-white">{description}</p>
            </td>{/* description */}
            <td>
                <h4>{members.length}</h4>
            </td>{/* members count */}
            <td>
                <h4>{requests.length}</h4>
            </td>{/* requests count */}
            <td>
                <Link to={"/dashboard/group-requests"} state={{ requests: requests, groupName: name, groupId: _id }} className="btn btn-sm rounded-none border-2 bg-yellow-400 hover:bg-yellow-500">See Requests</Link>
            </td>{/* view requests */}
            <td>
                <h4>{date}</h4>
            </td>{/* date */}
        </tr>
    );
};

export default GroupTableRow;