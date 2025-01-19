import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import TableRow from "./TableRow/TableRow";
import SectionTitle from "../../../components/SectionTitle";
import Container from "../../../components/Container";

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
        <Container>
            <section className="min-h-screen pt-8">
                <SectionTitle title="All Reports"></SectionTitle>

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
            </section>
        </Container>
    );
};

export default ReportedActivities;