import { useEffect, useState } from 'react';
import Select from 'react-select';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import useToast from '../../../../../hooks/useToast';

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
            console.error('Post adding error:', error);
            errorToast(`There was an error while adding the report: ${error.message}`)
        } 
    }

    return (
            <tr className="dark:text-primaryColor">
                <td className="w-3/5">
                    <h4>{comment}</h4>
                </td>
                <td>
                    <h4>{email}</h4>
                </td>{/* email */}
                <td>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        isDisabled={isReported}
                    />
                </td>{/* Report */}
                <td>
                    <button onClick={handleReport} className={`btn  ${isReported ? "disabled:bg-green-400" : "disabled:bg-red-300"}`} disabled={!selectedOption || isReported}> {isReported ?  "Reported" : 'Report'}</button>
                </td>{/* Feedback */}
            </tr>
    );
};

export default TableRow;