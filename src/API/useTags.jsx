import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const useTags = () => {
    const axiosPublic = useAxiosPublic();
    const { data: allTags = [] } = useQuery({
        queryKey: ['allTags'],
        queryFn: async () => {
            const res = await axiosPublic.get('/tags');
            return res.data;
        }
    });

    return [allTags];
};

export default useTags;

