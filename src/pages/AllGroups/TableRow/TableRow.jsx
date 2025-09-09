import useToast from "../../../hooks/useToast";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Toaster } from "react-hot-toast";

const TableRow = ({ group, requestUser }) => {
    const { _id, name, description, tags } = group || {}

    // const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const { errorToast, successToast } = useToast();

    const requestInfo = {
        name: requestUser?.displayName,
        email: requestUser?.email
    }

    const handleFriendRequest = async () => {
        try {
            const res = await axiosPublic.patch(`/groups/${_id}`, requestInfo);

            if (res?.data?.message) {
                errorToast(res?.data?.message);
            }
            if (res?.data?.acknowledged) {
                successToast(`Join request sent successfully to ${name}`);
            }
        } catch (error) {
            console.log(error);
            errorToast(`An error occurred while sending join request to ${name}!`);
        }
    }

    return (
        <>
            <tr className="dark:text-primaryColor">
                <td>
                    <h4>{name}</h4>
                </td>{/* name */}
                <td className="w-[40%] hidden sm:table-cell">
                    <p className="line-clamp-3">{description}</p>
                </td>{/* description */}
                <td>
                    {tags?.map((tag, idx) => <span key={idx} className="text-white">{tag}{idx < tags.length - 1 && (<span className="text-yellow-400 text-xl">, </span>)}</span>)}
                </td>{/* tags */}
                <td>
                    <button className="btn text-secondaryColor rounded-none border-2 border-white bg-yellow-400 hover:bg-yellow-500" onClick={handleFriendRequest}>Send Request</button>
                </td>{/* Action */}

            </tr>
            <Toaster />
        </>
    );
};

export default TableRow;