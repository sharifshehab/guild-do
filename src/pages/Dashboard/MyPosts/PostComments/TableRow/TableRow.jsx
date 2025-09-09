import { useEffect, useState } from 'react';
import Select from 'react-select';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import useToast from '../../../../../hooks/useToast';
import CommentModal from '../../../../../components/CommentModal';

const TableRow = ({ data }) => {
    const { _id, comment, email, } = data || {}

    const [selectedOption, setSelectedOption] = useState(null);
    const [isReported, setIsReported] = useState(false);
    const axiosSecure = useAxiosSecure();
    const { successToast, errorToast } = useToast();

    const options = [
        { value: 'inappropriate ', label: 'Inappropriate ' },
        { value: 'abusive', label: 'Abusive' },
        { value: 'spam', label: 'Spam' }
    ]

    useEffect(() => {
        axiosSecure.get(`/report/${_id}`)
            .then(res => {
                if (res.data.match === true) {
                    setIsReported(true);
                } else {
                    setIsReported(false);
                }
            });
    }, [_id]);


    const handleReport = async () => {
        try {
            const reportData = {
                report: selectedOption?.value,
                commentId: _id,
            }
            const res = await axiosSecure.post('/reports', reportData);
            if (res.data.insertedId) {
                successToast("Reported successful");
                setIsReported(true);
            }
        } catch (error) {
            console.error('Report adding error:', error);
            errorToast(`There was an error while adding the report: ${error.message}`)
        }
    }

    return (
        <tr >
            <td>
                <h4 className='text-yellow-400'>{comment.length > 20 ? (<>{comment.slice(0, 20)}...<CommentModal comment={comment} commenterEmail={email}></CommentModal></>) : comment}</h4>
            </td>
            <td>
                <h4 className='text-yellow-400'>{email}</h4>
            </td>{/* email */}
            <td>
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    isDisabled={isReported}
                    className="gd-post-select w-28"
                    classNamePrefix="gd-post"
                />
            </td>{/* Report */}
            <td>
                <button onClick={handleReport} className={`btn text-secondaryColor rounded-none border-2 border-white bg-yellow-400 hover:bg-yellow-500 ${isReported ? "disabled:bg-yellow-400 disabled:text-darkColor" : "disabled:bg-gray-300 disabled:text-slate-500"}`} disabled={!selectedOption || isReported}> {isReported ? "Reported" : 'Report'}</button>
            </td>{/* Feedback */}
        </tr>
    );
};

export default TableRow;