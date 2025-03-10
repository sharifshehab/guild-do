import { Link } from "react-router-dom";
import usePostComments from "../../../../API/usePostComments";
import formateDate from "../../../../components/formateDate";

const TableRow = ({ post }) => {
    const { _id, postTitle, postDescription, postTag, UpVote, DownVote, authorName, authorImage, createdAt } = post || {}
    const date = formateDate(createdAt, "yyyy-MM-dd, HH:mm a");

    // get specific post comments
    const [postComments] = usePostComments(_id);

    return (
        <tr>
            <td className="lg:px-5 py-5">
                <div className="space-y-1">
                    <Link to={`/post/${_id}`} className="text-xl lg:text-[22px] font-semibold text-yellow-400">{postTitle}</Link>
                    <p className="text-white">{postDescription.slice(0, 80)}...</p>
                </div>
            </td>
            <td>
                {postTag?.map((tag, idx) => <span key={idx} className="text-white">{tag}{idx < postTag.length - 1 && (<span className="text-yellow-400 text-xl">, </span>)}</span>)}
            </td>
            <td className="text-center text-yellow-400">
                {postComments.length}
            </td>
            <td>
                <div className="text-white">
                    <h4>Up Vote: <span className="text-yellow-400">{UpVote}</span></h4>
                    <h4>Down Vote: <span className="text-yellow-400">{DownVote}</span></h4>
                </div>
            </td>
            <td>
                <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={authorImage}
                                alt="Avatar Tailwind CSS Component"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="font-bold text-white">{authorName}</div>
                        <div className="text-sm text-yellow-400">{date}</div>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default TableRow;