import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import TableRow from "./TableRow/TableRow";

const ReportedActivities = () => {
    const axiosSecure = useAxiosSecure();

    const { data: allReports = [], refetch, isLoading } = useQuery({
        queryKey: ['allReports'],
        queryFn: async () => {
            const res = await axiosSecure.get('/reports')
            return res.data
        }
    });

    if (isLoading) {
        return <div className='min-h-screen flex items-center justify-center'>
            <span className='text-primaryColor'>Loading...</span>
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }

    return (
        <>
            <div className="text-center mb-10">
                <h2 className="text-4xl underline underline-offset-8 decoration-primaryColor">All Reports</h2>
            </div>

            <div className="overflow-x-auto pb-32">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-sm dark:text-white">
                            <th>Report</th>
                            <th>Comment</th>
                            <th>Commenter email</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {allReports?.map(data => <TableRow key={data._id} data={data} refetch={refetch}></TableRow>)}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ReportedActivities;