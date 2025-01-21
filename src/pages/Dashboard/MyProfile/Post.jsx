import usePostComments from "../../../API/usePostComments";
import formateDate from "../../../components/formateDate";

const Post = ({ post }) => {
    const { postTitle, UpVote, DownVote, createdAt } = post || {};
    const date = formateDate(createdAt);
    const [postComments] = usePostComments(postTitle);

    return (
        <div className="flex items-center justify-center flex-col">
            <h2 className="text-white text-xl font-semibold capitalize">{postTitle}</h2>
            <span className="text-yellow-400">{date}</span>
            <div className="flex items-center justify-center gap-2 text-yellow-400">
                <p className="text-text text-sm">comments: {postComments.length}</p>
                |
                <p className="text-text text-sm">votes - Up: {UpVote}, Down: {DownVote} </p>
            </div>
        </div>
    );
};

export default Post;