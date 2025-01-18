import { format } from "date-fns";

const Post = ({ post }) => {
    const { postTitle, createdAt } = post || {};
    const postDate = format(new Date(createdAt), "yyyy-MM-dd");

    return (
        <div className="flex items-center justify-center flex-col">
            <h2 className=" text-[1.2rem] font-[600]">{postTitle}</h2>
            <span>{postDate}</span>
            <div className="flex items-center justify-center gap-2">
                <p className="text-text text-[0.9rem]">comments: 25</p>
                |
                <p className="text-text text-[0.9rem]">votes:3</p>
            </div>
        </div>
    );
};

export default Post;