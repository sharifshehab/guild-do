import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleResult = ({ data }) => {
    const { _id, postTitle } = data || {}
    return (
        <div className="border-b border-yellow-400 space-y-4 pb-3">
            <div className="flex flex-row items-start lg:items-center justify-between gap-1">
                <h3 className="capitalize text-xl lg:text-2xl font-semibold text-white break-all">{postTitle}</h3>
                <Link to={`/post/${_id}`} className="text-xl lg:text-[22px] font-semibold text-yellow-400 capitalize"><FaExternalLinkAlt className="text-yellow-400" /></Link>
            </div>
        </div>
    );
};

export default SingleResult;