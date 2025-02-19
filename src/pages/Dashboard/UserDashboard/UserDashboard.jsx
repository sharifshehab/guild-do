import { useQuery } from "@tanstack/react-query";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import Loading from "../../../components/Loading";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const UserDashboard = () => {
    const { user } = useAuth();
     const axiosPublic = useAxiosPublic();

  const {
    data: myPosts = [],
    isLoading,
  } = useQuery({
    queryKey: ["userPosts", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/posts?email=${user?.email}`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const data = [
    { name: "Posts", value: myPosts.length },
    // { name: "Comments", value: myPosts.length },
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

  return (
    <>
      <Helmet>
        <title>GuildDo - User Dashboard</title>
      </Helmet>
      <Container>
        <section className="min-h-screen py-8">
          <SectionTitle title="My Dashboard"></SectionTitle>
          <div className="grid lg:grid-cols-3 justify-center items-center gap-5 mb-14">
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
                {/* <div className="badge badge-lg rounded-none bg-[#00c49f] py-2 font-medium">
                  Comment
                </div> */}
              </div>
            </div>
            {/* chart */}
            <div className="bg-darkColor rounded-none flex items-center">
              <div className="card-body text-center">
                <h3 className="text-4xl text-white">{myPosts.length}</h3>
                <h2 className="text-xl text-yellow-400">Total Posts</h2>
              </div>
            </div>
            {/* posts */}
            {/* <div className="bg-darkColor rounded-none flex items-center mt-10 lg:mt-0">
              <div className="card-body text-center">
                <h3 className="text-4xl text-white">{myPosts.length}</h3>
                <h2 className="text-xl text-yellow-400">Total comments</h2>
              </div>
            </div> */}
            {/* comments */}
          </div>
          {/* grid */}
        </section>
        <Toaster />
      </Container>
    </>
  );
};

export default UserDashboard;
