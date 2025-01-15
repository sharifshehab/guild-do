import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const useAllPost = () => {
    const axiosPublic = useAxiosPublic();
    const { data: allPosts = [], refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await axiosPublic.get('/posts')
            return res.data
        }
    });
    return [allPosts, refetch];
};

export default useAllPost;