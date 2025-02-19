import { useQuery } from "@tanstack/react-query";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/Loading";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import useToast from "../../../hooks/useToast";
import { useForm } from "react-hook-form";
import { TbLoader3 } from "react-icons/tb";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

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
    const { name, email, role, phoneNumber, Address } = userProfile || {};

  return (
    <>
      <Helmet>
        <title>GuildDo - Admin Profile</title>
      </Helmet>
      <Container>
        <section className="min-h-screen py-8">
          <SectionTitle title="Admin Profile"></SectionTitle>

          <div className="bg-white shadow-2xl p-6 flex items-center justify-center flex-col title-cut">
            <img
              alt={name}
              src={user?.photoURL}
              referrerPolicy="no-referrer"
              className="w-[150px] h-[150px] object-cover rounded-full"
            />
            <div className="grid grid-cols-1 md:grid-cols-2">
              <h3 className="text-3xl font-semibold capitalize mt-4 col-span-1 md:col-span-2 text-center underline underline-offset-8 decoration-yellow-400 mb-4">
                Role: {role}
              </h3>

              <h3 className="text-xl lg:text-2xl font-semibold capitalize mt-4 col-span-2 lg:col-span-1 text-center lg:text-left ">
                Name: {name}
              </h3>

              <h3 className="text-xl lg:text-2xl font-semibold capitalize mt-4 col-span-2 lg:col-span-1 text-center lg:text-left ">
                Email: {email}
              </h3>
              <h3 className="text-xl lg:text-2xl font-semibold capitalize mt-4 col-span-2 lg:col-span-1 text-center lg:text-left ">
                Number: {phoneNumber}
              </h3>
              <h3 className="text-xl lg:text-2xl font-semibold capitalize mt-4 col-span-2 lg:col-span-1 text-center lg:text-left ">
                Address: {Address}
              </h3>
            </div>
          </div>
          {/* admin profile */}
        </section>
        <Toaster />
      </Container>
    </>
  );
};

export default AdminProfile;
