import useToast from "../../../hooks/useToast";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Toaster } from "react-hot-toast";

const TableRow = ({ member, requestSender }) => {
    
    const { name, email, badge } = member || {}
    // const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const { errorToast, successToast } = useToast();

    const requestInfo = {
        name: requestSender?.displayName,
        fromUser: requestSender?.email,
        toUser: email,
        status: "pending",
        createdAt: new Date()
    }

    const handleFriendRequest = async () => {
        try {
            const res = await axiosPublic.post('/friend-requests', requestInfo);
            if (res?.data?.message) {
                errorToast(res?.data?.message);
            }
            if (res?.data?.acknowledged) {
                successToast(`Friend request sent successfully to ${name}`);
            }

            console.log(res?.data?.message);
        } catch (error) {
            errorToast(`An error occurred while sending request to ${name}!`);
        }
    }

    return (
        <>
            <tr className="dark:text-primaryColor">
                <td>
                    <h4>{<h4>{name}</h4>}</h4>
                </td>{/* name */}
                <td>
                    <h4>{badge}</h4>
                </td>{/* membership */}
                <td>
                    <button className="btn text-secondaryColor rounded-none border-2 border-white bg-yellow-400 hover:bg-yellow-500" onClick={handleFriendRequest}>Send Request</button>
                </td>{/* Action */}

            </tr>
            <Toaster />
        </>
    );
};

export default TableRow;