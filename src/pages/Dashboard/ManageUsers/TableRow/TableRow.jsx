import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useToast from "../../../../hooks/useToast";
import Swal from "sweetalert2";

const TableRow = ({ user, refetch }) => {
    const { _id, name, email, badge } = user || {}
    const { errorToast } = useToast();
    const axiosSecure = useAxiosSecure();

    const handleRole = (id) => {
        try {
            Swal.fire({
                title: "Are you sure you want make this user an Admin?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#ecc013",
                cancelButtonColor: "#2b3440",
                confirmButtonText: "Yes, make Admin!"
            }).then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.patch(`/users/admin/${id}`)
                        .then(res => {
                            if (res.data.modifiedCount > 0) {
                                refetch();
                                Swal.fire({
                                    title: "Admin!",
                                    text: `${name} is now an Admin`,
                                    icon: "success",
                                    confirmButtonColor: "#2b3440",
                                });
                            }
                        });
                }
            });
        } catch (error) {
            errorToast(`An error occurred while making ${name} an Admin!`);
        }
    }

    const handleDelete = () => {
        try {
            Swal.fire({
                title: "Are you sure you want to delete this user?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#2b3440",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`users/${email}`)
                        .then(res => {
                            if (res?.data?.deletedCount > 0) {
                                refetch();
                                Swal.fire({
                                    title: "Deleted!",
                                    text: `${name} has been deleted.`,
                                    icon: "success",
                                    confirmButtonColor: "#2b3440",
                                });
                            }
                        })
                }
            });
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

                        <button className='btn text-secondaryColor rounded-none border-2 border-white bg-yellow-400 hover:bg-yellow-500' onClick={() => handleRole(_id)}>Make admin</button>
                    }
                </td>{/* make admin */}
                <td>
                    <h4>{badge}</h4>
                </td>{/* badge */}
                <td>
                    <button onClick={handleDelete} className="btn text-white rounded-none border-2 border-yellow-400 bg-darkColor hover:text-darkColor">Delete</button>
                </td>{/* delete user */}
            </tr>
        </>
    );
};

export default TableRow;