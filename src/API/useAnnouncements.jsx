import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const useAnnouncements = () => {

    const axiosPublic = useAxiosPublic();
    const { data: announcements = [], isLoading } = useQuery({
        queryKey: ['allAnnouncements'],
        queryFn: async () => {
            const res = await axiosPublic.get('/announcements')
            return res.data
        }
    });

    return [announcements, isLoading];
};

export default useAnnouncements;

