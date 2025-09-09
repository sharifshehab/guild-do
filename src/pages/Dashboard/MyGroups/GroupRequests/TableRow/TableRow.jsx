import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import formateDate from '../../../../../components/formateDate';
import useToast from '../../../../../hooks/useToast';
import useAxiosPublic from '../../../../../hooks/useAxiosPublic';

const TableRow = ({ request, groupId }) => {
    const { name, email, } = request || {}
    const requestedDate = request?.date
        ? formateDate(request?.date, "yyyy-MM-dd")
        : " ";
    const [requestStatus, setRequestStatus] = useState("pending");
    const queryClient = useQueryClient();

    // const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const { successToast, errorToast } = useToast();


    const handleResponse = async (e) => {
        setRequestStatus(e.target.value)
        try {
            const responseData = {
                action: e.target.value,
                name: name,
                email: email,
            }
            const res = await axiosPublic.patch(`/groups/response/${groupId}`, responseData);
            console.log(res);
            if (res?.data?.modifiedCount) {
                successToast(`Group join request ${e.target.value}ed successful`);
                queryClient.invalidateQueries(['groups']);
            }
        } catch (error) {
            console.error('Request response error:', error);
            errorToast(`There was an error while ${e.target.value}ing the request: ${error.message}`)
        }
    }

    return (
        <tr >
            <td>
                <h4 className='text-yellow-400'>{name}</h4>
            </td>{/* name */}
            <td>
                <h4 className='text-yellow-400'>{email}</h4>
            </td>{/* email */}
            <td>
                <h4 className='text-yellow-400'>{requestStatus === "pending" ? requestStatus : `${requestStatus}ed`}</h4>
            </td>{/* request status */}
            <td>
                <h4 className='text-yellow-400'>{requestedDate}</h4>
            </td>{/* date */}
            <td>
                <select
                    name="Response"
                    id="Response"
                    class="mt-0.5 py-3 bg-black text-yellow-400 px-3 sm:w-full"
                    value={requestStatus}
                    onChange={handleResponse}
                >
                    <option value="">Select a response</option>
                    <option value="accept">Accept</option>
                    <option value="reject">Reject</option>
                </select>
            </td>{/* Report */}
        </tr>
    );
};

export default TableRow;