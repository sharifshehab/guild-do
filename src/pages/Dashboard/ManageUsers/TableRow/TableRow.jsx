import { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useToast from "../../../../hooks/useToast";

const TableRow = ({ user, refetch }) => {
    const { _id, name, email, badge } = user || {}
    const { successToast, errorToast } = useToast();
    const axiosSecure = useAxiosSecure();

    const handleRole = async (id) => {
        try {
            const res = await axiosSecure.patch(`/users/admin/${id}`);
            if (res.data.modifiedCount > 0) {
                refetch();
                successToast(`${name} is now an Admin`);
            }
        } catch (error) {
            errorToast(`An error occurred while making ${name} an Admin!`);
        }
    }

    const handleDelete = async () => {
        try {
            axiosSecure.delete(`users/${email}`)
                .then(res => {
                    if (res?.data?.deletedCount > 0) {
                        refetch();
                        successToast(`${name} is deleted`);
                    }
                })
        } catch (error) {
            errorToast(`An error occurred while deleting ${name}!`);
        }
    }

    return (
        <>
            <tr className="dark:text-primaryColor">
                <td>
                    <h4>{name}</h4>
                </td>{/* name */}
                <td>
                    <h4>{email}</h4>
                </td>{ }
                <td>
                    {user?.role === "Admin" ? <span className="border-x p-2 w-full">Admin</span> :

                        <button className='btn' onClick={() => handleRole(_id)}>Make admin</button>
                    }
                </td>{/* make admin */}
                <td>
                    <h4>{badge}</h4>
                </td>{/* badge */}
                <td>
                    <button onClick={handleDelete} className="btn">Delete</button>
                </td>{/* delete user */}
            </tr>
            <Toaster />
        </>
    );
};

export default TableRow;