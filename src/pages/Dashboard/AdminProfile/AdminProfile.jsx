import { useQuery } from "@tanstack/react-query";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import formateDate from "../../../components/formateDate";

const AdminProfile = () => {
  const { user } = useAuth();
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
  const { name, email, role, phoneNumber, Address, about } = userProfile || {};
  const date = userProfile?.joiningDate
    ? formateDate(userProfile.joiningDate, "yyyy-MM-dd")
    : "Loading...";

  return (
    <>
      <Helmet>
        <title>GuildDo - Admin Profile</title>
      </Helmet>
      <Container>
        <section className="min-h-screen py-8">
          <SectionTitle title="Admin Profile"></SectionTitle>

          <div className="bg-yellow-400 shadow-2xl p-6 flex items-center justify-center flex-col title-cut">
            <img
              alt={name}
              src={user?.photoURL}
              referrerPolicy="no-referrer"
              className="w-[150px] h-[150px] object-cover rounded-full border-white border-2"
            />
            <div className="grid grid-cols-1 md:grid-cols-2">
              <h3 className="text-darkColor text-3xl font-semibold uppercase mt-4 col-span-1 md:col-span-2 text-center border-b-4 border-white border-dashed  mb-4">
                {role}
              </h3>
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
          </div>{/* grid */}
        </section>
        <Toaster />
      </Container>
    </>
  );
};

export default AdminProfile;
