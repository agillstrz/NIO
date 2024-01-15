import { useMutation } from "react-query";
import axiosInstance from "../config/axiosInstance";
export default function UsePostData({ url, onSuccess, onError }) {
  return useMutation({
    mutationFn: async (body) => {
      const res = await axiosInstance.post(url, body);
      return res.data;
    },
    onSuccess,
    onError,
  });
}
