import { useMutation } from "react-query";
import axiosInstance from "../config/axiosInstance";
export default function UseDeleteData({ url, onSuccess }) {
  return useMutation({
    mutationFn: async (id) => {
      const res = await axiosInstance.delete(`${url}/${id}`);
      return res.data;
    },
    onSuccess,
    onError: (err) => console.log(err),
  });
}
