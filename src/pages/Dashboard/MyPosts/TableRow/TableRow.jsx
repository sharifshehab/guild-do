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
        <tr className="text-yellow-400">
            <td>
                <h4 className="text-xl">{postTitle}</h4>
            </td>{/* name */}
            <td className="text-white">
                <h4>Up-vote: <span className="text-yellow-400">{UpVote}</span></h4>
                <h4>Down-vote: <span className="text-yellow-400">{DownVote}</span></h4>
            </td>{/* votes */}
            <td>
                <Link to={`/dashboard/comments/${postTitle}`} className="btn btn-sm rounded-none border-2 bg-yellow-400">See comments</Link>
            </td>{/* comments */}
            <td>
                <button onClick={() => deletePost(_id)} className="btn btn-sm rounded-none border-2 border-yellow-400 bg-darkColor text-white hover:text-darkColor">Delete post</button>
            </td>{/* delete */}
        </tr>
    );
};

export default TableRow;