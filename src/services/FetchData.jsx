import { useQuery } from "react-query";
import axiosInstance from "../config/axiosInstance";

export const FetchData = (url) => {
  return useQuery({
    queryFn: async () => {
      const res = await axiosInstance.get(url);
      return res.data;
    },
    queryKey: [url],
  });
};
