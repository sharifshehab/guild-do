import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Post from "./Post";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";
import Container from "../../../components/Container";
import { Helmet } from "react-helmet-async";
// react icons
import { ImWarning } from "react-icons/im";

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
  const { name, email, badge, phoneNumber, Address } = userProfile || {};

  /* 

        {
 
    "name": "Daniel Wilson ",
    "email": "danielwilson@gmail.com",
    "badge": "Bronze",
    "warn": "Warning",
    "phoneNumber": "+880174579013647",
    " ": "East Alipur, Dhaka, Bangladesh"
}

*/

  // user's top 3 post
  const { data: myPosts = [] } = useQuery({
    queryKey: ["userPosts", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/posts?email=${user?.email}&limit=3`);
      return res.data;
    },
  });

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
                  className="w-[150px] h-[150px] object-cover rounded-full"
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

                  <h3 className="text-xl lg:text-2xl font-semibold capitalize mt-4 col-span-2 lg:col-span-1  text-center lg:text-left">
                    Name: {name}
                  </h3>

                  <h3 className="text-xl lg:text-2xl font-semibold capitalize mt-4 col-span-2 lg:col-span-1  text-center lg:text-left">
                    Email: {email}
                  </h3>
                  <h3 className="text-xl lg:text-2xl font-semibold capitalize mt-4 col-span-2 lg:col-span-1  text-center lg:text-left">
                    Number: {phoneNumber}
                  </h3>
                  <h3 className="text-xl lg:text-2xl font-semibold capitalize mt-4 col-span-2 lg:col-span-1  text-center lg:text-left">
                    Address: {Address}
                  </h3>
                </div>
              </div>
              {/* admin profile */}

              {/* posts */}
              <div className="mt-7 border-t border-border">
                <div className="text-center pt-5">
                  <SectionTitle title="my recent posts"></SectionTitle>
                </div>
                <div className="w-full pb-10 flex flex-wrap items-center justify-center gap-7 lg:gap-14 p-5">
                  {myPosts?.length === 0 ? (
                    <p className="text-center text-white">No post found</p>
                  ) : (
                    myPosts?.map((post) => (
                      <Post key={post._id} post={post}></Post>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* flex */}
        </section>
      </Container>
    </>
  );
};

export default MyProfile;
