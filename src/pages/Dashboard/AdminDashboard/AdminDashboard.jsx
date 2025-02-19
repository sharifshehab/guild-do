import { useQuery } from "@tanstack/react-query";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/Loading";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { useState } from "react";
import useToast from "../../../hooks/useToast";
import { useForm } from "react-hook-form";
import { TbLoader3 } from "react-icons/tb";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const AdminDashboard = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const { successToast, errorToast } = useToast();
  const axiosSecure = useAxiosSecure();

  const { data: totalDocuments = {}, isLoading } = useQuery({
    queryKey: ["totalDocuments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/document-count");
      return res.data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  const { posts, comments, users } = totalDocuments || {};

  const data = [
    { name: "Posts", value: posts },
    { name: "Comments", value: comments },
    { name: "Users", value: users },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const data = {
        value: formData.tag_name,
        label: formData.tag_name.toUpperCase(),
      };
      const res = await axiosSecure.post("/tags", data);
      if (res.data.insertedId) {
        reset(); // Reset form
        successToast("Tag added successful");
      }
    } catch (error) {
      console.error("Tag adding error:", error);
      errorToast(`There was an error while adding the tag: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>GuildDo - Admin Dashboard</title>
      </Helmet>
      <Container>
        <section className="min-h-screen py-8">
          <SectionTitle title="Admin Dashboard"></SectionTitle>
                  <div className="grid lg:grid-cols-4 justify-center items-center gap-5 mb-14">
                      

            <div className="h-[220px] text-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={300} height={220}>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div>
                <div className="badge badge-lg rounded-none bg-[#0088fe] py-2 font-medium">
                  Post
                </div>
                <div className="badge badge-lg rounded-none bg-[#00c49f] py-2 font-medium">
                  Comment
                </div>
                <div className="badge badge-lg rounded-none bg-[#ff8042] py-2 font-medium">
                  User
                </div>
              </div>
            </div>
            {/* chart */}
            <div className="bg-darkColor rounded-none flex items-center">
              <div className="card-body text-center">
                <h3 className="text-4xl text-white">{posts}</h3>
                <h2 className="text-xl text-yellow-400">Total Posts</h2>
              </div>
            </div>
            {/* posts */}
            <div className="bg-darkColor rounded-none flex items-center mt-10 lg:mt-0">
              <div className="card-body text-center">
                <h3 className="text-4xl text-white">{comments}</h3>
                <h2 className="text-xl text-yellow-400">Total comments</h2>
              </div>
            </div>
            {/* comments */}
            <div className="bg-darkColor rounded-none flex items-center  mt-10 lg:mt-0">
              <div className="card-body text-center">
                <h3 className="text-4xl text-white">{users}</h3>
                <h2 className="text-xl text-yellow-400">Total users</h2>
              </div>
            </div>
            {/* users */}
          </div>
          {/* grid */}

          {/* form area */}
          <form
            className="mx-auto lg:w-2/4 bg-darkColor p-6 border-t-2 border-yellow-400"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-white text-3xl font-semibold capitalize mb-5 text-center">
              Add new tag
            </h1>
            <div className="flex flex-col gap-[5px]">
              <label className="relative">
                <input
                  type="text"
                  className="peer text-white bg-darkColor border-[#e5eaf2] border outline-none ps-24 pe-5 py-3 w-full focus:border-primaryColor transition-colors duration-300"
                  {...register("tag_name", {
                    required: "Tag name is required",
                  })}
                />
                <span className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-primaryColor peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-secondaryColor text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                  Tag Name
                </span>
              </label>
              {errors.tag_name && (
                <span className="text-red-500 text-sm">
                  {errors.tag_name.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="py-3 px-4 bg-yellow-400 font-medium outline-none mt-3 next-cut border-2 border-yellow-400 hover:border-white duration-300"
            >
              {loading ? (
                <TbLoader3 size={22} className="animate-spin text-[#ffffff]" />
              ) : (
                "Add tag"
              )}
            </button>
          </form>
        </section>
        <Toaster />
      </Container>
    </>
  );
};

export default AdminDashboard;
