import { useQuery } from "@tanstack/react-query";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import TableRow from "./TableRow/TableRow";

const AllMembers = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: allUsers = [], refetch, isLoading } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}`)
            return res.data
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <section id="all-members" className="pt-40 min-h-screen">
            <Container>
                <SectionTitle title="All Members"></SectionTitle>
                <div className="overflow-x-auto pb-32">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-sm text-white">
                                <th>name</th>
                                <th>membership</th>
                                <th>action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {allUsers?.length === 0 ? <p className="text-white py-5">No member found!</p> :
                                allUsers?.map(member => <TableRow key={member._id} member={member} requestSender={user}></TableRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </Container>
        </section>
    );
};

export default AllMembers;