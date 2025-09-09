import { useQuery } from "@tanstack/react-query";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import Loading from "../../../components/Loading";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import GroupTableRow from "./GroupTableRow/GroupTableRow";



const MyGroups = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  // My groups
  const { data: groups = [], isLoading: isGroupLoading } = useQuery({
    queryKey: ["groups", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/groups?groupOwner=${user?.email}`);
      return res.data;
    },
  });

  if (isGroupLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Helmet>
        <title>GuildDo - My Groups</title>
      </Helmet>
      <Container>
        <section className="min-h-screen py-8">
          <SectionTitle title="My Groups"></SectionTitle>


          {/* My groups section */}
          <div className="mt-7">

            <div className="overflow-x-auto pb-32">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-sm text-white">
                    <th>Group Name</th>
                    <th className="hidden sm:table-cell">Description</th>
                    <th>Members</th>
                    <th>Requests</th>
                    <th>Join Requests</th>
                    <th>Creation Date</th>
                  </tr>
                </thead>

                <tbody>
                  {groups?.length === 0 ? <p className="text-white py-5">No groups found!</p> :
                    groups?.map(group => <GroupTableRow key={group._id} group={group} ></GroupTableRow>)
                  }
                </tbody>
              </table>
            </div> {/* table */}
          </div>{/* My groups end */}


        </section>

      </Container>
    </>
  );
};

export default MyGroups;
