import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";
import Container from "../../../components/Container";
import { Helmet } from "react-helmet-async";
// react icons
import { ImWarning } from "react-icons/im";
import formateDate from "../../../components/formateDate";
import TableRow from "./TableRow/TableRow";
import Loading from "../../../components/Loading";

const MyProfile = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  // user info
  const { data: userProfile = {} } = useQuery({
    queryKey: ["userProfile", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/users/${user.email}?email=${user.email}`
      );
      return res.data;
    },
  });
  const { name, email, badge, phoneNumber, Address, about } = userProfile || {};
  const date = userProfile?.joiningDate
    ? formateDate(userProfile.joiningDate, "yyyy-MM-dd")
    : "Loading...";
  
  
  // Friend requests
  const { data: friendRequests = [], refetch: refetchFriendRequests, isLoading  } = useQuery({
    queryKey: ["friendRequests", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/friend-requests?receivedRequests=${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Helmet>
        <title>GuildDo - My Profile</title>
      </Helmet>
      <Container>
        <section className="min-h-screen">
          <div className="flex items-center justify-center min-h-screen my-10">
            <div className="w-full bg-transparent">
              <div
                className={`${
                  userProfile?.badge === "Gold"
                    ? "bg-yellow-400"
                    : "bg-amber-700"
                } shadow-2xl p-6 flex items-center justify-center flex-col title-cut`}
              >
                <img
                  alt={name}
                  src={user?.photoURL}
                  referrerPolicy="no-referrer"
                  className="w-[150px] h-[150px] object-cover rounded-full border border-white"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
                  <h3
                    className={`text-3xl font-semibold capitalize mt-4 col-span-1 md:col-span-2 text-center mb-4`}
                  >
                    Membership:{" "}
                    <span
                      className={`${
                        userProfile?.badge === "Gold"
                          ? "text-yellow-400"
                          : "text-amber-700"
                      } px-3 py-2 bg-darkColor`}
                    >
                      {badge}
                    </span>
                  </h3>

                  {userProfile?.warn && (
                    <div
                      className="mt-3 px-4 py-1.5 bg-red-100 inline-flex items-center justify-center gap-2 tooltip tooltip-error col-span-1 md:col-span-2"
                      data-tip="A spam complaint is filed against you."
                    >
                      <h2 className="font-[600] text-3xl text-red-600 text-center">
                        {userProfile?.warn}
                      </h2>
                      <ImWarning className="text-red-600" size={25} />
                    </div>
                  )}
                </div>
              </div>
              {/* admin profile */}

              <div className="grid grid-cols-6 gap-6 mt-10">

                <div className="col-span-full lg:col-span-2 bg-black p-6 pe-5 border-t-4 border-yellow-400">

                  <h3 className="text-yellow-400 text-2xl uppercase underline underline-offset-4 decoration-white">Info</h3>

                  <div className="mt-8 flex items-start gap-6">

                    <div className="space-y-5 xl:block lg:hidden">
                      <h5 className="text-white font-semibold text-lg">Full Name:</h5>
                      <h5 className="text-white font-semibold text-lg">E-mail:</h5>
                      <h5 className="text-white font-semibold text-lg">Mobile:</h5>
                      <h5 className="text-white font-semibold text-lg">Address:</h5>
                      <h5 className="text-white font-semibold text-lg">Joining Date:</h5>
                    </div> {/* title */}

                    <div className="space-y-5">
                      <p className="text-slate-300  text-lg">{name}</p>
                      <p className="text-slate-300  text-lg">{email}</p>
                      <p className="text-slate-300  text-lg">{phoneNumber}</p>
                      <p className="text-slate-300 text-lg ">
                        {Address}
                      </p>
                      <p className="text-slate-300  text-lg">{date}</p>
                    </div> {/* data */}

                  </div> {/* info wrap */}

                </div>{/* info */}

                <div className="col-span-full lg:col-span-4 bg-black p-6 border-t-4 border-yellow-400">
                  <>
                    <h3 className="text-yellow-400 text-2xl uppercase underline underline-offset-4 decoration-white">About</h3>
                    <p className="my-5 text-slate-300 leading-loose text-base">{about}</p>
                  </>
                </div> {/* about */}
              </div>
              {/* user data */}

              {/* request section */}
              <div className="mt-7">
                <div className="text-center pt-10">
                  <SectionTitle title="friend requests"></SectionTitle>
                </div>

                <div className="overflow-x-auto pb-32">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr className="text-sm text-white">
                        <th>name</th>
                        <th>status</th>
                        <th>date</th>
                        <th>action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {friendRequests?.length === 0 ? <p className="text-white py-5"> No request found!</p> :
                        friendRequests?.map(request => <TableRow key={request._id} request={request} refetchFriendRequests={refetchFriendRequests}></TableRow>)
                      }
                    </tbody>
                  </table> 
                </div> {/* table */}
              </div>{/* request section end */}

            </div>
          </div>
          {/* flex */}
        </section>
      </Container>
    </>
  );
};

export default MyProfile;
