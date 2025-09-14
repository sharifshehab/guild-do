import { useQuery } from "@tanstack/react-query";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import Loading from "../../../components/Loading";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import TableRow from "./TableRow/TableRow";


const MyFriends = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: myFriends = [],
    isLoading,
  } = useQuery({
    queryKey: ["myFriends", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/my-friends/${user?.email}`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Helmet>
        <title>GuildDo - User Dashboard</title>
      </Helmet>
      <Container>
        <section className="min-h-screen py-8">
          <SectionTitle title="My Friends"></SectionTitle>


          <div className="overflow-x-auto pb-32">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-sm text-white">
                  <th>name</th>
                  <th>status</th>
                  <th>date</th>
                </tr>
              </thead>

              <tbody>
                {myFriends?.length === 0 ? <p className="text-white py-5"> No friends found!</p> :
                  myFriends?.map(friend => <TableRow key={friend._id} friend={friend} currentUserEmail={user?.email}></TableRow>)
                }
              </tbody>
            </table>
          </div>


        </section>

      </Container>
    </>
  );
};

export default MyFriends;
