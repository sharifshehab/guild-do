import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const useAnnouncements = (postLimit) => {
    const axiosPublic = useAxiosPublic();
    
    const { data: announcements = [], isLoading } = useQuery({
        queryKey: ['allAnnouncements', postLimit],
        queryFn: async () => {
            const res = await axiosPublic.get(`/announcements?postLimit=${postLimit}`)
            return res.data
        }
    });

    return [announcements, isLoading];
};

export default useAnnouncements;

