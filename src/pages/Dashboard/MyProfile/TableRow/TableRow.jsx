import { Toaster } from "react-hot-toast";
import useToast from "../../../../hooks/useToast";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useState } from "react";
import formateDate from "../../../../components/formateDate";

const TableRow = ({ request, refetchFriendRequests }) => {
    const { _id, name, fromUser, status, createdAt } = request || {}
    const date = createdAt
        ? formateDate(createdAt, "yyyy-MM-dd")
        : "Loading...";
    // const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const { errorToast, successToast } = useToast();
    const [requestStatus, setRequestStatus] = useState("");

    const handleResponse = async (e) => {
        setRequestStatus(e.target.value)
        try {
            const res = await axiosPublic.patch(`/friend-requests/${_id}`, { requestResponse: e.target.value });
            if (res?.data?.modifiedCount) {
                successToast(`Friend request of ${fromUser} ${e.target.value}ed successfully `);
                refetchFriendRequests()
            }
        } catch (error) {
            errorToast(`An error occurred while sending request response to ${fromUser}!`);
        }
    }

    return (
        <>
            <tr className="dark:text-primaryColor">
                <td>
                    <h4>{<h4>{name}</h4>}</h4>
                </td>{/* from which user */}
                <td>
                    <h4>{status}</h4>
                </td>{/* status */}
                <td>
                    <h4>{date}</h4>
                </td>{/* date */}
                <td>
                    <select
                        name="Response"
                        id="Response"
                        class="mt-0.5 py-3 bg-black px-3 sm:w-full"
                        value={requestStatus}
                        onChange={handleResponse}
                    >
                        <option value="">Select a response</option>
                        <option value="accept">Accept</option>
                        <option value="reject">Reject</option>
                    </select>
                </td>
            </tr>
            <Toaster />
        </>
    );
};

export default TableRow;