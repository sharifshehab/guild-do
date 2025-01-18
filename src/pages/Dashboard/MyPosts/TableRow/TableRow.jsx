import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";


const TableRow = ({ post, refetch }) => {
    const { _id, postTitle, UpVote, DownVote } = post;
    
    const axiosPublic = useAxiosPublic();

    const deletePost = (id) => {
        Swal.fire({
            title: "Are you sure you want to delete this post?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#2b3440",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`posts/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res?.data?.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your post has been deleted.",
                                icon: "success",
                                confirmButtonColor: "#2b3440",
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    return (
        <tr className="dark:text-primaryColor">
            <td>
                <h4>{postTitle}</h4>
            </td>{/* name */}
            <td>
                <h4>Up-vote: {UpVote}</h4>
                <h4>Down-vote: {DownVote}</h4>
            </td>{/* votes */}
            <td>
                <Link to={`/dashboard/comments/${postTitle}`} className="btn btn-sm">See comments</Link>
            </td>{/* comments */}
            <td>
                <button onClick={() => deletePost(_id)} className="btn btn-sm">Delete post</button>
            </td>{/* delete */}
        </tr>
    );
};

export default TableRow;