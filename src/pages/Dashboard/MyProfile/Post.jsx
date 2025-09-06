import usePostComments from "../../../API/usePostComments";
import formateDate from "../../../components/formateDate";

const Post = ({ post }) => {
    const { _id,postTitle, UpVote, DownVote, createdAt } = post || {};
    const date = formateDate(createdAt);
    const [postComments] = usePostComments(_id);

    return (
        <div className="border-b-2 p-5 space-y-1">
            <h2 className="text-white text-xl font-semibold capitalize">{postTitle}</h2>
            <p className="text-yellow-400">{date}</p>
            <div className="flex justify-start gap-3 text-yellow-400">
                <p className="text-text text-sm">comments: {postComments.length}</p>
                |
                <p className="text-text text-sm">votes - Up: {UpVote}, Down: {DownVote} </p>
            </div>
        </div>
    );
};

export default Post;