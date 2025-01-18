import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import usePostComments from "../../../../API/usePostComments";


const TableRow = ({ post }) => {
    const axiosPublic = useAxiosPublic();
    const { _id, postTitle, postDescription, postTag, UpVote, DownVote, authorName, authorImage, createdAt } = post || {}
    const postDate = format(new Date(createdAt), "yyyy-MM-dd, HH:mm a");

    // get specific post comments
    const [postComments] = usePostComments(postTitle)

    return (
        <tr>
            <td className="max-w-72">
                <div className="space-y-1">
                    <Link to={`/post/${_id}`} className="text-2xl font-semibold text-primaryColor">{postTitle}</Link>
                    <p>{postDescription.slice(0, 85)}...</p>
                </div>
            </td>
            <td>
                {postTag?.map((tag, idx) => <span key={idx}>{tag}{idx < postTag.length - 1 && ', '}</span>)}
            </td>
            <td>
                {postComments.length}
            </td>
            <td>
                <div>
                    <h4>Upvote: {UpVote}</h4>
                    <h4>Downvote: {DownVote}</h4>
                </div>
            </td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={authorImage}
                                alt="Avatar Tailwind CSS Component"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{authorName}</div>
                        <div className="text-sm opacity-50">{postDate}</div>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default TableRow;