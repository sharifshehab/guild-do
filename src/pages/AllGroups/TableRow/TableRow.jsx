import useToast from "../../../hooks/useToast";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

const TableRow = ({ group, requestUser }) => {
    const { _id, name, description, tags, requests, members } = group || {}
    const [isRequestSent, setIsRequestSent] = useState(false);
    // const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const { errorToast, successToast } = useToast();

    // Check if user is already a member of the group
    const checkMember = members.some((req) => req.email === requestUser?.email);

    // Check if user is has already sent a join requests to the group
    useEffect(() => {
        const checkRequest = async () => {
            const alreadySent = requests.some((req) => req.email === requestUser?.email);
            setIsRequestSent(alreadySent);
        };

        if (requestUser?.email && requests) {
            checkRequest()
        }
    }, [requestUser?.email, requests]);


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
                    {
                        checkMember ? 
                        <h3>Member</h3>
                        : 
                        <button className={`btn text-secondaryColor rounded-none border-2 border-white bg-yellow-400 hover:bg-yellow-500 ${isRequestSent && 'cursor-not-allowed opacity-60'}`} onClick={handleFriendRequest}>{isRequestSent ? "Request Sent" : "Send Request"}</button>
                    }
                </td>{/* Action */}

            </tr>
            <Toaster />
        </>
    );
};

export default TableRow;