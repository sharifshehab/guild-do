import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const usePostComments = (title) => {
    const axiosPublic = useAxiosPublic();
    const { data: postComments = [] } = useQuery({
        queryKey: ['postComments', title],
        queryFn: async () => {
            const res = await axiosPublic.get(`/comments?title=${title}`);
            return res.data;
        }
    });

    return [postComments];
};

export default usePostComments;

