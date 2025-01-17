import { useQuery } from "@tanstack/react-query";
import TableRow from "./TableRow/TableRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: allUsers = [], refetch, isLoading } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    });


    if (isLoading) {
        return <div className='min-h-screen flex items-center justify-center'>
            <span className='text-primaryColor'>Loading...</span>
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }

    return (
        <>
            {/* title */}
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="text-[2rem] font-bold text-primary leading-[36px]">Manage Users</h1>
            </div>

            <div className="overflow-x-auto pb-32">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-sm dark:text-white">
                            <th>User name</th>
                            <th>User email</th>
                            <th>Action</th>
                            <th>Subscription Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {allUsers?.map(user => <TableRow key={user._id} user={user}></TableRow>) }
                        
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageUsers;