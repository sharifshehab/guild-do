import { useQuery } from "@tanstack/react-query";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import SectionTitle from "../../components/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import TableRow from "./TableRow/TableRow";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AllGroups = () => {
    const { user } = useAuth();
    // const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const { data: groups = [], refetch, isLoading } = useQuery({
        queryKey: ['groups', ],
        queryFn: async () => {
            const res = await axiosPublic.get('/groups')
            return res.data
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <section id="all-members" className="pt-40 min-h-screen">
            <Container>
                <SectionTitle title="All Groups"></SectionTitle>
                <div className="overflow-x-auto pb-32">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-sm text-white">
                                <th>Name</th>
                                <th className="hidden sm:table-cell">Description</th>
                                <th>Tags</th>
                                <th>Join</th>
                            </tr>
                        </thead>

                        <tbody>
                            {groups?.length === 0 ? <p className="text-white py-5">No groups found!</p> :
                                groups?.map(group => <TableRow key={group._id} group={group} refetch={refetch} requestUser={user}></TableRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </Container>
        </section>
    );
};

export default AllGroups;