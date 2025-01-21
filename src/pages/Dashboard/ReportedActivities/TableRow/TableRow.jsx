import { useState } from 'react';
import Select from 'react-select';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useToast from '../../../../hooks/useToast';
import Swal from 'sweetalert2';

const TableRow = ({ data, refetch }) => {
    const { _id, report, commentId, comment, commenterEmail, postId } = data || {}

    // console.log('aida',data);

    const [selectedOption, setSelectedOption] = useState(null);
    // const [isReported, setIsReported] = useState(false);

    const axiosSecure = useAxiosSecure();
    const { successToast, errorToast } = useToast();

    const options = [
        { value: 'delete', label: 'Delete the Comment' },
        { value: 'warn', label: 'Warn the User' },
        { value: 'remove', label: 'Remove the User' }
    ]

    const handleReportAction = async () => {
        try {
            
            if (selectedOption.value === "delete") {
                // delete comment
                axiosSecure.delete(`comments/${commentId}`)
                    .then(res => {
                        if (res?.data?.deletedCount > 0) {
                            // delete report
                            axiosSecure.delete(`reports/${_id}`)
                                .then(res => {
                                    console.log('report delete', res.data);
                                    refetch();
                                });
                            
                            Swal.fire({
                                title: "Deleted!",
                                text: "Comment has been deleted.",
                                icon: "success",
                                confirmButtonColor: "#2b3440",
                            });
                            // refetch();
                        }
                    })
            } else if (selectedOption.value === "remove") {
                // delete user
                axiosSecure.delete(`users/${commenterEmail}`)
                    .then(res => {
                        if (res?.data?.deletedCount > 0) {
                            // delete report
                            axiosSecure.delete(`reports/${_id}`)
                                .then(res => {
                                    refetch();
                                });
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success",
                                confirmButtonColor: "#2b3440",
                            });
                            // refetch();
                        }
                    })
            } else if (selectedOption.value === "warn") {
                // warn the user
                axiosSecure.patch(`/users/warn/${commenterEmail}`)
                    .then(res => {
                        console.log(res?.data);
                        if (res?.data?.modifiedCount > 0) {
                            // delete report
                            axiosSecure.delete(`reports/${_id}`)
                                .then(res => {
                                    refetch();
                                });
                            Swal.fire({
                                title: "Warned!",
                                text: "User has been warned.",
                                icon: "success",
                                confirmButtonColor: "#2b3440",
                            });
                        } else if (res?.data?.acknowledged === true && res?.data?.matchedCount === 1) {
                            // delete report
                            axiosSecure.delete(`reports/${_id}`)
                                .then(res => {
                                    refetch();
                                });
                            Swal.fire({
                                title: "Already Warned!",
                                text: "This user has already been warned.",
                                icon: "success",
                                confirmButtonColor: "#2b3440",
                            });
                        }
                    });
            }
        } catch (error) {
            console.error('Post adding error:', error);
            errorToast(`There was an error while adding the report: ${error.message}`)
        }
    }

    /* 
    Inappropriate Comment: Remove the Comment
    Spam Comment: Warn the User
    Abusive Comment: Remove the User
    */

    return (

        <tr className="dark:text-primaryColor">
            <td>
                <h4>{report}</h4>
            </td>
            <td>
                <h4>{comment}</h4>
            </td>
            <td>
                <h4>{commenterEmail}</h4>
            </td>

            <td className="w-1/6">
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    className="gd-post-select w-40"
                    classNamePrefix="gd-post"
                />
            </td>{/* Report */}

            <td>
                <button onClick={handleReportAction} className='btn text-secondaryColor rounded-none border-2 border-white bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 disabled:text-slate-500' disabled={!selectedOption}>Submit</button>
            </td>{/* Action */}
        </tr>
    );
};

export default TableRow;