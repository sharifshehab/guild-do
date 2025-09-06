import { useQuery } from "@tanstack/react-query";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Loading from "../../../components/Loading";
import { useState } from "react";
import useToast from "../../../hooks/useToast";
import { useForm } from "react-hook-form";
import { TbLoader3 } from "react-icons/tb";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { Legend, Area, ResponsiveContainer, Bar, ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Cell, Pie, PieChart } from 'recharts';


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


  // Getting documents(post, comment, user) in number
  const { data: totalDocuments = {}, isLoading: documentCountLoading } = useQuery({
    queryKey: ["totalDocuments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/document-count");
      return res.data;
    },
  });
  const { posts, comments, users } = totalDocuments || []

  // Chart data
  const documentCount = [
    { name: "Posts", value: posts },
    { name: "Comments", value: comments },
    { name: "Users", value: users },
  ];
  
  // Pie chart color
  // const COLORS = ["#005fb1", "#007760", "#494949"];


  // Adding new tag
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

  // Handling loading state
  if (documentCountLoading) {
    return <Loading></Loading>;
  }

  return (
    /* lg:col-span-4 - 2   grid grid-cols-6 justify-center items-center gap-5*/
    <>
      <Helmet>
        <title>GuildDo - Admin Dashboard</title>
      </Helmet>
      <Container>
        <section className="min-h-screen py-8">
          <SectionTitle title="Admin Dashboard"></SectionTitle>

          <div className="w-full bg-yellow-400 py-5">
            <ResponsiveContainer width="100%" height={380}>
              <ComposedChart
                data={documentCount}
                margin={{ top: 20, right: 40, bottom: 20, left: 0 }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis
                  dataKey="name"
                  scale="point"
                  interval={0}
                  padding={{ left: 15, right: 15 }}
                  stroke="#232323"
                />
                <YAxis stroke="#151515" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="value" fill="#232323" stroke="#8884d8" />
                <Bar
                  dataKey="value"
                  barSize={30}
                  fill="#005fb1"
                  barCategoryGap={0}
                />
                <Line type="monotone" dataKey="value" stroke="#ff8042" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>{/* wave chart */}

          {/* <div className="flex flex-wrap items-center justify-center gap-5 mb-14">

            <div className="basis-[60%] bg-yellow-400 py-5">
                <ResponsiveContainer width="100%" height={380}>
                  <ComposedChart
                    data={documentCount}
                    margin={{ top: 20, right: 40, bottom: 20, left: 0 }}
                  >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis
                      dataKey="name"
                      scale="point"
                      interval={0}
                    padding={{ left: 15, right: 15 }}
                    stroke="#232323"
                    />
                  <YAxis stroke="#151515" />
                    <Tooltip />
                    <Legend />
                  <Area type="monotone" dataKey="value" fill="#232323" stroke="#8884d8" />
                    <Bar
                      dataKey="value"
                      barSize={30}
                    fill="#005fb1"
                      barCategoryGap={0}
                    />
                    <Line type="monotone" dataKey="value" stroke="#ff8042" />
                  </ComposedChart>
                </ResponsiveContainer>
            </div>

            <div className="basis-[40%] flex flex-col items-center justify-center bg-yellow-400 py-3">
              <PieChart width={200} height={370}>
                <Pie
                  data={documentCount}
                  cx="50%"
                  cy="50%"
                  innerRadius={115}
                  outerRadius={150}
                  fill="#8884d8"
                  paddingAngle={1}
                  dataKey="value"
                  label={({ value, percent }) => `${(percent * 100).toFixed(0)}%`}
                >
                  {documentCount.map((entry, index) => (
                    <Cell
                      key={`cell-${entry.name}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>

              <div className="flex gap-2 ">
                <div className="badge badge-lg rounded-none bg-[#005fb1] py-2 font-medium text-white">
                  <p>Post</p>
                </div>
                <div className="badge badge-lg rounded-none bg-[#007760] py-2 font-medium text-white">
                  Comment
                </div>
                <div className="badge badge-lg rounded-none bg-[#494949] py-2 font-medium text-white">
                  User
                </div>
              </div>
            </div>
            

          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5 my-14">

            <div className="bg-darkColor rounded-none flex items-center border-x-4 border-yellow-400 title-cut">
              <div className="card-body text-center">
                <h3 className="text-4xl text-white">{posts}</h3>
                <h2 className="text-xl text-yellow-400">Total Posts</h2>
              </div>
            </div>{/* posts */}
            <div className="bg-darkColor rounded-none flex items-center border-x-4 border-white tag-cut">
              <div className="card-body text-center">
                <h3 className="text-4xl text-white">{comments}</h3>
                <h2 className="text-xl text-yellow-400">Total comments</h2>
              </div>
            </div>{/* comments */}
            <div className="bg-darkColor rounded-none flex items-center  border-x-4 border-yellow-400 title-cut">
              <div className="card-body text-center">
                <h3 className="text-4xl text-white">{users}</h3>
                <h2 className="text-xl text-yellow-400">Total users</h2>
              </div>
            </div>{/* users */}

          </div>{/* grid */}

          {/* Add tag form */}
          <form
            className="mx-auto w-full bg-darkColor p-6 border-t-2 border-yellow-400"
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
              className="py-3 px-4 hover:text-slate-600 bg-yellow-400 font-medium outline-none mt-3 next-cut border-r-8 border-white hover:border-r-0 hover:border-l-8 transition-all duration-200"
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
