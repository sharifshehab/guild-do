import { useQuery } from "@tanstack/react-query";
import TableRow from "./TableRow/TableRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";
import Container from "../../../components/Container";
import Loading from "../../../components/Loading";

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: allUsers = [], refetch, isLoading } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <Container>
            <section className="min-h-screen pt-8">
                {/* title */}
                <SectionTitle title="Manage Users"></SectionTitle>

                <div className="overflow-x-auto pb-32">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-sm dark:text-white">
                                <th>User name</th>
                                <th>User email</th>
                                <th>Action</th>
                                <th>Subscription Status</th>
                                <th>Remove</th>
                            </tr>
                        </thead>

                        <tbody>
                            {allUsers?.map(user => <TableRow key={user._id} user={user} refetch={refetch}></TableRow>)}
                        </tbody>
                    </table>
                </div>
            </section>
        </Container>
    );
};

export default ManageUsers;