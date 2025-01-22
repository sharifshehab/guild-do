import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const usePostComments = (id) => {
    const axiosPublic = useAxiosPublic();
    const { data: postComments = [] } = useQuery({
        queryKey: ['postComments', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/comments?id=${id}`);
            return res.data;
        }
    });
    return [postComments];
};

export default usePostComments;

