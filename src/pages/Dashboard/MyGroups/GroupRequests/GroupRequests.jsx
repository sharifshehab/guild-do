import { Link, useLocation } from "react-router-dom";
import TableRow from "./TableRow/TableRow";
import { Toaster } from "react-hot-toast";
import { IoMdArrowBack } from "react-icons/io";
import Container from "../../../../components/Container";

const GroupRequests = () => {
    const location = useLocation();
    const { requests, groupName, groupId } = location.state || {}
    return (
        <Container>
            <section className="min-h-screen pt-8">
                {/* back button */}
                <div className="bg-white inline-flex px-4 mb-5 ms-3 hover:opacity-90 border-4 border-yellow-400">
                    <Link
                        to={"/dashboard/my-groups"}
                        className=" text-darkColor py-2 hover:opacity-95 flex items-center justify-start gap-2"
                    >
                        {" "}
                        <IoMdArrowBack size={20} />
                        Go Back
                    </Link>
                </div>

                <h2 className=" text-center text-3xl text-yellow-400 font-semibold underline underline-offset-8 decoration-white mb-5">Group Name: {groupName}</h2>
                <h4 className="text-xl text-yellow-400 font-semibold pl-3">Total Requests: {requests.length}</h4>
                <div className="overflow-x-auto pb-32">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-sm dark:text-white">
                                <th>Name</th>
                                <th>Email</th>
                                <th>Request Status</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {requests?.length === 0 ? <p className="text-white p-5">No requests found!</p> :
                                requests?.map((request, idx) => <TableRow key={idx} request={request} groupId={groupId}></TableRow>)}
                        </tbody>
                    </table>
                </div>
                <Toaster />
            </section>
        </Container>
    );
};

export default GroupRequests;